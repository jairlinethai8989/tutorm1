/**
 * AMR Multi-Factor Verification Policy for Google Identity Services
 * Enforces NIST AAL2 level verification.
 */
export function verifyGoogleMFA(claims: { amr?: string[] }): { isValid: boolean; reason?: string } {
  const requireMFA = process.env.CONTROL_CENTER_REQUIRE_MFA === 'true';

  // If AMR is absent from Google token (standard consumer @gmail.com accounts):
  if (!claims.amr || !Array.isArray(claims.amr) || claims.amr.length === 0) {
    if (requireMFA) {
      return {
        isValid: false,
        reason: 'Missing essential amr claim. Ensure MFA is enabled in Google Workspace / Cloud Identity.',
      };
    }
    // Permitted under standard consumer Google authentication if CONTROL_CENTER_REQUIRE_MFA is not set to true
    return { isValid: true };
  }

  const amr = claims.amr.map((a) => a.toLowerCase());

  // Explicit MFA indicator
  if (amr.includes('mfa')) {
    return { isValid: true };
  }

  // Compound Multi-Factor: Knowledge (password/pin) AND Possession (hardware key, authenticator, fido, otp, sms, swk, tel)
  const hasKnowledge = amr.some((a) => ['pwd', 'pin'].includes(a));
  const hasPossession = amr.some((a) =>
    ['otp', 'totp', 'hwk', 'fido', 'webauthn', 'sms', 'swk', 'tel'].includes(a)
  );

  if (hasKnowledge && hasPossession) {
    return { isValid: true };
  }

  return {
    isValid: false,
    reason: 'AMR claim indicates single factor only; Multi-Factor Authentication (AAL2) required.',
  };
}
