interface VercelMetricsResult {
  source: 'live' | 'synthetic_fallback';
  uniqueVisitors: number;
  pageViews: number;
}

export async function fetchVercelWebMetrics(timeframe: '7d' | '30d' | '90d'): Promise<VercelMetricsResult> {
  const bearerToken = process.env.VERCEL_AUTH_BEARER_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;

  if (bearerToken && projectId) {
    try {
      // In production with Vercel API token, query:
      // https://api.vercel.com/v1/analytics/stats?projectId=${projectId}
    } catch (err) {
      console.warn('[Vercel Adapter] Live query failed, falling back to synthetic metrics', err);
    }
  }

  const multiplier = timeframe === '90d' ? 12 : timeframe === '30d' ? 4 : 1;

  return {
    source: 'synthetic_fallback',
    uniqueVisitors: 1240 * multiplier,
    pageViews: 5890 * multiplier,
  };
}
