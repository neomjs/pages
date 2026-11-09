---
id: 9473
title: Add File Editing Tool Protocol to AGENTS.md
state: CLOSED
labels:
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-03-14T11:31:48Z'
updatedAt: '2026-03-14T11:33:44Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9473'
author: tobiu
commentsCount: 1
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
closedAt: '2026-03-14T11:33:44Z'
---
# Add File Editing Tool Protocol to AGENTS.md

### Description
The LLM's natural instinct to fall back to bash redirection (e.g., `cat << EOF >> file` or `echo >> file`) when appending to files causes unpredictable syntax errors (due to JSON escaping issues) and violates the core environment tool contract. The agent needs explicit instruction on how to handle the "Append Gap" since there is no dedicated `append_file` tool.

### Proposed Solution
Add a new Section 10 to `AGENTS.md` titled **"File Editing Tool Selection"**.

This section mandates:
1.  **For Editing:** Always use `replace`.
2.  **For Appending:** Always use `replace` (matching the final string/paragraph and replacing it with itself + the new content).
3.  **For Creation:** Always use `write_file`.
4.  **The Ban:** Strictly forbids using bash redirection (`>`, `>>`) or stream editors (`sed`) via `run_shell_command` to modify files.

## Timeline

- 2026-03-14T11:31:50Z @tobiu added the `documentation` label
- 2026-03-14T11:31:50Z @tobiu added the `ai` label
- 2026-03-14T11:32:51Z @tobiu referenced in commit `b32ad85` - "docs: Add File Editing Tool Protocol to AGENTS.md (#9473)"
### @tobiu - 2026-03-14T11:33:04Z

**Input from Gemini 3.1 Pro:**

> ✦ I have appended the `File Editing Tool Selection` protocol to `AGENTS.md`. This explicitly instructs agents on how to bridge the "Append Gap" by using the `replace` tool, and formally bans the use of bash redirection (`>>`) and stream editors (`sed`) for modifying repository files.

- 2026-03-14T11:33:22Z @tobiu assigned to @tobiu
- 2026-03-14T11:33:44Z @tobiu closed this issue
- 2026-05-18T23:23:03Z @neo-opus-ada referenced in commit `69e63af` - "fix(agentos): preserve dropped framing labels in body per operator V-B-A (#11599)

Operator V-B-A challenge on PR #11600 heading conversion: 12 dropped parentheticals → 9 cleanly preserved in body, 3 with mild context loss. Two of the three mild-loss cases are load-bearing cross-substrate labels:

1. `(The "Append Gap")` for §file_editing_tool_selection — origin #9473, reused across PR #9863 retrospective; names the agent-tooling concept of "no dedicated append_file tool, use replace instead." Body rules captured the WHAT; the WHY-framing label was dropped.

2. `(Category-Drift Defense)` for §neo_identity_anchor — cross-referenced across PR #10741 / #10744 / #11040 retrospectives; identifies the substrate-pattern shared between §15.5 (identity drift) and §15.6 (swarm topology drift). Body mandate had "nullify category drifts" but the explicit framing label was dropped.

Body-side enrichment (substrate-correct per ADR 0011 §2.5 design intent — "heading IS the anchor; descriptive prose lives in the section body"):

- §file_editing_tool_selection: added leading sentence explaining the Append Gap (no append_file tool → replace substitute, bash redirection ban rationale, #9473 origin)
- §neo_identity_anchor: renamed "Mandate:" to "Category-Drift Defense Mandate:" — single-word label addition preserves the cross-substrate framing identifier

Third mild-loss case (`(Core Value: Equal Peer + Maintainer Agency)` → §swarm_topology_anchor) NOT amended — body already says "Equal-peer-with-maintainer-agency is the third core value" + "Neo's swarm operates **Flat Peer-Team**" in bold. Both elements are in body prose; the heading-level salience loss is acceptable per ADR §2.5 design intent.

Gates: lint-agents OK / size 21,187<24,576 / whitespace PASS / git --check PASS. AGENTS.md +224 bytes (still 86% of cap headroom)."
- 2026-05-18T23:23:24Z @neo-opus-ada cross-referenced by PR #11600
- 2026-05-19T00:58:47Z @tobiu referenced in commit `0c0edb6` - "feat(agentos): Phase 1 substrate-wide §semantic_concept_name heading form (#11599) (#11600)

* feat(agentos): Phase 1 substrate-wide §semantic_concept_name heading form (#11599)

ADR 0011 §2.5 adds substrate-wide heading-form convention; AGENTS.md Phase 1
adopts. Replaces positional headings (## 21. The Mailbox Check Protocol ...)
with pure-anchor semantic identifiers (## §mailbox_check_protocol).

Changes:
- ADR 0011 §2.5: defines substrate-wide convention + scope (AGENTS.md /
  AGENTS_ATLAS.md / AGENTS_STARTUP.md / .agents/ANTIGRAVITY_RULES.md /
  .agents/skills/**/*.md / learn/agentos/**/*.md)
- ADR 0011 §2.1 / §2.3: reconciles example form from kebab-case to
  underscore_separated per operator-direction 2026-05-18
- AGENTS.md: 15 positional headings converted to pure-anchor form
- AGENTS.md: internal §N cross-references converted to §semantic form
  (§3.5 → §verify_before_assert, §13.2 → §friction_to_gold, §15.6 →
  §swarm_topology_anchor, §15.5 → §neo_identity_anchor, §13.1 →
  §contributions_over_commits, §0 → §critical_gates, §13 → §self_evolving_systems)

Properties:
- Self-documenting: anchor IS heading; cross-substrate refs resolve directly
- Byte-cheapest: 20,963 bytes (down from 21,106 — saved 143 bytes)
- Compaction-immune: section reordering doesn't invalidate references
- KB ingestion friendly: anchor names are concept-bearing tokens
- Cross-document drop friendly: tickets/PRs/discussions drop
  §mailbox_check_protocol and resolve consistently

Phase 1 scope = ADR 0011 amendment + AGENTS.md (proof of concept).
Phases 2-5 cascade through AGENTS_ATLAS.md, AGENTS_STARTUP.md, skills,
learn/agentos, code JSDoc — operator-decision on sequencing.

External cross-references (§2, §10, §5.1, §0.2, etc. pointing to skills /
AGENTS_ATLAS / workflows) intentionally LEFT in Phase 1 — convert in
respective phase.

Verified:
- lint-agents.mjs OK (no <a id> tag insertions)
- check-substrate-size.mjs OK (AGENTS.md 20,963 / 24,576 cap)
- check-whitespace.mjs OK

* fix(agentos): two stale reference-form misses on PR #11600 (#11599)

GPT cross-family review CHANGES_REQUESTED caught two reference-form misses inside the Phase 1 conversion surface:

1. AGENTS.md §swarm_topology_anchor (line 128): `§Core-Values at file top` → `§core_values at file top` (kebab+title-case → underscore semantic form).
2. ADR 0011 §1 Context (line 26): `§mailbox-check-protocol` → `§mailbox_check_protocol` (kebab → underscore; aligns with §2.1/§2.3 reconciliation already in Phase 1 commit d7aa8a15f).

Both edits are byte-neutral (same char count); AGENTS.md remains at 20,963 bytes well under 24,576 cap.

Gates re-verified: lint-agents OK / check-substrate-size PASS / check-whitespace PASS / git --check PASS.

* fix(agentos): preserve dropped framing labels in body per operator V-B-A (#11599)

Operator V-B-A challenge on PR #11600 heading conversion: 12 dropped parentheticals → 9 cleanly preserved in body, 3 with mild context loss. Two of the three mild-loss cases are load-bearing cross-substrate labels:

1. `(The "Append Gap")` for §file_editing_tool_selection — origin #9473, reused across PR #9863 retrospective; names the agent-tooling concept of "no dedicated append_file tool, use replace instead." Body rules captured the WHAT; the WHY-framing label was dropped.

2. `(Category-Drift Defense)` for §neo_identity_anchor — cross-referenced across PR #10741 / #10744 / #11040 retrospectives; identifies the substrate-pattern shared between §15.5 (identity drift) and §15.6 (swarm topology drift). Body mandate had "nullify category drifts" but the explicit framing label was dropped.

Body-side enrichment (substrate-correct per ADR 0011 §2.5 design intent — "heading IS the anchor; descriptive prose lives in the section body"):

- §file_editing_tool_selection: added leading sentence explaining the Append Gap (no append_file tool → replace substitute, bash redirection ban rationale, #9473 origin)
- §neo_identity_anchor: renamed "Mandate:" to "Category-Drift Defense Mandate:" — single-word label addition preserves the cross-substrate framing identifier

Third mild-loss case (`(Core Value: Equal Peer + Maintainer Agency)` → §swarm_topology_anchor) NOT amended — body already says "Equal-peer-with-maintainer-agency is the third core value" + "Neo's swarm operates **Flat Peer-Team**" in bold. Both elements are in body prose; the heading-level salience loss is acceptable per ADR §2.5 design intent.

Gates: lint-agents OK / size 21,187<24,576 / whitespace PASS / git --check PASS. AGENTS.md +224 bytes (still 86% of cap headroom).

* fix(agentos): compact AGENTS_ATLAS refs to text-token form + drop redundant in-bullet mentions (#11599)

Substrate-correctness fix per ADR 0011 §2.4 ("markdown-link references as an exception for rendered-consumer needs, not the live-substrate default"). Operator V-B-A flagged 16 AGENTS_ATLAS occurrences (12 lines, 4 lines with duplicate-path markdown-link pattern violating §2.4).

Two compactions:

1. Convert 4 markdown-link refs → text-token form per ADR 0011 §2.1:
   - Line 12: `[`learn/agentos/AGENTS_ATLAS.md`](learn/agentos/AGENTS_ATLAS.md) §2` → `AGENTS_ATLAS.md §2`
   - Line 46: `[`learn/agentos/AGENTS_ATLAS.md` §0.2 Cross-Family Cascade Clause](learn/agentos/AGENTS_ATLAS.md)` → `AGENTS_ATLAS.md §0.2 Cross-Family Cascade Clause`
   - Line 66 / 97: same pattern → `AGENTS_ATLAS.md §2`

2. Compact §edge_case_triggers redundant in-bullet `read AGENTS_ATLAS.md` mentions where preamble already routes (`*(Sections mapped to learn/agentos/AGENTS_ATLAS.md)*`):
   - Knowledge Base bullet: drop "in `AGENTS_ATLAS.md`" filler
   - Testing & Validation: restructure from "If X, read ATLAS" → declarative form
   - Visual Verification: same
   - File Reading Efficiently: same
   - V-B-A bullet: drop AGENTS_ATLAS.md prefix, keep `§2` semantic anchor (load-bearing)

Results:
- AGENTS_ATLAS occurrences: 16 → 7
- AGENTS.md size: 21,247 → 20,902 bytes (-345)
- Markdown-link-with-duplicate-path violations: 4 → 0

Net for Phase 1 PR overall: AGENTS.md 21,106 (origin/dev) → 20,902 (-204 bytes) while adding 15 §semantic_concept_name heading conversions + 27 cross-ref conversions + 2 body-side framing-label enrichments (Append Gap, Category-Drift Defense) + this compaction.

Gates: lint-agents OK / size 20,902<24,576 / whitespace PASS / git --check PASS."
- 2026-06-06T01:52:37Z @neo-gpt-euclid cross-referenced by PR #12611
- 2026-06-06T20:12:34Z @neo-opus-grace cross-referenced by PR #12649
- 2026-08-25T08:08:04Z @neo-opus-ada cross-referenced by PR #17747

