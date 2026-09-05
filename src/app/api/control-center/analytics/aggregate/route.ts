import { NextRequest, NextResponse } from 'next/server';
import { enforceServerApiAuth } from '@/lib/control-center/auth/guard';
import { getSessionStore } from '@/lib/control-center/auth/sessionStore';
import { fetchGA4TelemetryMetrics } from '@/lib/control-center/aggregation/ga4-adapter';
import { fetchVercelWebMetrics } from '@/lib/control-center/aggregation/vercel-adapter';
import { AggregateTelemetryResponse } from '@/lib/control-center/aggregation/types';

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

  const env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'local';
  const propertyId = process.env.GA4_PROPERTY_ID || 'none';
  const projectId = process.env.VERCEL_PROJECT_ID || 'none';
  const cacheKey = `tutor_m1_telemetry_cache:${env}:${propertyId}:${projectId}:${timeframe}`;

  const store = getSessionStore();

  // 3. Check Server-Side Redis Cache (Hits avoid upstream quota & rate limits)
  const cached = await store.getCachedTelemetry(cacheKey);
  if (cached) {
    return new NextResponse(cached, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'private, s-maxage=300, stale-while-revalidate=600',
      },
    });
  }

  // 4. Fetch from live adapters concurrently
  const [ga4Data, vercelData] = await Promise.all([
    fetchGA4TelemetryMetrics(timeframe),
    fetchVercelWebMetrics(timeframe),
  ]);

  const isProduction = process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true';

  // 5. Fail-Closed HTTP 503 if both sources are unavailable in production
  if (
    isProduction &&
    ga4Data.status === 'DATA_SOURCE_UNAVAILABLE' &&
    vercelData.status === 'DATA_SOURCE_UNAVAILABLE'
  ) {
    return NextResponse.json(
      {
        status: 'DATA_SOURCE_UNAVAILABLE',
        error: 'Telemetry data sources are unconfigured or unavailable in production',
        details: { ga4: ga4Data.error, vercel: vercelData.error },
      },
      { status: 503 }
    );
  }

  const payload: AggregateTelemetryResponse = {
    timeframe,
    generatedAt: new Date().toISOString(),
    dataSources: {
      ga4: ga4Data.source,
      vercel: vercelData.source,
    },
    progression: ga4Data.progression,
    webMetrics: {
      summedDailyVisitors: vercelData.summedDailyVisitors,
      pageViews: vercelData.pageViews,
    },
    trafficChannels: ga4Data.trafficChannels,
    subjectBreakdown: ga4Data.subjectBreakdown,
  };

  const jsonString = JSON.stringify(payload);

  // 6. Strict Dual-READY Cache Policy: Only cache for 300s when BOTH are READY
  if (ga4Data.status === 'READY' && vercelData.status === 'READY') {
    await store.setCachedTelemetry(cacheKey, jsonString, 300);
  }

  return new NextResponse(jsonString, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
