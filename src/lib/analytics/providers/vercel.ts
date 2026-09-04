/**
 * Tutor M.1 Vercel Web Analytics & Speed Insights Provider Adapter
 */

import { AnalyticsProvider, AnalyticsEventName, BaseTelemetryContext } from '../types';

declare global {
  interface Window {
    va?: (event: 'event' | 'pageview' | 'beforeSend', options?: any) => void;
  }
}

export const vercelProvider: AnalyticsProvider = {
  name: 'vercel',

  track: (eventName: AnalyticsEventName, payload: any, context: BaseTelemetryContext) => {
    if (typeof window === 'undefined') return;

    try {
      if (typeof window.va === 'function') {
        window.va('event', {
          name: eventName,
          data: {
            ...payload,
            source: context.firstTouchSource,
            device: context.deviceType,
          },
        });
      }
    } catch (e) {
      console.debug('Vercel Analytics dispatch bypassed', e);
    }
  },

  trackPageView: (pageUrl: string, context: BaseTelemetryContext) => {
    if (typeof window === 'undefined') return;

    try {
      if (typeof window.va === 'function') {
        window.va('pageview', {
          url: pageUrl,
        });
      }
    } catch (e) {
      console.debug('Vercel Pageview dispatch bypassed', e);
    }
  },
};
