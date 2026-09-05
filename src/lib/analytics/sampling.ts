/**
 * Centralized Sampling Configuration & Contract Helper for Question Interactions
 * Synchronizes client-side sampling (client.ts) and server-side aggregation (ga4-adapter.ts).
 */

export interface QuestionSamplingConfig {
  enabled: boolean;
  rate: number;
  status: 'disabled' | 'enabled_5_percent' | 'custom';
  samplingRate: number | null;
}

export function getQuestionSamplingConfig(): QuestionSamplingConfig {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING === 'true';
  const rawRate = Number(process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE ?? '0.05');
  const rate = Number.isFinite(rawRate) && rawRate >= 0 && rawRate <= 1 ? rawRate : 0.05;

  const status: 'disabled' | 'enabled_5_percent' | 'custom' = !enabled
    ? 'disabled'
    : rate === 0.05
      ? 'enabled_5_percent'
      : 'custom';

  const samplingRate: number | null = enabled ? rate : null;

  return {
    enabled,
    rate,
    status,
    samplingRate,
  };
}
