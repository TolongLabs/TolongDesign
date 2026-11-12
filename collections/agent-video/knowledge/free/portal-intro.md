---
slug: portal-intro
title: Portal Intro
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 216 frames (3.6 s)
length_30fps: 108
palette: light #F4F4F0, dark none, accent none
used_in: none
---

# Portal Intro

> A sentence that grows a picture chip mid-line, leans in until the chip takes
> the frame, then types a title and lands a wordmark.

## What it shows

Lead words fade up one at a time while drifting in from the left. The line
re-sets with a small rounded picture chip inside it and the rest of the sentence
after, then the whole line scales up about a fixed pivot until the chip fills
the frame. The picture lands blurred and small, sharpens, a title types itself
over it letter by letter and lifts away, and a mark plus name arrive. The lockup
holds on the picture.

## Timeline

| Phase | Frames (30 fps) | What moves                                                                                           | Curve                      |
| ----- | --------------- | ---------------------------------------------------------------------------------------------------- | -------------------------- |
| 1     | 0–22            | Lead words fade up every 6 frames, rising 4.58px and panning −57px to 0                              | measured tables; (source)  |
| 2     | 23–46           | Line re-sets with chip; slot opens 61 to 109px, chip zooms 1.31 to 2.43, line scales about (345,199) | measured tables; (source)  |
| 3     | 47–48           | Chip opens through two measured rects to full frame                                                  | hold; (source)             |
| 4     | 47–87           | Backdrop settles from 0.63 scale and 14.9px blur to sharp, drifting right 18px to 0                  | measured tables; (source)  |
| 5     | 48–70           | Title types one letter per frame, each fading and settling as the line lifts                         | measured tables; (source)  |
| 6     | 71–87           | Mark fades up rising; brand letters land every 2 frames beside it                                    | measured tables; (source)  |
| 7     | 87–108          | Lockup rests; mark eases toward its rest height                                                      | exponential 0.88; (source) |

## Techniques

- `SplitText`: lead words stagger 6 frames apart, each with its own opacity and
  rise curve (source)
- `Camera`: whole-line scale about pivot (345.17, 198.93), not its center, so
  the center drifts right exactly as measured (source)
- `Reveal`: two-line hard cut at frame 23, then two-frame rect opening into the
  full-bleed picture (source)
- `Typewriter`: title lands one letter per frame with per-letter rise and
  opacity, baseline on the measured curve (source)
- `Lockup`: mark fades up while brand letters land every 2 frames at a fixed gap
  beside it (source)
- `MotionBlur`: backdrop opens blurred at 14.9px and sharpens as it lands
  (source)

## Props to expose

| Prop       | Type    | Default           | Purpose                                       |
| ---------- | ------- | ----------------- | --------------------------------------------- |
| lead       | text    | your launch video | Words before the chip, arriving one at a time |
| trail      | text    | in code           | Words after the chip                          |
| image      | string  | portal-intro.jpg  | Picture the chip opens into                   |
| chipImage  | string  | image             | Chip picture, if different from the backdrop  |
| title      | text    | Introducing       | Title typed over the picture                  |
| brand      | text    | snapcn            | Name beside the mark                          |
| logo       | element | snapcn mark       | Mark drawn in currentColor                    |
| logoSrc    | string  | —                 | Mark as image URL instead of element          |
| overlay    | color   | #FFFFFF           | Ink of title, mark and name over the picture  |
| fontFamily | text    | —                 | Face override; defaults to loaded Geist       |
| theme      | object  | —                 | Design-token overrides                        |
| mode       | select  | light             | light or dark page                            |
| speed      | number  | 1                 | Timeline rate multiplier                      |

## Rebuild it

1. Center the lead words with a trailing space and fade each up over its own
   rise curve, staggered 6 frames.
2. Hard-cut at frame 23 to lead plus chip plus trail, opening the slot from 61
   to 109px while the chip grows and dives 2.4x inside.
3. Scale both lines about the fixed pivot and snap the chip through its two
   measured rects to full frame by frame 49.
4. Settle the backdrop from 0.63 scale and 14.9px blur to sharp while drifting
   right to 0.
5. Type the title one letter per frame from frame 48, lifting the baseline along
   its curve.
6. Fade the mark up from frame 71 and land brand letters every 2 frames beside
   it, then ease the mark to rest.

## Pitfalls

- Animating between the one-line and two-line layouts instead of hard-cutting
  breaks the measured geometry.
- Scaling about the line center instead of the pivot puts every glyph up to half
  a pixel off the recording.
- Chrome snaps baselines to whole pixels, so sub-pixel rises tremble unless
  rendered as blended pixel-pair copies.
- The chip picture eases on its own zoom curve; treating the chip as a window
  onto the backdrop looks wrong.
