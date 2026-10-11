---
id: 6248
title: 'data.Model: fields => fields_, fieldsMap, updateFieldsMap()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-01-16T20:48:39Z'
updatedAt: '2025-01-16T20:49:06Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6248'
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
closedAt: '2025-01-16T20:49:06Z'
---
# data.Model: fields => fields_, fieldsMap, updateFieldsMap()

Calling ´getField()´ happens too often when creating records, so we need a faster access for it.

`fieldsMap` will store a name path to field object reference for direct access (including nested fields).

