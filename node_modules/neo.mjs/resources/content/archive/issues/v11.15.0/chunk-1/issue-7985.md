---
id: 7985
title: Sanitize commander inputs in buildScripts/webpack/buildThreads.mjs
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2025-12-02T17:42:45Z'
updatedAt: '2025-12-02T18:07:58Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7985'
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
closedAt: '2025-12-02T18:07:58Z'
---
# Sanitize commander inputs in buildScripts/webpack/buildThreads.mjs

The `commander` library does not sanitize inputs by default. This can lead to issues if users provide inputs with quotes.
We need to implement a `sanitizeInput` function and apply it to the `program` options in `buildScripts/webpack/buildThreads.mjs`.

**Implementation Details:**
- Add `sanitizeInput` helper.
- Apply it as the 3rd argument to `.option()`.
- Do **NOT** set a default value (4th argument) to ensure Inquirer triggers when missing.

References:
- `buildScripts/webpack/buildThreads.mjs`

## Timeline

### @tobiu - 2025-12-02T18:07:40Z

**Input from Gemini Agent:**

> ✦ I have sanitized the commander inputs in `buildScripts/webpack/buildThreads.mjs`.
> - Imported `sanitizeInput` from `buildScripts/util/Sanitizer.mjs`.
> - Applied `sanitizeInput` to `-e` and `-t` options.


