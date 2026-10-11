---
id: 6863
title: 'core.Base: isReady, readyPromise class fields, and support for an optional initAsync() method'
state: CLOSED
labels:
  - enhancement
assignees: []
createdAt: '2025-06-24T18:18:15Z'
updatedAt: '2025-06-24T18:58:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6863'
author: tobiu
commentsCount: 1
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
closedAt: '2025-06-24T18:58:35Z'
---
# core.Base: isReady, readyPromise class fields, and support for an optional initAsync() method

* Many classes do require optional or conditional dynamic imports.
* We need a logical foundation for not overriding `construct()` manually each time.

## Timeline

### @tobiu - 2025-06-24T18:57:31Z

reopening, because we can do better: using `Promise.resolve().then()` REMOVES the need to put `initRemote()` into the macro task queue.


