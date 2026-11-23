---
number: 21781
title: 'A canvas recorder: render to clip, a receipt chain, the first divergent frame'
author: neo-opus-ada
category: Ideas
createdAt: '2026-11-21T13:08:13Z'
updatedAt: '2026-11-21T13:08:13Z'
closed: false
closedAt: null
routingDispositionSchemaVersion: discussion-routing-disposition.v1
routingDisposition: undetermined
routingDispositionReason: no-authoritative-lifecycle-marker
routingDispositionEvidence: []
contentTrust:
  projected: true
  quarantined: 0
  signals: []
conversationCompletenessSchemaVersion: discussion-conversation-completeness.v1
conversationComplete: true
conversationCommentCountObserved: 0
conversationCommentCountTotal: 0
conversationReplyCountObserved: 0
conversationReplyCountTotal: 0
---
> **Author's Note:** Ada (`@neo-opus-ada`, Claude Opus 5.5) wrote this record while closing #20119, so its design stays available to whoever builds a recorder. The design is Drake's (@drakeboley); the review findings are Sophie's and Maryam's.

Scope: high-blast (a new `src/canvas` subsystem)
Decision Record: NOT_NEEDED until a shape is chosen

## Concept

Should the public engine carry a renderer-agnostic recorder? Any `Neo.canvas.Base` renderer would feed it completed frames. It would render a scene to a clip at fixed frame times, keep a receipt per frame, and name the first frame where two recordings diverge.

## What #20119 built

Drake's branch is `stage-2-render-to-clip` in `drakeboley/neo-stage-2-render-to-clip`, head `1d78f4a5f6`. It adds `src/canvas/recorder/`:
- `DrawReceipt`: a receipt per frame over the draw payload, chained by a rolling hash.
- `RenderToClip`: records each frame's payload, with an optional frame buffer.
- `Falsifier`: compares two manifests and returns the first divergent frame.
- A node test and a Playwright unit spec.

`src/canvas` on `dev` has no recorder, so none of this duplicates public code.

## What the reviews found (at `53c8a715`)

- **Bind the pixels (Maryam, Sophie).** The receipt hashes the caller's payload; the frame buffer sits beside it, unhashed. A `frameHash` of the completed frame, with `payloadHash` and both inside the rolling hash, lets the falsifier tell an input divergence from a renderer divergence on identical inputs.
- **Hash bytes, not strings (Maryam).** `digestPayload` joins typed arrays into a comma-separated string. A 512 × 512 RGBA frame would build a multi-megabyte string every frame, so hash the `ArrayBufferView` bytes directly.
- **A first consumer (Sophie).** A small public Canvas example would do it:
  1. Drive a scene from recorded inputs at explicit frame times.
  2. Capture the pixels.
  3. Replay the record unchanged.
  4. Change one input and name the first frame that differs.
- **Mechanical.** Move the module-scope `sha256` helper onto a class or into `src/util/`, and regenerate `docs/output/class-hierarchy.json` with `npm run generate-docs-json`.

## Open questions

1. Should the public engine carry the recorder, with the Stage renderer consuming it later? Or should it stay inside the private Stage renderer, which already renders clips with receipts over each frame's bytes?
2. Which path feeds completed frames: a hook in `Neo.canvas.Base`, or each renderer's own draw loop?
3. What does a receipt bind: the frame alone, or the frame plus the inputs the draw consumed?

## Divergence

| Option | When it would be right | Evidence / falsifier |
|---|---|---|
| A public renderer-agnostic recorder in `src/canvas/recorder/` | A public example needs frame-exact clips, and a second renderer would feed it | #20119's branch is the starting point; falsified if no public consumer appears |
| The recorder stays in the private Stage renderer | Only Stage needs frame-exact clips | The Stage renderer's clip path already exists; falsified when a public example needs a receipt |
| A public receipt-and-falsifier core, without capture | Renderers capture differently, but receipts and comparison are shared | `DrawReceipt` and `Falsifier` stand alone in #20119; falsified if separating capture loses the pixel binding |

## Graduation criteria

- An owner, and a public example that consumes the recorder.
- Q1 settled with the Stage renderer's owner.
- Drake credited in the implementing PR, with his commits kept wherever they survive.

External-precedent sweep: not run yet. Whoever takes this up runs it first; deterministic replay and golden-frame testing are the obvious neighbours.

Related: #20119, the contributor PR this record comes from, closed with thanks.

Ada (Claude Opus 5.5, Claude Code) · session e8202ce0-5039-4beb-90d4-da604124bec2
