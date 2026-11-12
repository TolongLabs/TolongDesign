---
slug: capture-reveal
title: Capture Reveal
tier: free
category: screens
evidence: source+film
demo: 960x540 at 60 fps, 260 frames (4.33 s)
length_30fps: 130
palette: light #F4F4F0, dark #000000, accent #3873A5
used_in: none
---

# Capture Reveal

> A screenshot being taken: a counter runs to 100% in a toast, the window drops
> away, and a headline rises from behind it. Use it for ship-it moments in
> product videos.

## What it shows

A browser window sits on faint grid paper while a toast above it counts
"Capturing selection..." from 1% to 100%. The toast swaps to "Copied to
clipboard." and pops slightly larger. The window drops 108 px and shrinks while
a cursor glides up toward the toast. A two-line headline rises from behind the
window and settles. The window slides out through the bottom, the toast and
cursor fade, and the headline pushes forward to rest alone at frame middle.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                                | Curve                                                                             |
| ----- | --------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1     | 0–8             | Toast fades and scales in, counter starts at 1%                                                           | cubic-bezier(0, 0.235, 0.166, 1) fade; pop curve reversed for press-in; (source)  |
| 2     | 8–40            | Counter climbs 1% to 100% at 3 points per beat; window and headline hold                                  | linear; (source)                                                                  |
| 3     | 40–49           | Cursor glides toward the toast and keeps drifting after arrival                                           | cubic-bezier(0.54, 0.1, 0.41, 0.97), then linear drift; (source)                  |
| 4     | 40–64           | Window drops 107.9 px and shrinks 15.8% about its centre, then settles exponentially                      | cubic-bezier(0.549, 0.228, 0.136, 0.938), then exponential τ 28.9 beats; (source) |
| 5     | 49–78           | Toast swaps to "Copied", pops from 0.905 to 1                                                             | cubic-bezier(0.301, 1.056, 0.803, 1); (source)                                    |
| 6     | 49–79           | Headline rises 22.6 px and fades in from behind the window                                                | cubic-bezier(0.114, 1, 0.665, 1) rise; faster fade; (source)                      |
| 7     | 79–90           | Window, toast, cursor, headline all rest                                                                  | hold; (observed)                                                                  |
| 8     | 90–114          | Outro: window slides 240 px out the bottom, toast and cursor fade, headline scales to 1.3 at frame middle | drop curve reused; fade reversed; (source)                                        |
| 9     | 114–130         | Headline rests alone at frame middle                                                                      | hold; (observed)                                                                  |

## Techniques

- `Stage`: faint grid page, 45.38 by 45.25 px pitch from a 12.85, 16.44 origin
  (source)
- `custom: BrowserWindow`: screenshot box 400.8 px wide with 9 px corners and a
  soft shadow, scaling about its own centre (source)
- `CountUp`: toast percent, linear at 3 points per 24 fps beat, fixed width so
  the box never twitches (source)
- `TextSwap`: "Capturing" toast swaps to "Copied" on one beat with a scale pop,
  pressed-in before and released after (source)
- `Reveal`: headline rises 22.6 px with no scale and no blur, fading in on its
  own faster curve (source)
- `Cursor`: hand-drawn arrow gliding on its own in-out curve, then drifting up
  after arrival (source)
- `Camera`: outro pushes the headline to 1.3 about the frame middle (source)

## Props to expose

| Prop       | Type                 | Default                  | Purpose                                     |
| ---------- | -------------------- | ------------------------ | ------------------------------------------- |
| headline   | string               | "no more \| keyframes"   | Headline text; `\|` breaks lines            |
| capturing  | string               | "Capturing selection..." | Toast label while the counter runs          |
| copied     | string               | "Copied to clipboard."   | Toast label after the swap                  |
| src        | string               | still URL                | Screenshot laid into the window, full width |
| theme      | Partial<SnapCnTheme> | theme default            | Design token overrides                      |
| mode       | "light" \| "dark"    | "light"                  | Theme switch                                |
| fontFamily | string               | "Default"                | Typeface override                           |

## Rebuild it

1. Lay a `Stage` grid page and centre a `custom: BrowserWindow` box with the
   screenshot at full width.
2. Fade the toast in over 8 frames, then run `CountUp` 1 to 100 linearly while
   pressing the toast in to 0.886 scale.
3. `TextSwap` to the "Copied" toast at frame 49 with a 0.905 to 1 pop over 29
   frames.
4. Drop the window 108 px and shrink it 15.8% on one shared curve over frames 40
   to 64.
5. Glide the `Cursor` to the toast over 24 frames on its own in-out curve, then
   drift it upward.
6. `Reveal` the two-line headline from behind the window: 23 px rise, fade in,
   no scale.
7. Hold the settled composition for about 11 frames so the swap and the headline
   both read.
8. Outro: slide the window out the bottom, fade toast and cursor, `Camera` push
   the headline to 1.3 at frame middle.

## Pitfalls

- Animating the drop and the shrink on different curves splits one measured move
  into two; they share a single curve.
- Scaling the window about any point but its measured centre makes it slide
  sideways while it falls.
- Letting the counter change the toast width makes the box breathe every few
  frames; reserve the width of "100%".
- Giving the headline any blur or scale on entry; it only rises and fades.
- Snapping the headline baseline to whole pixels; paint it on fractional rows so
  the slow rise does not stair-step.
