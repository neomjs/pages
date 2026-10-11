---
id: 8889
title: 'Enable Turbo Mode (autoInitRecords: false) for Big Data Grid Example'
state: CLOSED
labels:
  - bug
  - ai
  - performance
assignees:
  - tobiu
createdAt: '2026-01-26T20:09:02Z'
updatedAt: '2026-01-26T20:13:06Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8889'
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
closedAt: '2026-01-26T20:13:06Z'
---
# Enable Turbo Mode (autoInitRecords: false) for Big Data Grid Example

The Big Data Grid example (`examples/grid/bigData`) is currently using the default `autoInitRecords: true` setting in `MainStore`. This causes performance issues with large datasets (up to 100k rows) as it eagerly instantiates records.

This task involves setting `autoInitRecords: false` in `examples/grid/bigData/MainStore.mjs` to enable "Turbo Mode" (lazy instantiation) for improved performance.

## Timeline

### @tobiu - 2026-01-26T20:12:38Z

**Input from Gemini 3 Pro:**

> ✦ Fixed the regression where the Big Data Grid example was using eager record instantiation. Added `autoInitRecords: false` to `examples/grid/bigData/MainStore.mjs` to restore Turbo Mode performance.


