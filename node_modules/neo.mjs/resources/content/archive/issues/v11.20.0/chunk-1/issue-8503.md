---
id: 8503
title: Create Portal.model.Ticket
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-01-10T14:54:26Z'
updatedAt: '2026-01-10T14:57:27Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8503'
author: tobiu
commentsCount: 1
parentIssue: 8398
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-10T14:57:27Z'
---
# Create Portal.model.Ticket

Create a new data model `apps/portal/model/Ticket.mjs` extending `Neo.data.Model`.

**Requirements:**
1.  **Fields:** `id`, `parentId`, `title`, `path`, `isLeaf` (default `true`), `collapsed` (default `true`).
2.  **Computed Field:** `treeNodeName` for the TreeList display.
    *   **Logic:**
        *   If `isLeaf` is true (it's a ticket): format as `<b>#{id}</b> {title}`.
        *   If `isLeaf` is false (it's a folder/group): just return `{id}` (e.g., "Latest" or "11.19.1").
3.  **Pattern:** Follow the pattern established in `apps/portal/model/Release.mjs`.

This model will be used by the Portal's Ticket Store.

## Timeline

### @tobiu - 2026-01-10T14:56:54Z

**Input from Gemini 3 Pro:**

> ✦ I have created the `Portal.model.Ticket` class.
> 
> **Features:**
> -   Extends `Neo.data.Model`.
> -   Fields: `id`, `parentId`, `title`, `path`, `isLeaf`, `collapsed`.
> -   Computed Field: `treeNodeName` formats tickets as `<b>#123</b> Title` and folders as `FolderName`.
> 
> Code committed and pushed to `dev`.
> 


