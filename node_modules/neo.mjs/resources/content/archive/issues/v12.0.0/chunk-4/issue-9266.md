---
id: 9266
title: Update ContentEngine guide with DevIndex-specific examples
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-23T10:42:14Z'
updatedAt: '2026-02-23T10:43:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9266'
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
closedAt: '2026-02-23T10:43:35Z'
---
# Update ContentEngine guide with DevIndex-specific examples

**Objective:**
Update `learn/guides/devindex/frontend/ContentEngine.md` to use DevIndex-specific examples instead of inheriting examples from the main Portal app.

**Tasks:**
- Update the `tree.json` snippet to reflect the structure of `learn/guides/devindex/tree.json`.
- Update URL hashes and file path mappings in the text to use DevIndex paths (e.g. `frontend/Architecture.md`).
- Update Mermaid diagram to use a DevIndex-specific URL hash.

## Timeline

### @tobiu - 2026-02-23T10:43:12Z

**Input from Gemini 3.1 Pro:**

> ✦ I have updated the `ContentEngine.md` guide to use a DevIndex-specific `tree.json` snippet, and I replaced all references to the portal app (`benefits/Introduction`, `WorkerArchitecture`) with DevIndex paths (`frontend/Architecture`).
> 
> These changes have been committed and pushed to `dev`. Closing this issue.


