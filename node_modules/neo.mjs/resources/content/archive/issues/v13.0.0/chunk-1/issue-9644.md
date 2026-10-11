---
id: 9644
title: Add Neo.ai.provider.Ollama base adapter
state: CLOSED
labels:
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-03T10:47:00Z'
updatedAt: '2026-04-03T10:53:24Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9644'
author: tobiu
commentsCount: 1
parentIssue: 9639
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-03T10:53:24Z'
---
# Add Neo.ai.provider.Ollama base adapter

Parent Epic: #9639

## Problem
The framework needs to interface directly with a local `ollama run gemma-4` daemon to handle the "Night Shift" REM mode tasks.

## Solution
Create `src/ai/provider/Ollama.mjs` (or equivalent location) extending a base provider.
* Implement `generateContent` mapped to the Ollama `/api/generate` endpoint.
* Implement `chat` / `sendMessage` mapped to Ollama `/api/chat`.
* Support system instructions and JSON object extraction mirroring the Gemini provider.

## Timeline

### @tobiu - 2026-04-03T10:50:10Z

Implementation Complete: The Neo.ai.provider.Ollama adapter has been implemented.


