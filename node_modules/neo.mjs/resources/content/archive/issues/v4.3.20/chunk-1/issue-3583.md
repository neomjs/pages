---
id: 3583
title: 'buildScripts/buildThemes: smarter support for custom scss file imports'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2022-12-08T09:16:27Z'
updatedAt: '2022-12-08T09:17:34Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3583'
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
closedAt: '2022-12-08T09:17:34Z'
---
# buildScripts/buildThemes: smarter support for custom scss file imports

while the theme watcher handles this pretty well now, the build script itself can get confused when reaching from the neo node module into a workspace (relative paths).

