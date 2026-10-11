---
id: 9029
title: 'Feat: DevRank Relevance Threshold'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2026-02-07T18:17:13Z'
updatedAt: '2026-02-07T18:18:46Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9029'
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
closedAt: '2026-02-07T18:18:46Z'
---
# Feat: DevRank Relevance Threshold

Implement a minimum contribution threshold to ensure the quality of the DevRank index.

**Changes:**
- `Config.mjs`: Add `minTotalContributions` (default: 1000).
- `Updater.mjs`: After fetching user data, check `total_contributions`. If below threshold, discard the record (do not add to `data.json`).
- **Optimization:** This ensures `data.json` remains a high-signal list of impactful developers.

