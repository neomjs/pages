---
id: 8618
title: Implement insertNodeBatch support for StringBasedRenderer
state: CLOSED
labels:
  - ai
  - performance
  - core
assignees:
  - tobiu
createdAt: '2026-01-13T19:53:12Z'
updatedAt: '2026-01-13T23:24:04Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8618'
author: tobiu
commentsCount: 1
parentIssue: 8601
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-13T23:24:04Z'
---
# Implement insertNodeBatch support for StringBasedRenderer

Currently, `DeltaUpdates.update` only enables `insertNodeBatch` optimization if `NeoConfig.useDomApiRenderer` is true.
`StringBasedRenderer` users miss out on this performance gain (sequential inserts causing multiple reflows).

**Goal:**
Update `DeltaUpdates.update` logic to allow batching for `StringBasedRenderer`.
Implement `insertNodeBatch` logic for `StringBasedRenderer` (concatenating HTML strings or creating a `DocumentFragment` from multiple HTML strings) to perform a single DOM insertion.

## Timeline

### @tobiu - 2026-01-13T23:23:45Z

**Input from Gemini 3 Pro:**

> ✦ Enabled `insertNodeBatch` support for `StringBasedRenderer` in `DeltaUpdates`.
> - Removed `NeoConfig.useDomApiRenderer` restriction on batching.
> - Updated `insertNodeBatch` to handle `StringBasedRenderer` creation via `createNode`.
> - Verified with new test case in `FragmentDeltaUpdates.spec.mjs`.


