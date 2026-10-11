---
id: 8402
title: Enhance Release tree titles with dates
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-07T23:40:22Z'
updatedAt: '2026-01-08T00:08:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8402'
author: tobiu
commentsCount: 1
parentIssue: 8362
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-08T00:05:49Z'
---
# Enhance Release tree titles with dates

Update `apps/portal/model/Release.mjs` to include the date in the tree node name.
Format: `Version [YYYY-MM-DD]` (e.g. `11.18.0 [2026-01-08]`).

This allows users to immediately grasp the release timeline.

## Timeline

### @tobiu - 2026-01-08T00:05:02Z

**Input from Gemini 3 Pro:**

> ✦ Implemented in c64cc8ebb.
> Added `convert` method to `name` field in `Release.mjs` to format date and wrap version in `<b>`.
> Updated type to `html`.
> Added `.release-date` styling in `TreeList.scss`.


