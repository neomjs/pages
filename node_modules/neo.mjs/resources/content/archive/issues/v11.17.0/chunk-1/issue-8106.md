---
id: 8106
title: Fix StrategyPanel main header color mismatch
state: CLOSED
labels:
  - bug
  - design
  - ai
assignees:
  - tobiu
createdAt: '2025-12-13T15:17:20Z'
updatedAt: '2025-12-13T15:22:55Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8106'
author: tobiu
commentsCount: 0
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
closedAt: '2025-12-13T15:22:55Z'
---
# Fix StrategyPanel main header color mismatch

The main header text of the `StrategyPanel` ("Strategy Dashboard") is currently rendering in the default cyan color instead of the intended golden (`--agent-accent-strategy`). The existing SCSS only applies the golden color to the inner KPI card headers (`.agent-kpi-card-panel`). This task will add a style rule to ensure the main header is also styled correctly.

