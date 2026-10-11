---
id: 8072
title: 'Enhance LivePreview: Add destroy logic and rename connection handlers'
state: CLOSED
labels:
  - enhancement
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2025-12-09T16:44:28Z'
updatedAt: '2025-12-09T17:03:04Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8072'
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
closedAt: '2025-12-09T17:03:04Z'
---
# Enhance LivePreview: Add destroy logic and rename connection handlers

This ticket covers two improvements for `Neo.code.LivePreview`:

1.  **Clean up on destroy**:
    When a `LivePreview` instance is destroyed, it should ensure its associated pop-out window is closed.
    - Implement a `destroy()` method.
    - Use `Neo.Main.windowClose({names: [this.id]})` to close the specific window associated with this instance.

2.  **Rename connection handlers**:
    To improve clarity regarding the data source (window vs app), rename the worker connection listeners:
    - `onAppConnect` -> `onWindowConnect`
    - `onAppDisconnect` -> `onWindowDisconnect`
    - The events receive `appName` and `windowId`, but since `appName` is not unique across tabs, `windowId` is the key identifier. Renaming reflects this focus.

