---
id: 4419
title: 'form.field.Number: we need a smarter stepSize validation for stepSizes < 1'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2023-05-12T11:10:58Z'
updatedAt: '2023-05-12T11:16:57Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4419'
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
closedAt: '2023-05-12T11:16:57Z'
---
# form.field.Number: we need a smarter stepSize validation for stepSizes < 1

this one is a bit tricky, since the field & stepSize values can both be float values, in which case rounding errors can occur.

