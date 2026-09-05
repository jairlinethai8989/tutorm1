import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getGoogleOidcConfig } from '@/lib/control-center/auth/config';
import { getSessionStore } from '@/lib/control-center/auth/sessionStore';
import { OIDCHandshakeState } from '@/lib/control-center/auth/types';

export const dynamic = 'force-dynamic';

function generatePkce() {
  const codeVerifier = crypto.randomBytes(32).toString('base64url');
  const codeChallenge = crypto
    .createHash('sha256')
    .update(codeVerifier)
    .digest('base64url');
  return { codeVerifier, codeChallenge };
}

function buildGoogleAuthUrl(state: string, nonce: string, codeChallenge: string): string {
  const { clientId, redirectUri } = getGoogleOidcConfig();

  const claimsParam = JSON.stringify({
    id_token: {
      amr: { essential: true },
      auth_time: { essential: true },
    },
  });

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    nonce,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
    prompt: 'select_account',
    claims: claimsParam,
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

export async function GET() {
  try {
    const { codeVerifier, codeChallenge } = generatePkce();
    const state = crypto.randomBytes(24).toString('base64url');
    const nonce = crypto.randomBytes(24).toString('base64url');
    const txnId = 'txn_' + crypto.randomBytes(24).toString('base64url');

    const handshakeState: OIDCHandshakeState = {
      state,
      nonce,
      codeVerifier,
      createdAt: Date.now(),
    };

    const store = getSessionStore();
    await store.saveHandshake(txnId, handshakeState);

    const authUrl = buildGoogleAuthUrl(state, nonce, codeChallenge);
    const response = NextResponse.redirect(authUrl, { status: 307 });

    const isSecure = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV !== undefined;
    response.cookies.set('tutor_m1_oidc_txn', txnId, {
      path: '/',
      httpOnly: true,
      secure: isSecure,
      sameSite: 'lax',
      maxAge: 600, // 10 minutes
    });

    return response;
  } catch (error) {
    console.error('OIDC Login initialization failed:', error);
    const msg = error instanceof Error ? error.message : 'Configuration error';
    return NextResponse.json(
      { error: 'CONFIG_ERROR', message: msg },
      { status: 500 }
    );
  }
}
