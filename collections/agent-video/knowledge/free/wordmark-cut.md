---
slug: wordmark-cut
title: Wordmark Cut
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 132 frames (2.2 s)
length_30fps: 66
palette: light #F4F4F0, dark #101010, accent #2A5469
used_in: none
---

# Wordmark Cut

> A giant wordmark cools from a lit gradient to ink, then cuts closer onto its
> last letters and the dot. Use it as a two-shot end card.

## What it shows

The wide shot holds the front of a wordmark twice the width of the frame, rising
into place as the light on the type cools out. It starts drifting left,
accelerating, and the cut lands mid-motion. The close shot frames the end of the
word and the dot at 1.71 times the size, springs in with a small vertical
overshoot, holds, then pushes in closer. The dot keeps its gradient through the
whole piece while the type cools to ink.

## Timeline

| Phase          | Frames (30 fps) | What moves                                                                                | Curve                            |
| -------------- | --------------- | ----------------------------------------------------------------------------------------- | -------------------------------- |
| Settle         | 0–24            | The wordmark rises 50 to 0 px on knots while the light drains from 0.455 (source)         | measured table (source)          |
| Cool and drift | 20–36           | The light reaches 0 by frame 31; the word accelerates left 27 px with power 3.08 (source) | linear plus power curve (source) |
| Cut            | 36              | The 245 px wide shot cuts to the 419 px close shot framed on the dot (source)             | hard cut (source)                |
| Spring land    | 36–44           | The close shot lands with a 5 px vertical overshoot and scales 1.0 to 1.06 (source)       | measured table (source)          |
| Hold           | 44–49           | The frame sits still on the word end and the dot (source)                                 | hold (source)                    |
| Push           | 49–66           | The close shot pushes 1.06 to 1.30, still accelerating on the last frame (source)         | measured table (source)          |

## Techniques

- `Camera`: the wide shot translates up and left; the close shot scales about
  the dot with tracked offsets, still accelerating at the end (source)
- `Lockup`: the wordmark anchors by its left edge wide and by the dot close, so
  any word lands framed without measuring text (source)
- `GlyphGlow`: the type cools from the two-stop gradient to ink on the measured
  warmth table; the dot never cools (source)
- `MotionBlur`: no blur layer; the close shot carries a real depth of field,
  sharp to 170 px and 6 px soft by 215 (source)
- `Stage`: a single paper act throughout; the cut reads as nearer, not bigger,
  because of the depth of field (source)

## Props to expose

| Prop       | Type                 | Default   | Purpose                                                |
| ---------- | -------------------- | --------- | ------------------------------------------------------ |
| word       | string               | "snapcn." | The wordmark; a trailing dot is dropped and drawn      |
| dotFrom    | string               | "#3072DB" | Deep end of the dot gradient and the type light        |
| dotTo      | string               | "#4FD8F5" | Light end of the dot gradient and the type light       |
| warm       | number               | 1         | How much light the type carries at its hottest, 0 to 1 |
| theme      | Partial<SnapCnTheme> | —         | Design-token overrides                                 |
| mode       | "light" \| "dark"    | —         | Which theme base to paint from                         |
| fontFamily | string               | —         | Face label; overrides theme.fontFamily                 |
| speed      | number               | 1         | Time multiplier; 1 is the measured speed               |

## Rebuild it

1. Frame the wide shot on the ink top at 224 px with the left edge 42 px off
   frame; frame the close shot on the dot.
2. Size type from the ink ratio, 0.75 with ascenders or 0.556 without, so any
   word fills the frame like the reference.
3. Rise the wide shot on the knots table and drain the light on the warmth table
   to 0 by frame 31.
4. Drift left on the power curve from frame 20 so the fastest frame is the one
   the cut takes.
5. Cut at frame 36 to the 1.71-times close shot; land it with the tracked
   offsets including the vertical overshoot.
6. Mask the blurred copy through a radial hole so the depth of field belongs to
   the lens, not the type.
7. Push to 1.30 by frame 66 and end mid-acceleration; keep the dot gradient at
   full strength throughout.

## Pitfalls

- Averaging the two close-shot settles into one erases the vertical overshoot
  that sells the landing.
- Ending the drift a frame before the cut freezes the one frame that must still
  move.
- Masking the sharp copy instead of the blurred one halos every in-focus glyph.
- Guessing the close framings from cap height instead of stem width and dot
  radius misframes every new word.
- Masking the depth of field inside the camera transform drags the focal plane
  along with the push.
