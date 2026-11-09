---
id: 9556
title: 'Exploration: Worker-Side Data Sanitization vs. Lazy Record Hydration'
state: CLOSED
labels:
  - help wanted
  - discussion
  - no auto close
  - ai
  - architecture
  - core
assignees: []
createdAt: '2026-03-25T20:47:58Z'
updatedAt: '2026-11-05T17:22:34Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9556'
author: tobiu
commentsCount: 2
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
closedAt: '2026-11-05T17:22:34Z'
---
# Exploration: Worker-Side Data Sanitization vs. Lazy Record Hydration

### Goal
Investigate the architectural feasibility of moving data validation and sanitization into the Data Worker Pipeline.

### Description
Currently, `Neo.data.RecordFactory` handles validation and type conversion during Record instantiation in the App Worker. While the Store's "Turbo Mode" (Lazy Hydration) defers this cost, performing these operations in the App Worker still consumes the main execution thread when data is eventually accessed.

**Exploration Points:**
1. **Thread-Agnostic Validation:** Can we extract validation logic (maxLength, nullable, etc.) into a shared utility that the Data Worker can run on raw parsed objects?
2. **Pre-Sanitization:** What are the performance trade-offs of "cleaning" raw data in the Data Worker before it crosses the worker boundary? 
3. **Turbo Mode Impact:** Does pre-sanitizing data in the Data Worker simplify or redundantize the "Soft Hydration" logic (`resolveField`) in `Neo.data.Store`?
4. **Error Reporting:** How do we efficiently report validation failures for bulk datasets (e.g., 10k rows) back to the App Worker without bloating the IPC payload?

This is a research-first ticket to determine if a "Pre-Hydration" phase in the Data Worker is a viable architectural evolution.

## Timeline

- 2026-03-25T20:47:58Z @tobiu assigned to @tobiu
- 2026-03-25T20:47:59Z @tobiu added the `discussion` label
- 2026-03-25T20:47:59Z @tobiu added the `ai` label
- 2026-03-25T20:47:59Z @tobiu added the `architecture` label
- 2026-03-25T20:48:00Z @tobiu added the `core` label
- 2026-03-25T20:50:05Z @tobiu added the `help wanted` label
- 2026-03-25T20:50:05Z @tobiu added the `no auto close` label
- 2026-03-26T15:19:31Z @tobiu unassigned from @tobiu
- 2026-09-23T09:51:22Z @neo-opus-ada cross-referenced by #19105
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:43:04Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - Record field conversion and soft hydration remain in the App Worker (`src/data/RecordFactory.mjs` and `src/data/Store.mjs#resolveField` / `initRecord`), while `src/data/Pipeline.mjs` runs `connection -> parser -> normalizer`.
  - As an explicitly exploratory ticket (`Exploration: Worker-Side Data Sanitization vs. Lazy Record Hydration`) with 4 open architectural trade-off questions and no concrete implementation plan, this matches the `neomjs/neo#15000` rule: *"convert to a Discussion, when it is a valid idea with no plan."*
- **Verdict (`op` — for `@tobiu`):** **Convert to Discussion candidate.**

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

### @neo-gemini-maryam - 2026-11-05T17:22:31Z

Converted to GitHub Discussion https://github.com/orgs/neomjs/discussions/20353 (`D#20353`) per the `neomjs/neo#15000` backlog sweep rule (*"convert to a Discussion, when it is a valid idea with no plan"*) and the `2026-11-05` operator ruling (`neomjs/neo#15000#issuecomment-6655505297`).

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭


