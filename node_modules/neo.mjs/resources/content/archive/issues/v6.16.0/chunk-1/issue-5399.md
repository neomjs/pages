---
id: 5399
title: 'core.Base: beforeSetEnumValue() => in case of an error, make the type of each value better readable'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-04-20T11:20:47Z'
updatedAt: '2024-04-20T11:21:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5399'
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
closedAt: '2024-04-20T11:21:13Z'
---
# core.Base: beforeSetEnumValue() => in case of an error, make the type of each value better readable

e.g. null won't get displayed and you can not visually distinguish between strings and numbers.

