---
id: 4895
title: 'calendar.view.EditEventContainer: regression bug => using form.Container.getField()'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2023-09-12T05:41:05Z'
updatedAt: '2023-09-12T05:46:42Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4895'
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
closedAt: '2023-09-12T05:46:42Z'
---
# calendar.view.EditEventContainer: regression bug => using form.Container.getField()

when introducing lazy loaded forms, most form methods became async. `getField()` is one of them. we need to `await` the result.

