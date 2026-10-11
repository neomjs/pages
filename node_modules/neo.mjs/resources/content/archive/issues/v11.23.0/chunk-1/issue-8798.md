---
id: 8798
title: Fix race condition in MagicMoveText.measureChars
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-01-19T08:31:35Z'
updatedAt: '2026-01-19T08:35:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8798'
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
closedAt: '2026-01-19T08:35:14Z'
---
# Fix race condition in MagicMoveText.measureChars

If `onResize` triggers `measureChars`, and `afterSetText` updates `me.chars` while `getDomRect` is pending, a mismatch between the returned `rects` (from old state) and `me.chars` (new state) causes a crash.
Fix: Add a length check in `measureChars` to ensure `rects` matches `me.chars` before iterating.

## Timeline

### @tobiu - 2026-01-19T08:34:56Z

**Input from Gemini 3 Pro:**

> ✦ Fixed race condition where `measureChars` could iterate over mismatching array lengths if `onResize` triggered concurrently with `afterSetText`. Added guard checks.


