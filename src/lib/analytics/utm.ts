/**
 * Tutor M.1 UTM Attribution Engine (V1)
 * 7 Standardized Traffic Categories:
 * - Facebook Organic
 * - Facebook Groups
 * - TikTok Organic
 * - Google Organic
 * - LINE
 * - Direct
 * - Other
 */

import { TrafficCategory } from './types';

const STORAGE_KEYS = {
  FIRST_TOUCH_SOURCE: 'tutor_m1_first_source',
  FIRST_TOUCH_CAMPAIGN: 'tutor_m1_first_campaign',
  FIRST_TOUCH_TIMESTAMP: 'tutor_m1_first_touch_at',
  LAST_TOUCH_SOURCE: 'tutor_m1_last_source',
};

/**
 * Categorize incoming traffic source based on UTM params and document referrer
 */
export function resolveTrafficCategory(searchParams?: URLSearchParams, referrerUrl?: string): TrafficCategory {
  const params = searchParams || (typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams());
  const ref = (referrerUrl || (typeof document !== 'undefined' ? document.referrer : '')).toLowerCase();

  const source = (params.get('utm_source') || '').toLowerCase();
  const medium = (params.get('utm_medium') || '').toLowerCase();
  const campaign = (params.get('utm_campaign') || '').toLowerCase();

  // 1. Facebook Groups vs Facebook Organic
  if (source.includes('facebook') || ref.includes('facebook.com') || ref.includes('fb.com') || ref.includes('fb.me')) {
    if (medium === 'group' || campaign.includes('group') || medium.includes('community')) {
      return 'Facebook Groups';
    }
    return 'Facebook Organic';
  }

  // 2. TikTok Organic
  if (source.includes('tiktok') || ref.includes('tiktok.com') || medium.includes('tiktok')) {
    return 'TikTok Organic';
  }

  // 3. Google Organic
  if (source.includes('google') || ref.includes('google.co.th') || ref.includes('google.com') || medium === 'organic') {
    return 'Google Organic';
  }

  // 4. LINE
  if (source.includes('line') || ref.includes('line.me') || ref.includes('l.line.me') || medium.includes('line')) {
    return 'LINE';
  }

  // 5. Direct (No referrer and no UTM source)
  if (!ref && !source) {
    return 'Direct';
  }

  // 6. Other (YouTube, Twitter/X, Referral blogs, etc.)
  return 'Other';
}

/**
 * Capture and persist First-Touch & Last-Touch UTM Attribution
 */
export function captureAndPersistUTM(): { firstTouchSource: TrafficCategory; firstTouchCampaign?: string } {
  if (typeof window === 'undefined') {
    return { firstTouchSource: 'Direct' };
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const category = resolveTrafficCategory(params, document.referrer);
    const campaign = params.get('utm_campaign') || undefined;

    // Check if First-Touch is already recorded
    let firstSource = localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH_SOURCE) as TrafficCategory | null;
    let firstCampaign = localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH_CAMPAIGN) || undefined;

    if (!firstSource) {
      firstSource = category;
      localStorage.setItem(STORAGE_KEYS.FIRST_TOUCH_SOURCE, category);
      localStorage.setItem(STORAGE_KEYS.FIRST_TOUCH_TIMESTAMP, new Date().toISOString());
      if (campaign) {
        firstCampaign = campaign;
        localStorage.setItem(STORAGE_KEYS.FIRST_TOUCH_CAMPAIGN, campaign);
      }
    }

    // Always update last touch in current session
    sessionStorage.setItem(STORAGE_KEYS.LAST_TOUCH_SOURCE, category);

    return {
      firstTouchSource: firstSource,
      firstTouchCampaign: firstCampaign,
    };
  } catch {
    return { firstTouchSource: 'Direct' };
  }
}

/**
 * Retrieve saved First-Touch Attribution
 */
export function getFirstTouchAttribution(): { firstTouchSource: TrafficCategory; firstTouchCampaign?: string } {
  if (typeof window === 'undefined') return { firstTouchSource: 'Direct' };
  try {
    const source = (localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH_SOURCE) as TrafficCategory) || 'Direct';
    const campaign = localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH_CAMPAIGN) || undefined;
    return { firstTouchSource: source, firstTouchCampaign: campaign };
  } catch {
    return { firstTouchSource: 'Direct' };
  }
}
