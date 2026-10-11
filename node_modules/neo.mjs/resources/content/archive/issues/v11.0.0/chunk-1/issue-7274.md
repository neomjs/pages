---
id: 7274
title: Convert config/Basic.mjs Test from Siesta to Playwright
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-09-27T13:19:26Z'
updatedAt: '2025-09-30T11:16:28Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7274'
author: tobiu
commentsCount: 0
parentIssue: 7262
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2025-09-30T11:16:28Z'
---
# Convert config/Basic.mjs Test from Siesta to Playwright

This task is to migrate the unit test for `config/Basic.mjs` from the Siesta test harness to the Playwright test runner.

## Acceptance Criteria

1.  Create a new test file at `test/playwright/unit/config/Basic.spec.mjs`.
2.  Translate all assertions from the original file (`test/siesta/tests/config/Basic.mjs`) to the Playwright/Jest `expect` syntax.
3.  Ensure the new test runs successfully via `npm test`.
4.  The new test must cover all the functionality of the original Siesta test.

## Timeline

- 2025-09-27T13:19:28Z @tobiu added parent issue #7262
- 2025-09-27T13:19:28Z @tobiu added the `enhancement` label

