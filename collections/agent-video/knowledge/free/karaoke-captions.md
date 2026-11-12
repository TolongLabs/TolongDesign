---
slug: karaoke-captions
title: Karaoke Captions
tier: free
category: captions
evidence: source+film
demo: 960x540 at 60 fps, 300 frames (5.0 s)
length_30fps: 150
palette: light #F4F4F4, dark #080808, accent none
used_in: none
---

# Karaoke Captions

> A caption line that fills word by word as it is spoken, in heavy outlined type
> that reads on any footage.

## What it shows

A single boxed caption sits low in frame: white Roboto on a solid black box that
wraps each line. The line rises in over eight frames and holds fully legible for
the body of the clip. Near the end it fades back out over eight frames. The demo
shows the boxed preset with the line "Acme reconciles every transaction
automatically" sitting still from its entrance to its exit.

## Timeline

| Phase   | Frames (30 fps) | What moves                                                                    | Curve  |
| ------- | --------------- | ----------------------------------------------------------------------------- | ------ |
| 10–18   | 10–18           | Line rises and fades in over 8 frames                                         | linear |
| 18–126  | 18–126          | Words fill evenly across the window; emphasised words scale to 1.08 in accent | linear |
| 126–134 | 126–134         | Line fades out over 8 frames past the end frame                               | linear |

## Techniques

- `OutlineType`: karaoke and highlight presets set Montserrat 800 to 900 at 8 to
  8.5 percent of the short side with an outside stroke (paint-order stroke fill)
  so bright footage never eats the glyphs (source)
- `Highlight`: the highlight preset rides the spoken word on a rounded accent
  bar with zeroed stroke (source)
- `Pill`: the clean preset carries the line on card-coloured chrome with border
  and shadow (source)
- `Reveal`: every line enters and exits over 8 frames; emphasis scales 1 to 1.08
  with cubic-out easing about the measured baseline (source)
- Boxed caption first visible near frame 20, static through the middle, dimming
  at frame 130, gone by frame 140 (observed)

## Props to expose

| Prop          | Type                                   | Default                                         | Purpose                                                              |
| ------------- | -------------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| captions      | Caption[]                              | —                                               | Word-level captions in milliseconds; grouped within 1200 ms per line |
| srt           | string                                 | —                                               | Pasted subtitle file parsed into lines                               |
| lines         | CaptionLine[]                          | —                                               | Timed lines with per-word fill windows                               |
| text          | string                                 | Acme reconciles every transaction automatically | Single demo line used when no lines are given                        |
| emphasize     | string                                 | automatically                                   | Comma-separated words of text to emphasise                           |
| preset        | boxed \| karaoke \| highlight \| clean | boxed                                           | The look: box, outline, accent bar, or pill                          |
| accentColor   | string                                 | #FFE81F                                         | Emphasised words and the highlight bar                               |
| fontSize      | number                                 | 0                                               | Override; 0 keeps the preset size ratio                              |
| fontWeight    | number                                 | 0                                               | Override; 0 keeps the preset weight                                  |
| emphasisScale | number                                 | 1.08                                            | Growth of emphasised words as their fill completes                   |
| strokeRatio   | number                                 | preset                                          | Outline width as a fraction of font size                             |
| strokeColor   | string                                 | #000000                                         | Outline colour                                                       |
| uppercase     | boolean                                | preset                                          | Force upper case                                                     |
| aspect        | landscape \| portrait \| square        | landscape                                       | Safe-area preset for caption placement                               |
| pill          | boolean                                | preset                                          | Force the rounded surface behind the line                            |
| baseColor     | string                                 | dimmed white                                    | Unspoken word colour                                                 |
| fillColor     | string                                 | white                                           | Spoken word colour                                                   |
| fontFamily    | string                                 | Montserrat                                      | Face override                                                        |
| mode          | light \| dark                          | dark                                            | Pill chrome theme                                                    |
| theme         | Partial<SnapCnTheme>                   | —                                               | Design-system token overrides                                        |
| speed         | number                                 | 1                                               | Time multiplier                                                      |
| className     | string                                 | —                                               | Passthrough class                                                    |

## Rebuild it

1. Resolve captions to lines: milliseconds or srt first, timed lines next,
   single text spread evenly last.
2. Split each line window into per-word fill windows; a word snaps spoken at
   fill 1.
3. Set the preset size from the short side, weight 600 to 900, and stroke from
   the preset ratio with paint-order stroke fill.
4. Enter each line over 8 frames and exit over 8 frames past its end frame.
5. Scale emphasised words 1 to 1.08 with cubic-out easing, pivoted on the
   measured baseline, not a guessed origin.
6. Pin the caption block to the aspect safe area: 8 percent bottom in landscape,
   18 percent in portrait.
7. Hold the first render frame until the baseline probe measures, then release
   it.

## Pitfalls

- Centring the stroke on the glyph eats stems; paint-order stroke fill keeps the
  outline outside.
- Pivoting emphasis scale on 50 percent drags the word down the pixel grid as it
  grows.
- Animating an ease across the fill looks polite and wrong; spoken words snap.
- Uppercase karaoke at 900 weight overflows narrow frames; keep the 82 percent
  width cap on boxed lines.
