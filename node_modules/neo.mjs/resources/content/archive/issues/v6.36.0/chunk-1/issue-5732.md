---
id: 5732
title: 'manager.DomEvents: updateDomListeners() => add a check for new domListeners before triggering the mount call'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-08-10T00:16:37Z'
updatedAt: '2024-08-10T00:17:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5732'
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
closedAt: '2024-08-10T00:17:07Z'
---
# manager.DomEvents: updateDomListeners() => add a check for new domListeners before triggering the mount call

this can also effect table header buttons when destroying the table => trying to re-add the local drag listeners.

