---
id: 9041
title: 'Enhancement: Add Spider Summary Logs'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-07T21:15:47Z'
updatedAt: '2026-02-07T21:17:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9041'
author: tobiu
commentsCount: 1
parentIssue: 8930
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-07T21:17:47Z'
---
# Enhancement: Add Spider Summary Logs

Add a final summary log to the Spider execution to clearly indicate the results of the run.

**Current Behavior:**
If no new users are found (e.g., because all repositories were already visited), the Spider exits silently after processing pages, leaving the user unsure if it worked or just found nothing.

**Goal:**
Print a summary at the end of the run:
- Total new candidates discovered.
- Total repositories scanned vs skipped (optional but helpful).

**Changes:**
- Update `apps/devrank/services/Spider.mjs` to track cumulative stats in the `state` object.
- Output a summary table or message at the end of `run()`.

## Timeline

### @tobiu - 2026-02-07T21:17:34Z

**Input from Gemini 3 Pro:**

> ✦ Added summary logs to the Spider execution.
> 
> ### Changes
> 1.  **State Tracking:** Added `totalFound` to the spider state.
> 2.  **Summary Log:** The `run()` method now outputs a final summary block indicating the total new candidates discovered, even if the run was silent/empty.
> 
> ### Example Output
> ```text
> --------------------------------------------------
> [Spider] Run Complete.
> [Spider] Total New Candidates Discovered: 124
> --------------------------------------------------
> ```
> 
> Code committed to `dev` branch.


