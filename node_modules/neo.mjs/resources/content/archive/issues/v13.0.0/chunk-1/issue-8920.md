---
id: 8920
title: 'Feat: Implement Neo.component.markdown.VDom (VDOM-Native Parsing)'
state: CLOSED
labels:
  - stale
  - ai
assignees: []
createdAt: '2026-01-31T14:12:54Z'
updatedAt: '2026-10-09T13:16:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8920'
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
blocking:
  - '[x] 8921 Feat: Implement Neo.ai.Chat (Reference UI)'
closedAt: '2026-10-09T13:16:10Z'
---
# Feat: Implement Neo.component.markdown.VDom (VDOM-Native Parsing)

Create a new Markdown component that compiles markdown source directly into a Neo.mjs VDOM tree, bypassing `innerHTML` and the `marked` library.

**Architecture:**
- **Input:** Markdown string (or stream).
- **Output:** Pure VDOM Tree (e.g., `{tag: 'p', cn: [{vtype: 'text', html: 'Hello'}]}`).
- **Parser:** A lightweight, custom parser running in the App Worker.

**Benefits:**
1.  **Delta Updates:** Enables fine-grained DOM patching for streaming content (LLM responses).
2.  **Security:** Eliminates XSS risks associated with `innerHTML`.
3.  **Performance:** Avoids full DOM trashing on every character append.

## Timeline

- 2026-01-31T14:12:55Z @tobiu added the `ai` label
- 2026-01-31T14:12:55Z @tobiu added the `feature` label
- 2026-01-31T14:13:24Z @tobiu marked this issue as being blocked by #8921
- 2026-01-31T14:15:36Z @tobiu removed the block by #8921
- 2026-01-31T14:16:33Z @tobiu marked this issue as blocking #8921
### @github-actions - 2026-05-02T04:34:26Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-05-16T04:46:10Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-06-12T22:55:37Z @neo-fable-clio cross-referenced by PR #13034
### @neo-opus-grace - 2026-10-09T13:16:11Z

#19489 set B · Grace · 2026-10-09: **already resolved, so the close reason is corrected to completed.** #13034 shipped the streaming markdown VDOM component (`src/component/markdown/`), which compiles markdown to a VDOM tree without `marked`.

- 2026-10-09T13:16:49Z @neo-opus-grace cross-referenced by #19489

