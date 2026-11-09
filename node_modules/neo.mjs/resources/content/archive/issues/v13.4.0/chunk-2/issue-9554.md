---
id: 9554
title: 'Enhancement: Add Data Pipeline Telemetry & Performance Metrics'
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
createdAt: '2026-03-25T20:12:22Z'
updatedAt: '2026-11-06T10:13:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9554'
author: tobiu
commentsCount: 2
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
closedAt: '2026-11-06T10:12:59Z'
---
# Enhancement: Add Data Pipeline Telemetry & Performance Metrics

### Goal
Capture and report granular performance metrics for every stage of the Data Pipeline.

### Description
To support the strategic "Benchmark Reports" and assist in debugging complex data flows, the Pipeline should capture telemetry.

**Requirements:**
1. Capture high-resolution timestamps for:
   - `connectionStart / End`
   - `parserStart / End`
   - `normalizerStart / End`
2. Track payload sizes (raw vs. parsed).
3. Return a `telemetry` object to the App Worker alongside the shaped data.
4. Integrate with `Neo.util.Logger` for optional performance profiling in the console.

---

## Implementation intake — Euclid, 2026-11-06

The original goal and four requirements above are retained. The intent still holds at Pipeline blob `f7cd4f01f4ce9d8a6e7512b075e5eadcc5360d3a`: current execute, read and push paths have no stage telemetry. Later push integration and remote-parameter preservation remain binding compatibility controls. The existing App/Data Pipeline owns execution; Store continues receiving its existing data and event payloads.

Compatibility decision: response-shape detection and user-parameter flags would collide with existing result and connection contracts. The call will select a dedicated profiling entry with a known result/telemetry carrier; the App-side Pipeline unwraps it. This adds no Store obligation. Profiling is off by default. Each actual execution attempt has its own record; no cross-worker clock subtraction or logical-retry correlation is claimed.

### Contract Ledger (intake-owned)

| Surface | Authority / owner | Contract | Edge / fallback | Evidence |
|---|---|---|---|---|
| Stage measurements | `Pipeline` connection/parser/normalizer dispatch | With telemetry enabled, capture the six named timestamps in the executing realm, operation identity and terminal status; keep invocation-local state | Skipped stage timestamps are null; failures retain the original result/rejection behavior and report no error payload | Delayed stages, skipped stages, rejection identity and out-of-order concurrent completions |
| Data-worker result | Existing Pipeline remote-method boundary | A dedicated profiling call returns a known carrier; App Pipeline emits `telemetry` and returns only the existing shaped result | Ordinary remote payloads and null/retry terminals are unchanged; no profiling flag inside connection params or response-shape guessing | Real RMA receiver, payload-field collision, null retry and parameter controls |
| Push and reporting | `pipelinePush` / App worker; `Logger` | Telemetry events are separate from data/push/progress events. Constructor profiling options reach the Data counterpart; optional console output contains metrics only | Parser data/progress forwarding is unchanged and is not established as a remote streaming capability by this work | Local/Data push controls, ordinary Store-event parity, disabled profiling/logging and metrics-only Logger input |
| Payload size | Values actually observed at stage boundaries | Report exact UTF-8/binary bytes where directly observable and parsed record counts where available, with explicit units | Other sizes are null/unknown; do not read/tee a stream again, re-serialize object payloads or infer network bytes from an ambiguous resource-timing entry | String/binary, parsed records, unknown object/stream, single-consumption and measurement-failure controls |

### Acceptance checks for the four original requirements

1. Stage timestamps and independent terminal records are covered across connection/parser/normalizer dispatch, including overlapping executions and failures.
2. Raw/parsed observations distinguish byte measurements, record counts and unknown values without changing or consuming the business data.
3. The App Pipeline receives operation-associated telemetry in local and Data-worker execution while existing result shapes, Store events, parameters and retry terminals remain unchanged.
4. Profiling and console output default off; enabled Logger output is bounded metrics without payload contents.

Prescription checked: `src/data/Pipeline.mjs` and its existing worker-message path own this concern. The existing `util.Performance` per-key start state is not a concurrent invocation clock; no aggregation API, benchmark suite, new service, stream-delivery repair or transport-latency claim is added here.

Origin Session ID: 5be6d6e3-45c3-458f-abb2-b7d09587111d.


## Timeline

- 2026-03-25T20:12:22Z @tobiu assigned to @tobiu
- 2026-03-25T20:12:24Z @tobiu added the `enhancement` label
- 2026-03-25T20:12:24Z @tobiu added the `ai` label
- 2026-03-25T20:12:24Z @tobiu added the `performance` label
- 2026-03-25T20:12:24Z @tobiu added the `core` label
- 2026-03-25T20:50:50Z @tobiu added the `help wanted` label
- 2026-03-25T20:50:50Z @tobiu added the `no auto close` label
- 2026-03-26T15:20:24Z @tobiu unassigned from @tobiu
- 2026-06-23T03:33:24Z @neo-gpt-euclid added the `not-code-ready` label
- 2026-06-23T03:33:24Z @neo-gpt-euclid added the `needs-design` label
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:42:57Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - Inspected `src/data/Pipeline.mjs:114-232`: `execute()` and `onConnectionPush()` invoke `connection`, `parser`, and `normalizer` directly without capturing `Performance` stage timestamps (`connectionStart/End`, `parserStart/End`, `normalizerStart/End`) or payload-size telemetry.
- **Verdict (`op`):** **Holds** (premise verified against `src/data/Pipeline.mjs:114-175`; unimplemented telemetry enhancement to `Neo.data.Pipeline`).

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

### @neo-gpt-euclid - 2026-11-06T04:50:40Z

## Backlog intake — intent holds; contract alignment before implementation

Rechecked the current `Pipeline` execution, read and push paths. The stage calls remain uninstrumented, so #9554 is still valid. The current public result is the shaped data itself, consumed by Store; `workerExecution: 'data'` delegates to a counterpart and returns that same shape. Replacing it indiscriminately with `{data, telemetry}` would change the existing consumer contract.

Prescription checked: `src/data/Pipeline.mjs` owns stage measurement; its existing Data-worker return/push path owns transport, and `src/util/Logger.mjs` owns optional console output. No new service is needed.

Before a code claim, the missing Contract Ledger should settle these boundaries:

| Surface | Proposed contract | Required falsifier |
|---|---|---|
| Stage timestamps | Monotonic timestamps measured in the realm executing each stage; distinguish skipped stages and failures. Do not compare App/Data-worker clock origins as one timeline. | Delayed connection/parser/normalizer controls, missing-stage and rejection controls; overlapping operations do not share mutable timing state. |
| Result and push transport | Preserve the existing shaped-data and Store-event contracts. Carry operation-associated telemetry to the App Worker through an explicit opt-in carrier; no payload-field collision or retry misattribution. | Same data/identity and Store events with profiling on/off, local and Data-worker paths, concurrent operations and pushes. |
| Payload sizes | Declare units and whether a measurement is exact or estimated. An unavailable size remains unknown; profiling must not consume a stream/Response body again or turn an otherwise valid result into a failure. | Strings/binary data, object data, unknown/stream input and failed measurement controls. |
| Optional profiling | Disabled by default; Logger receives bounded metrics, never raw payload contents. | No logging or measurement side effects while disabled; enabled output contains metrics only. |

Classification: **accept and sharpen / needs-contract-alignment**. This is an intake proposal, not a change to the original requirements or a code claim. No assignment, branch, or implementation was started.

Origin Session ID: 5be6d6e3-45c3-458f-abb2-b7d09587111d.

- 2026-11-06T05:21:13Z @neo-gpt-euclid cross-referenced by PR #20434
- 2026-11-06T05:51:30Z @neo-gpt-euclid cross-referenced by #20436
- 2026-11-06T06:11:59Z @neo-gpt-euclid cross-referenced by PR #20439

