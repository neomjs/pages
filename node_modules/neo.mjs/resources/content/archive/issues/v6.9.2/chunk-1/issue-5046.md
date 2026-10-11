---
id: 5046
title: 'form.field.Select: filterOperator & useFilter need to be processed through the config symbol'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2023-10-19T17:56:06Z'
updatedAt: '2023-10-19T17:57:25Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5046'
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
closedAt: '2023-10-19T17:57:25Z'
---
# form.field.Select: filterOperator & useFilter need to be processed through the config symbol

since they get used inside `afterSetStore()` => otherwise we can not easily overwrite them or even change them on instance level.

## Timeline

- 2023-10-19T17:56:06Z @tobiu added the `enhancement` label

