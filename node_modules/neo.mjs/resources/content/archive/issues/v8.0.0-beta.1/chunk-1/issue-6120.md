---
id: 6120
title: 'component.Base: hide() & show()'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2024-11-19T00:51:11Z'
updatedAt: '2024-11-19T00:52:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6120'
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
closedAt: '2024-11-19T00:52:03Z'
---
# component.Base: hide() & show()

I just noticed that inside v8, switching tabs inside the `LivePreview` no longer hides & shows the "open in new window" button at the top right corner.

the reason is the following logic:
```
me.vdom.removeDom = true;
me.parent.update()
```

while a parent update is reasonable, it now needs to increase the depth by one, since the `removeDom` flag of the child is no longer present inside the scoped vdom otherwise:
```
me.vdom.removeDom = true;
me.parent.updateDepth = 2;
me.parent.update()
```

## Timeline

- 2024-11-19T00:51:11Z @tobiu added the `bug` label

