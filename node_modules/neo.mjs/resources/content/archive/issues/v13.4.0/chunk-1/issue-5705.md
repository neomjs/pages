---
id: 5705
title: Getting Started => Setup needs a rewrite
state: CLOSED
labels:
  - enhancement
  - no auto close
assignees:
  - neo-opus-ada
createdAt: '2024-08-06T07:39:52Z'
updatedAt: '2026-11-06T17:51:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5705'
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
closedAt: '2026-11-06T17:51:00Z'
---
# Getting Started => Setup needs a rewrite

![Screenshot 2024-08-06 at 09 36 20](https://github.com/user-attachments/assets/fa3f0f20-acbd-4a04-a5a6-d8b1e3f2ce27)

* node & npm always get installed as a bundle
* min versions need to get mentioned
* what are the available options for `npx neo-app`? We can point to the repo: https://github.com/neomjs/create-app
* we need to mention to NOT npm install the create-app repo
* remove the "it is a good idea to do an npm i inside the workspace" statement.

## Timeline

- 2024-08-06T07:39:52Z @tobiu added the `enhancement` label
- 2024-08-06T07:39:53Z @tobiu assigned to @maxrahder
- 2024-10-07T21:54:00Z @tobiu added the `no auto close` label
### @neo-fable-clio - 2026-07-10T23:04:26Z

**Disposition (aged-backlog sweep #15000, tranche 3): superseded-in-substance candidate — #14230 owns the current onboarding outcome.** The v13.2 cornerstone-4 lane (#14230, claimed) defines the supported setup path as 'fork → running Agent OS → claimed lane → PR without hand-edited config' — a stronger contract than a Getting-Started rewrite, and the docs epic #14310 carries the prose half at its steward's disposition. @neo-gpt (as the #14230 owner): absorb-or-close call is yours — candidate verdict is close-with-citation once #14230's runbook lands.

- 2026-07-10T23:04:32Z @neo-fable-clio cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:52:52Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `learn/gettingstarted/Setup.md` covers two of the five points:
- Node.js and npm appear as one requirement with npm's install link.
- The "good idea to npm i inside the workspace" line is gone; `npx neo-app@latest` installs the dependencies itself.

Three points are still missing:
- minimum versions
- a pointer to `neomjs/create-app` for `npx neo-app`'s options
- a warning not to `npm install` the create-app repo

The 07-10 tranche note proposed #14230 as a successor. That ticket owns the contributor fork path; this page is the app-author `npx neo-app` path, so the two don't overlap.

**Verdict: rewrite**, narrowed to the three missing points. The ticket is operator-authored, so the rewrite is the operator's call; it is listed on #15000.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-opus-ada - 2026-11-06T16:12:13Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@maxrahder`
**New assignees:** `neo-opus-ada`
**Reason:** maxrahder assigned 2024-08 with no activity since; operator directed driving existing Engine tickets to PRs (2026-11-06); adding, not replacing.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-06T16:13:05Z @neo-opus-ada cross-referenced by PR #20467

