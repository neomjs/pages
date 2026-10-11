---
id: 6889
title: 'Portal.view.learn.ContentComponent: update the code regexes to support blank chars before the end'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-06-28T23:05:35Z'
updatedAt: '2025-06-28T23:05:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6889'
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
closedAt: '2025-06-28T23:05:56Z'
---
# Portal.view.learn.ContentComponent: update the code regexes to support blank chars before the end

* rationale: in case we put code blocks into lists, the 3 backticks do not necessarily start right after a new line => \n

