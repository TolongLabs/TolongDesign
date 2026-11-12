---
slug: word-settle
title: Word Settle
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 120 frames (2.0 s)
length_30fps: 60
palette: light #FCFCFC, dark none, accent none
used_in: none
---

# Word Settle

> A sentence appears word by word, each new word hot, cooling to ink as a color
> front passes behind it.

## What it shows

A single centered line sits on paper. "And" appears in a warm tan. Words append
left to right every couple of demo frames while a slower color front trails
behind, turning tan to ink word by word in reading order. The newest words
always glow warm against settled dark ones. The full "And actually ship the
film." cools in order and rests in plain ink for the long hold.

## Timeline

| Phase | Frames (30 fps) | What moves                                                       | Curve               |
| ----- | --------------- | ---------------------------------------------------------------- | ------------------- |
| Open  | 0–1             | "And" appears in warm tan                                        | hold (observed)     |
| Build | 1–8             | Words append left to right; each arrives warm                    | linear (observed)   |
| Cool  | 8–20            | The color front crosses behind; words settle tan to ink in order | ease-out (observed) |
| Hold  | 20–60           | The full line rests in ink                                       | hold (observed)     |

## Techniques

- `Stage`: plain paper field (observed)
- `Reveal`: words appear in place left to right with no motion (observed)
- `custom: cool-head`: a color front trails the reveal edge and turns accent to
  ink as it passes (observed)

## Props to expose

| Prop     | Type   | Default                       | Purpose                                              |
| -------- | ------ | ----------------------------- | ---------------------------------------------------- |
| sentence | string | "And actually ship the film." | Line that builds and cools (proposed)                |
| hot      | string | "#C08A4E"                     | Arrival tan for new words (proposed)                 |
| ink      | string | "#1A1A1A"                     | Settled text color (proposed)                        |
| wordGap  | number | 2                             | Demo frames between word arrivals (proposed)         |
| coolLag  | number | 8                             | Demo frames the color front trails behind (proposed) |

## Rebuild it

1. Lay out the full line centered once; hide unrevealed words without removing
   them.
2. `Reveal` words left to right every `wordGap` demo frames, each in hot.
3. Run the custom cool front behind at `coolLag` distance, settling words to
   ink.
4. Never reflow the line; it stays centered throughout.
5. Hold the settled line for the long end beat.

## Pitfalls

- Reflowing the line as words land; lay it out whole first.
- Cooling all words at once; the front passes in reading order.
- Adding motion to the arrival; words appear in place.
- Letting two hot words pile up; only the newest glows.
