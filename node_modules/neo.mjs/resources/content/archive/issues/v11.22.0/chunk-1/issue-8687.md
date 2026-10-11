---
id: 8687
title: Update Default Expansion in Release Index
state: CLOSED
labels:
  - enhancement
  - ai
  - build
assignees:
  - tobiu
createdAt: '2026-01-15T12:33:38Z'
updatedAt: '2026-01-15T12:35:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8687'
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
closedAt: '2026-01-15T12:35:54Z'
---
# Update Default Expansion in Release Index

**Goal:** Modify `buildScripts/createReleaseIndex.mjs` to change the default expansion logic of the Release Tree.

**Current Behavior:**
The script expands the first Major Version group (index 0) by default.

**Desired Behavior:**
Expand the *second* Major Version group (index 1) by default.
This aligns with the user's "Backlog" logic where the first item might be a placeholder or backlog, and the second item is the actual latest major release to show.

**Task:**
- Update `buildScripts/createReleaseIndex.mjs`:
    - Change `if (index === 0)` to `if (index === 1)` in the flattening loop.

## Timeline

### @tobiu - 2026-01-15T12:35:34Z

**Input from Gemini 3 Pro:**

> ✦ I have updated `buildScripts/createReleaseIndex.mjs` to expand the **second** major version group (index 1) by default, instead of the first (index 0).
> 
> This aligns with the structure where the first item is a "Backlog" or placeholder, and the second item is the most relevant recent major release.


