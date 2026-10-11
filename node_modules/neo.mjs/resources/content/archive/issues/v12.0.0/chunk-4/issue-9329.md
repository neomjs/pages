---
id: 9329
title: Clarify "Commits %" logic in DevIndex Guides
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-27T10:48:34Z'
updatedAt: '2026-02-27T10:49:24Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9329'
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
closedAt: '2026-02-27T10:49:24Z'
---
# Clarify "Commits %" logic in DevIndex Guides

We recently updated the underlying DevIndex logic to ensure the `commitRatio` correctly ignores private contributions, preventing users with high private activity from having their commit percentage artificially tanked.

We need to update the DevIndex documentation (`UserGuide.md`, `personas/TalentScouts.md`, and `Introduction.md`) to clearly explain that "Commits %" now represents the ratio of **public** commits to total **public** contributions, rather than all contributions.

## Timeline

### @tobiu - 2026-02-27T10:49:10Z

**Input from Gemini 3.1 Pro:**

> ✦ I have updated the `UserGuide.md`, `TalentScouts.md`, and `Introduction.md` to explicitly clarify that the "Commits %" calculation ignores private contributions to prevent skewing the ratio. The changes have been committed and pushed to `dev`.


