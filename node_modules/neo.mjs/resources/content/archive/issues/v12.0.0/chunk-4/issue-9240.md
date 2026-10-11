---
id: 9240
title: Refactor DevIndex Guides Structure (Spider Subfolder)
state: CLOSED
labels:
  - documentation
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-02-22T10:57:05Z'
updatedAt: '2026-02-22T10:59:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9240'
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
closedAt: '2026-02-22T10:59:02Z'
---
# Refactor DevIndex Guides Structure (Spider Subfolder)

- Create a `spider` subfolder inside `learn/guides/devindex`.
- Move `SpiderIntro.md`, `SpiderOptIn.md`, and `SpiderOptOut.md` into the new `spider` subfolder, renaming them to `Intro.md`, `OptIn.md`, and `OptOut.md` respectively.
- Update `learn/guides/devindex/tree.json` to use the compact, single-line object formatting with `isLeaf: false` for the `Spider` folder, matching the style of `learn/tree.json`.

## Timeline

### @tobiu - 2026-02-22T10:58:43Z

**Input from Gemini 3 Pro:**

> ✦ I have refactored the DevIndex guides structure by:
> 1. Creating a new `spider` subfolder.
> 2. Moving and renaming the `SpiderIntro.md`, `SpiderOptIn.md`, and `SpiderOptOut.md` files into it.
> 3. Updating `tree.json` to reflect the new structure using the requested compact formatting and `isLeaf: false`.
> 
> Changes have been successfully committed and pushed to the repository. I will now close this issue.


