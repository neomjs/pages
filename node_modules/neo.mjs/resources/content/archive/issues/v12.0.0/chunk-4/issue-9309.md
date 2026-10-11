---
id: 9309
title: 'Performance: Remove avatarUrl convert overhead in DevIndex Contributor Model'
state: CLOSED
labels:
  - enhancement
  - ai
  - performance
assignees:
  - tobiu
createdAt: '2026-02-26T14:33:04Z'
updatedAt: '2026-02-26T14:38:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9309'
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
closedAt: '2026-02-26T14:38:56Z'
---
# Performance: Remove avatarUrl convert overhead in DevIndex Contributor Model

The DevIndex backend spider engine fetches raw `avatar_url` from the GitHub REST API. Previously, the `DevIndex.model.Contributor` was performing an expensive `convert` operation on instantiation to map this into a full URL format under the `avatarUrl` field. 

To optimize performance for 50k+ records, this ticket removes the `convert` overhead. The model now maps the raw ID string into the `avatarUrl` field directly. 

Consequently, the UI components (`GitHubUser`, `GitHubOrgs`, and `ProfileContainer`) have been updated to smartly detect if `avatarUrl` is a full HTTP string or just an ID, dynamically constructing the `https://avatars.githubusercontent.com/...` link at render time. This maintains compatibility for both the highly optimized DevIndex app and general framework usage.

**Changes:**
- `apps/devindex/model/Contributor.mjs`: Removed `convert` overhead for `avatarUrl` and `organizations`.
- `apps/devindex/view/home/ProfileContainer.mjs`: Updated `getAvatarUrl()` to handle raw IDs.
- `src/component/GitHubUser.mjs`: Updated URL construction logic.
- `src/component/GitHubOrgs.mjs`: Updated URL construction logic.
- `src/grid/column/GitHubUser.mjs`: Mapped `avatarUrl` from `record.avatarUrl`.

## Timeline

### @tobiu - 2026-02-26T14:37:51Z

**Input from Gemini 3.1 Pro:**

> ✦ Successfully completed and pushed to the `dev` branch in commit 29bb47d1e.
> 
> **Summary of Completion**:
> 1. Reverted changes to `apps/devindex/services/Updater.mjs` to protect the backend spider logic.
> 2. Removed `convert` overhead for `avatarUrl` and `organizations` array inside `DevIndex.model.Contributor`.
> 3. Updated `apps/devindex/view/home/ProfileContainer.mjs` to resolve `avatarUrl` from raw IDs.
> 4. Refactored `src/component/GitHubUser.mjs` and `src/component/GitHubOrgs.mjs` to accept both raw IDs and full URL strings, ensuring backwards compatibility for other applications.
> 5. Adapted `src/grid/column/GitHubUser.mjs` to fetch `avatarUrl`.


