---
id: 2657
title: 'form.field.TextArea: afterSetValue()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-07-26T13:49:31Z'
updatedAt: '2021-07-26T13:49:53Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2657'
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
closedAt: '2021-07-26T13:49:53Z'
---
# form.field.TextArea: afterSetValue()

While dynamic value changes for a textarea can use the value property, the initial value needs to get rendered into the innerHTML of the textarea tag

