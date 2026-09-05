import { createHmac, randomBytes } from 'crypto';
import { ControlCenterAuditRecord, ControlCenterPermission } from './types';

/**
 * Validates that AUDIT_PSEUDONYM_KEY is strictly formatted Base64/Base64URL,
 * matches canonical round-trip encoding (zero trailing garbage or malformed padding),
 * and provides at least 32 bytes (256 bits) of decoded key strength.
 */
export function getValidatedAuditKey(): Buffer {
  const rawKey = process.env.AUDIT_PSEUDONYM_KEY;
  if (!rawKey || rawKey.trim().length === 0) {
    throw new Error('FATAL: AUDIT_PSEUDONYM_KEY is required and cannot be empty. Failing closed.');
  }

  // 1. Strict Alphabet & Padding Validation (Base64 or Base64URL)
  const isStandardB64 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(rawKey);
  const isUrlB64 = /^[A-Za-z0-9_-]+$/.test(rawKey);

  if (!isStandardB64 && !isUrlB64) {
    throw new Error('FATAL: AUDIT_PSEUDONYM_KEY contains invalid characters or malformed padding. Failing closed.');
  }

  // 2. Decode to Buffer
  const encoding = isUrlB64 ? 'base64url' : 'base64';
  const decodedBuf = Buffer.from(rawKey, encoding);

  // 3. Canonical Round-Trip Comparison (Rejects trailing garbage or corrupt padding)
  const reEncoded = decodedBuf.toString(encoding);
  if (reEncoded !== rawKey) {
    throw new Error('FATAL: AUDIT_PSEUDONYM_KEY failed canonical round-trip validation (trailing garbage or non-canonical padding detected). Failing closed.');
  }

  // 4. Minimum Key Strength (at least 32 bytes = 256 bits)
  if (decodedBuf.length < 32) {
    throw new Error(`FATAL: AUDIT_PSEUDONYM_KEY has insufficient key strength (${decodedBuf.length} bytes; minimum 32 bytes required). Failing closed.`);
  }

  return decodedBuf;
}

/**
 * Validates that AUDIT_IP_SALT_KEY is strictly formatted Base64/Base64URL,
 * matches canonical round-trip encoding, and provides at least 32 bytes (256 bits) of decoded key strength.
 */
export function getValidatedIpSaltKey(): Buffer {
  const rawKey = process.env.AUDIT_IP_SALT_KEY;
  if (!rawKey || rawKey.trim().length === 0) {
    throw new Error('FATAL: AUDIT_IP_SALT_KEY is required and cannot be empty. Failing closed.');
  }

  const isStandardB64 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(rawKey);
  const isUrlB64 = /^[A-Za-z0-9_-]+$/.test(rawKey);

  if (!isStandardB64 && !isUrlB64) {
    throw new Error('FATAL: AUDIT_IP_SALT_KEY contains invalid characters or malformed padding. Failing closed.');
  }

  const encoding = isUrlB64 ? 'base64url' : 'base64';
  const decodedBuf = Buffer.from(rawKey, encoding);

  const reEncoded = decodedBuf.toString(encoding);
  if (reEncoded !== rawKey) {
    throw new Error('FATAL: AUDIT_IP_SALT_KEY failed canonical round-trip validation. Failing closed.');
  }

  if (decodedBuf.length < 32) {
    throw new Error(`FATAL: AUDIT_IP_SALT_KEY has insufficient key strength (${decodedBuf.length} bytes; minimum 32 bytes required). Failing closed.`);
  }

  return decodedBuf;
}

export function derivePseudonymousActorId(issuer: string, subject: string): string {
  const secretKey = getValidatedAuditKey();
  const hmac = createHmac('sha256', secretKey);
  hmac.update(`${issuer}:${subject}`);
  return 'usr_' + hmac.digest('hex').slice(0, 16);
}

/**
 * Computes salted coarse IP hash rotating daily by incorporating current date into HMAC data.
 */
export function generateCoarseIpHash(ip: string): string {
  const secretKey = getValidatedIpSaltKey();
  const today = new Date().toISOString().slice(0, 10);
  const hmac = createHmac('sha256', secretKey);
  hmac.update(`${today}:${ip}`);
  return 'ip_' + hmac.digest('hex').slice(0, 16);
}

/**
 * Sanitizes audit resource URL to strictly strip query parameters, search strings, and credentials.
 */
export function sanitizeAuditResource(rawUrl: string): string {
  try {
    const parsed = new URL(rawUrl, 'http://localhost');
    return parsed.pathname;
  } catch {
    return '/unknown';
  }
}

export function createAuditRecord(params: {
  pseudonymousActorId: string;
  permissionTested: ControlCenterPermission;
  decision: 'ALLOW' | 'DENY';
  resource: string;
  ip: string;
  userAgent?: string;
}): ControlCenterAuditRecord {
  const ua = (params.userAgent || '').toLowerCase();
  let clientCategory: 'desktop' | 'mobile' | 'tablet' | 'unknown' = 'desktop';
  if (ua.includes('tablet') || ua.includes('ipad')) clientCategory = 'tablet';
  else if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) clientCategory = 'mobile';

  return {
    eventId: 'evt_' + randomBytes(16).toString('hex'),
    pseudonymousActorId: params.pseudonymousActorId,
    permissionTested: params.permissionTested,
    decision: params.decision,
    resource: sanitizeAuditResource(params.resource),
    timestamp: new Date().toISOString(),
    ipHashCoarse: generateCoarseIpHash(params.ip),
    clientCategory,
  };
}
