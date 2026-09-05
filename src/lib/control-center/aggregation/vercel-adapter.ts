export interface VercelMetricsResult {
  source: 'live' | 'synthetic_fallback' | 'unavailable';
  status: 'READY' | 'DATA_SOURCE_UNAVAILABLE';
  summedDailyVisitors: number;
  pageViews: number;
  error?: string;
}

interface VercelAggregateRow {
  date?: string;
  pageviews?: number;
  visitors?: number;
}

interface VercelAggregateResponse {
  data?: VercelAggregateRow[] | { pageviews?: number; visitors?: number };
}

export function parseVercelAggregate(json: unknown): { pageViews: number; summedDailyVisitors: number } {
  if (typeof json !== 'object' || json === null || !('data' in json)) {
    throw new Error('Vercel Analytics response failed schema validation: data property missing or null');
  }

  const rawData = (json as VercelAggregateResponse).data;

  // Case 1: Array of daily aggregated buckets (returned when by=day is requested)
  if (Array.isArray(rawData)) {
    let pageViews = 0;
    let summedDailyVisitors = 0;

    for (let i = 0; i < rawData.length; i++) {
      const row = rawData[i];
      if (typeof row !== 'object' || row === null) {
        throw new Error(`Vercel Analytics row ${i} is not an object`);
      }
      if (typeof row.pageviews !== 'number' || !Number.isFinite(row.pageviews) || row.pageviews < 0) {
        throw new Error(`Vercel Analytics row ${i} has invalid pageviews (must be finite non-negative number)`);
      }
      if (typeof row.visitors !== 'number' || !Number.isFinite(row.visitors) || row.visitors < 0) {
        throw new Error(`Vercel Analytics row ${i} has invalid visitors (must be finite non-negative number)`);
      }
      pageViews += row.pageviews;
      summedDailyVisitors += row.visitors;
    }

    return { pageViews, summedDailyVisitors };
  }

  // Case 2: Direct aggregate object { pageviews, visitors }
  if (typeof rawData === 'object' && rawData !== null) {
    const obj = rawData as { pageviews?: unknown; visitors?: unknown };
    if (
      typeof obj.pageviews === 'number' &&
      Number.isFinite(obj.pageviews) &&
      obj.pageviews >= 0 &&
      typeof obj.visitors === 'number' &&
      Number.isFinite(obj.visitors) &&
      obj.visitors >= 0
    ) {
      return { pageViews: obj.pageviews, summedDailyVisitors: obj.visitors };
    }
  }

  throw new Error('Vercel Analytics response failed schema validation: valid data array or pageviews/visitors missing');
}

function formatDateYYYYMMDD(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function getSyntheticVercelMetrics(timeframe: '7d' | '30d' | '90d'): VercelMetricsResult {
  const multiplier = timeframe === '90d' ? 12 : timeframe === '30d' ? 4 : 1;
  return {
    source: 'synthetic_fallback',
    status: 'READY',
    summedDailyVisitors: 1240 * multiplier,
    pageViews: 5890 * multiplier,
  };
}

export async function fetchVercelWebMetrics(
  timeframe: '7d' | '30d' | '90d'
): Promise<VercelMetricsResult> {
  const bearerToken = process.env.VERCEL_AUTH_BEARER_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;
  const isProduction = process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true';

  if (bearerToken && projectId) {
    try {
      const now = new Date();
      const days = timeframe === '90d' ? 90 : timeframe === '30d' ? 30 : 7;
      const sinceDate = new Date(now.getTime() - days * 86400000);

      const since = formatDateYYYYMMDD(sinceDate);
      const until = formatDateYYYYMMDD(now);

      const url = new URL('https://api.vercel.com/v1/query/web-analytics/visits/aggregate');
      url.searchParams.set('projectId', projectId);
      if (teamId) url.searchParams.set('teamId', teamId);
      url.searchParams.set('since', since);
      url.searchParams.set('until', until);
      url.searchParams.set('by', 'day');

      const res = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${bearerToken}` },
      });

      if (!res.ok) {
        throw new Error(`Vercel API returned HTTP ${res.status}`);
      }

      const json = await res.json();
      const { pageViews, summedDailyVisitors } = parseVercelAggregate(json);

      return {
        source: 'live',
        status: 'READY',
        pageViews,
        summedDailyVisitors,
      };
    } catch (err: any) {
      console.warn('[Vercel Adapter] Live query error:', err.message);
      if (isProduction) {
        return {
          source: 'unavailable',
          status: 'DATA_SOURCE_UNAVAILABLE',
          pageViews: 0,
          summedDailyVisitors: 0,
          error: `Vercel Web Analytics unavailable: ${err.message}`,
        };
      }
    }
  }

  if (isProduction) {
    return {
      source: 'unavailable',
      status: 'DATA_SOURCE_UNAVAILABLE',
      pageViews: 0,
      summedDailyVisitors: 0,
      error: 'VERCEL_AUTH_BEARER_TOKEN or VERCEL_PROJECT_ID not configured',
    };
  }

  return getSyntheticVercelMetrics(timeframe);
}
