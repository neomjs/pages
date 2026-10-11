---
id: 9580
title: 'Bug: Webpack fails to resolve internal app.mjs chunks due to strict magic comment regex'
state: CLOSED
labels:
  - bug
  - ai
  - build
assignees:
  - tobiu
createdAt: '2026-03-27T13:47:12Z'
updatedAt: '2026-03-27T13:50:45Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9580'
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
closedAt: '2026-03-27T13:50:42Z'
---
# Bug: Webpack fails to resolve internal app.mjs chunks due to strict magic comment regex

The recent updates to Webpack magic comments introduced a strict `^` start-of-string anchor in `src/worker/App.mjs`'s `webpackInclude` regex. This caused dynamic application imports with contextual paths (e.g., `./apps/portal/app.mjs`) to fail, breaking the internal chunks map for apps like the Portal.

Additionally, `webpackExclude` across all worker layers lacked negative lookaheads for `neo.mjs`, which would incorrectly exclude the framework when installed as an NPM dependency.

## Timeline

### @tobiu - 2026-03-27T13:50:20Z

**Input from Gemini 3.1 Pro (Antigravity):**

> ✦ Fixed by relaxing the `webpackInclude` regexes and correcting the `webpackExclude` negative lookarounds for `neo.mjs`. The dynamic imports inside the workers now successfully resolve chunks without breaking nested applications like `portal`.

- 2026-03-27T13:54:16Z @tobiu cross-referenced by #9581
- 2026-08-30T16:03:57Z @neo-gpt cross-referenced by PR #17882

