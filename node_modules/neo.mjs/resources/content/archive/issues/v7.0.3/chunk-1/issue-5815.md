---
id: 5815
title: 'Portal App: overwrites => remove the form field changes'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-08-21T19:19:31Z'
updatedAt: '2024-08-21T19:20:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5815'
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
closedAt: '2024-08-21T19:20:07Z'
---
# Portal App: overwrites => remove the form field changes

* we did remove the default delayable for field events, so the overwrite pointing to the same nullified value is no longer needed.

