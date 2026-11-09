---
number: 10073
title: >-
  [Design] MCP set_instance_properties: binary success vs. applied/rejected
  granularity
author: tobiu
category: Ideas
createdAt: '2026-04-18T21:39:13Z'
updatedAt: '2026-11-05T18:29:45Z'
closed: false
closedAt: null
routingDispositionSchemaVersion: discussion-routing-disposition.v1
routingDisposition: undetermined
routingDispositionReason: no-authoritative-lifecycle-marker
routingDispositionEvidence: []
contentTrust:
  projected: true
  quarantined: 0
  signals: []
conversationCompletenessSchemaVersion: discussion-conversation-completeness.v1
conversationComplete: true
conversationCommentCountObserved: 1
conversationCommentCountTotal: 1
conversationReplyCountObserved: 0
conversationReplyCountTotal: 0
---
## Context

The recently-landed #10070 / PR #10071 fix restored end-to-end functionality for `set_instance_properties`. During subsequent live NL exploration (session `51640d07-2931-4d38-a071-a0e13e3d6452`), a subtler question surfaced that's worth community input before committing to a contract change.

## The Observation

A live probe on devindex's profile form illustrated two distinct failure modes that produce **identical wire responses**:

| Case | Target | Input | `{success:true}`? | `value` after | `_value` after | Reason |
|---|---|---|---|---|---|---|
| **Infrastructure OK** | `neo-textfield-1` (login) | `{value: "NL-PROBE-alpha"}` | ✅ | `"NL-PROBE-alpha"` | `"NL-PROBE-alpha"` | Plain text field — write lands |
| **App-level rejection** | `neo-countryfield-1` | `{value: "DE"}` | ✅ | `null` | `null` | `forceSelection: true` + `beforeSetValue` declined the unknown code |

Both return `{success: true}`. Only a follow-up `get_instance_properties` disambiguates them. The hollow-response family (#9837/#10070) is architecturally analogous but now handled at the validation layer; this one is **application-level** — `core.Base.set()` honored the `beforeSetValue` contract by rolling back, which is the correct reactive behavior.

## The Design Question

Should the MCP-level write response carry information about which properties were actually applied vs. declined, so agents/tests don't have to read-back-after-write to distinguish these cases?

### Option A — Keep the current binary contract
Pros:
- `core.Base.set()` completing without crashing IS technically a successful call.
- Read-after-write is already documented discipline (see `feedback_verify_effect_not_just_success.md`).
- No contract change for existing callers.

Cons:
- Two semantically different outcomes look identical on the wire.
- Hollow-success traps the callers who don't follow the read-after-write discipline.
- Asymmetric with the reactivity system's actual knowledge: the runtime KNEW which properties changed (`core.Base.set()` has the `oldValue`/`newValue` diff internally).

### Option B — Enrich the response
Server-side handler reads pre-state → applies `set` → reads post-state → returns granular diff:
```js
{
  success : true,
  applied : {login: "NL-PROBE-alpha"},          // old ≠ new
  rejected: {value: null},                       // unchanged after set
  unchanged: {}                                   // caller's value already matched
}
```
Pros:
- Agents/tests get the same information currently derivable only via read-after-write.
- Preserves the granularity `set_instance_properties`-as-bag needs (partial-apply is meaningful).
- Makes the honest wire response load-bearing for the common case; read-after-write becomes defense-in-depth rather than always-required.

Cons:
- Per-call overhead: N extra reads on the target instance for N properties.
- New contract agents/tests need to understand.
- Edge cases: properties with side-effect setters (afterSet firing async), configs that transform via `beforeSet` (the "applied" value ≠ the input value).

### Option C — `applied` list only (minimal)
Middle ground: response returns `{success: true, applied: ["a", "c"]}` — just the names of configs that actually changed. Agents compare their input bag against this list; anything missing was rejected or already matched.
Pros:
- Smaller payload than Option B.
- Preserves enough info for agents to disambiguate without forcing a full diff.

Cons:
- Agents still need an extra call to see the *new* values (but not to detect rejection).

## Related Conceptual Pieces

- `feedback_verify_effect_not_just_success.md` — the agent-side discipline memo that emerged from today's #10070 diagnosis
- `feedback_mcp_output_category_split.md` — the closed-contract vs. runtime-introspection framing from #9837; this question lives between them (closed contract with open payload)
- The `ButtonBaseNL.spec.mjs` reference implementation already does read-after-write — so the cleanest test style doesn't lose expressiveness under any option
- Neo's existing `afterSet*` hooks fire conditionally on actual value change — the runtime already has the "did this actually change?" signal internally

## Intent of This Discussion

Not to decide. To surface the design space before anyone commits a contract change. Questions worth input on:

1. Is the hollow-app-level-rejection case frequent enough in practice to warrant a protocol change, or is read-after-write sufficient discipline?
2. If enriching, Option B (full diff) vs. Option C (names only) — which is more useful for agents generating Playwright whitebox tests?
3. Should enrichment apply across all write-ish MCP tools (`modify_state_provider`, `manage_neo_config`, `patch_code`) or stay localized to `set_instance_properties`?
4. Are there other MCP write tools where this question bites differently (e.g., `set_route` where browser history has additional rejection paths)?

## Origin Session ID

`51640d07-2931-4d38-a071-a0e13e3d6452`


## Comments

### `@neo-opus-ada` commented on 2026-11-05T18:29:45Z

**Read 2026-11-05 · proposed verdict: holds, no line** (sweep #20358; this is your call, @tobiu)

The ambiguity is still live. `InstanceService#setInstanceProperties` (`src/ai/client/InstanceService.mjs`) still returns a bare `{success: true}`, so a write that `beforeSetValue` declined and a write that landed still look identical on the wire.

What has changed since April is the cost. The undo capture added since then (`buildSetReverse`) already reads each key's pre-set value before `instance.set()` runs. Option C, an `applied` list of the keys whose value changed, would cost one post-read per key on top of that, with no new contract for callers who ignore the field.

**Suggested shape:** one low-blast ticket for Option C. Option B's full diff only pays off once a caller needs the new values themselves.

Ada (Claude Opus 5.5, Claude Code) · session 89c130ad-8235-41ef-914c-800c028ac868

---

