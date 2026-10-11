---
id: 2206
title: 'Docs.view.classdetails.SourceViewComponent: (re)apply the source code formatting on mount'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-05-29T13:32:05Z'
updatedAt: '2021-05-29T14:32:05Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2206'
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
closedAt: '2021-05-29T14:32:05Z'
---
# Docs.view.classdetails.SourceViewComponent: (re)apply the source code formatting on mount

since the docs app is now removing non active cards (tabs) from the dom, we need to adjust the component logic to re-apply the formatting. similar to the charts & maps component wrappers.

