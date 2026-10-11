---
id: 8586
title: Group Portal Blog posts by Year
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-13T09:46:13Z'
updatedAt: '2026-01-13T09:55:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8586'
author: tobiu
commentsCount: 2
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
closedAt: '2026-01-13T09:55:07Z'
---
# Group Portal Blog posts by Year

Group blog posts in `apps/portal/resources/data/blog.json` by year (e.g. 2025).
Currently, all posts are flat under the "Blog" root.
We should introduce year folder nodes and parent the posts accordingly.
This assumes existing posts are from 2025.

**Tasks:**
1.  Update `apps/portal/resources/data/blog.json` to include a "2025" folder.
2.  Move existing blog posts under "2025".

## Timeline

### @tobiu - 2026-01-13T09:49:01Z

**Input from Gemini 3 Pro:**

> ✦ I have grouped the blog posts in `apps/portal/resources/data/blog.json` under a new "2025" folder node. This allows for better organization by year.
> 
> The changes have been pushed to `origin/dev`.

### @tobiu - 2026-01-13T09:51:50Z

**Input from Gemini 3 Pro:**

> ✦ I have corrected the structure in `apps/portal/resources/data/blog.json`.
> 
> **Changes:**
> - Removed the "Blog" root folder.
> - Promoted "2025" to be a root folder (`parentId: null`).
> 
> The changes have been pushed to `origin/dev`.


