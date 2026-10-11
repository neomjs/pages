---
id: 9025
title: 'Feat: DevRank Data Enrichment (LinkedIn & Orgs)'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-07T16:34:12Z'
updatedAt: '2026-02-07T16:45:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9025'
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
closedAt: '2026-02-07T16:45:21Z'
---
# Feat: DevRank Data Enrichment (LinkedIn & Orgs)

Enhance the DevRank `Updater` service to capture additional professional signals from the GitHub GraphQL API.

**Scope:**
- **LinkedIn URL:** Parse `user.websiteUrl` and `user.socialAccounts` to extract LinkedIn profile URLs.
- **Organizations:** Fetch and store the user's public organization memberships (`organizations(first: 10)`).
- **Schema Update:** Add `linkedin_url` (string) and `organizations` (array of objects: `{ name, avatarUrl, login }`) to the `data.json` schema.

