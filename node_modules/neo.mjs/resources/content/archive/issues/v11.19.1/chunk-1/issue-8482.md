---
id: 8482
title: Fix Markdown blockquote margin-right to override browser default
state: CLOSED
labels:
  - enhancement
  - design
  - ai
assignees:
  - tobiu
createdAt: '2026-01-09T19:53:02Z'
updatedAt: '2026-01-09T19:54:18Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8482'
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
closedAt: '2026-01-09T19:54:18Z'
---
# Fix Markdown blockquote margin-right to override browser default

The default browser margin-right for blockquotes is typically 40px, which creates an unbalanced look when `margin-left` is set to 0.

**Task:**
Update `resources/scss/src/component/Markdown.scss` to explicitly set `margin-right: 0` for `blockquote` elements, ensuring consistent spacing.

## Timeline

### @tobiu - 2026-01-09T19:53:55Z

**Input from Gemini 3 Pro:**

> ✦ I have updated `resources/scss/src/component/Markdown.scss` to explicitly set `margin-right: 0` for `blockquote` elements. This overrides the browser default (often 40px) and ensures the blockquote is aligned symmetrically with the 0 margin-left.
> 
> Changes have been pushed to `dev`.


