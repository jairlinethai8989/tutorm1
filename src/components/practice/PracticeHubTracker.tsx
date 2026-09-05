'use client';

import { useEffect } from 'react';

export function PracticeHubTracker() {
  useEffect(() => {
    try {
      const { trackAIPracticeViewed } = require('@/lib/analytics');
      trackAIPracticeViewed({
        activeTab: 'all',
        category: 'practice_hub',
      });
    } catch (e) {
      console.debug('Telemetry trackAIPracticeViewed suppressed', e);
    }
  }, []);

  return null;
}

