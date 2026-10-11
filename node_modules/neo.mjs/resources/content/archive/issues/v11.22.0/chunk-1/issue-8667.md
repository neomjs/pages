---
id: 8667
title: Optimize HomeCanvas Rendering (Gradient Caching)
state: CLOSED
labels:
  - ai
  - performance
assignees:
  - tobiu
createdAt: '2026-01-15T01:54:46Z'
updatedAt: '2026-01-15T01:59:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8667'
author: tobiu
commentsCount: 1
parentIssue: 8661
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-15T01:59:42Z'
---
# Optimize HomeCanvas Rendering (Gradient Caching)

- Implement `updateResources(width, height)` to cache the background gradient.
- Remove `ctx.createLinearGradient` from the `render` loop to strictly adhere to the Zero-Allocation strategy.
- Ensure gradients are updated on resize.

## Timeline

### @tobiu - 2026-01-15T01:59:27Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented Gradient Caching for the HomeCanvas renderer.
> - Implemented `updateResources(width, height)` to create and cache the `bgGradient` linear gradient.
> - Called `updateResources` in `updateSize` and `initGraph`.
> - Replaced `ctx.createLinearGradient` inside the `render` loop with the cached `me.gradients.bgGradient`.
> 
> This optimization eliminates object allocation for gradients in the critical render path, adhering to the Zero-Allocation strategy.


