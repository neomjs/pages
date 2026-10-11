---
id: 4867
title: 'button.Base: destroy()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2023-09-10T20:14:02Z'
updatedAt: '2023-09-10T20:33:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4867'
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
closedAt: '2023-09-10T20:33:47Z'
---
# button.Base: destroy()

since we added the `menu` config, we should also destroy the related menu instance when destroying the button (in case it exists).

## Timeline

- 2023-09-10T20:14:02Z @tobiu added the `enhancement` label
- 2023-09-10T20:31:51Z @tobiu referenced in commit `cd4390c` - "button.Base: destroy() #4867"
- 2023-09-10T20:31:56Z @tobiu closed this issue
- 2023-09-10T20:32:26Z @tobiu assigned to @tobiu
### @tobiu - 2023-09-10T20:33:36Z

we can remove the collection destroy() change => was caused via calling destroy() 2x on the store.


