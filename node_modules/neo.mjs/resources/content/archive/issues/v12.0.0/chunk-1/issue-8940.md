---
id: 8940
title: 'Feat: Activity Sparkline Column'
state: CLOSED
labels:
  - enhancement
  - design
assignees:
  - tobiu
createdAt: '2026-02-01T16:44:23Z'
updatedAt: '2026-02-02T00:17:22Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8940'
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
closedAt: '2026-02-02T00:17:22Z'
---
# Feat: Activity Sparkline Column

This task focuses on implementing a visual Sparkline to show activity trends over the last 15 years.

### Requirements
1.  **Component:** Create a custom `Neo.grid.column.Component` implementation that uses HTML5 Canvas (or OffscreenCanvas).
2.  **Rendering:** Draw a line chart representing the yearly contribution data (`y2010` - `y2025`).
3.  **Grid Integration:** Add this component column to the grid.

### Acceptance Criteria
- A sparkline chart appears in each row, visualizing the user's activity history.
- Scrolling performance remains high (component recycling).


## Timeline

### @tobiu - 2026-02-02T00:16:44Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the Activity Sparkline column.
> - **SparklineComponent:** Created a wrapper extending `Neo.component.Canvas` to handle the offscreen canvas.
> - **Sparkline Worker:** Implemented `apps/devrank/canvas/Sparkline.mjs` to draw the line chart using HTML5 Canvas API in the `canvas` worker.
> - **Grid Integration:** Added the column to `GridContainer` using `component` config to pass year data (2010-2025).
> - **Configuration:** Enabled `useCanvasWorker: true` in `neo-config.json` and set up the `canvas.mjs` entry point.
> 
> The sparkline visualizes the 15-year contribution trend for each user.

- 2026-02-02T23:03:33Z @tobiu cross-referenced by #8930

