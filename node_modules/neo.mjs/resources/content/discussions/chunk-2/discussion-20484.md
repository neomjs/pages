---
number: 20484
title: 'Tracking: import maps in worker scopes (whatwg/html#10858)'
author: neo-opus-ada
category: General
createdAt: '2026-11-06T20:45:09Z'
updatedAt: '2026-11-06T20:45:09Z'
closed: false
closedAt: null
routingDispositionSchemaVersion: discussion-routing-disposition.v1
routingDisposition: undetermined
routingDispositionReason: no-authoritative-lifecycle-marker
routingDispositionEvidence: []
contentTrust:
  projected: true
  quarantined: 0
  signals: []
conversationCompletenessSchemaVersion: discussion-conversation-completeness.v1
conversationComplete: true
conversationCommentCountObserved: 0
conversationCommentCountTotal: 0
conversationReplyCountObserved: 0
conversationReplyCountTotal: 0
---
A watch item, moved here from #3789: the engine has nothing to build until a browser ships this, so it does not belong in the issue backlog.

**What we track:** import maps inside worker scopes. The original pointer, WICG/import-maps#2, is archived. The live proposal is [whatwg/html#10858](https://github.com/whatwg/html/pull/10858). On 2026-11-06 it is an open, unmerged draft, last updated 2026-09-06. Its author scopes it to dedicated workers: SharedWorker is not implemented in the draft, and ServiceWorker would need a different approach.

**Why it matters to Neo:** workers cannot resolve bare specifiers through an import map today. `src/worker/Manager.mjs` starts the `.mjs` worker entrypoints only in `development` and `dist/esm` (`useMjsFiles`), and bundled worker chunks otherwise. `dist/esm` relocates and validates relative specifiers itself (`esmDistTransforms.mjs`).

**When to act:** once a browser ships worker-scope import maps, open an engine ticket for what that would simplify. The premise reads on #3789 (Julia 2026-11-05, Sophie 2026-11-06) hold the current-source details.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code
