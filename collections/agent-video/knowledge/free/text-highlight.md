---
slug: text-highlight
title: Text Highlight
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 112 frames (1.87 s)
length_30fps: 56
palette: light #F4F4F4, dark none, accent #236CED
used_in: none
---

# Text Highlight

> One span inside a static sentence gets emphasized, then the default look ends
> on a mark rushing the lens.

## What it shows

A small mark sits at the left end of the word "Northwind" on a pale frame. The
mark spins once while a wipe edge travels across the wordmark and the letters
clip open behind it. The finished lockup rests briefly, then the mark swings out
in an arc and rushes the camera, growing past forty times its size while a disc
of accent ink floods the frame. The demo shows the default logo-wipe preset; the
other five presets emphasize a span in place with no camera move.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                                                                                                          | Curve                                     |
| ----- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 1     | 0–6             | Lockup waits before the emphasis starts                                                                                                                                                             | hold (source)                             |
| 2     | 6–20            | Wipe crosses the word over 14 frames on a spring of damping 18, with the text color cooling from base to emphasis as the edge passes; the mark spins one full turn beside it                        | cubic-bezier(0.2, 0.6, 0.35, 1) (source)  |
| 3     | 20–32           | Finished lockup holds for 12 frames; the giant ink disc stays shut                                                                                                                                  | hold (source)                             |
| 4     | 32–56           | Mark travels toward the camera over 24 frames, swelling to 42x through a perspective projection while swinging across 0.55 frame widths with a 0.25 bow, trailing an ink disc that closes the frame | cubic-bezier(0.45, 0.2, 0.45, 1) (source) |
| 5     | 52–56           | Ink covers the last of the frame and the shot ends on flat accent                                                                                                                                   | hold (observed)                           |

## Techniques

- `Lockup`: mark plus wordmark assembling, with the mark spinning one turn
  during the wipe (source)
- `Highlight`: marker, color, underline, and strikethrough presets emphasize one
  span over a 14-frame draw starting at frame 6 (source)
- `LineDraw`: underline and strikethrough lines draw across at a default
  thickness of round(fontSize times 0.08) (source)
- `TextSwap`: the strikethrough preset crossfades the struck span into
  replacement text over half the draw duration (source)
- `GlyphGlow`: the shimmer preset sweeps a light shine band from 200 percent to
  minus 100 percent across the span (source)
- `Camera`: the logo-wipe rush scales the mark 42x through a perspective
  projection with a 0.7 ink lag behind it (source)

## Props to expose

| Prop                 | Type      | Default        | Purpose                                                                     |
| -------------------- | --------- | -------------- | --------------------------------------------------------------------------- |
| before               | string    | "Powered by "  | Copy ahead of the span                                                      |
| highlight            | string    | "Northwind"    | The emphasized span                                                         |
| after                | string    | ""             | Copy after the span                                                         |
| preset               | 6 presets | "logo-wipe"    | Which emphasis: logo-wipe, marker, color, underline, strikethrough, shimmer |
| baseColor            | color     | #101828        | Unemphasized ink                                                            |
| accentColor          | color     | #266DF0        | Emphasis color                                                              |
| highlightedTextColor | color     | base or accent | Final color of the span                                                     |
| replaceWith          | string    | "Acme"         | Strikethrough only: text that fades in over the struck span                 |
| startAt              | number    | 6              | Frame the emphasis starts at                                                |
| drawDuration         | number    | 14             | Frames the draw or sweep takes                                              |
| thickness            | number    | 4              | Underline and strikethrough line weight in px                               |
| shineColor           | color     | #FAFAFA        | Shimmer only: color of the sweeping shine                                   |
| logoSrc              | image URL | ""             | Logo-wipe only: raster mark; a built-in vector mark is used when empty      |
| logoScale            | number    | 1.05           | Logo-wipe only: mark size as a multiple of type size                        |
| spinTurns            | number    | 1              | Logo-wipe only: mark spins while it wipes                                   |
| holdDuration         | number    | 12             | Logo-wipe only: frames the lockup rests before the rush                     |
| rushDuration         | number    | 24             | Logo-wipe only: frames the rush takes                                       |
| rushScale            | number    | 42             | Logo-wipe only: mark growth by the end of the rush                          |
| rushDrift            | number    | 0.55           | Logo-wipe only: sideways swing as a share of frame width                    |
| swingOut             | number    | 0.25           | Logo-wipe only: arc of the swing as a share of frame width                  |
| coverColor           | color     | #266DF0        | Logo-wipe only: ink color at the end of the rush                            |
| fontSize             | number    | 56             | Type size in px                                                             |
| fontWeight           | select    | 600            | Weight                                                                      |
| fontFamily           | string    | theme face     | Face label or loaded CSS family                                             |

## Rebuild it

1. Lay out the before, span, and after texts as one static line with the mark
   parked at the span's left end.
2. Drive a 0 to 1 wipe over 14 frames on a damping-18 spring; clip the word to
   everything right of the wipe edge and ride the mark on the edge.
3. Cool the span from base to emphasis color as the edge passes each letter.
4. Spin the mark one full turn across the wipe, then hold the lockup 12 frames.
5. Over 24 frames, fly the mark along a crossing path bowed 0.25 widths left,
   scaling it through 1 over (1 minus travel) up to 42x.
6. Grow a hard-edged accent disc behind the mark with 0.7 lag so flat color
   closes the frame three frames before the rush ends.

## Pitfalls

- A rush below about 22x never covers the frame with ink and leaves backdrop in
  the corners; the ending needs the mark's body to overrun the frame.
- Fading a full-frame rectangle up instead of growing a hard-edged disc leaves a
  half-transparent wash lying over the backdrop for several frames.
- Raster art for the mark turns to mush at 40x; use vector for the rush or keep
  the mark small.
- The marker and shimmer presets read only if the rest of the line never moves;
  any layout shift during the sweep breaks the effect.
