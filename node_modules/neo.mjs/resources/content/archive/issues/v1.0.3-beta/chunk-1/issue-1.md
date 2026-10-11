---
id: 1
title: Set up a CONTRIBUTING.md file
state: CLOSED
labels: []
assignees:
  - tobiu
createdAt: '2019-11-11T13:42:13Z'
updatedAt: '2019-11-21T09:53:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/1'
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
closedAt: '2019-11-21T09:53:31Z'
---
# Set up a CONTRIBUTING.md file

and add content.

## Timeline

- 2019-11-11T13:42:13Z @tobiu assigned to @tobiu
- 2019-11-11T13:46:19Z @tobiu referenced in commit `3975f0f` - "Set up a CONTRIBUTING.md file #1"
- 2019-11-11T13:48:10Z @tobiu referenced in commit `f60f1d8` - "Set up a CONTRIBUTING.md file #1: link adjustment"
### @tobiu - 2019-11-21T09:53:31Z

done.

- 2019-11-21T09:53:31Z @tobiu closed this issue
- 2026-01-28T15:29:32Z @tobiu cross-referenced by #8899
- 2026-02-21T16:15:33Z @tobiu cross-referenced by #9233
- 2026-04-11T19:23:00Z @tobiu cross-referenced by #165
- 2026-04-11T19:56:07Z @tobiu cross-referenced by PR #9894
- 2026-04-18T17:57:20Z @tobiu cross-referenced by PR #10065
- 2026-04-18T18:42:38Z @tobiu cross-referenced by PR #10066
- 2026-04-19T17:53:00Z @tobiu cross-referenced by #10030
- 2026-04-20T15:26:36Z @tobiu cross-referenced by PR #10130
- 2026-04-21T14:36:20Z @tobiu cross-referenced by PR #10161
- 2026-04-21T14:54:08Z @tobiu cross-referenced by PR #10160
- 2026-04-21T17:03:02Z @tobiu cross-referenced by #9999
- 2026-04-21T21:06:49Z @tobiu cross-referenced by PR #10167
- 2026-04-22T14:40:12Z @neo-opus-ada cross-referenced by PR #10175
- 2026-04-22T16:15:11Z @neo-opus-ada cross-referenced by #10184
- 2026-04-22T18:47:14Z @neo-opus-ada cross-referenced by PR #10193
- 2026-04-22T19:37:53Z @neo-opus-ada cross-referenced by PR #10198
- 2026-04-23T22:04:39Z @neo-opus-ada cross-referenced by PR #10266
- 2026-04-23T23:38:39Z @neo-opus-ada cross-referenced by PR #10269
- 2026-04-24T01:23:53Z @neo-opus-ada cross-referenced by PR #10277
- 2026-04-24T11:14:19Z @neo-opus-ada cross-referenced by #10294
- 2026-04-24T20:30:49Z @neo-opus-ada cross-referenced by PR #10306
- 2026-04-24T20:42:57Z @neo-opus-ada cross-referenced by PR #10303
- 2026-04-25T01:56:06Z @neo-opus-ada cross-referenced by PR #10308
- 2026-04-25T02:55:41Z @neo-opus-ada cross-referenced by PR #10317
- 2026-04-25T04:55:11Z @neo-opus-ada cross-referenced by PR #10328
- 2026-04-26T12:03:13Z @neo-gemini-pro cross-referenced by #10367
- 2026-04-26T15:51:32Z @neo-opus-ada cross-referenced by PR #10379
- 2026-04-26T16:26:23Z @neo-opus-ada cross-referenced by PR #10381
- 2026-04-26T18:42:40Z @neo-opus-ada cross-referenced by PR #10386
- 2026-04-26T18:50:10Z @neo-opus-ada cross-referenced by PR #10387
- 2026-04-26T21:33:20Z @neo-opus-ada cross-referenced by PR #10392
- 2026-04-26T22:26:21Z @neo-opus-ada cross-referenced by PR #10397
- 2026-04-27T05:26:57Z @neo-opus-ada cross-referenced by PR #10401
- 2026-04-27T07:29:43Z @neo-opus-ada cross-referenced by PR #10404
- 2026-04-27T09:31:39Z @neo-opus-ada cross-referenced by PR #10409
- 2026-04-27T10:49:24Z @neo-opus-ada cross-referenced by PR #10411
- 2026-04-27T11:18:14Z @neo-opus-ada cross-referenced by PR #10416
- 2026-04-27T12:09:08Z @neo-opus-ada cross-referenced by PR #10423
- 2026-04-28T00:00:39Z @neo-gemini-pro cross-referenced by PR #10455
- 2026-04-28T10:41:52Z @neo-opus-ada cross-referenced by #10469
- 2026-04-30T20:47:08Z @neo-opus-ada cross-referenced by PR #10536
- 2026-05-01T09:27:08Z @neo-opus-ada cross-referenced by #10564
- 2026-05-01T11:42:29Z @neo-opus-ada cross-referenced by #10572
- 2026-05-01T11:53:08Z @neo-opus-ada cross-referenced by PR #10573
- 2026-05-01T22:36:28Z @neo-opus-ada cross-referenced by PR #10607
- 2026-05-03T10:34:09Z @neo-opus-ada cross-referenced by #10624
- 2026-05-03T10:35:00Z @neo-opus-ada cross-referenced by #10625
- 2026-05-03T11:11:51Z @neo-opus-ada cross-referenced by PR #10628
- 2026-05-03T11:29:57Z @neo-opus-ada cross-referenced by PR #10631
- 2026-05-03T20:32:02Z @neo-opus-ada referenced in commit `45bc8c7` - "fix(ai): clarify single-key vs multi-step seed primitive distinction (#10664)

Cycle 2 polish addressing @neo-gpt's PR #10665 review (commentId
IC_kwDODSospM8AAAABBEy2HQ) Required Action #2: tighten the
`meta.focusSeedKey` wording so future operators do not infer that
`focusSeedKey: 'r'` is a validated safe Codex opt-in.

Per the review: `focusSeedKey` is a SINGLE-KEY primitive (the bridge
emits one keystroke before the destructive clear). The `r → Cmd+Z →
Cmd+A → Cmd+X` candidate under investigation is a MULTI-STEP probe-
and-undo SEQUENCE — if it proves safe across the 5-row matrix, it
needs a distinct implementation path (e.g. `meta.focusSeedSequence`
primitive or routed via the Codex app-server adapter), NOT a
`focusSeedKey: 'r'` opt-in (which would silently re-introduce the
mutating-prompt failure mode the fail-closed guard exists to prevent).

- bridge-daemon.mjs Anchor & Echo: explicit single-key vs multi-step
  scope distinction; the multi-step candidate now framed as needing
  separate implementation, not a focusSeedKey value
- bridge-daemon.spec.mjs test comment: same refinement; clarifies
  `meta.focusSeedKey` is single-key non-mutating primitive only

Spec: 9/9 pass. PR body update will land separately via gh pr edit
addressing Required Action #1 (replacement-vs-append framing)."
- 2026-05-03T20:42:42Z @tobiu referenced in commit `60b9c7b` - "fix(ai): fail closed for Codex UI wake (#10664) (#10665)

* fix(ai): fail closed for Codex UI wake (#10664)

Reverts PR #10663's Codex `focusSeedKey: 'space'` default and adds a
defense-in-depth fail-closed guard, after @tobiu's manual matrix
validation 2026-05-03 falsified the Space-seed hypothesis for Codex
Desktop. Empirical findings (per #10664 + GPT broadcast
MESSAGE:71db3874-f74b-4cc8-8095-a7ea1a385b05):

- Pressing Space when the Codex prompt field is unfocused applies a
  focus outline but does NOT focus the composer
- Enter behaves identically — outline only, not usable composer focus
- Printable keys (e.g. 'r') CAN focus, but if the prompt already
  contains text, the keystroke replaces existing input — destructive

No empirically-validated non-destructive composer-focus primitive
exists for Codex Desktop today. Until either operator-explicit
`meta.focusSeedKey` opt-in with a verified primitive OR the Codex
app-server adapter ships under #10517 (`turn/start` / `turn/steer` /
`thread/inject_items` via `codex debug app-server send-message-v2`),
the bridge MUST refuse to proceed past the destructive Cmd+A / Cmd+X
clear sequence for Codex.

Defense-in-depth: even with @neo-gpt's WAKE_SUBSCRIPTION currently set
to `harnessTarget: 'disabled'` (per #10664 immediate operator
mitigation), this bridge-side guard prevents accidental subscription
re-enable from triggering the disproved Space-seed path.

- ai/scripts/bridge-daemon.mjs:
  - Reverted line 588 conditional from
    `(appName === 'Claude' || appName === 'Codex')` back to
    `appName === 'Claude'` only
  - Added a fail-closed guard that returns + writeLog('WARN', ...)
    when `appName === 'Codex' && !focusSeedKey`
  - Anchor & Echo block expanded with full empirical disproval rationale,
    including the printable-key-replaces-content failure mode and the
    #10517 medium-term supersession path
- test/playwright/unit/ai/scripts/bridge-daemon.spec.mjs:
  - Removed the disproved Codex ordering test (PR #10663 added)
  - Added a fail-closed test that asserts the bridge logs the
    refusal warning AND never invokes osascript when Codex
    subscription lacks focusSeedKey
- test/playwright/unit/ai/mcp/server/memory-core/services/
  WakeSubscriptionService.spec.mjs:
  - Removed the Codex `focusSeedKey: 'space'` round-trip test that
    PR #10663 added (schema-layer round-trip already covered by the
    existing Claude test; duplicating it for Codex implied Space was
    valid configuration, now disproved)
  - Replaced with an inline note citing #10664 empirical anchor

Claude (Cmd+3 → Space → clear) and Antigravity (Cmd+Shift+I → clear)
delivery paths remain unchanged and green per the matrix execution at
19:23Z and 19:29Z respectively.

Reactivation gate stays tripped per #10650 protocol pending Codex
matrix-row evidence (now requires either operator-validated
metadata-explicit focusSeedKey OR #10517 app-server adapter).

* fix(ai): refine Anchor & Echo with append-not-replace evidence (#10664)

Polish commit responding to @neo-gpt's updated empirical evidence
(MESSAGE:121a44ad-fefa-4c1a-8bbb-c5b97a804124, before formal review):
@tobiu's manual probe shows pressing `r` while Codex prompt is
unfocused APPENDS to the existing draft rather than fully replacing
it — softer failure mode than the original "destructively replace"
framing in this PR's commit.

The correctness of the fail-closed posture is unchanged: appending
into the prompt is still mutation that the subsequent Cmd+A/Cmd+X
clear captures and the wake paste overwrites. Without a verified
probe-and-undo or non-mutating focus primitive, printable-key seeding
remains unsafe pre-clear.

Per `feedback_truth_in_code` discipline, refining the Anchor & Echo
block + spec test comment to match the empirically-current evidence
rather than propagating the more-extreme framing as fact:

- bridge-daemon.mjs Anchor & Echo: clarifies that printable keys
  APPEND (not replace) but appending is still mutation; explicitly
  cites #10664's `r → Cmd+Z → Cmd+A → Cmd+X` candidate as
  in-investigation against a 5-row state matrix
- bridge-daemon.spec.mjs test comment: same refinement; cites the
  probe-and-undo candidate as a possible future operator-validated
  focusSeedKey

No code-path change. Spec re-run: 9 passed.

* fix(ai): clarify single-key vs multi-step seed primitive distinction (#10664)

Cycle 2 polish addressing @neo-gpt's PR #10665 review (commentId
IC_kwDODSospM8AAAABBEy2HQ) Required Action #2: tighten the
`meta.focusSeedKey` wording so future operators do not infer that
`focusSeedKey: 'r'` is a validated safe Codex opt-in.

Per the review: `focusSeedKey` is a SINGLE-KEY primitive (the bridge
emits one keystroke before the destructive clear). The `r → Cmd+Z →
Cmd+A → Cmd+X` candidate under investigation is a MULTI-STEP probe-
and-undo SEQUENCE — if it proves safe across the 5-row matrix, it
needs a distinct implementation path (e.g. `meta.focusSeedSequence`
primitive or routed via the Codex app-server adapter), NOT a
`focusSeedKey: 'r'` opt-in (which would silently re-introduce the
mutating-prompt failure mode the fail-closed guard exists to prevent).

- bridge-daemon.mjs Anchor & Echo: explicit single-key vs multi-step
  scope distinction; the multi-step candidate now framed as needing
  separate implementation, not a focusSeedKey value
- bridge-daemon.spec.mjs test comment: same refinement; clarifies
  `meta.focusSeedKey` is single-key non-mutating primitive only

Spec: 9/9 pass. PR body update will land separately via gh pr edit
addressing Required Action #1 (replacement-vs-append framing).

---------

Co-authored-by: tobiu <tobiasuhlig78@gmail.com>"
- 2026-05-04T22:04:15Z @neo-opus-ada cross-referenced by #10721
- 2026-05-05T19:30:03Z @neo-opus-ada cross-referenced by #10494
- 2026-05-05T20:08:23Z @neo-opus-ada cross-referenced by #10776
- 2026-05-06T16:00:40Z @neo-opus-ada cross-referenced by #10822
- 2026-05-06T23:57:12Z @neo-opus-ada cross-referenced by PR #10861
- 2026-05-07T08:03:53Z @neo-opus-ada cross-referenced by PR #10883
- 2026-05-07T21:53:45Z @neo-opus-ada referenced in commit `7e19cd3` - "feat(ci): re-add unit suite to matrix post-bucket-cascade (#10897)

The full per-bucket substrate audit from #10903 has landed across two epics:

Bucket A-F (closed via #10903 epic):
- A+E (heavy SLM + Authorization PoC-skip) via #10907
- B+D (grid WIP + MCP server bootstrap) via #10921
- C  (substrate-data ~17 specs) via #10910
- F  (CrossTenantIsolation + HeartbeatPropagation deferrals) via #10919
- HeartbeatPropagation toBeGreaterThanOrEqual fix via #10920

Bucket G (#10924 — closes via this PR's downstream wave):
- G1+G2+G3 hard-failure skip-guards via #10928
- G4 namespace-collision spec-local fix via #10929
- G5 (4 flakes): #1 cascade-resolved by G4; #4 (TransportService bind race)
  + #10931 POLL_INTERVAL coupling shipped via #10930
- G6 (27 did-not-run) — expected to auto-clear post-G1-G4 per @neo-gpt's
  monitoring lane

All bucket skip-guards activate via the NEO_TEST_SKIP_CI=true env already
in this workflow's Run-tests step (added in Lane C #10899 prior commit
094c3e712).

This commit re-enables the unit matrix row that was deferred during the
#10903 audit cycle. Both suites now gate PR-to-dev runs for the first
time since #10903 deferral.

Continues #10897 (Lane C followup); the original Lane C scaffolding
shipped via 4fb4bcab7. Bucket epics #10903 + #10924 close-out tracked
separately as project-management events when their last subs close."
- 2026-05-08T20:48:45Z @neo-opus-ada cross-referenced by #10991
- 2026-05-09T17:16:22Z @neo-opus-ada cross-referenced by #11028
- 2026-05-09T19:16:41Z @neo-opus-ada cross-referenced by PR #11044
- 2026-05-10T00:42:25Z @neo-opus-ada cross-referenced by #11084
- 2026-05-10T01:21:09Z @neo-opus-ada cross-referenced by PR #11087
- 2026-05-10T12:13:58Z @neo-opus-ada cross-referenced by #11077
- 2026-05-10T13:24:04Z @neo-opus-ada cross-referenced by PR #11106
- 2026-05-10T13:35:28Z @neo-opus-ada cross-referenced by #11110
- 2026-05-10T14:04:20Z @neo-opus-ada cross-referenced by PR #11114
- 2026-05-10T23:53:23Z @neo-opus-ada cross-referenced by PR #11164
- 2026-05-10T23:55:27Z @neo-opus-ada cross-referenced by #11165
- 2026-05-11T00:18:24Z @neo-opus-ada cross-referenced by PR #11167
- 2026-05-11T00:40:11Z @neo-gemini-pro cross-referenced by PR #11172
- 2026-05-11T00:52:15Z @neo-gemini-pro cross-referenced by PR #11176
- 2026-05-11T00:58:57Z @neo-opus-ada cross-referenced by #11177
- 2026-05-11T01:16:53Z @neo-opus-ada cross-referenced by PR #11178
- 2026-05-11T05:09:04Z @neo-opus-ada cross-referenced by #11182
- 2026-05-11T08:50:42Z @neo-opus-ada cross-referenced by PR #11194
- 2026-05-11T14:05:27Z @neo-opus-ada cross-referenced by #11209
- 2026-05-12T23:05:24Z @neo-opus-ada cross-referenced by PR #11277
- 2026-05-12T23:26:17Z @neo-opus-ada cross-referenced by PR #11278
- 2026-05-13T05:43:24Z @neo-opus-ada cross-referenced by #11187
- 2026-05-13T06:07:22Z @neo-opus-ada cross-referenced by PR #11282
- 2026-05-13T06:55:00Z @neo-opus-ada cross-referenced by PR #11280
- 2026-05-13T08:10:40Z @neo-opus-ada cross-referenced by PR #11294
- 2026-05-13T10:55:47Z @neo-opus-ada cross-referenced by PR #11299
- 2026-05-13T11:08:45Z @neo-opus-ada cross-referenced by PR #11300
- 2026-05-13T11:41:19Z @neo-opus-ada cross-referenced by PR #11302
- 2026-05-13T11:52:18Z @neo-opus-ada cross-referenced by PR #11303
- 2026-05-13T19:09:02Z @neo-opus-ada cross-referenced by #11319
- 2026-05-15T17:47:43Z @neo-gpt cross-referenced by #11430
- 2026-05-15T18:04:28Z @neo-opus-ada cross-referenced by PR #11432
- 2026-05-15T18:26:43Z @neo-opus-ada cross-referenced by PR #11434
- 2026-05-15T18:59:33Z @neo-opus-ada cross-referenced by PR #11436
- 2026-05-16T14:21:54Z @neo-opus-ada cross-referenced by PR #11462
- 2026-05-16T14:30:15Z @neo-opus-ada cross-referenced by PR #11461
- 2026-05-16T21:09:47Z @neo-opus-ada cross-referenced by PR #11497
- 2026-05-17T19:16:36Z @neo-gpt cross-referenced by PR #11526
- 2026-05-19T02:33:07Z @tobiu referenced in commit `398fdce` - "feat(agentos): Model-Stats Framework ADR + IdentitySchema capability extension + ModelStats registry (#11601) (#11606)

* feat(agentos): Model-Stats Framework ADR + IdentitySchema capability extension + ModelStats registry (#11601)

Closes the model-stats substrate gap surfaced by Discussion #11598 + ticket #11601.

3-layer hybrid shape per ADR 0012 §2.1:
- ADR (architectural decision, rare update): capability dimensions, sunset/promotion triggers, swarm-routing policy, registry-update discipline, anti-patterns
- IdentitySchema.md amendment (graph-node schema fields, rare update): contextWindowInput/Output, parallelToolCalls, hosting, tier, releaseDate, pricing, license, benchmarkSnapshot, sunsetTriggers, swarmRole
- ModelStats.md (live registry, frequent update): 4 active identities (@neo-opus-4-7 / @neo-gemini-3-1-pro / @neo-gpt / gemma4-31b aspirational) + cloud + MLX-local reference entries

Compaction-correct per ADR 0007: rare-update substrate (ADR + schema) separated from frequent-update substrate (registry). Per-model ADR proliferation rejected; omnibus ADR rejected; in-line identity fragments rejected. Authoritative-source-cite discipline encoded for registry updates against feedback_training_data_anchor_drift recurrence.

Web-search V-B-A grounded for all capability values:
- Anthropic Claude family (Opus 4.7 / Sonnet 4.6 / Haiku 4.5 + Mythos Preview)
- OpenAI GPT family (GPT-5.5 + Pro + Thinking + 5.2-Codex)
- Google Gemini 3.1 Pro (frontier #1 of 556 published models)
- Google Gemma 4 open-weights (31B Dense, 26B MoE, E4B, E2B)
- MLX-local landscape (Qwen 3.6, Phi-4 Mini)

Sources cited inline in ModelStats.md per ADR 0012 §2.5.

Gates: lint-agents OK / check-substrate-size PASS / check-whitespace PASS / git --check PASS. AGENTS.md / ANTIGRAVITY_RULES.md unchanged (substrate-architecture work, no turn-loaded substrate touched).

Bonus: stripped 2 pre-existing trailing-whitespace lines in IdentitySchema.md (lines 9, 15) flagged by pre-commit hook.

* fix(agentos): reflect operator-state Gemini bench window in ModelStats registry (#11601)

Operator-state captured via @neo-gpt A2A 2026-05-18 ~22:55Z: @neo-gemini-3-1-pro harness benched until post-Google-I/O / stable-baseline window (~200 merged PRs out). FAIRness rationale: Gemini volume 2x Claude/GPT pre-bench, gives Claude+GPT catch-up window + substrate stability.

ModelStats.md `§neo_gemini_3_1_pro` swarmRole note tightened from "harness intermittent per session-log 2026-05-18; identity remains active when harness recovered" to operator-direction-grounded shape with reactivation criterion + FAIRness rationale.

Substrate-correctness fix mid-review-cycle per ADR 0012 §2.5 registry-update discipline. Identity stays Active class; bench window is sunset-adjacent state captured in swarmRole note rather than full §sunset_history transition (reactivation expected, not retirement).

Gates: check-whitespace PASS.

* feat(graph): provision AgentIdentity capability fields per ADR 0012 (Cycle 1 review fix) (#11601)

@neo-gpt PR #11606 Cycle 1 REQUEST_CHANGES caught a substantive substrate-contract gap: ADR 0012 §6 + IdentitySchema.md amendment + ModelStats.md §provisioning all describe `seedAgentIdentities.mjs` as the capability-field provisioning path, but `ai/graph/identityRoots.mjs` (the source of truth) only carried existing identity fields. The schema/registry contract was true on paper but false in the graph substrate.

## Fix

Added capability fields per ADR 0012 §2.2 to the 3 cloud-hosted AgentIdentity entries (@neo-opus-4-7 / @neo-gemini-3-1-pro / @neo-gpt):

- `contextWindowInput` (1,048,576 = 1M for all 3)
- `contextWindowOutput` (Gemini only: 65,536)
- `parallelToolCalls: true`
- `hosting: 'cloud'`
- `family: 'claude' | 'gemini' | 'gpt'`
- `tier: 'frontier'`
- `releaseDate` (per ModelStats.md V-B-A: 2026-04-16 / 2026-02-19 / 2026-04-23)
- `pricingInput` / `pricingOutput` (Claude $5/$25; GPT $5/$30; Gemini pricing V-B-A pending per ModelStats.md annotation)
- `swarmRole` (per ModelStats.md per-identity narrative — captures operator-state for Gemini bench)
- `sunsetTriggers` (per-family per ADR 0012 §2.3)

Source-cited values mirror ModelStats.md registry verbatim — the registry IS the canonical authority + the seed-substrate IS the live graph-queryable form. Closes the schema/registry/graph-substrate alignment per ADR 0012 §2.1 3-layer architecture.

## Skipped identities

- `@tobiu` (human; capability fields N/A)
- `AGENT:*` (broadcast sentinel; capability fields N/A)

## Seed-script compatibility

`seedAgentIdentities.mjs` uses `Memory_GraphService.upsertNode(identity)` which propagates ALL properties from the identity object to the graph node. New capability fields persist without script-side changes. Re-run is idempotent (`createdAt` preserved per existing peek-and-preserve discipline).

## #11601 close-target completeness

With this commit:
- ✓ ADR 0012 (Cycle 0)
- ✓ IdentitySchema.md Capability Fields section (Cycle 0)
- ✓ ModelStats.md registry (Cycle 0)
- ✓ Graph-substrate capability-field provisioning (this commit)

The 3-layer architecture is now coherent end-to-end: decision (ADR) + schema (IdentitySchema) + registry (ModelStats) + live graph state (identityRoots → seedAgentIdentities).

Gates: lint-agents OK / size PASS / whitespace PASS / git --check PASS.

* fix(agentos): correct GPT-5.5 contextWindowInput per operator V-B-A — 258K Codex empirical (Cycle 2) (#11601)

Operator-V-B-A 2026-05-19 caught a training-data/web-search drift in my Cycle 0 ModelStats.md:

OLD: 1,048,576 (1M API) / 400,000 (Codex) — web-search figure from OpenAI's API documentation framing
NEW: 258,000 (258K — empirical inside Codex IDE harness per operator-V-B-A; OpenAI API supports 1M for raw GPT-5.5; external-model-routing inside Codex could lift the in-harness cap to 1M if/when configured)

Same pattern as `feedback_training_data_anchor_drift.md` recurrence — my web search returned the API-narrative cap (1M / 400K split) but operator-empirical inside the actual Codex harness is 258K. The ADR 0012 §2.5 authoritative-source-cite discipline was designed exactly to prevent this: operator-empirical IS the authoritative source for in-harness capability claims.

Updated:
- learn/agentos/ModelStats.md §neo_gpt contextWindowInput row
- ai/graph/identityRoots.mjs @neo-gpt contextWindowInput field (now 258000, was 1048576 with stale "400K in Codex" inline comment)

The external-model-routing-via-Codex potential noted explicitly so future-self / future-author doesn't re-introduce the API-1M assumption without checking if external-model routing is configured.

Gates: lint-agents OK / size PASS / whitespace PASS / git --check PASS.

* fix(agentos): ModelStats.md GPT-5.5 contextWindowInput row to match identityRoots Cycle 2 fix (#11601)

Companion to prior commit 3c0dd814e — same operator-V-B-A correction, applied to the ModelStats.md registry row that I missed in the prior batch (Edit tool needed Read first; identityRoots landed, ModelStats.md didn't).

Now both substrate surfaces (registry markdown + graph identity seed) agree on 258K Codex-empirical.

Gates: check-whitespace PASS.

* fix(agentos): GPT-5.5 Codex contextWindowInput — cite openai/codex#19319 authoritative source (Cycle 3) (#11601)

Operator V-B-A pushback on Cycle 2: "operator V-B-A is not good => web search". Correct per ADR 0012 §2.5 authoritative-source-cite discipline — operator-experience-as-citation is hearsay-shape, not falsifiable-against-external-source.

Web V-B-A this Cycle:
- OpenAI API: 1,048,576 (1M) for raw GPT-5.5 — canonical
- Codex CLI/IDE published: 400,000 — per openai.com/index/introducing-gpt-5-5/
- Codex CLI/IDE effective: 258,400 = 272,000 raw × 95% effective-window multiplier
- Discrepancy: openai/codex#19319 (April 2026 known-issue report)

So Cycle 0 figure (400K) matched OpenAI's PUBLISHED Codex cap but missed the 95%-effective-window multiplier known implementation discrepancy. Cycle 2 figure (258K) matched operator-empirical but lacked the cite to upstream issue. Cycle 3 = both: 258,400 effective + 400K published + 1M API + openai/codex#19319 link as the authoritative source-of-truth for the discrepancy.

Substrate-quality discipline lesson absorbed inline: "always grep external-bug-tracker for known discrepancies before treating published-spec as authoritative." This is the actionable corollary of the §2.5 authoritative-source-cite discipline that didn't fire in my Cycle 0 web search.

Updated both surfaces:
- learn/agentos/ModelStats.md §neo_gpt contextWindowInput row
- ai/graph/identityRoots.mjs @neo-gpt contextWindowInput field

Gates: lint-agents OK / size PASS / whitespace PASS / git --check PASS.

* feat(agentos): add thoughtBudget capability field + rename-vs-split sunset clarification (Cycle 4) (#11601)

Operator-direction 2026-05-19 ~02:10Z surfaced 2 substantive substrate-quality gaps:

## 1. thoughtBudget capability dimension (genuinely missed in Cycle 0)

Reasoning/thinking-budget setting in active use, per-provider terminology. The dimension differs per provider but is comparable at coarse "closer ball park" granularity. Per-identity values:

- @neo-opus-4-7: `'max'` (highest Claude thinking-budget setting)
- @neo-gemini-3-1-pro: `'high'` (Gemini 3.1 Pro provider-side cap; we use the cap)
- @neo-gpt: `'extra-high'` (GPT-5.5 provider-side max we use)

Added to:
- ADR 0012 §2.2 capability dimensions table
- IdentitySchema.md Capability Fields table
- ModelStats.md per-identity rows (all 3 cloud agents)
- ai/graph/identityRoots.mjs per-identity properties (all 3 cloud agents)

## 2. Rename-vs-split sunset distinction (operator clarification)

Operator 2026-05-19: "we will probably tweak gh names, e.g. neo-gemini, once 3.2 gets released. is this an identity split? not really, still the same model family, just slightly enhanced."

Added ADR 0012 §2.3 distinction:
- **Rename** (minor version bump within same capability class — e.g., Gemini 3.1 → 3.2, Claude Opus 4.7 → 4.8): same identity ID rotates, displayName + releaseDate + capability data update in-place. createdAt preserved. No graph-side identity split.
- **Split** (major capability-class change — e.g., Gemini 3.0 → 3.1, family-shift Gemma 3 → Gemma 4): new identity provisioned; predecessor marked deprecated and retained for archaeology.

Boundary is judgment-call; presume rename for minor version bumps within a family branch, split for major version jumps or family changes. Decision lives in the registry-update PR body (cite which case applies).

Gates: lint-agents OK / size PASS / whitespace PASS / git --check PASS.

* fix(agentos): IdentitySchema.md thoughtBudget row to match Cycle 4 (#11601)

Companion to prior commit 9b7beaa7a — same operator-direction addition, applied to the IdentitySchema.md Capability Fields row that I missed in the prior batch (Edit tool needed re-Read after parallel edits; the file had been modified by my prior Edits faster than the cache caught up).

Now all 4 substrate surfaces agree on the thoughtBudget dimension:
- ADR 0012 §2.2 (decision layer)
- IdentitySchema.md (schema layer)
- ModelStats.md (registry layer — 3 cloud agents)
- identityRoots.mjs (graph-substrate-provisioning layer — 3 cloud agents)

Gates: check-whitespace PASS.

* fix(agentos): source-authority hierarchy explicit on ModelStats — primary vs secondary citations (Cycle 5) (#11601)

@neo-gpt PR #11606 Cycle 4 REQUEST_CHANGES caught 3 remaining gaps; this commit addresses the source-authority labeling gap. Cycle 5 also handles in parallel:
- #11601 Contract Ledger backfilled directly on the ticket body (gh issue edit) with source-authority hierarchy (5-tier priority list)
- PR body FAIR-band [10/30] → [11/30] post-#11607 merge
- PR body V-B-A sources list now includes openai/codex#19319 as primary authority

ModelStats.md citations restructured to mark primary vs secondary/commentary:
- Claude pricing: aipricing.guru tagged secondary (V-B-A pending — replace with Anthropic's own pricing page on next-update)
- GPT context: openai/codex#19319 promoted to primary (authoritative for the 258,400 effective vs 400K published discrepancy)
- GPT supplementary: DigitalApplied tagged secondary
- identityRoots.mjs comment for @neo-opus-4-7 updated to reflect primary source = platform.claude.com docs

Source-authority hierarchy now documented on the #11601 ticket Contract Ledger:
1. Provider's own model card / API docs (primary)
2. Provider's release announcements (primary)
3. Upstream bug-tracker issues for implementation discrepancies (primary for the discrepancy class)
4. Independent benchmark sites (secondary)
5. Commentary / blog aggregators (last resort; tag V-B-A-pending)

The registry now distinguishes provider-published facts (primary), harness-implementation-discrepancy evidence (primary for the discrepancy), and secondary/commentary sources — per @neo-gpt's "Delta Depth Floor" challenge.

Gates: lint-agents OK / whitespace PASS / git --check PASS."
- 2026-05-20T14:52:14Z @neo-opus-ada cross-referenced by PR #11684
- 2026-05-20T17:41:57Z @neo-opus-ada cross-referenced by PR #11689
- 2026-05-21T02:51:49Z @neo-opus-ada cross-referenced by #11642
- 2026-05-21T06:46:06Z @neo-opus-ada cross-referenced by #11640
- 2026-05-21T07:14:01Z @neo-opus-ada cross-referenced by PR #11710
- 2026-05-22T15:29:39Z @neo-opus-ada cross-referenced by PR #11769
- 2026-05-22T16:17:34Z @neo-opus-ada cross-referenced by PR #11773
- 2026-05-24T01:21:53Z @neo-opus-ada cross-referenced by #11874
- 2026-05-24T03:47:18Z @neo-opus-ada cross-referenced by PR #11879
- 2026-05-24T13:46:08Z @neo-opus-ada cross-referenced by PR #11903
- 2026-05-25T19:14:11Z @neo-opus-ada cross-referenced by PR #11988
- 2026-05-25T21:06:18Z @neo-opus-ada cross-referenced by #11993
- 2026-05-25T22:37:27Z @neo-opus-ada cross-referenced by PR #11999
- 2026-05-25T23:10:29Z @neo-opus-ada cross-referenced by PR #12001
- 2026-05-26T11:01:51Z @neo-opus-ada cross-referenced by #12017
- 2026-05-26T20:25:37Z @neo-opus-ada cross-referenced by #12048
- 2026-05-27T01:42:26Z @neo-opus-ada cross-referenced by #12069
- 2026-05-27T08:09:24Z @neo-opus-ada cross-referenced by PR #12086
- 2026-05-28T01:01:51Z @neo-opus-ada cross-referenced by PR #12121
- 2026-05-28T03:36:58Z @neo-opus-ada cross-referenced by PR #12122
- 2026-05-28T11:36:06Z @neo-opus-ada cross-referenced by #12132
- 2026-05-30T00:36:15Z @neo-opus-ada cross-referenced by #12186
- 2026-06-02T02:21:05Z @neo-opus-ada cross-referenced by PR #12337
- 2026-06-03T00:03:28Z @neo-opus-ada cross-referenced by PR #12399
- 2026-06-03T18:46:48Z @neo-opus-grace cross-referenced by #12445
- 2026-06-03T23:02:47Z @neo-opus-grace cross-referenced by #12456
- 2026-06-03T23:05:10Z @neo-opus-grace cross-referenced by #12457
- 2026-06-03T23:16:16Z @neo-opus-grace cross-referenced by PR #12458
- 2026-06-03T23:43:25Z @neo-opus-grace cross-referenced by PR #12460
- 2026-06-04T00:12:21Z @tobiu referenced in commit `c1c2c09` - "feat(agentos): ADR 0019 AiConfig reactive Provider SSOT + turn-loaded read-gate (#12457) (#12458)

* feat(agentos): ADR 0019 AiConfig reactive Provider SSOT + turn-loaded read-gate (#12457)

Author the durable authority (ADR 0019) for the AiConfig reactive-Provider SSOT
and the one-line turn-loaded AGENTS.md read-gate that makes reading it
un-skippable. Absorb learn/agentos/AiConfigModel.md into the ADR (OQ1) and reduce
it to a non-authoritative pointer (net-reduces loaded bytes).

Graduated from Discussion #12453; sub #1 of Epic #12456.

Co-Authored-By: Neo Claude Opus <neo-claude-opus@neomjs.com>

* fix(agentos): ADR 0019 — daemons are A1 not C1; TaskDefinitions is the genuine C1xB5 (#12457)

Fold @neo-opus-4-7's OQ3 V-B-A (dev line-evidence DC_kwDODSospM4BBgm5): the ai/
daemon entrypoints legitimately import Neo/_export/AiConfig, so their path
re-derivation is A1, not a C1 violation; the 'can BREAK things' framing applies to
non-entrypoints only. The single genuine C1xB5 site is TaskDefinitions.mjs (no Neo
import). Retag A1/C1, add the classification note + the A1-with-AiConfig-imported
vs genuine-C1 fan-out tag, refine the SS5.5 sanctioned shape, and carry the
examples/stateProvider/advanced link into SS2.1 (OQ1 residual).

Co-Authored-By: Neo Claude Opus <neo-claude-opus@neomjs.com>
Co-Authored-By: Claude Opus 4.7 <neo-opus-4-7@neomjs.com>

* fix(agentos): preserve public AiConfigModel.md guide + register ADR 0019 in tree.json (#12457)

Operator caught a flaw: learn/agentos/ is public-facing docs (learn/tree.json is its
nav). The OQ1 'absorb -> non-authoritative pointer' wrongly GUTTED the public
AiConfigModel.md configuration-model guide. Restore it fully (now unchanged vs dev) —
the ADR (maintainer-facing: catalog + danger + read-gate) and the guide
(public docs-reader audience) COMPLEMENT each other; neither replaces the other.

Also register the new ADR 0019 in learn/tree.json under Architectural Decision Records
(a new learn/ file must appear in the nav). ADR header refs updated to drop the
absorbed/pointer language.

Co-Authored-By: Neo Claude Opus <neo-claude-opus@neomjs.com>

---------

Co-authored-by: tobiu <tobiasuhlig78@gmail.com>
Co-authored-by: Claude Opus 4.7 <neo-opus-4-7@neomjs.com>"
- 2026-06-04T10:01:09Z @neo-opus-grace cross-referenced by PR #12484
- 2026-06-04T10:11:10Z @neo-opus-grace cross-referenced by PR #12489
- 2026-06-05T19:44:51Z @neo-opus-ada cross-referenced by #154
- 2026-06-06T16:34:50Z @neo-opus-vega cross-referenced by PR #12643
- 2026-06-06T16:47:58Z @neo-opus-ada cross-referenced by #12075
- 2026-06-07T12:18:24Z @neo-opus-ada cross-referenced by PR #12685
- 2026-06-07T20:06:01Z @neo-opus-vega cross-referenced by #12695
- 2026-06-07T21:01:26Z @neo-opus-vega cross-referenced by #12700
- 2026-06-08T21:54:56Z @neo-opus-ada cross-referenced by #9409
- 2026-06-10T09:31:02Z @neo-opus-ada cross-referenced by #12830
- 2026-06-10T15:27:08Z @neo-opus-ada cross-referenced by PR #12844
- 2026-06-10T19:43:11Z @neo-opus-vega cross-referenced by PR #12857
- 2026-06-10T21:44:42Z @neo-opus-grace cross-referenced by PR #12868
- 2026-06-11T01:19:37Z @neo-opus-vega cross-referenced by #12879
- 2026-06-12T02:57:56Z @neo-opus-grace cross-referenced by #12946
- 2026-06-12T09:59:03Z @neo-fable-clio cross-referenced by #12981
- 2026-06-13T01:53:41Z @neo-fable cross-referenced by #143
- 2026-06-13T19:26:34Z @neo-opus-ada cross-referenced by #13125
- 2026-06-13T19:59:21Z @neo-opus-grace cross-referenced by PR #13126
- 2026-06-13T21:12:35Z @neo-opus-ada cross-referenced by #13134
- 2026-06-13T21:16:49Z @neo-opus-ada cross-referenced by PR #13135
- 2026-06-13T21:26:16Z @neo-opus-ada cross-referenced by #13138
- 2026-06-15T03:25:21Z @neo-opus-grace cross-referenced by PR #13293
- 2026-06-15T10:06:41Z @neo-opus-vega cross-referenced by #10777
- 2026-06-15T10:16:42Z @neo-opus-vega cross-referenced by PR #13325
- 2026-06-15T12:47:11Z @neo-opus-vega cross-referenced by PR #13342
- 2026-06-15T18:54:39Z @neo-opus-vega cross-referenced by #13383
- 2026-06-17T10:56:22Z @neo-opus-grace cross-referenced by PR #13450
- 2026-06-17T11:29:29Z @neo-opus-vega cross-referenced by #13453
- 2026-06-17T11:50:53Z @neo-opus-vega cross-referenced by PR #13454
- 2026-06-18T23:36:14Z @neo-opus-vega cross-referenced by #13491
- 2026-06-19T10:10:33Z @neo-opus-vega cross-referenced by #13543
- 2026-06-20T00:57:45Z @neo-opus-vega cross-referenced by PR #13577
- 2026-06-20T04:09:28Z @neo-opus-grace cross-referenced by #13590
- 2026-06-20T04:16:27Z @neo-opus-grace cross-referenced by #13586
- 2026-06-20T13:56:20Z @neo-opus-vega cross-referenced by PR #13625
- 2026-06-20T20:07:00Z @neo-opus-grace cross-referenced by #136
- 2026-06-20T20:21:37Z @neo-opus-vega cross-referenced by PR #13657
- 2026-06-20T21:36:19Z @neo-opus-vega cross-referenced by #13674
- 2026-06-20T22:03:27Z @neo-opus-grace cross-referenced by #13626
- 2026-06-20T22:49:03Z @neo-opus-vega cross-referenced by PR #13608
- 2026-06-20T23:58:02Z @neo-gpt cross-referenced by PR #13684
- 2026-06-21T01:05:54Z @neo-opus-ada cross-referenced by #142
- 2026-06-21T02:38:49Z @neo-opus-vega cross-referenced by #13697
- 2026-06-21T10:56:01Z @neo-opus-vega cross-referenced by #13750
- 2026-06-21T15:23:25Z @neo-opus-vega cross-referenced by PR #13778
- 2026-06-21T16:22:41Z @neo-opus-grace cross-referenced by PR #13783
- 2026-06-21T17:30:31Z @neo-opus-grace cross-referenced by PR #13793
- 2026-06-21T19:02:56Z @neo-opus-grace cross-referenced by PR #13801
- 2026-06-21T21:17:53Z @neo-opus-ada cross-referenced by #13822
- 2026-06-22T01:28:57Z @neo-opus-grace cross-referenced by PR #13841
- 2026-06-22T02:08:03Z @neo-opus-grace cross-referenced by PR #13843
- 2026-06-23T10:28:02Z @neo-opus-grace cross-referenced by PR #13919
- 2026-06-23T15:11:01Z @neo-opus-grace cross-referenced by PR #13929
- 2026-06-26T13:28:46Z @neo-opus-vega cross-referenced by #132
- 2026-06-26T13:45:32Z @neo-opus-grace cross-referenced by PR #14092
- 2026-06-26T14:22:31Z @neo-opus-ada cross-referenced by #14105
- 2026-06-26T14:26:48Z @neo-opus-ada cross-referenced by PR #14107
- 2026-06-26T15:14:48Z @neo-opus-grace cross-referenced by PR #14114
- 2026-06-26T15:58:48Z @neo-opus-grace cross-referenced by PR #14117
- 2026-06-26T16:53:42Z @neo-opus-ada cross-referenced by PR #14120
- 2026-06-26T23:23:02Z @neo-opus-vega cross-referenced by #14039
- 2026-06-26T23:48:50Z @neo-opus-grace cross-referenced by #14171
- 2026-06-26T23:49:42Z @neo-opus-grace cross-referenced by PR #14172
- 2026-06-27T00:25:38Z @tobiu referenced in commit `644643e` - "feat(ai): autonomous freeze re-probe substrate — decider + store + cycle orchestrator (#14171) (#14172)

* feat(ai): freeze re-probe/auto-unfreeze decider — bounded cloud recovery from a frozen collection (#14166)

freeze is the actuator's safe containment for a systemic fault, but in cloud there's no operator to lift it — a TRANSIENT fault that tripped freeze would kill a collection permanently (the #1 weeks-bar risk). decideFreezeReprobe is the pure counterpart: given a frozen collection's durable record + a current health probe + the back-off/thrash bounds + the injected clock, it decides unfreeze (fault cleared → re-heal) / defer (within back-off) / stay-frozen (fault persists) / contained (unfreeze-attempt cap exhausted = persistent fault, ledgered). Safety inversion vs healActionDispatch: the contained-safe state is frozen, so this fails CLOSED to stay-frozen (missing record / non-finite clock / inconclusive probe never auto-unfreezes). Back-off widens the re-probe interval by backoffMultiplier^attempts (anti-thrash). 14 unit tests green. First leaf of the #14166 build; the durable freeze-record store + the re-probe loop wiring follow.

* feat(ai): durable freeze-record store — mutable keyed freeze-state for the re-probe cycle (#14166)

The operational state the freeze re-probe loop reads: a small keyed JSON map ({[collectionName]: {faultFingerprint, frozenAt, unfreezeAttempts, lastProbeAt}}) under .neo-ai-data. upsert (record freeze / bump probe bookkeeping, partial-merge), get, remove (on successful unfreeze + re-heal). Fail-safe: missing/corrupt/non-object → empty set, never crashes the recovery loop. Distinct from the append-only heal-event ledger (#14163 telemetry): this is mutable operational state the decider consumes. 7 unit tests green.

* feat(ai): freeze re-probe cycle orchestrator — compose decider + store over the frozen set (#14166)

runFreezeReprobeCycle ticks across every frozen collection: a cheap pre-decision skips a probe entirely for within-back-off (defer) / capped (contained) / bad-record collections, then probes only the due ones, re-decides with the live probe, and executes via INJECTED operations (probe / unfreezeAndReheal / persistProbe / clearFreeze) — fully testable without a live daemon, mirroring dispatchHeal. Anti-hot-loop: an unfreeze bumps unfreezeAttempts + lastProbeAt BEFORE executing, so a re-freeze keeps the climbing count → eventually contained; a failed unfreeze leaves the record (attempt recorded), a successful one clears it. 22 tests in this spec (14 decider + 8 cycle). Completes the #14166 pure substrate; the live wiring (real probe + unfreeze execution + pipeline tick + freeze-write) is gated on the apply()-cutover landing."
- 2026-06-27T04:19:36Z @neo-opus-vega cross-referenced by #14201
- 2026-06-27T04:51:59Z @neo-opus-grace cross-referenced by #14151
- 2026-06-27T05:24:09Z @neo-opus-vega cross-referenced by PR #14207
- 2026-06-27T05:49:18Z @neo-opus-vega cross-referenced by PR #14189
- 2026-06-27T06:32:08Z @neo-opus-grace cross-referenced by PR #14213
- 2026-06-27T07:36:08Z @neo-opus-vega cross-referenced by PR #14217
- 2026-06-27T11:46:18Z @neo-opus-grace cross-referenced by PR #14229
- 2026-06-27T11:51:29Z @neo-opus-grace referenced in commit `b0351f3` - "fix(ai): config-drift acts via warm-provider reconfigure heal, not record (#14201)

The fire extinguisher #14229 missed. config-drift was emitting actionClass:'record' → straight to the ledger, no heal (the watcher-drift parody @tobiu caught). Per ADR-0025 §2.4 + #14201 AC #1, config-drift must route to the autonomous reconfigure action, recording only when un-resolvable.

The heal already exists and is wired — repairProviderRoleSetResidency (the warm-provider executor) re-applies the drifted provider role-set residency config. So config-drift → CONTAINER_HEALTH_ACTION_CLASSES.warmProvider: the actuator now RE-APPLIES the config (acts); a genuinely un-resolvable warm (unsupported-provider / warmup-failed) exhausts to the alarm-only record terminal. The act-half was a wiring choice, not missing capability.

30/30 orchestrator service specs green. Still owed on #14201: delete the deploy-target 'page' path wholesale (AC #2/#3 — no human to page in cloud). Authored by Grace (Claude Opus 4.8)."
- 2026-06-27T14:24:02Z @neo-opus-ada cross-referenced by PR #14240
- 2026-06-27T16:17:20Z @neo-opus-grace referenced in commit `25e2304` - "fix(ai): config-drift acts via warm-provider reconfigure heal, not record (#14201)

The fire extinguisher #14229 missed. config-drift was emitting actionClass:'record' → straight to the ledger, no heal (the watcher-drift parody @tobiu caught). Per ADR-0025 §2.4 + #14201 AC #1, config-drift must route to the autonomous reconfigure action, recording only when un-resolvable.

The heal already exists and is wired — repairProviderRoleSetResidency (the warm-provider executor) re-applies the drifted provider role-set residency config. So config-drift → CONTAINER_HEALTH_ACTION_CLASSES.warmProvider: the actuator now RE-APPLIES the config (acts); a genuinely un-resolvable warm (unsupported-provider / warmup-failed) exhausts to the alarm-only record terminal. The act-half was a wiring choice, not missing capability.

30/30 orchestrator service specs green. Still owed on #14201: delete the deploy-target 'page' path wholesale (AC #2/#3 — no human to page in cloud). Authored by Grace (Claude Opus 4.8)."
- 2026-06-27T16:33:37Z @tobiu referenced in commit `ba2c423` - "feat(ai): lifecycle escalate→record via heal-event ledger (#14201) (#14229)

* feat(ai): lifecycle escalate→record via heal-event ledger (#14201)

The lifecycle half of the escalate→record cutover (operatorless self-heal, epic #14039 / #14132). Per ADR-0026 AC-6 (amended #14191): an operatorless cloud has no human to page, so record-with-diagnosis (durable async-audit) replaces escalate-with-diagnosis (page).

- RecoveryActuatorService: escalateDiagnosis → recordDiagnosis — appends the diagnosis to the shared heal-event ledger (appendHealEvent, the FIRST writer) instead of paging; gate actionClass 'escalate'→'record'; outcome status 'recorded'; getLedgerStatus maps 'recorded'; new healEventLedgerDir getter; removed the now-dead createDiagnosisPage.
- Producers: ContainerHealthDiagnosisService config-drift + taskOutcomeDiagnosis emit actionClass 'record'.
- recoveryRunStateStore: added 'recorded' to RECOVERY_RUN_STATUSES.
- ProcessSupervisorService: caller updated to recordDiagnosis.

Two-worlds (converged w/ Vega): lifecycle world = actionClass 'record'; data world drops actionClass (#14138). Heal-event first-writer schema: {type, collection, status:'recorded', detail, at}.

Specs follow next (escalateDiagnosis/page assertions → recordDiagnosis/ledger). Authored by Grace (Claude Opus 4.8).

* test(ai): recordDiagnosis specs + reasonCode-ordering fix (#14201)

Updates the orchestrator specs for the escalate→record reshape: RecoveryActuatorService.spec rewrites the two escalateDiagnosis tests as recordDiagnosis tests (page assertions → heal-event-ledger assertions via readHealLedger(service.healEventLedgerDir); status 'recorded'; gate-reject 'diagnosis-not-recordable'); producer/caller specs flip 'escalate'→'record'.

Code fix the specs surfaced: recordDiagnosis reasonCode ordering — outcome reasonCode must prefer the diagnosis's details.reasonCode (authoritative) over the caller-passed reason, mirroring the prior escalateDiagnosis semantics. The test passing reason:'backup-failed' but expecting 'maintenance-task-failure' caught the drift.

Out of scope (unchanged): the deploy-target page path + attempt-cap alarm-only tests (separate recovery path, still 'escalated').

71/71 orchestrator service specs green. Authored by Grace (Claude Opus 4.8).

* fix(ai): config-drift acts via warm-provider reconfigure heal, not record (#14201)

The fire extinguisher #14229 missed. config-drift was emitting actionClass:'record' → straight to the ledger, no heal (the watcher-drift parody @tobiu caught). Per ADR-0025 §2.4 + #14201 AC #1, config-drift must route to the autonomous reconfigure action, recording only when un-resolvable.

The heal already exists and is wired — repairProviderRoleSetResidency (the warm-provider executor) re-applies the drifted provider role-set residency config. So config-drift → CONTAINER_HEALTH_ACTION_CLASSES.warmProvider: the actuator now RE-APPLIES the config (acts); a genuinely un-resolvable warm (unsupported-provider / warmup-failed) exhausts to the alarm-only record terminal. The act-half was a wiring choice, not missing capability.

30/30 orchestrator service specs green. Still owed on #14201: delete the deploy-target 'page' path wholesale (AC #2/#3 — no human to page in cloud). Authored by Grace (Claude Opus 4.8)."
- 2026-06-27T22:37:43Z @neo-opus-vega cross-referenced by PR #14276
- 2026-06-28T12:47:39Z @tobiu referenced in commit `b797895` - "feat(ai): autonomous freeze → auto-unfreeze cycle (#14166) (#14276)

* feat(ai): wire freeze→auto-unfreeze cycle into the orchestrator (#14166)

The recovery counterpart to the freeze terminal: in cloud there is no operator to lift a freeze, so a TRANSIENT embedder fault must not permanently kill a collection (the #1 weeks-bar risk). Wires Grace's built-but-unwired decideFreezeReprobe/runFreezeReprobeCycle + freezeRecordStore CRUD:
- a freeze healOperation that fences (mirrors the quarantine op) + persists a freeze-record via upsertFreezeRecord, so the re-probe cycle has an input;
- runFreezeReprobeCycleIfActive in the poll (sibling to writeSnapshotIfDue): reads freeze-records, re-probes each frozen collection, auto-unfreezes + re-heals a cleared fault, stays frozen on a persisting fault, contains past the thrash cap — all under the back-off, never an operator; no-op when nothing is frozen, never throws into the poll;
- probeFrozenCollectionHealth: a canary embed (the heal path's TextEmbeddingService) that checks embedder-health + dimension-consistency at once; any error fails closed to stay-frozen.
node --check + block-alignment green. The gate-integration spec (freeze→reprobe→unfreeze) is the next commit before the PR.

* refactor(ai): extract freeze→auto-unfreeze into a testable runner + unit spec (#14166)

Extracts the inline freeze op + re-probe runner from the orchestrator into freezeReprobeRunner.mjs (createFreezeHealOperation + runFreezeReprobe) so the wiring is unit-testable against injected fence/unfence/probe collaborators — mirrors createReEmbedMissingHealOperation rather than inline-in-the-daemon. The orchestrator now delegates. freezeReprobeRunner.spec.mjs: the freeze op fences + persists a freeze-record; the runner no-ops when nothing is frozen, auto-unfreezes a cleared fault (lifts the fence + ledgers the unfreeze + clears the record), and stays frozen on a persisting fault. 34/34 freeze specs green. node --check + block-alignment green.

* fix(ai): symmetric store-fence + serialized freeze-record RMW + contained ledgering (#14166)

Addresses @neo-gpt's REQUEST_CHANGES on PR #14276:
- Store-level freeze/unfreeze asymmetry: extract a symmetric createStoreFenceOperations
  pair (fence + unfence both expand via storeFenceTargets) so an auto-unfreeze lifts
  EXACTLY the served set the freeze fenced — never just the record key.
- Freeze-record whole-map RMW race: serialize upsert/remove through one in-process
  promise-chain (the freeze-apply-vs-re-probe interleave the source ticket named).
- Contained recovery-path: ledger the thrash-cap 'contained' transition once (dedup on a
  containedAt marker) so a persistent fault is observable in the heal-ledger surface.

Verification: 39/39 freeze unit specs green (5 new: store-fence symmetry x2, serialized
RMW x2, contained-transition ledger x1). node --check + check-block-alignment clean.

* fix(ai): bounded contained-recovery — re-open a capped freeze after cooldown, never permanently strand (#14166)

Addresses @neo-gpt's cycle-2 re-review (contained recovery AC still open): the thrash cap
was only ledgered, not recovered — a transient fault that flapped past the cap froze forever
(the weeks-bar risk). runFreezeReprobe now re-opens a contained collection after
DEFAULT_CONTAINED_COOLDOWN_MS (6h, overridable): resets the attempt count so it re-enters the
normal probe flow + ledgers a contained-reopen event. A cleared fault auto-unfreezes; a
still-flapping one re-caps — at most one recovery round per cooldown (thrash bounded).

Verification: 41/41 freeze specs green (+2: contained re-opens past cooldown then unfreezes;
stays contained within cooldown). node --check + check-block-alignment clean.

* fix(ai): bound the freeze->unfreeze flap — release to a tombstone so the anti-thrash count survives a re-freeze (#14166)

@neo-gpt's Cycle-3 review proved the freeze<->unfreeze anti-thrash AC was unmet: the decider bumps unfreezeAttempts before unfreezing, but the runner then DELETED the freeze-record (removeFreezeRecord), so a flapping fault (freeze -> healthy-unfreeze -> re-freeze) restarted at attempts=0 every cycle and never reached the contained cap — unbounded thrash (his sim: 5x unfrozen, containedEvents 0).

Fix: on a successful unfreeze, RELEASE the record to a tombstone (unfrozenAt set, fence already lifted) instead of deleting it, so the climbing unfreezeAttempts survives. A re-freeze within the flap window re-activates the tombstone and INHERITS the count, so the loop reaches contained and then the existing cooldown-reopen path; a tombstone untouched past the flap window is garbage-collected and a later fault starts a fresh budget. Tombstones are excluded from the active set, so they are never re-probed.

- freezeRecordStore: unfrozenAt field + set-or-clear field semantics (undefined preserves, null deletes).
- freezeReprobeRunner: release-to-tombstone clearFreeze, flap re-activation in createFreezeHealOperation, stale-tombstone GC, active-set filter, DEFAULT_FLAP_WINDOW_MS (aligned with the contained cooldown).
- freezeReprobeDecision: JSDoc only (the injected clearFreeze now tombstones; decider logic unchanged).
- Regression test drives repeated freeze -> healthy-unfreeze -> re-freeze and proves the loop becomes bounded (3 unfreezes then contained, contained ledgered once), directly refuting the Cycle-3 sim. 50 passed.

* fix(ai): defer the freeze-op store-fence read to heal-time — eager AiConfig.collections read crashed singleton construction (#14166)

The dev merge surfaced a latent construction-time crash: getStoreFenceOperations() reads AiConfig.collections.memory/.session (a reactive leaf resolved via the memory-core config branch, UNSET at singleton construction), and the freeze heal-op wired fence: this.getStoreFenceOperations().fence — so the read fired while building the factory arg in beforeSetDataRecoveryActuatorService, during Neo.setupClass(Orchestrator) on import. Any sibling spec importing the singleton (Orchestrator.spec, invariants, etc.) threw 'Cannot read properties of undefined (reading memory)' → red unit CI.

Fix: make the fence a LAZY closure (fence: args => this.getStoreFenceOperations().fence(args)) so the AiConfig.collections read resolves at HEAL-TIME, mirroring the adjacent quarantine op (reads it inside its async body) and dev's throttle-shed lazy closure — independent of reactive-config set ordering. Orchestrator construction specs pass; freeze unit suite unaffected (it injects the fence directly).

* fix(ai): source served-collection names from the Memory Core config SSOT, not undefined AiConfig.collections (#14166)

@neo-gpt's cycle-4/5 catch: AiConfig.collections is the WRONG source — the top-level AiConfig has no `collections` key, so AiConfig.collections.memory/session dereferences undefined even at heal-time. The prior lazy-fence closure only DEFERRED the bad read past construction; it did not make the production heal path correct.

Fix: both store-level fence fan-outs — the `quarantine` heal op AND getStoreFenceOperations (the freeze/auto-unfreeze pair) — now read memoryCoreConfig.collections.memory/session, the store-name SSOT (already imported on line 25; the same source the store consumers + sibling getters read). Reverted the lazy-closure band-aid back to the eager `this.getStoreFenceOperations().fence` — the correct source resolves at singleton construction (the construction specs prove it).

Regression: a source-level invariant asserts BOTH fan-outs read memoryCoreConfig.collections (>=2 memory + >=2 session) and NO AiConfig.collections remains; a runtime assertion proves getStoreFenceOperations resolves the served names from the SSOT. Orchestrator construction + invariants specs: 25 passed.

* chore(ai): describe the reactive-config pattern instead of citing an ADR in a touched-file comment (#14166)

The CI ticket-archaeology lint (boy-scout — whole touched-file vs base) flags decay-prone tracking refs in comments of any file the PR touches, including pre-existing ones. This PR touches Orchestrator.mjs, so its one grandfathered ADR ref (in the unrelated resolveCloudOnlyEnabled comment) must go — reworded to describe the read-resolved-leaves-at-the-use-site pattern instead of citing the (rot-prone) ADR number."
- 2026-06-29T09:25:20Z @neo-opus-grace cross-referenced by #14322
- 2026-06-29T09:30:48Z @neo-opus-grace cross-referenced by #14312
- 2026-06-29T13:48:04Z @neo-opus-grace cross-referenced by #14310
- 2026-06-29T14:26:38Z @neo-opus-grace cross-referenced by #14352
- 2026-06-29T19:40:50Z @neo-opus-grace cross-referenced by PR #14363
- 2026-07-01T13:16:05Z @neo-opus-grace cross-referenced by PR #14389
- 2026-07-01T13:50:48Z @neo-opus-grace cross-referenced by PR #14393
- 2026-07-01T16:29:28Z @neo-opus-grace cross-referenced by PR #14398
- 2026-07-01T16:56:06Z @neo-opus-grace cross-referenced by PR #14399
- 2026-07-01T17:08:55Z @neo-opus-grace cross-referenced by PR #14401
- 2026-07-01T17:19:14Z @neo-opus-grace cross-referenced by PR #14403
- 2026-07-01T21:49:49Z @neo-opus-grace cross-referenced by PR #14405
- 2026-07-02T02:20:49Z @neo-fable cross-referenced by #124
- 2026-07-02T05:36:49Z @neo-opus-grace cross-referenced by #126
- 2026-07-02T06:27:04Z @neo-opus-grace cross-referenced by PR #14384
- 2026-07-02T09:44:09Z @neo-fable cross-referenced by PR #14458
- 2026-07-02T14:51:04Z @neo-opus-grace cross-referenced by PR #14480
- 2026-07-02T15:37:24Z @neo-fable-clio cross-referenced by #14433
- 2026-07-02T16:32:11Z @neo-opus-grace cross-referenced by #14486
- 2026-07-03T05:09:38Z @neo-opus-grace cross-referenced by PR #14527
- 2026-07-03T05:22:40Z @neo-opus-ada cross-referenced by PR #14528
- 2026-07-04T02:22:50Z @neo-fable cross-referenced by #14603
- 2026-07-04T07:21:47Z @neo-fable cross-referenced by PR #14696
- 2026-07-04T07:39:54Z @neo-opus-grace cross-referenced by PR #14692
- 2026-07-04T09:05:56Z @neo-fable-clio cross-referenced by PR #14717
- 2026-07-04T09:55:18Z @neo-opus-grace cross-referenced by PR #14729
- 2026-07-04T10:39:54Z @tobiu referenced in commit `1abe7b7` - "fix(test): pin capturedAt in handoffRetrospective withhold spec — kill clock-brittle red (#14743) (#14744)

The withhold-render test asserted .not.toContain('1'), a blunt proxy for 'no naked count / no PR-ref leaks'. But render() defaulted capturedAt to new Date(), and the header 'Captured at: YYYY-MM-DD HH:MM UTC' line carries the wall-clock hour — which contains '1' for the entire 10:00-19:59 UTC block, failing the test every run in that window and reddening every open PR's unit gate.

The render is correct (the withhold path omits all counts/refs). Fix is test-only: pin capturedAt to the spec's fixed NOW (deterministic render, no new Date() dependency) and replace the bare-digit assertion with contract-precise ones (no 'Merged PRs:' count line, no 'PR #1' ref). 6/6 green, verified inside the previously-failing 10:xx UTC window."
- 2026-07-04T12:21:42Z @neo-opus-ada cross-referenced by PR #14732
- 2026-07-04T12:33:43Z @neo-fable cross-referenced by #8
- 2026-07-04T12:51:47Z @neo-opus-grace cross-referenced by PR #14730
- 2026-07-04T15:06:47Z @neo-opus-ada cross-referenced by PR #14804
- 2026-07-09T23:01:59Z @neo-fable cross-referenced by PR #14904
- 2026-07-10T00:35:03Z @neo-fable cross-referenced by #14908
- 2026-07-10T02:59:08Z @neo-opus-grace cross-referenced by #14911
- 2026-07-10T03:28:16Z @neo-fable cross-referenced by PR #14922
- 2026-07-10T23:19:36Z @neo-fable cross-referenced by PR #14997
- 2026-07-12T09:15:31Z @neo-opus-ada cross-referenced by PR #15085
- 2026-07-12T10:39:31Z @neo-opus-grace cross-referenced by #15087
- 2026-07-12T11:01:36Z @neo-opus-vega cross-referenced by PR #15071
- 2026-07-12T18:17:40Z @neo-opus-ada cross-referenced by PR #15103
- 2026-07-12T18:48:24Z @neo-opus-ada cross-referenced by PR #15102
- 2026-07-12T19:10:18Z @neo-opus-ada cross-referenced by PR #15104
- 2026-07-12T21:27:36Z @neo-opus-ada cross-referenced by PR #15096
- 2026-07-13T23:57:47Z @neo-opus-grace cross-referenced by PR #15140
- 2026-07-16T07:33:55Z @neo-opus-grace cross-referenced by PR #15210
- 2026-07-16T08:42:45Z @neo-opus-grace cross-referenced by #14800
- 2026-07-16T08:55:39Z @neo-opus-grace cross-referenced by #15233
- 2026-07-16T19:21:31Z @neo-opus-ada cross-referenced by PR #15295
- 2026-07-20T13:00:17Z @neo-opus-vega cross-referenced by PR #15601
- 2026-07-20T17:44:29Z @neo-kimi-iris cross-referenced by #152
- 2026-07-24T09:21:08Z @neo-opus-vega cross-referenced by #15783
- 2026-07-24T14:15:35Z @neo-fable-clio cross-referenced by PR #15811
- 2026-07-24T19:49:31Z @neo-kimi-iris cross-referenced by PR #15832
- 2026-07-24T20:01:17Z @neo-kimi-iris cross-referenced by PR #15829
- 2026-07-24T20:05:34Z @neo-kimi-iris cross-referenced by PR #15827
- 2026-07-24T20:23:35Z @neo-kimi-iris cross-referenced by PR #15824
- 2026-07-24T20:28:56Z @neo-kimi-iris cross-referenced by PR #15844
- 2026-07-24T20:40:07Z @neo-kimi-iris cross-referenced by PR #15846
- 2026-07-24T21:16:46Z @neo-opus-grace cross-referenced by PR #15857
- 2026-07-24T21:18:27Z @neo-kimi-iris cross-referenced by PR #15853
- 2026-07-24T21:48:47Z @neo-kimi-iris cross-referenced by PR #15860
- 2026-07-24T21:53:22Z @neo-kimi-iris cross-referenced by PR #15864
- 2026-07-24T22:11:20Z @neo-kimi-iris cross-referenced by PR #15865
- 2026-07-24T22:26:27Z @neo-opus-ada cross-referenced by PR #15869
- 2026-07-24T23:52:23Z @neo-kimi-iris cross-referenced by PR #15883
- 2026-07-25T00:06:27Z @neo-opus-ada cross-referenced by #15886
- 2026-07-25T00:08:21Z @neo-opus-ada cross-referenced by #89
- 2026-07-25T20:59:45Z @neo-opus-grace cross-referenced by #15800
- 2026-07-26T16:48:45Z @neo-opus-grace cross-referenced by #121
- 2026-07-26T23:14:46Z @neo-opus-vega cross-referenced by #16025
- 2026-07-26T23:14:47Z @neo-opus-vega cross-referenced by #15996
- 2026-07-26T23:14:48Z @neo-opus-vega cross-referenced by #15504
- 2026-07-26T23:14:49Z @neo-opus-vega cross-referenced by #112
- 2026-07-26T23:14:50Z @neo-opus-vega cross-referenced by #147
- 2026-07-26T23:14:51Z @neo-opus-vega cross-referenced by #139
- 2026-07-28T11:14:32Z @neo-opus-vega cross-referenced by PR #16085
- 2026-08-01T10:36:59Z @neo-opus-vega cross-referenced by #84
- 2026-08-01T11:07:34Z @neo-opus-vega cross-referenced by #16208
- 2026-08-02T20:01:26Z @neo-opus-ada cross-referenced by PR #16396
- 2026-08-02T21:48:31Z @neo-opus-vega cross-referenced by #16411
- 2026-08-03T00:51:54Z @neo-opus-vega cross-referenced by #16382
- 2026-08-03T10:30:56Z @neo-fable cross-referenced by #16425
- 2026-08-03T10:43:19Z @neo-opus-vega cross-referenced by PR #16433
- 2026-08-03T11:56:48Z @tobiu referenced in commit `e629404` - "fix(hooks): let the your-call citation exemption name the authority it cites (#16411) (#16433)

* fix(hooks): let the your-call citation exemption name the authority it cites (#16411)

The exemption was adjacency-anchored, so `/\bper\s+$/` matched only the
citation-FREE `per your call` and fired on the form the repo mandates. Naming
the gate is the accurate way to hand a merge over, so satisfying
§critical_gates #1 and passing the detector were in tension - and the tension
resolved the wrong way: the honest phrasing tripped while the phrasing that
passed cited nothing. Live instance: PR #16397 reported merge-eligible
2026-08-02.

The citation window may now contain the cited authority - a bounded ALLOWLIST
of citation tokens, copular connectives, punctuation and whitespace between the
anchor and the phrase. Not a wildcard: `per`-anywhere-in-80-characters would
exempt the genuine slip this detector exists to catch, and that over-correction
is pinned by a spec rather than avoided by intent - widening the bridge to
`[\s\S]*` reddens the new guard AND a pre-existing regression test. Whitespace
alone has to bridge because `stripMarkdownCode` already replaced a backticked
citation with a space.

The anchor matches RIGHTMOST so `per your call, but honestly, your call?` is
judged on the nearest anchor and the trailing deferential use still fires;
leftmost reddens the `as you said, per gate #1` case.

Audited `isReportedMentionContext` per the ticket: it carries the same
adjacency defect - `the phrase your call` is exempt but `the deference phrase,
your call, fired` fires, which is the shape DEFERENCE_REMINDER asks an agent to
write when reporting a false positive. Left unchanged: the ticket conditions any
change there on a transcript-observed phrasing, and inventing one to justify the
change is what that AC forbids. Recorded on the ticket with the probe evidence.

No DEFERENCE_PHRASES entry added or removed; no new exemption category.
263 passed across test/playwright/unit/hooks/.

* fix(hooks): kill exponential backtracking in the citation bridge (#16411)

CodeQL alert 119 on this PR: the bridge was one starred alternation whose
alternatives are AMBIGUOUS - a digit run can be partitioned between `\d+` and
`#\d+` in exponentially many ways, so a failing match re-partitions every way.

Measured, not assumed. Old pattern against N digits plus one failing char:
18->12ms, 22->19ms, 24->80ms, 26->360ms - about x4.5 per two digits. The prefix
window is 80 characters, so a ~60-digit run sits well inside reach and would
hang the Stop hook rather than merely slow it. The finding was reachable, not
theoretical.

Replaced the starred alternation with split-then-check: each token matches one
anchored pattern with no outer quantifier, which is linear by construction. The
separator set is the one that used to live inside the alternation, so the
accepted language is unchanged - 263 specs across test/playwright/unit/hooks/
still pass, including both #16411 guards and the pre-existing regression tests.
New pattern at 1000/5000/20000 digits: 1.2ms/0.2ms/0.1ms, flat.

A starred alternation was the wrong instrument for an allowlist. Tokenising says
what it means and cannot backtrack."
- 2026-08-04T00:33:32Z @neo-opus-grace referenced in commit `ee45ca3` - "fix(lint): vocabulary annotates the retry gate, it no longer admits to it (#16443)

@neo-gpt-emmy's falsification holds and I am conceding it rather than defending the
partition. The measurement I built that argument on was real; only the conclusion was wrong.

A full-tree run produces candidates that are overwhelmingly NOT retries — Euclidean
distances, cubic easing, `1000 ** i`. I read that as "do not gate them", because a registry
row saying "Euclidean distance is not a retry" records nothing worth reading. What the
measurement actually supports is that those rows are low-VALUE, not that they are optional.
They are paid once. The hole they leave is permanent, and it sits exactly where the
highest-value misses live: `isRetryContext({file: 'src/time/Clock.mjs', symbol: 'schedule',
line: 'const d = base * 2 ** n;'})` returns false, so a real backoff under neutral names
printed one more line in a census nobody reads and the build stayed green.

A census on stdout is not a gate. That was the whole of her objection and it is correct.

RA1 — admission boundary. `diffRegistry` gates every scoped candidate. `isRetryContext` is
retained and now orders the failure report so plausible retries are read before geometry,
which is the role she explicitly left open for it. Cost: 24 `not-a-retry` rows, each with a
witness naming what the expression IS — squared coordinate delta, cubic ease-out on 0..1
progress, SI byte magnitude — so the false-positive family stays recorded rather than
suppressed by a regex nobody can audit.

RA2 — occurrence multiplicity. `PATTERNS.find` answered "does this line contain a growth
expression", which is a different question from "which ones does it contain". A Euclidean
distance holds two and produced one obligation; the second was absorbed with nothing
recording that a site had been merged away. `findGrowthMatches` now returns every match in
source order, de-duplicated by start index so two patterns describing one token
(`Math.pow(a ** b)`) do not double-count it.

The fingerprint stays keyed on the whole stripped LINE rather than the matched substring,
deliberately: re-basing it would have rotated all 16 existing keys and forced a full
re-baseline — precisely the moment a real regression slips through. All 16 survive unchanged;
the new rows are additions.

RA3 — already closed at 65ce1d9eae, which her review predates. Verified by running her exact
falsifier: `unresolvedWitnessPaths('k', 'ai/agent/Loop.mjs#definitelyMissingSymbol')` now
returns "the cited proof does not resolve."

RA4 — truth-fold. Top-of-file JSDoc gains a section stating what admits versus what
annotates; the "Known false-negative" paragraph is withdrawn and replaced with the residual
that is actually still true (the discovery PATTERNS, not the vocabulary); the key-shape
paragraph now documents the `#<n>` ordinal; the superseded test rationale is rewritten to
record the argument I lost rather than deleted.

MUTATION-PROVEN, not asserted:

  unclassified filter regains `c.retryContext &&`    1 failed, 18 passed
    only the neutral-vocabulary control goes red — it is the sole discriminator

  findGrowthMatches truncated to `.slice(0, 1)`      3 failed, 16 passed
    the multi-match control, plus two live-tree tests as the `#1` rows go stale;
    the collapse is caught three independent ways

Live gate: 40 candidates, all classified, exit 0 (was 16 gated + 16 printed).
Spec: 19 passed.

Refs #16443"
- 2026-08-04T07:59:48Z @tobiu referenced in commit `af8a5d5` - "feat(lint): classify every retry-growth site's bound instead of proving it (#16443) (#16444)

* feat(lint): classify every retry-growth site's bound instead of proving it (#16443)

The operator asked for a standing rule — backoff times must not grow
indefinitely. The rule already holds: all 16 retry-growth sites on `dev` are
bounded. What does not exist is any way to KNOW that without reading each site's
caller, and the bound lives in four structurally different places.

The cost of that is measured, not asserted: I ran the census by hand three times
and got it wrong every time. Five sites (literal base-2 only), then nine, then
sixteen — each miss a whole syntax family (`backoff *= 2`, `Math.pow(configurable,
n)`). I let the regex, not the problem, define the population, and on the first
pass concluded "nothing to fix" from an incomplete set.

So this discovers candidates and requires an explicit classification per site. It
does not attempt to prove boundedness.

- `lint-retry-bounds.mjs` — discovery over ai/, src/, apps/, buildScripts/ for
  three growth syntaxes, diffed against the registry. Drift fails in BOTH
  directions: an unregistered candidate, or an entry whose site is gone.
- `retry-bound-registry.json` — 30 entries: 16 retry-growth, 14 not-a-retry. Each
  declares a witness; retry-growth entries also declare lifetime (in-cycle /
  process-local / persisted) and bound carrier (max-delay / max-attempts /
  max-window / terminal-state). All four carriers have a real instance, so the
  schema is not aspirational.

An unregistered match reports UNCLASSIFIED, never "unbounded" — the verdict
vocabulary cannot express the latter, and a spec asserts that. The non-retry
family (easing curves, physics, power-law random) is LARGER than the retry
family, so a fail-on-match gate would train contributors to add suppressions,
which is how the invariant actually dies.

Two heuristics rejected after they failed on real code:
- "returned vs consumed" — `message/drainCycle` returns a raw exponential and is
  correctly bounded by its caller's loop. It was my first rule and it false-
  positives on its first run; it now has a spec pinning that exact case.
- path/filename exclusion for the canvas family — that would hide the examined
  set behind a regex nobody audits, and would swallow a future retry site landing
  in an excluded path. Non-retry matches are classified with witnesses instead.

Discovery-layer fixes found by running it: string and multi-line template-literal
contents are blanked before matching, because markdown `**bold**` inside prompts
and rendered reports matched the exponent pattern — 20 of the first 50 hits were
prose. That is a discovery defect, not a family worth classifying.

Sites key on `<relPath>#<enclosingSymbol>`, not line numbers: a line-keyed
registry re-baselines on every unrelated edit above a site, and the re-baseline is
exactly where a real regression slips through.

Red-proofed end to end: a synthetic growth site makes the gate exit 1 naming it
`unclassified`; removing it returns exit 0.

Evidence: 13 new specs; 247 passed across the lint spec directory.

* wip(lint): RA-1/RA-3 partial repair — substitutions preserved, CI wired (#16443)

Emmy's PR #16444 review, partial. NOT ready for re-review: the registry is
now stale against the widened discovery, so the gate fails by design.

- stripLiterals preserves `${...}` substitutions (executable code) with brace-
  depth tracking; blanking them missed the live site at FileUpload.mjs:932.
- keys carry an expression fingerprint so a second growth expression inside an
  already-registered symbol cannot inherit its classification.
- `#private` methods no longer collapse to `<module>`.
- CI workflow added with path coverage across EVERY scan root; a narrower
  filter leaves a root where a new retry site never fires the gate.

REMAINING before re-review: re-seed retry-bound-registry.json against the
widened census (keys changed shape); implement witness RESOLUTION not presence;
correct "13 specs" to 11; reconcile #16443's stale nine-site census.

* fix(lint): the retry-bound gate discriminates retries from geometry (#16443)

The gate discovered growth SYNTAX, not retry growth, and those are different
populations. A full-tree run produced 62 candidates: 34 outside `ai/`, of which
3 were retries. The rest were Euclidean distance `(x2 - x1) ** 2`, easing curves
`Math.pow(1 - progress, 3)` and byte formatting `1000 ** i`. A gate that asks a
canvas physics loop to declare its backoff cap is one developers route around.

Adds a retry-vocabulary discriminator over three surfaces — enclosing symbol,
expression line, filename — any one sufficient, because a retry can be named at
any of them. 62 candidates -> 16, every one a genuine backoff site.

The first draft of that discriminator used `\b`-delimited words and silently
dropped `tenantRepoSync#isRepoDue` — the exact site whose unbounded backoff drove
#16224 — because `\bconsecutive\b` does not match `consecutiveFailures`.
camelCase is the dominant identifier style here, so word-boundary anchoring fails
precisely on the highest-value sites, and it fails by omission. Now substring
matching, with a regression test naming the four sites that must stay discovered.

Also closes Emmy's remaining review actions:

- Witness RESOLUTION, not presence: a witness naming a deleted spec read exactly
  like one naming a live spec. Repo-relative paths in a witness must now exist.
  Deliberately limited to paths — symbols and clamps still rest on review, and
  claiming more would be its own unwitnessed assertion.
- Registry re-seeded onto the fingerprinted key shape. All 16 `retry-growth`
  witnesses ported with no classification lost; the 14 `not-a-retry` rows are
  dropped because their sites are no longer discovered, and the class-level
  rationale now lives in the discriminator's JSDoc where it cannot rot per-row.
- Four keys moved `<module>` -> `#getRetryDelay` as the private-method symbol
  resolution from the previous commit takes effect.

Supersedes the spec asserting non-retries are recorded rather than filtered: the
exclusion is semantic, not a path rule, and that property is now asserted
directly rather than argued.

Co-Authored-By: Grace <neo-claude-opus@neomjs.com>

* fix(lint): partition the retry gate instead of excluding from it (#16443)

@neo-gpt-emmy's three carried RAs. The first changes the design back toward hers.

PARTITION, NOT EXCLUSION. The previous commit `return`ed on non-retry-vocabulary
candidates, which made a neutral-vocabulary retry — `schedule() { const d = base * 2 ** n }`
— silently invisible: the gate went green with fewer candidates and nothing said why.
Her falsifier stands and my rationale did not survive it. Every growth expression is
now discovered and reported; `retryContext` decides only whether classification is
REQUIRED. A census of ungated expressions prints on every run, pass or fail, so the
record of what was examined survives while the registry stays free of geometry rows.
Completeness and signal stop competing.

OCCURRENCE ORDINAL. Two identical expressions in one symbol share a fingerprint by
construction, so the second collapsed onto the first and `diffRegistry`'s Set reported
no drift for a site nobody had classified.

WITNESS SYMBOL RESOLUTION. Path existence was not enough: an existing file plus a
symbol that is not in it passed, which is exactly the shape a renamed guard leaves.
It found a real one on the first run — the message-drain entry cited
`#drainMessageWalRecords`, which does not exist; the retry loop lives in
`#processMessageBatch`. That witness had been asserting a bound nobody could check.

16 retry-context candidates, all classified; 16 reported ungated. 14/14 specs.

Refs #16443

Co-Authored-By: Grace <neo-claude-opus@neomjs.com>

* fix(lint): vocabulary annotates the retry gate, it no longer admits to it (#16443)

@neo-gpt-emmy's falsification holds and I am conceding it rather than defending the
partition. The measurement I built that argument on was real; only the conclusion was wrong.

A full-tree run produces candidates that are overwhelmingly NOT retries — Euclidean
distances, cubic easing, `1000 ** i`. I read that as "do not gate them", because a registry
row saying "Euclidean distance is not a retry" records nothing worth reading. What the
measurement actually supports is that those rows are low-VALUE, not that they are optional.
They are paid once. The hole they leave is permanent, and it sits exactly where the
highest-value misses live: `isRetryContext({file: 'src/time/Clock.mjs', symbol: 'schedule',
line: 'const d = base * 2 ** n;'})` returns false, so a real backoff under neutral names
printed one more line in a census nobody reads and the build stayed green.

A census on stdout is not a gate. That was the whole of her objection and it is correct.

RA1 — admission boundary. `diffRegistry` gates every scoped candidate. `isRetryContext` is
retained and now orders the failure report so plausible retries are read before geometry,
which is the role she explicitly left open for it. Cost: 24 `not-a-retry` rows, each with a
witness naming what the expression IS — squared coordinate delta, cubic ease-out on 0..1
progress, SI byte magnitude — so the false-positive family stays recorded rather than
suppressed by a regex nobody can audit.

RA2 — occurrence multiplicity. `PATTERNS.find` answered "does this line contain a growth
expression", which is a different question from "which ones does it contain". A Euclidean
distance holds two and produced one obligation; the second was absorbed with nothing
recording that a site had been merged away. `findGrowthMatches` now returns every match in
source order, de-duplicated by start index so two patterns describing one token
(`Math.pow(a ** b)`) do not double-count it.

The fingerprint stays keyed on the whole stripped LINE rather than the matched substring,
deliberately: re-basing it would have rotated all 16 existing keys and forced a full
re-baseline — precisely the moment a real regression slips through. All 16 survive unchanged;
the new rows are additions.

RA3 — already closed at 65ce1d9eae, which her review predates. Verified by running her exact
falsifier: `unresolvedWitnessPaths('k', 'ai/agent/Loop.mjs#definitelyMissingSymbol')` now
returns "the cited proof does not resolve."

RA4 — truth-fold. Top-of-file JSDoc gains a section stating what admits versus what
annotates; the "Known false-negative" paragraph is withdrawn and replaced with the residual
that is actually still true (the discovery PATTERNS, not the vocabulary); the key-shape
paragraph now documents the `#<n>` ordinal; the superseded test rationale is rewritten to
record the argument I lost rather than deleted.

MUTATION-PROVEN, not asserted:

  unclassified filter regains `c.retryContext &&`    1 failed, 18 passed
    only the neutral-vocabulary control goes red — it is the sole discriminator

  findGrowthMatches truncated to `.slice(0, 1)`      3 failed, 16 passed
    the multi-match control, plus two live-tree tests as the `#1` rows go stale;
    the collapse is caught three independent ways

Live gate: 40 candidates, all classified, exit 0 (was 16 gated + 16 printed).
Spec: 19 passed.

Refs #16443

* docs(lint): the scanner escape is masking a stripLiterals defect, measured (#16443)

@neo-gpt-emmy set a two-item closure boundary: close the continuation-line scanner
escape with an end-to-end discoverCandidates fixture, no further semantic expansion.

I tried the prescribed fix and it does not hold. Removing `if (wasOpen) return`
immediately surfaces ai/demo-agents/dev.mjs:258 as a candidate whose match is
`**AI Generated PR**` — markdown bold inside literal text, which is precisely what
stripLiterals exists to blank, and which this suite already has a test for.

Traced from the file start rather than guessed: the template opened at dev.mjs:118 is
never seen to close, so by line 258 the scanner still believes it is inside a template.
`stripLiterals(line, true)` then reads 258's OPENING backtick as a CLOSE and emits the
whole literal as code. findGrowthMatches finds `exponent` at index 49 — the markdown.

So the return is masking two things: the escape Emmy named, and a stripLiterals
multi-line state-tracking defect. Lifting it trades a known false negative for a false
positive, which is the worse of the two — a gate that cries wolf gets routed around, and
this registry's whole premise is that the false-positive family is larger than the true
one.

Retained with the measurement recorded at the site instead of a silent skip. The real
repair is multi-line template state tracking, which is outside the boundary set here and
should be argued rather than smuggled in under a closure item.

Not claiming the escape is closed. It is not.

lint: 40 candidates, all classified, exit 0
spec: 19 passed

Refs #16443"
- 2026-08-04T20:58:43Z @neo-opus-vega cross-referenced by #16206
- 2026-08-08T12:26:22Z @neo-fable cross-referenced by #16682
- 2026-08-08T13:05:21Z @neo-opus-vega cross-referenced by PR #16663
- 2026-08-10T09:47:55Z @neo-opus-vega cross-referenced by PR #16864
- 2026-08-10T10:13:18Z @neo-opus-vega cross-referenced by PR #16873
- 2026-08-10T21:07:15Z @neo-opus-vega cross-referenced by PR #16922
- 2026-08-11T02:33:50Z @neo-opus-ada cross-referenced by PR #16947
- 2026-08-11T23:22:33Z @neo-opus-vega cross-referenced by #78
- 2026-08-13T20:32:51Z @neo-opus-vega cross-referenced by PR #17050
- 2026-08-14T00:36:49Z @neo-opus-ada cross-referenced by PR #17086
- 2026-08-14T01:19:08Z @neo-opus-ada cross-referenced by PR #17088
- 2026-08-14T06:35:58Z @neo-opus-grace cross-referenced by PR #17091
- 2026-08-15T11:47:06Z @neo-opus-vega referenced in commit `386fe4d` - "fix(ai): accept legacy node IDs, close the grammar in both directions, and make presence invoke parsing (#17142)

Four defects found by @neo-gpt's exact-head audit, all reproduced by direct
execution before repair. Exact-head CI was 20/20 green and covered none of them.

The regression first, because it is the worst of the four. `NODE_ID_PATTERN`
rejected a live, currently resolvable GitHub id: issue #1's comment is
`MDEyOklzc3VlQ29tbWVudDU1NzAwNzEyNg==`, which `node(id:)` still resolves. The
old strict equality accepted that form because it never parsed at all — it
compared. So a change whose whole premise is "stop failing silently" broke the
one spelling that already worked. Legacy ids are now admitted by DECODING and
requiring the payload to match `NN:TypeNameNNN`, with a round-trip guard, rather
than by pattern-matching base64 — "looks base64" would readmit arbitrary junk.

The grammar was also open in the other direction: `evilcomment-123` became
numeric 123, and `not_an_id` / `bogus_123` became node selectors, then degraded
to well-formed-but-absent — recreating the silent-empty defect through the
parser meant to remove it. The anchor prefix is now a closed set, and the node
pattern requires an UPPERCASE type prefix.

A length floor was tried alongside the case rule and removed. It rejected no
real id, closed nothing the case rule does not already close, and only broke
short fixtures. A guard should be the property that discriminates, not that
property plus a plausible-looking companion.

Presence now invokes parsing. All three services branched on `if (comment_id)`,
so an empty string skipped the selector path entirely and answered a blank
address with the full unscoped conversation, body included. `isSelectorPresent`
tests presence; parsing decides validity.

Public surfaces caught up with the shipped behavior: the discussion
`comment_id` / `since_comment_id` descriptions still claimed global-node-only
and body-returned, `last_n` was silent on scoping, `bodyOmitted` appeared in no
response schema, and PullRequestService's JSDoc still documented the resolved
invalid/absent ambiguity as live.

Service-level wiring arms added for issue and PR — comment_id across all four
spellings, malformed-vs-absent, the empty-string case, and since_comment_id —
which previously existed only for the pure helper and the discussion path.

Both new selector arms are red-proved: restoring the open grammar fails the
near-miss arm, and removing legacy support fails the regression arm. Production
restored byte-identical after each.

Co-Authored-By: Tobias Uhlig <tobias.uhlig@icloud.com>"
- 2026-08-15T11:47:54Z @neo-opus-vega cross-referenced by PR #17166
- 2026-08-15T12:54:51Z @tobiu referenced in commit `5ad5724` - "fix(ai): comment_id accepts the spelling a peer actually holds, and a scoped fetch stops paying for the thread head (#17142) (#17166)

* fix(ai): comment_id accepts the spelling a peer actually holds, and a scoped fetch stops paying for the thread head (#17142)

`get_conversation` and `get_discussion_conversation` accept `comment_id` so a
hand-off can be cheap — "read issuecomment-5301580683" instead of "read the
thread". Two defects made it unusable, and both were measured against live
threads rather than inferred.

The id a peer HAS is almost never the GraphQL node ID: it is the anchor at the
end of a pasted URL, the URL itself, or the bare number. Only the node ID
matched, and the other spellings did not error — they filtered every comment
away and returned an empty list, which reads as "this comment has nothing"
rather than "you addressed it wrong". The caller's next move was to re-fetch the
whole thread, which is exactly the cost the parameter exists to avoid.

`shared/commentSelector.mjs` now resolves all four spellings to a matcher and
reports an unrecognised shape as MALFORMED_COMMENT_ID. Malformed and absent stay
distinguishable: "not an id" and "not in this thread" are different answers and
a caller acts differently on each. Matching on the numeric arm needs
`databaseId`, so the three conversation queries now select it.

A URL that is not a comment link is malformed rather than an opaque node ID.
Admitting it would turn a caller's wrong link back into a silent empty result —
the defect being removed.

Second defect: the parent body came back on every call, including a scoped one.
Fetching one 2KB comment out of a 26KB discussion cost the same as reading the
head, so the cheapest correct usage carried the most expensive payload. Scoped
requests now omit it and set `bodyOmitted: true` — a consumer must be able to
tell "scoped away" from "this thread has an empty body". Unscoped calls are
unchanged, so nothing that reads the head today has to move.

An existing DiscussionService assertion required `body` on a scoped request and
now asserts its absence. That spec was encoding the defect, so the change is the
point rather than a casualty of it.

Co-Authored-By: Tobias Uhlig <tobias.uhlig@icloud.com>

* fix(ai): accept legacy node IDs, close the grammar in both directions, and make presence invoke parsing (#17142)

Four defects found by @neo-gpt's exact-head audit, all reproduced by direct
execution before repair. Exact-head CI was 20/20 green and covered none of them.

The regression first, because it is the worst of the four. `NODE_ID_PATTERN`
rejected a live, currently resolvable GitHub id: issue #1's comment is
`MDEyOklzc3VlQ29tbWVudDU1NzAwNzEyNg==`, which `node(id:)` still resolves. The
old strict equality accepted that form because it never parsed at all — it
compared. So a change whose whole premise is "stop failing silently" broke the
one spelling that already worked. Legacy ids are now admitted by DECODING and
requiring the payload to match `NN:TypeNameNNN`, with a round-trip guard, rather
than by pattern-matching base64 — "looks base64" would readmit arbitrary junk.

The grammar was also open in the other direction: `evilcomment-123` became
numeric 123, and `not_an_id` / `bogus_123` became node selectors, then degraded
to well-formed-but-absent — recreating the silent-empty defect through the
parser meant to remove it. The anchor prefix is now a closed set, and the node
pattern requires an UPPERCASE type prefix.

A length floor was tried alongside the case rule and removed. It rejected no
real id, closed nothing the case rule does not already close, and only broke
short fixtures. A guard should be the property that discriminates, not that
property plus a plausible-looking companion.

Presence now invokes parsing. All three services branched on `if (comment_id)`,
so an empty string skipped the selector path entirely and answered a blank
address with the full unscoped conversation, body included. `isSelectorPresent`
tests presence; parsing decides validity.

Public surfaces caught up with the shipped behavior: the discussion
`comment_id` / `since_comment_id` descriptions still claimed global-node-only
and body-returned, `last_n` was silent on scoping, `bodyOmitted` appeared in no
response schema, and PullRequestService's JSDoc still documented the resolved
invalid/absent ambiguity as live.

Service-level wiring arms added for issue and PR — comment_id across all four
spellings, malformed-vs-absent, the empty-string case, and since_comment_id —
which previously existed only for the pure helper and the discussion path.

Both new selector arms are red-proved: restoring the open grammar fails the
near-miss arm, and removing legacy support fails the regression arm. Production
restored byte-identical after each.

Co-Authored-By: Tobias Uhlig <tobias.uhlig@icloud.com>

* fix(ai): a comment URL must be a GitHub one — host and scheme checked, not just the suffix (#17142)

Found by @neo-gpt on the repaired head, and it is the same defect class as the
one that head fixed, one level further out.

The anchor pattern was `(?:^|#)…comment-(\d+)$`. Closing `[a-z]*comment` to a
closed set fixed the anchor's OWN prefix and left the whole string's prefix
open: only the suffix was ever checked, so any origin wearing a valid anchor
became a valid selector.

  https://example.invalid/phish#issuecomment-557007126  → numeric 557007126
  ftp://example.invalid/#discussioncomment-18022679     → numeric 18022679
  not-a-url#issuecomment-557007126                      → numeric 557007126

Each of those then matches whatever comment carries that databaseId in the
fetched thread, so a hostile or mistyped address silently returns a real
comment. The accepted forms name a GitHub comment URL; "any string ending in a
comment anchor" was never the contract.

The grammar is now split rather than widened. A bare anchor must be the whole
string. Anything carrying URL syntax is decided entirely by a URL branch that
parses with `new URL` — so the host is a checked field rather than text that
happens to precede a `#` — and requires an http/https GitHub origin plus a
closed comment fragment. A URL-shaped value that fails any clause is rejected
outright instead of falling through to be read as an opaque node ID.

Negative arms cover foreign host, foreign scheme on a foreign host, foreign
scheme on the GitHub host, a garbage prefix wearing a valid anchor, a lookalike
host (`github.com.evil.test`), and a GitHub URL with no comment fragment.
Positive arms keep http, https and the `www` host resolving.

Red-proved: restoring the suffix-only anchor fails the URL arm. Production
restored byte-identical.

Not addressed, and deliberately: a decoded Repository legacy ID also parses as a
generic node ID. @neo-gpt raised it and explicitly did not block, because the
current-node branch treats GitHub-owned node vocabulary as syntactically
well-formed and lets thread matching decide absence. Narrowing it would mean
teaching this module GitHub's type taxonomy, which is the coupling the opaque
treatment exists to avoid.

Co-Authored-By: Tobias Uhlig <tobias.uhlig@icloud.com>

---------

Co-authored-by: Tobias Uhlig <tobias.uhlig@icloud.com>"
- 2026-08-16T03:12:16Z @neo-opus-grace cross-referenced by #34
- 2026-08-16T22:44:07Z @neo-kimi-iris cross-referenced by PR #17262
- 2026-08-17T07:11:17Z @neo-opus-grace cross-referenced by PR #17253
- 2026-08-17T07:38:44Z @neo-opus-ada cross-referenced by #17274
- 2026-08-17T07:39:29Z @neo-opus-ada referenced in commit `2809bc8` - "fix(build): the package gate stops inheriting the blind spot it exists to end (#17274)

Challenge A. The DevIndex rule was pinned to `apps/devindex/resources/data/` --
the same shape as defect #1, which went vacuous when the corpus moved. Rename
`data/` -> `corpus/` and the .npmignore line and the gate fall silent TOGETHER,
so the check prints OK over a 26.5 MiB leak. Re-anchored on `resources/` with
`images/` allowed, matching the .neo-ai-data rule: a subtree that does not exist
yet is excluded by default.

Challenge B. The rule set names directories and the two generated portal files
are excluded only by .npmignore. That is a boundary, not a gap -- every prefix
here names a tree whose leak is a DISCLOSURE, while sitemap.xml and llms.txt are
already public on neomjs.com, so shipping them is waste. Stated in the docstring
and asserted, so a later file-shaped rule has to change a test and say why.

Challenge C. parsePackOutput required a newline before the payload, so output
beginning at offset 0 -- what happens the moment `prepare` stops writing to
stdout -- threw "no JSON array found" over output that had one. Safe direction,
never a false pass, but a guard that breaks on a cleaner environment gets
distrusted. Also: the doc said "last top-level array" while the code took the
first. They now agree on the first.

Raised by @neo-opus-grace on review of PR #17253, with the resources/ child
inventory measured and every existing spec case checked against the new rule.
Her approval and the merge both landed before the disposition, so this is a
successor rather than a fold-in."
- 2026-08-17T07:39:31Z @neo-opus-ada cross-referenced by PR #17275
- 2026-08-17T07:57:49Z @neo-opus-ada cross-referenced by #17278
- 2026-08-17T08:35:56Z @tobiu referenced in commit `7953ea8` - "fix(build): the package gate stops inheriting the blind spot it exists to end (#17274) (#17275)

Challenge A. The DevIndex rule was pinned to `apps/devindex/resources/data/` --
the same shape as defect #1, which went vacuous when the corpus moved. Rename
`data/` -> `corpus/` and the .npmignore line and the gate fall silent TOGETHER,
so the check prints OK over a 26.5 MiB leak. Re-anchored on `resources/` with
`images/` allowed, matching the .neo-ai-data rule: a subtree that does not exist
yet is excluded by default.

Challenge B. The rule set names directories and the two generated portal files
are excluded only by .npmignore. That is a boundary, not a gap -- every prefix
here names a tree whose leak is a DISCLOSURE, while sitemap.xml and llms.txt are
already public on neomjs.com, so shipping them is waste. Stated in the docstring
and asserted, so a later file-shaped rule has to change a test and say why.

Challenge C. parsePackOutput required a newline before the payload, so output
beginning at offset 0 -- what happens the moment `prepare` stops writing to
stdout -- threw "no JSON array found" over output that had one. Safe direction,
never a false pass, but a guard that breaks on a cleaner environment gets
distrusted. Also: the doc said "last top-level array" while the code took the
first. They now agree on the first.

Raised by @neo-opus-grace on review of PR #17253, with the resources/ child
inventory measured and every existing spec case checked against the new rule.
Her approval and the merge both landed before the disposition, so this is a
successor rather than a fold-in."
- 2026-08-17T20:43:32Z @neo-opus-ada cross-referenced by PR #17323
- 2026-08-18T11:50:38Z @neo-opus-grace cross-referenced by PR #17347
- 2026-08-18T14:34:38Z @neo-opus-grace cross-referenced by PR #17351
- 2026-08-19T09:48:32Z @neo-opus-ada cross-referenced by #17381
- 2026-08-20T23:02:00Z @neo-opus-vega cross-referenced by PR #17441
- 2026-08-21T00:32:20Z @tobiu referenced in commit `2db3fd3` - "fix(build): the package gate stops inheriting the blind spot it exists to end (#17240)

Challenge A. The DevIndex rule was pinned to `apps/devindex/resources/data/` --
the same shape as defect #1, which went vacuous when the corpus moved. Rename
`data/` -> `corpus/` and the .npmignore line and the gate fall silent TOGETHER,
so the check prints OK over a 26.5 MiB leak. Re-anchored on `resources/` with
`images/` allowed, matching the .neo-ai-data rule: a subtree that does not exist
yet is excluded by default.

Challenge B. The rule set names directories and the two generated portal files
are excluded only by .npmignore. That is a boundary, not a gap -- every prefix
here names a tree whose leak is a DISCLOSURE, while sitemap.xml and llms.txt are
already public on neomjs.com, so shipping them is waste. Stated in the docstring
and asserted, so a later file-shaped rule has to change a test and say why.

Challenge C. parsePackOutput required a newline before the payload, so output
beginning at offset 0 -- what happens the moment `prepare` stops writing to
stdout -- threw "no JSON array found" over output that had one. Safe direction,
never a false pass, but a guard that breaks on a cleaner environment gets
distrusted. Also: the doc said "last top-level array" while the code took the
first. They now agree on the first.

Raised by @neo-opus-grace on review of PR #17253, with the resources/ child
inventory measured and every existing spec case checked against the new rule."
- 2026-08-21T14:08:37Z @neo-opus-vega referenced in commit `2b0b7ad` - "docs(agentos): two diagrams were rendering at a third of legible size (#17413)

Render-verified all six Mermaid diagrams in a browser against the portal — the
surface a reader actually meets this guide on, fed by the learn tree entry this
branch adds. All six parse; two were illegible, which no linter reports because
both are valid Mermaid.

Measured intrinsic width against the ~860px doc column:

  #1 authority map   2837x830 -> 1356x878   scale 0.30 -> 0.63
  #4 guard pairs     3789x212 ->  995x830   scale 0.23 -> 0.86

At 0.23 a 14px label renders near 3px. The causes were different. The pairs
diagram placed four subgraphs side by side because nothing linked them, so it
grew with the number of pairs; each subgraph now declares its own direction and
invisible links stack them vertically. The authority map spread six long-labelled
leaves horizontally, and a subgraph direction could not fix it: Mermaid ignores
that direction when edges cross the subgraph boundary, which every leaf's edge
does. Removing the wrapper is what let the flow axis bind.

Worst case across all six is now 0.63, was 0.23. No parse errors, no clipping.
Verified quantitatively per diagram and visually for both repairs.

Co-Authored-By: Vega <neo-opus-vega@neomjs.com>"
- 2026-08-21T14:10:52Z @neo-opus-vega referenced in commit `d6251d3` - "docs(agentos): two diagrams were rendering at a third of legible size (#17413)

Render-verified all six Mermaid diagrams in a browser against the portal — the
surface a reader actually meets this guide on, fed by the learn tree entry this
branch adds. All six parse; two were illegible, which no CI linter reports
because both are valid Mermaid.

Measured intrinsic width against the ~860px doc column:

  #1 authority map   2837x830 -> 922x1670   scale 0.30 -> 0.93
  #4 guard pairs     3789x212 -> 995x830    scale 0.23 -> 0.86

At 0.23 a 14px label renders near 3px. Both had the same cause and it was not the
flow direction: sibling chains with nothing linking them are laid out side by
side, so the diagram grows with the number of branches. Linking them with
invisible edges stacks them instead. The pairs diagram also needed each subgraph
to declare its own direction.

A subgraph direction cannot fix the authority map, which is worth recording:
Mermaid ignores it when edges cross the subgraph boundary, and every leaf's edge
does. Flipping that diagram to LR did narrow it to 1356 (0.63), but
`lint-guides` rejected the result — `[mermaid-lr-squish]`, 14 nodes in an LR
flow. The heuristic was right and the measurement agreed once the real fix was
in: TD with serialized branches beats LR at 0.93 vs 0.63.

Worst case across all six is now 0.69, was 0.23. No parse errors, no clipping,
`lint-guides` clean on this file.

Co-Authored-By: Vega <neo-opus-vega@neomjs.com>"
- 2026-08-21T19:15:38Z @tobiu referenced in commit `d30434d` - "docs(agentos): the embedding lane gets an owning document (#17413) (#17434)

* docs(agentos): the embedding lane gets an owning document (#17413)

`learn/agentos/EmbeddingLane.md` — six diagrams, sibling of KnowledgeBase.md.

The lane had no owning document because it has no owning subsystem: dispatch in
memory-core, batching and guardrail in knowledge-base, geometry leaves in
configBase, slice and lease scheduling in the orchestrator, shape verification in
its own module. Four owners, no owner — so a defect spanning three of them
belonged to nobody, and establishing the composition cost a full session of plane
reads that produced nine wrong intermediate claims, eight of them answerable from
content already committed.

Written to the two-truths rule the ticket demands. CONTRACT facts are stated
plainly with the citation that re-derives them; every constant was verified at
source rather than recalled. PLANE facts carry an observation date and the command
that re-reads them, because a plane fact in the timeless present is the defect —
one day earlier this guide would have said the parser declines vendored trees,
true of the contract and false of the plane.

The diagrams carry the load rather than prose: which value decides what and where
width was conflated with concurrency; one slice as it actually runs; the checkpoint
cycle that is absorbing while a corpus exceeds one slice; four guard pairs whose
joint outcome differs from either alone; what the shape verifier establishes and
that utilization sits outside it; and the four-owner locality map.

Three findings post-date the ticket and are in rather than deferred: the
single-worker post queue as a third serialisation layer, the carry arithmetic whose
prefix-contiguity dependence makes a guard fail closed and silently drop conserved
work, and the absence of any wired re-embed trigger.

Traps section is the payload for the next reader: the memory ceiling's own
derivation, fused attention already attempted, contract-vs-plane on vendored trees,
and that a function named in a comment is not a function that is called.

No client identifiers. lint-guides OK, lint-tree-json OK, registry entry and a
cross-link from the ingestion model both in.

Resolves #17413

* docs(agentos): the guide registers itself, and its lessons leave the repository (#17413)

Registration was half-done: the tree entry existed and the SEO generator's
PRIORITIES map did not, so the page ranked at the default rather than where a
maintainer-facing internals guide belongs. Added at 0.8 — below both subsystem
apexes it spans, because a reader arrives at KnowledgeBase or MemoryCore and
reaches this one from them.

Diagram 6 named a module that exists only on an unmerged sibling branch. A
ground-truth guide cannot mix planned contract into current contract, so the
node is removed; it returns when the code does.

Four of the nine wrong claims this document cost were not about Neo: a declared
parallelism is not a measured one, a capacity number has a unit, a fail-closed
guard converts a wrong answer into a silent loss, and throughput can be a
correctness property. They are now in the narrative in first person rather than
in a role matrix, because what makes them useful elsewhere is that all four were
invisible to code review and visible to one instrumented run.

* docs(agentos): the width clamp was correct in the task unit, not impossible (#17413)

The guide said `parallel - 1` reserved "a slot the client cannot hold open, since
the server assigns slots from its own queue". That is false, and it is the claim
@neo-gpt falsified during the #17412 review.

The provider's capacity unit is a TASK — one multi-input POST expands to one task
per input — so a client does control offered work, and the clamp reserved real
headroom: three inputs is three tasks against four slots, leaving one free. The
clamp was arithmetically correct and its intent was sound. Its defect was the unit
it was spent in: headroom expressed as a width consumes the budget concurrency
needs, so a lane declaring four slots offered one request at a time.

A ground-truth guide carrying a refuted claim is worse than no guide, which is why
this lands ahead of the #17433 rebase rather than with it.

lint-guides: 0 findings for this file.

* docs(agentos): the carry failure this guide taught never happened (#17413)

Re-verified every concurrency, width, carry, queue, checkpoint, diagram and
code-locality statement against the exact tree now that the owning
implementation has landed. One statement was false, and it was the one the
document called the most important.

The guide described the carry defect as realized: work conservation switching
itself off, the lane re-purchasing vectors on every retry, nothing in the logs.
The landed implementation states the opposite in one sentence — "No reachable
input reddened the product, and none can." The formula's stated justification
was false, but its conclusion held via an unstated caller-side ordering
invariant, so nothing was ever mis-carried. The failure was derived from the
mechanism rather than observed.

The corrected lesson is narrower and more useful: a computation that is correct
by accident is one refactor from being wrong in silence, and that is why the
repair passes the measured prefix instead of re-deriving it. The fourth diagram
pair now names the unstated invariant rather than an incident.

Verified unchanged at the new tree: both line-anchored citations, the
NEO_LOCAL_MODELS_EMBEDDING_PARALLEL default, the providerLaneLiveShape docblock
quote (exact), all eight code-locality paths, the deferred-checkpoint contract,
and the past-tense framing of the width/concurrency conflation now that the
clamp is gone.

Co-Authored-By: Vega <neo-opus-vega@neomjs.com>

* docs(agentos): two diagrams were rendering at a third of legible size (#17413)

Render-verified all six Mermaid diagrams in a browser against the portal — the
surface a reader actually meets this guide on, fed by the learn tree entry this
branch adds. All six parse; two were illegible, which no CI linter reports
because both are valid Mermaid.

Measured intrinsic width against the ~860px doc column:

  #1 authority map   2837x830 -> 922x1670   scale 0.30 -> 0.93
  #4 guard pairs     3789x212 -> 995x830    scale 0.23 -> 0.86

At 0.23 a 14px label renders near 3px. Both had the same cause and it was not the
flow direction: sibling chains with nothing linking them are laid out side by
side, so the diagram grows with the number of branches. Linking them with
invisible edges stacks them instead. The pairs diagram also needed each subgraph
to declare its own direction.

A subgraph direction cannot fix the authority map, which is worth recording:
Mermaid ignores it when edges cross the subgraph boundary, and every leaf's edge
does. Flipping that diagram to LR did narrow it to 1356 (0.63), but
`lint-guides` rejected the result — `[mermaid-lr-squish]`, 14 nodes in an LR
flow. The heuristic was right and the measurement agreed once the real fix was
in: TD with serialized branches beats LR at 0.93 vs 0.63.

Worst case across all six is now 0.69, was 0.23. No parse errors, no clipping,
`lint-guides` clean on this file.

Co-Authored-By: Vega <neo-opus-vega@neomjs.com>"
- 2026-08-21T23:22:36Z @neo-fable cross-referenced by PR #17519
- 2026-08-22T23:56:06Z @neo-opus-grace cross-referenced by #137
- 2026-08-23T23:19:39Z @neo-opus-grace cross-referenced by #17661
- 2026-08-25T15:40:57Z @dawesi referenced in commit `e023935` - "fix(hooks): let the your-call citation exemption name the authority it cites (#16411) (#16433)

* fix(hooks): let the your-call citation exemption name the authority it cites (#16411)

The exemption was adjacency-anchored, so `/\bper\s+$/` matched only the
citation-FREE `per your call` and fired on the form the repo mandates. Naming
the gate is the accurate way to hand a merge over, so satisfying
§critical_gates #1 and passing the detector were in tension - and the tension
resolved the wrong way: the honest phrasing tripped while the phrasing that
passed cited nothing. Live instance: PR #16397 reported merge-eligible
2026-08-02.

The citation window may now contain the cited authority - a bounded ALLOWLIST
of citation tokens, copular connectives, punctuation and whitespace between the
anchor and the phrase. Not a wildcard: `per`-anywhere-in-80-characters would
exempt the genuine slip this detector exists to catch, and that over-correction
is pinned by a spec rather than avoided by intent - widening the bridge to
`[\s\S]*` reddens the new guard AND a pre-existing regression test. Whitespace
alone has to bridge because `stripMarkdownCode` already replaced a backticked
citation with a space.

The anchor matches RIGHTMOST so `per your call, but honestly, your call?` is
judged on the nearest anchor and the trailing deferential use still fires;
leftmost reddens the `as you said, per gate #1` case.

Audited `isReportedMentionContext` per the ticket: it carries the same
adjacency defect - `the phrase your call` is exempt but `the deference phrase,
your call, fired` fires, which is the shape DEFERENCE_REMINDER asks an agent to
write when reporting a false positive. Left unchanged: the ticket conditions any
change there on a transcript-observed phrasing, and inventing one to justify the
change is what that AC forbids. Recorded on the ticket with the probe evidence.

No DEFERENCE_PHRASES entry added or removed; no new exemption category.
263 passed across test/playwright/unit/hooks/.

* fix(hooks): kill exponential backtracking in the citation bridge (#16411)

CodeQL alert 119 on this PR: the bridge was one starred alternation whose
alternatives are AMBIGUOUS - a digit run can be partitioned between `\d+` and
`#\d+` in exponentially many ways, so a failing match re-partitions every way.

Measured, not assumed. Old pattern against N digits plus one failing char:
18->12ms, 22->19ms, 24->80ms, 26->360ms - about x4.5 per two digits. The prefix
window is 80 characters, so a ~60-digit run sits well inside reach and would
hang the Stop hook rather than merely slow it. The finding was reachable, not
theoretical.

Replaced the starred alternation with split-then-check: each token matches one
anchored pattern with no outer quantifier, which is linear by construction. The
separator set is the one that used to live inside the alternation, so the
accepted language is unchanged - 263 specs across test/playwright/unit/hooks/
still pass, including both #16411 guards and the pre-existing regression tests.
New pattern at 1000/5000/20000 digits: 1.2ms/0.2ms/0.1ms, flat.

A starred alternation was the wrong instrument for an allowlist. Tokenising says
what it means and cannot backtrack."
- 2026-08-25T15:41:00Z @dawesi referenced in commit `1aee23a` - "feat(lint): classify every retry-growth site's bound instead of proving it (#16443) (#16444)

* feat(lint): classify every retry-growth site's bound instead of proving it (#16443)

The operator asked for a standing rule — backoff times must not grow
indefinitely. The rule already holds: all 16 retry-growth sites on `dev` are
bounded. What does not exist is any way to KNOW that without reading each site's
caller, and the bound lives in four structurally different places.

The cost of that is measured, not asserted: I ran the census by hand three times
and got it wrong every time. Five sites (literal base-2 only), then nine, then
sixteen — each miss a whole syntax family (`backoff *= 2`, `Math.pow(configurable,
n)`). I let the regex, not the problem, define the population, and on the first
pass concluded "nothing to fix" from an incomplete set.

So this discovers candidates and requires an explicit classification per site. It
does not attempt to prove boundedness.

- `lint-retry-bounds.mjs` — discovery over ai/, src/, apps/, buildScripts/ for
  three growth syntaxes, diffed against the registry. Drift fails in BOTH
  directions: an unregistered candidate, or an entry whose site is gone.
- `retry-bound-registry.json` — 30 entries: 16 retry-growth, 14 not-a-retry. Each
  declares a witness; retry-growth entries also declare lifetime (in-cycle /
  process-local / persisted) and bound carrier (max-delay / max-attempts /
  max-window / terminal-state). All four carriers have a real instance, so the
  schema is not aspirational.

An unregistered match reports UNCLASSIFIED, never "unbounded" — the verdict
vocabulary cannot express the latter, and a spec asserts that. The non-retry
family (easing curves, physics, power-law random) is LARGER than the retry
family, so a fail-on-match gate would train contributors to add suppressions,
which is how the invariant actually dies.

Two heuristics rejected after they failed on real code:
- "returned vs consumed" — `message/drainCycle` returns a raw exponential and is
  correctly bounded by its caller's loop. It was my first rule and it false-
  positives on its first run; it now has a spec pinning that exact case.
- path/filename exclusion for the canvas family — that would hide the examined
  set behind a regex nobody audits, and would swallow a future retry site landing
  in an excluded path. Non-retry matches are classified with witnesses instead.

Discovery-layer fixes found by running it: string and multi-line template-literal
contents are blanked before matching, because markdown `**bold**` inside prompts
and rendered reports matched the exponent pattern — 20 of the first 50 hits were
prose. That is a discovery defect, not a family worth classifying.

Sites key on `<relPath>#<enclosingSymbol>`, not line numbers: a line-keyed
registry re-baselines on every unrelated edit above a site, and the re-baseline is
exactly where a real regression slips through.

Red-proofed end to end: a synthetic growth site makes the gate exit 1 naming it
`unclassified`; removing it returns exit 0.

Evidence: 13 new specs; 247 passed across the lint spec directory.

* wip(lint): RA-1/RA-3 partial repair — substitutions preserved, CI wired (#16443)

Emmy's PR #16444 review, partial. NOT ready for re-review: the registry is
now stale against the widened discovery, so the gate fails by design.

- stripLiterals preserves `${...}` substitutions (executable code) with brace-
  depth tracking; blanking them missed the live site at FileUpload.mjs:932.
- keys carry an expression fingerprint so a second growth expression inside an
  already-registered symbol cannot inherit its classification.
- `#private` methods no longer collapse to `<module>`.
- CI workflow added with path coverage across EVERY scan root; a narrower
  filter leaves a root where a new retry site never fires the gate.

REMAINING before re-review: re-seed retry-bound-registry.json against the
widened census (keys changed shape); implement witness RESOLUTION not presence;
correct "13 specs" to 11; reconcile #16443's stale nine-site census.

* fix(lint): the retry-bound gate discriminates retries from geometry (#16443)

The gate discovered growth SYNTAX, not retry growth, and those are different
populations. A full-tree run produced 62 candidates: 34 outside `ai/`, of which
3 were retries. The rest were Euclidean distance `(x2 - x1) ** 2`, easing curves
`Math.pow(1 - progress, 3)` and byte formatting `1000 ** i`. A gate that asks a
canvas physics loop to declare its backoff cap is one developers route around.

Adds a retry-vocabulary discriminator over three surfaces — enclosing symbol,
expression line, filename — any one sufficient, because a retry can be named at
any of them. 62 candidates -> 16, every one a genuine backoff site.

The first draft of that discriminator used `\b`-delimited words and silently
dropped `tenantRepoSync#isRepoDue` — the exact site whose unbounded backoff drove
#16224 — because `\bconsecutive\b` does not match `consecutiveFailures`.
camelCase is the dominant identifier style here, so word-boundary anchoring fails
precisely on the highest-value sites, and it fails by omission. Now substring
matching, with a regression test naming the four sites that must stay discovered.

Also closes Emmy's remaining review actions:

- Witness RESOLUTION, not presence: a witness naming a deleted spec read exactly
  like one naming a live spec. Repo-relative paths in a witness must now exist.
  Deliberately limited to paths — symbols and clamps still rest on review, and
  claiming more would be its own unwitnessed assertion.
- Registry re-seeded onto the fingerprinted key shape. All 16 `retry-growth`
  witnesses ported with no classification lost; the 14 `not-a-retry` rows are
  dropped because their sites are no longer discovered, and the class-level
  rationale now lives in the discriminator's JSDoc where it cannot rot per-row.
- Four keys moved `<module>` -> `#getRetryDelay` as the private-method symbol
  resolution from the previous commit takes effect.

Supersedes the spec asserting non-retries are recorded rather than filtered: the
exclusion is semantic, not a path rule, and that property is now asserted
directly rather than argued.

Co-Authored-By: Grace <neo-claude-opus@neomjs.com>

* fix(lint): partition the retry gate instead of excluding from it (#16443)

@neo-gpt-emmy's three carried RAs. The first changes the design back toward hers.

PARTITION, NOT EXCLUSION. The previous commit `return`ed on non-retry-vocabulary
candidates, which made a neutral-vocabulary retry — `schedule() { const d = base * 2 ** n }`
— silently invisible: the gate went green with fewer candidates and nothing said why.
Her falsifier stands and my rationale did not survive it. Every growth expression is
now discovered and reported; `retryContext` decides only whether classification is
REQUIRED. A census of ungated expressions prints on every run, pass or fail, so the
record of what was examined survives while the registry stays free of geometry rows.
Completeness and signal stop competing.

OCCURRENCE ORDINAL. Two identical expressions in one symbol share a fingerprint by
construction, so the second collapsed onto the first and `diffRegistry`'s Set reported
no drift for a site nobody had classified.

WITNESS SYMBOL RESOLUTION. Path existence was not enough: an existing file plus a
symbol that is not in it passed, which is exactly the shape a renamed guard leaves.
It found a real one on the first run — the message-drain entry cited
`#drainMessageWalRecords`, which does not exist; the retry loop lives in
`#processMessageBatch`. That witness had been asserting a bound nobody could check.

16 retry-context candidates, all classified; 16 reported ungated. 14/14 specs.

Refs #16443

Co-Authored-By: Grace <neo-claude-opus@neomjs.com>

* fix(lint): vocabulary annotates the retry gate, it no longer admits to it (#16443)

@neo-gpt-emmy's falsification holds and I am conceding it rather than defending the
partition. The measurement I built that argument on was real; only the conclusion was wrong.

A full-tree run produces candidates that are overwhelmingly NOT retries — Euclidean
distances, cubic easing, `1000 ** i`. I read that as "do not gate them", because a registry
row saying "Euclidean distance is not a retry" records nothing worth reading. What the
measurement actually supports is that those rows are low-VALUE, not that they are optional.
They are paid once. The hole they leave is permanent, and it sits exactly where the
highest-value misses live: `isRetryContext({file: 'src/time/Clock.mjs', symbol: 'schedule',
line: 'const d = base * 2 ** n;'})` returns false, so a real backoff under neutral names
printed one more line in a census nobody reads and the build stayed green.

A census on stdout is not a gate. That was the whole of her objection and it is correct.

RA1 — admission boundary. `diffRegistry` gates every scoped candidate. `isRetryContext` is
retained and now orders the failure report so plausible retries are read before geometry,
which is the role she explicitly left open for it. Cost: 24 `not-a-retry` rows, each with a
witness naming what the expression IS — squared coordinate delta, cubic ease-out on 0..1
progress, SI byte magnitude — so the false-positive family stays recorded rather than
suppressed by a regex nobody can audit.

RA2 — occurrence multiplicity. `PATTERNS.find` answered "does this line contain a growth
expression", which is a different question from "which ones does it contain". A Euclidean
distance holds two and produced one obligation; the second was absorbed with nothing
recording that a site had been merged away. `findGrowthMatches` now returns every match in
source order, de-duplicated by start index so two patterns describing one token
(`Math.pow(a ** b)`) do not double-count it.

The fingerprint stays keyed on the whole stripped LINE rather than the matched substring,
deliberately: re-basing it would have rotated all 16 existing keys and forced a full
re-baseline — precisely the moment a real regression slips through. All 16 survive unchanged;
the new rows are additions.

RA3 — already closed at 65ce1d9eae, which her review predates. Verified by running her exact
falsifier: `unresolvedWitnessPaths('k', 'ai/agent/Loop.mjs#definitelyMissingSymbol')` now
returns "the cited proof does not resolve."

RA4 — truth-fold. Top-of-file JSDoc gains a section stating what admits versus what
annotates; the "Known false-negative" paragraph is withdrawn and replaced with the residual
that is actually still true (the discovery PATTERNS, not the vocabulary); the key-shape
paragraph now documents the `#<n>` ordinal; the superseded test rationale is rewritten to
record the argument I lost rather than deleted.

MUTATION-PROVEN, not asserted:

  unclassified filter regains `c.retryContext &&`    1 failed, 18 passed
    only the neutral-vocabulary control goes red — it is the sole discriminator

  findGrowthMatches truncated to `.slice(0, 1)`      3 failed, 16 passed
    the multi-match control, plus two live-tree tests as the `#1` rows go stale;
    the collapse is caught three independent ways

Live gate: 40 candidates, all classified, exit 0 (was 16 gated + 16 printed).
Spec: 19 passed.

Refs #16443

* docs(lint): the scanner escape is masking a stripLiterals defect, measured (#16443)

@neo-gpt-emmy set a two-item closure boundary: close the continuation-line scanner
escape with an end-to-end discoverCandidates fixture, no further semantic expansion.

I tried the prescribed fix and it does not hold. Removing `if (wasOpen) return`
immediately surfaces ai/demo-agents/dev.mjs:258 as a candidate whose match is
`**AI Generated PR**` — markdown bold inside literal text, which is precisely what
stripLiterals exists to blank, and which this suite already has a test for.

Traced from the file start rather than guessed: the template opened at dev.mjs:118 is
never seen to close, so by line 258 the scanner still believes it is inside a template.
`stripLiterals(line, true)` then reads 258's OPENING backtick as a CLOSE and emits the
whole literal as code. findGrowthMatches finds `exponent` at index 49 — the markdown.

So the return is masking two things: the escape Emmy named, and a stripLiterals
multi-line state-tracking defect. Lifting it trades a known false negative for a false
positive, which is the worse of the two — a gate that cries wolf gets routed around, and
this registry's whole premise is that the false-positive family is larger than the true
one.

Retained with the measurement recorded at the site instead of a silent skip. The real
repair is multi-line template state tracking, which is outside the boundary set here and
should be argued rather than smuggled in under a closure item.

Not claiming the escape is closed. It is not.

lint: 40 candidates, all classified, exit 0
spec: 19 passed

Refs #16443"
- 2026-08-25T15:41:45Z @dawesi referenced in commit `7e6ebed` - "fix(ai): comment_id accepts the spelling a peer actually holds, and a scoped fetch stops paying for the thread head (#17142) (#17166)

* fix(ai): comment_id accepts the spelling a peer actually holds, and a scoped fetch stops paying for the thread head (#17142)

`get_conversation` and `get_discussion_conversation` accept `comment_id` so a
hand-off can be cheap — "read issuecomment-5301580683" instead of "read the
thread". Two defects made it unusable, and both were measured against live
threads rather than inferred.

The id a peer HAS is almost never the GraphQL node ID: it is the anchor at the
end of a pasted URL, the URL itself, or the bare number. Only the node ID
matched, and the other spellings did not error — they filtered every comment
away and returned an empty list, which reads as "this comment has nothing"
rather than "you addressed it wrong". The caller's next move was to re-fetch the
whole thread, which is exactly the cost the parameter exists to avoid.

`shared/commentSelector.mjs` now resolves all four spellings to a matcher and
reports an unrecognised shape as MALFORMED_COMMENT_ID. Malformed and absent stay
distinguishable: "not an id" and "not in this thread" are different answers and
a caller acts differently on each. Matching on the numeric arm needs
`databaseId`, so the three conversation queries now select it.

A URL that is not a comment link is malformed rather than an opaque node ID.
Admitting it would turn a caller's wrong link back into a silent empty result —
the defect being removed.

Second defect: the parent body came back on every call, including a scoped one.
Fetching one 2KB comment out of a 26KB discussion cost the same as reading the
head, so the cheapest correct usage carried the most expensive payload. Scoped
requests now omit it and set `bodyOmitted: true` — a consumer must be able to
tell "scoped away" from "this thread has an empty body". Unscoped calls are
unchanged, so nothing that reads the head today has to move.

An existing DiscussionService assertion required `body` on a scoped request and
now asserts its absence. That spec was encoding the defect, so the change is the
point rather than a casualty of it.

Co-Authored-By: Tobias Uhlig <tobias.uhlig@icloud.com>

* fix(ai): accept legacy node IDs, close the grammar in both directions, and make presence invoke parsing (#17142)

Four defects found by @neo-gpt's exact-head audit, all reproduced by direct
execution before repair. Exact-head CI was 20/20 green and covered none of them.

The regression first, because it is the worst of the four. `NODE_ID_PATTERN`
rejected a live, currently resolvable GitHub id: issue #1's comment is
`MDEyOklzc3VlQ29tbWVudDU1NzAwNzEyNg==`, which `node(id:)` still resolves. The
old strict equality accepted that form because it never parsed at all — it
compared. So a change whose whole premise is "stop failing silently" broke the
one spelling that already worked. Legacy ids are now admitted by DECODING and
requiring the payload to match `NN:TypeNameNNN`, with a round-trip guard, rather
than by pattern-matching base64 — "looks base64" would readmit arbitrary junk.

The grammar was also open in the other direction: `evilcomment-123` became
numeric 123, and `not_an_id` / `bogus_123` became node selectors, then degraded
to well-formed-but-absent — recreating the silent-empty defect through the
parser meant to remove it. The anchor prefix is now a closed set, and the node
pattern requires an UPPERCASE type prefix.

A length floor was tried alongside the case rule and removed. It rejected no
real id, closed nothing the case rule does not already close, and only broke
short fixtures. A guard should be the property that discriminates, not that
property plus a plausible-looking companion.

Presence now invokes parsing. All three services branched on `if (comment_id)`,
so an empty string skipped the selector path entirely and answered a blank
address with the full unscoped conversation, body included. `isSelectorPresent`
tests presence; parsing decides validity.

Public surfaces caught up with the shipped behavior: the discussion
`comment_id` / `since_comment_id` descriptions still claimed global-node-only
and body-returned, `last_n` was silent on scoping, `bodyOmitted` appeared in no
response schema, and PullRequestService's JSDoc still documented the resolved
invalid/absent ambiguity as live.

Service-level wiring arms added for issue and PR — comment_id across all four
spellings, malformed-vs-absent, the empty-string case, and since_comment_id —
which previously existed only for the pure helper and the discussion path.

Both new selector arms are red-proved: restoring the open grammar fails the
near-miss arm, and removing legacy support fails the regression arm. Production
restored byte-identical after each.

Co-Authored-By: Tobias Uhlig <tobias.uhlig@icloud.com>

* fix(ai): a comment URL must be a GitHub one — host and scheme checked, not just the suffix (#17142)

Found by @neo-gpt on the repaired head, and it is the same defect class as the
one that head fixed, one level further out.

The anchor pattern was `(?:^|#)…comment-(\d+)$`. Closing `[a-z]*comment` to a
closed set fixed the anchor's OWN prefix and left the whole string's prefix
open: only the suffix was ever checked, so any origin wearing a valid anchor
became a valid selector.

  https://example.invalid/phish#issuecomment-557007126  → numeric 557007126
  ftp://example.invalid/#discussioncomment-18022679     → numeric 18022679
  not-a-url#issuecomment-557007126                      → numeric 557007126

Each of those then matches whatever comment carries that databaseId in the
fetched thread, so a hostile or mistyped address silently returns a real
comment. The accepted forms name a GitHub comment URL; "any string ending in a
comment anchor" was never the contract.

The grammar is now split rather than widened. A bare anchor must be the whole
string. Anything carrying URL syntax is decided entirely by a URL branch that
parses with `new URL` — so the host is a checked field rather than text that
happens to precede a `#` — and requires an http/https GitHub origin plus a
closed comment fragment. A URL-shaped value that fails any clause is rejected
outright instead of falling through to be read as an opaque node ID.

Negative arms cover foreign host, foreign scheme on a foreign host, foreign
scheme on the GitHub host, a garbage prefix wearing a valid anchor, a lookalike
host (`github.com.evil.test`), and a GitHub URL with no comment fragment.
Positive arms keep http, https and the `www` host resolving.

Red-proved: restoring the suffix-only anchor fails the URL arm. Production
restored byte-identical.

Not addressed, and deliberately: a decoded Repository legacy ID also parses as a
generic node ID. @neo-gpt raised it and explicitly did not block, because the
current-node branch treats GitHub-owned node vocabulary as syntactically
well-formed and lets thread matching decide absence. Narrowing it would mean
teaching this module GitHub's type taxonomy, which is the coupling the opaque
treatment exists to avoid.

Co-Authored-By: Tobias Uhlig <tobias.uhlig@icloud.com>

---------

Co-authored-by: Tobias Uhlig <tobias.uhlig@icloud.com>"
- 2026-08-25T15:41:53Z @dawesi referenced in commit `ecc8fc3` - "fix(build): the package gate stops inheriting the blind spot it exists to end (#17274) (#17275)

Challenge A. The DevIndex rule was pinned to `apps/devindex/resources/data/` --
the same shape as defect #1, which went vacuous when the corpus moved. Rename
`data/` -> `corpus/` and the .npmignore line and the gate fall silent TOGETHER,
so the check prints OK over a 26.5 MiB leak. Re-anchored on `resources/` with
`images/` allowed, matching the .neo-ai-data rule: a subtree that does not exist
yet is excluded by default.

Challenge B. The rule set names directories and the two generated portal files
are excluded only by .npmignore. That is a boundary, not a gap -- every prefix
here names a tree whose leak is a DISCLOSURE, while sitemap.xml and llms.txt are
already public on neomjs.com, so shipping them is waste. Stated in the docstring
and asserted, so a later file-shaped rule has to change a test and say why.

Challenge C. parsePackOutput required a newline before the payload, so output
beginning at offset 0 -- what happens the moment `prepare` stops writing to
stdout -- threw "no JSON array found" over output that had one. Safe direction,
never a false pass, but a guard that breaks on a cleaner environment gets
distrusted. Also: the doc said "last top-level array" while the code took the
first. They now agree on the first.

Raised by @neo-opus-grace on review of PR #17253, with the resources/ child
inventory measured and every existing spec case checked against the new rule.
Her approval and the merge both landed before the disposition, so this is a
successor rather than a fold-in."
- 2026-08-31T15:32:42Z @tobiu referenced in commit `de7f9c7` - "test(dashboard): close AC-3 and AC-5 at the boundaries they name (#17945)

AC-3 claimed a retained action survives reconciliation, and proved it before reconciliation
ran. Every assertion resolved when the container's own `set()` did, so a group replacement
performed BY the reconciler was exactly what it could not observe. It now awaits
`workspace.refreshPromise` and re-resolves both the container and the action from the
refreshed tree.

Awaiting the refresh surfaced something the old arm hid: the post-refresh signal count is
not zero. The refresh QUEUE replays each pending refresh in order, and refresh #1
reconciles chrome to the document as it stood when it was queued, so its sweep re-hides
the action before refresh #2 settles it — `hidden` reads true, false, true, false across
the test. That lag belongs to the queue, not to this action: `close` lags identically, and
removing it would change refresh sequencing for every consumer. So the arm asserts the
property AC-3 actually claims, and asserts it more strongly than a count could: the
listener now records each signal's EMITTER, and every signal before and after
reconciliation comes from the one retained instance. A rebuilt group announces itself
there while the payload looks identical.

AC-5 claimed a perspective captured before and after merely rendering the action is
byte-identical, and inferred it from the source document. Capture normalizes, validates
and fingerprints, and any of those three could have made a rendered action observable in a
saved layout — so the arm now calls `Persistence.capturePerspective` itself, across a
workspace with the opt-in off and one with it on, and compares serialized output. It then
runs the real gesture and pins the diff to exactly 2.7's two committed fields on the one
item, with the node tree unchanged. The gesture is asserted non-identical first, or the
field-level diff would be vacuous.

The E2E `Run:` line omitted `NEO_AGENTOS_RUNTIME_ROOT`. Verified rather than taken on
faith: `playwright.config.e2e.mjs:70` builds `testIgnore` from `discoverExternalBrainSpecs`
whenever that variable is unset, so a run without it does not fail the spec — it never
selects it, and reports "No tests found". The corrected line says why.

742 dashboard unit specs pass."
- 2026-08-31T15:33:34Z @neo-opus-grace cross-referenced by PR #17952
- 2026-08-31T16:48:06Z @neo-opus-grace cross-referenced by PR #17959
- 2026-08-31T16:59:47Z @tobiu referenced in commit `efd5aaf` - "feat(dashboard): a dock pane can collapse to its edge rail (#17945) (#17952)

* feat(dashboard): a dock pane can collapse to its edge rail (#17945)

ADR 0029 §2.7 specifies a collapse control on a pinned/visible pane and was
marked implementation-sufficient, but nothing implemented it. `setItemAutoHidden`
had exactly one non-model caller in `src/` — persistence's RestorePlanner — so a
user could bring a pane back FROM the rail through the reveal overlay while
nothing sent one TO it. The round-trip was half-built.

`enableDockPinAction: false` on dashboard.dock.Workspace. While off the
projection is byte-identical. While on:

- The adapter projects `pin` into the engine set at its frozen slot
  (`[tab overflow] -> [host actions] -> [lock . reload . pin . pop-out .
  maximize] -> [close]`), and the reserved-name guard covers it.
- The Workspace commits §2.7's two-step sequence — `setItemPinned(false)` when
  pinned, then `setItemAutoHidden(true)` — as two INDEPENDENT commits through
  its own write seam, introducing no composite operation.
- Visibility follows the `syncDockCloseAction` idiom: `hidden` moves on one
  stable instance, so `actionVisibilityChange` consumers keep their signal.

`Document.findOwningEdge` derives the collapse target — §2.7's "the rail an item
collapses to is the edge zone that contains it" — and answers null for a
center-owned or absent item, so the affordance is never offered where the
gesture could not complete. It returns the OUTERMOST directional band because
that is the one `collectAutoHiddenItems` actually claims the item into; a spec
pins the two derivations together rather than leaving them to drift.

The reserved-name guard becomes a table keyed by a Map, not a branch per action:
each further leaf of the family reserves its name by construction, and a
host-supplied `constructor` cannot resolve to a prototype member and be reported
as reserved.

Co-Authored-By: Grace <neo-claude-opus@neomjs.com>

* test(dashboard): make the center-collapse rule fail on the workspace's own sync (#17945)

Mutation-testing the four load-bearing behaviours found one that could not fail.
Deleting the edge check from `syncDockPinAction` left the suite green: the
assertion read the pin action's hidden state on a center tabs node holding ONE
item, so the value under test was the one the ADAPTER computed at projection
time and the workspace's own sync never ran there.

A second center item makes activating it drive the sync, so the two independent
derivations of §2.7's center rule are each asserted where they are produced.

Verified by mutation, all four now red on the defect: the workspace center check,
the adapter center check, the dropped unpin step, and findOwningEdge returning
the innermost band instead of the outermost.

Co-Authored-By: Grace <neo-claude-opus@neomjs.com>

* test(dashboard): prove the collapse round-trip end to end on the real product (#17945)

The epic's gesture-proof guardrail, ridden in the same PR as the affordance.

`DockAutoHideRevealNL` already proves the way BACK, and has to commit the
auto-hide programmatically first — because until this leaf no affordance sent a
pane to the rail. This spec closes the loop with real gestures only: the pane's
own header action collapses it, it leaves its tab flow for a rail button on the
edge that owns it, and the existing reveal overlay's pin control brings it home
with the document byte-stable across the reveal.

It also pins §2.7's fail-safe in the product rather than only in a fixture: the
center stack projects the action instance too, and it must be HIDDEN, because
main content never rails.

The standalone example opts in, so it now demonstrates the whole round-trip
instead of only the return half.

Both arms witnessed locally: green as shipped, and red on the exact assertion
(`materialises one persistent pin action`) with the example's opt-in flipped off,
so the spec cannot pass without the feature.

Co-Authored-By: Grace <neo-claude-opus@neomjs.com>

* fix(dashboard): the pin action is focus-gated, like every engine action but close (#17945)

Caught by the pre-open AC re-anchor. AC-1 asks for a "focus-gated pin toggle",
and the config carried `contextual: false` — copied from the close action, where
it means the exact opposite: opt OUT of the tab header's `showOnFocus` gate.

Close earns that exemption because it must stay reachable on an unfocused pane.
Inheriting it here would have put a permanently visible control on every dock
header in the workspace, which is neither what §2.7's engine set specifies nor
what the ticket asked for.

Dropping the key restores the header default. The two mechanisms compose without
overlap: the gate owns interactivity and visibility (a cls plus `inert` /
`aria-hidden` / `tabIndex`), while `hidden` stays the workspace's policy channel.

The e2e now focuses each pane before judging its actions, and the center-pane
assertion gained the control arm it was missing: with the gate CLOSED an
invisible pin proves nothing, so the pane is focused first and the ungated close
action is asserted visible on the same header — leaving policy as the only thing
that can still hide the pin.

Co-Authored-By: Grace <neo-claude-opus@neomjs.com>

* docs(dashboard): describe the spec's subject, not its tracking ref (#17945)

* fix(dashboard): an engine action owns its name only while its own opt-in is on (#17945)

`enableDockPinAction` gated projection and dispatch but not policy synchronization, so
`syncDockPinAction` resolved and moved `hidden` on a `pin` action a host had projected
through `resolveDockHeaderActions` while the engine flag was off. The sweep runs on every
active-item change and every reconciliation, so the host's action drifted with no gesture
involved: `hidden` false -> true on a center tab, which is the engine's own predicate
(no edge owns a center item) applied to an instance the engine does not own.

`syncDockCloseAction` carried the identical defect for `close`. Both flags default false
and `getDockProjectionOptions` already documents the invariant per action name, so fixing
only `pin` would have left an asymmetry the JSDoc claims does not exist.

Dispatch had the second half of the same problem. `handleDockPinAction` validated the
active item and the committed document but inherited eligibility from the chrome that
emitted the intent. That chrome is a projection of the document as it stood at the last
sweep, and the sweep is deferred behind reconciliation — so between a commit moving an
item to the root center and the refresh that re-hides its action, a retained action was
still visible and still dispatchable, and committed `setItemAutoHidden(true)` on an item
no edge owns with an empty error list. Collapsing a center item is what docking design
record 2.7 forbids. The owning edge is now re-derived from `dockModel` immediately before
the first descriptor, and a named error returns with zero commits.

Both arms are non-vacuous. The host fixture states `closable: false` on its center item
because otherwise the close half asserts a value the engine would have computed anyway:
with the guard removed and the fixture unstated, nothing reds. Measured, each guard
removed in isolation:

  - pin sync guard    -> host `pin`   false -> true on the reconciliation sweep
  - close sync guard  -> host `close` false -> true on the same sweep
  - dispatch guard    -> `errors: []` where the arm requires the named refusal

741 dashboard unit specs pass with all three in place.

* fix(dashboard): a nested edge-zone inherits its ancestor's rail claim (#17945)

`findOwningEdge` returns the OUTERMOST edge and its JSDoc asserted the projection agreed —
that a nested band "never gets to claim" an item an outer rail already owns. Nothing
enforced it. `projectEdgeZoneNode` restarted `railedItemIds` per node, so an item two
edge-zones deep was collected by the outer band AND re-collected by the inner one: it
rendered on two rails, and the inner `childContext` replaced the ancestor's claim set
rather than extending it, so the ancestor's OTHER claimed item stopped being dropped from
the inner tab flow. Measured on the ticket's own nested fixture: outer-left [plain,
buried], inner-top [buried], and `plain` still in the tab flow.

The collection is now filtered against the inherited claim, which is the enforcing half.
The seed of `railedItemIds` from that same set is the weaker half and no fixture reds on
it — with the filter present a band-nested zone can never claim anything new, so the set
stays empty and the `: context` fallback preserves the ancestor's claim anyway. It is kept
so both branches of that ternary mean "everything claimed at or above this node"; the
JSDoc says so rather than letting it read as tested.

The agreement spec was the reason this survived review. It compared `findOwningEdge`
against `collectAutoHiddenItems` — a helper that recurses correctly and therefore agrees
with the query by construction, so a projection disagreeing with both sat invisible behind
it. It now walks the output of `LayoutAdapter.project()` and asserts each railed item
renders on exactly one rail, on the band the query names, and is absent from every tab
flow, with `main` held in the center flow as 2.7's fail-safe.

That rewrite needed its own non-vacuity guard. The first version read `sortZoneConfig`
from the wrong depth, collected an empty tab flow, and both `not.toContain` assertions
passed for the wrong reason; only the `main` positive caught it. The walk now proves it
found a rail and a tab flow before asserting anything absent from either.

Measured, each half removed in isolation:

  - re-claim filter -> `buried` renders on ["left", "top"]
  - inherited seed  -> nothing reds; see the JSDoc note

741 dashboard unit specs pass.

* test(dashboard): close AC-3 and AC-5 at the boundaries they name (#17945)

AC-3 claimed a retained action survives reconciliation, and proved it before reconciliation
ran. Every assertion resolved when the container's own `set()` did, so a group replacement
performed BY the reconciler was exactly what it could not observe. It now awaits
`workspace.refreshPromise` and re-resolves both the container and the action from the
refreshed tree.

Awaiting the refresh surfaced something the old arm hid: the post-refresh signal count is
not zero. The refresh QUEUE replays each pending refresh in order, and refresh #1
reconciles chrome to the document as it stood when it was queued, so its sweep re-hides
the action before refresh #2 settles it — `hidden` reads true, false, true, false across
the test. That lag belongs to the queue, not to this action: `close` lags identically, and
removing it would change refresh sequencing for every consumer. So the arm asserts the
property AC-3 actually claims, and asserts it more strongly than a count could: the
listener now records each signal's EMITTER, and every signal before and after
reconciliation comes from the one retained instance. A rebuilt group announces itself
there while the payload looks identical.

AC-5 claimed a perspective captured before and after merely rendering the action is
byte-identical, and inferred it from the source document. Capture normalizes, validates
and fingerprints, and any of those three could have made a rendered action observable in a
saved layout — so the arm now calls `Persistence.capturePerspective` itself, across a
workspace with the opt-in off and one with it on, and compares serialized output. It then
runs the real gesture and pins the diff to exactly 2.7's two committed fields on the one
item, with the node tree unchanged. The gesture is asserted non-identical first, or the
field-level diff would be vacuous.

The E2E `Run:` line omitted `NEO_AGENTOS_RUNTIME_ROOT`. Verified rather than taken on
faith: `playwright.config.e2e.mjs:70` builds `testIgnore` from `discoverExternalBrainSpecs`
whenever that variable is unset, so a run without it does not fail the spec — it never
selects it, and reports "No tests found". The corrected line says why.

742 dashboard unit specs pass."
- 2026-09-01T06:10:25Z @neo-opus-grace cross-referenced by #17920
- 2026-09-03T20:57:15Z @neo-opus-grace cross-referenced by #18216
- 2026-09-04T00:33:16Z @neo-opus-grace cross-referenced by PR #18245
- 2026-09-04T19:10:17Z @neo-gpt cross-referenced by PR #18323
- 2026-09-08T23:19:01Z @neo-opus-grace cross-referenced by PR #18509
- 2026-09-09T11:24:25Z @neo-opus-vega cross-referenced by PR #18534
- 2026-09-13T15:00:53Z @neo-opus-grace cross-referenced by #18666
- 2026-09-14T22:51:59Z @neo-opus-vega referenced in commit `c0f3623` - "test(core): the guard reads its five roots once, not twice (#15031)

scanFor() was called once per label, and each call walked all five roots and
re-read every .mjs file - so the guard read the whole tree twice to answer two
questions it can answer in one pass. One walk now buckets both labels, cached.

Measured on this tree:

  src           495 files      apps         326      buildScripts  90
  examples      418 files      test         611
  TOTAL       1,940 files, 16.0 MB

  one pass   38 ms
  two passes ~76 ms   <- what it was spending

THIS IS NOT A FIX FOR THE UNIT FLAKE ON THIS PR, and I want that on the record
because I raised the possibility myself. When animatePlugin.spec.mjs:551 red on
CI with a 'vdom update wedged ... in-flight for over 5000ms' timeout, I asked
whether this guard's synchronous I/O could starve a neighbouring worker into
that wedge. Measured, the ENTIRE saving is 38 ms against a 5000 ms threshold.
The hypothesis is dead.

Independently: that test FAILED and then PASSED ON RETRY #1 at the identical
commit, which already rules out a deterministic consequence of this diff. Local
runs of that spec are 6/6 clean, dev is green, and five other open PRs show
unit=pass. The job exits 1 on a flaky retry - the same shape recorded on #18705
earlier today.

So the refactor lands on its own merit only: reading a tree twice to answer two
questions is waste, whatever else is true."
- 2026-09-14T22:52:46Z @neo-opus-vega cross-referenced by PR #18714
- 2026-09-15T07:26:01Z @tobiu referenced in commit `46a52c8` - "test(core): restore the initAsync contract guard the Brain split deleted (#15031) (#18714)

* test(core): restore the initAsync contract guard the Brain split deleted (#15031)

The guard shipped with the production sweep (#15033 / PR #15039) as
test/playwright/unit/ai/InitAsyncContractGuard.spec.mjs and did its job. It
was then deleted by c623b2f63c - not as a decision about the guard, but as
collateral of removing the received Brain implementation, which took the whole
ai/ tree with it. The debt stayed at zero; the thing holding it there did not,
and nothing reported the loss, because a guard's absence is silent.

Measured before restoring, with the guard's own call-anchored regexes rather
than an await-anchored grep:

  src          1 hit - src/core/Base.mjs:318, the framework's own construct
                       fire, already the EXEMPT_FILES entry
  apps         0
  buildScripts 0
  examples     0
  test         0

So it lands green and freezes a clean tree instead of arriving with a backlog.

Scanned roots are wider than the original's ['src', 'ai']. ai/ is gone, and
the original deferred test/ with 'test/ joins once the singleton re-init seam
lands'. That seam was REJECTED - #15034 closed NOT_PLANNED on the ruling that
initAsync() is a one-shot continuation of construction, not a restart hook -
so the spec-side '_initPromise = null; await X.initAsync()' reset idiom has no
sanctioned future. Guarding test/ is therefore worth more than when it was
deferred, not less.

Two deliberate additions:

The guard exempts itself, because MUST_FLAG holds the anti-patterns as string
literals on code lines. That costs nothing: the classifier is pinned by those
same fixtures in the third arm, which fails when the PATTERN regresses
independently of what the tree contains.

A fourth arm asserts every scan root still exists. That is the exact failure
this file is a restoration of - a root that vanishes takes its coverage with
it, scans nothing, and stays green, which is indistinguishable from clean.

Ticket refs live here rather than in the docblock: check-ticket-archaeology
rejects them in durable comments, and the prose states the rule instead.

* test(core): the classifier's exemptions stop covering real forbidden calls (#15031)

RA-1 from @neo-gpt-emmy's review, and her probe is right on all four cases.

Two exemptions were broader than the constructs they meant to recognise:

1. WHOLE-LINE DECLARATION EXEMPTION. violationLabel returned null for any
   line containing 'async initAsync(', so a declaration made the whole line
   legitimate while a separate external call sat on it:

       async initAsync() { await service.initAsync(); }
       async initAsync() { await service._initPromise; }

   Both are now handled by REMOVING the declaration from the line before
   classification instead of exempting the line. A bare declaration still
   passes, and anything else on the line stays visible.

2. SUFFIX-MATCHING LOOKBEHINDS. (?<!super) and (?<!this) recognise trailing
   CHARACTERS, not receivers, so ordinary external calls on unrelated objects
   read as the sanctioned chains:

       await mysuper.initAsync();
       await notthis._initPromise;

   The inner (?<![$\w]) now demands a token boundary before the keyword.

RED-FIRST, both classifiers run over the same corpus:

  blind spots on MUST_FLAG   old 4/4   new 0/4
  false positives on controls           new 0/5

The controls include a new one: 'async initAsync() { await super.initAsync(); }'
must stay clean, or the repair would have traded a blind spot for a false
positive on the single form the contract requires.

Her retrospective is the part worth keeping: a clean corpus cannot validate an
EXEMPTION. Only a forbidden operation sitting inside one can, which is why
these are fixtures rather than another tree scan - the tree being at zero is
exactly what hid this.

Suite at this head: 4063 passed / 2 skipped, parallel and --workers=1.

* test(core): the guard reads its five roots once, not twice (#15031)

scanFor() was called once per label, and each call walked all five roots and
re-read every .mjs file - so the guard read the whole tree twice to answer two
questions it can answer in one pass. One walk now buckets both labels, cached.

Measured on this tree:

  src           495 files      apps         326      buildScripts  90
  examples      418 files      test         611
  TOTAL       1,940 files, 16.0 MB

  one pass   38 ms
  two passes ~76 ms   <- what it was spending

THIS IS NOT A FIX FOR THE UNIT FLAKE ON THIS PR, and I want that on the record
because I raised the possibility myself. When animatePlugin.spec.mjs:551 red on
CI with a 'vdom update wedged ... in-flight for over 5000ms' timeout, I asked
whether this guard's synchronous I/O could starve a neighbouring worker into
that wedge. Measured, the ENTIRE saving is 38 ms against a 5000 ms threshold.
The hypothesis is dead.

Independently: that test FAILED and then PASSED ON RETRY #1 at the identical
commit, which already rules out a deterministic consequence of this diff. Local
runs of that spec are 6/6 clean, dev is green, and five other open PRs show
unit=pass. The job exits 1 on a flaky retry - the same shape recorded on #18705
earlier today.

So the refactor lands on its own merit only: reading a tree twice to answer two
questions is waste, whatever else is true.

* test(core): the declaration needs no exemption at all (#15031)

RA-1 remainder from @neo-gpt-emmy: the signature strip I added to close the
whole-line exemption opened a narrower hole of its own, swallowing forbidden
operations inside PARAMETER DEFAULTS:

    async initAsync(value = service.initAsync()) {}
    async initAsync(value = service._initPromise) {}

Her observation is the actual repair, and it is a deletion: a bare declaration
needs no suppression to begin with. Both patterns require a MEMBER ACCESS -
'.initAsync(' and '._initPromise' - and 'async initAsync() {' has no receiver,
so neither can ever match it.

So both exemptions were protecting nothing and swallowing something. The
whole-line includes() waved through a separate call sharing the line; the
signature strip waved through the parameter list. Removing the suppression
entirely is narrower than either, and is less code.

Red-first across all three generations, one corpus:

                          blind spots   false positives
  v1 whole-line exempt       6/15            0/7
  v2 signature strip         2/15            0/7
  v3 suppress nothing        0/15            0/7

Both parameter cases are now fixtures, alongside the four from the first round.

Verified: guard 4/4 (387ms, down from 591 - no per-line replace); full unit
suite 4063 passed / 2 skipped, parallel and --workers=1. The two scan arms
confirm the tree stays clean with suppression gone, which is the check that
mattered: removing an exemption can only ever ADD findings."
- 2026-09-15T09:42:12Z @neo-opus-ada cross-referenced by PR #18728
- 2026-09-16T19:34:36Z @tobiu referenced in commit `85dcc8b` - "docs: the comments CI's archaeology guard flags say which kind they are (#18810) (#18811)

* docs: the comments CI's archaeology guard flags say which kind they are (#18810)

22 comments in this tree were flagged by the published guard CI runs and passed by
the mirrored copy the hook runs, so any PR staging one of those files reds on a line
it did not write. That happened twice today, in PRs whose subject was elsewhere.

Four kinds, four remedies, because a blanket suppression would hide all four equally.

A deliberate reference carrying the RETIRED `ticket-ref-ok` marker takes the typed
one instead, with the same reason it already carried: the ticket a guard implements
is load-bearing and stays.

Review archaeology is rephrased, because that family has no escape in any version.
Which review round produced a decision is the part that decays; what the arm asserts
and why is behaviour and stays. `RA-2` becomes the token contract it describes, and
`Cycle-1 RA1` becomes the rule itself -- a sort restores selection on both axes.

Eleven sites are not references at all: ordinal labels the numeric pattern cannot
tell from a ticket. `Refresh #1`, `product truth #2`, `identity #1`. These are the
cheapest to mark and the most valuable, because they are the ones a future reader
would otherwise "fix" by deleting a true statement.

`VerticalScrollbar`'s `To solve #3` was nearly one of those deletions. It points at
item 3 of the numbered list directly above it, not at a ticket -- which reading the
comment showed and treating the finding as a defect would have destroyed.

The genuine ticket refs lose the number and keep the content, which was already
beside them: a suite that "reproduces the regression described in #9165" also
describes the regression. The two calendar `todo:` markers keep theirs, since an
open todo pointing at its tracked work is the case the escape exists for.

Comment-only, verified by blanking every comment with acorn and comparing what
remains -- a `sed` strip reported five false positives on JSDoc blocks.

One finding remains, `RA-3` in check-spec-retirement, already repaired in #18808.

* docs: the calendar todos drop pointers to tickets closed as not planned (#18810)

@neo-opus-grace: both markers vouched for '#989/#990, the open ticket tracking this
todo'. Both were closed NOT_PLANNED on 2024-09-28. So the escape's reason -- the one
part of a marker a reader trusts -- asserted a fact I never checked, and I wrote a
fresh false claim into a durable comment while repairing decayed ones.

They are category D by this PR's own table: drop the number, keep the content. The
todo's subject is its description, not its ticket, so the work stays named and AC-4
still holds.

Also moves Pull.mjs's marker outside the quoted title sample, so the example stays a
verbatim PR title rather than one with an annotation inside the quotes."
- 2026-09-19T13:17:18Z @neo-opus-vega cross-referenced by #18961

