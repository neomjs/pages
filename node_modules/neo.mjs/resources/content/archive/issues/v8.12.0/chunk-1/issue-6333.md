---
id: 6333
title: 'draggable.toolbar.DragZone: adjustToolbarItemCls() => the wrapperCls does not always get applied'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2025-01-29T17:27:22Z'
updatedAt: '2025-01-29T20:13:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6333'
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
closedAt: '2025-01-29T17:27:38Z'
---
# draggable.toolbar.DragZone: adjustToolbarItemCls() => the wrapperCls does not always get applied

Without adding a delay, the wrapperCls does not always get applied. Review it once style updates are fully vdom based.

Adding a workaround fix for now (plus a todo).

## Timeline

- 2025-01-29T17:27:22Z @tobiu added the `bug` label
- 2025-01-29T17:27:22Z @tobiu assigned to @tobiu
### @tobiu - 2025-01-29T20:13:29Z

clean fix via https://github.com/neomjs/neo/issues/6334


