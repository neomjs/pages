---
id: 5520
title: 'vdom.Helper: createDeltas() => remove VNodeUtil.findChildVnodeById()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-07-03T19:15:46Z'
updatedAt: '2024-07-03T19:27:09Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5520'
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
closedAt: '2024-07-03T19:27:08Z'
---
# vdom.Helper: createDeltas() => remove VNodeUtil.findChildVnodeById()

now that we do have the flat maps in place, we can also replace this one (performance boost).

## Timeline

### @tobiu - 2024-07-03T19:27:08Z

removed 2/4 occurrences. the other ones did not query the full tree, but a sub-tree.

- 2024-07-03T20:24:47Z @tobiu cross-referenced by #5521

