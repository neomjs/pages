---
id: 6251
title: 'data.Model: afterSetFields() => take ownership of creating & updating the record class'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-01-18T13:19:46Z'
updatedAt: '2025-01-18T13:32:50Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6251'
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
closedAt: '2025-01-18T13:32:50Z'
---
# data.Model: afterSetFields() => take ownership of creating & updating the record class

from a separation of concerns perspective: a store should be in charge of creating records, the model should be in charge of creating the record class.

* we can remove the observable mixin again
* directly connect to the `data.RecordFactory` instead

