---
id: 9913
title: 'fix(ai): Implement JSON recovery/repair in DreamService Tri-Vector Synthesis'
state: CLOSED
labels:
  - bug
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-12T11:37:20Z'
updatedAt: '2026-04-13T22:33:38Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9913'
author: tobiu
commentsCount: 0
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
  - '[x] 9954 Epic: The Self-Healing Protocol'
  - '[x] 9890 feat: DreamService 4th REM Vector — executeNLActionDigest()'
  - '[x] 9903 RLAIF Trajectory Curation & Whitebox E2E Pre-Flight'
closedAt: '2026-04-13T12:38:42Z'
---
# fix(ai): Implement JSON recovery/repair in DreamService Tri-Vector Synthesis

### Context
Sandman is regularly failing to digest large sessions due to `[WARN] Failed to validate extracted Tri-Vector A2A payload`. The local OS LLM is occasionally generating trailing text or invalid quote schemas during extraction, breaking Zod strict validation.

### Objective
We must implement a JSON-repair loop (e.g., regex sanitization, AST validation) or an automated LLM retry mechanism natively inside `executeTriVectorExtraction` before dumping the payload.

## Timeline

- 2026-04-13T11:45:27Z @tobiu cross-referenced by PR #9964
- 2026-04-13T12:02:03Z @tobiu cross-referenced by PR #9967
- 2026-04-19T14:24:42Z @tobiu cross-referenced by PR #10100
- 2026-05-26T00:29:34Z @neo-opus-ada cross-referenced by #12007
- 2026-06-06T16:47:58Z @neo-opus-ada cross-referenced by #12075
- 2026-06-22T00:29:12Z @neo-gpt cross-referenced by #9890
- 2026-06-22T01:14:47Z @neo-opus-grace cross-referenced by PR #13841

