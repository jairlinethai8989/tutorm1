import { getSessionStore } from '@/lib/control-center/auth/sessionStore';
import { fetchGA4TelemetryMetrics, GA4FetchResult } from './ga4-adapter';
import { fetchVercelWebMetrics, VercelMetricsResult } from './vercel-adapter';
import { AggregateTelemetryResponse } from './types';

export interface AggregatedTelemetryResult {
  source: 'live' | 'synthetic_fallback' | 'unavailable';
  status: 'READY' | 'DATA_SOURCE_UNAVAILABLE';
  payload: AggregateTelemetryResponse;
  ga4: GA4FetchResult;
  vercel: VercelMetricsResult;
}

/**
 * Single Unified Aggregation Service with 300s Redis Cache
 * Shared across Route Handler (/api/control-center/analytics/aggregate) and Server Components
 */
export async function getAggregatedTelemetry(
  timeframe: '7d' | '30d' | '90d' = '7d'
): Promise<AggregatedTelemetryResult> {
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'local';
  const propertyId = process.env.GA4_PROPERTY_ID || 'none';
  const projectId = process.env.VERCEL_PROJECT_ID || 'none';
  const cacheKey = `tutor_m1_telemetry_cache:${env}:${propertyId}:${projectId}:${timeframe}`;

  const store = getSessionStore();

  // 1. Check Server-Side Redis Cache (Avoid upstream API quota exhaustion)
  const cached = await store.getCachedTelemetry(cacheKey);
  if (cached) {
    try {
      const payload = JSON.parse(cached) as AggregateTelemetryResponse;
      return {
        source: payload.dataSources.ga4 === 'live' && payload.dataSources.vercel === 'live' ? 'live' : 'synthetic_fallback',
        status: 'READY',
        payload,
        ga4: {
          source: payload.dataSources.ga4,
          status: 'READY',
          progression: payload.progression,
          trafficChannels: payload.trafficChannels,
          subjectBreakdown: payload.subjectBreakdown,
        },
        vercel: {
          source: payload.dataSources.vercel,
          status: 'READY',
          summedDailyVisitors: payload.webMetrics.summedDailyVisitors,
          pageViews: payload.webMetrics.pageViews,
        },
      };
    } catch {
      // Cache corruption fallback: continue to fresh fetch
    }
  }

  // 2. Fetch fresh metrics concurrently
  const [ga4Data, vercelData] = await Promise.all([
    fetchGA4TelemetryMetrics(timeframe),
    fetchVercelWebMetrics(timeframe),
  ]);

  const isProduction = process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true';
  const isBothUnavailable =
    ga4Data.status === 'DATA_SOURCE_UNAVAILABLE' &&
    vercelData.status === 'DATA_SOURCE_UNAVAILABLE';

  const overallStatus: 'READY' | 'DATA_SOURCE_UNAVAILABLE' =
    isProduction && isBothUnavailable ? 'DATA_SOURCE_UNAVAILABLE' : 'READY';

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

  // 3. Strict Dual-READY 300s Cache Policy
  if (ga4Data.status === 'READY' && vercelData.status === 'READY') {
    await store.setCachedTelemetry(cacheKey, JSON.stringify(payload), 300);
  }

  return {
    source: ga4Data.source === 'live' && vercelData.source === 'live' ? 'live' : ga4Data.source === 'unavailable' && vercelData.source === 'unavailable' ? 'unavailable' : 'synthetic_fallback',
    status: overallStatus,
    payload,
    ga4: ga4Data,
    vercel: vercelData,
  };
}
