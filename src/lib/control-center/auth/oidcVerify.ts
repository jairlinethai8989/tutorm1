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
  expectedNonce: string
): Promise<GoogleVerifiedClaims> {
  const { clientId } = getGoogleOidcConfig();

  // 1. Cryptographic Signature & Standard Claims Verification (RS256 only)
  const { payload } = await jwtVerify(rawIdToken, GOOGLE_JWKS, {
    issuer: 'https://accounts.google.com',
    audience: clientId,
    algorithms: ['RS256'],
    clockTolerance: '30s',
  });

  const claims = payload as unknown as GoogleVerifiedClaims;

  // 2. Nonce Verification (Replay Attack Prevention)
  if (!claims.nonce || claims.nonce !== expectedNonce) {
    throw new Error('OIDC verification failed: Mismatched or missing nonce claim');
  }

  // 3. auth_time existence and sanity check
  if (!claims.auth_time || typeof claims.auth_time !== 'number') {
    throw new Error('OIDC verification failed: Missing essential auth_time claim');
  }
  const currentEpoch = Math.floor(Date.now() / 1000);
  if (claims.auth_time > currentEpoch + 30) {
    throw new Error('OIDC verification failed: auth_time cannot be in the future');
  }

  return claims;
}
