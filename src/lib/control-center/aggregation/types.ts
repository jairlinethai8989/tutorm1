export interface ProgressionSemantics {
  mockExam: {
    started: number;
    completed: number;
    completionEventRatio: number | null; // Same-window event ratio (null when started is 0; can exceed 100%)
  };
  aiPractice: {
    started: number;
    completed: number;
    completionEventRatio: number | null; // Same-window event ratio (null when started is 0; can exceed 100%)
  };
  milestones: {
    questions10: number;
    questions50: number;
    questions100: number;
  };
  activity: {
    sampledQuestionsAnswered: number;
    samplingStatus: 'disabled' | 'enabled_5_percent' | 'custom';
    samplingRate: number | null; // e.g. 0.05 or custom rate; null when disabled
    diagnosticViews: number;
  };
}

export interface SubjectBreakdown {
  subject: string;
  completedAttempts: number;
}

export interface TrafficChannel {
  channel: string;
  sessions: number;
  percentage: number;
}

export interface AggregateTelemetryResponse {
  timeframe: '7d' | '30d' | '90d';
  generatedAt: string;
  dataSources: {
    ga4: 'live' | 'synthetic_fallback' | 'unavailable';
    vercel: 'live' | 'synthetic_fallback' | 'unavailable';
  };
  progression: ProgressionSemantics;
  webMetrics: {
    summedDailyVisitors: number; // Sum of daily visitor counts (Vercel daily hash rotation)
    pageViews: number;
  };
  trafficChannels: TrafficChannel[];
  subjectBreakdown: SubjectBreakdown[];
}
