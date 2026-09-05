import * as jose from 'jose';
import { ProgressionSemantics, SubjectBreakdown, TrafficChannel } from './types';
import { getQuestionSamplingConfig } from '@/lib/analytics/sampling';

export interface GA4BatchResponse {
  reports?: Array<{
    dimensionHeaders?: Array<{ name: string }>;
    metricHeaders?: Array<{ name: string }>;
    rows?: Array<{
      dimensionValues?: Array<{ value: string }>;
      metricValues?: Array<{ value: string }>;
    }>;
  }>;
}

export interface GA4FetchResult {
  source: 'live' | 'synthetic_fallback' | 'unavailable';
  status: 'READY' | 'DATA_SOURCE_UNAVAILABLE';
  progression: ProgressionSemantics;
  trafficChannels: TrafficChannel[];
  subjectBreakdown: SubjectBreakdown[];
  error?: string;
}

export function getZeroProgression(): ProgressionSemantics {
  const samplingConfig = getQuestionSamplingConfig();

  return {
    mockExam: { started: 0, completed: 0, completionEventRatio: null },
    aiPractice: { started: 0, completed: 0, completionEventRatio: null },
    milestones: { questions10: 0, questions50: 0, questions100: 0 },
    activity: {
      sampledQuestionsAnswered: 0,
      samplingStatus: samplingConfig.status,
      samplingRate: samplingConfig.samplingRate,
      diagnosticViews: 0,
    },
  };
}

function parseStrictNonNegativeInt(val: unknown, label: string): number {
  if (typeof val !== 'string' && typeof val !== 'number') {
    throw new Error(`GA4 metric value for ${label} is not a string or number`);
  }
  const str = String(val).trim();
  if (!/^\d+$/.test(str)) {
    throw new Error(`GA4 metric value "${str}" for ${label} is not a valid non-negative integer`);
  }
  const num = parseInt(str, 10);
  if (!Number.isFinite(num) || num < 0) {
    throw new Error(`GA4 metric value ${num} for ${label} is not a finite non-negative number`);
  }
  return num;
}

export function parseGA4BatchReports(data: GA4BatchResponse): Omit<GA4FetchResult, 'source' | 'status'> {
  if (!data || typeof data !== 'object' || !data.reports || !Array.isArray(data.reports) || data.reports.length < 3) {
    throw new Error('GA4 batchRunReports returned invalid schema: minimum 3 reports expected');
  }

  const [progressionReport, channelsReport, topicsReport] = data.reports;

  // Validate Report 1 Headers: expected eventName dimension & eventCount metric
  const rep1Dim = progressionReport.dimensionHeaders?.[0]?.name;
  const rep1Metric = progressionReport.metricHeaders?.[0]?.name;
  if (rep1Dim !== 'eventName' || rep1Metric !== 'eventCount') {
    throw new Error(`GA4 Report 1 failed header contract: expected eventName/eventCount, got ${rep1Dim}/${rep1Metric}`);
  }

  // Validate Report 2 Headers: expected sessionDefaultChannelGroup & sessions
  const rep2Dim = channelsReport.dimensionHeaders?.[0]?.name;
  const rep2Metric = channelsReport.metricHeaders?.[0]?.name;
  if (rep2Dim !== 'sessionDefaultChannelGroup' || rep2Metric !== 'sessions') {
    throw new Error(`GA4 Report 2 failed header contract: expected sessionDefaultChannelGroup/sessions, got ${rep2Dim}/${rep2Metric}`);
  }

  // Validate Report 3 Headers: expected customEvent:subject & eventCount
  const rep3Dim = topicsReport.dimensionHeaders?.[0]?.name;
  const rep3Metric = topicsReport.metricHeaders?.[0]?.name;
  if (rep3Dim !== 'customEvent:subject' || rep3Metric !== 'eventCount') {
    throw new Error(`GA4 Report 3 failed header contract: expected customEvent:subject/eventCount, got ${rep3Dim}/${rep3Metric}`);
  }

  // 1. Parse Event Progression using ACTUAL dispatched event names
  const eventCounts: Record<string, number> = {};
  for (const row of progressionReport.rows || []) {
    const eventName = row.dimensionValues?.[0]?.value;
    const count = parseStrictNonNegativeInt(row.metricValues?.[0]?.value, `eventName:${eventName}`);
    if (eventName) eventCounts[eventName] = count;
  }

  const mockExamStarted = eventCounts['mock_exam_started'] || 0;
  const mockExamCompleted = eventCounts['mock_exam_completed'] || 0;
  // True unclamped event ratio: null if started is 0; can exceed 100%
  const mockExamRatio: number | null =
    mockExamStarted > 0 ? Math.round((mockExamCompleted / mockExamStarted) * 100) : null;

  const aiPracticeStarted = eventCounts['ai_practice_started'] || 0;
  const aiPracticeCompleted = eventCounts['ai_practice_completed'] || 0;
  // True unclamped event ratio: null if started is 0; can exceed 100%
  const aiPracticeRatio: number | null =
    aiPracticeStarted > 0 ? Math.round((aiPracticeCompleted / aiPracticeStarted) * 100) : null;

  // Centralized sampling contract
  const samplingConfig = getQuestionSamplingConfig();

  const progression: ProgressionSemantics = {
    mockExam: {
      started: mockExamStarted,
      completed: mockExamCompleted,
      completionEventRatio: mockExamRatio,
    },
    aiPractice: {
      started: aiPracticeStarted,
      completed: aiPracticeCompleted,
      completionEventRatio: aiPracticeRatio,
    },
    milestones: {
      questions10: eventCounts['questions_10_milestone'] || 0,
      questions50: eventCounts['questions_50_milestone'] || 0,
      questions100: eventCounts['questions_100_milestone'] || 0,
    },
    activity: {
      sampledQuestionsAnswered: eventCounts['question_answered'] || 0,
      samplingStatus: samplingConfig.status,
      samplingRate: samplingConfig.samplingRate,
      diagnosticViews: eventCounts['ai_diagnostic_viewed'] || 0,
    },
  };

  // 2. Parse Traffic Channels
  let totalSessions = 0;
  const channelRows = channelsReport.rows || [];
  for (const row of channelRows) {
    totalSessions += parseStrictNonNegativeInt(row.metricValues?.[0]?.value, 'channelSessions');
  }

  const trafficChannels: TrafficChannel[] = channelRows.map((row) => {
    const channel = row.dimensionValues?.[0]?.value || 'Unassigned';
    const sessions = parseStrictNonNegativeInt(row.metricValues?.[0]?.value, `channel:${channel}`);
    return {
      channel,
      sessions,
      percentage: totalSessions > 0 ? Math.round((sessions / totalSessions) * 100) : 0,
    };
  });

  // 3. Parse Authoritative Subject Attempts (Filtered strictly by attempt_completed)
  const subjectBreakdown: SubjectBreakdown[] = (topicsReport.rows || []).map((row) => {
    const subject = row.dimensionValues?.[0]?.value || 'General';
    const completedAttempts = parseStrictNonNegativeInt(row.metricValues?.[0]?.value, `subject:${subject}`);
    return {
      subject,
      completedAttempts,
    };
  });

  return {
    progression,
    trafficChannels,
    subjectBreakdown,
  };
}

async function getGoogleAnalyticsAccessToken(serviceAccountJson: string): Promise<string> {
  const sa = JSON.parse(serviceAccountJson);
  const privateKey = await jose.importPKCS8(sa.private_key, 'RS256');
  const jwt = await new jose.SignJWT({
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuer(sa.client_email)
    .setSubject(sa.client_email)
    .setAudience('https://oauth2.googleapis.com/token')
    .setExpirationTime('1h')
    .setIssuedAt()
    .sign(privateKey);

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }).toString(),
  });

  if (!res.ok) {
    throw new Error(`Google OAuth token request failed with status ${res.status}`);
  }

  const data = await res.json();
  return data.access_token;
}

function getSyntheticGA4Metrics(timeframe: '7d' | '30d' | '90d'): GA4FetchResult {
  const multiplier = timeframe === '90d' ? 12 : timeframe === '30d' ? 4 : 1;

  const mockExamStarted = 485 * multiplier;
  const mockExamCompleted = Math.round(mockExamStarted * 0.74);
  const aiPracticeStarted = 620 * multiplier;
  const aiPracticeCompleted = Math.round(aiPracticeStarted * 0.68);

  const enabled = process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING === 'true';
  const parsedRate = Number(process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE ?? '0.05');
  const rate = Number.isFinite(parsedRate) && parsedRate >= 0 && parsedRate <= 1 ? parsedRate : 0.05;
  const samplingStatus = !enabled ? 'disabled' : rate === 0.05 ? 'enabled_5_percent' : 'custom';
  const samplingRate = enabled ? rate : null;

  return {
    source: 'synthetic_fallback',
    status: 'READY',
    progression: {
      mockExam: {
        started: mockExamStarted,
        completed: mockExamCompleted,
        completionEventRatio: Math.round((mockExamCompleted / mockExamStarted) * 100),
      },
      aiPractice: {
        started: aiPracticeStarted,
        completed: aiPracticeCompleted,
        completionEventRatio: Math.round((aiPracticeCompleted / aiPracticeStarted) * 100),
      },
      milestones: {
        questions10: 245 * multiplier,
        questions50: 130 * multiplier,
        questions100: 65 * multiplier,
      },
      activity: {
        sampledQuestionsAnswered: 3200 * multiplier,
        samplingStatus,
        samplingRate,
        diagnosticViews: Math.round(mockExamCompleted * 0.92),
      },
    },
    trafficChannels: [
      { channel: 'Direct / Line Official', sessions: 540 * multiplier, percentage: 45 },
      { channel: 'Organic Search (Google)', sessions: 336 * multiplier, percentage: 28 },
      { channel: 'Parent Referrals', sessions: 216 * multiplier, percentage: 18 },
      { channel: 'Facebook Groups', sessions: 108 * multiplier, percentage: 9 },
    ],
    subjectBreakdown: [
      { subject: 'คณิตศาสตร์ (Mathematics)', completedAttempts: 210 * multiplier },
      { subject: 'วิทยาศาสตร์ (Science)', completedAttempts: 185 * multiplier },
      { subject: 'ภาษาอังกฤษ (English)', completedAttempts: 140 * multiplier },
      { subject: 'ภาษาไทย (Thai)', completedAttempts: 95 * multiplier },
      { subject: 'สังคมศึกษา (Social Studies)', completedAttempts: 75 * multiplier },
    ],
  };
}

export async function fetchGA4TelemetryMetrics(
  timeframe: '7d' | '30d' | '90d'
): Promise<GA4FetchResult> {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const saKey = process.env.GA4_SERVICE_ACCOUNT_KEY;
  const isProduction = process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true';

  if (propertyId && saKey) {
    try {
      const accessToken = await getGoogleAnalyticsAccessToken(saKey);
      const daysAgo = timeframe === '90d' ? '90daysAgo' : timeframe === '30d' ? '30daysAgo' : '7daysAgo';

      const batchRequestBody = {
        requests: [
          // 1. Core Progression & Milestone Events
          {
            dateRanges: [{ startDate: daysAgo, endDate: 'today' }],
            dimensions: [{ name: 'eventName' }],
            metrics: [{ name: 'eventCount' }],
          },
          // 2. Acquisition Channels
          {
            dateRanges: [{ startDate: daysAgo, endDate: 'today' }],
            dimensions: [{ name: 'sessionDefaultChannelGroup' }],
            metrics: [{ name: 'sessions' }],
          },
          // 3. Authoritative Subject Attempts (Filtered strictly to attempt_completed)
          {
            dateRanges: [{ startDate: daysAgo, endDate: 'today' }],
            dimensions: [{ name: 'customEvent:subject' }],
            dimensionFilter: {
              filter: {
                fieldName: 'eventName',
                stringFilter: { value: 'attempt_completed' },
              },
            },
            metrics: [{ name: 'eventCount' }],
          },
        ],
      };

      const res = await fetch(
        `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:batchRunReports`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(batchRequestBody),
        }
      );

      if (!res.ok) {
        throw new Error(`GA4 batchRunReports returned HTTP ${res.status}`);
      }

      const batchJson: GA4BatchResponse = await res.json();
      const parsed = parseGA4BatchReports(batchJson);

      return {
        source: 'live',
        status: 'READY',
        ...parsed,
      };
    } catch (err: any) {
      console.warn('[GA4 Adapter] Live query error:', err.message);
      if (isProduction) {
        return {
          source: 'unavailable',
          status: 'DATA_SOURCE_UNAVAILABLE',
          progression: getZeroProgression(),
          trafficChannels: [],
          subjectBreakdown: [],
          error: `GA4 Data API unavailable: ${err.message}`,
        };
      }
    }
  }

  if (isProduction) {
    return {
      source: 'unavailable',
      status: 'DATA_SOURCE_UNAVAILABLE',
      progression: getZeroProgression(),
      trafficChannels: [],
      subjectBreakdown: [],
      error: 'GA4_PROPERTY_ID or GA4_SERVICE_ACCOUNT_KEY not configured',
    };
  }

  return getSyntheticGA4Metrics(timeframe);
}
