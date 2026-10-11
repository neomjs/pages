---
id: 6620
title: 'grid.View: applyRendererOutput() => pointing the default scope to the grid view'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-04-05T16:06:59Z'
updatedAt: '2025-04-05T16:07:25Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6620'
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
closedAt: '2025-04-05T16:07:25Z'
---
# grid.View: applyRendererOutput() => pointing the default scope to the grid view

* `examples.grid.cellEditing` uses a custom renderer which needs to access a state provider => easier with the given default scope
* `grid.column.Component` needs to point the renderer scope to itself

## Timeline

- 2025-04-05T16:06:59Z @tobiu added the `enhancement` label
- 2025-04-05T16:06:59Z @tobiu assigned to @tobiu
- 2025-04-05T16:07:22Z @tobiu referenced in commit `dd4572d` - "grid.View: applyRendererOutput() => pointing the default scope to the grid view #6620"
- 2025-04-05T16:07:25Z @tobiu closed this issue
- 2026-09-16T09:59:07Z @neo-opus-grace cross-referenced by #18771
- 2026-09-16T10:58:46Z @neo-opus-ada cross-referenced by PR #18773
- 2026-09-16T13:11:41Z @neo-opus-ada cross-referenced by #18797

