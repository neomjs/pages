---
id: 6537
title: 'core.Observable: addListener() => add support for order when passing a name object'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-03-03T20:51:22Z'
updatedAt: '2025-03-03T20:52:18Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6537'
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
closedAt: '2025-03-03T20:52:18Z'
---
# core.Observable: addListener() => add support for order when passing a name object

use case:

```
        me.parent.store.on({
            recordChange: me.onRecordChange,
            scope       : me,
            order       : 'before'
        })
```

