---
id: 7967
title: 'examples.component.multiWindowHelix.ViewportController: throws when clicking on the detach window button'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2025-12-01T15:24:45Z'
updatedAt: '2025-12-01T15:28:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7967'
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
closedAt: '2025-12-01T15:28:31Z'
---
# examples.component.multiWindowHelix.ViewportController: throws when clicking on the detach window button

```bash
ViewportController.mjs:30 Uncaught (in promise) TypeError: Cannot destructure property 'basePath' of 'windowConfigs[firstWindowId]' as it is undefined.
    at ViewportController.createPopupWindow (ViewportController.mjs:30:14)
    at ViewportController.onMaximiseButtonClick (ViewportController.mjs:125:20)
    at Button.onClick (Base.mjs:572:21)
    at DomEvent.mjs:146:58
    at Array.every (<anonymous>)
    at DomEvent.fire (DomEvent.mjs:114:31)
    at App.onDomEvent (App.mjs:407:25)
    at App.onMessage (Base.mjs:189:46)
```

