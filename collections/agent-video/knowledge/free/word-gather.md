---
slug: word-gather
title: Word Gather
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 98 frames (1.63 s)
length_30fps: 49
palette: light #F4F4F0, dark #141410, accent #6D98D7
used_in: none
---

# Word Gather

> A sentence gathers one word at a time out of order and settles into a line.
> Use it for a short statement that should assemble itself.

## What it shows

The first word holds the middle of the frame alone. The rest drop in around it,
not in reading order and not where they belong, each landing near its slot in
accent blue and sliding home. The lead word slides left as the line forms around
it. The whole block starts oversized and eases back to real size. The demo ends
on the full sentence resting in ink.

## Timeline

| Phase      | Frames (30 fps)   | What moves                                                                                                       | Curve                   |
| ---------- | ----------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Lead alone | 0–23              | The first word holds centred, then drops 20.6 px onto its line over the lead-in beats (source)                   | measured table (source) |
| Drops      | 24–33             | The other five words drop in scatter order 5, 3, 1, 4, 2, each from its own scatter offset in accent (source)    | measured table (source) |
| Gather     | 24–42             | Words slide home on the travel curve; the lead slides left across the line; the block scales 1.289 to 1 (source) | measured table (source) |
| Settle     | per word +4 beats | Each landed word wears accent for 4 beats, then turns ink (source)                                               | hold (source)           |
| Hold       | 42–49             | The full sentence rests at scale 1 (observed)                                                                    | hold (observed)         |

## Techniques

- `Reveal`: words appear mid-scatter and slide the last of the way home on an
  exponential settle, about 0.7 of the distance left per beat (source)
- `Camera`: the block holds scale 1.289 while words arrive, then falls to 1 with
  the middle of the fall inside two beats (source)
- `Highlight`: each travelling word wears the accent colour and turns ink 4
  beats after landing (source)
- `SplitText`: every word is its own absolutely placed layer from an arithmetic
  layout, never the browser's (source)
- `custom: scatter-drop`: each word starts from a fixed per-index scatter
  offset, three sliding in flat and two falling past the line (source)

## Props to expose

| Prop       | Type                 | Default                        | Purpose                                                       |
| ---------- | -------------------- | ------------------------------ | ------------------------------------------------------------- |
| text       | string               | "Every scene is yours to own." | The sentence; the first word holds alone                      |
| maxWidth   | number               | 330                            | Line width in card pixels at scale 1; wider means fewer lines |
| accent     | string               | theme primary                  | Colour a word wears while travelling                          |
| fontWeight | number               | 500                            | Weight of the sentence                                        |
| fontFamily | string               | —                              | Face label; overrides theme.fontFamily                        |
| theme      | Partial<SnapCnTheme> | —                              | Design-token overrides                                        |
| mode       | "light" \| "dark"    | "light"                        | Which theme base to paint from                                |
| speed      | number               | 1                              | Time multiplier                                               |
| className  | string               | —                              | Class for the outer wrapper                                   |

## Rebuild it

1. Lay the sentence out yourself with canvas measureText: greedy wrap at
   maxWidth, centred lines, cap 35.82 px and line pitch 48.18 px.
2. Hold the lead word alone on the card centre; drop it onto its line over the
   16-beat lead table.
3. Drop the remaining words in scatter order at one-beat stagger from beat 20,
   each from its scatter offset.
4. Slide each word home on the travel table and keep it accent for 4 beats
   before turning ink.
5. Slide the lead word left across the line on the 21-beat reflow table while
   the block forms.
6. Scale the whole block 1.289 to 1 over the scale table, with the line break
   solved once at scale 1.
7. Rest the full sentence at scale 1 to frame 49.

## Pitfalls

- Letting the browser lay the line out moves the line break while the block
  scale changes.
- Deriving slots from estimated widths lands each word a pixel or two off its
  home.
- Animating one shared travel curve for all words breaks the measured per-word
  landings.
- Turning words ink on arrival loses the accent trail that reads as motion.
- Scaling about the box top instead of each word's own baseline origin shifts
  baselines mid-settle.
