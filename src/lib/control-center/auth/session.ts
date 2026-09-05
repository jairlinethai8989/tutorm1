import crypto from 'crypto';
import { ServerSessionRecord } from './types';
import { getSessionStore } from './sessionStore';

const IDLE_TIMEOUT_MS = 15 * 60 * 1000;          // 15 minutes sliding idle
const ABSOLUTE_LIFETIME_MS = 8 * 60 * 60 * 1000;  // 8 hours hard maximum

export function isSessionValid(session: ServerSessionRecord): { valid: boolean; reason?: string } {
  const now = Date.now();

  // 1. Absolute Maximum Lifetime Check
  if (now >= session.expiresAt || now - session.createdAt >= ABSOLUTE_LIFETIME_MS) {
    return { valid: false, reason: 'Session reached 8-hour absolute maximum lifetime' };
  }

  // 2. Sliding Idle Inactivity Check
  if (now - session.lastActiveAt >= IDLE_TIMEOUT_MS) {
    return { valid: false, reason: 'Session expired due to 15-minute idle inactivity' };
  }

  return { valid: true };
}

export async function createServerSession(
  actorId: string,
  role: 'telemetry_viewer' | 'telemetry_admin',
  permissions: ('aggregate:read' | 'aggregate:export' | 'audit:read')[]
): Promise<ServerSessionRecord> {
  const store = getSessionStore();
  const now = Date.now();
  const sessionId = 'cc_sess_' + crypto.randomBytes(32).toString('base64url');

  const session: ServerSessionRecord = {
    sessionId,
    actorId,
    role,
    permissions,
    createdAt: now,
    lastActiveAt: now,
    expiresAt: now + ABSOLUTE_LIFETIME_MS,
  };

  await store.createSession(session);
  return session;
}
