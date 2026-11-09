---
id: 65
title: 'RealWorld app: onLogin => forward to home, adjust the header buttons'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2019-11-19T16:30:11Z'
updatedAt: '2019-11-19T17:33:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/65'
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
closedAt: '2019-11-19T17:33:03Z'
---
# RealWorld app: onLogin => forward to home, adjust the header buttons

similar to the logout logic.

## Timeline

- 2019-11-19T16:30:11Z @tobiu added the `enhancement` label
- 2019-11-19T16:30:11Z @tobiu assigned to @tobiu
- 2019-11-19T17:32:48Z @tobiu referenced in commit `0268dc9` - "RealWorld app: onLogin => forward to home, adjust the header buttons #65"
### @tobiu - 2019-11-19T17:33:03Z

done.

- 2019-11-19T17:33:03Z @tobiu closed this issue
- 2026-09-01T20:35:23Z @neo-fable-clio cross-referenced by #18042
- 2026-09-01T21:46:34Z @neo-fable-mnemosyne cross-referenced by #17836
- 2026-09-02T10:47:16Z @neo-fable-mnemosyne cross-referenced by PR #18069
- 2026-09-02T12:40:40Z @tobiu referenced in commit `bcadadb` - "fix(toolbar): a withdrawn action has no DOM node, so no consumer stylesheet can resurrect it (#18042) (#18069)

* fix(toolbar): a withdrawn action has no DOM node, so no consumer stylesheet can resurrect it (#18042)

The zero-gap rail collapsed a context-inactive action with one (0,2,0) engine rule,
`display: none` on the inactive class, and any viewport-scoped consumer rule on
`.neo-toolbar-action` outranked it silently: ghost verbs reserving space on every
resting rail (institution PR #65 reached (0,5,0)). Escalating specificity only moves
the tie to the next consumer.

The collapse is now the component's own absence primitive. `applyContextualActionState`
stamps `vdom.removeDom` on the retained instance (same instance, listeners and place in
the actions array, no node) and hands presence back to the consumer's `hidden` on
reveal, with one update at the owner. The hold is a new `component.Base#domWithheld`
flag that `show()` honours: a consumer un-hiding a withdrawn action cannot re-insert
it on any path, including the second `show()` that `component.Abstract#set()` runs
after its silent pass, which fires past every `hiddenChange` listener (the dock's own
`syncDockReloadAction` un-hides through `set({disabled, hidden})`). The inactive class
stays on the instance as the Overflow measurement marker and never reaches a node, so
the SCSS rule is gone.

Witnesses: the four dock specs and ContainerUi read absence (`toHaveCount(0)`) instead of
the class; OverflowAction gains the consumer-CSS arm ((0,5,0), (0,3,0) and `!important`
rules cannot give a withdrawn action a box, the partition survives, reveal returns the
same node id); HeaderActions covers the removeDom stamps, the assigned and the batched
consumer un-hide while withdrawn, and contributed/replaced actions being absent before
their first render.

* test(dock): the boot-sweep and rail-partition witnesses read absence through the gate (#18042)

Two component witnesses outside the first run still read a withdrawn action as a
node. DockBootSweep asserted the sweep's reveal as rendered chrome without focus;
DockRailPartition counted `display: none` actions as its non-vacuity guard. A
withdrawn action now has no node, so both open the header's gate through the same
reactive config the focus wiring writes (`contextualActionsVisible`) — no pane is
activated and no focus moves, so the boot scope holds. The partition arm proves
withdrawal after the subject is measured: the rendered action cluster must grow
once the gate opens, or the arm reds."
- 2026-10-04T11:41:43Z @neo-opus-vega cross-referenced by #15000

