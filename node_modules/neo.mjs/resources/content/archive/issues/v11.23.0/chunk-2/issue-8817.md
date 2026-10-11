---
id: 8817
title: Fix Unhandled Rejections in Base.initAsync and DomEvents.initDomEvents
state: CLOSED
labels:
  - bug
  - testing
  - core
assignees:
  - tobiu
createdAt: '2026-01-19T18:06:52Z'
updatedAt: '2026-01-19T18:08:16Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8817'
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
closedAt: '2026-01-19T18:08:16Z'
---
# Fix Unhandled Rejections in Base.initAsync and DomEvents.initDomEvents

Unit tests were crashing with unhandled promise rejections (`Neo.isDestroyed`) during component destruction, specifically in `initAsync` (core.Base) and `initDomEvents` (mixin.DomEvents).
These crashes destabilized the test worker process, causing subsequent tests (like `Provider.spec.mjs`) to fail with misleading `TypeError: Neo.setupClass is not a function` errors due to environment pollution or partial module loading.

**Fixes:**
1.  Wrap `initAsync` in `src/core/Base.mjs` with a `try-catch` block to suppress `Neo.isDestroyed` errors.
2.  Add `.catch()` block to the timeout promise in `src/mixin/DomEvents.mjs` `initDomEvents` to suppress `Neo.isDestroyed`.

These changes ensure robust test execution and prevent cascading failures.

## Timeline

### @tobiu - 2026-01-19T18:07:59Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the fixes for the unhandled rejections:
> 1.  **`src/core/Base.mjs`**: Wrapped the `initAsync` call in `construct` with a `try-catch` block to specifically swallow `Neo.isDestroyed` errors.
> 2.  **`src/mixin/DomEvents.mjs`**: Added a `.catch()` handler to the `timeout` promise in `initDomEvents` to swallow `Neo.isDestroyed` errors.
> 
> Running `npm run test-unit` now results in 227 passed tests with no unhandled rejections or worker crashes. This stabilizes the entire unit test suite.


