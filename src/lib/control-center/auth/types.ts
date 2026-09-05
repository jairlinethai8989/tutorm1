/**
 * Tutor M.1 Control Center Security & Identity Types (Phase C)
 * Enforces OWASP Least Privilege, RBAC/ABAC, and Zero-PII principles.
 */

export type ControlCenterRole = 'telemetry_viewer' | 'telemetry_admin';

export type ControlCenterPermission =
  | 'aggregate:read'
  | 'aggregate:export'
  | 'audit:read';

export interface RoleBinding {
  issuer: string;
  subject: string;
  role: ControlCenterRole;
  permissions: ControlCenterPermission[];
}

export interface ServerSessionRecord {
  sessionId: string;
  actorId: string; // Pseudonymous derived ID
  role: ControlCenterRole;
  permissions: ControlCenterPermission[];
  createdAt: number;    // Epoch ms
  lastActiveAt: number; // Epoch ms (sliding idle check)
  expiresAt: number;    // Hard 8-hour cap (createdAt + 28,800,000)
}

export interface ControlCenterAuditRecord {
  eventId: string;
  pseudonymousActorId: string;
  permissionTested: ControlCenterPermission;
  decision: 'ALLOW' | 'DENY';
  resource: string;
  timestamp: string; // ISO 8601 UTC
  ipHashCoarse: string;
  clientCategory: 'desktop' | 'mobile' | 'tablet' | 'unknown';
}

export interface OIDCHandshakeState {
  state: string;
  nonce: string;
  codeVerifier: string;
  createdAt: number;
}
