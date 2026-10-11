---
id: 9762
title: Stabilize Sandman Inference Pipeline & Fix SQLite Race Conditions
state: CLOSED
labels:
  - bug
  - ai
  - performance
assignees:
  - tobiu
createdAt: '2026-04-07T19:35:46Z'
updatedAt: '2026-04-07T19:37:52Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9762'
author: tobiu
commentsCount: 1
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
closedAt: '2026-04-07T19:37:51Z'
---
# Stabilize Sandman Inference Pipeline & Fix SQLite Race Conditions

### Description
The autonomous REM sleep pipeline (`Sandman`) stalls and occasionally crashes due to VRAM starvation and a race condition during SQLite matrix initialization.

### Issues Identified
1. **Dynamic Context Scaling:** Statically assigning `num_ctx: 200000` causes OS VRAM starvation on smaller/medium payloads and massive context ingestion latency.
2. **Capability Gap Prompt Thinning:** Passing `7500+` paths from the workspace tree into the context per node evaluation causes sequence bottlenecks.
3. **HTTP Timeouts:** Using native `fetch()` encounters undocumented 5-minute timeout caps from `undici` during heavy local LLM processing.
4. **SQLite Race Condition:** Concurrent async operations during local matrix initialization triggered `UNIQUE constraint failed: vector_collections_meta.name`.

### Proposed Fixes
* Dynamically allocate KV cache with `Math.ceil(chars / 3) + 4096`.
* Implement strict semantic fuzzy matching to limit directory contexts.
* Swap `fetch()` for native `http/https` to enforce explicit 1-hour timeouts for Ollama backend calls.
* Implement `INSERT OR IGNORE INTO` in `SQLiteVectorManager.mjs` to handle concurrent discoveries gracefully.

## Timeline

### @tobiu - 2026-04-07T19:37:50Z

Deployed in #9762. The autonomous pipeline is fully stabilized and processing the backlog with extreme efficiency. Verified that Cap Gap and Tri-Vector cycles succeed and loop safely on huge 3K char payloads seamlessly.


