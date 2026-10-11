---
id: 9027
title: 'Chore: Add DevRank CLI Scripts to package.json'
state: CLOSED
labels:
  - developer-experience
assignees:
  - tobiu
createdAt: '2026-02-07T18:07:18Z'
updatedAt: '2026-02-07T18:08:44Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9027'
author: tobiu
commentsCount: 0
parentIssue: 8930
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-07T18:08:44Z'
---
# Chore: Add DevRank CLI Scripts to package.json

Add npm scripts to easily run the DevRank backend services from the terminal.

**Scripts:**
- `devrank:spider`: Runs the spider discovery.
- `devrank:update`: Runs the updater with a default limit (e.g., 100).
- `devrank:add`: Helper to add a specific user.

