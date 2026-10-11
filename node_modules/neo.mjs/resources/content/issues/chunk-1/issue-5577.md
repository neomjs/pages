---
id: 5577
title: 'worker.mixin.RemoteMethodAccess: accessing new main threads too early'
state: CLOSED
labels:
  - bug
  - no auto close
assignees:
  - tobiu
  - neo-opus-ada
createdAt: '2024-07-15T17:47:45Z'
updatedAt: '2026-09-15T10:19:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5577'
author: tobiu
commentsCount: 3
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
closedAt: '2026-09-15T10:19:56Z'
---
# worker.mixin.RemoteMethodAccess: accessing new main threads too early

> **Current state, 2026-09-15.** Read at `dev@624ae90841`. This body is the record; the thread below it is history. The 2024 report and its two options are preserved under *Origin*.

## The defect

The app worker calls a main-thread remote before that thread has registered it. The 2024 sighting was theme-file loading against a newly opened window in the colors websocket demo: `Neo.main.addon.Stylesheet.addThemeFiles(…)` reaches a main thread whose `Stylesheet` addon has not registered, and the call rejects with an invalid-namespace error.

## What already shipped

`Main#onDomContentLoaded` is deterministic today (#7815 lineage):

```js
const instances = modules.map(module => me.registerAddon(module.default));

await Promise.all(instances.map(instance => instance.remotesReady()));
await me.remotesReady();

WorkerManager.onWorkerConstructed({origin: 'main'})
```

`core.Base#remotesReady()` resolves inside `initAsync`, after `initRemote()` has sent the registrations. So a window's boot addons are registered before that window reports itself constructed — the 2024 option 1, for the boot path.

## What this ticket fixes

**The runtime import path had no such gate.** `Main#importAddon` — called by `worker.App#importAddon` and by `ai.client.InteractionService` — created the addon and slept:

```js
this.registerAddon(module.default);
await this.timeout(20); // Wait until remotes are registered
```

The caller uses the addon's proxy the moment that promise settles, and registration is a round trip through `core.Base#initRemote` — no fixed delay bounds a round trip. That is the same defect as the 2024 sighting, on the path that stayed unguarded. It now awaits `registerAddon(...).remotesReady()`, the promise the boot path waits on.

**Registration is not readiness.** `main.addon.Base#initAsync` awaits `super.initAsync()`, which resolves `remotesReady`, and only afterwards its `#loadFilesPromise`. So Monaco, Mermaid, AmCharts and OpenStreetMaps register early and merely stay `isReady: false` while their libraries load — a lazily loading addon may never reach readiness at all. The caller wants the proxy, not the library, so `remotesReady()` is the gate and `ready()` would hang. (First recorded here with the two confused; corrected after @neo-gpt-emmy's R1 on the PR.)

## The fixed delays that remain, and why

Named here so the next reader does not re-derive them:

| site | what it guards | can it become deterministic today |
|---|---|---|
| `worker.Manager#onWorkerConstructed`, `loadApplicationDelay` (20 ms), commented *"better safe than sorry => all remotes need to be registered"* | the window's workers having registered **every** remote, not just their own worker singleton's | **No.** A worker announces `workerConstructed` from `onConstructed`, synchronously, while each of its singletons schedules `initRemote` in its own microtask. 50 source files declare a `remote` config; there is no worker-wide registry of pending `initAsync` work, so nothing can be awaited. A gate needs that registry first — a design change, not a substitution. |
| `worker.Base#onConnect` and `worker.App#onConnect`, `await this.timeout(10)` | the app's view controllers being in place before `connect` fires | Out of scope: a different concern from remote registration, and its own readiness signal. |

## Acceptance Criteria

- [ ] AC-1 — An addon imported at runtime has its remotes registered before `Main#importAddon` resolves, and the arm separates that from readiness: a real `main.addon.Base` whose files never load and whose `initRemote` is delayed must resolve the import with `registered: true` and `isReady: false`, with an instantly registering addon as the control that the arm reads state rather than elapsed time.
- [ ] AC-2 — The arm fails against both neighbouring gates. *(Mutations: the restored 20 ms sleep resolves before registration, `registered: false`; `ready()` in place of `remotesReady()` never resolves at all.)*
- [ ] AC-3 — The remaining fixed delays are recorded above with what each guards and what a deterministic replacement would require, so this ticket does not close as if the whole class were gone.

## Origin (2024-07-15, @tobiu)

> It is an edge-case bug which does happen inside our colors app websocket demo: the app worker tries to send messages to the new main thread => loading theme files, before these remotes have been registered.
>
> 2 options:
> 1. debug the "app is ready" => connect event to ensure it fires once all main thread addons are ready.
> 2. if a namespace does not exist yet, try again 100(?)ms later

Option 1 shipped for the boot path and is completed here for the runtime path. Option 2 is not taken: retrying a call whose namespace is absent turns a race into a slower race, and the readiness promise it would poll for already exists.

## Related

- #7815 — the boot-path gate that replaced the first sleep
- PR for this ticket: the runtime path


## Timeline

- 2024-07-15T17:47:45Z @tobiu added the `bug` label
- 2024-07-15T17:47:46Z @tobiu assigned to @tobiu
### @github-actions - 2024-10-14T02:36:16Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-10-14T02:36:17Z @github-actions added the `stale` label
### @github-actions - 2024-10-28T02:38:39Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-10-28T02:38:40Z @github-actions closed this issue
- 2024-10-28T12:24:25Z @tobiu reopened this issue
- 2024-10-28T12:24:39Z @tobiu removed the `stale` label
- 2024-10-28T12:24:39Z @tobiu added the `no auto close` label
### @tobiu - 2024-10-28T12:25:01Z

this one must not auto close.

- 2026-09-15T07:29:28Z @neo-opus-ada assigned to @neo-opus-ada
- 2026-09-15T07:58:49Z @neo-opus-ada cross-referenced by PR #18728
- 2026-09-15T08:25:14Z @neo-opus-ada referenced in commit `9c8f3cc` - "fix(main): the runtime addon gate is registration, and the arm now says which (#5577)

@neo-gpt-emmy's R1: `main.addon.Base#initAsync` awaits `super.initAsync()` — which
resolves `remotesReady` — and only then its `#loadFilesPromise`. So registration
precedes library loading, and the rationale this branch shipped was wrong: Monaco,
Mermaid and AmCharts register early and are merely not `isReady` for a long time.

The gate is unchanged and still correct, because registration is what the caller's
proxy depends on: it is a round trip through `core.Base#initRemote`, which no fixed
delay bounds. What changes is what the arm proves. It now drives a real
`main.addon.Base` with `useLazyLoading: true`, so its files never load, and a delayed
`initRemote`. The import must resolve with `registered: true` while `isReady` stays
false.

Both mutations red: with the old 20 ms sleep the import resolves before registration
(`registered: false`), and with `ready()` in place of `remotesReady()` it never
resolves at all.

Co-Authored-By: Ada <neo-opus-4-7@neomjs.com>"
- 2026-09-15T09:41:39Z @neo-opus-ada referenced in commit `080ec62` - "fix(main): an addon imported at runtime is registered before its importer continues (#5577)

`Main#importAddon` created the addon and then slept 20 ms, commented "Wait until
remotes are registered". The caller is an app worker that uses the addon's remote
proxy as soon as the promise settles, and an addon that loads external files —
Monaco, Mermaid, AmCharts — reaches its registration well past any fixed delay.

`core.Base#remotesReady()` is the deterministic signal, and `onDomContentLoaded`
already awaits it for every boot addon. The runtime path now awaits the same
promise on the instance `registerAddon` returns.

Arm in `MainWorkspaceAddon.spec.mjs`: an addon whose `initAsync` takes 60 ms, plus
an instant one as the control that the arm reads readiness rather than a delay.
Against the sleep, the slow arm fails: the caller continues while the addon's init
is still running."
- 2026-09-15T09:41:39Z @neo-opus-ada referenced in commit `d8f24bf` - "fix(main): the runtime addon gate is registration, and the arm now says which (#5577)

@neo-gpt-emmy's R1: `main.addon.Base#initAsync` awaits `super.initAsync()` — which
resolves `remotesReady` — and only then its `#loadFilesPromise`. So registration
precedes library loading, and the rationale this branch shipped was wrong: Monaco,
Mermaid and AmCharts register early and are merely not `isReady` for a long time.

The gate is unchanged and still correct, because registration is what the caller's
proxy depends on: it is a round trip through `core.Base#initRemote`, which no fixed
delay bounds. What changes is what the arm proves. It now drives a real
`main.addon.Base` with `useLazyLoading: true`, so its files never load, and a delayed
`initRemote`. The import must resolve with `registered: true` while `isReady` stays
false.

Both mutations red: with the old 20 ms sleep the import resolves before registration
(`registered: false`), and with `ready()` in place of `remotesReady()` it never
resolves at all."
- 2026-09-15T10:19:56Z @tobiu referenced in commit `34bf540` - "fix(main): an addon imported at runtime is registered before its importer continues (#5577) (#18728)

* fix(main): an addon imported at runtime is registered before its importer continues (#5577)

`Main#importAddon` created the addon and then slept 20 ms, commented "Wait until
remotes are registered". The caller is an app worker that uses the addon's remote
proxy as soon as the promise settles, and an addon that loads external files —
Monaco, Mermaid, AmCharts — reaches its registration well past any fixed delay.

`core.Base#remotesReady()` is the deterministic signal, and `onDomContentLoaded`
already awaits it for every boot addon. The runtime path now awaits the same
promise on the instance `registerAddon` returns.

Arm in `MainWorkspaceAddon.spec.mjs`: an addon whose `initAsync` takes 60 ms, plus
an instant one as the control that the arm reads readiness rather than a delay.
Against the sleep, the slow arm fails: the caller continues while the addon's init
is still running.

* fix(main): the runtime addon gate is registration, and the arm now says which (#5577)

@neo-gpt-emmy's R1: `main.addon.Base#initAsync` awaits `super.initAsync()` — which
resolves `remotesReady` — and only then its `#loadFilesPromise`. So registration
precedes library loading, and the rationale this branch shipped was wrong: Monaco,
Mermaid and AmCharts register early and are merely not `isReady` for a long time.

The gate is unchanged and still correct, because registration is what the caller's
proxy depends on: it is a round trip through `core.Base#initRemote`, which no fixed
delay bounds. What changes is what the arm proves. It now drives a real
`main.addon.Base` with `useLazyLoading: true`, so its files never load, and a delayed
`initRemote`. The import must resolve with `registered: true` while `isReady` stays
false.

Both mutations red: with the old 20 ms sleep the import resolves before registration
(`registered: false`), and with `ready()` in place of `remotesReady()` it never
resolves at all."
- 2026-09-15T10:19:56Z @tobiu closed this issue

