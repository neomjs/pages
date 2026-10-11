---
id: 5252
title: 'component.wrapper.MonacoEditor: buffer layoutEditor() with 50ms'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-02-20T07:58:48Z'
updatedAt: '2024-02-20T08:02:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5252'
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
closedAt: '2024-02-20T08:02:54Z'
---
# component.wrapper.MonacoEditor: buffer layoutEditor() with 50ms

calls to the layout editor are very expensive. we need to ensure these don't happen too often.

## Timeline

- 2024-02-20T07:58:48Z @tobiu added the `enhancement` label
- 2024-02-20T07:58:48Z @tobiu assigned to @tobiu
- 2024-02-20T07:59:09Z @tobiu referenced in commit `2b03ffb` - "component.wrapper.MonacoEditor: buffer layoutEditor() with 50ms #5252"
- 2024-02-20T08:02:54Z @tobiu closed this issue

