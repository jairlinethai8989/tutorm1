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
  if (typeof json === 'object' && json !== null && 'data' in json) {
    const rawData = (json as VercelAggregateResponse).data;
    if (Array.isArray(rawData)) {
      let pageViews = 0;
      let summedDailyVisitors = 0;
      for (const row of rawData) {
        if (typeof row.pageviews === 'number') pageViews += row.pageviews;
        if (typeof row.visitors === 'number') summedDailyVisitors += row.visitors;
      }
      return { pageViews, summedDailyVisitors };
    }
    if (typeof rawData === 'object' && rawData !== null) {
      if (typeof rawData.pageviews === 'number' && typeof rawData.visitors === 'number') {
        return { pageViews: rawData.pageviews, summedDailyVisitors: rawData.visitors };
      }
    }
  }
  throw new Error('Vercel Analytics response failed schema validation: data array or pageviews/visitors missing');
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
