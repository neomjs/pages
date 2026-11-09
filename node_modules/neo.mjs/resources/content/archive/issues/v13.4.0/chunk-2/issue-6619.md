---
id: 6619
title: 'EINVAL / EPERM error when running build script on Windows due to D:\System Volume Information'
state: CLOSED
labels:
  - bug
  - windows
  - ai
  - build
  - needs-re-triage
assignees:
  - neo-gemini-julia
createdAt: '2025-04-05T05:27:05Z'
updatedAt: '2026-11-05T13:36:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6619'
author: ahmad-su
commentsCount: 8
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
closedAt: '2026-11-05T13:36:11Z'
---
# EINVAL / EPERM error when running build script on Windows due to D:\System Volume Information

### Description
When trying to build the `appworker` thread using the build script (`build-all` or `build-threads`), I get either:

- `EINVAL: invalid argument, stat 'D:\System Volume Information'`, or  
- `EPERM: operation not permitted, stat 'D:\System Volume Information'` (when not running as administrator)  

This occurs on Windows when building the Neo.mjs project.

### Cause
The script (likely through `ContextModule.resolveDependencies`) tries to access restricted system folders like `D:\System Volume Information`, which is not permitted.

---

### Environment
- OS: Windows 11  
- Node.js: v23.10  
- Neo.mjs: latest  
- Terminal: PowerShell  

---

### Additional Info
It appears that Webpack is attempting to resolve `.mjs` files across the entire project directory, including protected system folders. This causes permission errors on Windows.

---

### Log
```bash
neoapp buildThreads starting dist/production
assets by status 69.9 KiB [cached] 3 assets
orphan modules 202 KiB [orphan] 27 modules
runtime modules 3.37 KiB 8 modules
built modules 275 KiB [built]
  modules by path ./node_modules/neo.mjs/src/core/*.mjs 21.3 KiB
    ./node_modules/neo.mjs/src/core/Base.mjs 19.9 KiB [built] [code generated]
    ./node_modules/neo.mjs/src/core/IdGenerator.mjs 1.39 KiB [built] [code generated]
  modules by path ./node_modules/neo.mjs/src/util/*.mjs 10.1 KiB
    ./node_modules/neo.mjs/src/util/Function.mjs 5.31 KiB [built] [code generated]
    ./node_modules/neo.mjs/src/util/Array.mjs 4.76 KiB [built] [code generated]
  ./node_modules/neo.mjs/src/worker/App.mjs + 24 modules 212 KiB [built] [code generated]
  ../../../ lazy ^\.\/.*\.mjs$ include: (?:\/%7C\\)app.mjs$ exclude: (?:\/%7C\\)no...(truncated) 160 bytes [built] [code generated]
  ./node_modules/neo.mjs/src/remotes/Api.mjs 1.81 KiB [built] [code generated]
  ./node_modules/neo.mjs/src/vdom/Helper.mjs + 3 modules 30.1 KiB [built] [code generated]

ERROR in ../../../ lazy ^\.\/.*\.mjs$ include: (?:\/%7C\\)app.mjs$ exclude: (?:\/%7C\\)node_modules strict namespace object
EINVAL: invalid argument, stat 'D:\System Volume Information'
caused by plugins in ContextModule.resolveDependencies
Error: EINVAL: invalid argument, stat 'D:\System Volume Information'
 @ ./node_modules/neo.mjs/src/worker/App.mjs 301:19-306:13
```
---
### What I’ve Tried
- Reinstall dependencies & rebuild as administrator `npm i && npm run build-threads` : leads to EINVAL err
- Filter out the system folder in `neo.mjs/src/worker/App.mjs`, but looks like it's not the case:

```js
if (!path.includes('D:\\System')) {
    return import(
        /* webpackInclude: /(?:\/|\\)app.mjs$/ */
        /* webpackExclude: /(?:\/|\\)node_modules/ */
        /* webpackMode: "lazy" */
        `../../${path}.mjs`
    )
} 
```

Let me know if you need help reproducing it. Thanks

## Timeline

- 2025-04-05T05:27:05Z @ahmad-su added the `bug` label
### @ahmad-su - 2025-04-05T13:55:47Z

Update: Running the build command on git bash didnt solve the issue

### @tobiu - 2025-04-05T14:55:19Z

@ahmad-su Without having Windows installed, I can sadly not help too much on this one (flying blind).

I am sure though, that the problem is the following regex comment: `/* webpackInclude: /(?:\/|\\)app.mjs$/ */`.
For `/` based file systems it does work fine, for `\` it looks like it does not.

Let me explain what it is supposed to do:

For a webpack based build, the app worker => `worker/App.mjs` file is supposed to find all `app.mjs` files.

Inside the framework repo, it needs to go 2 folder levels up (repo root), and it can then find the target files inside the `apps`, `examples` & `docs` folder.

Inside a workspace, it needs to go 4 folder levels up, since neo is inside `node_modules/neo.mjs/`.

If it would try to go further up, there might be security related restrictions (permission denied).

The main idea is, that by fetching all `app.mjs` files, we do get split chunks & tree-shaking across multiple apps out of the box. E.g. if you would lazy-load a 2nd neo app into your website, there should be little overhead.

### @ahmad-su - 2025-04-05T16:11:36Z

Thanks for the insight @tobiu , the solution is just by nesting the project folder 1 level deeper. so ../.. will not accidentally go to D:\
But I'm still curious to modify the App.mjs to make it work wherever I place the project.

### @github-actions - 2025-07-05T02:53:16Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-07-05T02:53:17Z @github-actions added the `stale` label
### @github-actions - 2025-07-19T03:02:59Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2025-07-19T03:02:59Z @github-actions closed this issue
- 2026-10-09T15:28:25Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T15:30:51Z

#19489 set B · other · Grace · 2026-10-09: **reopened for a Windows re-test.** Thank you @ahmad-su for the precise report. The appworker configs still register `ContextReplacementPlugin(/.*/, …)` (`buildScripts/webpack/development/webpack.config.appworker.mjs` L167, production L180). The context handling has since been rewritten behind phase-gated plugins (`buildScripts/webpack/workerContextRebasePlugin.mjs`, `mainAddonContextPlugin.mjs`), but no run on Windows confirms the scan no longer reaches `System Volume Information`. A re-test on a Windows drive root decides it.

- 2026-10-09T20:25:39Z @neo-opus-grace cross-referenced by #3173
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-julia - 2026-11-05T10:58:26Z

### Premise read & verdict (`neomjs/neo#15000` · 2026-11-05 · `@neo-gemini-julia`)

- **Verdict:** **holds (defect confirmed at source; needs narrowing / fix on `webpack.config.appworker.mjs`)**
- **Premise check against current source (`dev@14d6326fc1`):**
  - `buildScripts/webpack/development/webpack.config.appworker.mjs:167-175` and `buildScripts/webpack/production/webpack.config.appworker.mjs:180-188` register `new webpack.ContextReplacementPlugin(/.*/, context => { ... })`.
  - When `!insideNeo && (con.includes('/src/worker') || con.includes('\\src\\worker'))`, the callback rewrites `context.request = path.join('../../', context.request)`.
  - For a workspace located near a Windows drive root (e.g. `D:\workspace`), `../../` resolves the dynamic `import()` context in `src/worker/Base.mjs` to `D:\`, causing Webpack's `ContextModule` directory walk to `stat('D:\\System Volume Information')` and fail with `EINVAL` / `EPERM`.
  - Rather than prepending `'../../'` relative to `node_modules/neo.mjs/src/worker`, anchoring `context.context` to the workspace `apps/` (or `cwd`) directory avoids scanning the drive root.

🏛️ Julia (`@neo-gemini-julia`)

### @neo-gemini-julia - 2026-11-05T12:21:11Z

Triaged per `ticket-triage` skill. Applied: `ai`, `bug`, `build`, `windows`. Stage retrospective passed. Self-assigned for implementation (`ticket-intake` complete).

### Root-Cause Falsification (`enhanced-resolve` on Windows)

1. **Why Webpack resolved `../../../ lazy` (`3` levels above `cwd`, landing on `D:\` for a project at `D:\<a\>\<b\>\<project\>`):**
   - In Webpack, `context.request` is an `enhanced-resolve` module specifier, not an OS filesystem path.
   - `enhanced-resolve`'s `getType()` (`node_modules/enhanced-resolve/lib/util/path.js:98-110`) classifies `.` / `..` as `PathType.Relative` (`module: false`) **only** when character 2 is `'/'` (`CHAR_SLASH`). When character 2 is `'\\'` (`CHAR_BACKSLASH`), `getType()` returns `PathType.Normal` (`module: true`, a `node_modules` package lookup).
   - On Windows, `path.join('../../', context.request)` (`path.win32.join`) turns `'../..'` into `'..\\..\\..\\..'` (and `'../../apps'` into `'..\\..\\..\\..\\apps'`).
   - Because `resolver.parse('..\\..\\..\\..')` sets `module: true`, `ModulesInHierarchicalDirectoriesPlugin` resolves `'..\\..\\..\\..'` relative to `<cwd>\node_modules` (`1` level below `<cwd>`) instead of `<cwd>\node_modules\neo.mjs\src\worker` (`4` levels below `<cwd>`), landing **3 levels above `<cwd>` (`../../../`)** — i.e., `D:\` — where `ContextModuleFactory` calls `fs.stat('D:\\System Volume Information')` and fails with `EINVAL` / `EPERM`.
   - The same `path.join` backslash hazard affects `buildScripts/webpack/workerContextRebasePlugin.mjs`, `buildScripts/webpack/mainAddonContextPlugin.mjs`, and the inline `ContextReplacementPlugin` in `buildScripts/webpack/development/webpack.config.appworker.mjs` and `buildScripts/webpack/production/webpack.config.appworker.mjs`.

2. **Fix Scope:**
   - Normalize `context.request` in `workerContextRebasePlugin.mjs` and `mainAddonContextPlugin.mjs` via `path.posix` so rebased context requests always stay POSIX relative specifiers (`module: false` in `enhanced-resolve`) on Windows as well as POSIX.
   - Replace the duplicate inline `ContextReplacementPlugin` in both `webpack.config.appworker.mjs` configs with `workerContextRebasePlugin(insideNeo)`.
   - Add `System Volume Information|\$RECYCLE\.BIN` to `webpackExclude` on the worker lazy contexts (`App.mjs`, `Canvas.mjs`, `Task.mjs`, `Data.mjs`) so even a workspace located directly at a Windows drive root (`D:\`) skips `fs.stat` on protected Windows volume directories.

🏛️ Julia (`@neo-gemini-julia`)

- 2026-11-05T12:28:21Z @neo-gemini-julia cross-referenced by PR #20314
- 2026-11-05T12:28:57Z @neo-gpt-emmy cross-referenced by #3782

