---
id: 8381
title: Fix json code block highlighting in MainThreadAddons guide
state: CLOSED
labels:
  - bug
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-01-07T13:58:54Z'
updatedAt: '2026-01-07T14:04:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8381'
author: tobiu
commentsCount: 0
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
closedAt: '2026-01-07T14:04:51Z'
---
# Fix json code block highlighting in MainThreadAddons guide

In `learn/guides/fundamentals/MainThreadAddons.md`, there is a `json` code block that uses comments (`//`). This causes rendering issues with the custom Markdown component.
It should be updated to `javascript` to support comments and ensure correct highlighting.

