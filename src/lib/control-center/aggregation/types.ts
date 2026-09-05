export interface ExecutiveKpis {
  totalMockExamStarts: number;
  totalMockExamCompletes: number;
  mockExamCompletionRate: number; // Percentage 0-100
  totalDiagnosticViews: number;
  totalPracticeStarts: number;
  totalPracticeMilestones: number;
  totalUniqueVisitors: number;
  totalPageViews: number;
}

export interface FunnelStep {
  stepName: string;
  count: number;
  dropoffRate: number; // Percentage 0-100 compared to step 0
  stepConversionRate: number; // Percentage 0-100 compared to previous step
}

export interface FunnelProgression {
  mockExamFunnel: FunnelStep[];
  aiPracticeFunnel: FunnelStep[];
}

export interface TrafficChannel {
  channel: string;
  sessions: number;
  percentage: number;
}

export interface SubjectBreakdown {
  subject: string;
  attempts: number;
  averageScore: number;
  completionRate: number;
}

export interface AggregateTelemetryResponse {
  timeframe: '7d' | '30d' | '90d';
  generatedAt: string;
  dataSources: {
    ga4: 'live' | 'synthetic_fallback';
    vercel: 'live' | 'synthetic_fallback';
  };
  kpis: ExecutiveKpis;
  funnels: FunnelProgression;
  trafficChannels: TrafficChannel[];
  subjectBreakdown: SubjectBreakdown[];
}
