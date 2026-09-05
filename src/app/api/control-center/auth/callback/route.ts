import { NextRequest, NextResponse } from 'next/server';
import { getGoogleOidcConfig } from '@/lib/control-center/auth/config';
import { getSessionStore } from '@/lib/control-center/auth/sessionStore';
import { verifyGoogleIdTokenCryptographically } from '@/lib/control-center/auth/oidcVerify';
import { verifyGoogleMFA } from '@/lib/control-center/auth/googlePolicy';
import { resolveIdentityPermissions } from '@/lib/control-center/auth/identity';
import { derivePseudonymousActorId, createAuditRecord } from '@/lib/control-center/auth/audit';
import { createServerSession } from '@/lib/control-center/auth/session';
import { SESSION_COOKIE_NAME } from '@/lib/control-center/auth/guard';

export const dynamic = 'force-dynamic';

interface GoogleTokenResponse {
  access_token: string;
  id_token: string;
  expires_in: number;
  token_type: string;
  refresh_token?: string;
  scope?: string;
}

async function exchangeCodeWithGoogle(code: string, codeVerifier: string): Promise<GoogleTokenResponse> {
  const { clientId, redirectUri, clientSecret } = getGoogleOidcConfig();

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code,
    code_verifier: codeVerifier,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
  });

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!res.ok) {
    // Redact secrets in logs
    console.error(`[OIDC Token Exchange] Request failed with HTTP ${res.status}`);
    throw new Error(`Google token exchange failed with status ${res.status}`);
  }

  return res.json();
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const code = url.searchParams.get('code');
  const incomingState = url.searchParams.get('state');
  const errorParam = url.searchParams.get('error');
  const txnCookie = req.cookies.get('tutor_m1_oidc_txn')?.value;

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || '';

  if (errorParam) {
    console.warn(`[OIDC Callback] Google reported error: ${errorParam}`);
    return NextResponse.redirect(
      new URL(`/control-center/login?error=oauth_${encodeURIComponent(errorParam)}`, req.url)
    );
  }

  if (!code || !incomingState || !txnCookie) {
    return NextResponse.json(
      { error: 'BAD_REQUEST', message: 'Missing required OIDC parameters or transaction cookie' },
      { status: 400 }
    );
  }

  const store = getSessionStore();

  // 1. Atomic Single-Use Consumption via Redis GETDEL
  const handshake = await store.getdelHandshake(txnCookie);
  if (!handshake) {
    return NextResponse.json(
      {
        error: 'CSRF_OR_REPLAY_DETECTED',
        message: 'Transaction already consumed, invalid, or expired',
      },
      { status: 400 }
    );
  }

  // 2. Validate state matching consumed transaction
  if (incomingState !== handshake.state) {
    return NextResponse.json(
      { error: 'STATE_MISMATCH', message: 'Invalid CSRF state parameter' },
      { status: 400 }
    );
  }

  // 3. Confidential Code Exchange
  let tokens: GoogleTokenResponse;
  try {
    tokens = await exchangeCodeWithGoogle(code, handshake.codeVerifier);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Token exchange failure';
    return NextResponse.json({ error: 'TOKEN_EXCHANGE_FAILED', message: msg }, { status: 502 });
  }

  // 4. Cryptographic signature & claims verification (RS256 JWKS)
  let claims;
  try {
    claims = await verifyGoogleIdTokenCryptographically(tokens.id_token, handshake.nonce);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Invalid token signature or claims';
    return NextResponse.json({ error: 'INVALID_ID_TOKEN', message: msg }, { status: 401 });
  }

  // 5. AMR Multi-Factor Verification (NIST AAL2)
  const mfaResult = verifyGoogleMFA(claims);
  if (!mfaResult.isValid) {
    return NextResponse.json(
      { error: 'MFA_REQUIRED', message: mfaResult.reason || 'MFA validation failed' },
      { status: 403 }
    );
  }

  // 6. Identity Binding Allowlist Check
  const roleBinding = resolveIdentityPermissions(claims.iss, claims.sub);
  if (!roleBinding) {
    const deniedActorId = derivePseudonymousActorId(claims.iss, claims.sub);
    await store.appendAuditRecord(
      createAuditRecord({
        pseudonymousActorId: deniedActorId,
        permissionTested: 'aggregate:read',
        decision: 'DENY',
        resource: '/api/control-center/auth/callback',
        ip: clientIp,
        userAgent,
      })
    );

    return NextResponse.redirect(
      new URL('/control-center/login?error=identity_not_authorized', req.url)
    );
  }

  // 7. Derive Pseudonymous Actor ID & Create Dual Lifetime Session
  const actorId = derivePseudonymousActorId(claims.iss, claims.sub);
  const session = await createServerSession(actorId, roleBinding.role, roleBinding.permissions);

  // 8. Record Successful Login Audit Record
  await store.appendAuditRecord(
    createAuditRecord({
      pseudonymousActorId: actorId,
      permissionTested: 'aggregate:read',
      decision: 'ALLOW',
      resource: '/api/control-center/auth/callback',
      ip: clientIp,
      userAgent,
    })
  );

  // 9. Return Redirect to Control Center with Session Cookie (Path=/)
  const isSecure = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV !== undefined;
  const redirectUrl = new URL('/control-center', req.url);
  const response = NextResponse.redirect(redirectUrl, { status: 307 });

  response.cookies.set(SESSION_COOKIE_NAME, session.sessionId, {
    path: '/',
    httpOnly: true,
    secure: isSecure,
    sameSite: 'lax',
    maxAge: 28800, // 8 hours absolute
  });

  // Clear the handshake cookie
  response.cookies.delete('tutor_m1_oidc_txn');

  return response;
}
