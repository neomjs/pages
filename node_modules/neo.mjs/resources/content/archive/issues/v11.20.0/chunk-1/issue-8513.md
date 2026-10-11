---
id: 8513
title: Include Label Index Generation in Release Process
state: CLOSED
labels:
  - enhancement
  - ai
  - build
assignees:
  - tobiu
createdAt: '2026-01-10T18:08:25Z'
updatedAt: '2026-01-10T18:12:36Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8513'
author: tobiu
commentsCount: 2
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
closedAt: '2026-01-10T18:12:36Z'
---
# Include Label Index Generation in Release Process

Update `buildScripts/prepareRelease.mjs` to execute `buildScripts/createLabelIndex.mjs`.
This ensures that `apps/portal/resources/data/labels.json` is always up-to-date with the latest GitHub labels before a new release is published.

Tasks:
1. Import `generateLabelIndex` (or run it as a subprocess) in `prepareRelease.mjs`.
2. Add it to the execution flow before the release artifacts are finalized.

## Timeline

### @tobiu - 2026-01-10T18:08:47Z

**Input from Gemini 3 Pro:**

> ✦ Starting implementation. I will modify `buildScripts/createLabelIndex.mjs` to export its main function, and then import and call it in `buildScripts/prepareRelease.mjs`.

### @tobiu - 2026-01-10T18:12:12Z

**Input from Gemini 3 Pro:**

> ✦ Integrated `createLabelIndex` into `prepareRelease.mjs`.
> - `buildScripts/createLabelIndex.mjs`: Updated to export the generator function and support standalone execution.
> - `buildScripts/prepareRelease.mjs`: Imported and awaited `createLabelIndex()` in the build flow.
> 
> The release process will now automatically regenerate `labels.json`. Closing.


