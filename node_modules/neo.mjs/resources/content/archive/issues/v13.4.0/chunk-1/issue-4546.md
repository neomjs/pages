---
id: 4546
title: 'data.RecordFactory: add support for arrays within mapping paths'
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-07-13T12:44:33Z'
updatedAt: '2026-11-03T01:14:33Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4546'
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
closedAt: '2026-11-03T01:14:32Z'
---
# data.RecordFactory: add support for arrays within mapping paths

We already have `Neo.nsWithArrays()`, which does get used for parsing form field paths.

However, `data.RecordFactory: parseRecordValue()` is still using `Neo.ns()` instead.

It would be a quick win to change this.

## Contract Ledger
| Surface | Grammar | Leaf Contract | Missing / OOB Path |
|---|---|---|---|
| `field.mapping` (`RecordFactory#assignDefaultValues`, `RecordFactory#parseRecordValue`) & `Neo.nsWithArrays` (`createArrayNs`) | Dot-separated segments plus `[index]` array segments (`items[0].name`, `tags[1]`, `matrix[0][1].score`) | Preserves the resolved leaf value as-is, including falsy values (`0`, `false`, `''`) | Stops at any `null`/`undefined` intermediate without throwing and yields `undefined`, allowing `field.defaultValue` to apply |

## Timeline

- 2023-07-13T12:44:33Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-29T02:27:02Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:27:03Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:36Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:37Z @github-actions closed this issue
- 2026-10-09T20:32:08Z @neo-opus-grace reopened this issue
- 2026-10-09T20:32:09Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:32:11Z

#19489 set C · T5 · Grace · 2026-10-09: **reopened, valid.** `Neo.nsWithArrays()` exists (`src/Neo.mjs`), but `RecordFactory` still resolves mappings with `Neo.ns()`, so bracket paths are not parsed (a numeric segment works, #3542). A quick win.

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T00:26:33Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T00:26:33Z @neo-gemini-maryam added the `core` label
- 2026-11-03T00:26:33Z @neo-gemini-maryam added the `testing` label
### @neo-gemini-maryam - 2026-11-03T00:26:36Z

Triaged per `ticket-triage` skill (`MAINTAIN` permission verified). Applied: `ai`, `core`, `testing` (preserving `enhancement`).

### Ticket Intake (`ticket-intake` Gate)
- **Stage 1 (Premise & V-B-A):** Validated against `dev` (`src/data/RecordFactory.mjs` and `src/Neo.mjs`). `RecordFactory#assignDefaultValues` (`src/data/RecordFactory.mjs:47-61`) and `RecordFactory#parseRecordValue` (`src/data/RecordFactory.mjs:403-409`) currently resolve `field.mapping` using `Neo.ns`, which does not parse array bracket segments (`[index]`). `Neo.nsWithArrays` (`src/Neo.mjs:785-797`) already supports nested array bracket paths (`items[0].name`, `matrix[0][1].score`) as well as leaf array segments (`tags[1]`).
- **Stage 2 (Scope & ROI):** Narrow, well-scoped `src/data/RecordFactory.mjs` enhancement + unit test coverage in `test/playwright/unit/data/RecordFactory.spec.mjs`. Both intermediate array paths (where the final property is an object key checked via `Object.hasOwn`) and leaf array index paths (`mapping.endsWith(']')`) are supported cleanly while preserving falsy leaf values (`0`, `false`, `''`) and `defaultValue` fallback semantics (`#9060`).

### Contract Ledger
| Surface | Grammar | Leaf Contract | Missing / OOB Path |
|---|---|---|---|
| `field.mapping` (`RecordFactory#assignDefaultValues`, `RecordFactory#parseRecordValue`) & `Neo.nsWithArrays` (`createArrayNs`) | Dot-separated segments plus `[index]` array segments (`items[0].name`, `tags[1]`, `matrix[0][1].score`) | Preserves the resolved leaf value as-is, including falsy values (`0`, `false`, `''`) | Stops at any `null`/`undefined` intermediate without throwing and yields `undefined`, allowing `field.defaultValue` to apply |

Claiming `#4546` for implementation.

— Maryam 🧭

- 2026-11-03T00:26:40Z @neo-gemini-maryam assigned to @neo-gemini-maryam
- 2026-11-03T00:29:31Z @neo-gemini-maryam cross-referenced by PR #20202
- 2026-11-03T00:42:50Z @neo-gemini-maryam referenced in commit `cfce7ad` - "fix(core): Guard missing intermediates in createArrayNs without dropping falsy leaves (#4546)"
- 2026-11-03T01:14:32Z @tobiu referenced in commit `7c65b1a` - "feat(data): Support array bracket paths in RecordFactory field mappings (#4546) (#20202)

* feat(data): Support array bracket paths in RecordFactory field mappings (#4546)

* fix(core): Guard missing intermediates in createArrayNs without dropping falsy leaves (#4546)"
- 2026-11-03T01:14:33Z @tobiu closed this issue

