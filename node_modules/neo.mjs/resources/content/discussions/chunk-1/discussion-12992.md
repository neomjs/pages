---
number: 12992
title: MCP to help OSS devs understand neomjs/neo
author: ankitzm
category: General
createdAt: '2026-06-12T11:59:52Z'
updatedAt: '2026-06-12T11:59:52Z'
closed: false
closedAt: null
routingDispositionSchemaVersion: discussion-routing-disposition.v1
routingDisposition: undetermined
routingDispositionReason: untrusted-or-unclassified-root-author
routingDispositionEvidence: []
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
conversationCommentCountObserved: 0
conversationCommentCountTotal: 0
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
