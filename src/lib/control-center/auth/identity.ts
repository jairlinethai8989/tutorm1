import { RoleBinding } from './types';

/**
 * Identity Binding Allowlist Resolver
 * Resolves permissions strictly for matching (issuer, subject) pairs.
 * Default is strict DENY ALL.
 */
export function resolveIdentityPermissions(issuer: string, subject: string): RoleBinding | null {
  const raw = process.env.CONTROL_CENTER_USER_MAPPINGS;
  if (!raw || raw.trim().length === 0) {
    return null; // Strict Default Deny
  }

  try {
    const mappings: RoleBinding[] = JSON.parse(raw);
    if (!Array.isArray(mappings)) return null;

    const match = mappings.find((m) => m.issuer === issuer && m.subject === subject);
    return match || null;
  } catch (e) {
    console.error('Failed to parse CONTROL_CENTER_USER_MAPPINGS; failing closed', e);
    return null;
  }
}
