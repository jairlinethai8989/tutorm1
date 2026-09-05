/**
 * Tutor M.1 Event Idempotency Engine
 * Prevents duplicate events (e.g. duplicate attempt_completed from React re-renders or multi-save)
 */

const STORAGE_KEYS = {
  SENT_ATTEMPTS: 'tutor_m1_sent_attempts',
};

const MAX_CACHED_ATTEMPTS = 100;

/**
 * Check if a specific attempt has already triggered an event for the given event scope
 */
export function isAttemptAlreadyTracked(attemptId: string, eventName: string = 'attempt_completed'): boolean {
  if (typeof window === 'undefined' || !attemptId) return false;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.SENT_ATTEMPTS);
    if (!raw) return false;
    const sentIds: string[] = JSON.parse(raw);
    const key = `${eventName}:${attemptId}`;
    return sentIds.includes(key) || sentIds.includes(attemptId);
  } catch {
    return false;
  }
}

/**
 * Record that an event has been successfully dispatched to analytics for this attempt
 */
export function markAttemptAsTracked(attemptId: string, eventName: string = 'attempt_completed'): void {
  if (typeof window === 'undefined' || !attemptId) return;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.SENT_ATTEMPTS);
    const sentIds: string[] = raw ? JSON.parse(raw) : [];
    const key = `${eventName}:${attemptId}`;
    if (!sentIds.includes(key)) {
      sentIds.push(key);
      // Keep only recent attempts to prevent unbounded storage
      const trimmed = sentIds.slice(-MAX_CACHED_ATTEMPTS);
      sessionStorage.setItem(STORAGE_KEYS.SENT_ATTEMPTS, JSON.stringify(trimmed));
    }
  } catch (e) {
    console.warn('Could not record attempt idempotency in sessionStorage', e);
  }
}
