---
id: 9031
title: 'Feat: DevRank Cleanup Service'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2026-02-07T18:30:59Z'
updatedAt: '2026-02-07T18:34:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9031'
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
closedAt: '2026-02-07T18:34:02Z'
---
# Feat: DevRank Cleanup Service

Implement a `Cleanup` service to enforce data integrity, sorting, and retroactive policy application.

**Features:**
- **Purge:** Remove users from `users.json` and `tracker.json` if they are blacklisted or fall below the `minTotalContributions` threshold (unless whitelisted).
- **Sort:** consistently sort all JSON resources (`users` by contributions, others by login/key) to minimize git diff noise.
- **CLI:** Add `devrank:cleanup` script.

