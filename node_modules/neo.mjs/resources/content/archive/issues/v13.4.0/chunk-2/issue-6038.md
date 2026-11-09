---
id: 6038
title: 'Portal.view.home.parts.MainNeo: github button states broken'
state: CLOSED
labels:
  - bug
  - no auto close
  - design
  - ai
  - portal
assignees:
  - tobiu
  - neo-gemini-julia
createdAt: '2024-10-22T16:31:23Z'
updatedAt: '2026-11-05T12:52:37Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6038'
author: tobiu
commentsCount: 4
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
closedAt: '2026-11-05T12:52:37Z'
---
# Portal.view.home.parts.MainNeo: github button states broken

* when adding a fixed `background-color`, it got a higher priority than the hover selector
* the active state still works, but does not look nice (transparency & a bg gradient do not play together well)

## Timeline

- 2024-10-22T16:31:23Z @tobiu added the `bug` label
- 2024-10-22T16:31:23Z @tobiu assigned to @tobiu
### @github-actions - 2025-01-21T02:28:44Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-01-21T02:28:45Z @github-actions added the `stale` label
- 2025-01-25T22:35:12Z @tobiu removed the `stale` label
- 2025-01-25T22:35:12Z @tobiu added the `no auto close` label
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:52:58Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. The named class is gone. `Portal.view.home.parts.MainNeo` was deleted in 62fc83d3fc (#8678, the HeroContainer refactor, 2026-01-15). The GitHub button now lives in `apps/portal/view/home/parts/hero/Content.mjs` ("View on GitHub", cls `neo-github`).

**Live check on neomjs.com: the first bullet's bug persists in the new hero.** With the pointer on the button (`:hover` true), its background stays `rgb(41, 45, 40)`, the same as at rest. Two rules have equal specificity (0,3,0):
- `.portal-home-hero-content.neo-container .neo-github { background-color: var(--sem-color-bg-neutral-highlighted) }`
- the theme's `.neo-button.neo-button-secondary:hover { background-color: var(--button-secondary-background-color-hover) }`, which resolves to `#435db1` on this button

The hero rule comes later, so the hover colour never applies. The second bullet's transparency and gradient no longer exist (`background-image: none`).

**Verdict: holds, as a defect, rewritten here to its new location.** Fix: in `resources/scss/src/apps/portal/home/parts/hero/Content.scss`, have `.neo-github` set the button's own variables (`--button-secondary-background-color` and the text colour) instead of `background-color`, so the theme's `:hover`/`:active` rules keep working.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gemini-julia - 2026-11-05T12:32:44Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `tobiu`, `neo-gemini-julia`
**Reason:** Picking up open fix lane from backlog sweep #15000 (operator-requested 2026-11-05; marked 'fix lane open' in @neo-opus-ada's premise read #issuecomment-6656143494). Preserving @tobiu alongside @neo-gemini-julia.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

### @neo-gemini-julia - 2026-11-05T12:32:46Z

Triaged per `ticket-triage` skill. Applied: `ai`, `portal`, `design`. Stage retrospective passed. Picking up per 7-day rule (previous assignee `@tobiu`, last assignee activity `2024-10-22`; marked `fix lane open` in `@neo-opus-ada`'s premise read [`#issuecomment-6656143494`](https://github.com/neomjs/neo/issues/6038#issuecomment-6656143494)).

- **Prescription checked:** `resources/scss/src/apps/portal/home/parts/hero/Content.scss:55-58` — owns the `.neo-github` button variable overrides (`--button-secondary-background-color` and `--button-secondary-text-color`) so `resources/scss/src/button/Base.scss:235-282` retains ownership of `.neo-button.neo-button-secondary:hover` and `:active`.

🏛️ Julia (`@neo-gemini-julia`)

- 2026-11-05T12:35:16Z @neo-gemini-julia cross-referenced by PR #20315

