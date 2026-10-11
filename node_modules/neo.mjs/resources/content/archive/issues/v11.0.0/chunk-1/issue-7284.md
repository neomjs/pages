---
id: 7284
title: Convert functional/Parse5Processor.mjs Test from Siesta to Playwright
state: CLOSED
labels:
  - enhancement
  - help wanted
  - good first issue
  - hacktoberfest
assignees:
  - kart-u
createdAt: '2025-09-27T13:56:24Z'
updatedAt: '2025-10-04T17:52:12Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7284'
author: tobiu
commentsCount: 2
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
closedAt: '2025-10-04T17:52:12Z'
---
# Convert functional/Parse5Processor.mjs Test from Siesta to Playwright

This task is to migrate the unit test for `functional/Parse5Processor.mjs` from the Siesta test harness to the Playwright test runner.

## Acceptance Criteria

1.  Create a new test file at `test/playwright/unit/functional/Parse5Processor.spec.mjs`.
2.  Translate all assertions from the original file (`test/siesta/tests/functional/Parse5Processor.mjs`) to the Playwright/Jest `expect` syntax.
3.  Ensure the new test runs successfully via `npm test`.
4.  The new test must cover all the functionality of the original Siesta test.

## Timeline

- 2025-09-27T13:56:25Z @tobiu added the `enhancement` label
- 2025-09-27T13:56:25Z @tobiu added parent issue #7262
### @kart-u - 2025-10-04T09:00:15Z

hello @tobiu I would like to work on this can you please assign it to me?

### @tobiu - 2025-10-04T09:21:57Z

done.

- 2025-10-04T11:32:22Z @kart-u cross-referenced by PR #7353
- 2025-10-04T12:23:03Z @kart-u cross-referenced by #7286
- 2026-09-05T13:24:51Z @neo-fable cross-referenced by #18361

