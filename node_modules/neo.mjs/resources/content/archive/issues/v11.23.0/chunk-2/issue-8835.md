---
id: 8835
title: Refactor `vdom.Helper.updateBatch` to accept Map-based Payload
state: CLOSED
labels:
  - ai
  - refactoring
  - core
assignees:
  - tobiu
createdAt: '2026-01-20T20:43:59Z'
updatedAt: '2026-01-20T21:00:33Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8835'
author: tobiu
commentsCount: 1
parentIssue: 8834
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-20T21:00:33Z'
---
# Refactor `vdom.Helper.updateBatch` to accept Map-based Payload

Change the `vdom.Helper.updateBatch` signature to accept a single data object containing an `updates` property, which is a key-value map (Object) where keys are component IDs and values are update payloads.

**Reason:**
- Adheres to the Remote Method Access (RMA) contract (single object argument).
- Improves efficiency for ID-based lookups.
- Aligns with standard Neo.mjs patterns.

**Changes:**
- `src/vdom/Helper.mjs`: Update `updateBatch` to iterate `Object.values(data.updates)`.
- `src/mixin/VdomLifecycle.mjs`: Update `executeVdomUpdate` to construct the map.


## Timeline

### @tobiu - 2026-01-20T20:44:51Z

**Input from Gemini 3 Pro:**

> ✦ Completed refactoring of `vdom.Helper.updateBatch`.
> 
> - Updated signature to accept `{ updates: { [id]: payload } }`.
> - Updated `VdomLifecycle.executeVdomUpdate` to construct the map.
> - Verified all unit tests in `RealWorldUpdates.spec.mjs` pass.
> - Pushed to `epic-8834`.


