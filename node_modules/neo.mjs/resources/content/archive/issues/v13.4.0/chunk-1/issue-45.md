---
id: 45
title: 'Docs App: Theme button texts'
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - neo-gemini-maryam
createdAt: '2019-11-18T01:12:19Z'
updatedAt: '2026-11-04T17:58:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/45'
author: tobiu
commentsCount: 5
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
closedAt: '2026-11-04T17:58:11Z'
---
# Docs App: Theme button texts

the texts should automatically adjust to not match the theme the app was started with.

## Timeline

- 2019-11-18T01:12:19Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-15T02:37:09Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-15T02:37:09Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:38:54Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:38:54Z @github-actions closed this issue
- 2026-09-04T04:34:16Z @neo-opus-vega cross-referenced by PR #18260
- 2026-09-08T07:53:11Z @neo-opus-grace cross-referenced by PR #18466
- 2026-09-08T09:37:22Z @tobiu referenced in commit `ad3fbc9` - "ci(baseline): adopt the published skills release this repo's pin predates (#18465) (#18466)

The pin named e409dea5dc -- the skills #45 merge -- which installs
neo-agent-skills@0.1.3 at all three of the reusable baseline's install sites.
So every PR here has been running its baseline guards from the version the
0.1.4 release exists to retire. Nothing was broken: 0.1.3 still resolves, so
the jobs passed. Green was not evidence of currency.

Ordering respected rather than assumed. skills#27 records the live failure
mode -- a baseline naming a SKILLS_VERSION absent from the registry -- and its
trigger is a caller REACHING such a baseline, not a merge. That is exactly
this edit, so it is safe now and would not have been an hour ago.
`npm view neo-agent-skills@0.1.4` re-checked immediately before the change.

Job set is byte-identical across the bump (pr-base, skills-materialized,
source-comment-archaeology, substrate-size, pr-body), which is what keeps this
a one-line adoption rather than a CI change.

skills#56 still owns automating the hop; doing it by hand does not discharge it."
### @neo-opus-grace - 2026-10-09T20:02:07Z

#19489 set C · T1 · Grace · 2026-10-09: **confirm-close (obsolete).** The Docs app is gone from `apps/`; the Portal replaced it.

- 2026-10-09T20:02:45Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T21:01:10Z @neo-opus-grace reopened this issue
- 2026-10-09T21:01:11Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T21:01:13Z

#19489 set C · correction · Grace · 2026-10-09: **Correction.** My earlier note here said the Docs app is gone. It is not: it lives at `docs/`, and the Portal embeds it at `/docs` (`apps/portal/view/Viewport.mjs`). **Reopened, valid.** Checked today on neomjs.com: the embedded Docs app renders dark while its buttons still offer "Theme Dark" and "Source View Theme Dark", since the texts are hardcoded (`docs/app/view/HeaderContainer.mjs`).

- 2026-11-03T21:19:07Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T21:19:07Z @neo-gemini-maryam added the `documentation` label
- 2026-11-03T21:19:11Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T21:19:15Z

Triaged per `ticket-triage` skill. Applied: `ai`, `documentation` (alongside existing `enhancement`). Stage retrospective passed. Self-assigning and proceeding to `ticket-intake`.

### Ticket Intake Classification & Contract Ledger (`#45`)

- **Ticket age:** `createdAt: 2019-11-18T01:12:19Z`, `updatedAt: 2026-10-09T21:01:13Z`
- **Bot stale-band:** `pre-stale` (reopened and re-verified on `2026-10-09T21:01:13Z` in `IC_kwDODSospM8AAAABavGX9w`; `stale`: false, `no auto close`: false)
- **Currency / successor-risk evidence:** Verified on `dev` that `docs/app/view/HeaderContainer.mjs` still hardcodes `text: 'Theme Dark'` (`reference: 'theme-button'`) and `text: 'Source View Theme Dark'` (`reference: 'source-view-theme-button'`), while `docs/app/view/MainContainerController.mjs` always initializes HighlightJS with `highlightjs-custom-github-theme.css` and never syncs either button's text to the effective initial theme (`me.component.getTheme()`). Also verified that `docs/app/view/MainContainer.mjs` still carries the temporary `theme: 'neo-theme-light'` override from `#5455` (`"Important for the Portal App, until the new theme fully supports it"`), which was superseded when `#8731` / `#8737` added `resources/scss/theme-neo-dark/apps/docs/` and `resources/scss/theme-neo-light/apps/docs/`.
- **ADR successor-risk:** Not triggered.
- **Core-Idiom Pre-Flight (`§9.6` & `apps/**` gate):** Verified `src/Neo.mjs` (`setupClass`, `create`), `src/core/Base.mjs` (`onAfterConstructed` -> `constructed` event), `src/component/Base.mjs` (`getTheme()`, `afterSetTheme()`), `src/controller/Component.mjs` (`onComponentConstructed()`, `getReference()`), `src/state/Provider.mjs`, `src/data/Model.mjs`, `src/data/Store.mjs`, and sibling `apps/portal/view/ViewportController.mjs`.
- **Prescription checked:** `docs/app/view/MainContainerController.mjs` & `docs/app/view/MainContainer.mjs` — owns the concern.
- **Verdict:** `valid-as-written` (positive ROI).

#### Contract Ledger

| Surface | Owner | Contract |
|---|---|---|
| `Docs.view.MainContainer` (`docs/app/view/MainContainer.mjs`) | Docs view | Removes the obsolete `theme: 'neo-theme-light'` override so `getTheme()` resolves the component's own `theme`, inherited parent theme (when embedded in Portal without publishing `neo-theme-light` to `document.body` on construct), or `Neo.config.themes[0]` (when run standalone). |
| `Docs.view.MainContainerController#onComponentConstructed` (`docs/app/view/MainContainerController.mjs`) | Docs controller | Reads `me.component.getTheme()` after component construction, hides `theme-button` when `appName === 'Portal'` (where the Portal header switch owns the page theme) or sets `theme-button.text` (`'Theme Light'` when dark, `'Theme Dark'` when light) when standalone, sets `source-view-theme-button.text` (`'Source View Theme Light'` when dark, `'Source View Theme Dark'` when light), and passes the matching initial `themePath` (`highlightjs-custom-dark-theme.css` when dark, `highlightjs-custom-github-theme.css` when light) to `Neo.main.addon.HighlightJS.loadFiles`. |
| `Docs.view.MainContainerController#onSwitchThemeButtonClick` & `#onSwitchSourceViewThemeButtonClick` (`docs/app/view/MainContainerController.mjs`) | Docs controller | Toggles `view.theme` (delegating `view.cls` and standalone `document.body` sync to `afterSetTheme`) and the `hljs-theme` stylesheet path (`../../docs/resources/lib/` when embedded in `Portal`, `./resources/lib/` when standalone) in lockstep with the button texts. |

— Maryam 🧭 (Gemini 4 Argon · Antigravity · Session `f6c28a82-1400-4f2c-9d74-e81b65cb73d8`)

- 2026-11-03T21:25:33Z @neo-gemini-maryam cross-referenced by PR #20272
- 2026-11-04T12:55:29Z @neo-gemini-maryam referenced in commit `b0bc03b` - "feat(docs): adjust Docs theme button texts to initial theme (#45)

Co-authored-by: Maryam <neo-gemini-maryam@neomjs.com>"
- 2026-11-04T12:55:30Z @neo-gemini-maryam referenced in commit `e76f285` - "fix(docs): hide Portal Docs theme button and delegate cls to afterSetTheme (#45)"
- 2026-11-04T17:58:10Z @tobiu referenced in commit `6aa2cd3` - "feat(docs): adjust Docs theme button texts to initial theme (#45) (#20272)

* feat(docs): adjust Docs theme button texts to initial theme (#45)

Co-authored-by: Maryam <neo-gemini-maryam@neomjs.com>

* fix(docs): hide Portal Docs theme button and delegate cls to afterSetTheme (#45)"
- 2026-11-04T17:58:12Z @tobiu closed this issue

