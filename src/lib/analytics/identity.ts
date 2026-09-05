/**
 * Tutor M.1 Anonymous Device & Session Identity Engine
 * Zero-PII Policy: Does NOT read, store, or transmit student names or personal data.
 */

const STORAGE_KEYS = {
  ANONYMOUS_ID: 'tutor_m1_anon_id',
  SESSION_ID: 'tutor_m1_session_id',
  SESSION_LAST_ACTIVE: 'tutor_m1_session_last_active',
};

const SESSION_INACTIVITY_LIMIT_MS = 30 * 60 * 1000; // 30 Minutes

/**
 * Generate a random UUID-like string with tm1_ prefix
 */
function generateRandomId(prefix: string): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID().replace(/-/g, '').substring(0, 16)}`;
  }
  const rand = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return `${prefix}_${rand.substring(0, 16)}`;
}

/**
 * Retrieve or create persistent anonymous device identifier (tm1_...)
 */
export function getOrCreateAnonymousId(): string {
  if (typeof window === 'undefined') return 'tm1_server_prerender';
  try {
    let anonId = localStorage.getItem(STORAGE_KEYS.ANONYMOUS_ID);
    if (!anonId) {
      anonId = generateRandomId('tm1');
      localStorage.setItem(STORAGE_KEYS.ANONYMOUS_ID, anonId);
    }
    return anonId;
  } catch {
    return generateRandomId('tm1_fallback');
  }
}

/**
 * Retrieve or create rolling session identifier (sess_...)
 * Automatically rotates after 30 minutes of user inactivity.
 */
export function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'sess_server_prerender';
  try {
    const now = Date.now();
    const lastActive = Number(sessionStorage.getItem(STORAGE_KEYS.SESSION_LAST_ACTIVE) || 0);
    let sessionId = sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);

    // If session expired or doesn't exist, create a new session
    if (!sessionId || (lastActive && now - lastActive > SESSION_INACTIVITY_LIMIT_MS)) {
      sessionId = generateRandomId('sess');
      sessionStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
    }

    // Refresh last active timestamp
    sessionStorage.setItem(STORAGE_KEYS.SESSION_LAST_ACTIVE, String(now));
    return sessionId;
  } catch {
    return generateRandomId('sess_fallback');
  }
}

/**
 * Detect client device classification
 */
export function detectDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) || (width >= 640 && width < 1024)) {
    return 'tablet';
  }
  if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop/i.test(ua) || width < 640) {
    return 'mobile';
  }
  return 'desktop';
}
