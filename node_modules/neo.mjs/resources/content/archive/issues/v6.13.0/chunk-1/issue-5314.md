---
id: 5314
title: 'Portal.view.learn.PageSectionsPanel: selecting an item should suspend the intersection callbacks'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-03-10T22:44:36Z'
updatedAt: '2024-03-11T00:22:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5314'
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
closedAt: '2024-03-11T00:22:13Z'
---
# Portal.view.learn.PageSectionsPanel: selecting an item should suspend the intersection callbacks

we are navigating with an animation. while this one is running, we do not want to have intersections change the current selection on the fly.

## Timeline

- 2024-03-10T22:44:36Z @tobiu added the `enhancement` label
- 2024-03-10T22:44:36Z @tobiu assigned to @tobiu
- 2024-03-11T00:22:10Z @tobiu referenced in commit `2d73919` - "Portal.view.learn.PageSectionsPanel: selecting an item should suspend the intersection callbacks #5314"
- 2024-03-11T00:22:13Z @tobiu closed this issue

