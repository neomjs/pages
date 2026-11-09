---
id: 4044
title: 'button.Split: SCSS => adding border specific rules for different button uis'
state: CLOSED
labels:
  - enhancement
  - design
  - ai
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-02-12T22:30:37Z'
updatedAt: '2026-11-04T12:18:20Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4044'
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
closedAt: '2026-11-04T12:18:20Z'
---
# button.Split: SCSS => adding border specific rules for different button uis

similar to button.Base

## Timeline

- 2023-02-12T22:30:37Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-29T02:27:38Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:27:39Z @github-actions added the `stale` label
### @github-actions - 2024-09-12T02:29:37Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-12T02:29:37Z @github-actions closed this issue
- 2026-10-09T20:31:20Z @neo-opus-grace reopened this issue
- 2026-10-09T20:31:22Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:31:23Z

#19489 set C · T5 · Grace · 2026-10-09: **reopened, valid but later.** `resources/scss/src/button/Split.scss` still has no UI-specific border rules.

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T19:07:59Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T19:07:59Z @neo-gemini-maryam added the `core` label
- 2026-11-03T19:07:59Z @neo-gemini-maryam added the `design` label
- 2026-11-03T19:08:03Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T19:08:08Z

### Ticket Triage & Intake Classification (`#4044`)

Triaged per `ticket-triage` skill. Applied: `ai`, `core`, `design` alongside existing `enhancement`. Stage retrospective passed. Self-assigned (`@neo-gemini-maryam`) and proceeding to implementation.

- **Ticket age:** `createdAt: 2023-02-12T22:30:37Z`, `updatedAt: 2026-10-09T20:31:24Z` (validated and reopened in `#19489` by `@neo-opus-grace`, `IC_kwDODSospM8AAAABausZhg`).
- **Bot stale-band:** `pre-stale` (`stale: false`, `no auto close: false`).
- **Prescription checked:** `resources/scss/src/button/Split.scss` — owns the concern.
  - **Root cause & historical context:** `#4044` was filed on Feb 12, 2023 right after `#4041` (`button.Split: pass the current ui to the trigger button`) and `#4042` (`button.Split: the last child left border should only be visible in case the trigger is visible`). Two days later (`#4055`, Feb 14, 2023), `resources/scss/src/button/Base.scss` and all theme sheets replaced `--button-border-width` + `--button-border-color` with `--button-border`, `--button-ghost-border`, `--button-secondary-border`, and `--button-tertiary-border` (plus `-hover`, `-active`, `-pressed`, `-disabled`). Then in `#4501` (June 9, 2023), `Split#afterSetUi` was updated so both child `<button class="neo-button">` nodes (`this.vdom.cn[0]` and `this.triggerButton.vdom`) carry `.neo-button-${ui}` (`neo-button-ghost`, `neo-button-secondary`, `neo-button-tertiary`).
  - Meanwhile, `resources/scss/src/button/Split.scss` was never updated after `#4055` and `#4501`: it still sets `border: var(--button-border-width) solid var(--button-border-color)` on `.neo-split-button` and `.neo-trigger-button` (referencing deleted CSS variables) while stripping `.neo-button { border: none; }`.
  - Removing the obsolete wrapper/trigger border declarations and `.neo-button { border: none; }` from `resources/scss/src/button/Split.scss` (and instead collapsing only the shared inner seam via `&:first-child:not(:last-child) { border-bottom-right-radius: 0; border-right: none !important; border-top-right-radius: 0; }` and `.neo-trigger-button { border-bottom-left-radius: 0; border-top-left-radius: 0; }`, plus removing the two orphaned `--button-border-width` declarations in `theme-dark/button/Base.scss` and `theme-cyberpunk/button/Base.scss`) allows both child `.neo-button` elements to inherit the full UI border matrix (`primary`, `ghost`, `secondary`, `tertiary` across `default`, `:hover`, `:active`, `.pressed`, `.neo-disabled`) directly from `resources/scss/src/button/Base.scss` while preserving single-button border geometry when `hideTriggerButton: true`.
- **Verdict:** `valid-as-written`.

### Contract Ledger

| Surface / Artifact | Producer / Owner | Consumer(s) | Contract / Invariant | Surface-Anchor V-B-A |
| :--- | :--- | :--- | :--- | :--- |
| `resources/scss/src/button/Split.scss` | `Neo.button.Split` SCSS | All themes & apps using `Neo.button.Split` | Delegates per-UI (`primary`, `ghost`, `secondary`, `tertiary`) and per-state (`default`, `:hover`, `:active`, `.pressed`, `.neo-disabled`) borders to `resources/scss/src/button/Base.scss` on the child `.neo-button` elements while collapsing the shared inner seam (`:first-child:not(:last-child)` right border/radius and `.neo-trigger-button` left radius) | Verified against `resources/scss/src/button/Split.scss:1-16`, `resources/scss/src/button/Base.scss:12-411`, and `src/button/Split.mjs:48-85,169-181` |
| `resources/scss/theme-dark/button/Base.scss` & `resources/scss/theme-cyberpunk/button/Base.scss` | Theme button variable sheets | `Neo.button.Base` / `Neo.button.Split` | Removes orphaned `--button-border-width` custom property left over from `#4055` | Verified against `resources/scss/theme-dark/button/Base.scss:27` and `resources/scss/theme-cyberpunk/button/Base.scss:19` |

---
*Authored by Maryam (Gemini 4 Argon, Antigravity). Session `f6c28a82-1400-4f2c-9d74-e81b65cb73d8`. 🧭*

- 2026-11-03T19:09:29Z @neo-gemini-maryam cross-referenced by PR #20263
- 2026-11-03T20:34:10Z @neo-gemini-maryam referenced in commit `b40003c` - "fix(button): overlap SplitButton trigger seam and preserve interaction borders (#4044)"
- 2026-11-04T12:18:19Z @tobiu referenced in commit `a39f109` - "feat(button): support per-UI borders on SplitButton (#4044) (#20263)

* feat(button): support per-UI borders on SplitButton (#4044)

* fix(button): overlap SplitButton trigger seam and preserve interaction borders (#4044)"
- 2026-11-04T12:18:21Z @tobiu closed this issue

