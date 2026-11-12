---
slug: type-morph
title: Type Morph
tier: free
category: text
evidence: source+film
demo: 960x540 at 60 fps, 188 frames (3.13 s)
length_30fps: 94
palette: light #F8FCFC, dark #000000, accent none
used_in: none
---

# Type Morph

> A headline types itself, sheds its lead, morphs into a new phrase letter by
> letter, then cuts to one word. Use it for a short positioning turn.

## What it shows

The full line types itself out centred on paper. The lead cuts away in one frame
and the surviving word slides back to centre. Shared letters then travel to
their new slots while the rest cross-fade, turning the old emphasis into a new
phrase. That phrase cuts to a single centred word. The demo holds that word on
paper; an optional flood variant ends on two flat colours instead.

## Timeline

| Phase      | Frames (30 fps) | What moves                                                                                               | Curve                                          |
| ---------- | --------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Typing     | 0–44            | The whole line assembles word by word through text-reveal, centre-anchored                               | per text-reveal (source)                       |
| Slide      | 39–55           | The lead cuts at frame 44; the line re-centres on one continuous 16-frame curve straight through the cut | bezier(0.3438, 0.0294, 0.032, 0.9269) (source) |
| Morph      | 56–67           | Shared glyphs travel from old slot to new slot; unmatched glyphs cross-fade in place                     | bezier(0.2, 0.6, 0.35, 1) (source)             |
| Exit drift | 72–81           | The line drifts with geometric per-frame velocity, ratio 1.76456, coefficient 1.3194                     | exponential ease-in (source)                   |
| Final      | 81–93           | Hard cut to the centred final phrase, held 12 frames                                                     | hold (source)                                  |
| Flood      | 82–89           | Flood variant only: two flat colours, 4 frames each                                                      | hard cut (source)                              |

## Techniques

- `Typewriter`: the opening line types through the mounted text-reveal
  component, not a reimplementation (source)
- `SplitText`: every glyph sits absolutely placed from offsets measured in the
  real face at the real size behind a hidden probe (source)
- `Camera`: the re-centring slide is one bezier starting 5 frames before the
  cut; the exit is a geometric drift that stops at the second cut (source)
- `TextSwap`: emphasis morphs into the new phrase by greedy nearest-unused glyph
  pairing, matched glyphs travel, the rest fade (source)
- `Stage`: the optional flood ends on two flat colours, each a single-frame cut,
  never a crossfade (source)

## Props to expose

| Prop        | Type                      | Default           | Purpose                                                         |
| ----------- | ------------------------- | ----------------- | --------------------------------------------------------------- |
| lead        | string                    | "Not just "       | Typed head of the line; cut away at frame 44                    |
| emphasis    | string                    | "communicator."   | Surviving tail that slides to centre                            |
| morphTo     | string                    | "something more." | Phrase the emphasis morphs into                                 |
| finally_    | string                    | "more."           | Centred phrase after the second cut                             |
| wordOnFlood | boolean                   | false             | Carry the final phrase onto the flood                           |
| accent      | string                    | —                 | Accepted, not drawn; caret and fresh glyphs take the ink colour |
| flood       | [string, string] \| false | false             | Two flat end colours, or paper when false                       |
| background  | string                    | theme background  | Page colour; the reference paper is #F7F7F7                     |
| ink         | string                    | theme foreground  | Type colour                                                     |
| reveal      | object                    | —                 | Props passed untouched to text-reveal                           |
| size        | number                    | 0.1256            | Cap-to-descender height as a fraction of frame height           |
| theme       | Partial<SnapCnTheme>      | —                 | Design-token overrides                                          |
| mode        | "light" \| "dark"         | —                 | Which theme base to paint from                                  |
| fontFamily  | string                    | —                 | Face label; overrides theme.fontFamily                          |

## Rebuild it

1. Mount text-reveal for frames 0–44 and hand it the full typed line.
2. Measure every glyph offset in a hidden probe behind delayRender before
   drawing anything.
3. Cut the lead at frame 44 with no animation; drive the slide on the 16-frame
   bezier from frame 39.
4. Pair glyphs greedily by nearest unused match; travel matches, cross-fade the
   rest over frames 56–67.
5. Start the geometric exit drift at frame 72 and stop it dead at the second
   cut.
6. Cut to the centred final phrase at frame 81 and hold 12 frames, or run the
   two 4-frame flood stages.
7. Set all type in geometricPrecision with letterSpacing -0.035em, and gate
   willChange to the Player only.

## Pitfalls

- Modelling the slide as drift-then-move puts a seam at the cut where the
  reference has none.
- Estimating advance widths instead of measuring them lands each morphing glyph
  a pixel or two off.
- Carrying the exit drift into the final phrase drags a centred word off-centre
  by hundreds of pixels.
- Crossfading the flood instead of cutting it reads as the screen dimming.
- Leaving hinting on makes every glyph re-snap as it travels and the line boils.
