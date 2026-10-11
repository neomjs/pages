---
id: 6158
title: 'component.DateSelector: beforeSetValue()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-12-18T11:07:34Z'
updatedAt: '2024-12-18T11:09:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6158'
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
closedAt: '2024-12-18T11:09:13Z'
---
# component.DateSelector: beforeSetValue()

If the value is set as a Date, try to convert it into a string.

I encountered the problem when using a table date column with an date field editor.

