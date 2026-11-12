---
slug: agent-open
title: Agent Open
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 288 frames (4.8 s)
length_30fps: 144
palette: light #F8F8F4, dark none, accent #9B56BF
used_in: none
---

# Agent Open

> A positioning line that assembles, resolves to a brand name, then becomes a
> typed prompt.

## What it shows

The words "You've been hand-animating demos with" assemble one at a time. Each
new word's letters arrive at staggered heights and fall into the baseline
together. The line cuts hard to the gradient word "snapcn" as a colour ramp
sweeps across it. A caret types the wrong start "a", deletes it, and types "Ship
the demo". The last words land inside a violet highlight that sweeps off to the
right, handing them back at full size.

## Timeline

| Phase | Frames (30 fps) | What moves                                                   | Curve               |
| ----- | --------------- | ------------------------------------------------------------ | ------------------- |
| 1     | 0–38            | Words assemble one at a time; letters drop to the baseline   | ease-out (observed) |
| 2     | 38–57           | Full line holds                                              | hold (observed)     |
| 3     | 57–67           | Hard cut to the gradient wordmark; colour ramp sweeps across | ease-out (observed) |
| 4     | 67–86           | Caret types "a", then deletes it                             | linear (observed)   |
| 5     | 86–134          | "Ship the demo" types; the highlight sweeps off right        | linear (observed)   |
| 6     | 134–144         | End state holds                                              | hold (observed)     |

## Techniques

- `Stage`: warm paper with soft blue and peach tints (observed)
- `SplitText`: word-by-word assembly with per-letter height stagger (observed)
- `Reveal`: letters falling into the baseline together (observed)
- `GlyphGlow`: colour ramp sweeping across the gradient wordmark (observed)
- `Typewriter`: fixed-rate typing of the wrong and right text (observed)
- `Caret`: thin bar driving the type-and-delete (observed)
- `TextSwap`: wrong start deleted, right line retyped (observed)
- `Highlight`: violet band behind the tail words, sweeping off right (observed)

## Props to expose

| Prop           | Type     | Default                                               | Purpose                                      |
| -------------- | -------- | ----------------------------------------------------- | -------------------------------------------- |
| leadLine       | string[] | ["You've", "been", "hand-animating", "demos", "with"] | Words assembled in act one (proposed)        |
| brand          | string   | "snapcn"                                              | Wordmark shown in act two (proposed)         |
| wrongStart     | string   | "a"                                                   | Mistyped text that gets deleted (proposed)   |
| prompt         | string   | "Ship the demo"                                       | Final typed line (proposed)                  |
| highlightColor | string   | "#9B56BF"                                             | Band colour behind the tail words (proposed) |

## Rebuild it

1. Assemble the lead line with `SplitText`, dropping letters from staggered
   heights.
2. Hold the full line for a beat.
3. `hard cut` to the brand word and sweep `GlyphGlow` across it.
4. Type the wrong start with `Typewriter` and `Caret`, then delete it.
5. Type the final line and land the `Highlight` behind its tail.
6. Sweep the band off right and hold the clean line.

## Pitfalls

- Dropping whole words instead of staggered letters flattens the assembly.
- Fading between the line and the wordmark instead of a hard cut.
- Leaving the highlight parked over the words hides the payoff.
- Deleting at the same speed as typing; the delete must read faster.
