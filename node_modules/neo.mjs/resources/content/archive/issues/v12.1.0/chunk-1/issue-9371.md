---
id: 9371
title: API for Programmatic Scrolling in ScrollSync
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-03-07T16:39:00Z'
updatedAt: '2026-03-07T16:54:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9371'
author: tobiu
commentsCount: 0
parentIssue: 9369
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-03-07T16:53:48Z'
---
# API for Programmatic Scrolling in ScrollSync

*Part of Epic #9369*

Expose a method in `src/main/addon/ScrollSync.mjs` (e.g., `syncTo(registrationId, scrollLeft, scrollTop)`) to allow other Main Thread Addons to explicitly drive the scroll state through the coordinator's lock, bypassing native scroll event triggers.

## Timeline

- 2026-03-07T16:53:13Z @tobiu cross-referenced by #9370

