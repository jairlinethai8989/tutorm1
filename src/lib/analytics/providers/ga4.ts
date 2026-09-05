/**
 * Tutor M.1 Google Analytics 4 (GA4) Provider Adapter
 * Strict Zero-PII Compliance & 7-Channel Attribution Integration
 */

import { AnalyticsProvider, AnalyticsEventName, BaseTelemetryContext } from '../types';

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}

function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

function normalizeGA4Payload(payload: Record<string, unknown>): Record<string, unknown> {
  if (!payload || typeof payload !== 'object') return {};
  const normalized: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(payload)) {
    normalized[toSnakeCase(key)] = val;
  }
  return normalized;
}

export const ga4Provider: AnalyticsProvider = {
  name: 'ga4',

  track: (eventName: AnalyticsEventName, payload: any, context: BaseTelemetryContext) => {
    if (typeof window === 'undefined') return;

    try {
      if (typeof window.gtag === 'function') {
        const cleanPayload = normalizeGA4Payload(payload);
        window.gtag('event', eventName, {
          ...cleanPayload,
          traffic_category: context.firstTouchSource,
          traffic_campaign: context.firstTouchCampaign || '(none)',
          device_type: context.deviceType,
          app_version: context.clientVersion,
          session_id: context.sessionId,
          // Zero-PII: Do not include user names, emails or personal IDs
        });
      }
    } catch (e) {
      console.debug('GA4 dispatch bypassed', e);
    }
  },

  trackPageView: (pageUrl: string, context: BaseTelemetryContext) => {
    if (typeof window === 'undefined') return;

    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_location: pageUrl,
          traffic_category: context.firstTouchSource,
          device_type: context.deviceType,
        });
      }
    } catch (e) {
      console.debug('GA4 Pageview dispatch bypassed', e);
    }
  },
};
