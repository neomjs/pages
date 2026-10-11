---
id: 5957
title: 'container.Base: afterSetLayout() => always destroy an old layout'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-09-21T20:18:56Z'
updatedAt: '2024-09-21T20:24:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5957'
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
closedAt: '2024-09-21T20:24:31Z'
---
# container.Base: afterSetLayout() => always destroy an old layout

currently, the `destroy()` call happens inside the `me.rendered` check, which does not cover all edge-cases.

## Timeline

### @tobiu - 2024-09-21T20:23:39Z

ha, forgot one edge case: an old layout could still be a config object, so at this point it would not have a `destroy()` method (and we don't need to adjust things).


