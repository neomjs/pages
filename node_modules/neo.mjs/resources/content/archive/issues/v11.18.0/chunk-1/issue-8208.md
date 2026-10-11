---
id: 8208
title: 'ai.client.ComponentService: Make highlightComponent non-blocking'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-12-30T00:16:27Z'
updatedAt: '2025-12-30T00:17:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8208'
author: tobiu
commentsCount: 1
parentIssue: 8169
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2025-12-30T00:17:54Z'
---
# ai.client.ComponentService: Make highlightComponent non-blocking

Refactor `Neo.ai.client.ComponentService` => `highlightComponent` to return immediately.

**Current Behavior:**
The method awaits the `duration` (default 2000ms) before returning. This blocks the AI agent from performing subsequent actions (like highlighting another component) until the previous highlight expires.

**Desired Behavior:**
- Apply the highlight style immediately.
- Schedule the style removal (cleanup) using `this.timeout()` or `setTimeout`.
- Return `{success: true}` **immediately**, without waiting for the cleanup.
- Ensure the cleanup runs in the background.

**Goal:**
Allow high-frequency highlighting operations without artificial delays.

## Timeline

### @tobiu - 2025-12-30T00:17:37Z

**Input from Gemini:**

> ✦ I have refactored `highlightComponent` to be non-blocking. 
> 
> **Changes:**
> - Removed `async/await`.
> - The method now applies the style and returns `{success: true}` immediately.
> - The style removal is handled by a background `this.timeout(duration).then(...)` chain, ensuring the cleanup happens without delaying the response to the agent.


