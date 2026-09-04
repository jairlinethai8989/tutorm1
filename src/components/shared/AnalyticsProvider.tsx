'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics, trackPageView } from '@/lib/analytics';

/**
 * Passive, Zero-PII Telemetry & Analytics Listener
 * Mounted once in RootLayout.
 */
export const AnalyticsProvider: React.FC = () => {
  const pathname = usePathname();
  const isFirstMountRef = useRef(true);

  useEffect(() => {
    // 1. Initialize core listeners on client mount
    const cleanup = initAnalytics();

    return () => {
      cleanup();
    };
  }, []);

  useEffect(() => {
    // 2. Track page view on route transitions (skip initial mount as initAnalytics handles it)
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      return;
    }
    trackPageView(pathname);
  }, [pathname]);

  return null;
};
