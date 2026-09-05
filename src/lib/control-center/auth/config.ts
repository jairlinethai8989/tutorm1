/**
 * Fail-Closed Environment Configuration Validator
 */

export function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value || value.trim().length === 0) {
    throw new Error(`FATAL: Missing required environment variable: ${key}. Failing closed.`);
  }
  return value.trim();
}

export function getGoogleOidcConfig() {
  return {
    clientId: requireEnv('GOOGLE_OIDC_CLIENT_ID'),
    redirectUri: requireEnv('GOOGLE_OIDC_REDIRECT_URI'),
    clientSecret: requireEnv('GOOGLE_OIDC_CLIENT_SECRET'),
  };
}
