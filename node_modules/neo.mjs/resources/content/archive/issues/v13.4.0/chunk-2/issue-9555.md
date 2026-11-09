---
id: 9555
title: 'Feature: Implementation of Data-Worker Side Caching'
state: CLOSED
labels:
  - enhancement
  - help wanted
  - no auto close
  - ai
  - performance
  - core
assignees:
  - neo-gpt-euclid
createdAt: '2026-03-25T20:28:46Z'
updatedAt: '2026-11-06T15:59:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9555'
author: tobiu
commentsCount: 3
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-06T15:59:56Z'
---
# Feature: Implementation of Data-Worker Side Caching

### Goal
Implement an intelligent caching layer within the Data Worker to reduce redundant network requests.

### Description
By caching shaped data results inside the Data Worker, we can significantly improve TTI for repeated views.

**Requirements:**
1. Add a `cache: boolean` configuration to `Neo.data.Pipeline`.
2. Implement a key-value cache in the Data Worker using a hash of the `read()` parameters.
3. Support `TTL` (Time-To-Live) configurations.
4. Provide an API to explicitly clear/invalidate the cache (`pipeline.clearCache()`).

## Timeline

- 2026-03-25T20:28:46Z @tobiu assigned to @tobiu
- 2026-03-25T20:28:48Z @tobiu added the `enhancement` label
- 2026-03-25T20:28:48Z @tobiu added the `ai` label
- 2026-03-25T20:28:48Z @tobiu added the `performance` label
- 2026-03-25T20:28:48Z @tobiu added the `core` label
- 2026-03-25T20:50:28Z @tobiu added the `help wanted` label
- 2026-03-25T20:50:28Z @tobiu added the `no auto close` label
- 2026-03-26T15:20:03Z @tobiu unassigned from @tobiu
- 2026-06-23T03:28:08Z @neo-gpt-euclid added the `not-code-ready` label
- 2026-06-23T03:28:08Z @neo-gpt-euclid added the `needs-design` label
- 2026-06-23T03:33:42Z @neo-gpt-euclid cross-referenced by #9554
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:43:01Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - Inspected `src/data/Pipeline.mjs:24-94, 114-175`: `Pipeline` has no `cache` / `ttl` config or `clearCache()` method for caching shaped results inside the Data Worker.
- **Verdict (`op`):** **Holds** (premise verified against `src/data/Pipeline.mjs:24-94`; unimplemented caching enhancement to `Neo.data.Pipeline`).

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

### @neo-gpt-euclid - 2026-11-06T14:57:10Z

### Implementation intake — Euclid, 2026-11-06

**Verdict: accept and sharpen.** The March goal remains useful, but the cache belongs to the executing Pipeline instance. At `dev` `4d624c222f`, the Data-worker counterpart already runs the same `Pipeline.runLocal()` as an App-local Pipeline; putting another cache on `worker.Data` would duplicate execution policy and parameter-only global keys would mix endpoints/shaping configurations.

**Prescription checked:** `src/data/Pipeline.mjs` owns the staged read, remote counterpart and destruction. Keep one default-off shaped-read cache there; a Data-side Pipeline physically owns its cached values in the Data worker. This benefits retained Store/Pipeline reuse; it does not promise sharing between destroyed/recreated Pipelines.

| Surface | Current authority | Delivery contract | Edge / evidence |
|---|---|---|---|
| `cache: boolean` | This ticket, default-off Pipeline stage policy | Construction option enables completed shaped `read()` reuse; no global worker cache | Separate Pipeline instances stay isolated |
| `cacheTTL` | This ticket's TTL requirement | Milliseconds, absolute expiry measured from successful completion; default 0 means retained until explicit invalidation or destruction | Expired entries miss; invalid/negative TTL refuses construction |
| Request identity | Pipeline instance and read parameters | Stable structural data-only parameter key; preserve distinctions such as missing/undefined/null; unsupported/cyclic/effectful inputs bypass caching | No application callback or user `toJSON` runs to form a key |
| Returned data | Existing connection→parser→normalizer result | Cache an isolated snapshot and return fresh snapshots on hits | Unsupported instance/effect values, null/error terminals and streaming/event delivery remain uncached |
| Invalidation | Existing stage and operation ownership | `clearCache()` clears the current executing instance; App proxies forward to their existing Data counterpart. Stage replacement, mutations/pushes and destruction invalidate reads | Clear during a pending read cannot republish its old value; later reads win over earlier pending ones |
| Remote execution | Existing Pipeline config/RMA path | Forward cache options at counterpart creation; no proxy result cache and no new worker registry | Real worker proof must show transport/shaping skipped in the Data worker, not just App-side reuse |

Controls will cover default-off behavior, canonical parameter ordering/distinctions, TTL, endpoint/instance isolation, caller mutation, stage changes, mutation/push/stream bypass, failure retry, pending-clear ordering and remote ownership. Existing telemetry, return carriers and retry behavior stay intact.

**Currency:** created 2026-03-25; live issue remains unassigned before this guarded claim, no native parent/blocker or competing cache PR. No close-inactive workflow exists in the current Engine checkout, so its automation band is unavailable; `no auto close` is not currency evidence. Current source changed through the recently merged telemetry/disposal work, which this intake preserves. KB/MC semantic sweeps returned off-topic material; live source, existing Pipeline specs and this ticket are authority. `pre_brief_session(9555)` returned graph node not found, not missing GitHub context.

Decision Record impact: no ADR change; local ownership follows the existing per-instance execution boundary. No new directory, daemon or global cache. Original author prose is retained; this is the implementation contract for the existing intent.

Origin Session ID: f2ae0cfb-5a79-458d-9fa6-ffdca5470395

- 2026-11-06T15:27:21Z @neo-gpt-euclid cross-referenced by PR #20462
### @neo-gpt-euclid - 2026-11-06T15:54:03Z

## Intake-derived Contract Ledger

Authored by Euclid, 2026-11-06, for the current-source implementation in #20462 at `0dee3efde0c6a2d0ab2867af60dbe61898cb60ad`. The operator's requirements above are preserved; the [intake disposition](https://github.com/neomjs/neo/issues/9555#issuecomment-6687815734) records the ownership and lifetime sharpening. Completed sequential reads are reused per retained executing Pipeline, including its existing Data counterpart; this does not claim a TTI benchmark, cross-Pipeline sharing or in-flight coalescing.

| Target surface | Source of authority | Shipped behavior | Fallback / refusal | Docs | Evidence |
|---|---|---|---|---|---|
| `Pipeline.cache` | Requirement 1; `src/data/Pipeline.mjs` config, `construct`, `runLocal` and `readCached` | Construction option, default `false`; forwarded when the existing Data counterpart is constructed. Storage belongs to the executing Pipeline; the App proxy stores no entries in Data mode. Cached snapshots are isolated and keyed structurally by current connection URL and read params. | Default-off retains stage execution. Streaming, null/refusal terminals and unsupported behavioral values bypass caching. Stage replacement, mutations, parser push and destruction invalidate. | Config/method JSDoc and current-source intake above | `unit/data/PipelineCache.spec.mjs` default-off, identity/key/snapshot and invalidation controls; `component/data/PipelineCache.spec.mjs` App/Data on/off counted HTTP and ownership cases |
| `Pipeline.cacheTTL` | Requirement 3; `src/data/Pipeline.mjs` config, `construct` and `readCached` | Construction option in milliseconds; absolute expiry begins when a completed result is stored. Default `0` keeps entries until invalidation/destruction. It is not a sliding read expiry. | Negative, non-finite or non-number TTL refuses before construction. Expired entries miss and execute the stages again. | Config and `readCached` JSDoc | `unit/data/PipelineCache.spec.mjs` completion-time expiry, boundary/zero lifetime and invalid-TTL controls |
| `Pipeline.clearCache()` | Requirement 4; `src/data/Pipeline.mjs` remote declaration, `clearCache`, `invalidateReadCache` | Returns `Promise<Number>`: local removed-entry count, or the count forwarded from an already-existing Data counterpart. Clears pending entry identities so a late/older completion cannot republish an invalidated entry. | Does not construct a cold counterpart; absent counterpart returns the local count. Existing remote errors propagate. | Public method JSDoc | `unit/data/PipelineCache.spec.mjs` local/remote count, cold counterpart, pending-clear and out-of-order controls; native component clear/refetch cases |
| Opted-in Store refresh | Pipeline cache config and `Store.load()`'s existing Pipeline read path; pre-code consumer contract read | Repeated identical `store.load()` calls on a retained opted-in Pipeline reuse its unexpired completed read. Explicit refresh is `await store.pipeline.clearCache(); await store.load()`. | With `cache: false`, every load keeps its existing transport/shaping behavior. A destroyed/replaced Pipeline has a new lifetime. | Cache config JSDoc, #20462 Deltas | `unit/data/PipelineCache.spec.mjs` explicit Store refresh control; native App/Data HTTP hit and clear/refetch controls |


The original issue body is unchanged. This is the full claimer-authored contract backfill requested by review 5802806991; it records shipped behavior rather than adding requirements.

- 2026-11-06T16:40:11Z @neo-gpt-sophie cross-referenced by #9553

