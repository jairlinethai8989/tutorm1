/**
 * Tutor M.1 Client Performance & Real User Monitoring (RUM)
 * Operates with Low Network Overhead (10% Session Sampling)
 * Distinguishes between Tutor M.1 Internal Targets vs Official Core Web Vitals Ratings
 */

import { ClientPerformancePayload } from './types';

// RUM Low Network Overhead Sampling Rate (10% of sessions)
const RUM_SAMPLE_RATE = 0.1;

export const PERFORMANCE_THRESHOLDS = {
  // 1. Tutor M.1 Internal High-Performance Targets
  internal: {
    LCP: 2000,           // < 2.0s
    INP: 150,            // < 150ms
    CLS: 0.05,           // < 0.05
    TTFB: 600,           // < 600ms
    katex_render_ms: 10, // < 10ms with LRU Cache
    localStorage_io_ms: 15, // < 15ms
  },
  // 2. Official Google Core Web Vitals Ratings
  official: {
    LCP: { good: 2500, poor: 4000 },
    INP: { good: 200, poor: 500 },
    CLS: { good: 0.1, poor: 0.25 },
    TTFB: { good: 800, poor: 1800 },
  },
};

/**
 * Determine if current session qualifies for RUM sampling
 */
export function shouldSamplePerformance(): boolean {
  if (typeof window === 'undefined') return false;
  return Math.random() < RUM_SAMPLE_RATE;
}

/**
 * Rate a metric against Official Google CWV standards
 */
export function rateOfficialCWV(
  name: 'LCP' | 'INP' | 'CLS' | 'TTFB',
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const threshold = PERFORMANCE_THRESHOLDS.official[name];
  if (!threshold) return 'good';
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Rate a metric against Tutor M.1 Internal High-Performance Targets
 */
export function rateInternalTarget(
  name: keyof typeof PERFORMANCE_THRESHOLDS.internal,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const target = PERFORMANCE_THRESHOLDS.internal[name];
  if (value <= target) return 'good';
  if (value <= target * 1.5) return 'needs-improvement';
  return 'poor';
}

/**
 * Observe Core Web Vitals using native PerformanceObserver
 */
export function observeWebVitals(onMetric: (metric: ClientPerformancePayload) => void): () => void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return () => {};
  }

  const observers: PerformanceObserver[] = [];

  try {
    // 1. LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        const val = Math.round(lastEntry.startTime);
        onMetric({
          metricName: 'LCP',
          value: val,
          unit: 'ms',
          rating: rateOfficialCWV('LCP', val),
          targetType: 'official_cwv',
        });
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    observers.push(lcpObserver);

    // 2. CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      onMetric({
        metricName: 'CLS',
        value: Number(clsValue.toFixed(3)),
        unit: 'score',
        rating: rateOfficialCWV('CLS', clsValue),
        targetType: 'official_cwv',
      });
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    observers.push(clsObserver);

    // 3. Navigation Timing (TTFB)
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      const nav = navEntries[0] as PerformanceNavigationTiming;
      const ttfb = Math.round(nav.responseStart - nav.requestStart);
      if (ttfb > 0) {
        onMetric({
          metricName: 'TTFB',
          value: ttfb,
          unit: 'ms',
          rating: rateOfficialCWV('TTFB', ttfb),
          targetType: 'official_cwv',
        });
      }
    }
  } catch (e) {
    console.debug('PerformanceObserver not fully supported in this environment', e);
  }

  return () => {
    observers.forEach((obs) => obs.disconnect());
  };
}

/**
 * Measure custom client latency for KaTeX or LocalStorage operations
 */
export function measureCustomClientLatency(
  metricName: 'katex_render_ms' | 'localStorage_io_ms',
  durationMs: number,
  onMetric: (metric: ClientPerformancePayload) => void
): void {
  const rounded = Number(durationMs.toFixed(2));
  onMetric({
    metricName,
    value: rounded,
    unit: 'ms',
    rating: rateInternalTarget(metricName, rounded),
    targetType: 'internal_target',
  });
}
