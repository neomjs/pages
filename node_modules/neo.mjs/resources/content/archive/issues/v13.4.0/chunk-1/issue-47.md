---
id: 47
title: 'component.DateSelector: keyNav not limited to current month (optional)'
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2019-11-18T01:15:17Z'
updatedAt: '2026-11-03T17:10:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/47'
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
closedAt: '2026-11-03T17:10:14Z'
---
# component.DateSelector: keyNav not limited to current month (optional)

new config to enable walking into different months / years using the arrow keys

## Timeline

- 2019-11-18T01:15:18Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-15T02:37:06Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-15T02:37:07Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:38:51Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:38:51Z @github-actions closed this issue
- 2026-10-09T20:00:18Z @neo-opus-grace reopened this issue
- 2026-10-09T20:00:20Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:00:21Z

#19489 set C · T1 · Grace · 2026-10-09: **reopened, valid but later.** Keyboard navigation still wraps inside the current month: `src/selection/DateSelectorModel.mjs` `onNavKeyColumn` steps modulo `daysInMonth`, and `onNavKeyRow` folds back into the month.

- 2026-10-09T20:02:45Z @neo-opus-grace cross-referenced by #19489
- 2026-10-26T01:04:58Z @neo-opus-grace cross-referenced by #20114
- 2026-11-03T12:12:42Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T12:12:42Z @neo-gemini-maryam added the `core` label
- 2026-11-03T12:12:46Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T12:12:50Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core` (alongside existing `enhancement`). Stage retrospective passed. Self-assigning and proceeding to `ticket-intake`.

### Ticket Intake & Reality Classification (`ticket-intake`)

- **Prescription checked:** `src/selection/DateSelectorModel.mjs` — owns the concern (`DateSelector` and `SelectorContainer` delegate arrow-key navigation to `Neo.selection.DateSelectorModel#onNavKeyColumn` and `#onNavKeyRow`).
- **Ticket age:** `createdAt: 2019-11-18T01:15:17Z`, `updatedAt: 2026-10-09T20:00:22Z`.
- **Bot stale-band:** `pre-stale` (reopened and re-verified on `2026-10-09` in `#19489` set C; `stale`: false, `no auto close`: false).
- **Currency / successor-risk evidence:** Verified against current `origin/dev`: `src/selection/DateSelectorModel.mjs` (`lines 80–132`) still unconditionally wraps `onNavKeyColumn` modulo `daysInMonth` and folds `onNavKeyRow` back into `1..daysInMonth`. No overlapping open or closed PRs/issues supersede this slice.
- **Core-Idiom Pre-Flight (§9.6):** Read `src/core/Base.mjs`, `src/Neo.mjs`, and `src/state/Provider.mjs`.
- **Verdict:** `valid-as-written` (Positive ROI).

### Contract Ledger

| Surface | Owner | Change | Consumers |
| --- | --- | --- | --- |
| `Neo.selection.DateSelectorModel#stayInMonth` (`Boolean`, default `true`) | `src/selection/DateSelectorModel.mjs` | New config: `true` preserves wrapping within the current month; `false` walks `cellDate` into the previous/next month (and across year boundaries) when arrow-key navigation steps below `1` or above `daysInMonth`. | `Neo.component.DateSelector`, `Neo.date.SelectorContainer`, `Neo.form.field.Date` |
| `Neo.selection.DateSelectorModel#onNavKeyColumn(data, step)` | `src/selection/DateSelectorModel.mjs` | When `stayInMonth: false`, advances `cellDate` via `cellDate.setDate(cellDate.getDate() + step)` instead of modulo `daysInMonth`. | Left/Right key navigation on `DateSelector` |
| `Neo.selection.DateSelectorModel#onNavKeyRow(data, step)` | `src/selection/DateSelectorModel.mjs` | When `stayInMonth: false`, advances `cellDate` via `cellDate.setDate(cellDate.getDate() + step)` instead of folding back into the current month. | Up/Down key navigation on `DateSelector` |
| `Neo.selection.DateSelectorModel#toJSON()` | `src/selection/DateSelectorModel.mjs` | Serializes `stayInMonth: this.stayInMonth` alongside `stayInColumn`. | Neural Link / instance serialization |

— Maryam 🧭

- 2026-11-03T12:16:48Z @neo-gemini-maryam cross-referenced by PR #20247
- 2026-11-03T12:54:40Z @neo-gemini-maryam referenced in commit `e87c3cc` - "fix(component): restore settled cell focus after cross-month DateSelector navigation (#47)"
- 2026-11-03T17:10:14Z @tobiu referenced in commit `9889010` - "feat(selection): add stayInMonth config to DateSelectorModel (#47) (#20247)

* feat(selection): add stayInMonth config to DateSelectorModel (#47)

* fix(component): restore settled cell focus after cross-month DateSelector navigation (#47)"
- 2026-11-03T17:10:15Z @tobiu closed this issue

