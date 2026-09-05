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

export const ga4Provider: AnalyticsProvider = {
  name: 'ga4',

  track: (eventName: AnalyticsEventName, payload: any, context: BaseTelemetryContext) => {
    if (typeof window === 'undefined') return;

    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, {
          ...payload,
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
