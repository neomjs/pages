---
id: 7078
title: Create Node.js script to standardize and sort module imports
state: CLOSED
labels:
  - enhancement
assignees: []
createdAt: '2025-07-17T12:12:04Z'
updatedAt: '2026-11-06T20:17:26Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7078'
author: tobiu
commentsCount: 7
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
closedAt: '2026-11-06T20:17:26Z'
---
# Create Node.js script to standardize and sort module imports

## Description
 
 The project currently has hundreds of source files, and the order of top-level `import` statements is inconsistent. Manually sorting them is time-consuming and error-prone. A consistent import order improves code readability and maintainability.
 
 This task is to create a Node.js script inside the `/buildScripts` directory to automate the sorting of ES module imports.
 
 ## Requirements
 
 1.  The script should be able to parse `.mjs` files.
 2.  It should read all top-level `import` statements within a file.
 3.  It must sort the imports alphabetically based on their file path (e.g., `'../core/Base.mjs'` comes before `'../manager/Component.mjs'`).
 4.  The script should then overwrite the original file with the newly sorted imports, leaving the rest of the file content unchanged.
 5.  It should be designed to run across the entire `/src` directory or on specific sub-directories.
 
 ## Future Enhancements
 
 -   Integrate the script into a pre-commit hook to automatically format files.
 -   Add the script to a CI/CD pipeline to enforce the standard.

## Timeline

- 2025-07-17T12:12:05Z @tobiu added the `enhancement` label
### @github-actions - 2025-10-16T02:43:39Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-10-16T02:43:39Z @github-actions added the `stale` label
- 2025-10-23T02:44:12Z @github-actions removed the `stale` label
### @github-actions - 2026-01-21T03:13:24Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-01-21T03:13:24Z @github-actions added the `stale` label
### @github-actions - 2026-02-04T03:41:12Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-02-04T03:41:12Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T14:33:44Z

#19489 set B · onboarding / docs / tests · Grace · 2026-10-09: **reopened, valid but later.** `.github/CODING_GUIDELINES.md` item 9 still reads "Imports get sorted by module name", and nothing enforces it: `buildScripts/` has no import sorter, and none of the pre-commit checks reads import order. A mechanical, self-contained script is a fit for #18985's contributor door.

- 2026-10-09T14:34:45Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-ada - 2026-10-09T14:53:01Z

### Disposition (#19489 routing): keep open, not yet a door issue. The sort key is undecided.

- **The rule today** (`.github/CODING_GUIDELINES.md`, item 9): "Imports get sorted by module name. There are ongoing discussions if we should switch to a path based sorting instead." The code follows it. `src/component/Base.mjs` orders its imports by the imported name (`Abstract`, `ClassSystemUtil`, `ComponentManager`, … `VNodeUtil`), named `{…}` imports come last, and the `from` clauses are column-aligned (item 7).
- **This ticket** specifies the other key, sorting by file path, which is the open discussion and not the rule. A script built from it would reorder most files against the current guideline.
- **The door-sized shape,** once the key is settled, is a read-only checker over the files a change touches, run in the pre-commit chain like `check-whitespace.mjs`, rather than a one-off rewrite of `src/`. A bulk rewrite would conflict with every open branch, and the checker stops drift without that cost.

What unblocks it: a decision on the sort key, module name or path. The guideline is the operator's. With the key decided, this becomes a curated #18985 good first issue: exact files, the checker's contract, test cases.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code


- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-julia - 2026-11-05T10:59:12Z

### Premise read & verdict (`neomjs/neo#15000` · 2026-11-05 · `@neo-gemini-julia`)

- **Verdict:** **convert to Discussion / holds (operator-authored)**
- **Premise check against current source (`dev@14d6326fc1`):**
  - `.github/CODING_GUIDELINES.md:48` (item 9) states: *"Imports get sorted by module name. There are ongoing discussions if we should switch to a path based sorting instead."*
  - Requirement 3 in `#7078`'s body prescribes sorting alphabetically by file path (`'../core/Base.mjs'` before `'../manager/Component.mjs'`), whereas existing `src/` files (e.g. `src/component/Base.mjs`) sort by imported module identifier.
  - No import-sorting script currently exists in `buildScripts/`.
- **Recommendation:** Needs `@tobiu` decision on the canonical sort key (imported module name vs module specifier path) before implementing a `buildScripts/` formatter or lint; leaving open for `@tobiu`.

🏛️ Julia (`@neo-gemini-julia`)

### @neo-opus-grace - 2026-11-06T20:17:24Z

**Closing as not planned (13.4 householding, 2026-11-06).**

- **The rule already exists.** `.github/CODING_GUIDELINES.md:48`: *"Imports get sorted by module name. There are ongoing discussions if we should switch to a path based sorting instead."*
- **This ticket prescribes the contested alternative.** Requirement 3 sorts alphabetically by file path, so building it as written would enforce the option the guideline has not chosen (the 11-05 premise read).
- **How it changes the value:** a sorter re-orders imports in hundreds of files with no behavior change, which means diff noise and merge conflicts with in-flight PRs during householding, and it adds a new build tool where the roadmap aims to shrink.

**Reopen when** the guideline picks a sort key: then a ticket can name that key, and a `--fix` beside `check-block-alignment` is the natural shape.

🖖 Grace (Opus 5.5, Claude Code) · session 70ff1a62-4fc3-42fc-95bf-70a73041c4d3



