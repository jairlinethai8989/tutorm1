/**
 * Comprehensive Automated Test Suite for Tutor M.1 Control Center (Phase C)
 * Covers:
 * 1. Fail-closed configuration validation
 * 2. Audit key canonical round-trip, alphabet & minimum 32-byte strength
 * 3. NIST AAL2 AMR multi-factor policy
 * 4. Dual session lifetime enforcement (15m idle / 8h hard ceiling)
 * 5. Compound identity allowlist resolution (default deny)
 * 6. Atomic single-use handshake consumption (CSRF/replay defense)
 * 7. Zero-PII telemetry aggregation schema compliance
 */

import { requireEnv, getGoogleOidcConfig } from '../lib/control-center/auth/config';
import { getValidatedAuditKey, derivePseudonymousActorId } from '../lib/control-center/auth/audit';
import { verifyGoogleMFA } from '../lib/control-center/auth/googlePolicy';
import { isSessionValid } from '../lib/control-center/auth/session';
import { resolveIdentityPermissions } from '../lib/control-center/auth/identity';
import { getSessionStore } from '../lib/control-center/auth/sessionStore';
import { fetchGA4TelemetryMetrics } from '../lib/control-center/aggregation/ga4-adapter';
import { fetchVercelWebMetrics } from '../lib/control-center/aggregation/vercel-adapter';
import { ServerSessionRecord } from '../lib/control-center/auth/types';
import crypto from 'crypto';

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`  [PASS] ${testName}`);
    passed++;
  } else {
    console.error(`  [FAIL] ${testName}`);
    failed++;
  }
}

function assertThrows(fn: () => void, testName: string, expectedSnippet?: string) {
  try {
    fn();
    console.error(`  [FAIL] ${testName} (Expected exception but none was thrown)`);
    failed++;
  } catch (err: any) {
    if (expectedSnippet && !err.message.includes(expectedSnippet)) {
      console.error(`  [FAIL] ${testName} (Message "${err.message}" did not contain "${expectedSnippet}")`);
      failed++;
    } else {
      console.log(`  [PASS] ${testName}`);
      passed++;
    }
  }
}

async function runTests() {
  console.log('=== Tutor M.1 Control Center Automated Verification ===\n');

  // --- Suite 1: Fail-Closed Configuration Validator ---
  console.log('--- 1. Configuration Fail-Closed Tests ---');
  const origEnv = { ...process.env };

  delete process.env.GOOGLE_OIDC_CLIENT_ID;
  delete process.env.GOOGLE_OIDC_CLIENT_SECRET;
  delete process.env.GOOGLE_OIDC_REDIRECT_URI;

  assertThrows(() => requireEnv('GOOGLE_OIDC_CLIENT_ID'), 'requireEnv throws when env var is missing');
  assertThrows(() => getGoogleOidcConfig(), 'getGoogleOidcConfig throws when client secret missing', 'GOOGLE_OIDC_CLIENT_ID');

  process.env.GOOGLE_OIDC_CLIENT_ID = 'test-client-id.apps.googleusercontent.com';
  assertThrows(() => getGoogleOidcConfig(), 'getGoogleOidcConfig throws when redirect_uri missing', 'GOOGLE_OIDC_REDIRECT_URI');

  process.env.GOOGLE_OIDC_REDIRECT_URI = 'https://tutorm1.com/api/control-center/auth/callback';
  assertThrows(() => getGoogleOidcConfig(), 'getGoogleOidcConfig throws when client_secret missing', 'GOOGLE_OIDC_CLIENT_SECRET');

  process.env.GOOGLE_OIDC_CLIENT_SECRET = 'GOCSPX-confidential_secret_value';
  const cfg = getGoogleOidcConfig();
  assert(cfg.clientId === 'test-client-id.apps.googleusercontent.com', 'getGoogleOidcConfig retrieves clientId');
  assert(cfg.clientSecret === 'GOCSPX-confidential_secret_value', 'getGoogleOidcConfig retrieves confidential clientSecret');
  assert(cfg.redirectUri === 'https://tutorm1.com/api/control-center/auth/callback', 'getGoogleOidcConfig retrieves redirectUri');

  // --- Suite 2: Audit Key Canonical Round-Trip & Minimum Strength ---
  console.log('\n--- 2. Audit Key Strict Validation & Round-Trip Tests ---');
  delete process.env.AUDIT_PSEUDONYM_KEY;
  assertThrows(() => getValidatedAuditKey(), 'getValidatedAuditKey throws when key is missing');

  // Short key (< 32 bytes)
  process.env.AUDIT_PSEUDONYM_KEY = Buffer.from('short_secret').toString('base64');
  assertThrows(() => getValidatedAuditKey(), 'getValidatedAuditKey rejects key under 32 bytes', 'insufficient key strength');

  // Malformed characters
  process.env.AUDIT_PSEUDONYM_KEY = 'Invalid!Alphabet#Key$With%Symbols&*()';
  assertThrows(() => getValidatedAuditKey(), 'getValidatedAuditKey rejects invalid alphabet characters');

  // Trailing garbage / non-canonical padding (32 bytes followed by extra char)
  const valid32Raw = crypto.randomBytes(32).toString('base64');
  process.env.AUDIT_PSEUDONYM_KEY = valid32Raw + 'A';
  assertThrows(() => getValidatedAuditKey(), 'getValidatedAuditKey rejects trailing garbage or non-canonical round-trip');

  // Valid 32-byte Base64 key
  process.env.AUDIT_PSEUDONYM_KEY = valid32Raw;
  const keyBuf = getValidatedAuditKey();
  assert(keyBuf.length >= 32, 'Valid 32-byte Base64 key accepted');

  // Derive pseudonymous actor ID
  const actorId1 = derivePseudonymousActorId('https://accounts.google.com', 'google_sub_1092837465');
  const actorId2 = derivePseudonymousActorId('https://accounts.google.com', 'google_sub_1092837465');
  const actorId3 = derivePseudonymousActorId('https://accounts.google.com', 'google_sub_different');

  assert(actorId1.startsWith('usr_'), 'Actor ID has usr_ prefix');
  assert(actorId1.length === 20, 'Actor ID length is prefix (4) + hex (16) = 20 chars');
  assert(actorId1 === actorId2, 'Actor ID derivation is deterministic for same issuer/subject');
  assert(actorId1 !== actorId3, 'Actor ID differs for different subjects');

  // --- Suite 3: NIST AAL2 AMR Multi-Factor Verification ---
  console.log('\n--- 3. Google NIST AAL2 Multi-Factor Policy Tests ---');
  assert(!verifyGoogleMFA({}).isValid, 'Empty claims rejected (no AMR)');
  assert(!verifyGoogleMFA({ amr: [] }).isValid, 'Empty AMR array rejected');
  assert(!verifyGoogleMFA({ amr: ['pwd'] }).isValid, 'Single factor password rejected');
  assert(!verifyGoogleMFA({ amr: ['otp'] }).isValid, 'Single factor OTP rejected');
  assert(verifyGoogleMFA({ amr: ['mfa'] }).isValid, 'Explicit mfa indicator accepted');
  assert(verifyGoogleMFA({ amr: ['pwd', 'totp'] }).isValid, 'Knowledge + Possession (pwd + totp) accepted');
  assert(verifyGoogleMFA({ amr: ['pin', 'fido'] }).isValid, 'Knowledge + Possession (pin + fido) accepted');
  assert(verifyGoogleMFA({ amr: ['pwd', 'hwk'] }).isValid, 'Knowledge + Possession (pwd + hwk) accepted');

  // --- Suite 4: Dual Session Lifetime Enforcement ---
  console.log('\n--- 4. Dual Session Lifetime Tests ---');
  const now = Date.now();
  const validSession: ServerSessionRecord = {
    sessionId: 'sess_valid',
    actorId: 'usr_abc123',
    role: 'telemetry_viewer',
    permissions: ['aggregate:read'],
    createdAt: now - 5 * 60 * 1000,     // 5 minutes old
    lastActiveAt: now - 2 * 60 * 1000,  // 2 minutes idle
    expiresAt: now + 7 * 3600 * 1000,
  };
  assert(isSessionValid(validSession).valid, 'Fresh session within idle and absolute limit is valid');

  const idleSession: ServerSessionRecord = {
    ...validSession,
    lastActiveAt: now - 16 * 60 * 1000, // 16 minutes idle (> 15m)
  };
  const idleCheck = isSessionValid(idleSession);
  assert(!idleCheck.valid, 'Session idle > 15 minutes is invalid');
  assert(idleCheck.reason?.includes('15-minute idle inactivity') ?? false, 'Idle timeout reason reported');

  const expiredSession: ServerSessionRecord = {
    ...validSession,
    createdAt: now - (8 * 3600 * 1000 + 1000), // > 8 hours
    lastActiveAt: now - 1 * 60 * 1000,
    expiresAt: now - 1000,
  };
  const expiredCheck = isSessionValid(expiredSession);
  assert(!expiredCheck.valid, 'Session older than 8 hours is invalid even if recently active');
  assert(expiredCheck.reason?.includes('8-hour absolute maximum lifetime') ?? false, '8-hour ceiling reason reported');

  // --- Suite 5: Compound Identity Allowlist Resolution ---
  console.log('\n--- 5. Compound Identity Allowlist Tests ---');
  delete process.env.CONTROL_CENTER_USER_MAPPINGS;
  assert(resolveIdentityPermissions('https://accounts.google.com', '123') === null, 'Default deny when mappings empty');

  process.env.CONTROL_CENTER_USER_MAPPINGS = JSON.stringify([
    {
      issuer: 'https://accounts.google.com',
      subject: 'sub_admin_001',
      role: 'telemetry_admin',
      permissions: ['aggregate:read', 'audit:read'],
    },
    {
      issuer: 'https://accounts.google.com',
      subject: 'sub_viewer_002',
      role: 'telemetry_viewer',
      permissions: ['aggregate:read'],
    },
  ]);

  const adminBinding = resolveIdentityPermissions('https://accounts.google.com', 'sub_admin_001');
  assert(adminBinding?.role === 'telemetry_admin', 'Admin identity correctly bound');
  assert(adminBinding?.permissions.includes('audit:read') ?? false, 'Admin has audit:read permission');

  const viewerBinding = resolveIdentityPermissions('https://accounts.google.com', 'sub_viewer_002');
  assert(viewerBinding?.role === 'telemetry_viewer', 'Viewer identity correctly bound');
  assert(!viewerBinding?.permissions.includes('audit:read'), 'Viewer does not have audit:read permission');

  assert(resolveIdentityPermissions('https://accounts.google.com', 'sub_unknown') === null, 'Unknown subject denied');
  assert(resolveIdentityPermissions('https://other-issuer.com', 'sub_admin_001') === null, 'Wrong issuer denied');

  // --- Suite 6: Atomic Handshake Consumption (CSRF / Replay defense) ---
  console.log('\n--- 6. Atomic Single-Use Handshake Consumption Tests ---');
  const store = getSessionStore();
  const testTxn = 'txn_unit_test_' + Date.now();
  await store.saveHandshake(testTxn, {
    state: 'csrf_state_xyz',
    nonce: 'nonce_abc123',
    codeVerifier: 'verifier_456',
    createdAt: Date.now(),
  });

  const firstConsume = await store.getdelHandshake(testTxn);
  assert(firstConsume !== null, 'First handshake consumption succeeds');
  assert(firstConsume?.state === 'csrf_state_xyz', 'First consumption returns accurate state');

  const secondConsume = await store.getdelHandshake(testTxn);
  assert(secondConsume === null, 'Second handshake consumption returns null (replay prevented)');

  // --- Suite 7: Telemetry Aggregation & Zero-PII Compliance ---
  console.log('\n--- 7. Telemetry Aggregation & Zero-PII Tests ---');
  const ga4Res = await fetchGA4TelemetryMetrics('7d');
  const vercelRes = await fetchVercelWebMetrics('7d');

  assert(ga4Res.examStarts > 0, 'GA4 starts count is positive');
  assert(ga4Res.funnels.mockExamFunnel.length === 4, 'Mock exam funnel has 4 progression steps');
  assert(ga4Res.funnels.aiPracticeFunnel.length === 5, 'AI practice funnel has 5 milestone steps');
  assert(vercelRes.uniqueVisitors > 0, 'Vercel unique visitors is positive');

  // Zero-PII Invariant: verify no PII fields in aggregated payload
  const jsonStr = JSON.stringify({ ga4Res, vercelRes });
  const forbiddenPatterns = [
    'email',
    'phone',
    'student_name',
    'first_name',
    'last_name',
    'school_id',
    'raw_question',
  ];
  let piiDetected = false;
  for (const pattern of forbiddenPatterns) {
    if (jsonStr.includes(`"${pattern}"`)) {
      piiDetected = true;
      console.error(`  [FAIL] Forbidden PII field found: ${pattern}`);
    }
  }
  assert(!piiDetected, 'Zero-PII verification passed: no student PII in telemetry aggregates');

  // Restore env
  process.env = origEnv;

  console.log(`\n=== Test Results: ${passed} passed, ${failed} failed ===`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test runner error:', err);
  process.exit(1);
});
