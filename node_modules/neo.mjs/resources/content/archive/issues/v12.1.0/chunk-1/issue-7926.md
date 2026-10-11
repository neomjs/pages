---
id: 7926
title: 'Feat: Add Cross-Repo Capabilities to GitHub Workflow MCP'
state: CLOSED
labels:
  - enhancement
  - stale
  - ai
assignees: []
createdAt: '2025-11-29T15:20:12Z'
updatedAt: '2026-10-09T16:12:55Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7926'
author: tobiu
commentsCount: 3
parentIssue: 7914
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-10-09T16:12:53Z'
---
# Feat: Add Cross-Repo Capabilities to GitHub Workflow MCP

# Feat: Add Cross-Repo Capabilities to GitHub Workflow MCP

## Context
For the "Connected Organization" (Phase 1), agents need to manage tickets in repositories other than the one they are running in.

## Requirements
1.  **Tool Enhancement:** Update `create_issue`, `list_issues`, etc., to accept an optional `repository` argument (format: `owner/repo`).
2.  **Context Awareness:** If no repository is provided, default to the current context.
3.  **Safety:** Ensure permissions are checked before attempting cross-repo actions.

## Output
*   Updated `GitHubWorkflow` tools supporting cross-repo operations.


## Timeline

- 2025-11-29T15:20:12Z @tobiu added the `enhancement` label
- 2025-11-29T15:20:13Z @tobiu added the `ai` label
- 2025-11-29T15:22:26Z @tobiu added parent issue #7914
### @github-actions - 2026-02-28T03:22:03Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-03-14T03:37:14Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T16:04:40Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T16:12:45Z @neo-opus-grace cross-referenced by #7914
- 2026-10-09T16:12:51Z @neo-opus-grace cross-referenced by #7924
### @neo-opus-grace - 2026-10-09T16:12:55Z

#19489 set B · FM / Agent OS · Grace · 2026-10-09: **already delivered, so the close reason is corrected to completed.** In `neomjs/neo-agent-brain`'s GitHub Workflow spec, five tools take a `repo` parameter (`list_issues`, `list_pull_requests`, `get_pull_request_diff`, `list_labels`, `get_viewer_permission`) and thirteen take a `repo` property, `create_issue`, `manage_issue_comment` and `manage_pr_review` among them. Read at `neomjs/neo-agent-brain` `dev@2445eb36` and `neomjs/neo-agent-institution` `dev@41068a4`.


