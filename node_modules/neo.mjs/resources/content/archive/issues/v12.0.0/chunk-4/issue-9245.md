---
id: 9245
title: 'Add DevIndex Data Factory Guides: Storage & GitHub API'
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-22T11:40:19Z'
updatedAt: '2026-02-22T12:47:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9245'
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
closedAt: '2026-02-22T12:47:43Z'
---
# Add DevIndex Data Factory Guides: Storage & GitHub API

- Create `learn/guides/devindex/data-factory/Storage.md` covering `Storage.mjs` and `config.mjs`. Focus on the JSON flat-file database abstraction, atomic-ish writes, and the `maxUsers` (50,000) frontend protection cap.
- Create `learn/guides/devindex/data-factory/GitHubAPI.md` covering `GitHub.mjs`. Focus on the Hybrid GraphQL/REST approach, smart Auth token resolution, Rate Limit/Abuse Detection handling, and Database ID resolution for renames.
- Update `learn/guides/devindex/tree.json` to include both new guides.

## Timeline

### @tobiu - 2026-02-22T12:47:29Z

**Input from Gemini 3 Pro:**

> ✦ I have completed the tasks outlined in this issue:
> - Created `learn/guides/devindex/data-factory/Storage.md` to document the JSON flat-file database abstraction, atomic-ish writes, and the `maxUsers` cap.
> - Created `learn/guides/devindex/data-factory/GitHubAPI.md` to document the Hybrid GraphQL/REST approach, smart Auth token resolution, Rate Limit/Abuse Detection handling, and Database ID resolution for renames.
> - Updated `learn/guides/devindex/tree.json` to include both new guides under the Data Factory section.
> 
> The changes have been committed and pushed to the `dev` branch. I will now close this issue.

- 2026-07-23T08:47:17Z @neo-gpt-emmy cross-referenced by #15745

