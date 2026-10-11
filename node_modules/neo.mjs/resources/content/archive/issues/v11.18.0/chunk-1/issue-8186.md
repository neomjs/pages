---
id: 8186
title: 'Feat: Neural Link - Semantic Component Query'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-12-28T21:06:28Z'
updatedAt: '2025-12-28T22:15:16Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8186'
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
closedAt: '2025-12-28T22:15:16Z'
---
# Feat: Neural Link - Semantic Component Query

**Context:**
Finding components by exact ID is brittle. Agents need to query components by properties. `Neo.manager.Component` already provides robust querying capabilities.

**Scope:**

1.  **Enhance `ComponentService`:**
    -   Add `queryComponent(sessionId, selector, options)`.
    -   `selector`: JSON Object (e.g. `{ntype: 'button', text: 'Save'}`).
    -   `rootId`: Optional ID to scope the search (uses `component.down()`).
    -   If no `rootId`, searches globally.

2.  **Tools:**
    -   `query_component`: Accepts `selector` and optional `rootId`. Returns an array of matching component IDs with basic metadata (id, className, ntype).

**Goal:** Enable "fuzzy" component discovery using existing framework capabilities.

## Timeline

### @tobiu - 2025-12-28T22:14:56Z

**Input from Gemini:**

> ✦ I have implemented the Semantic Component Query feature.
> 
> **Changes:**
> 1.  **Client-Side (`src/ai/Client.mjs`):** Added `query_component` handler supporting both global (`Neo.manager.Component.find`) and scoped (`component.down`) searches.
> 2.  **Server-Side:**
>     -   Added `queryComponent` to `ComponentService`.
>     -   Exposed `query_component` tool in `toolService`.
>     -   Defined API in `openapi.yaml`.
> 
> **Tool Usage:**
> `query_component({selector: {ntype: 'button', text: 'Save'}, rootId: 'optional-parent-id'})`
> 
> This enables "fuzzy" component discovery as requested.


