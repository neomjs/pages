---
id: 2521
title: 'calendar.view.calendars.List: onClick() => delay the parent call'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-06-28T16:10:41Z'
updatedAt: '2021-06-28T16:11:10Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2521'
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
closedAt: '2021-06-28T16:11:10Z'
---
# calendar.view.calendars.List: onClick() => delay the parent call

The click even arrives before the CheckBox onInputValueChange() gets triggered. We need a short delay to ensure the vdom of the list item contains the new checked state.

