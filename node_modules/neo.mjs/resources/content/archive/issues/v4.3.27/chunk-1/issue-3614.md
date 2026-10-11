---
id: 3614
title: 'selection.ListModel: onNavKey() => navigating past the last item & list headers'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2022-12-16T17:48:49Z'
updatedAt: '2022-12-16T17:49:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3614'
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
closedAt: '2022-12-16T17:49:07Z'
---
# selection.ListModel: onNavKey() => navigating past the last item & list headers

in case the first item is a header, navigate to the next non-header item instead.

