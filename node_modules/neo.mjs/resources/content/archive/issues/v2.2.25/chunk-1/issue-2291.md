---
id: 2291
title: 'calendar.view.week.Component: increase an event duration to end at 24:00, then shorten it again'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-06-06T18:09:44Z'
updatedAt: '2021-06-13T10:56:06Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2291'
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
closedAt: '2021-06-13T10:56:06Z'
---
# calendar.view.week.Component: increase an event duration to end at 24:00, then shorten it again

currently 24:00 does get adjusted to 23:59. shortening it again will have the missing minute, so we should increase the record value by 1m for those cases.

## Timeline

- 2021-06-06T18:09:44Z @tobiu added the `enhancement` label
- 2021-06-06T18:09:44Z @tobiu assigned to @tobiu

