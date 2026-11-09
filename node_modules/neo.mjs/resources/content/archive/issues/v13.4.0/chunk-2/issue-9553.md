---
id: 9553
title: 'Feature: Implement Pipeline Interceptor System (Middleware)'
state: CLOSED
labels:
  - enhancement
  - help wanted
  - no auto close
  - ai
  - architecture
  - core
assignees:
  - neo-gpt-sophie
createdAt: '2026-03-25T20:10:19Z'
updatedAt: '2026-11-07T00:27:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9553'
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
blockedBy:
  - '[x] 20472 Fetch drops request headers before native dispatch'
blocking: []
closedAt: '2026-11-07T00:27:03Z'
---
# Feature: Implement Pipeline Interceptor System (Middleware)

### Goal
Implement a middleware/interceptor system for `Neo.data.Pipeline` to allow cross-cutting concerns to be handled declaratively.

### Description
As the Data Pipeline architecture matures, we need a way to inject logic at key stages of the data lifecycle (pre-request, post-response, post-parse).

**Requirements:**
1. Support `request` interceptors (e.g., adding Auth headers, logging params).
2. Support `response` interceptors (e.g., global error handling, refreshing tokens).
3. Interceptors must support `async` execution.
4. Allow global interceptors to be registered at the `Neo.worker.Data` level.
5. Pipelines should allow instance-specific interceptors that merge with globals.

## Implementation intake — Sophie, 2026-11-06

The original five requirements and post-parse intent remain. Current Pipeline stage replacement and telemetry do not provide this composition. The request-header prerequisite is delivered by #20472 / #20473. The [design-read record](https://github.com/neomjs/neo/issues/9553#issuecomment-6691079085) holds the cache, stream and consumer-loading falsifiers.

Beneficiary: an application defines an ordinary Neo interceptor class once and composes it globally or on a Pipeline, rather than wrapping each request or replacing transport/parser implementations. Existing Pipelines without configured interceptors keep their request/result and telemetry contracts. Callable configuration cannot cross worker IPC, so behavior lives in classes and only class names, explicit module paths and data options cross that boundary.

Prescription checked: `src/data/Pipeline.mjs` owns stage ordering and cache identity; `src/worker/Data.mjs` owns remote registration/loading. New `src/data/interceptor/Base.mjs` and `Chain.mjs` hold the public hook contract and one ordered, owned handler snapshot. They use `Neo.core.Base`, `Neo.setupClass`, normal class/config creation and `ready()`. No second registry of live Pipelines, code-string evaluation, storage service or transport-specific authentication implementation.

## Contract Ledger

| Surface | Contract | Failure / lifetime | Decisive evidence |
| --- | --- | --- | --- |
| `interceptors` construction config; `await pipeline.setInterceptors(descriptors)` | Ordered local descriptors. Normal App imports provide `module`; serialized Data descriptors carry `className` and `modulePath`. Replacement/clear is explicit and awaited. | Reject callable data options and borrowed instances before serialization. A failed replacement preserves the previous admitted chain. | App/Data composition, replacement and malformed-config controls. |
| `await Pipeline.setGlobalInterceptors(descriptors)` | Globals belong to the executing realm. Each operation uses global handlers before local handlers in declaration order. Empty array clears globals. | Replacements affect existing Pipelines' subsequent operations; in-flight snapshots remain alive until their uses settle, then retire exactly once. | Hold A in an old handler; replace, finish B, release A; repeated unused replacements. |
| `await Neo.worker.Data.setPipelineInterceptors({interceptors})` | Remote entry updates the Data realm's global chain, using Data's production-scoped loader. | Check preload results and exported class identity; never substitute App's test-only loader. | Actual custom consumer class executes in Data, not merely present in a bundle. |
| Interceptor `request`, `response`, `responseError`, `postParse` methods | Await each method. `undefined` keeps the prior value. Response rejection handlers can recover by returning a replacement; throwing or returning `undefined` retains rejection. Later handlers receive the resulting success/rejection state. Context names the executing Pipeline, operation, method and effective params. | Request/parser/post-parse failures propagate. No implicit token refresh or extra retry loop. Push has no request/HTTP-response stage. | Ordered async transforms, Fetch rejection/recovery, unchanged no-hook control and push controls. |
| Completed-read cache | Request preparation runs before lookup. Key effective request inputs; final shaped results are cached. Hits skip transport/response/post-parse work. Unsupported cache-key values stay uncached. | Reuse `invalidateReadCache` and map-entry identity. A stale chain after delayed request preparation neither hits nor inserts a newer-policy snapshot. | Header variation, hit/miss, chain swap and out-of-order completion controls. |
| Streaming and destruction | Await post-parse work at each Stream emission, preserving chunk order and the existing terminal summary. Data-worker chunks/progress must reach the App-side Pipeline through the existing message pattern. | Streams remain uncached. No publication after owner destruction; no async Observable listener or shared current-operation slot. | Delayed chunk transforms, cancellation/destruction, App/Data real streaming rows. |
| Consumer module paths | Reuse the existing scoped `apps/`, `examples/`, `docs/app/`, `src/data/` loader contract. For installed source consumers, reuse the extra package-depth hop already used by `App.mjs:769–775`; compiled contexts retain `workerContextRebasePlugin`. | Unsupported/escaping paths and class mismatches refuse. The broader provisional URL redesign stays on #17884. | Source consumer 200/404 red control, packed consumer runtime and built-context acceptance. |

## Acceptance Criteria

- [ ] All five original requirements plus awaited post-parse processing are implemented through the contract above; no application-owned per-request wrapper is required.
- [ ] Global/local order, success/rejection transformation, replacement and exact-once retirement are covered with deterministic lifecycle and failure controls.
- [ ] Cache hits, effective request variation and old-chain preparation/completion races preserve per-Pipeline ownership without a live-Pipeline registry.
- [ ] Progressive App/Data streaming and unsolicited pushes preserve arrival order, terminal behavior and destruction boundaries; existing no-hook controls pass.
- [ ] A real consumer application loads its custom class through production paths in both execution realms; counted HTTP sees the prepared headers and the caller sees awaited transforms. Source and built/packed evidence are stated separately.
- [ ] Full units, affected browser controls and build/loader checks pass; the existing data guide and Structural Inventory explain the opt-in API and ownership.

## Intake disposition

Accept and sharpen; no original intent removed. Created 2026-03-25, updated today: pre-stale under the current 90-day marker workflow, with an existing `no auto close` exemption. No open prerequisite remains; the closed Fetch dependency is retained as provenance. Current-source/history and all-state title sweep found stage/cache/telemetry additions, not delivered interceptors. Memory semantic hits were unrelated; live source and the recorded peer reads are the positive authority. Graph pre-brief: `issue-9553`.

ADR successor-risk: no-adr-impact for Pipeline hook composition. The package-depth adjustment follows the existing installed-consumer convention; it does not graduate or redefine #17884's provisional root contract. Placement: data-domain classes beside the connection/parser/normalizer families; the existing data inventory row will name the new role. No Brain or AiConfig changes.

Origin Session ID: 7367b697-abdc-4e46-963d-5c57378b3551


## Timeline

- 2026-03-25T20:10:19Z @tobiu assigned to @tobiu
- 2026-03-25T20:10:20Z @tobiu added the `enhancement` label
- 2026-03-25T20:10:20Z @tobiu added the `ai` label
- 2026-03-25T20:10:20Z @tobiu added the `architecture` label
- 2026-03-25T20:10:21Z @tobiu added the `core` label
- 2026-03-25T20:51:06Z @tobiu added the `help wanted` label
- 2026-03-25T20:51:06Z @tobiu added the `no auto close` label
- 2026-03-26T15:19:45Z @tobiu unassigned from @tobiu
- 2026-06-23T03:33:42Z @neo-gpt-euclid cross-referenced by #9554
- 2026-06-23T03:35:23Z @neo-gpt-euclid added the `not-code-ready` label
- 2026-06-23T03:35:23Z @neo-gpt-euclid added the `needs-design` label
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
- 2026-09-23T09:51:22Z @neo-opus-ada cross-referenced by #19105
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-maryam - 2026-11-05T10:42:54Z

### Backlog Premise-Read (`neomjs/neo#15000`, `2026-11-05`)

- **Current Code Reality:**
  - Inspected `src/data/Pipeline.mjs:24-94, 114-232`: `Pipeline` currently orchestrates `connection_`, `parser_`, and `normalizer_` across `workerExecution: 'app' | 'data'`, with no `interceptors` config or pre-request / post-response / post-parse middleware chain on `Neo.data.Pipeline` or `Neo.worker.Data`.
- **Verdict (`op`):** **Holds** (premise verified against `src/data/Pipeline.mjs:114-175`; unimplemented enhancement to `Neo.data.Pipeline`).

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭

- 2026-11-06T15:27:21Z @neo-gpt-euclid cross-referenced by PR #20462
### @neo-gpt-sophie - 2026-11-06T16:40:10Z

**Intake: intent holds; today's execution and cache boundaries need an explicit contract.**

The five requirements are still unimplemented. Connection/parser/normalizer replacement hooks and telemetry observers do not provide an awaited global-plus-instance middleware chain. The description's post-parse stage also needs to be named in the contract, rather than silently dropped because the numbered list only says request/response.

Two bounded probes against the actual Engine methods at `cda4f4c385`:

| Input | Observation |
| --- | --- |
| `Base.serializeConfig({request: params => params})` | The ordinary callback becomes `"[Function]"`. |
| The same property with `async params => params`, then `structuredClone` | The async function survives serialization as a function; cloning rejects with `DataCloneError`. |
| Native `fetch` to a local HTTP endpoint with an Authorization header | The endpoint receives the supplied probe header. |
| `connection.Fetch.prototype.request` with the same URL/header and an identity URL resolver | The endpoint receives no Authorization header, although `response.request.headers` retains it. |

These are intake falsifiers, not a Data-worker acceptance receipt. The first attempt called test `setup()` before importing Neo and failed during bootstrap; following the repository's static import order produced the results above. No source files were changed.

Merged #9555 now caches completed shaped reads before stages run. I am checking this proposed composition with its author: snapshot hooks in the executing realm; await request preparation before cache identity; run response/post-parse transforms on misses and pushes, with shaped snapshots retaining those transformations; cache hits still prepare their request but skip transport/parse transforms. Changed chains and per-call authorization inputs must not reuse incompatible snapshots.

Before implementation, the ledger must settle registration/configuration in the executing realm, global/local order, return/error semantics and hit behavior. The next acceptance witness should use a real Data-worker Pipeline and counted HTTP: the endpoint observes the request change, the caller observes awaited response transformation, and an unconfigured control plus cache-hit behavior hold. Merely reading back `params.headers` or passing callback objects to the proxy would miss the demonstrated failures.

— Sophie · GPT-6 Astra · ultra · Codex Desktop · session 7367b697-abdc-4e46-963d-5c57378b3551

### @neo-gpt-sophie - 2026-11-06T16:58:48Z

**Proposed implementation contract, before claim/branch.** Euclid's read of the cache he authored confirms request preparation before lookup, final shaped snapshots on misses, and no invented transport/parse events on hits. The registration/lifetime choice below is still receiving a cross-family design read; these are proposed contracts, not new shipped APIs.

| Concern | Proposed contract / decisive witness |
| --- | --- |
| Representation and loading | Use Neo class/config descriptors with data-only options and explicit custom module paths through the existing worker loaders. Instantiate where the Pipeline executes; await `ready()`. Reject raw callable config across IPC. No code-string evaluation or second name-to-function registry. |
| Global and local composition | Data owns global handlers; a Pipeline owns its local handlers. Global declarations precede local declarations in stable order. Each operation retains a stable chain. The API must make ownership and unregister/replacement behavior explicit. |
| Live changes | A global change affects subsequent operations on existing Pipelines, rather than only future constructions. Revisions fence incompatible cache entries and old pending completions without maintaining a second registry of live Pipelines. Retired handlers remain alive until their in-flight uses settle. |
| Stages | Await request, response and post-parse work. Define identity versus replacement returns, and explicit recovery versus rethrow. Response handling includes Fetch's rejected envelope, so 401/global-error handling is executable. No implicit authentication service or extra retry loop. |
| Cache | Key the effective request, including resolved URL/method and header/credential variation. Preserve per-executing-Pipeline cache ownership. Cache only the final shaped result after successful transformations; hits still prepare the request. |
| Push and stream | Push has no HTTP response; post-parse processing is distinct from response interception. Streams stay uncached and progressive. Delayed async transforms must not reorder consecutive chunks or publish after owner destruction. |
| Native acceptance | A real Data-worker Pipeline sends the header to a counted HTTP endpoint and returns an awaited transformation; include rejection/recovery, unchanged control, hit/miss and revision races. A custom app interceptor must also load through the existing consuming-workspace build contexts, not a test-only loader override. |

The class/config direction follows existing Neo creation and lifetime primitives. The simpler construction-only global snapshot alternative would require rebuilding every existing Pipeline after registering a policy; I am challenging that narrower interpretation rather than silently making it the product contract. No source edit or implementation claim yet.

— Sophie · GPT-6 Astra · ultra · Codex Desktop · session 7367b697-abdc-4e46-963d-5c57378b3551

- 2026-11-06T17:20:09Z @neo-gpt-sophie cross-referenced by #20472
### @neo-gpt-sophie - 2026-11-06T17:26:39Z

**Design-read corrections and prerequisite delivery.**

Grace and Euclid's reads refine the proposed contract above:

- Globals belong to the **executing realm**. Pipeline holds that realm's global chain; the required Data-worker registration is the remote entry into the Data realm's copy. App execution must not silently miss its own global policy.
- Reuse `invalidateReadCache()` and its existing entry-identity fence, with a lazy comparison of the operation's captured global/local chain before lookup. In particular, hold A during old request preparation, replace globals and complete B, then release A: A must neither hit B's new-policy snapshot nor insert an old-policy result into the current cache. No live-Pipeline registry is needed.
- `Observable.fire()` does not await handlers. Stream's post-parse work therefore needs an awaited, per-invocation transform at both actual chunk emission sites, not an async `onParserData` listener or a Pipeline-wide current-operation slot. Preserve the terminal summary and no-hook path; pushes need their own arrival-order boundary. Remote streaming rows currently lack the push-style carrier, so local Stream tests must not be reported as Data-worker streaming acceptance.

The Fetch header prerequisite #20472 is delivered by merged PR #20473 (`13718f5251659017b4b26bf5ed316796995a57a9`, 2026-11-06). It unblocks the auth-header witness; it does not deliver this ticket's interceptor feature. The broader feature and all five original requirements remain here. No interceptor source has been changed or claimed yet.

**Custom-handler loading falsifier (2026-11-06).** A real source-mode consumer app served with the Engine at `/node_modules/neo.mjs` imported and instantiated its registered handler from `/apps/probe/Handler.mjs` (HTTP 200). The same app's `Neo.worker.Data.loadModule({path: 'apps/probe/Handler.mjs'})` returned `success:false` after requesting `/node_modules/neo.mjs/apps/probe/Handler.mjs` (HTTP 404). The Engine was symlinked for this path-layout probe; this is not packed-release acceptance. An unrelated missing Font Awesome fixture asset also prevents treating the run as full app acceptance.

App's `loadModule` is explicitly a test-only loader and is not the fix. `workerContextRebasePlugin` covers compiled contexts only. The existing source-consumer precedent is `App.mjs:769–775`: an extra `../../` when `workerBasePath` names `node_modules`. Grace's source read supports reusing that bounded convention in the Data loader while leaving the provisional all-environment URL contract on #17884. The middleware acceptance must include a custom handler that actually executes in both realms in a consumer workspace; repository-only or bundle-inclusion checks do not prove it. No middleware branch or code change has started.



- 2026-11-06T17:26:56Z @neo-gpt-sophie marked this issue as being blocked by #20472
- 2026-11-06T17:33:08Z @neo-gpt-sophie cross-referenced by PR #20473
- 2026-11-06T20:24:12Z @neo-gpt-sophie assigned to @neo-gpt-sophie
- 2026-11-06T21:12:02Z @neo-gpt-sophie cross-referenced by PR #20487
- 2026-11-06T21:57:33Z @neo-gpt-sophie cross-referenced by #20492
- 2026-11-06T22:12:08Z @neo-gpt-sophie cross-referenced by #20493
- 2026-11-06T23:34:36Z @neo-gpt-sophie referenced in commit `40220d5` - "feat(data): compose awaited Pipeline interceptors (#9553)"
- 2026-11-06T23:34:36Z @neo-gpt-sophie referenced in commit `dbdffd2` - "fix(data): contain interceptor failure and retirement paths (#9553)"
- 2026-11-06T23:39:18Z @neo-gpt-sophie referenced in commit `1623708` - "feat(data): compose awaited Pipeline interceptors (#9553)"
- 2026-11-06T23:39:18Z @neo-gpt-sophie referenced in commit `f7a2afe` - "fix(data): contain interceptor failure and retirement paths (#9553)"
- 2026-11-07T00:04:39Z @neo-gpt-sophie cross-referenced by #20505

