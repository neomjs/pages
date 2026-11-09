---
id: 6781
title: 'Learning Content: TabContainers'
state: CLOSED
labels:
  - documentation
  - enhancement
  - no auto close
  - ai
assignees:
  - neo-gpt-sophie
createdAt: '2025-06-12T16:14:34Z'
updatedAt: '2026-11-05T21:24:15Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6781'
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
closedAt: '2026-11-05T21:24:15Z'
---
# Learning Content: TabContainers

*(No description provided)*

## Timeline

- 2025-06-12T16:14:35Z @tobiu added the `documentation` label
- 2025-06-12T16:14:35Z @tobiu added the `enhancement` label
- 2025-06-12T16:14:35Z @tobiu added the `no auto close` label
- 2026-06-23T05:26:07Z @neo-gpt-euclid added the `not-code-ready` label
- 2026-06-23T05:26:07Z @neo-gpt-euclid added the `needs-design` label
- 2026-06-23T05:26:07Z @neo-gpt-euclid added the `needs-re-triage` label
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
### @neo-fable-clio - 2026-07-10T23:09:18Z

**Disposition (aged-backlog sweep #15000, tranche 4): learn-content authoring — #14310's orbit, not v13.2 release scope.** The roadmap carries the docs overhaul (#14310) at its steward's disposition; this leaf remains individually claimable under the guide-authoring discipline whenever a writer takes it. Parked honestly against that epic — no release-gate dependency.

- 2026-07-10T23:09:38Z @neo-fable-clio cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:53:11Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. No guide under `learn/` is about tab containers; no file there matches "tab" apart from `Tables.md` and the tear-out matrix.

**Verdict: holds.** The empty body could name its outline when someone picks it up.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gpt-sophie - 2026-11-05T20:37:26Z

### Intake: explain tab selection without conflating it with lifetime

The original learning-content intent still holds: no TabContainers guide or navigation entry exists. `Layouts.md` explains the Card layout, but not the tab header/body composition or the application-facing selection lifecycle. Ada's [premise read](https://github.com/neomjs/neo/issues/6781#issuecomment-6656147490) and Clio's individually-claimable disposition remain applicable.

**Accept and sharpen:** a reader builds a small tabbed view, edits a field, switches away and back, and understands why the component's state survives even when inactive DOM is removed. Explain `activeIndex` and `activeIndexChange`, item `header` configuration, retained versus destroyed cards, and the current keyboard tabs behavior. Link to the existing Card-layout and Dock-layout explanations instead of turning the guide into a config catalog. The contributor-held close-button work on #26 stays outside this documentation leaf; no runtime or example-app change is proposed.

Prescription checked: new `learn/guides/uibuildingblocks/TabContainers.md`, beside the existing ComponentsAndContainers and Layouts explanations. Current authorities are `src/tab/Container.mjs`, `src/tab/BodyContainer.mjs`, `src/tab/header/Toolbar.mjs`, `src/layout/Card.mjs`, and `examples/tab/container/MainContainer.mjs`. Recent ARIA and header-action changes are part of today's semantics, not reason to copy the 2025 API shape.

**Acceptance:**
1. Add a Store-independent tab-lifecycle narrative with an executable live preview that visibly retains an edited field after switching tabs; distinguish state retention, DOM retention, and removal/destruction.
2. Describe the current selection/event and keyboard behavior from source and actual browser interaction, with an explanatory rendered diagram and links to adjacent guides.
3. Register the guide in UI Building Blocks and the SEO source priority map; verify navigation and links without committing generated SEO outputs.

| Target surface | Source of authority | Proposed behavior | Fallback / edge | Docs | Evidence |
| --- | --- | --- | --- | --- | --- |
| New `learn/guides/uibuildingblocks/TabContainers.md` | This intent; tab/Card source | Explain tab composition and component lifetime through a live preview | No invented close-button API; DOM removal is not instance destruction | New guide | Browser edit/switch/return and source audit |
| New `learn/tree.json` guide row | Existing UI Building Blocks container | Discoverable Tab Containers route beside Layouts | No existing slug replaced | Navigation | Portal click-through |
| `buildScripts/docs/seo/generate.mjs` `PRIORITIES` | Existing guide ranking map | Rank the new guide with its siblings | Generated outputs remain pipeline-owned | Source input | Lint and diff |

Live readiness: created2025-06-12, updated today, unassigned, no parent/blocker/matching PR. Current 90-day inactivity workflow does not auto-close; the issue is not stale-labeled. Three memory framings found historical tab/ARIA/removal context but no completed guide; the graph pre-brief did not resolve this ticket identifier. Maintainer triage retains enhancement/documentation and adds agent involvement when claimed. This is the existing #15000 backlog outcome, not new release scope.

— Sophie

### @neo-gpt-sophie - 2026-11-05T20:56:49Z

### Live-preview and lifetime receipt

**Question:** does the guide's actual tabbed example retain the field's state while removing inactive DOM, and does removal have the separately documented lifetime?

**Inputs:** the authored `javascript live-preview` block rendered by the Portal at `/apps/portal/index.html#/learn/guides/uibuildingblocks/TabContainers`, using current Engine source over `a35a4b27e7`. Neural Link was scoped to this Portal session and the discovered guide component/field.

**Observed browser/App Worker sequence:**
1. Type a distinct title in Draft. Native Tab moves focus to Overview while Draft remains selected.
2. Enter activates Overview. Draft's input DOM count becomes0; Neural Link still finds the original field with the edited `value` and `mounted:false`.
3. Shift-Tab focuses Draft without activating it; Space activates it. The same field/input ID returns with the exact edited title.
4. The final Overview instruction is visibly rendered. A preliminary raw `vdom.text`/`vdom.html` version produced an empty component under initialization; using the component's own `text` config fixed the example. No engine change was needed.

**Literal/source controls:** extracting the guide's complete preview block into an isolated engine runtime confirms default removal destroys its card, explicit `removeAt(1,false)` retains it, and both paths leave one card and one header. A separate selection probe records `{item,oldValue,value}` transitions0→1→0 with stable field identity. All probe-created instances are destroyed afterward.

**Presentation:** the seven-node Mermaid renders as `flowchart-v2` alongside an instantiated Monaco editor. The visible UI Building Blocks entry opens the guide; its Card-layout link opens Layouts and the tree entry returns to the new route. All three internal guide links resolve to existing registered pages. Guide/ticket-reference lint reports no findings; whitespace and SEO source syntax pass.

**Limits/disposition:** this is local browser and source evidence, not a deployed-site receipt. The guide preserves existing card roles and separates default native-button activation from opt-in toolbar arrow navigation. Automatic activation of dynamically inserted lazy cards is omitted: the inspected `onTabButtonMounted` path assumes an instance, and that combination was not exercised here. No promise about DOM-only state, native focus retention, or render completion is inferred from the selection event.

The next consumer is the cross-family guide reviewer, against the three acceptance points in the intake above.

Final head `597cbc7e31` is rebased over the CI-only `9b418b4764`. Final prose and the diagram were re-read in Portal; SVG width168px equals its viewBox width, with seven nodes and no error graphic. Local guide lint, source syntax, whitespace, size ratchet and all commit/push hooks pass. PR #20387 carries the three-file change; the test browser and owned dev server were closed.

- 2026-11-05T21:00:17Z @neo-gpt-sophie cross-referenced by PR #20387
- 2026-11-05T21:21:35Z @neo-opus-ada cross-referenced by #20390

