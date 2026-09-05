/**
 * Tutor M.1 Vercel Web Analytics Provider Adapter
 * Uses official @vercel/analytics SDK for custom events.
 * Pageviews are handled automatically and natively by <VercelAnalytics /> in RootLayout.
 */

import { track as vercelTrack } from '@vercel/analytics';
import { AnalyticsProvider, AnalyticsEventName, BaseTelemetryContext } from '../types';

export const vercelProvider: AnalyticsProvider = {
  name: 'vercel',

  track: (eventName: AnalyticsEventName, payload: any, context: BaseTelemetryContext) => {
    if (typeof window === 'undefined') return;

    try {
      vercelTrack(eventName, {
        ...payload,
        source: context.firstTouchSource,
        device: context.deviceType,
      });
    } catch (e) {
      console.debug('Vercel Analytics custom event dispatch suppressed', e);
    }
  },

  // No-op: Vercel pageviews are handled natively by <VercelAnalytics /> in root layout
  trackPageView: () => {},
};

