---
id: 8820
title: 'test: Port Race Condition Test to Dev'
state: CLOSED
labels:
  - ai
  - testing
  - core
assignees:
  - tobiu
createdAt: '2026-01-20T00:22:52Z'
updatedAt: '2026-01-20T00:27:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8820'
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
blocking: []
closedAt: '2026-01-20T00:27:59Z'
---
# test: Port Race Condition Test to Dev

Porting the `RaceCondition.spec.mjs` test from `feat/8814-race-condition` to the `dev` branch.
This test reproduces a race condition where duplicate DOM nodes are created during rapid state changes.

