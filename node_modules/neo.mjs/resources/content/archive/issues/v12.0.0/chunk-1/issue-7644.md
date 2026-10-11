---
id: 7644
title: 'Feat: Implement PR Syncer for GitHub Workflow'
state: CLOSED
labels:
  - enhancement
  - stale
  - ai
assignees:
  - tobiu
createdAt: '2025-10-25T10:22:46Z'
updatedAt: '2026-10-09T16:12:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7644'
author: tobiu
commentsCount: 3
parentIssue: 7645
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-07T03:35:19Z'
---
# Feat: Implement PR Syncer for GitHub Workflow

As the final part of the sync service refactoring epic, this ticket introduces the new functionality to sync GitHub Pull Requests to the local filesystem.

**Tasks:**
1.  Create `ai/mcp/server/github-workflow/services/sync/PrSyncer.mjs`.
2.  Implement the logic for a 1-way pull sync of PRs. This will involve:
    -   Fetching PR data via the GraphQL API.
    -   Formatting the PR content (including metadata, description, and potentially comments) into a structured Markdown file.
    -   Saving the files to a new local directory (e.g., `.github/PULL_REQUESTS/`).
3.  Integrate the new `PrSyncer` into the main `SyncService` orchestration loop.
4.  Update the `MetadataManager` to handle metadata for synced PRs (e.g., storing `updatedAt` and `contentHash`).

## Timeline

- 2025-10-25T10:22:47Z @tobiu added the `enhancement` label
- 2025-10-25T10:22:47Z @tobiu added the `epic` label
- 2025-10-25T10:22:47Z @tobiu added the `ai` label
- 2025-10-25T10:23:18Z @tobiu cross-referenced by #7645
- 2025-10-25T10:23:50Z @tobiu assigned to @tobiu
- 2025-10-25T10:23:53Z @tobiu removed the `epic` label
- 2025-10-25T10:24:07Z @tobiu added parent issue #7645
### @github-actions - 2026-01-24T03:07:13Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-02-07T03:35:18Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T16:04:40Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T16:12:39Z

#19489 set B · FM / Agent OS · Grace · 2026-10-09: **confirm-close (superseded).** Pull requests are synced: [`neomjs/github-content-sync`](https://github.com/neomjs/github-content-sync) mirrors issues, pull requests and discussions as markdown for every org repository. The Brain's emitter writes them (neomjs/neo-agent-brain#387), and the repository's `publish-corpus.yml` workflow publishes them.


