/**
 * Tutor M.1 Analytics Facade Client (V1)
 * Central entry point for all application telemetry.
 * Enforces:
 * 1. Multi-cast to registered providers (Vercel, GA4)
 * 2. Strict Zero-PII payload sanitization
 * 3. 5% Gated Sampling on question_answered to prevent event flooding at national scale
 * 4. Idempotent attempt_completed dispatching
 */

import {
  AnalyticsEventName,
  BaseTelemetryContext,
  AttemptCompletedPayload,
  QuestionAnsweredPayload,
  MilestonePayload,
  ParentReportViewedPayload,
} from './types';
import { getOrCreateAnonymousId, getOrCreateSessionId, detectDeviceType } from './identity';
import { captureAndPersistUTM, getFirstTouchAttribution } from './utm';
import { isAttemptAlreadyTracked, markAttemptAsTracked } from './idempotency';
import { observeWebVitals, shouldSamplePerformance } from './vitals';
import { vercelProvider } from './providers/vercel';
import { ga4Provider } from './providers/ga4';

const APP_VERSION = 'v1.4.0';

// Per-question event sampling (Disabled by default; 5% sampling when enabled)
const ENABLE_QUESTION_SAMPLING = process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING === 'true';
const QUESTION_SAMPLE_RATE = Number(process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE || 0.05);

const PROVIDERS = [vercelProvider, ga4Provider];

/**
 * Build base anonymous context
 */
export function getTelemetryContext(): BaseTelemetryContext {
  const attribution = getFirstTouchAttribution();
  return {
    anonymousId: getOrCreateAnonymousId(),
    sessionId: getOrCreateSessionId(),
    timestamp: new Date().toISOString(),
    clientVersion: APP_VERSION,
    deviceType: detectDeviceType(),
    firstTouchSource: attribution.firstTouchSource,
    firstTouchCampaign: attribution.firstTouchCampaign,
  };
}

/**
 * Sanitize payload to strictly guarantee Zero-PII
 */
function sanitizePayload(payload: any): any {
  if (!payload || typeof payload !== 'object') return payload;
  const clone = { ...payload };

  // Strip potential PII keys
  const piiKeys = [
    'studentName',
    'studentNameHash',
    'name',
    'realName',
    'email',
    'phone',
    'telephone',
    'schoolName',
    'targetSchoolSpecific',
  ];

  for (const key of piiKeys) {
    if (key in clone) {
      delete clone[key];
    }
  }

  return clone;
}

/**
 * Core track function - Multi-casts sanitized event to all providers
 */
export function track<T = Record<string, unknown>>(eventName: AnalyticsEventName, payload?: T): void {
  if (typeof window === 'undefined') return;

  // Question Event Sampling Guard (Protects national scale volume)
  if (eventName === 'question_answered') {
    if (!ENABLE_QUESTION_SAMPLING) {
      // Bypassed: rely on authoritative attempt_completed and milestones
      return;
    }
    if (Math.random() > QUESTION_SAMPLE_RATE) {
      return; // Sampled out
    }
  }

  try {
    const context = getTelemetryContext();
    const cleanPayload = sanitizePayload(payload || {});

    for (const provider of PROVIDERS) {
      provider.track(eventName, cleanPayload, context);
    }
  } catch (e) {
    console.debug('Telemetry dispatch suppressed', e);
  }
}

/**
 * Track page views
 */
export function trackPageView(pageUrl?: string): void {
  if (typeof window === 'undefined') return;

  try {
    const url = pageUrl || window.location.pathname + window.location.search;
    const context = getTelemetryContext();

    for (const provider of PROVIDERS) {
      provider.trackPageView(url, context);
    }
  } catch (e) {
    console.debug('PageView telemetry suppressed', e);
  }
}

/**
 * Authoritative Attempt Completed Event with Idempotency Guard
 */
export function trackAttemptCompleted(payload: AttemptCompletedPayload): boolean {
  if (!payload || !payload.attemptId) return false;

  // Prevent duplicate event dispatches for the same attempt
  if (isAttemptAlreadyTracked(payload.attemptId)) {
    return false;
  }

  markAttemptAsTracked(payload.attemptId);
  track<AttemptCompletedPayload>('attempt_completed', payload);
  return true;
}

/**
 * Track question answering with optional sampling
 */
export function trackQuestionAnswered(payload: QuestionAnsweredPayload): void {
  track<QuestionAnsweredPayload>('question_answered', payload);
}

/**
 * Track milestone achievement (e.g. 10 or 50 questions answered)
 */
export function trackMilestone(milestone: 10 | 50 | 100, totalQuestionsAnswered: number): void {
  const eventName = milestone === 10 ? 'questions_10_milestone' : 'questions_50_milestone';
  track<MilestonePayload>(eventName, {
    milestone,
    totalQuestionsAnswered,
    achievedAt: new Date().toISOString(),
  });
}

/**
 * Track Parent Report view with Zero-PII guarantee
 */
export function trackParentReportViewed(examCount: number, hasEnoughData: boolean): void {
  track<ParentReportViewedPayload>('parent_report_viewed', {
    examCount,
    hasEnoughData,
  });
}

/**
 * Initialize Analytics & RUM Listeners on App Mount
 */
export function initAnalytics(): () => void {
  if (typeof window === 'undefined') return () => {};

  // 1. Capture and persist UTM
  captureAndPersistUTM();

  // 2. Initial session started event
  const isFirstSession = !sessionStorage.getItem('tutor_m1_session_started');
  if (isFirstSession) {
    sessionStorage.setItem('tutor_m1_session_started', 'true');
    track('session_started');
  }

  // 3. Track Initial Pageview
  trackPageView();

  // 4. Observe Web Vitals with 10% sampling (Low Network Overhead)
  let disconnectVitals = () => {};
  if (shouldSamplePerformance()) {
    disconnectVitals = observeWebVitals((metric) => {
      track('rum_performance_sample', metric);
    });
  }

  // 5. Global Error Listener
  const handleError = (event: ErrorEvent) => {
    track('client_runtime_error', {
      message: event.message,
      source: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  };

  window.addEventListener('error', handleError);

  return () => {
    disconnectVitals();
    window.removeEventListener('error', handleError);
  };
}
