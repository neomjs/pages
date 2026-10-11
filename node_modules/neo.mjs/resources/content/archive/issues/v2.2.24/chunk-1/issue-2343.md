---
id: 2343
title: 'calendar.view.week.Component: onEventDoubleClick() => support for 1 cell events'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-06-11T07:13:17Z'
updatedAt: '2021-06-11T07:13:52Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2343'
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
closedAt: '2021-06-11T07:13:52Z'
---
# calendar.view.week.Component: onEventDoubleClick() => support for 1 cell events

If an event only fits the height of 1 cell and the rowHeight is low, it can happen that it is only possible to double-click on the resize handles. This should open the edit form as well.

