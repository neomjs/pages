---
id: 739
title: 'build-threads: create an entry point for the app worker'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2020-06-15T21:51:24Z'
updatedAt: '2020-06-15T21:54:42Z'
githubUrl: 'https://github.com/neomjs/neo/issues/739'
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
closedAt: '2020-06-15T21:54:42Z'
---
# build-threads: create an entry point for the app worker

to make the new SharedCovid work with using the webpack based dist version, we need to adjust the build-threads program to allow separately building the app worker, without any app combinations (entrypoints).

