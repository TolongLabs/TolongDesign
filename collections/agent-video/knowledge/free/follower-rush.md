---
slug: follower-rush
title: Follower Rush
tier: free
category: social
evidence: source+film
demo: 960x540 at 60 fps, 600 frames (10.0 s)
length_30fps: 300
palette: light #F8FCFC, dark #000000, accent #357590
used_in: none
---

# Follower Rush

> An X-style follower notification that piles avatars into a row, explodes the
> count, and bends the crowd into a travelling wave.

## What it shows

A single inline notification fades up: silhouette icon, one avatar, a bold name
with a verified seal and the words "followed you". The line lifts into a stacked
pile as avatars pop in one by one and the count climbs beside them. The trickle
turns into a blow-up: the number runs exponentially into the thousands while the
row stretches full width and bends into a sine wave. The wave scrolls on, faces
streaming past, and the callout freezes on the final name and total.

## Timeline

| Phase   | Frames (30 fps) | What moves                                                                                               | Curve      |
| ------- | --------------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| 0–8     | 0–8             | Whole scene fades in from 0                                                                              | linear     |
| 8–20    | 8–20            | Inline notification holds: icon, avatar, lead name, zero others                                          | hold       |
| 20–34   | 20–34           | Inline line slides up 18 px and fades over 7 frames; pile row lifts from centre and fades in             | smoothstep |
| 34–84   | 34–84           | Pile fills 1 to 22 avatars; count runs linearly 1 to 22                                                  | linear     |
| 84–140  | 84–140          | Count explodes exponentially to the target; scroll ramps 0.85 to 22 px per frame; row bends to full wave | smoothstep |
| 140–300 | 140–300         | Wave travels at full speed under a slow sine; name and total freeze and hold                             | hold       |

## Techniques

- `CountUp`: the total runs linearly 1 to 22, then exponentially to 5001,
  landing exactly on frame 140 (source)
- `Collage`: up to 22 overlapping avatar discs (66 px, 0.76 pitch, page-coloured
  ring) pile from the centre, then spread edge to edge (source)
- `custom: wave-row`: the row bends onto a travelling sine, amplitude 46 px,
  1.55 periods, phase advancing 0.05 per frame, with edge fade masks (source)
- The lead name cycles every 9 frames while rushing, then freezes for the hold
  (source)
- Blank frame, faint notification by frame 1, full inline line by frame 10, 7
  others at frame 40, 103 at frame 100, 719 at frame 120, frozen 5,000 wave from
  frame 140 (observed)

## Props to expose

| Prop           | Type                   | Default            | Purpose                                                      |
| -------------- | ---------------------- | ------------------ | ------------------------------------------------------------ |
| totalFollowers | number                 | 5000               | Headline "others" number; the running total is this plus one |
| followers      | Follower[]             | sample crowd of 38 | Names and photo URLs cycling through the slots               |
| accentColor    | string                 | #266DF0            | Verified seal and silhouette icon                            |
| theme          | Partial<SnapCnTheme>   | —                  | Design-system token overrides                                |
| mode           | light \| dark          | —                  | Theme selector                                               |
| fontFamily     | string                 | Inter              | Face for the callout line                                    |
| orientation    | horizontal \| vertical | horizontal         | Stage layout; vertical uses a 720 by 1280 stage              |
| speed          | number                 | 1                  | Time multiplier                                              |

## Rebuild it

1. Fade the scene in over frames 0 to 8 on a card-coloured stage.
2. Hold one inline notification until frame 20, then morph it into the centred
   pile over 14 frames.
3. Pop avatars in with a 0.55 to 1 scale as the linear count reaches each slot.
4. Past frame 84, grow the count exponentially and integrate scroll velocity
   quadratically up to 22 px per frame.
5. Bend slot positions onto the sine and cross-fade pile positions to wave
   positions with smoothstep.
6. Mask both wave ends with a linear gradient so scrolled slots fade instead of
   clipping.
7. Freeze the lead name and the formatted total once the count lands, and hold
   the travelling wave.

## Pitfalls

- A flat scroll speed makes twelve faces a second read as strobing; ramp
  velocity and hold it.
- Ring avatars with a border instead of a box-shadow change the overlap pitch.
- Reusing one photo pool shorter than the row shows twins side by side; cycle at
  least 24 photos.
- Letting the lead name keep cycling during the hold flickers the resting frame.
