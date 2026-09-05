import { NextRequest, NextResponse } from 'next/server';
import { enforceServerApiAuth } from '@/lib/control-center/auth/guard';
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

  // 3. Fetch from adapters concurrently
  const [ga4Data, vercelData] = await Promise.all([
    fetchGA4TelemetryMetrics(timeframe),
    fetchVercelWebMetrics(timeframe),
  ]);

  const mockExamCompletionRate =
    ga4Data.examStarts > 0
      ? Math.round((ga4Data.examCompletes / ga4Data.examStarts) * 100)
      : 0;

  const payload: AggregateTelemetryResponse = {
    timeframe,
    generatedAt: new Date().toISOString(),
    dataSources: {
      ga4: ga4Data.source,
      vercel: vercelData.source,
    },
    kpis: {
      totalMockExamStarts: ga4Data.examStarts,
      totalMockExamCompletes: ga4Data.examCompletes,
      mockExamCompletionRate,
      totalDiagnosticViews: ga4Data.diagnosticViews,
      totalPracticeStarts: ga4Data.practiceStarts,
      totalPracticeMilestones: ga4Data.practiceMilestones,
      totalUniqueVisitors: vercelData.uniqueVisitors,
      totalPageViews: vercelData.pageViews,
    },
    funnels: ga4Data.funnels,
    trafficChannels: ga4Data.trafficChannels,
    subjectBreakdown: ga4Data.subjectBreakdown,
  };

  return new NextResponse(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      // Private 5-minute SWR caching to protect telemetry aggregation
      'Cache-Control': 'private, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
