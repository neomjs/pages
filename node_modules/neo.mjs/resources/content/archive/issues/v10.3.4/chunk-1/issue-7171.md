---
id: 7171
title: 'webpack.config.appworker: sharpen the Docs App entry point'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-08-09T00:45:28Z'
updatedAt: '2025-08-09T00:45:58Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7171'
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
closedAt: '2025-08-09T00:45:58Z'
---
# webpack.config.appworker: sharpen the Docs App entry point

* The current logic checks if the `docs` folder exists
* The app might not be there, but `generate-docs-json` created `docs/output`
* A smarter check is `docs/app`

