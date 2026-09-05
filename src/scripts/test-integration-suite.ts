import { NextRequest } from 'next/server';
import { GET as loginHandler } from '../app/api/control-center/auth/login/route';
import { GET as logoutHandler } from '../app/api/control-center/auth/logout/route';
import { GET as aggregateHandler } from '../app/api/control-center/analytics/aggregate/route';
import { getQuestionSamplingConfig } from '../lib/analytics/sampling';
import { generateKeyPair, SignJWT, exportJWK } from 'jose';
import { verifyGoogleIdTokenCryptographically } from '../lib/control-center/auth/oidcVerify';
import { SESSION_COOKIE_NAME } from '../lib/control-center/auth/guard';
import { getSessionStore } from '../lib/control-center/auth/sessionStore';
import { createServerSession } from '../lib/control-center/auth/session';

export async function runIntegrationTests(assert: (cond: boolean, name: string) => void) {
  console.log('\n--- 15. Real Route Handler & End-to-End Integration Tests ---');

  // Test 15.1: Login Route Handler generates 307 redirect to Google with state/nonce and txn cookie
  process.env.GOOGLE_OIDC_CLIENT_ID = 'integration-client-id.apps.googleusercontent.com';
  process.env.GOOGLE_OIDC_CLIENT_SECRET = 'GOCSPX-integration_secret';
  process.env.GOOGLE_OIDC_REDIRECT_URI = 'https://tutorm1.com/api/control-center/auth/callback';

  const loginRes = await loginHandler();
  assert(loginRes.status === 307, 'Login handler returns 307 Temporary Redirect');
  const redirectLocation = loginRes.headers.get('location') || '';
  assert(redirectLocation.startsWith('https://accounts.google.com/o/oauth2/v2/auth?'), 'Login redirects to Google accounts endpoint');
  assert(redirectLocation.includes('client_id=integration-client-id.apps.googleusercontent.com'), 'Auth URL contains client_id');
  assert(redirectLocation.includes('response_type=code'), 'Auth URL requests authorization code');
  assert(redirectLocation.includes('code_challenge='), 'Auth URL includes PKCE code_challenge');
  const txnCookie = loginRes.cookies.get('tutor_m1_oidc_txn');
  assert(!!txnCookie && txnCookie.value.startsWith('txn_'), 'Login sets tutor_m1_oidc_txn cookie with txn_ prefix');

  // Test 15.2: Logout Route Handler clears session and redirects
  const store = getSessionStore();
  const testSession = await createServerSession('usr_logout_test', 'telemetry_viewer', ['aggregate:read']);
  const logoutReq = new NextRequest('https://tutorm1.com/api/control-center/auth/logout', {
    headers: {
      cookie: `${SESSION_COOKIE_NAME}=${testSession.sessionId}`,
    },
  });
  const logoutRes = await logoutHandler(logoutReq);
  assert(logoutRes.status === 307, 'Logout handler returns 307 Redirect');
  assert(logoutRes.headers.get('location')?.includes('/control-center/login?status=logged_out') ?? false, 'Logout redirects to login with logged_out status');
  const clearedSession = await store.getSession(testSession.sessionId);
  assert(clearedSession === null, 'Session is revoked from store on logout');

  // Test 15.3: Aggregate Route Handler enforces auth (401 without cookie)
  const unauthReq = new NextRequest('https://tutorm1.com/api/control-center/analytics/aggregate');
  const unauthRes = await aggregateHandler(unauthReq);
  assert(unauthRes.status === 401, 'Aggregate endpoint returns 401 Unauthorized without session cookie');

  // Test 15.4: Aggregate Route Handler with valid session
  // In development / demo environment, returns 200 with calibrated baseline
  (process.env as any).NODE_ENV = 'development';
  process.env.DEMO_MODE = 'true';

  const activeSession = await createServerSession('usr_agg_test', 'telemetry_viewer', ['aggregate:read']);
  const authReq = new NextRequest('https://tutorm1.com/api/control-center/analytics/aggregate?timeframe=7d', {
    headers: {
      cookie: `${SESSION_COOKIE_NAME}=${activeSession.sessionId}`,
    },
  });
  const authRes = await aggregateHandler(authReq);
  assert(authRes.status === 200, 'Aggregate endpoint returns 200 OK with valid session');
  const body = await authRes.json();
  assert(body.timeframe === '7d', 'Aggregate response contains timeframe 7d');
  assert(typeof body.progression.mockExam.completionEventRatio === 'number', 'Progression contains completionEventRatio');

  // Test 15.5: Unified Cache Service - Shared cache key
  const sharedKey = `tutor_m1_telemetry_cache:local:none:none:7d`;
  await store.setCachedTelemetry(sharedKey, JSON.stringify(body), 300);
  const fetchedCached = await store.getCachedTelemetry(sharedKey);
  assert(fetchedCached !== null, 'Unified cache entry successfully set and retrieved');

  // Test 15.6: Google OIDC RS256 Verification with dynamically generated RSA keypair
  const keyPair = await generateKeyPair('RS256');
  const customJwks = async () => keyPair.publicKey;

  const validJwt = await new SignJWT({
    iss: 'https://accounts.google.com',
    sub: 'google_user_sub_9999',
    aud: 'integration-client-id.apps.googleusercontent.com',
    nonce: 'test_nonce_abc',
    auth_time: Math.floor(Date.now() / 1000) - 10,
    amr: ['pwd', 'sms'],
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(keyPair.privateKey);

  const verifiedClaims = await verifyGoogleIdTokenCryptographically(validJwt, 'test_nonce_abc', customJwks as any);
  assert(verifiedClaims.sub === 'google_user_sub_9999', 'Cryptographic verification parses valid sub');
  assert(verifiedClaims.amr?.includes('sms') ?? false, 'Verified claims retain sms AMR possession factor');

  // Test 15.7: Centralized Sampling Helper handles boundary values
  const origEnable = process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING;
  const origRate = process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE;

  process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING = 'true';
  process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE = '-0.5';
  const negativeRateConfig = getQuestionSamplingConfig();
  assert(negativeRateConfig.rate === 0.05, 'Negative rate safely defaults to 0.05');

  process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE = '2.5';
  const overRateConfig = getQuestionSamplingConfig();
  assert(overRateConfig.rate === 0.05, 'Rate > 1 safely defaults to 0.05');

  process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE = '0.12';
  const customRateConfig = getQuestionSamplingConfig();
  assert(customRateConfig.rate === 0.12, 'Valid custom rate 0.12 correctly parsed');
  assert(customRateConfig.status === 'custom', 'Custom status assigned for 0.12');
  assert(customRateConfig.samplingRate === 0.12, 'samplingRate is 0.12');

  process.env.NEXT_PUBLIC_ENABLE_QUESTION_SAMPLING = origEnable;
  process.env.NEXT_PUBLIC_QUESTION_SAMPLE_RATE = origRate;

  // Test 15.8: AUTH-02 — OIDC Missing Claims Rejection (exp, iat, sub, invalid amr)
  console.log('  Testing AUTH-02: OIDC required claims enforcement...');
  // JWT missing exp
  const jwtNoExp = await new SignJWT({
    iss: 'https://accounts.google.com',
    sub: 'google_user_sub_no_exp',
    aud: 'integration-client-id.apps.googleusercontent.com',
    nonce: 'test_nonce_abc',
    auth_time: Math.floor(Date.now() / 1000) - 10,
    amr: ['pwd', 'sms'],
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuedAt()
    .sign(keyPair.privateKey);

  let noExpFailed = false;
  try {
    await verifyGoogleIdTokenCryptographically(jwtNoExp, 'test_nonce_abc', customJwks as any);
  } catch (err: any) {
    noExpFailed = true;
  }
  assert(noExpFailed, 'JWT without exp claim is strictly rejected (AUTH-02)');

  // JWT missing iat
  const jwtNoIat = await new SignJWT({
    iss: 'https://accounts.google.com',
    sub: 'google_user_sub_no_iat',
    aud: 'integration-client-id.apps.googleusercontent.com',
    nonce: 'test_nonce_abc',
    auth_time: Math.floor(Date.now() / 1000) - 10,
    amr: ['pwd', 'sms'],
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setExpirationTime('1h')
    .sign(keyPair.privateKey);

  let noIatFailed = false;
  try {
    await verifyGoogleIdTokenCryptographically(jwtNoIat, 'test_nonce_abc', customJwks as any);
  } catch (err: any) {
    noIatFailed = true;
  }
  assert(noIatFailed, 'JWT without iat claim is strictly rejected (AUTH-02)');

  // JWT missing sub
  const jwtNoSub = await new SignJWT({
    iss: 'https://accounts.google.com',
    aud: 'integration-client-id.apps.googleusercontent.com',
    nonce: 'test_nonce_abc',
    auth_time: Math.floor(Date.now() / 1000) - 10,
    amr: ['pwd', 'sms'],
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(keyPair.privateKey);

  let noSubFailed = false;
  try {
    await verifyGoogleIdTokenCryptographically(jwtNoSub, 'test_nonce_abc', customJwks as any);
  } catch (err: any) {
    noSubFailed = true;
  }
  assert(noSubFailed, 'JWT without sub claim is strictly rejected (AUTH-02)');

  // Test 15.9: AUDIT-01 & R1 — Full access decision audit records and FAIL-CLOSED on ALLOW sink failure
  console.log('  Testing AUDIT-01 & R1: Access decision auditing & fail-closed ALLOW...');
  const { enforceServerApiAuth } = await import('../lib/control-center/auth/guard');

  // Exercise unauthenticated DENY
  const unauthDenyReq = new NextRequest('https://tutorm1.com/api/control-center/analytics/aggregate');
  const denyResult = await enforceServerApiAuth(unauthDenyReq, 'aggregate:read');
  assert(!denyResult.authorized, 'Unauthenticated API access denied');

  // Exercise authorized ALLOW
  const validAuditSession = await createServerSession('usr_audit_test', 'telemetry_viewer', ['aggregate:read']);
  const authAllowReq = new NextRequest('https://tutorm1.com/api/control-center/analytics/aggregate', {
    headers: { cookie: `${SESSION_COOKIE_NAME}=${validAuditSession.sessionId}` },
  });
  const allowResult = await enforceServerApiAuth(authAllowReq, 'aggregate:read');
  assert(allowResult.authorized, 'Authorized API access allowed');

  const auditRecordsAfter = await store.getRecentAuditRecords(1);
  const hasDeny = auditRecordsAfter.some(
    (r) => r.decision === 'DENY' && r.pseudonymousActorId === 'usr_anonymous'
  );
  const hasAllow = auditRecordsAfter.some(
    (r) => r.decision === 'ALLOW' && r.pseudonymousActorId === 'usr_audit_test'
  );
  assert(hasDeny, 'AUDIT-01: DENY decision logged for unauthenticated request without PII/token');
  assert(hasAllow, 'AUDIT-01: ALLOW decision logged for authorized request');

  // R1 Acceptance Test: Missing AUDIT_IP_SALT_KEY on valid session MUST fail-closed to 503 AUDIT_UNAVAILABLE
  const savedSaltKey = process.env.AUDIT_IP_SALT_KEY;
  delete process.env.AUDIT_IP_SALT_KEY;
  const failSaltReq = new NextRequest('https://tutorm1.com/api/control-center/analytics/aggregate', {
    headers: { cookie: `${SESSION_COOKIE_NAME}=${validAuditSession.sessionId}` },
  });
  const failSaltResult = await enforceServerApiAuth(failSaltReq, 'aggregate:read');
  assert(!failSaltResult.authorized, 'R1: Valid session access strictly aborted when AUDIT_IP_SALT_KEY is missing');
  assert(failSaltResult.response.status === 503, 'R1: Missing audit key returns HTTP 503 Service Unavailable');
  const failSaltBody = await failSaltResult.response.json();
  assert(failSaltBody.code === 'AUDIT_UNAVAILABLE', 'R1: Error response specifies AUDIT_UNAVAILABLE code without leaking secrets');
  process.env.AUDIT_IP_SALT_KEY = savedSaltKey;

  // Test 15.10: CACHE-01 & CACHE-02 (R2) — Object deserialization normalization, mode isolation & cached unavailable rejection
  console.log('  Testing CACHE-01 & CACHE-02 (R2): Object normalization, demo mode isolation, and stale-cache rejection...');
  const { getAggregatedTelemetry, validateCachedPayload } = await import('../lib/control-center/aggregation/service');

  // 15.10a: Demo mode cache write
  process.env.DEMO_MODE = 'true';
  const demoResult = await getAggregatedTelemetry('7d');
  assert(demoResult.source === 'synthetic_fallback', 'Demo mode returns synthetic fallback data');

  // 15.10b: Switch to production mode with DEMO_MODE disabled; ensure demo cache is rejected
  (process.env as any).NODE_ENV = 'production';
  delete process.env.DEMO_MODE;
  delete process.env.GA4_PROPERTY_ID;
  delete process.env.VERCEL_PROJECT_ID;

  const prodResult = await getAggregatedTelemetry('7d');
  assert(
    prodResult.source === 'unavailable',
    'CACHE-02: Switching to production rejects any previous demo cache entry and fails closed to unavailable'
  );

  // R2 Acceptance: Stale/polluted cache containing unavailable sources must be rejected
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'local';
  const mode = process.env.DEMO_MODE === 'true' ? 'demo' : 'live';
  const propertyId = process.env.GA4_PROPERTY_ID || 'none';
  const projectId = process.env.VERCEL_PROJECT_ID || 'none';
  const teamId = process.env.VERCEL_TEAM_ID || 'none';
  const testCacheKey = `tutor_m1_telemetry_cache:${env}:${mode}:${propertyId}:${projectId}:${teamId}:7d:v1`;

  const pollutedUnavailablePayload = {
    timeframe: '7d',
    generatedAt: new Date().toISOString(),
    dataSources: { ga4: 'unavailable', vercel: 'unavailable' },
    progression: {
      mockExam: { started: 0, completed: 0, completionEventRatio: null },
      aiPractice: { started: 0, completed: 0, completionEventRatio: null },
      milestones: { questions10: 0, questions50: 0, questions100: 0 },
      activity: { sampledQuestionsAnswered: 0, samplingStatus: 'disabled', samplingRate: null, diagnosticViews: 0 },
    },
    webMetrics: { summedDailyVisitors: 0, pageViews: 0 },
    trafficChannels: [],
    subjectBreakdown: [],
  };

  await store.setCachedTelemetry(testCacheKey, JSON.stringify(pollutedUnavailablePayload), 300);
  const fetchedPolluted = await getAggregatedTelemetry('7d');
  assert(
    fetchedPolluted.source === 'unavailable' && fetchedPolluted.status === 'DATA_SOURCE_UNAVAILABLE',
    'R2: Cached unavailable payload is rejected from cache, failing closed to fresh fetch DATA_SOURCE_UNAVAILABLE (never promoted to READY)'
  );

  // R2 Acceptance: validateCachedPayload rejects malformed schemas
  assert(validateCachedPayload(null, '7d') === null, 'R2: validateCachedPayload rejects null');
  assert(validateCachedPayload({ invalid: true }, '7d') === null, 'R2: validateCachedPayload rejects missing fields');
  assert(validateCachedPayload({ ...pollutedUnavailablePayload, timeframe: '30d' }, '7d') === null, 'R2: validateCachedPayload rejects timeframe mismatch');

  // Test 15.11: AUTH-01 — Navigation after session revocation/expiry must deny access
  console.log('  Testing AUTH-01: Post-revocation authorization enforcement...');
  const revokedSession = await createServerSession('usr_revoke_test', 'telemetry_viewer', ['aggregate:read']);
  await store.revokeSession(revokedSession.sessionId);

  const postRevokeReq = new NextRequest('https://tutorm1.com/api/control-center/analytics/aggregate', {
    headers: { cookie: `${SESSION_COOKIE_NAME}=${revokedSession.sessionId}` },
  });
  const postRevokeResult = await enforceServerApiAuth(postRevokeReq, 'aggregate:read');
  assert(!postRevokeResult.authorized, 'AUTH-01: Navigating with revoked session is rejected immediately before data fetch');
}
