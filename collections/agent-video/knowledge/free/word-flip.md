---
slug: word-flip
title: Word Flip
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 360 frames (6 s)
length_30fps: 180
palette: light #F4F4F4, dark none, accent none
used_in: none
---

# Word Flip

> A sentence types itself, then one word cycles on a 3D flip while the rest
> stands still. Use it for a headline whose key word rotates through options.

## What it shows

The prefix and suffix type out with a blinking caret, leaving a gap where the
flipping word will live. The first word unfurls into that reserved slot with a
gradient fill. It holds, then each cycle the old word dips, throws itself up and
away with blur, and the next word rises from below and settles. The demo runs
through three words and never reflows the line. The caret is gone once typing
ends.

## Timeline

| Phase      | Frames (30 fps)          | What moves                                                                                                                                                | Curve                              |
| ---------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Typing     | 4–77                     | Prefix and suffix type at 9 cps with ±0.18 keystroke jitter, 6-frame char fade; caret blinks at 2 Hz (source)                                             | linear (source)                    |
| First flip | 83–98                    | First word enters the empty reserved slot and settles (source)                                                                                            | bezier(0.2, 0.6, 0.35, 1) (source) |
| Flip exit  | every 35, 0–9            | Outgoing word dips on anticipation then throws −1.29 em up, rotating 90° about the baseline, shrinking to 0.98 with speed-keyed blur to 0.085 em (source) | easeInBack (source)                |
| Flip enter | every 35, 6–15           | Incoming word starts 3 frames before the exit ends, rising 0.135 em and unrotating 90° to rest (source)                                                   | bezier(0.2, 0.6, 0.35, 1) (source) |
| Demo rests | 95–123, 130–158, 165–180 | Each word holds centred between flips; the sentence never reflows (observed)                                                                              | hold (observed)                    |

## Techniques

- `Typewriter`: prefix and suffix type per character with deterministic sine
  jitter summed into offsets, never per-key delays (source)
- `Caret`: a zero-width inline-block carries the bar so the caret never pushes a
  glyph sideways; it hides after typing plus pause (source)
- `TextSwap`: the slot word rolls over on rotateX with a 3-frame overlap,
  exiting up and entering from below (source)
- `MotionBlur`: exit blur follows easeInBack speed exactly, so the turnaround
  frame stays sharp; enter blur clears with progress (source)
- `GlyphGlow`: the flipping word paints a two-stop gradient of theme primary
  walked toward destructive (source)

## Props to expose

| Prop          | Type                    | Default                                         | Purpose                                                 |
| ------------- | ----------------------- | ----------------------------------------------- | ------------------------------------------------------- |
| prefix        | string                  | "Looking For A"                                 | Text before the flipping word                           |
| words         | string[]                | Modern, Stunning, Minimal                       | Words cycling through the slot                          |
| suffix        | string                  | "Portfolio"                                     | Text after the flipping word                            |
| gradient      | string[]                | primary to destructive mix                      | Fill painted on the flipping word                       |
| cps           | number                  | 9                                               | Typing speed in characters per second                   |
| typeStart     | number                  | 4                                               | Frames before the first keystroke                       |
| charFade      | number                  | 6                                               | Frames each character takes to fade in                  |
| jitter        | number                  | 0.18                                            | Keystroke unevenness as a fraction of one keystroke     |
| pause         | number                  | 6                                               | Frames held after typing before the first flip          |
| cycle         | number                  | 35                                              | Frames from one flip to the next                        |
| exitDuration  | number                  | 9                                               | Frames the outgoing word takes to leave                 |
| enterDuration | number                  | 9                                               | Frames the incoming word takes to settle                |
| overlap       | number                  | 3                                               | Frames the incoming word starts before the exit ends    |
| caret         | boolean                 | true                                            | Show the blinking caret while typing                    |
| loop          | boolean                 | true                                            | Cycle the words forever                                 |
| motion        | Partial<WordFlipMotion> | exit −1.29em, enter 0.135em, 90°, 0.98, 0.085em | Throw distance, rise, rotation, settle scale, peak blur |
| perspective   | number                  | 6.5                                             | 3D depth in em; smaller is stronger                     |
| fontFamily    | string                  | system stack                                    | Typeface for the line                                   |
| fontSize      | number                  | 72                                              | Point size of the line                                  |
| color         | string                  | theme foreground                                | Ink for the static text                                 |
| fontWeight    | number                  | 600                                             | Weight of the line                                      |
| speed         | number                  | 1                                               | Time multiplier                                         |
| className     | string                  | —                                               | Class for the outer wrapper                             |
| theme         | Partial<SnapCnTheme>    | —                                               | Design-token overrides                                  |
| mode          | "light" \| "dark"       | —                                               | Which theme base to paint from                          |

## Rebuild it

1. Reserve the slot at the widest word before frame 4, scaled per word so every
   word fills it; keep a hidden strut for height and baseline.
2. Type prefix and suffix at fps divided by cps per character with the sine
   jitter offsets and 6-frame fades.
3. Ride a zero-width caret on the typing head, blinking between opacity 1 and
   0.15 at 2 Hz, and drop it after typing plus pause.
4. Drive each exit on one easeInBack progress for translate, rotation, and scale
   together; key blur to its derivative.
5. Start each enter 3 frames before the exit ends on the moderate decelerate,
   fading opacity in over the first 45 percent.
6. Pivot every flip on the measured baseline via a zero-sized inline-block, and
   set type in geometricPrecision.
7. Paint the slot word with the gradient fill and gate willChange to the Player
   only.

## Pitfalls

- Sizing the slot to the current word reflows the whole sentence on every flip.
- Keying exit blur to progress instead of speed blurs the word while it stands
  still at the dip.
- Pivoting anywhere but the measured baseline makes the word climb the pixel
  grid in jumps.
- Animating the caret as a sized character shifts every glyph downstream of it.
- Leaving hinting on re-snaps each stem as the word scales and the letterforms
  boil.
