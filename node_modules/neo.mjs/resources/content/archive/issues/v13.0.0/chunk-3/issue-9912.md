---
id: 9912
title: 'bug(ai): Prevent Vector Apoptosis from eradicating structural entities'
state: CLOSED
labels:
  - bug
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-04-12T11:37:19Z'
updatedAt: '2026-04-12T19:25:12Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9912'
author: tobiu
commentsCount: 0
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking:
  - '[x] 9914 Epic: Native Edge Graph Auditing and Deduplication Pipeline'
closedAt: '2026-04-12T19:20:25Z'
---
# bug(ai): Prevent Vector Apoptosis from eradicating structural entities

### Context
`runSandman.mjs` is unnecessarily re-embedding every OPEN issue and discussion during the REM extraction pipeline. We originally suspected `sqlite-vec` metadata formatting, but the root cause is that `GraphService.getOrphanedNodes()` considers any node without edges to be "orphaned" and permanently deletes it via Vector Apoptosis. 

### Objective
Update `GraphService.getOrphanedNodes()` to explicitly protect structural entities like `ISSUE`, `DISCUSSION`, and `PULL_REQUEST` from apoptosis, so they remain in the Native Edge Graph and ChromaDB, successfully passing the hash equality bypass on subsequent runs.

## Timeline

- 2026-04-12T19:20:09Z @tobiu cross-referenced by PR #9941

