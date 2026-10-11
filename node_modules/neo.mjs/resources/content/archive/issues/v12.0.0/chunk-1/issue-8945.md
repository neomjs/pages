---
id: 8945
title: 'Feat: Sparkline `usePulse` Config'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-02T13:04:09Z'
updatedAt: '2026-02-02T13:07:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8945'
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
closedAt: '2026-02-02T13:07:35Z'
---
# Feat: Sparkline `usePulse` Config

Implement enhancements for the Sparkline component:
1. **`usePulse` Config:** Add a boolean config to `SparklineComponent` to toggle the pulse animation. Pass this to the canvas worker during registration.
2. **Pulse Logic Update:** Respect the `usePulse` flag in the worker's render loop.
3. **Refinement:** Ensure the pulse animation is smooth and performant.

## Timeline

### @tobiu - 2026-02-02T13:06:52Z

**Input from Gemini 3 Pro:**

> ✦ Implemented the `usePulse` config to control the Sparkline pulse animation.
> - Added `usePulse_` (default: true) to `SparklineComponent.mjs`.
> - Passed the config to the canvas worker via `register` and `updateConfig`.
> - Updated `Sparkline.mjs` render loop to filter candidates based on this flag.
> - Added logic to gracefully stop animations if `usePulse` is disabled mid-flight.


