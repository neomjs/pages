---
id: 6136
title: form.field.Select
state: CLOSED
labels:
  - enhancement
  - no auto close
  - ai
  - core
assignees:
  - neo-gpt-sophie
createdAt: '2024-12-05T19:02:44Z'
updatedAt: '2026-11-06T10:17:34Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6136'
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
closedAt: '2026-11-06T10:17:34Z'
---
# form.field.Select

A ComboBox supports typing into an input field, while a default `select` tag only supports selecting an `option`.

This topic gets interesting, since there is a stage 2 proposal => already implemented in Chrome, but hidden inside an experimental feature: https://developer.chrome.com/blog/rfc-customizable-select

We should create the base class and make it configurable & extensible for custom option renderers.

It should extend `form.field.Base` (and not `form.field.Text`). It should use a store, but also work with passing an options array (creating a default store as needed).

Scope: neo v9

---

## Intake contract — Sophie, 2026-11-06

The original request above is preserved. Its platform/version lines are historical; [current-platform/source read](https://github.com/neomjs/neo/issues/6136#issuecomment-6678329184) and [intake/ownership](https://github.com/neomjs/neo/issues/6136#issuecomment-6679265566) establish the current work. This section specifies the new single-select field and its tests.

| Target surface | Authority / existing source anchor | Behavior | Edge / fallback | Docs | Evidence |
| --- | --- | --- | --- | --- | --- |
| New `form.field.Select`, `ntype: selectfield` | Original ticket; direct-Base siblings `CheckBox` / `FileUpload` | Extends `form.field.Base`; native select, linked label, optional error text, disabled and required controls | Single selection; native keyboard and focus; classic native appearance when enhancement is unavailable or disabled | Class/config JSDoc and runnable field example | Unit inheritance/form tests; real browser keyboard inside a selection region |
| New `store_`, `options_`, `displayField: name`, `valueField: id`, `disabledField: disabled` | Original ticket; `util.ClassSystem.beforeSetInstance`, `data.Store`; #20403 ownership guard | Borrow an existing Store; create and own a Store from config or an options array. Scalars become value/label records; object records use configured fields. Initially explicit/bound Store wins over options; later options assignment replaces the Store. Null options clears that shortcut | Unset Store creates an empty owned Store unless bound. Store replacement/destruction detaches only this field's listeners and destroys only its owned Store. Additive load/filter/recordChange subscriptions; no private view or borrowed Model reassignment | Config ownership and precedence JSDoc | Store replacement/destruction; borrowed edit notifications before/while/after attachment; provider binding |
| Inherited `value_`; new resolution/option mapping | `form.field.Base` value/change/reset; `ComboBox.beforeSetValue` allItems precedent | Unique non-null string/finite-number/boolean option values; preserve typed `0`, `false`, `''`, and string `"0"`. DOM values are internal nonempty tokens, not a raw business-value API. Null is empty; placeholder DOM value is exactly `''` | Resolve across the full Store. A selected filtered-out record retains a hidden selected option/closed label. A genuinely missing value stays requested but invalid and submits null; later data can resolve it. Never silently select the first record | Value/submit JSDoc; explicitly document the difference from ComboBox's loaded-store miss | Typed/falsy round trip; pending load, removal, filter/unfilter, sort, edit, reset |
| Existing form integration plus field validation | `form.field.Base` naming, touched state, getSubmitValue/reset/change sequencing; `form.Container` setValues/getValues/reset | Submit the resolved scalar or null; required rejects empty; unresolved values reject even when optional. Disabled controls reject native interaction and skip field validation; Form continues to include their values, as its current getSubmitValues implementation does. Programmatic changes emit change; genuine native changes also emit userChange | Store refresh/resolution alone emits neither value-change nor userChange. Native selection and last-known VNode stay synchronized through later rerenders | Validation/event JSDoc and example | Form round trip and event counts; native user selection followed by programmatic reset and unrelated rerender |
| New `createOptionContent(record,index)` extension hook and `customizable_` | Original custom-renderer requirement; `main.render.DomApiRenderer` / `StringBasedRenderer`, `DeltaUpdates.updateNode` innerHTML | Escaped displayField text by default; override returns trusted HTML for noninteractive custom option content. Each option remains a managed VNode, its content is opaque HTML. CSS base-select enhancement defaults on | Custom markup must retain readable text, e.g. by using super's escaped label. No selectedcontent cloning, descendant managed IDs, or option label attribute that hides rich content. Closed control remains ordinary native text; enhancement-off keeps native selection | Hook's escaping/text requirement; custom example | Both actual renderers, enhanced and appearance-auto modes; rich picker screenshot and native selection. Installed Chrome156/WebKit27.2 are feature-capable; older unsupported-parser behavior remains an explicit verification limit |

Acceptance includes meaningful unit coverage plus real browser witnesses, not VDOM-only proof. Placement follows existing `src/form/field/`, matching SCSS, `examples/form/field/`, `test/playwright/unit/form/field/`, and the Neural Link rendering tests in `test/playwright/e2e/rendering/`. No new subsystem or ADR boundary. The shared runtime change treats SELECT and its open picker's focused descendants as native input in `main.DomEvents` keyboard-default handling, verified by a browser witness.


## Timeline

- 2024-12-05T19:02:44Z @tobiu added the `enhancement` label
- 2024-12-05T19:02:44Z @tobiu added the `no auto close` label
- 2024-12-05T19:02:44Z @tobiu assigned to @tobiu
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:44Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. There is still no `form.field.Select`; `form.field.ComboBox` is the only picker field. The idea stands, but two lines in the body date from 2024: "Scope: neo v9", and the experimental status of the customizable-select proposal it cites. Re-check that status before pickup.

**Verdict: rewrite** the scope and platform lines; the ticket holds after that. The ticket is operator-authored, so the rewrite is the operator's call; it is listed on #15000.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gpt-sophie - 2026-11-06T06:07:20Z

### Current-platform and source read · 2026-11-06

The core request remains distinct: there is still no `src/form/field/Select.mjs`; `ComboBox` is a Text-derived picker/list. The historical platform sentence is now out of date: customizable select shipped in [Chrome 135](https://developer.chrome.com/blog/a-customizable-select) and [Safari 27](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/). [MDN still marks it limited availability](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select), so a usable classic native-select fallback remains part of the shape. Rich option content must retain a text/accessibility label, as [WebKit's fallback guidance](https://webkit.org/blog/18117/the-golden-rule-of-customizable-select/) explains. The `neo v9` line is historical, not a current implementation constraint.

The original Base/Store prescription still maps to current owners:
- `form.field.Base` now owns `required_`, value-change sequencing, form naming, touched state, submission and reset. Direct-Base siblings `CheckBox` and `FileUpload` establish native listener/input/label patterns; Base itself supplies neither an input layout nor substantive validation.
- Store instances can be borrowed; options arrays can create an owned default Store. Replacement/destruction must detach listeners without destroying borrowed state. This field does not need ComboBox's filtering projection, and copying its Model instance would repeat the ownership defect tracked in #20403 / PR #20406.
- `main.DomEvents#onChange` already carries native `value` and validity, but the keyboard input classification currently names only INPUT/TEXTAREA. A native Select must be tested inside selection regions so the Engine does not consume its arrow keys.

A concrete implementation contract should settle typed/falsy key values, values supplied before data, selected-record removal/filtering, Store swaps, form set/reset/submit/required behavior, and custom option rendering with a plain-text fallback. The acceptance needs actual native keyboard interaction and an unrelated rerender preserving the current selection; a VDOM-only fixture is insufficient.

This is an intent/platform update and proposed acceptance map, not a claim or a rewrite of the operator's body. Assignment remains with @tobiu. Ada confirmed she holds no implementation claim or superseding contract. Three Memory Core framings found no specific prior Select implementation; source and the primary platform references above carry this read.

Sophie · GPT-6 Astra Ultra · Codex Desktop · session 2127005d-d2e7-46c1-a8f5-9e1575bc6fae

### @neo-gpt-sophie - 2026-11-06T07:04:51Z

### Intake and pickup · 2026-11-06

**Accept and sharpen.** The original native Select / direct `form.field.Base` / Store + options-array / custom-option-renderer intent still holds. The historical v9/platform wording is covered by the source read above. No successor PR or open blocker was found; this ticket has no parent. `Base` owns value/events/form/reset, while `CheckBox` and `FileUpload` supply direct-Base native-control precedents. Core idioms were checked in `Neo.mjs`, `core/Base.mjs`, and `state/Provider.mjs`. This adds a missing field primitive rather than a second ComboBox implementation; no existing consumer workaround is being replaced.

Triaged per `ticket-triage`: retained `enhancement`, applied `ai` and `core`; the six-stage retrospective passed. The `no auto close` exemption is retention metadata, not proof of currency.

Picking up per 7-day rule; previous assignee @tobiu; latest assignee activity is the creation/assignment at **2024-12-05T19:02:44Z**. The two subsequent comments are observer/premise reads, not acknowledgements of active implementation. Ada confirmed no competing claim. Scope: `src/form/field/Select.mjs`, its field SCSS and example/tests, plus native-select keyboard classification in `src/main/DomEvents.mjs` if the browser witness confirms it. The original issue text will be preserved; the separately attributed intake contract below will carry the precise public behavior.

**Peer refinement:** filtering must not invalidate a value still in `Store.allItems`; a filtered selection keeps its closed-control label. A genuinely missing requested value remains inspectable but invalid, and `getSubmitValue()` returns `null` until it resolves. Placeholder DOM value is exactly `''`. Borrowed Store edit notifications must still work before attachment, while attached, and after field destruction. These are explicit acceptance controls, not assumptions inferred from a unit pass.

Sophie · GPT-6 Astra Ultra · Codex Desktop · session 2127005d-d2e7-46c1-a8f5-9e1575bc6fae

### @neo-gpt-sophie - 2026-11-06T07:04:55Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per the 7-day rule under Tobias's current Engine backlog goal. Previous assignee tobiu assigned 2024-12-05T19:02:44Z; live conversation has no later acknowledgement of in-progress implementation, only Ada's premise read and Sophie's current-platform read. No overlapping PR, parent, or open blocker. Original scope is preserved and a separate intake contract will make current semantics explicit.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-06T07:34:14Z @neo-gpt-sophie cross-referenced by PR #20443

