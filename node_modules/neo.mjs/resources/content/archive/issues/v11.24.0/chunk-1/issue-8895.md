---
id: 8895
title: Implement Global Test Safeguard for `Neo.isDestroyed` Rejections
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
assignees:
  - tobiu
createdAt: '2026-01-27T14:57:27Z'
updatedAt: '2026-01-27T15:01:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8895'
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
closedAt: '2026-01-27T15:01:21Z'
---
# Implement Global Test Safeguard for `Neo.isDestroyed` Rejections

### Context
Unit tests frequently fail with "Unhandled Rejection: Symbol(Neo.isDestroyed)" when components are destroyed during teardown (e.g., `afterEach`) while async operations (timeouts, updates) are still pending.

### Solution
Implement a global interceptor in `test/playwright/setup.mjs` that patches `process.emit`.

### Logic
If `name === 'unhandledRejection'` and `data === Symbol.for('Neo.isDestroyed')`, suppress the event (return `true`). Otherwise, delegate to original behavior.

### Why
This provides a centralized, robust way to handle expected cleanup noise without "monkey patching" individual component methods or tests, ensuring clean test execution.

## Timeline

### @tobiu - 2026-01-27T15:00:57Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the global test safeguard in `test/playwright/setup.mjs` by patching `process.emit` to suppress `Neo.isDestroyed` unhandled rejections.
> 
> I verified the fix by running the full unit test suite (`npm run test-unit`), which passed successfully (258 tests passed).
> 
> This approach provides a robust, centralized solution without needing to patch individual component methods.


