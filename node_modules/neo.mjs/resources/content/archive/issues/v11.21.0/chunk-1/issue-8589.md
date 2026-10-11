---
id: 8589
title: Add Dates to Portal Blog Tree List
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-13T10:12:31Z'
updatedAt: '2026-01-13T10:16:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8589'
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
closedAt: '2026-01-13T10:16:47Z'
---
# Add Dates to Portal Blog Tree List

We want to display dates in the Portal Blog tree list, similar to how they are shown in the Releases tree list.

**Requirements:**
1.  Update `apps/portal/resources/data/blog.json` to include a `date` field for each blog post.
    *   Dates for most posts can be sourced from `apps/portal/resources/data/medium_blog.json` (matching by title).
    *   "The Context Window Tax" date is **2025-11-23**.
2.  Update `apps/portal/model/Blog.mjs` to:
    *   Add the `date` field.
    *   Update the `treeNodeName` calculation to display the date before the title, using the `.release-date` CSS class style (reusing existing styling if appropriate, or ensuring consistency). The format should be `[Date] Title`.

**Styling Reference:**
*   `apps/portal/model/Release.mjs` (calculate method)
*   `resources/scss/src/apps/portal/shared/content/TreeList.scss` (.release-date)

## Timeline

### @tobiu - 2026-01-13T10:16:21Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented dates for the Portal Blog tree list with corrected styling.
> 
> 1.  **Data Update**: Added `date` fields to `apps/portal/resources/data/blog.json`.
> 2.  **Model Update**: Updated `Portal.model.Blog` to display `[Date] Title`.
> 3.  **Styling**: Added `.blog-date` class to `resources/scss/src/apps/portal/shared/content/TreeList.scss` to ensure proper spacing (margin-right) between the date and the title.
> 
> The changes have been pushed to `origin/dev`.


