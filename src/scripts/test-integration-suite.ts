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
}
