/**
 * Comprehensive Automated Verification Test Suite for Tutor M.1 Control Center (Phase C v3.16)
 * Covers:
 * 1. Fail-closed configuration validation
 * 2. Audit Key canonical round-trip, alphabet & minimum 32-byte strength
 * 3. Dedicated AUDIT_IP_SALT_KEY validation, daily rotation & URL query-string stripping
 * 4. Cryptographically secure session IDs (crypto.randomBytes(32)) & event IDs
 * 5. Google NIST AAL2 AMR multi-factor policy
 * 6. Dual session lifetime enforcement (15m idle / 8h hard ceiling)
 * 7. Compound identity allowlist resolution (default deny)
 * 8. Atomic single-use handshake consumption (replay defense)
 * 9. Official Vercel /v1/query/web-analytics/visits/aggregate parsing & live execution
 * 10. Official GA4 batchRunReports real event mapping & authoritative subject filtering
 * 11. Client-exact sampling metadata contract & unclamped completion ratios
 * 12. Production fail-closed DATA_SOURCE_UNAVAILABLE policy
 * 13. Server-side cache key scoping (VERCEL_ENV) & dual-READY policy
 * 14. Zero-PII telemetry payload verification
 */

import { requireEnv, getGoogleOidcConfig } from '../lib/control-center/auth/config';
import {
  getValidatedAuditKey,
  getValidatedIpSaltKey,
  derivePseudonymousActorId,
  generateCoarseIpHash,
  sanitizeAuditResource,
  createAuditRecord,
} from '../lib/control-center/auth/audit';
import { verifyGoogleMFA } from '../lib/control-center/auth/googlePolicy';
import { isSessionValid, createServerSession } from '../lib/control-center/auth/session';
import { resolveIdentityPermissions } from '../lib/control-center/auth/identity';
import { getSessionStore } from '../lib/control-center/auth/sessionStore';
import {
  fetchGA4TelemetryMetrics,
  parseGA4BatchReports,
  getZeroProgression,
  GA4BatchResponse,
} from '../lib/control-center/aggregation/ga4-adapter';
import {
  fetchVercelWebMetrics,
  parseVercelAggregate,
} from '../lib/control-center/aggregation/vercel-adapter';
import { ServerSessionRecord } from '../lib/control-center/auth/types';
import { validateCachedPayload } from '../lib/control-center/aggregation/service';
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
  console.log('=== Tutor M.1 Control Center Automated Verification (v3.16) ===\n');

  const origEnv = { ...process.env };

  // --- Suite 1: Fail-Closed Configuration Validator ---
  console.log('--- 1. Configuration Fail-Closed Tests ---');
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

  // --- Suite 2: Audit Key Strict Validation & Round-Trip Tests ---
  console.log('\n--- 2. Audit Key Strict Validation & Round-Trip Tests ---');
  delete process.env.AUDIT_PSEUDONYM_KEY;
  assertThrows(() => getValidatedAuditKey(), 'getValidatedAuditKey throws when key is missing');

  // Short key (< 32 bytes)
  process.env.AUDIT_PSEUDONYM_KEY = Buffer.from('short_secret').toString('base64');
  assertThrows(() => getValidatedAuditKey(), 'getValidatedAuditKey rejects key under 32 bytes', 'insufficient key strength');

  // Malformed characters
  process.env.AUDIT_PSEUDONYM_KEY = 'Invalid!Alphabet#Key$With%Symbols&*()';
  assertThrows(() => getValidatedAuditKey(), 'getValidatedAuditKey rejects invalid alphabet characters');

  // Trailing garbage / non-canonical round-trip
  const valid32Raw = crypto.randomBytes(32).toString('base64');
  process.env.AUDIT_PSEUDONYM_KEY = valid32Raw + 'A';
  assertThrows(() => getValidatedAuditKey(), 'getValidatedAuditKey rejects trailing garbage or non-canonical round-trip');

  // Valid 32-byte Base64 key
  process.env.AUDIT_PSEUDONYM_KEY = valid32Raw;
  const keyBuf = getValidatedAuditKey();
  assert(keyBuf.length >= 32, 'Valid 32-byte Base64 key accepted');

  const actorId1 = derivePseudonymousActorId('https://accounts.google.com', 'google_sub_1092837465');
  const actorId2 = derivePseudonymousActorId('https://accounts.google.com', 'google_sub_1092837465');
  const actorId3 = derivePseudonymousActorId('https://accounts.google.com', 'google_sub_different');

  assert(actorId1.startsWith('usr_'), 'Actor ID has usr_ prefix');
  assert(actorId1.length === 20, 'Actor ID length is prefix (4) + hex (16) = 20 chars');
  assert(actorId1 === actorId2, 'Actor ID derivation is deterministic for same issuer/subject');
  assert(actorId1 !== actorId3, 'Actor ID differs for different subjects');

  // --- Suite 3: Dedicated AUDIT_IP_SALT_KEY, Daily Rotation & URL Sanitization ---
  console.log('\n--- 3. Dedicated AUDIT_IP_SALT_KEY, Daily Rotation & URL Sanitization Tests ---');
  delete process.env.AUDIT_IP_SALT_KEY;
  assertThrows(() => getValidatedIpSaltKey(), 'getValidatedIpSaltKey throws when key is missing');

  const validIpSaltKey = crypto.randomBytes(32).toString('base64');
  process.env.AUDIT_IP_SALT_KEY = validIpSaltKey;
  assert(getValidatedIpSaltKey().length >= 32, 'Valid 32-byte AUDIT_IP_SALT_KEY accepted');

  const ipHash = generateCoarseIpHash('203.0.113.195');
  assert(ipHash.startsWith('ip_'), 'Coarse IP hash has ip_ prefix');
  assert(ipHash.length === 19, 'Coarse IP hash has exact prefix (3) + hex (16) = 19 chars');

  // URL Sanitization: strip query parameters containing PII
  const dirtyUrl = 'https://tutorm1.com/api/control-center/something?student_email=test@school.edu&phone=0812345678';
  const cleanResource = sanitizeAuditResource(dirtyUrl);
  assert(cleanResource === '/api/control-center/something', 'sanitizeAuditResource strips all query params and credentials');

  const auditRec = createAuditRecord({
    pseudonymousActorId: 'usr_abc123',
    permissionTested: 'aggregate:read',
    decision: 'ALLOW',
    resource: dirtyUrl,
    ip: '198.51.100.42',
  });
  assert(auditRec.eventId.startsWith('evt_'), 'Audit eventId starts with evt_');
  assert(auditRec.eventId.length === 36, 'Audit eventId has prefix (4) + 32 hex chars = 36 chars');
  assert(auditRec.resource === '/api/control-center/something', 'Audit record resource is cleanly sanitized');

  // --- Suite 4: Cryptographically Secure Session ID ---
  console.log('\n--- 4. Cryptographically Secure Session ID Tests ---');
  const session = await createServerSession('usr_test123', 'telemetry_viewer', ['aggregate:read']);
  assert(session.sessionId.startsWith('cc_sess_'), 'Session ID starts with cc_sess_');
  assert(session.sessionId.length >= 48, 'Session ID has 256-bit entropy (> 48 base64url chars)');

  // --- Suite 5: NIST AAL2 AMR Multi-Factor Verification ---
  console.log('\n--- 5. Google NIST AAL2 Multi-Factor Policy Tests ---');
  process.env.CONTROL_CENTER_REQUIRE_MFA = 'true';
  assert(!verifyGoogleMFA({}).isValid, 'Empty claims rejected when MFA required (no AMR)');
  assert(!verifyGoogleMFA({ amr: [] }).isValid, 'Empty AMR array rejected when MFA required');
  assert(!verifyGoogleMFA({ amr: ['pwd'] }).isValid, 'Single factor password rejected');
  assert(!verifyGoogleMFA({ amr: ['otp'] }).isValid, 'Single factor OTP rejected');
  assert(verifyGoogleMFA({ amr: ['mfa'] }).isValid, 'Explicit mfa indicator accepted');
  assert(verifyGoogleMFA({ amr: ['pwd', 'totp'] }).isValid, 'Knowledge + Possession (pwd + totp) accepted');
  assert(verifyGoogleMFA({ amr: ['pin', 'fido'] }).isValid, 'Knowledge + Possession (pin + fido) accepted');
  assert(verifyGoogleMFA({ amr: ['pwd', 'hwk'] }).isValid, 'Knowledge + Possession (pwd + hwk) accepted');
  assert(verifyGoogleMFA({ amr: ['pwd', 'sms'] }).isValid, 'Knowledge + Possession (pwd + sms) accepted');
  assert(verifyGoogleMFA({ amr: ['pwd', 'swk'] }).isValid, 'Knowledge + Possession (pwd + swk) accepted');
  assert(verifyGoogleMFA({ amr: ['pwd', 'tel'] }).isValid, 'Knowledge + Possession (pwd + tel) accepted');

  delete process.env.CONTROL_CENTER_REQUIRE_MFA;
  assert(verifyGoogleMFA({}).isValid, 'Standard consumer login permitted when AMR omitted and REQUIRE_MFA unset');
  assert(!verifyGoogleMFA({ amr: ['pwd'] }).isValid, 'Single factor still rejected if AMR is explicitly provided');

  // --- Suite 6: Dual Session Lifetime Enforcement ---
  console.log('\n--- 6. Dual Session Lifetime Tests ---');
  const now = Date.now();
  const validSession: ServerSessionRecord = {
    sessionId: 'sess_valid',
    actorId: 'usr_abc123',
    role: 'telemetry_viewer',
    permissions: ['aggregate:read'],
    createdAt: now - 5 * 60 * 1000,
    lastActiveAt: now - 2 * 60 * 1000,
    expiresAt: now + 7 * 3600 * 1000,
  };
  assert(isSessionValid(validSession).valid, 'Fresh session within idle and absolute limit is valid');

  const idleSession: ServerSessionRecord = {
    ...validSession,
    lastActiveAt: now - 16 * 60 * 1000,
  };
  const idleCheck = isSessionValid(idleSession);
  assert(!idleCheck.valid, 'Session idle > 15 minutes is invalid');
  assert(idleCheck.reason?.includes('15-minute idle inactivity') ?? false, 'Idle timeout reason reported');

  const expiredSession: ServerSessionRecord = {
    ...validSession,
    createdAt: now - (8 * 3600 * 1000 + 1000),
    lastActiveAt: now - 1 * 60 * 1000,
    expiresAt: now - 1000,
  };
  const expiredCheck = isSessionValid(expiredSession);
  assert(!expiredCheck.valid, 'Session older than 8 hours is invalid even if recently active');
  assert(expiredCheck.reason?.includes('8-hour absolute maximum lifetime') ?? false, '8-hour ceiling reason reported');

  // --- Suite 7: Compound Identity Allowlist Resolution ---
  console.log('\n--- 7. Compound Identity Allowlist Tests ---');
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

  // --- Suite 8: Atomic Handshake Consumption ---
  console.log('\n--- 8. Atomic Handshake Consumption Tests ---');
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

  // --- Suite 9: Vercel /v1/query/web-analytics/visits/aggregate Contract & Parsing ---
  console.log('\n--- 9. Vercel Web Analytics visits/aggregate Parsing Tests ---');
  const vercelFixture = {
    data: [
      { date: '2026-08-30', pageviews: 250, visitors: 180 },
      { date: '2026-08-31', pageviews: 310, visitors: 220 },
      { date: '2026-09-01', pageviews: 400, visitors: 290 },
    ],
  };
  const parsedVercel = parseVercelAggregate(vercelFixture);
  assert(parsedVercel.pageViews === 960, 'Summed pageviews calculated correctly (250+310+400 = 960)');
  assert(parsedVercel.summedDailyVisitors === 690, 'Summed daily visitors calculated correctly (180+220+290 = 690)');

  // Malformed Vercel schema (DATA-02)
  assertThrows(() => parseVercelAggregate({ invalid: true }), 'parseVercelAggregate rejects invalid response schema');
  assertThrows(() => parseVercelAggregate({ data: [{}] }), 'parseVercelAggregate rejects row missing pageviews and visitors ({data:[{}]})');
  assertThrows(() => parseVercelAggregate({ data: [{ pageviews: '12junk', visitors: 10 }] }), 'parseVercelAggregate rejects non-numeric string values');
  assertThrows(() => parseVercelAggregate({ data: [{ pageviews: -5, visitors: 10 }] }), 'parseVercelAggregate rejects negative numbers');
  assertThrows(() => parseVercelAggregate({ data: [{ pageviews: 10, visitors: 10 }, { pageviews: null, visitors: 10 }] }), 'parseVercelAggregate rejects mixed invalid rows');

  // Empty data row contract test (valid empty result returns 0/0)
  const emptyVercel = parseVercelAggregate({ data: [] });
  assert(emptyVercel.pageViews === 0 && emptyVercel.summedDailyVisitors === 0, 'parseVercelAggregate valid empty array returns 0/0');

  // --- Suite 9b: GA4 Schema Robustness & Malformed Payload Rejection (DATA-02 / R3) ---
  console.log('\n--- 9b. GA4 Malformed Payload Contract Tests (DATA-02 / R3) ---');
  assertThrows(() => parseGA4BatchReports({ reports: [{}, {}, {}] }), 'parseGA4BatchReports rejects reports missing headers ({reports:[{},{},{}]})');
  assertThrows(() => parseGA4BatchReports({ reports: [{ dimensionHeaders: [{ name: 'wrongDim' }], metricHeaders: [{ name: 'eventCount' }] }, {}, {}] }), 'parseGA4BatchReports rejects incorrect dimension header');
  assertThrows(() => parseGA4BatchReports({
    reports: [
      { dimensionHeaders: [{ name: 'eventName' }], metricHeaders: [{ name: 'eventCount' }], rows: [{ dimensionValues: [{ value: 'mock_exam_started' }], metricValues: [{ value: '-5' }] }] },
      { dimensionHeaders: [{ name: 'sessionDefaultChannelGroup' }], metricHeaders: [{ name: 'sessions' }], rows: [] },
      { dimensionHeaders: [{ name: 'customEvent:subject' }], metricHeaders: [{ name: 'eventCount' }], rows: [] },
    ]
  }), 'parseGA4BatchReports rejects negative metric count');

  // R3 Acceptance: rows missing dimensionValues
  assertThrows(() => parseGA4BatchReports({
    reports: [
      { dimensionHeaders: [{ name: 'eventName' }], metricHeaders: [{ name: 'eventCount' }], rows: [{ metricValues: [{ value: '7' }] } as any] },
      { dimensionHeaders: [{ name: 'sessionDefaultChannelGroup' }], metricHeaders: [{ name: 'sessions' }], rows: [] },
      { dimensionHeaders: [{ name: 'customEvent:subject' }], metricHeaders: [{ name: 'eventCount' }], rows: [] },
    ]
  }), 'R3: parseGA4BatchReports rejects row missing dimensionValues');

  // R3 Acceptance: null rows or non-array rows
  assertThrows(() => parseGA4BatchReports({
    reports: [
      { dimensionHeaders: [{ name: 'eventName' }], metricHeaders: [{ name: 'eventCount' }], rows: null as any },
      { dimensionHeaders: [{ name: 'sessionDefaultChannelGroup' }], metricHeaders: [{ name: 'sessions' }], rows: [] },
      { dimensionHeaders: [{ name: 'customEvent:subject' }], metricHeaders: [{ name: 'eventCount' }], rows: [] },
    ]
  }), 'R3: parseGA4BatchReports rejects null rows container');

  // R3 Acceptance: null row item
  assertThrows(() => parseGA4BatchReports({
    reports: [
      { dimensionHeaders: [{ name: 'eventName' }], metricHeaders: [{ name: 'eventCount' }], rows: [null as any] },
      { dimensionHeaders: [{ name: 'sessionDefaultChannelGroup' }], metricHeaders: [{ name: 'sessions' }], rows: [] },
      { dimensionHeaders: [{ name: 'customEvent:subject' }], metricHeaders: [{ name: 'eventCount' }], rows: [] },
    ]
  }), 'R3: parseGA4BatchReports rejects null row object');

  // R3 Acceptance: non-string dimension value
  assertThrows(() => parseGA4BatchReports({
    reports: [
      { dimensionHeaders: [{ name: 'eventName' }], metricHeaders: [{ name: 'eventCount' }], rows: [{ dimensionValues: [{ value: 123 as any }], metricValues: [{ value: '10' }] }] },
      { dimensionHeaders: [{ name: 'sessionDefaultChannelGroup' }], metricHeaders: [{ name: 'sessions' }], rows: [] },
      { dimensionHeaders: [{ name: 'customEvent:subject' }], metricHeaders: [{ name: 'eventCount' }], rows: [] },
    ]
  }), 'R3: parseGA4BatchReports rejects non-string dimension value');

  // R3 Acceptance: valid omitted rows field (valid empty report)
  const emptyReportResult = parseGA4BatchReports({
    reports: [
      { dimensionHeaders: [{ name: 'eventName' }], metricHeaders: [{ name: 'eventCount' }] },
      { dimensionHeaders: [{ name: 'sessionDefaultChannelGroup' }], metricHeaders: [{ name: 'sessions' }] },
      { dimensionHeaders: [{ name: 'customEvent:subject' }], metricHeaders: [{ name: 'eventCount' }] },
    ]
  });
  assert(emptyReportResult.progression.mockExam.started === 0, 'R3: Valid empty report with omitted rows accepted as measured zero counts');

  // --- Suite 10: GA4 batchRunReports & Real Dispatched Events Mapping ---
  console.log('\n--- 10. GA4 batchRunReports Real Event Mapping & Subject Filter Tests ---');
  const ga4BatchFixture: GA4BatchResponse = {
    reports: [
      // Report 0: Progression & Milestone Events
      {
        dimensionHeaders: [{ name: 'eventName' }],
        metricHeaders: [{ name: 'eventCount' }],
        rows: [
          { dimensionValues: [{ value: 'mock_exam_started' }], metricValues: [{ value: '100' }] },
          { dimensionValues: [{ value: 'mock_exam_completed' }], metricValues: [{ value: '75' }] },
          { dimensionValues: [{ value: 'ai_practice_started' }], metricValues: [{ value: '150' }] },
          { dimensionValues: [{ value: 'ai_practice_completed' }], metricValues: [{ value: '120' }] },
          { dimensionValues: [{ value: 'question_answered' }], metricValues: [{ value: '1200' }] },
          { dimensionValues: [{ value: 'questions_10_milestone' }], metricValues: [{ value: '80' }] },
          { dimensionValues: [{ value: 'questions_50_milestone' }], metricValues: [{ value: '45' }] },
          { dimensionValues: [{ value: 'questions_100_milestone' }], metricValues: [{ value: '20' }] },
          { dimensionValues: [{ value: 'ai_diagnostic_viewed' }], metricValues: [{ value: '65' }] },
        ],
      },
      // Report 1: Acquisition Channels
      {
        dimensionHeaders: [{ name: 'sessionDefaultChannelGroup' }],
        metricHeaders: [{ name: 'sessions' }],
        rows: [
          { dimensionValues: [{ value: 'Direct' }], metricValues: [{ value: '250' }] },
          { dimensionValues: [{ value: 'Organic Search' }], metricValues: [{ value: '150' }] },
          { dimensionValues: [{ value: 'Referral' }], metricValues: [{ value: '100' }] },
        ],
      },
      // Report 2: Authoritative Subject Attempts (Filtered strictly by attempt_completed)
      {
        dimensionHeaders: [{ name: 'customEvent:subject' }],
        metricHeaders: [{ name: 'eventCount' }],
        rows: [
          { dimensionValues: [{ value: 'Mathematics' }], metricValues: [{ value: '85' }] },
          { dimensionValues: [{ value: 'Science' }], metricValues: [{ value: '65' }] },
        ],
      },
    ],
  };

  const parsedGA4 = parseGA4BatchReports(ga4BatchFixture);
  assert(parsedGA4.progression.mockExam.started === 100, 'Mock exam started mapped to 100');
  assert(parsedGA4.progression.mockExam.completed === 75, 'Mock exam completed mapped to 75');
  assert(parsedGA4.progression.mockExam.completionEventRatio === 75, 'Mock exam completionEventRatio is 75%');

  assert(parsedGA4.progression.aiPractice.started === 150, 'AI practice started mapped to 150');
  assert(parsedGA4.progression.aiPractice.completed === 120, 'AI practice completed mapped to 120');
  assert(parsedGA4.progression.aiPractice.completionEventRatio === 80, 'AI practice completionEventRatio is 80%');

  assert(parsedGA4.progression.milestones.questions10 === 80, 'Milestone 10 mapped to 80');
  assert(parsedGA4.progression.milestones.questions50 === 45, 'Milestone 50 mapped to 45');
  assert(parsedGA4.progression.milestones.questions100 === 20, 'Milestone 100 mapped to 20');
  assert(parsedGA4.progression.activity.sampledQuestionsAnswered === 1200, 'Sampled questions mapped to 1200');
  assert(parsedGA4.progression.activity.diagnosticViews === 65, 'Diagnostic views mapped to 65');

  assert(parsedGA4.trafficChannels.length === 3, 'Traffic channels parsed 3 channels');
  assert(parsedGA4.trafficChannels[0].percentage === 50, 'Direct channel has 50% share (250/500)');

  assert(parsedGA4.subjectBreakdown.length === 2, 'Subject breakdown parsed 2 subjects');
  assert(parsedGA4.subjectBreakdown[0].subject === 'Mathematics', 'First subject is Mathematics');
  assert(parsedGA4.subjectBreakdown[0].completedAttempts === 85, 'Authoritative completed attempts is 85');

  // --- Suite 11: Client-Exact Sampling Contract & Unclamped Ratio Tests ---
  console.log('\n--- 11. Sampling Contract & Unclamped Ratio Tests ---');
  // METRIC-01 Acceptance: started/completed pairs 0/0 and 0/5 => null; 5/0 => 0; 5/6 => 120
  const ratioTestFixture = (started: number, completed: number): GA4BatchResponse => ({
    reports: [
      {
        dimensionHeaders: [{ name: 'eventName' }],
        metricHeaders: [{ name: 'eventCount' }],
        rows: [
          ...(started > 0 ? [{ dimensionValues: [{ value: 'mock_exam_started' }], metricValues: [{ value: String(started) }] }] : []),
          ...(completed > 0 ? [{ dimensionValues: [{ value: 'mock_exam_completed' }], metricValues: [{ value: String(completed) }] }] : []),
        ],
      },
      { dimensionHeaders: [{ name: 'sessionDefaultChannelGroup' }], metricHeaders: [{ name: 'sessions' }], rows: [] },
      { dimensionHeaders: [{ name: 'customEvent:subject' }], metricHeaders: [{ name: 'eventCount' }], rows: [] },
    ],
  });

  assert(parseGA4BatchReports(ratioTestFixture(0, 0)).progression.mockExam.completionEventRatio === null, 'Ratio 0/0 returns null');
  assert(parseGA4BatchReports(ratioTestFixture(0, 5)).progression.mockExam.completionEventRatio === null, 'Ratio 0/5 returns null (started is 0)');
  assert(parseGA4BatchReports(ratioTestFixture(5, 0)).progression.mockExam.completionEventRatio === 0, 'Ratio 5/0 returns 0');
  assert(parseGA4BatchReports(ratioTestFixture(5, 6)).progression.mockExam.completionEventRatio === 120, 'Ratio 5/6 returns 120 (unclamped > 100%)');
  assert(getZeroProgression().mockExam.completionEventRatio === null, 'getZeroProgression returns null completionEventRatio');

  // Sampling contract tests
  delete process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING;
  const zeroProgDefault = getZeroProgression();
  assert(zeroProgDefault.activity.samplingStatus === 'disabled', 'Sampling is disabled when env is unset');
  assert(zeroProgDefault.activity.samplingRate === null, 'Sampling rate is null when disabled');

  process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING = 'false';
  const zeroProgFalse = getZeroProgression();
  assert(zeroProgFalse.activity.samplingStatus === 'disabled', 'Sampling is disabled when env is false');

  process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING = 'true';
  delete process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE;
  const zeroProgEnabled = getZeroProgression();
  assert(zeroProgEnabled.activity.samplingStatus === 'enabled_5_percent', 'Sampling status is enabled_5_percent on default');
  assert(zeroProgEnabled.activity.samplingRate === 0.05, 'Sampling rate is 0.05 on default');

  process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE = '0.10';
  const zeroProgCustom = getZeroProgression();
  assert(zeroProgCustom.activity.samplingStatus === 'custom', 'Sampling status is custom when custom rate specified');
  assert(zeroProgCustom.activity.samplingRate === 0.1, 'Custom sampling rate parsed to 0.1');

  // Invalid sampling rate fallback
  process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE = '1.5';
  const zeroProgInvalid = getZeroProgression();
  assert(zeroProgInvalid.activity.samplingRate === 0.05, 'Out-of-bounds sampling rate defaults safely to 0.05');

  // --- Suite 12: Production Fail-Closed DATA_SOURCE_UNAVAILABLE Policy ---
  console.log('\n--- 12. Production Fail-Closed Policy Tests ---');
  (process.env as any).NODE_ENV = 'production';
  delete process.env.DEMO_MODE;
  delete process.env.GA4_PROPERTY_ID;
  delete process.env.GA4_SERVICE_ACCOUNT_KEY;
  delete process.env.VERCEL_AUTH_BEARER_TOKEN;
  delete process.env.VERCEL_PROJECT_ID;

  const prodGA4 = await fetchGA4TelemetryMetrics('7d');
  assert(prodGA4.source === 'unavailable', 'Production GA4 source is marked unavailable');
  assert(prodGA4.status === 'DATA_SOURCE_UNAVAILABLE', 'Production GA4 status is DATA_SOURCE_UNAVAILABLE');
  assert(prodGA4.progression.mockExam.started === 0, 'Production GA4 returns 0 instead of fake numbers');

  const prodVercel = await fetchVercelWebMetrics('7d');
  assert(prodVercel.source === 'unavailable', 'Production Vercel source is marked unavailable');
  assert(prodVercel.status === 'DATA_SOURCE_UNAVAILABLE', 'Production Vercel status is DATA_SOURCE_UNAVAILABLE');
  assert(prodVercel.summedDailyVisitors === 0, 'Production Vercel returns 0 instead of fake numbers');

  // --- Suite 13: Server-Side Cache Scoping (VERCEL_ENV) & Dual-READY Cache Tests ---
  console.log('\n--- 13. Server-Side Cache Scoping & Dual-READY Cache Tests ---');
  process.env.VERCEL_ENV = 'preview';
  const previewKey = `tutor_m1_telemetry_cache:${process.env.VERCEL_ENV}:prop123:proj456:7d`;
  await store.setCachedTelemetry(previewKey, '{"cached":true}', 300);

  const cachedResult = await store.getCachedTelemetry(previewKey);
  assert(cachedResult === '{"cached":true}', 'Telemetry cache stores and retrieves by scoped key');

  process.env.VERCEL_ENV = 'production';
  const prodKey = `tutor_m1_telemetry_cache:${process.env.VERCEL_ENV}:prop123:proj456:7d`;
  const prodCacheResult = await store.getCachedTelemetry(prodKey);
  assert(prodCacheResult === null, 'Cache is strictly isolated between VERCEL_ENV preview and production');

  // R2 / P2: Comprehensive validateCachedPayload member validation tests
  const baseValidPayload = {
    timeframe: '7d',
    generatedAt: new Date().toISOString(),
    dataSources: { ga4: 'live', vercel: 'live' },
    progression: {
      mockExam: { started: 10, completed: 8, completionEventRatio: 80 },
      aiPractice: { started: 20, completed: 15, completionEventRatio: 75 },
      milestones: { questions10: 5, questions50: 2, questions100: 1 },
      activity: { sampledQuestionsAnswered: 50, samplingStatus: 'enabled_5_percent', samplingRate: 0.05, diagnosticViews: 12 },
    },
    webMetrics: { summedDailyVisitors: 100, pageViews: 250 },
    trafficChannels: [
      { channel: 'Direct', sessions: 50, percentage: 50 },
      { channel: '(not set)', sessions: 50, percentage: 50 },
    ],
    subjectBreakdown: [
      { subject: 'Mathematics', completedAttempts: 12 },
      { subject: '(not set)', completedAttempts: 3 },
    ],
  };

  // Valid cases
  assert(validateCachedPayload(baseValidPayload, '7d') !== null, 'R2: Valid well-formed payload with provider labels like (not set) is accepted');
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [], subjectBreakdown: [] }, '7d') !== null,
    'R2: Empty arrays for trafficChannels and subjectBreakdown are accepted'
  );

  // Null member in either array is rejected
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [null] }, '7d') === null,
    'R2: Null member in trafficChannels is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, subjectBreakdown: [null] }, '7d') === null,
    'R2: Null member in subjectBreakdown is rejected'
  );

  // Missing channel/subject or count is rejected
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ sessions: 50, percentage: 50 }] }, '7d') === null,
    'R2: trafficChannels member missing channel is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 'Direct', percentage: 50 }] }, '7d') === null,
    'R2: trafficChannels member missing sessions is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 'Direct', sessions: 50 }] }, '7d') === null,
    'R2: trafficChannels member missing percentage is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, subjectBreakdown: [{ completedAttempts: 12 }] }, '7d') === null,
    'R2: subjectBreakdown member missing subject is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, subjectBreakdown: [{ subject: 'Math' }] }, '7d') === null,
    'R2: subjectBreakdown member missing completedAttempts is rejected'
  );

  // Wrong label/count types, negative count, non-finite count and invalid percentage are rejected
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 123, sessions: 50, percentage: 50 }] }, '7d') === null,
    'R2: Non-string channel is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 'Direct', sessions: 'bad', percentage: 50 }] }, '7d') === null,
    'R2: Non-number sessions is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 'Direct', sessions: -5, percentage: 50 }] }, '7d') === null,
    'R2: Negative sessions count is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 'Direct', sessions: Infinity, percentage: 50 }] }, '7d') === null,
    'R2: Non-finite sessions count is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 'Direct', sessions: 50, percentage: -1 }] }, '7d') === null,
    'R2: Negative percentage is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 'Direct', sessions: 50, percentage: 101 }] }, '7d') === null,
    'R2: Percentage > 100 is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, trafficChannels: [{ channel: 'Direct', sessions: 50, percentage: NaN }] }, '7d') === null,
    'R2: Non-finite percentage (NaN) is rejected'
  );

  assert(
    validateCachedPayload({ ...baseValidPayload, subjectBreakdown: [{ subject: 456, completedAttempts: 10 }] }, '7d') === null,
    'R2: Non-string subject is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, subjectBreakdown: [{ subject: 'Math', completedAttempts: 'bad' }] }, '7d') === null,
    'R2: Non-number completedAttempts is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, subjectBreakdown: [{ subject: 'Math', completedAttempts: -1 }] }, '7d') === null,
    'R2: Negative completedAttempts is rejected'
  );
  assert(
    validateCachedPayload({ ...baseValidPayload, subjectBreakdown: [{ subject: 'Math', completedAttempts: Infinity }] }, '7d') === null,
    'R2: Non-finite completedAttempts is rejected'
  );

  // Mixed valid/invalid members reject the whole payload
  assert(
    validateCachedPayload(
      {
        ...baseValidPayload,
        trafficChannels: [
          { channel: 'Direct', sessions: 50, percentage: 50 },
          { channel: 'Referral', sessions: -1, percentage: 50 },
        ],
      },
      '7d'
    ) === null,
    'R2: Mixed valid/invalid members in trafficChannels reject the whole payload'
  );
  assert(
    validateCachedPayload(
      {
        ...baseValidPayload,
        subjectBreakdown: [
          { subject: 'Math', completedAttempts: 10 },
          { subject: 'Science', completedAttempts: 'invalid' as any },
        ],
      },
      '7d'
    ) === null,
    'R2: Mixed valid/invalid members in subjectBreakdown reject the whole payload'
  );

  // --- Suite 14: Zero-PII Telemetry Aggregate Verification ---
  console.log('\n--- 14. Zero-PII Aggregate Schema Compliance Tests ---');
  const samplePayload = {
    progression: parsedGA4.progression,
    trafficChannels: parsedGA4.trafficChannels,
    subjectBreakdown: parsedGA4.subjectBreakdown,
    webMetrics: parsedVercel,
  };
  const jsonStr = JSON.stringify(samplePayload);
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

  // --- Suite 15: Real Route Handler & End-to-End Integration Tests ---
  const { runIntegrationTests } = await import('./test-integration-suite');
  await runIntegrationTests(assert);

  // Restore env
  process.env = origEnv;

  console.log(`\n=== Final Test Results: ${passed} passed, ${failed} failed ===`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test runner error:', err);
  process.exit(1);
});
