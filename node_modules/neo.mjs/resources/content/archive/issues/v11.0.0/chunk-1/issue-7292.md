---
id: 7292
title: Convert vdom/VdomRealWorldUpdates.mjs Test from Siesta to Playwright
state: CLOSED
labels:
  - enhancement
  - help wanted
  - good first issue
  - hacktoberfest
assignees:
  - KURO-1125
createdAt: '2025-09-27T14:06:30Z'
updatedAt: '2025-10-04T19:10:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7292'
author: tobiu
commentsCount: 5
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
closedAt: '2025-10-04T14:15:07Z'
---
# Convert vdom/VdomRealWorldUpdates.mjs Test from Siesta to Playwright

This task is to migrate the unit test for `vdom/VdomRealWorldUpdates.mjs` from the Siesta test harness to the Playwright test runner.

## Acceptance Criteria

1.  Create a new test file at `test/playwright/unit/vdom/VdomRealWorldUpdates.spec.mjs`.
2.  Translate all assertions from the original file (`test/siesta/tests/vdom/VdomRealWorldUpdates.mjs`) to the Playwright/Jest `expect` syntax.
3.  Ensure the new test runs successfully via `npm test`.
4.  The new test must cover all the functionality of the original Siesta test.

## Timeline

- 2025-09-27T14:06:31Z @tobiu added parent issue #7262
- 2025-09-27T14:06:32Z @tobiu added the `enhancement` label
### @KURO-1125 - 2025-10-03T09:22:58Z

Hi! I'd like to work on this VdomReadWorldUpdates test migration using the AI native workflow.
Could you please assign this to me?
Thanks!

### @tobiu - 2025-10-03T16:06:40Z

done.

- 2025-10-04T09:53:30Z @KURO-1125 cross-referenced by PR #7349
### @tobiu - 2025-10-04T18:34:32Z

reopening something is odd with the imports / class definitions, getting errors when running all new tests combined.

### @tobiu - 2025-10-04T18:36:02Z

i think we are stable again => 114 tests are passing.

### @KURO-1125 - 2025-10-04T19:10:14Z

Thanks for the fix! Good to see all 114 test are passing.


