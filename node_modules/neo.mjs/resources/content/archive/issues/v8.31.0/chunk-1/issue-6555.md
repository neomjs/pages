---
id: 6555
title: 'grid.View: createViewData() => updateVdom param'
state: CLOSED
labels:
  - enhancement
assignees: []
createdAt: '2025-03-09T14:32:56Z'
updatedAt: '2025-03-09T17:17:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6555'
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
closedAt: '2025-03-09T17:17:56Z'
---
# grid.View: createViewData() => updateVdom param

For `grid.plugin.AnimateRows` we need a way to get the next vdom state without actually creating it.

It would be way too expensive to even manually iterate over all records (imaging 50k rows).

## Timeline

### @tobiu - 2025-03-09T17:17:16Z

I need to revert this one, since it would still trigger cell renderers. For component based columns => index shift => update cycle. Got a smarter strategy already.

- 2025-03-09T17:20:11Z @tobiu cross-referenced by #6557

