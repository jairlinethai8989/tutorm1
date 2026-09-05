# Phase C follow-up review: 1fbcb63

Decision: CHANGES REQUESTED. Scope: changes since c9f2089 and the existing acceptance contract. This is a review document, not an implementation change.

## What is fixed in code

- AUTH-01: cockpit, funnels and retention await the page guard before accessing data. Audit has its own permission guard.
- CACHE-01: Upstash cache values are normalized from object/string to the declared string boundary.
- DATA-01: numeric GA4 panels are hidden on unavailable data, and synthetic status is disclosed. Provider failures are handled separately.
- CACHE-02: mode/team/schema-version key scoping and production synthetic rejection are present. Cache payload validation remains incomplete (R2 below).
- AUTH-02: required exp/iat/sub claims and additional runtime checks are present.
- METRIC-01: denominator zero produces null/N/A, positive-denominator ratios remain unclamped, and the sampling predicate handles rate zero.
- AUDIT-01: records have been added on ALLOW/DENY paths, but a new broad exception handler defeats fail-closed behavior (R1 below).
- DATA-02: header/numeric validation improved, but row dimensions remain unchecked (R3 below).

The passing test count is 132 assertions, independently rerun. TypeScript, production build (15/15 static pages generated), and main..HEAD whitespace checks also passed. Build skips its own type/lint checks; TypeScript was run separately and lint was not independently run. These results do not establish browser-navigation, callback, remote-JWKS, or real Redis-race coverage.

## R1 / P1 / AUDIT-01: Audit failures are swallowed before access is allowed

Location: src/lib/control-center/auth/guard.ts:10-17, called from the ALLOW paths at :94 and :211.

The helper catches every error from both createAuditRecord and appendAuditRecord, logs a warning, and returns successfully. This includes missing/invalid dedicated key configuration. A valid session can continue to read protected data without the required audit record.

Reproduction executed with an isolated local fixture session: delete AUDIT_IP_SALT_KEY, then call enforceServerApiAuth with the session cookie. The key validator throws, but the guard returns authorized: true. This is a regression against the existing fail-closed audit/key contract, not an authentication bypass by an unauthenticated user.

Fix:

1. Separate protected ALLOW recording from best-effort diagnostic logging. Required ALLOW audit failures must propagate to a controlled service-unavailable response; do not return protected data.
2. Validate key configuration outside any best-effort catch. Use a bounded error code such as AUDIT_UNAVAILABLE; never return raw exceptions or secrets to the client.
3. Preserve 401/403 denial semantics when an already-denied request cannot be audited; an audit error must never change DENY into ALLOW. Document this distinction explicitly.
4. Retain login/callback's required audit behavior. Avoid a successful login followed by protected reads with a weaker audit policy.
5. Finish the previously requested request-level duplicate handling: layout and page currently both append records, and the layout uses the default /control-center path. Pass the actual audit page path as well. Audit deduplication must not cache authorization across requests.
6. Middleware still rejects no-cookie requests before the guard executes. Route these denials through the intended auditable boundary or describe and implement a bounded middleware denial logging policy; direct-handler tests alone do not establish coverage of externally served requests.

Acceptance: valid session + missing/short/malformed IP key => no protected payload. Valid session + appendAuditRecord failure => controlled unavailable response and no payload. Healthy sink => successful response and required record. Denied request stays denied on sink failure. Use fixture keys and a throwing audit sink, not production credentials.

## R2 / P2 / CACHE-02: Cached unavailable or malformed data is promoted to READY

Location: src/lib/control-center/aggregation/service.ts:43-70.

The cache checks timeframe and truthiness of progression/webMetrics, then hardcodes READY for both providers. It does not enforce the same dual-READY invariant as the cache writer or validate the nested payload.

Reproduction executed: seed the current live cache key with a payload whose two dataSources are unavailable and whose metric structures are present. getAggregatedTelemetry returns source=unavailable, status=READY, ga4.status=READY. This can bypass the API's 503 branch and the pages' unavailable checks. The current writer does not normally generate this entry; this is the previously requested malformed/stale-cache defense.

Fix:

1. Validate cache values as unknown at runtime before treating them as AggregateTelemetryResponse. Check allowed source enums, timeframe, generatedAt, nested metrics/arrays and number/null contracts.
2. Accept only cacheable source combinations: both live in production; permitted live/synthetic READY combinations in explicit demo/local policy. Reject any unavailable/unknown source entry because partial/error payloads are not cacheable under the existing policy.
3. Reject malformed/old payloads and fetch fresh metrics. Derive status from validated source state rather than assigning READY before checking it.
4. Refresh current sampling configuration after reading cached observations, as specified in the earlier contract, or include its configuration version in the key.

Acceptance: seed current-key entries for unavailable/unavailable, live/unavailable, unknown source, missing nested fields, wrong types and production synthetic data. Each must be rejected; fresh failures yield 503, and healthy fresh data yields a valid result. A valid cache hit must issue no upstream calls. Test the installed Upstash SDK path in addition to memory storage.

## R3 / P2 / DATA-02: Missing GA4 dimensions are silently converted into observations

Location: src/lib/control-center/aggregation/ga4-adapter.ts:85-89, :139 and :150.

With valid report headers and a row containing metricValues:[{value:'7'}] but no dimensionValues, parsing succeeds. The event is silently dropped by if(eventName), returning zero event totals. Missing channel/subject dimensions become invented labels Unassigned/General. Numeric/header checks do not establish a valid row contract.

Fix:

1. If rows is present, require an array. Preserve an omitted rows field for a valid empty report, but reject null or malformed row containers.
2. Require each row to be an object with the expected dimensionValues and metricValues arrays and valid entries. Require string dimensions and validate their permitted empty-value semantics explicitly. Preserve legitimate provider strings such as '(not set)' rather than replacing missing fields with them.
3. Require exactly the dimension/metric positions requested by the adapter, or explicitly validate any supported extra columns. Do not silently drop malformed events.
4. Keep malformed-report handling as unavailable with no successful cache write. Keep valid empty reports as measured zero counts with null ratios.

Acceptance: test missing dimensionValues, empty arrays, null row, null rows, non-string dimension, missing metric and mixed valid/invalid rows for all three reports. Confirm valid headers with omitted/empty rows remain accepted. Assert malformed live responses become unavailable through the fetch adapter, not just a parser throw.

## Evidence gaps: correct the tests and the walkthrough

These are unfinished acceptance tests from the earlier review, not proof that the fixed code is necessarily wrong:

| Existing claim | What the test actually does | Evidence needed |
| --- | --- | --- |
| AUTH-01 navigation after revoke | Calls enforceServerApiAuth directly, test-integration-suite.ts:238 | Actual page/browser navigation with a preserved layout and revoked session, asserting no data access |
| CACHE-01 object normalization/cache hit | Direct memory set/get using an obsolete key at :67; no SDK request | Installed Upstash SDK mocked HTTP decoding plus two real service calls and upstream call counts |
| CACHE-02 mode isolation | Changes NODE_ENV as well as DEMO_MODE | Keep env/property/project/team fixed, toggle only demo mode; seed current-key contamination separately |
| Full OIDC integration | Local public-key injection plus missing-claim tests | Actual callback success/rejection/replay, mocked token exchange and remote JWKS transport |
| Redis race protection | No actual Lua execution in either suite | Disposable Redis execution of production Lua; verify revoke/touch order and unchanged TTL |
| Provider-state rendering | Assertions on adapter results | Render cockpit/funnels for live, partial, unavailable and demo states |

Also retain the earlier telemetry-bootstrap network check: delay provider loading and verify the first session/page event, rather than inferring readiness from JSX order. Report unexecuted infrastructure tests as unverified, not PASS.

## One remediation batch

1. Fix R1 and add audit-failure tests.
2. Introduce cache payload and GA4 row validators; fix R2/R3 with malformed fixtures.
3. Finish the evidence table using the actual workflow tests above. Avoid changing AMR policy or adding Phase D functionality.
4. Run tests, tsc, production build and diff check on one final commit; distinguish asserted code checks, mocked integrations and real infrastructure checks.
5. Return R1/R2/R3 => changed files => test names => results, with explicit residual gaps. Re-review targets these defects and regressions introduced by their fixes.

No production data, tokens, real login or live Redis was used in the review reproductions. Existing implementation improvements should be retained.
