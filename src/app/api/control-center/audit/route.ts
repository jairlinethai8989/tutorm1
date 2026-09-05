import { NextRequest, NextResponse } from 'next/server';
import { enforceServerApiAuth } from '@/lib/control-center/auth/guard';
import { getSessionStore } from '@/lib/control-center/auth/sessionStore';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  // Requires audit:read permission (telemetry_admin only)
  const auth = await enforceServerApiAuth(req, 'audit:read');
  if (!auth.authorized) {
    return auth.response;
  }

  const { searchParams } = req.nextUrl;
  const days = Math.min(30, Math.max(1, parseInt(searchParams.get('days') || '7', 10)));

  const store = getSessionStore();
  const records = await store.getRecentAuditRecords(days);

  return NextResponse.json({
    days,
    count: records.length,
    records,
  });
}
