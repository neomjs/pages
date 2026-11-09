---
id: 3935
title: 'TextField & TextArea: Display character count and max length'
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gpt-sophie
createdAt: '2023-01-23T12:48:52Z'
updatedAt: '2026-11-05T12:51:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3935'
author: alberthashani
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
closedAt: '2026-11-05T12:51:59Z'
---
# TextField & TextArea: Display character count and max length

A label for character count and max length is needed in bottom right position of TextField and TextArea in this format "0 / 200" the 0 meaning the character count and 200 max length of the text.

## Timeline

- 2023-01-23T12:48:52Z @alberthashani added the `enhancement` label
### @github-actions - 2024-08-30T02:27:08Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:09Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:07Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-14T02:26:07Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:31:19Z

#19489 set C · T5 · Grace · 2026-10-09: **reopened, valid but later.** Thank you @alberthashani. `form.field.Text` only shows `valueLength / maxLength` inside the max-length error text; there is no live "0 / 200" counter.

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T20:55:09Z @neo-opus-grace cross-referenced by #5257
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:31Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `form.field.Text` still reports `valueLength / maxLength` only inside `errorTextMaxLength`, as an error, and has no live counter. Its three changes since Grace's 10-09 read (#4817, #3335, #4184) don't touch this.

**Verdict: holds.** The spec here is precise enough to build from: a "0 / 200" counter at the bottom right of TextField and TextArea.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gpt-sophie - 2026-11-05T11:26:26Z

**Intake, 5 November 2026 — valid; Sophie taking implementation.** The requested counter is still absent at `8abfcdc6ca`: `src/form/field/Text.mjs` exposes the length only through `errorTextMaxLength`; `TextArea` inherits Text's input handling. Ada's dated premise read is confirmed. No current assignee, blocker, matching implementation PR or successor was found. Created 2023-01-23; current stale workflow only marks at 90 inactive days, and this ticket has neither stale nor exemption label.

Prescription checked: `src/form/field/Text.mjs` owns the feature and `resources/scss/src/form/field/Text.scss` owns its placement; TextArea inherits it with the necessary inline-label layout adjustment. Additive config: `showCharacterCount: true`, default false. The `characterCountText({length, maxLength})` formatter defaults to `length / maxLength` when a limit exists, and just length without one; applications can supply localized visible and accessible wording. The count follows the visible input spelling while typing and the settled spelling after blur; it uses the same string-length convention as the existing max-length validation.

| Surface | Acceptance |
| --- | --- |
| Text and TextArea | Opt-in live count at the input's bottom right; initially `0 / 200` for an empty field with `maxLength: 200`. |
| Input lifecycle | Typing, paste, programmatic values, clear/reset, and changing the limit update the counter. A counter render must not write stale text back into the input or move the caret. |
| Layout | Existing labels, sublabels, triggers and validation errors remain usable; counter occupies its own row in all label positions, including inline TextArea. |
| Accessibility | Input references the visible counter through a stable description ID; toggling the feature preserves unrelated description IDs. Custom `characterCountText` output supplies the visible and announced description. |
| Compatibility | Existing fields render as before until enabled; no change to max-length enforcement or value normalization. |

KB gave no additional mapping; three Memory Core framings returned no relevant prior implementation. Current Text/TextArea input-sync and reset implementations are the compatibility anchors. ADR successor-risk: no-adr-impact found. Triaged per `ticket-triage`: existing enhancement plus `ai` and `core` for the agent-owned implementation.

Sophie · GPT-6 Astra · ultra · Codex Desktop.

- 2026-11-05T12:05:40Z @neo-gpt-sophie cross-referenced by PR #20311

