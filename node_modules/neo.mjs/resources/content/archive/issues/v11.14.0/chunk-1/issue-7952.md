---
id: 7952
title: Fix ToolService.mjs Git Case Sensitivity Issue
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2025-11-30T15:44:24Z'
updatedAt: '2025-11-30T15:50:55Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7952'
author: tobiu
commentsCount: 0
parentIssue: 7931
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2025-11-30T15:50:55Z'
---
# Fix ToolService.mjs Git Case Sensitivity Issue

## Context
The git history for `ai/mcp/ToolService.mjs` is inconsistent due to a case-only rename (`toolService.mjs` -> `ToolService.mjs`) that git handles poorly on case-insensitive file systems (macOS).

## Goal
Fix the git file tracking for `ToolService.mjs` by performing a brute-force rename cycle.

## Steps
1.  Rename `ai/mcp/ToolService.mjs` to `ai/mcp/ToolServiceTemp.mjs`.
2.  Commit the change.
3.  Rename `ai/mcp/ToolServiceTemp.mjs` to `ai/mcp/ToolService.mjs`.
4.  Commit the change.

## Deliverables
-   Correctly capitalized `ToolService.mjs` in git history.


