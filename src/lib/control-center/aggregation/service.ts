import { getSessionStore } from '@/lib/control-center/auth/sessionStore';
import { fetchGA4TelemetryMetrics, GA4FetchResult } from './ga4-adapter';
import { fetchVercelWebMetrics, VercelMetricsResult } from './vercel-adapter';
import { AggregateTelemetryResponse } from './types';
import { getQuestionSamplingConfig } from '@/lib/analytics/sampling';

function isNonNegativeNumberOrNull(val: unknown): boolean {
  if (val === null) return true;
  return typeof val === 'number' && Number.isFinite(val) && val >= 0;
}

function isNonNegativeNumber(val: unknown): boolean {
  return typeof val === 'number' && Number.isFinite(val) && val >= 0;
}

export function validateCachedPayload(val: unknown, expectedTimeframe: '7d' | '30d' | '90d'): AggregateTelemetryResponse | null {
  if (typeof val !== 'object' || val === null) return null;
  const p = val as any;

  if (p.timeframe !== expectedTimeframe) return null;
  if (typeof p.generatedAt !== 'string' || isNaN(Date.parse(p.generatedAt))) return null;

  if (typeof p.dataSources !== 'object' || p.dataSources === null) return null;
  const ga4Source = p.dataSources.ga4;
  const vercelSource = p.dataSources.vercel;
  const validSources = ['live', 'synthetic_fallback', 'unavailable'];
  if (!validSources.includes(ga4Source) || !validSources.includes(vercelSource)) return null;

  if (typeof p.progression !== 'object' || p.progression === null) return null;
  const prog = p.progression;
  if (!prog.mockExam || !isNonNegativeNumber(prog.mockExam.started) || !isNonNegativeNumber(prog.mockExam.completed) || !isNonNegativeNumberOrNull(prog.mockExam.completionEventRatio)) return null;
  if (!prog.aiPractice || !isNonNegativeNumber(prog.aiPractice.started) || !isNonNegativeNumber(prog.aiPractice.completed) || !isNonNegativeNumberOrNull(prog.aiPractice.completionEventRatio)) return null;
  if (!prog.milestones || !isNonNegativeNumber(prog.milestones.questions10) || !isNonNegativeNumber(prog.milestones.questions50) || !isNonNegativeNumber(prog.milestones.questions100)) return null;
  if (!prog.activity || !isNonNegativeNumber(prog.activity.sampledQuestionsAnswered) || !isNonNegativeNumber(prog.activity.diagnosticViews)) return null;

  if (typeof p.webMetrics !== 'object' || p.webMetrics === null) return null;
  if (!isNonNegativeNumber(p.webMetrics.summedDailyVisitors) || !isNonNegativeNumber(p.webMetrics.pageViews)) return null;

  if (!Array.isArray(p.trafficChannels) || !Array.isArray(p.subjectBreakdown)) return null;

  for (const tc of p.trafficChannels) {
    if (typeof tc !== 'object' || tc === null) return null;
    if (typeof tc.channel !== 'string') return null;
    if (!isNonNegativeNumber(tc.sessions)) return null;
    if (typeof tc.percentage !== 'number' || !Number.isFinite(tc.percentage) || tc.percentage < 0 || tc.percentage > 100) return null;
  }

  for (const sb of p.subjectBreakdown) {
    if (typeof sb !== 'object' || sb === null) return null;
    if (typeof sb.subject !== 'string') return null;
    if (!isNonNegativeNumber(sb.completedAttempts)) return null;
  }

  return p as AggregateTelemetryResponse;
}

export interface AggregatedTelemetryResult {
  source: 'live' | 'synthetic_fallback' | 'unavailable' | 'partial';
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
  const mode = process.env.DEMO_MODE === 'true' ? 'demo' : 'live';
  const propertyId = process.env.GA4_PROPERTY_ID || 'none';
  const projectId = process.env.VERCEL_PROJECT_ID || 'none';
  const teamId = process.env.VERCEL_TEAM_ID || 'none';
  const cacheKey = `tutor_m1_telemetry_cache:${env}:${mode}:${propertyId}:${projectId}:${teamId}:${timeframe}:v1`;

  const store = getSessionStore();
  const isProduction = process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true';

  // 1. Check Server-Side Redis Cache (Avoid upstream API quota exhaustion)
  const cached = await store.getCachedTelemetry(cacheKey);
  if (cached) {
    try {
      const raw = JSON.parse(cached);
      const validated = validateCachedPayload(raw, timeframe);

      if (validated) {
        const ga4Src = validated.dataSources.ga4;
        const vercelSrc = validated.dataSources.vercel;

        // In production/live mode, reject synthetic fallback data
        const hasSynthetic = ga4Src === 'synthetic_fallback' || vercelSrc === 'synthetic_fallback';

        // Dual-READY cache invariant: under existing policy, unavailable data is NEVER cached.
        // If a cached entry contains unavailable sources, reject it immediately.
        const hasUnavailable = ga4Src === 'unavailable' || vercelSrc === 'unavailable';

        if (!hasUnavailable && (!isProduction || !hasSynthetic)) {
          // Derive current sampling metadata after data-cache read
          const currentSampling = getQuestionSamplingConfig();
          validated.progression.activity.samplingStatus = currentSampling.status;
          validated.progression.activity.samplingRate = currentSampling.samplingRate;

          const overallSrc: 'live' | 'synthetic_fallback' | 'unavailable' | 'partial' =
            ga4Src === 'live' && vercelSrc === 'live'
              ? 'live'
              : ga4Src === 'synthetic_fallback' && vercelSrc === 'synthetic_fallback'
                ? 'synthetic_fallback'
                : 'partial';

          return {
            source: overallSrc,
            status: 'READY',
            payload: validated,
            ga4: {
              source: ga4Src,
              status: 'READY',
              progression: validated.progression,
              trafficChannels: validated.trafficChannels,
              subjectBreakdown: validated.subjectBreakdown,
            },
            vercel: {
              source: vercelSrc,
              status: 'READY',
              summedDailyVisitors: validated.webMetrics.summedDailyVisitors,
              pageViews: validated.webMetrics.pageViews,
            },
          };
        }
      }
    } catch {
      // Cache corruption fallback: continue to fresh fetch
    }
  }

  // 2. Fetch fresh metrics concurrently
  const [ga4Data, vercelData] = await Promise.all([
    fetchGA4TelemetryMetrics(timeframe),
    fetchVercelWebMetrics(timeframe),
  ]);

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
  // Only cache if BOTH adapters are READY AND neither is synthetic fallback in live mode
  const hasSynthetic =
    ga4Data.source === 'synthetic_fallback' || vercelData.source === 'synthetic_fallback';

  if (ga4Data.status === 'READY' && vercelData.status === 'READY') {
    // In production, never cache synthetic data
    if (!isProduction || !hasSynthetic) {
      await store.setCachedTelemetry(cacheKey, JSON.stringify(payload), 300);
    }
  }

  const computedOverallSource: 'live' | 'synthetic_fallback' | 'unavailable' | 'partial' =
    ga4Data.source === 'live' && vercelData.source === 'live'
      ? 'live'
      : ga4Data.source === 'synthetic_fallback' && vercelData.source === 'synthetic_fallback'
        ? 'synthetic_fallback'
        : ga4Data.source === 'unavailable' && vercelData.source === 'unavailable'
          ? 'unavailable'
          : 'partial';

  return {
    source: computedOverallSource,
    status: overallStatus,
    payload,
    ga4: ga4Data,
    vercel: vercelData,
  };
}
