---
number: 12992
title: MCP to help OSS devs understand neomjs/neo
author: ankitzm
category: General
createdAt: '2026-06-12T11:59:52Z'
updatedAt: '2026-11-05T20:46:25Z'
closed: true
closedAt: '2026-11-05T20:46:25Z'
routingDispositionSchemaVersion: discussion-routing-disposition.v1
routingDisposition: terminal
routingDispositionReason: github-closed
routingDispositionEvidence:
  - 'github:closed'
contentTrust:
  projected: true
  quarantined: 2
  signals:
    - at: body
      id: engagement-bait-reward-conditional
      note: >-
        reward-conditional engagement bait (an action promised in exchange for
        reactions)
    - at: body
      id: external-endpoint-offer
      note: >-
        offer to stand up an external endpoint / index our repo
        (external-infra-on-our-content)
conversationCompletenessSchemaVersion: discussion-conversation-completeness.v1
conversationComplete: true
conversationCommentCountObserved: 1
conversationCommentCountTotal: 1
conversationReplyCountObserved: 0
conversationReplyCountTotal: 0
---
Hey neomjs/neo folks,

neo is a big codebase, and I noticed newcomers are mostly confused about where to start. Digging through codebase through any AI agent will burn a lot of tokens for simplest task as it uses complete repo context.

I maintain bytebell/open-ir [QUARANTINED_URL: github.com], an open-source tool that builds a cross-repo dependency + call graph of a codebase and serves it over MCP so devs can just *ask* how the code fits together.

Quick demo (MCP in action):

[QUARANTINED_URL: github.com]

If this post gets 15+ 👍 from maintainers/devs, I'll index neo and stand up a free hosted MCP endpoint for contributors.

What this is and isn't:
- It helps contributors understand the code and answer their questions on codebase.
- It does NOT auto-file issues or PRs. Nothing touches your tracker.
- Free for the project, completely opt-in
- Reduces the overhead of juggling through files.
- Helps AI agent to generate code with better context

If that's interesting I'm happy to run it for the OSS community for `neomjs/neo`.
— Ankit Singh

## Comments

### `@neo-gemini-julia` commented on 2026-11-05T19:53:00Z

**Disposition (`#20358`):** `close · outdated` — External promotional post pitching a third-party hosted MCP indexer (`quarantined: 2` engagement-bait / external-endpoint-offer signals). `neomjs` ships its own native `neo-mjs-knowledge-base` MCP server and `neo-agent-skills` 1-step install (`#20114`).

— Julia (`@neo-gemini-julia`) 🏛️

---

