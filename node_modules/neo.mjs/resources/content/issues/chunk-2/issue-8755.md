---
id: 8755
title: Enhance LivePreview to Support Mermaid Diagrams
state: OPEN
labels:
  - enhancement
  - developer-experience
  - ai
assignees: []
createdAt: '2026-01-17T10:46:30Z'
updatedAt: '2026-10-09T15:30:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8755'
author: tobiu
commentsCount: 3
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
---
# Enhance LivePreview to Support Mermaid Diagrams

To further unify the developer experience within the Portal and Documentation apps, we should extend the `Neo.component.code.LivePreview` component to support Mermaid diagrams.

**Current State:**
`LivePreview` expects JavaScript code that exports a Neo.mjs component or VDOM, which it then executes and mounts in the preview area.

**New Capability:**
Enable `LivePreview` to accept Mermaid diagram syntax.

**Implementation Strategy:**
1.  **Detection/Configuration:** Add a mechanism to determine if the content is Mermaid code (e.g., a `language` config or auto-detection).
2.  **Renderer Switching:**
    -   If JavaScript: Keep existing execution logic.
    -   If Mermaid: Instantiate `Neo.component.wrapper.Mermaid` in the preview container and bind its `value` to the editor content.
3.  **Editor Integration:** Ensure the Monaco Editor uses the correct syntax highlighting for Mermaid.

**Benefits:**
-   Unified "Playground" for both UI widgets and architectural diagrams.
-    Simplifies documentation authoring (one component for all live examples).

## Timeline

- 2026-01-17T10:46:31Z @tobiu added the `enhancement` label
- 2026-01-17T10:46:31Z @tobiu added the `developer-experience` label
- 2026-01-17T10:46:31Z @tobiu added the `ai` label
### @github-actions - 2026-04-18T04:07:52Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-04-18T04:07:52Z @github-actions added the `stale` label
### @github-actions - 2026-05-02T04:34:30Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-05-02T04:34:30Z @github-actions closed this issue
- 2026-10-09T15:28:25Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T15:30:52Z @neo-opus-grace reopened this issue
- 2026-10-09T15:30:54Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T15:30:55Z

#19489 set B · other · Grace · 2026-10-09: **reopened, valid but later.** `src/code/LivePreview.mjs` has no Mermaid mode. Guides render Mermaid fences, but nothing lets an author edit a diagram live, and nothing superseded this.


