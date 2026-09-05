import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSessionStore } from './sessionStore';
import { isSessionValid } from './session';
import { ControlCenterPermission, ServerSessionRecord } from './types';
import { createAuditRecord, sanitizeAuditResource } from './audit';

export const SESSION_COOKIE_NAME = 'tutor_m1_cc_session';

/**
 * Enforce authorization in Next.js Server Components.
 * Redirects to /control-center/login if unauthorized.
 */
export async function enforceServerPageAuth(
  requiredPermission: ControlCenterPermission = 'aggregate:read'
): Promise<ServerSessionRecord> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionCookie) {
    redirect('/control-center/login');
  }

  const store = getSessionStore();
  const session = await store.getSession(sessionCookie);

  if (!session) {
    redirect('/control-center/login');
  }

  const validity = isSessionValid(session);
  if (!validity.valid) {
    await store.revokeSession(sessionCookie);
    redirect('/control-center/login');
  }

  // Permission check
  if (!session.permissions.includes(requiredPermission)) {
    // Record audit failure
    await store.appendAuditRecord(
      createAuditRecord({
        pseudonymousActorId: session.actorId,
        permissionTested: requiredPermission,
        decision: 'DENY',
        resource: 'page_access',
        ip: '127.0.0.1',
      })
    );
    redirect('/control-center/login?error=permission_denied');
  }

  // Update sliding idle activity
  await store.touchSession(sessionCookie);

  return session;
}

export type ApiAuthResult =
  | { authorized: true; session: ServerSessionRecord; response?: never }
  | { authorized: false; response: Response; session?: never };

/**
 * Enforce authorization in Route Handlers (/api/control-center/*).
 * Returns JSON 401/403 responses (never redirects).
 */
export async function enforceServerApiAuth(
  req: Request,
  requiredPermission: ControlCenterPermission = 'aggregate:read'
): Promise<ApiAuthResult> {
  const cookieHeader = req.headers.get('cookie') || '';
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${SESSION_COOKIE_NAME}=([^;]+)`));
  const sessionId = match ? match[1] : null;

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || '';

  if (!sessionId) {
    return {
      authorized: false,
      response: new Response(
        JSON.stringify({ error: 'UNAUTHORIZED', code: 'AUTH_REQUIRED', message: 'Authentication required' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      ),
    };
  }

  const store = getSessionStore();
  const session = await store.getSession(sessionId);

  if (!session) {
    return {
      authorized: false,
      response: new Response(
        JSON.stringify({ error: 'UNAUTHORIZED', code: 'SESSION_NOT_FOUND', message: 'Invalid or revoked session' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      ),
    };
  }

  const validity = isSessionValid(session);
  if (!validity.valid) {
    await store.revokeSession(sessionId);
    return {
      authorized: false,
      response: new Response(
        JSON.stringify({ error: 'UNAUTHORIZED', code: 'SESSION_EXPIRED', message: validity.reason }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      ),
    };
  }

  if (!session.permissions.includes(requiredPermission)) {
    await store.appendAuditRecord(
      createAuditRecord({
        pseudonymousActorId: session.actorId,
        permissionTested: requiredPermission,
        decision: 'DENY',
        resource: sanitizeAuditResource(req.url),
        ip: clientIp,
        userAgent,
      })
    );

    return {
      authorized: false,
      response: new Response(
        JSON.stringify({ error: 'FORBIDDEN', code: 'INSUFFICIENT_PERMISSIONS', message: 'Permission denied' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      ),
    };
  }

  await store.touchSession(sessionId);

  return { authorized: true, session };
}
