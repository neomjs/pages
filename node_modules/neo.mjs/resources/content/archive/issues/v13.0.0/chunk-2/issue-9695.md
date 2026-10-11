---
id: 9695
title: Implement Offline Synchronization for Ideation Sandbox (Discussions)
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-04T15:14:44Z'
updatedAt: '2026-04-04T15:16:12Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9695'
author: tobiu
commentsCount: 1
parentIssue: 9693
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-04T15:16:12Z'
---
# Implement Offline Synchronization for Ideation Sandbox (Discussions)

The `github-workflow` MCP server currently synchronizes Issues and Releases to offline local Markdown files (`resources/content/`). 

To fully finalize the **Ideation Sandbox** infrastructure, we must also implement a 1-way synchronization layer for GitHub Discussions. This will allow our AI agents to pull exploratory architectural threads down to the local file system to process offline without exhausting the GraphQL API limits.

**Acceptance Criteria:**
1. Extend `discussionQueries.mjs` to fetch paginated `discussions` from the repository (including `comments` and nested `replies`).
2. Create `DiscussionSyncer.mjs` matching the design pattern established by `IssueSyncer` and `ReleaseSyncer` (including cache deduplication via `contentHash`).
3. Wire `DiscussionSyncer` into the primary orchestration pipeline inside `SyncService.runFullSync()`.
4. Ignore the new generated `.md` files from the npm package via `.npmignore`.

## Timeline

### @tobiu - 2026-04-04T15:16:11Z

**Antigravity Definition of Done (DoD) Completed**

- Implementation successfully pushed to remote `dev`.
- Ignored `resources/content/` comprehensively.
- Wired locally executed `DiscussionSyncer.mjs` module.


