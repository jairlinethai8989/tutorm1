/**
 * Tutor M.1 Event Idempotency Engine
 * Prevents duplicate events (e.g. duplicate attempt_completed from React re-renders or multi-save)
 */

const STORAGE_KEYS = {
  SENT_ATTEMPTS: 'tutor_m1_sent_attempts',
};

const MAX_CACHED_ATTEMPTS = 100;

/**
 * Check if a specific attempt has already triggered an attempt_completed event
 */
export function isAttemptAlreadyTracked(attemptId: string): boolean {
  if (typeof window === 'undefined' || !attemptId) return false;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.SENT_ATTEMPTS);
    if (!raw) return false;
    const sentIds: string[] = JSON.parse(raw);
    return sentIds.includes(attemptId);
  } catch {
    return false;
  }
}

/**
 * Record that an attempt has been successfully dispatched to analytics
 */
export function markAttemptAsTracked(attemptId: string): void {
  if (typeof window === 'undefined' || !attemptId) return;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.SENT_ATTEMPTS);
    const sentIds: string[] = raw ? JSON.parse(raw) : [];
    if (!sentIds.includes(attemptId)) {
      sentIds.push(attemptId);
      // Keep only recent attempts to prevent unbounded storage
      const trimmed = sentIds.slice(-MAX_CACHED_ATTEMPTS);
      sessionStorage.setItem(STORAGE_KEYS.SENT_ATTEMPTS, JSON.stringify(trimmed));
    }
  } catch (e) {
    console.warn('Could not record attempt idempotency in sessionStorage', e);
  }
}
