import { NextRequest, NextResponse } from 'next/server';
import { getSessionStore } from '@/lib/control-center/auth/sessionStore';
import { SESSION_COOKIE_NAME } from '@/lib/control-center/auth/guard';
import { createAuditRecord } from '@/lib/control-center/auth/audit';

export const dynamic = 'force-dynamic';

async function performLogout(req: NextRequest) {
  const sessionId = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const store = getSessionStore();

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || '';

  if (sessionId) {
    const session = await store.getSession(sessionId);
    if (session) {
      await store.appendAuditRecord(
        createAuditRecord({
          pseudonymousActorId: session.actorId,
          permissionTested: 'aggregate:read',
          decision: 'ALLOW',
          resource: '/api/control-center/auth/logout',
          ip: clientIp,
          userAgent,
        })
      );
    }
    await store.revokeSession(sessionId);
  }

  const loginUrl = new URL('/control-center/login?status=logged_out', req.url);
  const response = NextResponse.redirect(loginUrl, { status: 307 });

  response.cookies.delete(SESSION_COOKIE_NAME);
  return response;
}

export async function GET(req: NextRequest) {
  return performLogout(req);
}

export async function POST(req: NextRequest) {
  return performLogout(req);
}
