---
id: 5720
title: 'main.addon.IntersectionObserver: observe() => adjust the return value'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-08-07T08:58:31Z'
updatedAt: '2024-08-07T08:59:10Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5720'
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
closedAt: '2024-08-07T08:59:10Z'
---
# main.addon.IntersectionObserver: observe() => adjust the return value

rationale: we need both => the info if targets got cached since there was no `register()` call yet and the info if we found target nodes inside the dom (count).

