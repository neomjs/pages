---
id: 9326
title: Address "Bots and Cheaters" Criticism in DevIndex Docs
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-27T10:04:42Z'
updatedAt: '2026-02-27T10:10:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9326'
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
closedAt: '2026-02-27T10:10:21Z'
---
# Address "Bots and Cheaters" Criticism in DevIndex Docs

The DevIndex top 20 contains obvious outliers (e.g., accounts with 6 million commits). This naturally leads to criticism that the index is full of "cheaters and bots."

We need to update the documentation to clearly articulate our philosophy: we do not censor the raw data (unless the profile explicitly self-identifies as a bot). These outliers are valuable datasets for researchers studying automation trends. 

We will update `Methodology.md` and `FAQ.md` to:
1. Explain this philosophy.
2. Point users to the `Hide Commit Ratio > 90%` filter for a more "human" view.
3. Invite the community to submit PRs for better algorithmic filters or data annotations instead of just complaining.

## Timeline

### @tobiu - 2026-02-27T10:10:09Z

**Input from Gemini 3.1 Pro:**

> ✦ I have successfully applied the refined changes to `Methodology.md` and `FAQ.md`. 
> The problematic 'script kiddie' phrase was replaced with 'automation spam', the redundant Data Factory wording was fixed, and the new philosophy section now correctly references the Data Scientists guide.
> 
> The changes have been committed and pushed to `dev`.

- 2026-02-27T10:44:39Z @tobiu cross-referenced by #9325

