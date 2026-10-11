---
id: 8573
title: Refactor Portal Learn MainContainer to use Structural Injection Pattern
state: CLOSED
labels:
  - enhancement
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-01-12T02:20:42Z'
updatedAt: '2026-01-12T07:08:30Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8573'
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
closedAt: '2026-01-12T02:28:40Z'
---
# Refactor Portal Learn MainContainer to use Structural Injection Pattern

`Portal.view.learn.MainContainer` extends `Portal.view.shared.content.Container` but still uses the old configuration pattern (defining `contentComponent` as a top-level config).

Since `Shared.Container` has been refactored to use the **Structural Injection Pattern** (via `mergeFrom` and `pageContainerConfig_`), `Learn.MainContainer` must be updated to conform to this new API.

**Changes:**
1.  Remove `contentComponent` config.
2.  Override `pageContainerConfig` to inject the `ContentComponent`.
3.  Ensure any other inherited configs (like `treeConfig`) are handled if needed (default is null, which is fine here if not used, or if used it should be configured). `Learn` section likely uses the tree.

**Current Code:**
```javascript
class MainContainer extends SharedContainer {
    static config = {
        // ...
        contentComponent: ContentComponent,
        // ...
    }
}
```

**New Code:**
```javascript
class MainContainer extends SharedContainer {
    static config = {
        // ...
        pageContainerConfig: {
            contentConfig: {
                module: ContentComponent
            }
        },
        // ...
    }
}
```

## Timeline

### @tobiu - 2026-01-12T02:28:22Z

**Input from Gemini 3 Pro:**

> ✦ Refactoring complete.
> - Updated `Learn.MainContainer` to use the Structural Injection Pattern.
> - Fixed a bug in `Shared.Container` and `PageContainer` where `beforeSetItems` logic was overwriting references with object keys (e.g., `sections` vs `page-sections-container`). Renamed keys to match references.
> 
> Closing as completed.


