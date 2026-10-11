---
id: 8890
title: Fix VDOM Update Collision Logic for Sparse Trees (Teleportation)
state: CLOSED
labels:
  - bug
  - ai
  - regression
  - core
assignees:
  - neo-gpt-sophie
createdAt: '2026-01-26T20:26:23Z'
updatedAt: '2026-10-09T14:57:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8890'
author: tobiu
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
blocking:
  - '[ ] 19502 Sparse ancestors emit an included grandchild''s delta twice'
closedAt: '2026-10-09T14:57:11Z'
milestone: v13.2
---
# Fix VDOM Update Collision Logic for Sparse Trees (Teleportation)

The recent implementation of Disjoint VDOM Updates (Teleportation) introduced a regression where disjoint child updates can be incorrectly dropped from the update batch.

This occurs when:
1. A Parent component is updating with `updateDepth > 1`.
2. The Parent has at least one merged child (triggering Sparse Tree generation via `mergedChildIds`).
3. A Disjoint Child (Distance < ParentDepth) is updating independently in the same batch.
4. The Disjoint Child is NOT in the Parent's `mergedChildIds` set.

The current collision filtering logic (`parentDepth > distance`) deletes the Disjoint Child's update, assuming the Parent will cover it. However, because the Parent is generating a Sparse Tree (`mergedChildIds` is present), `TreeBuilder` prunes any child not in the AllowList.

Result: The Disjoint Child is deleted from the batch AND pruned from the Parent payload, leading to a lost update (e.g., Loading Mask failing to show).

The fix is to refine the collision detection in `src/mixin/VdomLifecycle.mjs` to check if the Parent is excluding the Child (Sparse Mode) before deleting the disjoint update.

## Timeline

- 2026-01-26T20:26:24Z @tobiu added the `bug` label
- 2026-01-26T20:26:24Z @tobiu added the `ai` label
- 2026-01-26T20:26:24Z @tobiu added the `regression` label
- 2026-01-26T20:26:25Z @tobiu added the `core` label
- 2026-04-04T00:37:04Z @Ghost cross-referenced by PR #9675
### @github-actions - 2026-04-27T04:45:53Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-05-11T05:10:24Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T13:16:49Z @neo-opus-grace cross-referenced by #19489
### @neo-gpt-sophie - 2026-10-09T13:49:03Z

### Reproduced on the 13.2 candidate — 2026-10-09

The original sparse-collision defect is still present at Engine `f3b462e84f234f3fec981a8434a1fcbb2c65f180`. The flight fixes in `#19468` / `#19483` do not discharge this different collection/filtering boundary. PR `#9675` was closed without merging.

Single-thread Engine simulation, Node 24.19.0, real Component/Container, TreeBuilder and Helper. No production source was patched. After initializing and settling the four components, the natural mutation order is:

```js
root.setSilent({style: {color: 'green'}, updateDepth: 1});
b.setSilent({text: 'B new'});
parent.setSilent({style: {color: 'purple'}, updateDepth: 2});
a.setSilent({text: 'A new'});
await root.promiseUpdate();
```

The tree is `root → parent → [a, b]`.

| Control | Collected sets / payload | Result |
|---|---|---|
| **Excluded sparse child** | Root merges `b,parent`; parent merges only `a`. Depths are `1,2,1,1`. Final emitted roots are only `root,parent`; parent's `b` reference has `neoIgnore:true`. | **Lost update:** `b.text === 'B new'`, adopted vnode still `'B old'`, no B text delta, `b.needsVdomUpdate === false`. |
| **Included sparse child** | Move B's mutation after the parent's mutation. Parent now merges `b,a` and expands B. | B text delta exists; vnode is `'B new'`. |
| **Full parent** | Keep the failing order but request parent depth `-1`. | B text delta exists; vnode is `'B new'`. |

The collection builds B's separate payload, but `executeVdomUpdate`'s depth-only collision test removes it at lines 346–354 while the covering parent's actual sparse payload excludes it. Flight ownership happens afterward and cannot restore a payload already removed.

The first exploratory run had initial full-depth work still pending, so it was a dense positive control, not a falsifier of the ticket. The three rows above were rerun on the named candidate after settling that initial work.

**Disposition: reopen, current correctness defect relevant to v13.2.** I am taking the bounded repair and regression controls. This is a unit-level data-loss witness, not a browser-specific paint or performance claim. The two other routed investigations (`#8873`, `#8874`) remain separate.

Origin Session ID: e6ce4d70-a7ff-454e-996d-e7c25efdf4cf


### @neo-gpt-sophie - 2026-10-09T14:05:59Z

### Reproduced repair and hot-path check

The four natural-order controls now pass: a dirty sibling excluded by a finite sparse parent stays a separate root; an included sibling is absorbed; finite dense and full-depth parents still absorb covered children. Clean siblings remain pruned in sparse payloads. Before the source repair, the excluded-sibling arm produced no new-text delta. The final related VDOM/core/grid unit selection passes 233 tests on Node 24.19.0.

The change reuses each payload's existing allowlist and lazily allocates a scope map only when a finite sparse payload exists. No extra component-tree walk or forced dense expansion.

**Outside-CI profile:** exact `executeVdomUpdate` implementations from `f3b462e84f` and this repair, same live component tree, interleaved A/B order, 25 warmups then 101 samples per side. The timer starts after the method's queue delay and stops at `beforeExecuteVdomUpdate`: App-worker payload preparation and collision/in-flight bookkeeping only. The real Helper runs and each B text adoption is asserted after every sample.

| Siblings | Shape | Before median ms | After median ms | Payload bytes before/after | Roots before/after |
|---:|---|---:|---:|---:|---:|
| 32 | disjoint | 0.071750 | 0.071375 | 6193 / 6193 | 4 / 4 |
| 32 | sparse | 0.055791 | 0.058167 | 5841 / 5841 | 2 / 2 |
| 512 | disjoint | 0.510583 | 0.508583 | 76681 / 76681 | 4 / 4 |
| 512 | sparse | 0.497500 | 0.488000 | 76321 / 76321 | 2 / 2 |

This supports a small local preparation cost with unchanged payload shape; it is not a browser frame-time or end-to-end worker-roundtrip measurement.

<details><summary>Reproduction: run from the Engine checkout with Node 24.19.0 and --input-type=module</summary>

```javascript
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import {setup} from './test/playwright/setup.mjs';
import Neo from './src/Neo.mjs';
import * as core from './src/core/_export.mjs';
import Component from './src/component/Base.mjs';
import Container from './src/container/Base.mjs';
import VDomUpdate from './src/manager/VDomUpdate.mjs';
import Helper from './src/vdom/Helper.mjs';
import Creator from './src/vdom/util/DomApiVnodeCreator.mjs';
setup({neoConfig:{allowVdomUpdatesInTests:true,useDomApiRenderer:true,useVdomWorker:false},appConfig:{name:'SparseCollisionProfile'}});
Neo.applyDeltas = async () => {};
const path = 'src/mixin/VdomLifecycle.mjs';
const sources = {
  before: execFileSync('git',['show','f3b462e84f:'+path],{encoding:'utf8'}),
  after: readFileSync(path,'utf8')
};
const methods = Object.fromEntries(Object.entries(sources).map(([label,source])=>{
  const start=source.indexOf('    async executeVdomUpdate(resolve, reject) {');
  const end=source.indexOf('\n    }\n',start)+6;
  assert(start>=0 && end>start);
  const method=source.slice(start,end).replace(
    'await new Promise(resolve => setTimeout(resolve, 1));',
    'await new Promise(resolve => setTimeout(resolve, 1)); this.profileStarted = performance.now();');
  return [label,new Function('Neo','VDomUpdate','currentWorker','return ({'+method+'}).executeVdomUpdate')(Neo,VDomUpdate,Neo.currentWorker)];
}));
const median = values => [...values].sort((a,b)=>a-b)[Math.floor(values.length/2)];
let sequence=0;
for (const size of [32,512]) {
 const root=Neo.create(Container,{appName:'SparseCollisionProfile',items:[{module:Container,items:Array.from({length:size},(_,i)=>({module:Component,text:'old '+i}))}]});
 await root.ready(); await root.initVnode(); root.mounted=true;
 const parent=root.items[0], a=parent.items[0], b=parent.items[1];
 for (const component of [root,parent,...parent.items]) await component.promiseUpdate();
 for (const mode of ['disjoint','sparse']) {
  const samples={before:[],after:[]}, bytes={before:[],after:[]}, roots={before:[],after:[]};
  const original=Helper.updateBatch;
  let label;
  Helper.updateBatch=function(data) {
   bytes[label].push(JSON.stringify(data).length);
   roots[label].push(Object.keys(data.updates).length);
   return original.call(this,data);
  };
  root.beforeExecuteVdomUpdate=function(){samples[label].push(performance.now()-this.profileStarted)};
  try {
   for (let i=0;i<126;i++) {
    for (label of (i%2?['before','after']:['after','before'])) {
     sequence++;
     root.executeVdomUpdate=methods[label];
     root.setSilent({style:{zIndex:sequence},updateDepth:1});
     parent.setSilent({style:{zIndex:sequence},updateDepth:mode==='sparse'?2:1});
     a.setSilent({text:'A '+sequence});
     b.setSilent({text:'B '+sequence});
     await root.promiseUpdate();
     assert.equal(b.vnode.textContent,'B '+sequence);
     if(i<25){samples[label].pop();bytes[label].pop();roots[label].pop();}
    }
   }
  } finally {Helper.updateBatch=original;}
  const before=median(samples.before), after=median(samples.after);
  console.log(JSON.stringify({size,mode,samples:samples.before.length,beforeMs:before,afterMs:after,deltaMs:after-before,ratio:after/before,payloadBytes:{before:median(bytes.before),after:median(bytes.after)},emittedRoots:{before:median(roots.before),after:median(roots.after)}}));
 }
 root.destroy();
}
```

</details>

- 2026-10-09T14:07:28Z @neo-gpt-sophie cross-referenced by PR #19499
- 2026-10-09T14:18:41Z @neo-gpt-sophie cross-referenced by #8873
- 2026-10-09T14:19:18Z @neo-gpt-sophie cross-referenced by #8874
### @neo-gpt-sophie - 2026-10-09T14:22:30Z

### Reviewer hypothesis tested; separate duplicate-work follow-up

Ada approved the lost-update repair at `8f497d9f4e` ([review](https://github.com/neomjs/neo/pull/19499#pullrequestreview-5471299042)). I ran her non-blocking leapfrog falsifier:

- initialized/settled tree: root → parent → B;
- `root.setSilent({style: {color: 'green'}, updateDepth: 2})`;
- `b.setSilent({text: 'B new'})`;
- `await root.promiseUpdate()`.

Root's merged IDs include B and the bridge parent. The batch emits root and B; its deltas contain **two identical B text updates**. B adopts the correct final vnode. This is extra batch work, distinct from the omitted update fixed here; the finite-depth collision clause predates this repair. No change is made to the approved head on this evidence alone. A bounded follow-up needs to make deduplication honor sparse expansion past the nominal depth, retaining depth-only coverage for dense payloads.

- 2026-10-09T14:25:57Z @neo-gpt-sophie cross-referenced by #19502
- 2026-10-09T15:29:26Z @neo-gpt-sophie cross-referenced by PR #19509

