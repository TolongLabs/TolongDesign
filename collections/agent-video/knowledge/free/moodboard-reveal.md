---
slug: moodboard-reveal
title: Moodboard Reveal
tier: free
category: scenes
evidence: source+film
demo: 960x540 at 60 fps, 300 frames (5 s)
length_30fps: 150
palette: light #E4E8E4, dark #040808, accent #264C8A
used_in: none
---

# Moodboard Reveal

> A kinetic headline with a swapping inline image opens into an orbiting photo
> collage that merges onto one hero. Use it to land a mood or collection on a
> single image.

## What it shows

A sentence with a small inline photo sits on near-black under a dotted grid. The
inline image drops in with a slight zoom settle, swapping every 12 frames while
the sentence holds. The sentence fades at 50 as eight gallery cards fly in
staggered 2 apart, each shuffling through the image pool every 2 frames. The
cluster orbits 130 degrees, then converges to the centre over 12 frames with a 6
px mid-merge blur while the background lifts to off-white. The cards stack
exactly onto the hero, shadows fade out, and the single hero image holds with
two wireframe markers drifting beside it.

## Timeline

| Phase           | Frames (30 fps) | What moves                                                                                                                   | Curve                              |
| --------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Sentence        | 0–50            | Inline image swaps every 12 frames from frame 8, each settling 1.16 to 1 over 9 frames; sentence fades in 0–8                | bezier(0.2, 0.6, 0.35, 1) (source) |
| Gallery in      | 46–88           | Eight slots fade and scale 0.6 to 1 in over 12 frames, staggered 2; each shuffles images every 2 frames; cluster orbits 130° | in-out cubic orbit (source)        |
| Merge           | 88–100          | All slots converge to centre and to a common 300 px width, un-rotating; blur peaks 6 px mid-merge                            | bezier(0.2, 0.6, 0.35, 1) (source) |
| Background lift | 88–104          | Page cross-fades near-black to off-white; dotted grid fades out with the dark act                                            | linear (source)                    |
| Hero hold       | 104–150         | Single hero image rests on light with drifting wire markers                                                                  | hold (observed)                    |

## Techniques

- `SplitText`: no split; one lead-in line plus bold emphasis and tail around the
  inline slot (source)
- `Reveal`: inline images stack and the newest drops 1.16 to 1 over 9 frames,
  never flashing empty (source)
- `Collage`: 8 tilted slots at fixed offsets flicker through the pool with
  stride 3 and per-slot offset 5, freezing at frame 88 (source)
- `Camera`: the orbit-plus-merge reads as a push through the cluster, built from
  slot transforms with 6 px mid-merge blur (source)
- `Stage`: background interpolates dark to light over 88–104 while cards merge
  underneath (source)
- `Grid`: dotted grid drawn only on the dark act, fading out as the page lifts
  (source)
- `Card`: shadows fade to none past 98 percent merge so stacked cards leave no
  dark halo (source)

## Props to expose

| Prop       | Type                 | Default                | Purpose                                      |
| ---------- | -------------------- | ---------------------- | -------------------------------------------- |
| leadIn     | string               | that lets you          | Text before the inline image                 |
| emphasis   | string               | filter                 | Bold word after the inline image             |
| tailIn     | string               | out AI.                | Text after the emphasis word                 |
| images     | string[]             | 8 showcase urls        | Pool for the intro swap and gallery slots    |
| heroImage  | string               | images[3]              | Image the montage lands on                   |
| darkColor  | string               | dark theme background  | Start background near-black                  |
| lightColor | string               | light theme background | End background off-white                     |
| theme      | Partial<SnapCnTheme> | —                      | Tokens applied to both ends of the crossfade |
| fontFamily | string               | Inter stack            | Face for the sentence                        |
| speed      | number               | 1                      | Time multiplier                              |
| className  | string               | —                      | Class for the outer wrapper                  |

## Rebuild it

1. Set the sentence with a 108 px inline slot and drop a new image in every 12
   frames from frame 8, each settling 1.16 to 1 over 9 frames.
2. Fade the sentence out by 50 while 8 gallery slots scale in staggered 2 frames
   apart, each shuffling the pool every 2 frames.
3. Orbit the cluster 130 degrees from 46–88 with an in-out cubic, then converge
   every slot to the centre at a common 300 px width over 88–100.
4. Peak a 6 px blur mid-merge, un-rotate slots to 0, and fade card shadows out
   as they stack.
5. Lift the background dark to light over 88–104 and fade the dotted grid with
   the dark act.
6. Freeze the top slot to the hero at 88 and hold the single image with drifting
   wire markers to 150.

## Pitfalls

- Fading cards on merge strobes the stack; opacity is entrance-only and the top
  card simply covers the rest.
- Letting the shuffle run past 88 strobes the convergence; every slot freezes as
  the merge starts.
- Easing slot rotation with the wrong curve breaks the orbit-then-snap rhythm;
  orbit is in-out cubic, merge is the moderate decelerate.
- Keeping card shadows through the stack piles eight shadows into a dark halo
  around the hero.
