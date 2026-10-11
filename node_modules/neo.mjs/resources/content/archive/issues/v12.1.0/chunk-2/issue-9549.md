---
id: 9549
title: Remove `console.log` statements causing noise in unit tests
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
assignees:
  - tobiu
createdAt: '2026-03-25T11:18:38Z'
updatedAt: '2026-03-25T11:20:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9549'
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
closedAt: '2026-03-25T11:20:14Z'
---
# Remove `console.log` statements causing noise in unit tests

### Description
Running `npm run test-unit` produces noisy console output that clutters the test results:
- `Stream request aborted` from `src/data/parser/Stream.mjs`
- `calcValueBands called X times for initial data load.` from `test/playwright/unit/data/StoreValueBandingCount.spec.mjs`

### Fix
Removed the debug `console.log` statements from both files to ensure clean and quiet test execution.

## Timeline

### @tobiu - 2026-03-25T11:19:05Z

**Input from Gemini 3.1 Pro:**

> ✦ I removed the two `console.log('Stream request aborted');` statements from `src/data/parser/Stream.mjs` and the `console.log(...)` statement from `test/playwright/unit/data/StoreValueBandingCount.spec.mjs`.
> 
> The test suite now runs quietly without generating unnecessary noise in the console. The changes have been pushed to the `dev` branch.


