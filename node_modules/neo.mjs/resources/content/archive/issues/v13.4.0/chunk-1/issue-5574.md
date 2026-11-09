---
id: 5574
title: 'Portal App: Add a Link for the API docs into the learning section'
state: CLOSED
labels:
  - enhancement
assignees:
  - neo-gemini-maryam
createdAt: '2024-07-14T12:42:44Z'
updatedAt: '2026-11-04T17:58:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5574'
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
closedAt: '2026-11-04T17:58:59Z'
---
# Portal App: Add a Link for the API docs into the learning section

*(No description provided)*

## Timeline

- 2024-07-14T12:42:44Z @tobiu added the `enhancement` label
### @github-actions - 2024-10-13T02:37:33Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-10-13T02:37:34Z @github-actions added the `stale` label
### @github-actions - 2024-10-27T02:38:55Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-10-27T02:38:55Z @github-actions closed this issue
- 2026-10-09T20:53:34Z @neo-opus-grace reopened this issue
- 2026-10-09T20:53:36Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:53:37Z

#19489 set C · T7 · Grace · 2026-10-09: **reopened, valid.** The Portal embeds the API docs at `/docs` (`apps/portal/view/Viewport.mjs`), but only the home footer links there ("API Docs", `apps/portal/view/home/FooterContainer.mjs`); the learning section has no link.

- 2026-10-09T21:02:53Z @neo-opus-grace cross-referenced by #19489
### @neo-gemini-maryam - 2026-11-04T13:28:12Z

## Intake Sharpening & Contract Ledger (`#5574`)

### Ticket Reality Classification
- **Ticket age:** `createdAt: 2024-07-14T12:42:44Z`, `updatedAt: 2026-10-09T20:53:37Z`
- **Bot stale-band:** `pre-stale` (`stale`: false, `no auto close`: false)
- **Currency / successor-risk evidence:** Verified at `dev` that `Portal.view.Viewport` embeds `Docs.view.MainContainer` at `/docs` (`ViewportController#onDocsRoute`, item index `6`), and `Portal.view.home.FooterContainer` links to `route: '/docs'` (`text: 'API Docs'`), whereas the Learning section (`learn/tree.json`, `Portal.view.learn.MainContainer`, and `learn/UsingTheseTopics.md`) still has no link to `/docs`.
- **Prescription checked:** `learn/tree.json`, `apps/portal/model/Content.mjs`, `src/app/content/TreeList.mjs`, `apps/portal/view/learn/MainContainerController.mjs`, and `learn/UsingTheseTopics.md` — own the concern.
- **Core-Idiom Pre-Flight (`9.6`):** Verified `src/core/Base.mjs`, `src/Neo.mjs`, `src/state/Provider.mjs`, `src/data/Model.mjs`, and `src/data/Store.mjs`.
- **Verdict:** `valid-as-written`

### Contract Ledger
| Surface | Contract |
| :--- | :--- |
| `apps/portal/model/Content.mjs` | Add optional `{name: 'route', type: 'String'}` field so content tree records can declare an app-level route target (e.g. `'/docs'`). |
| `src/app/content/TreeList.mjs` | In `onLeafItemClick(record)`, route to `record.route` when present before falling back to `${this.routePrefix}/${record.id}`. |
| `apps/portal/view/learn/MainContainerController.mjs` | Honor `record.route` in `navigateTo()` and `onRouteLearnItem()` (redirecting `#/learn/ApiDocs` and sequential next-page navigation to `/docs` without setting `currentPageRecord` to a fileless record), and re-sync the tree `selectionModel` to `currentPageRecord` in `onRouteDefault()` when returning to `/learn`. |
| `learn/tree.json` & `learn/UsingTheseTopics.md` | Add top-level leaf `{"name": "API Docs", "parentId": null, "id": "ApiDocs", "route": "/docs"}` to `learn/tree.json` and document `[API Docs](#/docs)` under `## Documentation Sections` in `learn/UsingTheseTopics.md`. |

### Acceptance Criteria
- [ ] **AC-1:** `learn/tree.json` includes a top-level `"API Docs"` entry (`id: "ApiDocs"`, `route: "/docs"`), and `learn/UsingTheseTopics.md` links to `[API Docs](#/docs)` under `## Documentation Sections`.
- [ ] **AC-2:** Clicking a leaf record with `record.route` in `Neo.app.content.TreeList` or navigating via `Portal.view.learn.MainContainerController` (`navigateTo`, `onRouteLearnItem`) dispatches `Neo.Main.setRoute({value: '/docs', windowId})`, and returning to `/learn` (`onRouteDefault`) restores tree selection to `currentPageRecord`.
- [ ] **AC-3:** Unit test coverage verifies `TreeList#onLeafItemClick` and `Portal.view.learn.MainContainerController` route handling for `record.route`, and existing `LearnCorpusLinks` / `LearnRoutes` / `check-relative-links` suites pass.

---
Authored by Maryam (Gemini 4 Argon, Antigravity). Session `a764e67b-ceba-44d6-a9a2-7399afb7e18c`. 🧭

- 2026-11-04T13:28:15Z @neo-gemini-maryam assigned to @neo-gemini-maryam
- 2026-11-04T13:31:19Z @neo-gemini-maryam cross-referenced by PR #20279
- 2026-11-04T17:58:58Z @tobiu referenced in commit `542df26` - "feat(portal): add API Docs link and route handling to learning section (#5574) (#20279)"
- 2026-11-04T17:59:00Z @tobiu closed this issue

