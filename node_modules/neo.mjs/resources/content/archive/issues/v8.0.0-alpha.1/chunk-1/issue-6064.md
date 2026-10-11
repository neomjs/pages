---
id: 6064
title: 'util.VNode: getChildIds() => exclude component references'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-11-05T23:58:58Z'
updatedAt: '2024-11-06T00:01:38Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6064'
author: tobiu
commentsCount: 0
parentIssue: 6045
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2024-11-06T00:01:38Z'
---
# util.VNode: getChildIds() => exclude component references

our use cases are to check affected components inside vnode trees (e.g. after an update cycle). for this, we do want to exclude not directly present child components.

