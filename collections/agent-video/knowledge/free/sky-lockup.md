---
slug: sky-lockup
title: Sky Lockup
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 114 frames (1.9 s)
length_30fps: 57
palette: light #F8FCFC, dark none, accent none
used_in: none
---

# Sky Lockup

> A promise takes itself apart word by word, then the mark lands as the
> wordmark.

## What it shows

A finished sentence rests on white with the mark sitting mid-line. The words
leave one after another from the tail while the white page washes off to a soft
sky behind a leaning wipe band. The mark glides left, flips from ink to white
behind a travelling soft edge, and picks up the wordmark letter by letter. The
lockup holds on the sky to the end.

## Timeline

| Phase | Frames (30 fps) | What moves         | Curve                                                                             |
| ----- | --------------- | ------------------ | --------------------------------------------------------------------------------- |
| 1     | 0-22            | Line rests         | Full sentence still; Hold (observed)                                              |
| 2     | 22-30           | Words leave        | One word per 0.7 frames sinks and fades; Measured rise and fade tables (source)   |
| 3     | 28-38           | Mark flips colour  | 65 px soft edge crosses the mark, ink to white; Sampled edge tables (source)      |
| 4     | 30-46           | Page washes to sky | Wipe band crosses, sky settles from 1.007x; Sampled wipe and zoom tables (source) |
| 5     | 38-57           | Wordmark lands     | Letters rise 16.2 px and fade in, staggered; Measured letter tables (source)      |
| 6     | 50-57           | Lockup holds       | Mark and wordmark still on sky; Hold (observed)                                   |

## Techniques

- `Lockup`: mark plus wordmark assembling on a 1920 by 1080 stage (source)
- `Stage`: white page washing to a sky photograph behind a leaning smoothstep
  band (source)
- `SplitText`: word-by-word leave with 0.7-frame stagger from the tail (source)
- `Reveal`: wordmark letters rising with per-frame fade tables (source)
- `custom: edge-flip`: mark colour swapped by a soft edge travelling across its
  inks (source)

## Props to expose

| Prop             | Type                 | Default              | Purpose                             |
| ---------------- | -------------------- | -------------------- | ----------------------------------- |
| wordmark         | string               | snapcn               | Wordmark typed beside the mark      |
| logo             | mark paths           | snapcn mark          | Mark artwork as SVG shapes          |
| before           | string               | your animations      | Words left of the mark              |
| after            | string               | as one install       | Words right of the mark             |
| sky              | string               | portal-intro picture | Backdrop photograph                 |
| fontFamily       | string               | none                 | Line face override                  |
| fontWeight       | number               | 500                  | Line weight                         |
| fontSize         | number               | 90.5                 | Line size on the stage              |
| wordNudge        | [number, number][]   | none                 | Per-word optical spacing            |
| wordTracking     | number[]             | none                 | Per-word tracking in em             |
| wordmarkFont     | string               | none                 | Wordmark face                       |
| wordmarkWeight   | number               | 600                  | Wordmark weight                     |
| wordmarkSize     | number               | 105                  | Wordmark size on the stage          |
| wordmarkTracking | number               | 0                    | Wordmark tracking in em             |
| wordmarkGap      | number               | 20                   | Gap between mark and wordmark       |
| lockupColor      | string               | #FFFFFF              | Mark and wordmark colour on the sky |
| speed            | number               | 1                    | Playback multiplier                 |
| theme            | Partial<SnapCnTheme> | none                 | Design-system token overrides       |
| mode             | light \| dark        | none                 | Colour mode                         |

## Rebuild it

1. Lay out the line on a 1920 by 1080 stage with the tile sized to the mark.
2. Play the measured source tables backwards through the cut map.
3. Leave words tail-first on the rise and fade tables.
4. Wash the page to sky behind the leaning wipe band.
5. Flip the mark through the travelling soft edge as it glides.
6. Cut the wordmark letters in with the letter rise tables.
7. Paint words split across the two device rows around their baseline so slow
   rises stay smooth.

## Pitfalls

- Rendering the wipe as a straight alpha fade loses the leaning band the
  reference shows.
- Scaling words about their centre drags the baseline across whole-pixel rows.
- Sizing the tile to anything but the mark breaks the line layout the tables
  assume.
- Measuring type before the real faces load shifts every word off its table.
