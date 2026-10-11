---
id: 7293
title: Convert vdom/layout/Cube.mjs Test from Siesta to Playwright
state: CLOSED
labels:
  - enhancement
  - help wanted
  - good first issue
  - hacktoberfest
assignees:
  - kart-u
createdAt: '2025-09-27T14:07:47Z'
updatedAt: '2025-10-04T18:47:01Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7293'
author: tobiu
commentsCount: 6
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
closedAt: '2025-10-04T17:58:06Z'
---
# Convert vdom/layout/Cube.mjs Test from Siesta to Playwright

This task is to migrate the unit test for `vdom/layout/Cube.mjs` from the Siesta test harness to the Playwright test runner.

## Acceptance Criteria

1.  Create a new test file at `test/playwright/unit/vdom/layout/Cube.spec.mjs`.
2.  Translate all assertions from the original file (`test/siesta/tests/vdom/layout/Cube.mjs`) to the Playwright/Jest `expect` syntax.
3.  Ensure the new test runs successfully via `npm test`.
4.  The new test must cover all the functionality of the original Siesta test.

## Timeline

- 2025-09-27T14:07:48Z @tobiu added the `enhancement` label
- 2025-09-27T14:07:48Z @tobiu added parent issue #7262
### @kart-u - 2025-10-03T09:20:18Z

hello @tobiu ,
I will like to work on this issue, could you please assign it to me?

### @KURO-1125 - 2025-10-03T09:21:30Z

Hi! I'd like to work on this Cube test migration using the AI native workflow. 
Could you please assign this to me?
Thanks!


### @tobiu - 2025-10-03T16:24:13Z

Ha, these 2 comments came in almost at the same time. Assuming you are not the same person, I would stick to "first comment wins". I hope this is fine, since both of you already have other tickets assigned.

No worries, I can easily create more new tickets if needed.

- 2025-10-04T10:56:55Z @kart-u cross-referenced by PR #7352
- 2025-10-04T12:23:03Z @kart-u cross-referenced by #7286
### @tobiu - 2025-10-04T18:31:16Z

reopening, since something is off with the imports / top-level setup. only happens when running all tests combined.

### @kart-u - 2025-10-04T18:39:35Z

please check again made some changes asked Gemini on issue it state modified state of Neo.config.useDomApiRenderer might be messing with other tests

### @tobiu - 2025-10-04T18:47:01Z

the PR was already merged. somehow the combination of the cube layout and vdomrealword tests clashed. now all 114 tests are passing.


