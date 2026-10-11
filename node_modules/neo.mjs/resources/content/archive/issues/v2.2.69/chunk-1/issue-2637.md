---
id: 2637
title: 'core.Base: move the id_ config from component.Base into the core'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-07-21T11:53:25Z'
updatedAt: '2021-07-21T12:05:05Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2637'
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
closedAt: '2021-07-21T12:05:05Z'
---
# core.Base: move the id_ config from component.Base into the core

this includes a new `afterSetId()` method inside `core.Base`, which can react to id changes => removing the oldValue from the instance manager before adding the new entry.

