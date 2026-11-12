---
slug: spec-wall
title: Spec Wall
tier: pro
category: text
evidence: film
demo: 960x540 at 60 fps, 216 frames (3.6 s)
length_30fps: 108
palette: light #F8F8F4, dark #141414, accent none
used_in: none
---

# Spec Wall

> Spec lines stack up on black, then the film cuts to paper and scrolls through
> the full wall of text.

## What it shows

On black, the headline "check out all of this other stuff:" builds word by word.
Supporting lines append beneath it one at a time: "The free tier installs",
"with npx shadcn add,", "every component is copied", "into your project,". The
film cuts hard to a paper act filled edge to edge with a dense wall of small
text. That wall scrolls upward fast, carrying the install, frame-driven
rendering, theming and MCP lines past the frame. The scroll carries on to the
end.

## Timeline

| Phase               | Frames (30 fps) | What moves                                              | Curve                               |
| ------------------- | --------------- | ------------------------------------------------------- | ----------------------------------- |
| Headline builds     | 0-14            | Words land one at a time to form the headline           | linear steps (observed)             |
| Line two            | 14-36           | "The free tier installs" fades in below, then holds     | fade then hold (observed)           |
| Line three          | 36-50           | "with npx shadcn add," appends below, then holds        | fade then hold (observed)           |
| Lines four and five | 50-72           | Two more lines append, stack holds                      | fade then hold (observed)           |
| Pre-cut hold        | 72-79           | Full dark stack rests                                   | hold (observed)                     |
| Hard cut            | 79-79           | Dark stack replaced by the paper text wall on one frame | hard cut with `act flip` (observed) |
| Wall scroll         | 79-108          | Dense wall of small type scrolls upward fast            | linear (inferred)                   |

## Techniques

- `Stage`: dark act for the stack, paper act for the wall, joined by one cut
  (observed)
- `SplitText`: headline arrives word by word over the opening (observed)
- `Reveal`: each supporting line fades in below the last with holds between
  (observed)
- `Marquee`: dense wall scrolls upward as one block after the cut (observed)

## Props to expose

| Prop       | Type     | Default                                                                                        | Purpose                                                     |
| ---------- | -------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| headline   | string   | check out all of this other stuff:                                                             | Word-by-word opening line (proposed)                        |
| specLines  | string[] | The free tier installs / with npx shadcn add, / every component is copied / into your project, | Lines appending below the headline (proposed)               |
| wallCopy   | string   | install and theming paragraph                                                                  | Full dense wall text on the paper act (proposed)            |
| scrollRate | number   | 60                                                                                             | Wall scroll speed in pixels per second at 30 fps (proposed) |

## Rebuild it

1. Build the headline word by word on the dark act.
2. Append each spec line below with a fade and a hold after it.
3. Rest the full dark stack for 7 frames.
4. `hard cut` with an `act flip` to the paper wall on frame 79.
5. Scroll the wall upward as one rigid block.
6. Keep scrolling through the end with no settle.

## Pitfalls

- Fading between the dark stack and the paper wall softens the flip punch.
- Scrolling the wall with an ease-out stalls the energy the cut creates.
- Reflowing the wall mid-scroll makes lines jump sideways.
- Setting the wall type too large shows only a few lines and loses the wall
  read.
