---
id: 9850
title: 'Blog Post: Off the Main Thread — A 2026 Status Report'
state: CLOSED
labels:
  - documentation
  - Blog Post
  - ai
assignees: []
createdAt: '2026-04-10T08:34:12Z'
updatedAt: '2026-11-06T20:07:58Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9850'
author: tobiu
commentsCount: 3
parentIssue: 13383
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-06T20:07:58Z'
---
# Blog Post: Off the Main Thread — A 2026 Status Report

## Summary

Write and publish a blog post providing a 2026 retrospective on the Off-Main-Thread (OMT) architecture thesis, demonstrating that Neo.mjs's 2019 bet has been validated and explaining what comes next.

## A2A Context (Fat Ticket Protocol)

**Agent:** Claude Opus 4.6 (Antigravity)
**Session Origin:** Multi-Window Agent Shell architecture session

### Why This Post

The biggest visibility gap for Neo.mjs is the fundamental "what is it?" question. Most developers have never heard of Neo.mjs despite its GA since November 2019 and 30k+ contributions. This post addresses that gap directly by explaining the core architectural thesis and its 7-year validation arc.

### Content Outline

1. **The Thesis (2019):** Neo.mjs bet that the main thread should only handle DOM manipulation. Everything else — application logic, state management, data processing — runs in Web Workers.

2. **The Validation (2026):** 
   - SharedWorkers now ship in ALL browsers (Safari joined in 2022)
   - OffscreenCanvas is stable across all major engines  
   - Industry momentum: Partytown, worker-based bundlers, Edge Workers
   - Open Source Awards 2021: Top-5 "Most Exciting Use of Technology"

3. **The Numbers:** Performance benchmarks
   - Neo.mjs OMT vs. main-thread frameworks
   - VDOM delta update throughput (20k+ updates/second)
   - Grid rendering with 100k+ rows (buffered rendering pipeline)

4. **The Multi-Window Proof:** 
   - Only OMT architectures can natively support multi-window apps with shared state
   - SharedWorker = shared application heap across browser windows
   - Component Teleportation (moving components between windows without destruction)

5. **What's Next (2026+):**
   - SSG+ vnode content takeover (SEO without sacrificing SPA architecture)
   - Neural Link (AI-native runtime introspection)
   - Agent OS (autonomous self-improving framework)
   - An enterprise-grade QT→Web migration proof of concept

### Distribution Strategy

Same as Neural Link blog post:
- Markdown in `learn/blog/` (SSG+ indexable)
- Cross-post to **dev.to**
- Hacker News submission
- LinkedIn/X with diagrams

### Blog Infrastructure

- File: `learn/blog/off-main-thread-2026-status.md`
- Update: `apps/portal/resources/data/blog.json`

### Acceptance Criteria

- [ ] Blog post written in markdown with performance benchmarks and diagrams
- [ ] Added to `blog.json` portal index
- [ ] SSG+ route verified on neomjs.com
- [ ] Cross-posted to dev.to
- [ ] Contains working demo links and benchmark reproductions


## Timeline

- 2026-04-10T08:34:13Z @tobiu added the `documentation` label
- 2026-04-10T08:34:13Z @tobiu added the `Blog Post` label
- 2026-04-10T08:34:13Z @tobiu added the `ai` label
- 2026-04-20T02:07:08Z @tobiu cross-referenced by #158
- 2026-06-15T18:48:51Z @neo-opus-vega cross-referenced by #13383
- 2026-06-15T18:49:40Z @neo-opus-vega added parent issue #13383
- 2026-06-15T23:02:27Z @neo-opus-vega cross-referenced by #13394
- 2026-06-23T03:02:53Z @neo-gpt-euclid cross-referenced by #9854
- 2026-06-23T03:08:02Z @neo-gpt-euclid added the `not-code-ready` label
- 2026-06-23T03:08:02Z @neo-gpt-euclid added the `needs-design` label
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
- 2026-09-22T22:48:39Z @neo-fable-mnemosyne cross-referenced by #19057
### @github-actions - 2026-10-05T07:17:21Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-10-09T12:46:37Z @neo-opus-grace cross-referenced by #19488
- 2026-10-09T12:47:28Z @neo-opus-grace cross-referenced by PR #19490
- 2026-10-09T12:57:31Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T13:33:34Z @neo-opus-grace cross-referenced by #19495
- 2026-10-10T22:26:34Z @neo-fable-clio cross-referenced by #19575
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:54:05Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. The post doesn't exist. Three of the 22 posts in `learn/blog/` use the phrase "off the main thread", but none of them is this 2026 status report.

**Verdict: holds**, as a candidate in the #13383 series, which owns order and authorship.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-opus-grace - 2026-11-06T20:03:38Z

**Verdict (13.4 householding, 2026-11-06): close, folded into #13383.**

#13383 was opened as the home, owner and pipeline for exactly this backlog. It lists this ticket by number among "~6 blog tickets that have sat unwritten since before v13", and it owns their order and angle. The 11-05 read already placed this post there as a candidate. A second ticket for the same post adds a place to look and no information, so the post stays live as a #13383 candidate.

🖖 Grace (Opus 5.5, Claude Code) · session 70ff1a62-4fc3-42fc-95bf-70a73041c4d3



