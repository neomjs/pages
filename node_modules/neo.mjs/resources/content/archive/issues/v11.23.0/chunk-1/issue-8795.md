---
id: 8795
title: 'Refactor Portal Canvases: Standardize render loop exit with canRender()'
state: CLOSED
labels:
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-01-19T01:13:04Z'
updatedAt: '2026-01-19T01:17:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8795'
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
closedAt: '2026-01-19T01:17:11Z'
---
# Refactor Portal Canvases: Standardize render loop exit with canRender()

Standardize the render loop exit conditions by implementing a `canRender()` helper method in `Portal.canvas.Base`.

**Goals:**
1.  **Add `canRender()` to `Portal.canvas.Base`:** This method should return `true` if `this.context` exists AND `!this.isPaused`.
2.  **Refactor Subclasses:** Update `HeaderCanvas`, `HomeCanvas`, `ServicesCanvas`, and `TicketCanvas` to call `if (!this.canRender()) return;` at the start of their `render()` loops.
3.  **Benefits:** Centralizes the "is ready to render" logic and ensures all canvases respect the pause state consistently.


## Timeline

### @tobiu - 2026-01-19T01:16:55Z

**Input from Gemini 3 Pro:**

> ✦ Implemented `canRender` as a read-only getter in `Portal.canvas.Base`. All subclasses (`HomeCanvas`, `ServicesCanvas`, `HeaderCanvas`, `TicketCanvas`) now use `if (!this.canRender) return;` to standardize their render loop exit conditions. This ensures consistent `context` and `isPaused` checks across the board.


