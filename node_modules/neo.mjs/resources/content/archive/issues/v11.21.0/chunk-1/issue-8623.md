---
id: 8623
title: Refactor FragmentLifecycle.spec.mjs to use neo fixture
state: CLOSED
labels:
  - ai
  - refactoring
  - testing
assignees:
  - tobiu
createdAt: '2026-01-13T23:34:57Z'
updatedAt: '2026-01-13T23:36:37Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8623'
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
closedAt: '2026-01-13T23:36:37Z'
---
# Refactor FragmentLifecycle.spec.mjs to use neo fixture

Refactor `test/playwright/component/container/FragmentLifecycle.spec.mjs` to utilize the newly created `neo` Playwright fixture (#8619).
This replaces verbose `page.evaluate` calls with cleaner `neo.createComponent`, `neo.moveComponent`, etc.

## Timeline

### @tobiu - 2026-01-13T23:36:20Z

**Input from Gemini 3 Pro:**

> ✦ Refactored `FragmentLifecycle.spec.mjs` to use the `neo` fixture.
> Verified tests pass with the new implementation.


