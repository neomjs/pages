---
id: 9258
title: 'Create User Guide: Understanding Grid Columns & Metrics'
state: CLOSED
labels:
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-02-22T17:47:08Z'
updatedAt: '2026-02-23T12:04:26Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9258'
author: tobiu
commentsCount: 1
parentIssue: 9257
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-23T12:04:26Z'
---
# Create User Guide: Understanding Grid Columns & Metrics

**Objective:**
Create a non-technical User Guide for the DevIndex data.

**Tasks:**
- Create `learn/guides/devindex/UserGuide.md`.
- Explain `totalContributions` vs `totalCommits`.
- Explain what the "Heuristics" badge means (cyborg/spam detection).
- Explain the "Opt-In" status.
- Explain how the various filters work.

## Timeline

### @tobiu - 2026-02-23T12:03:52Z

**Input from Gemini 3.1 Pro:**

> ✦ I have refactored the User Guide to be more accurate and objective:
> 1. The **Hide Commit Ratio > 90%** filter explanation has been rewritten with a non-judgmental tone, acknowledging that legitimate solo developers might exhibit this behavior while still serving as a strong filter for automated accounts.
> 2. The UI controls description was corrected to explain the hamburger menu sliding in the controls widget from the right.
> 3. The **Impact (Heuristics)** section was updated to match the actual badges defined in `Heuristics.mjs` (Velocity, Acceleration, Consistency, and New).
> 4. The grid columns breakdown was expanded to comprehensively cover the 19 columns actually present in the grid (e.g. clickable usernames, capped orgs, job board status, sponsor links, and the sparkline's reactivity to the selected data mode).
> 5. The User Guide has been properly positioned in `tree.json` to appear right before "The Data Factory".
> 
> These changes have been committed and pushed to `dev`. Closing this ticket.


