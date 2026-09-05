# Phase C review and remediation contract

Reviewed commit: `c9f208983869cc4545121986c2d9b41301fccb65`.
Decision: CHANGES REQUESTED. This document specifies fixes; it does not authorize a merge or deployment.

## Confirmed progress

- Retention suppresses synthetic figures in production with DEMO_MODE disabled.
- Cockpit, funnels and API call the same aggregation service.
- Live GA4 metadata and client dispatch use the shared sampling helper.
- Session IDs use cryptographic randomness; Redis touch uses atomic Lua and KEEPTTL.
- Login/logout/aggregate handler tests and a valid RS256 verification test exist.
- The existing suite independently passed 110 assertions; TypeScript and committed diff whitespace checks passed. Production build also passed (15/15 static pages generated). Build skips its own type/lint checks, so the separate TypeScript check matters; lint was not independently run.

## Findings and acceptance criteria

### AUTH-01 / P1: Authorization must run at each protected data entry point

Evidence: cockpit page.tsx:7 and funnels/page.tsx:7 call getAggregatedTelemetry directly. service.ts:18 has no authorization. Only the shared protected layout checks aggregate:read; middleware checks cookie presence. Audit page already has its own guard.

Trigger: a previously authenticated client keeps the shared layout, its session expires or is revoked, and it navigates to another protected page. Layout reuse does not guarantee a new authorization check. Page work can also execute independently of layout work.

Fix:

1. Await enforceServerPageAuth('aggregate:read') before calling the service in cockpit and funnels, and before rendering retention. Keep audit:read on audit.
2. Preserve the API guard before any service/cache access. Do not replace API 401/403 with page redirects.
3. Keep raw data functions server-only; a future authenticated DAL wrapper can centralize the guards, but a framework rewrite is unnecessary.
4. Do not cache authorization across requests for 300 seconds. Only aggregate data is shared-cacheable.

Acceptance: a browser with an initially valid session must receive no new protected metrics after revocation/idle expiry when navigating within the existing layout. Test forged cookie, permission denial and an expired session; assert the service is not called. This does not claim to erase data already delivered to a browser.

Reference: https://nextjs.org/docs/app/guides/authentication (layout partial rendering and checks close to data access).

### CACHE-01 / P1: Upstash cache deserialization defeats cache hits

Evidence: sessionStore.ts:115 uses default Redis options; :183 returns redis.get<string>(). service.ts:32 unconditionally JSON.parse()s the result. The TypeScript generic does not change runtime SDK deserialization.

Reproduction: invoking the installed Upstash SDK with a mocked REST response containing a JSON object string returns typeof value === 'object'. The service catches the second parse error and calls both upstream sources again. LocalDevMemoryStore returns a string and masks this defect.

Fix: normalize the cache boundary to one actual type. A narrow fix is to read unknown, return an existing string or JSON.stringify a decoded object, and then validate it in the service. Alternatively adopt a typed object cache consistently for both stores. Do not globally disable deserialization without checking session, handshake and audit consumers.

Acceptance: exercise the installed SDK against mocked HTTP, then call the real aggregation service twice. Both results must match; the second call must issue zero OAuth/reporting calls. Also test corrupt cache and expiry. A set/get assertion against the memory store alone is insufficient.

### DATA-01 / P1: Funnels hides unavailable and synthetic source states

Evidence: funnels/page.tsx:7-9 extracts progression but never branches on source or status. In production, GA4 failure produces zero counts displayed as normal telemetry; demo figures also lack disclosure on this page.

Fix: gate each provider's panels on its own source status. On unavailable GA4, hide numeric progression and show unavailable with retry. On synthetic data, show a prominent demo label. Apply the same per-provider handling to cockpit so a global error banner does not leave missing data looking like measured zeros. Preserve a working provider's real figures when the other fails. Do not convert a live-plus-unavailable combination into synthetic_fallback in the service's overall source field; use an explicit partial state or rely on per-source states.

Acceptance: render cockpit and funnels for live/live, live/unavailable, unavailable/live, unavailable/unavailable and explicit demo. Missing observations must never render as a measured zero or measured 0%.

### CACHE-02 / P2: Demo cache can cross into live policy

Evidence: service.ts:24 omits DEMO_MODE and payload version; :87 caches synthetic results because both have READY status. Cache reads happen before production policy is evaluated.

Trigger: a demo-enabled deployment writes to Redis, then a deployment using the same environment/property/project disables demo within the TTL. After CACHE-01 is fixed, it can read the previous synthetic payload as READY.

Fix: do not cache synthetic results in the live namespace. Add an explicit mode and schema version to keys if demo caching is retained. Validate cached per-source status against the current mode before returning it. Include team scope if a shared store serves multiple Vercel teams. Derive current sampling metadata after the data-cache read or version its configuration; cached report counts and current configuration are different things.

Acceptance: warm a demo cache, switch to production/no-demo with the same IDs, and prove no synthetic value is returned. Test partial data is not stored for 300 seconds, and malformed/old-version payloads are rejected.

### DATA-02 / P2: Parsers accept malformed payloads as valid observations

Evidence: vercel-adapter.ts:19-29 skips missing numeric fields; ga4-adapter.ts:41 onward only checks the report count and defaults missing metrics/rows.

Reproductions executed during review:

- parseVercelAggregate({data:[{}]}) returns {pageViews:0,summedDailyVisitors:0}.
- parseGA4BatchReports({reports:[{},{},{}]}) returns a zero progression.

Fix: parse unknown with runtime checks for report headers, expected dimension/metric positions, row structure and finite nonnegative counts. Reject malformed numeric strings rather than accepting parseInt('12junk'). Preserve valid empty reports: GA4 can omit rows for a legitimate empty result, but the report contract/header metadata must still identify the expected report. Do not require a nonempty row array. For Vercel validate every daily bucket against the documented response and reject mixed invalid rows.

Acceptance: valid empty result => live zero counts; malformed result => unavailable, no successful cache write. Test nulls, missing fields, wrong headers/order, negative values, nonnumeric values and mixed valid/invalid rows. Fixtures must include actual provider headers/shape rather than only the fields the parser currently reads.

### AUTH-02 / P2: OIDC required claims are not actually required

Evidence: oidcVerify.ts:27 passes issuer/audience/algorithms but no requiredClaims. Its cast to GoogleVerifiedClaims does not validate sub/exp/iat.

Reproduction: a locally signed RS256 fixture with valid iss/aud/nonce/auth_time/amr but no exp or iat was accepted by the actual verifier with the injected fixture key. This is a contract-validation gap; it is not evidence that an attacker can forge Google's signature.

Fix: explicitly require iss, sub, aud, exp, iat, nonce and auth_time; validate nonempty subject, integer timestamp types and the documented claims policy. Retain signature verification before trusting any claims, algorithm restriction, audience/issuer checks, nonce comparison and one-time state consumption. Validate amr as an array of strings so malformed values fail predictably. Keep test key injection internal to tests/call sites, never request-controlled.

Acceptance: reject bad signature, wrong algorithm/issuer/audience/nonce, expired or missing exp, missing sub/iat, malformed amr, and future auth_time. Cover the callback itself with one successful allowlisted identity and negative cases; no session/cookie may be issued on rejection. Include simultaneous callback replay against the same transaction.

### METRIC-01 / P2: Undefined ratios are still represented as 0%

Evidence: ga4-adapter.ts:59-66 uses zero when started is zero; types.ts requires number and both UIs append a percent sign.

Fix: completionEventRatio must be number | null. Zero denominator => null and N/A in UI, including the zero-progression helper. Positive denominator with zero completions => 0%. Keep ratios above 100% unclamped. Explain that these are same-window event ratios, not cohort completion rates. Label milestones as milestone events recorded in the selected window, not lifetime cohort counts.

Acceptance: started/completed pairs 0/0 and 0/5 => null; 5/0 => 0; 5/6 => 120. Test serialized API results and both page renderings.

### AUDIT-01 / P2: Audit coverage does not match the promised access-decision log

Evidence: guard.ts returns ALLOW at :55/:135 without an audit record; missing/unknown/expired session branches also return before recording DENY. Only permission denials and login/logout are represented.

Fix: record protected access decisions at the authoritative guard, with request-scoped deduplication if a layout and page both call it. Use a fixed anonymous actor for unauthenticated denials; never log session tokens or callback query strings. Pass the actual known route and request context rather than a fabricated localhost IP for page access. Define audit-sink failure behavior explicitly; retain fail-closed behavior for protected access where required. Prevent unauthenticated log flooding with bounded/rate-limited handling and disclose any sampling. Remove an unconditional 'Immutable' claim unless the storage permissions/retention actually enforce it.

Acceptance: allowed read, insufficient permission, expired/revoked session and unauthenticated request produce the intended records without PII/secrets. Test audit outage behavior. An append-only application method does not establish infrastructure immutability.

## Integration coverage needed to close the findings

The 110 assertions are real passing assertions, but they do not prove all named integration contracts. test-integration-suite.ts does not import the callback; its aggregate success test uses demo data; its cache test directly sets/gets a key; its verifier test injects a local key and does not exercise remote JWKS resolution. Neither suite executes the Redis touch Lua race.

Add focused tests attached to the IDs above:

1. AUTH-01: browser navigation after session revocation/expiry; authorize before data/cache reads.
2. CACHE-01/02: installed Upstash SDK response decoding, actual service cache hit, mode isolation, partial/error cache policy.
3. DATA-01/02: mocked OAuth/GA4/Vercel HTTP calls, validate exact outgoing endpoints/query/body/filter and incoming schemas; render source states.
4. AUTH-02: actual callback success/failure/replay; separately test remote JWKS retrieval through a mocked transport with a generated public JWKS.
5. SESSION regression: execute the actual touch Lua in disposable Redis, revoke then resume a pending touch, verify absence; verify TTL never extends. If Redis is unavailable, report this check as unverified rather than substituting a Map test and claiming Redis coverage.
6. METRIC-01: null/zero/>100 ratios; sampling rates 0, 1, invalid and disabled. With rate 0 and random() returning 0 the current '>' guard can still send an event; use a strict probability predicate (random() < rate) and cover this boundary when touching sampling.
7. Telemetry bootstrap residual check: delay GA script loading and capture actual event requests; ensure first session/page events are not dropped by the window.gtag existence check. JSX order alone is not proof. Verify Vercel/GA pageview ownership and admin-route telemetry exclusion policy if required by the existing privacy contract.

## Implementation order and review handoff

1. Freeze this list as the review contract for c9f2089; do not expand the feature scope to Phase D.
2. Fix authorization, OIDC validation and audit decisions together; add the corresponding negative tests.
3. Fix cache serialization/mode isolation and provider schemas together; ensure both stores expose identical runtime types.
4. Fix source-state rendering and ratio semantics across every consumer of the shared schema.
5. Run tests, tsc, build and git diff --check on the final commit. Report exact test categories and any unavailable infrastructure separately.
6. Supply one evidence table: ID, changed files, test name, result. Reviewer rechecks the whole set and regressions in the changed surfaces.

Do not broaden the AMR policy again merely to close a review item. Accepting sms/tel versus requiring stronger factors is an issuer-specific access-policy decision. The prior blanket P1 instruction to add every provider AMR value overstated the evidence. Document the selected policy and test accepted AND rejected combinations; do not infer NIST certification from an allowlist alone.

This review did not use live production credentials, perform a production login, or execute a real Redis concurrency test. Mock reproductions establish the defects described above without claiming live deployment verification.
