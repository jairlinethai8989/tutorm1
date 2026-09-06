import { createRemoteJWKSet, jwtVerify } from 'jose';
import { getGoogleOidcConfig } from './config';

const GOOGLE_JWKS = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));

export interface GoogleVerifiedClaims {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  nonce?: string;
  auth_time?: number;
  amr?: string[];
  email?: string;
}

export async function verifyGoogleIdTokenCryptographically(
  rawIdToken: string,
  expectedNonce: string,
  jwksOverride?: Parameters<typeof jwtVerify>[1]
): Promise<GoogleVerifiedClaims> {
  const { clientId } = getGoogleOidcConfig();

  // 1. Cryptographic Signature & Standard Claims Verification (RS256 only)
  const keySource = jwksOverride || GOOGLE_JWKS;
  const { payload } = await jwtVerify(rawIdToken, keySource, {
    issuer: 'https://accounts.google.com',
    audience: clientId,
    algorithms: ['RS256'],
    requiredClaims: ['iss', 'sub', 'aud', 'exp', 'iat'],
    clockTolerance: '30s',
  });

  const claims = payload as unknown as GoogleVerifiedClaims;

  // 2. Explicit Sub and Timestamps Validation
  if (typeof claims.sub !== 'string' || claims.sub.trim().length === 0) {
    throw new Error('OIDC verification failed: Non-empty sub claim is required');
  }

  if (typeof claims.exp !== 'number' || typeof claims.iat !== 'number' || !Number.isInteger(claims.exp) || !Number.isInteger(claims.iat)) {
    throw new Error('OIDC verification failed: exp and iat must be valid integer timestamps');
  }

  if (claims.exp <= claims.iat) {
    throw new Error('OIDC verification failed: exp timestamp must be greater than iat timestamp');
  }

  // 3. Nonce Verification (Replay Attack Prevention)
  if (!claims.nonce || claims.nonce !== expectedNonce) {
    throw new Error('OIDC verification failed: Mismatched or missing nonce claim');
  }

  // 4. auth_time existence and sanity check (fallback to iat if omitted by Google IdP)
  const effectiveAuthTime = typeof claims.auth_time === 'number' ? claims.auth_time : claims.iat;
  const currentEpoch = Math.floor(Date.now() / 1000);
  if (effectiveAuthTime > currentEpoch + 30) {
    throw new Error('OIDC verification failed: auth_time cannot be in the future');
  }

  // 5. AMR structure validation
  if (claims.amr !== undefined) {
    if (!Array.isArray(claims.amr) || claims.amr.some((a) => typeof a !== 'string' || a.trim().length === 0)) {
      throw new Error('OIDC verification failed: amr claim must be an array of non-empty strings');
    }
  }

  return claims;
}
