---
id: 9235
title: 'DevIndex: Adjust Meritocracy Filter to exclude allowlisted users from the maxUsers cap'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-21T22:35:42Z'
updatedAt: '2026-02-21T22:43:58Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9235'
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
closedAt: '2026-02-21T22:43:58Z'
---
# DevIndex: Adjust Meritocracy Filter to exclude allowlisted users from the maxUsers cap

### Description
Currently, the `updateUsers` method in `Storage.mjs` strictly slices the `users.jsonl` array at `config.github.maxUsers`. This creates an unfair scenario where manually allowlisted users (e.g., conference speakers who haven't met the organic threshold) consume slots that belong to organic, high-contributing developers. 

### Requirements
1. Update `apps/devindex/services/Storage.mjs`.
2. Inside `updateUsers()`, fetch the current allowlist size.
3. Calculate the `effectiveMax` as `config.github.maxUsers + allowlist.size`.
4. Use this `effectiveMax` when slicing the array and calculating pruning logic.
5. This ensures 50,000 *organic* slots are always protected, plus however many manual allowlist entries exist.

## Timeline

### @tobiu - 2026-02-21T22:43:38Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the fix for the Meritocracy Filter.
> 
> ### Changes Made:
> - **`apps/devindex/services/Storage.mjs`**: Updated the `updateUsers` method to calculate an `effectiveMax`.
> - **Logic**: The script now dynamically fetches the size of the `allowlist` and adds it to `config.github.maxUsers`. The array is sliced at this new `effectiveMax` boundary.
> - **Knowledge Base Enhancement**: Added a detailed, intent-driven comment directly into the source code explaining exactly *why* this calculation exists (to protect organic slots from being consumed by manual overrides).
> 
> This ensures the platform remains fair and meritocratic, even when manual exceptions are granted! Changes have been pushed to `dev`. Closing the ticket.


