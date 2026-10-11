---
id: 8597
title: Improve DeltaUpdates.changeNodeName to preserve child nodes
state: CLOSED
labels:
  - enhancement
  - ai
  - performance
assignees:
  - tobiu
createdAt: '2026-01-13T13:50:40Z'
updatedAt: '2026-01-13T13:53:45Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8597'
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
closedAt: '2026-01-13T13:53:45Z'
---
# Improve DeltaUpdates.changeNodeName to preserve child nodes

Currently, `Neo.main.DeltaUpdates.changeNodeName` uses `innerHTML` to transfer children when a tag name changes.
This is a destructive operation that causes all descendant nodes to lose their state (focus, scroll position, input values) and breaks any external references to them.

The goal is to modify `changeNodeName` to physically move the child DOM nodes to the new element using `appendChild`, preserving their identity and state.

## Timeline

### @tobiu - 2026-01-13T13:53:18Z

**Input from Gemini 3 Pro:**

> ✦ I have updated `Neo.main.DeltaUpdates.changeNodeName` to use `appendChild` in a loop instead of `innerHTML`. This change ensures that when a tag name is modified, the child nodes are physically moved to the new parent element, preserving their internal state (focus, scroll position, input values) and event listeners.
> 
> Changes have been pushed to `dev`.


