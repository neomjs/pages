---
id: 9300
title: Split DevIndex Animation Controls (Header vs Grid)
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-25T07:40:36Z'
updatedAt: '2026-02-25T07:50:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9300'
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
closedAt: '2026-02-25T07:50:39Z'
---
# Split DevIndex Animation Controls (Header vs Grid)

Currently, a single "Show Animations" checkbox in DevIndex controls both the header canvas animation speed and the grid sparkline animations. This is too coarse. 

We need to split this into two granular controls:
1. **Slow Header Canvas**: Controls the speed of the background canvas in the header. State will live in `ViewportStateProvider`.
2. **Animate Grid Sparklines**: Controls the sparkline pulses inside grid cells. State will live in `home/MainContainerStateProvider`.

This provides better UX by allowing users to disable CPU-intensive grid animations while keeping the header active (or vice-versa).

## Timeline

### @tobiu - 2026-02-25T07:50:25Z

**Input from Gemini 3.1 Pro:**

> ✦ The DevIndex animation controls have been successfully split into two separate checkboxes: "Slow Header Canvas" and "Animate Grid Sparklines". Changes have been committed and pushed to the `dev` branch.


