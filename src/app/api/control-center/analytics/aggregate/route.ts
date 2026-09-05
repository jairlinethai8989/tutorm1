import { NextRequest, NextResponse } from 'next/server';
import { enforceServerApiAuth } from '@/lib/control-center/auth/guard';
import { getAggregatedTelemetry } from '@/lib/control-center/aggregation/service';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  // 1. Enforce Server API Authentication & Authorization
  const auth = await enforceServerApiAuth(req, 'aggregate:read');
  if (!auth.authorized) {
    return auth.response;
  }

  // 2. Parse query parameters
  const { searchParams } = req.nextUrl;
  const rawTimeframe = searchParams.get('timeframe') || '7d';
  const timeframe: '7d' | '30d' | '90d' = ['7d', '30d', '90d'].includes(rawTimeframe)
    ? (rawTimeframe as '7d' | '30d' | '90d')
    : '7d';

  // 3. Delegate to unified aggregation service (handles 300s cache & dual-ready check)
  const result = await getAggregatedTelemetry(timeframe);

  // 4. Fail-Closed HTTP 503 if both sources are unavailable in production
  if (result.status === 'DATA_SOURCE_UNAVAILABLE') {
    return NextResponse.json(
      {
        status: 'DATA_SOURCE_UNAVAILABLE',
        error: 'Telemetry data sources are unconfigured or unavailable in production',
        details: { ga4: result.ga4.error, vercel: result.vercel.error },
      },
      { status: 503 }
    );
  }

  return new NextResponse(JSON.stringify(result.payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
