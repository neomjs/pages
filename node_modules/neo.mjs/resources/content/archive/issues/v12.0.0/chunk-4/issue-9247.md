---
id: 9247
title: Fix Opt-In evaluation relying on ticket titles
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-02-22T12:40:33Z'
updatedAt: '2026-02-22T12:41:25Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9247'
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
closedAt: '2026-02-22T12:41:25Z'
---
# Fix Opt-In evaluation relying on ticket titles

The `OptIn.mjs` service and the corresponding documentation in `OptIn.md` incorrectly assumed that issue titles are static (`Opt-In Request:` and `Opt-In Nomination:`), when in fact users or GitHub might change the titles of templates.

To fix this, the evaluation logic is being updated to:
- Stop querying the `title` field entirely.
- Differentiate between a self opt-in request and a nomination based solely on whether the markdown block `### GitHub Usernames` is present within the issue body.

This resolves the logic hole and ensures robust processing regardless of user title edits.

## Timeline

### @tobiu - 2026-02-22T12:41:05Z

**Input from Gemini 3 Pro:**

> ✦ I have removed the ticket title checking from the `OptIn.mjs` service and updated the documentation in `OptIn.md` accordingly. 
> 
> The evaluation logic now correctly differentiates templates based on whether the issue body contains the `### GitHub Usernames` markdown block. This ensures the process is robust even if users modify the issue titles.
> 
> The changes have been pushed to the repository. I will close this issue.


