/**
 * Tutor M.1 Analytics & Telemetry Type Definitions (V1)
 * Standardized Anonymous Event Model & Attribution Schema
 */

export type TrafficCategory =
  | 'Facebook Organic'
  | 'Facebook Groups'
  | 'TikTok Organic'
  | 'Google Organic'
  | 'LINE'
  | 'Direct'
  | 'Other';

export interface BaseTelemetryContext {
  anonymousId: string;        // 'tm1_01J8F9...' (Persistent in LocalStorage, no PII)
  sessionId: string;          // 'sess_...' (Rotates after 30 mins inactivity)
  timestamp: string;          // ISO 8601 UTC
  clientVersion: string;      // Application version e.g. 'v1.4.0'
  deviceType: 'mobile' | 'tablet' | 'desktop';
  firstTouchSource: TrafficCategory;
  firstTouchCampaign?: string;
}

export type AnalyticsEventName =
  // 1. Navigation & Views
  | 'session_started'
  | 'page_view'
  
  // 2. Mock Exam Journey
  | 'mock_exam_hub_viewed'
  | 'mock_exam_started'
  | 'mock_exam_completed'
  
  // 3. AI Practice Journey (at /practice)
  | 'ai_practice_viewed'
  | 'ai_practice_started'
  | 'ai_practice_completed'
  
  // 4. In-Flight Interaction (Sampled / Milestone)
  | 'question_answered'
  | 'questions_10_milestone'
  | 'questions_50_milestone'
  | 'questions_100_milestone'
  
  // 5. Central Completed Boundary (Authoritative Product Metric)
  | 'attempt_completed'
  
  // 6. Diagnostic & Specialized Views
  | 'ai_diagnostic_viewed'      // at /ai-analytics (16 subtopics 5 subjects)
  | 'parent_report_viewed'      // Non-PII aggregate only
  | 'mistake_book_viewed'
  | 'cheat_sheet_viewed'
  | 'speed_run_lobby_viewed'
  | 'speed_run_started'
  | 'speed_run_completed'
  
  // 7. System Health & Performance (Low Network Overhead)
  | 'rum_performance_sample'
  | 'client_runtime_error';

export interface AttemptCompletedPayload {
  attemptId: string;            // Idempotency Key
  mode: 'mock_exam' | 'practice' | 'speed_run' | 'remedial_quiz';
  subject?: string;
  topicId?: string;
  questionsAnswered: number;
  correctCount: number;
  durationSeconds: number;
  scorePercentage: number;
}

export interface QuestionAnsweredPayload {
  questionId: string;
  subject: string;
  topicId?: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  questionIndex: number;
}

export interface MilestonePayload {
  milestone: 10 | 50 | 100;
  totalQuestionsAnswered: number;
  achievedAt: string;
}

export interface ParentReportViewedPayload {
  examCount: number;
  hasEnoughData: boolean;
}

export interface ClientPerformancePayload {
  metricName: 'LCP' | 'INP' | 'CLS' | 'TTFB' | 'katex_render_ms' | 'localStorage_io_ms';
  value: number;
  unit: 'ms' | 'score';
  rating: 'good' | 'needs-improvement' | 'poor';
  targetType: 'internal_target' | 'official_cwv';
}

export interface ClientRuntimeErrorPayload {
  errorType: string;
  route: string;
  lineno?: number;
  colno?: number;
}

export interface AnalyticsEvent<T = Record<string, unknown>> {
  eventName: AnalyticsEventName;
  context: BaseTelemetryContext;
  payload: T;
}

export interface AnalyticsProvider {
  name: string;
  track: <T = Record<string, unknown>>(eventName: AnalyticsEventName, payload: T, context: BaseTelemetryContext) => void;
  trackPageView: (pageUrl: string, context: BaseTelemetryContext) => void;
}
