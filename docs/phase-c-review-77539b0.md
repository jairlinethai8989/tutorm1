# Review: 77539b0

Decision: CHANGES REQUESTED. One reproduced P2 defect remains in R2. This is a continuation of the existing review contract, not a new feature scope.

## Closed defects

- R1: required ALLOW audit failures abort access; API returns 503 AUDIT_UNAVAILABLE. DENY handling preserves denial. The audit page now passes its own path. The missing-key regression test passes.
- R3: missing/non-string first dimensions and invalid row containers are rejected; valid omitted rows remain accepted. The prior missing-dimension reproduction is covered by tests.
- R2 partial: unavailable cache is rejected; nested scalar metrics are checked; sampling metadata is refreshed from current configuration.

## R2 / P2: Validate array members before accepting cached telemetry

Location: src/lib/control-center/aggregation/service.ts:38-40.

validateCachedPayload only checks Array.isArray for trafficChannels and subjectBreakdown. It accepts null members and invalid member fields, then returns the payload as AggregateTelemetryResponse. The service treats it as READY, and cockpit's map callbacks dereference those members.

Reproduction run against the actual validator and service with isolated local fixtures:

1. Make an otherwise valid current-key live/live payload.
2. Set trafficChannels to [null] and subjectBreakdown to [{subject:'Math',completedAttempts:'bad'}].
3. validateCachedPayload returns a non-null value; getAggregatedTelemetry returns READY.
4. The same tc.channel access used by the page throws: Cannot read properties of null (reading 'channel').

This requires malformed/stale cached data; the normal current writer produces valid rows. It is a robustness failure in the cache validation already requested, not evidence of an external cache-writing attack.

### Narrow fix

Validate every array member before the cast/return. Do not drop malformed rows or replace their counts with zero. Reject the entire cache entry and use the existing fresh-fetch path.

| Array | Required member shape |
| --- | --- |
| trafficChannels | Non-null object; channel string; sessions finite nonnegative number; percentage finite number from 0 through 100 |
| subjectBreakdown | Non-null object; subject string; completedAttempts finite nonnegative number |

Keep empty arrays valid. Preserve provider labels such as '(not set)'. Reuse the existing numeric predicate; no schema-library migration or framework refactor is required. Check all fields consumed by these two map callbacks in one pass.

### Required tests to close R2

- Null member in either array is rejected.
- Missing channel/subject or count is rejected.
- Wrong label/count types, negative count, non-finite count and invalid percentage are rejected.
- Mixed valid/invalid members reject the whole payload.
- Empty arrays and well-formed members are accepted.
- Seed the actual current service cache key with malformed arrays, then verify a fresh fetch is used; in production with no sources it returns DATA_SOURCE_UNAVAILABLE, never READY.
- Seed a valid payload, call the real service, and assert no reporting/OAuth fetch occurs. Exercise the installed Upstash SDK deserialization path with mocked HTTP as required by the earlier CACHE-01 acceptance criteria.

## Evidence still not established

The existing suite passed 144 assertions. Do not label the following as tested solely from this result:

- Browser navigation with layout reuse after revoke: current test calls an API guard directly.
- Redis touch Lua concurrency/KEEPTTL: no real Redis race is executed.
- Callback success/replay and remote JWKS retrieval: local verifier/key tests are not those workflows.
- Upstream reporting request contracts and per-source page rendering: parser fixtures alone do not establish them.

These are carried-over verification gaps, distinct from the one reproduced remaining defect. Implement the earlier tests or explicitly report them as unverified; do not claim complete production verification. Do not rework R1/R3 or expand AMR/Phase D scope to close this review.

## Reporting correction

The walkthrough describes validateCachedPayload as a boolean type predicate and uses a sources property. The actual function returns AggregateTelemetryResponse | null and uses dataSources. Keep examples and test fixtures aligned with the actual implementation.

The API audit failure is explicitly HTTP 503. The page guard throws a server error; it does not itself guarantee a page HTTP 503 response, especially with streaming. Report these behaviors separately.

No application implementation was changed by this review. Reproductions used local fixtures, not production credentials or live Redis.
