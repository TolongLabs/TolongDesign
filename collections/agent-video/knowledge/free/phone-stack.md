---
slug: phone-stack
title: Phone Stack
tier: free
category: screens
evidence: source+film
demo: 960x540 at 60 fps, 240 frames (4.0 s)
length_30fps: 120
palette: light #ECF0E8, dark #000000, accent #B57B52
used_in: none
---

# Phone Stack

> Five phone screens that rise out of a glow one after another, each new arrival
> pushing the rest back into a receding stack.

## What it shows

A lavender glow sits on a cream page. The first screen rises from below, large
and blurred, and settles sharp in front. Each following screen arrives the same
way while the older ones shrink by 0.83 and step their tops up 24.6 reference
pixels, so only their status bars peek out above the newest. Every screen plays
its own clip under an iOS status bar. The last screen settles around frame 82
and the stack holds.

## Timeline

| Phase | Frames (30 fps) | What moves                                                      | Curve                          |
| ----- | --------------- | --------------------------------------------------------------- | ------------------------------ |
| 1     | 0–8             | Glow breathes on the empty page; first screen still below frame | hold; (observed)               |
| 2     | 8–34            | Screen 1 rises from top 400 to 74, scale 1.12 to 1, blur 9 to 0 | bezier(0.16,1,0.3,1); (source) |
| 3     | 22–48           | Screen 2 rises; screen 1 steps back to 0.83 scale               | bezier(0.16,1,0.3,1); (source) |
| 4     | 36–62           | Screen 3 rises; screens 1 and 2 each step one level back        | bezier(0.16,1,0.3,1); (source) |
| 5     | 50–76           | Screen 4 rises; older screens recede another level              | bezier(0.16,1,0.3,1); (source) |
| 6     | 64–90           | Screen 5 rises to the front; screens past depth 3 fade out      | bezier(0.16,1,0.3,1); (source) |
| 7     | 90–120          | Full stack holds; foot fades into the page and glow             | hold; (observed)               |

## Techniques

- `DeviceFrame`: 240-wide screens at 852:393 aspect, radius 26, each with
  Dynamic Island, 9:41 time and signal/wifi/battery cluster (source)
- `Reveal`: each arrival rises from below the frame large and blurred to sharp
  at rest over 26 frames (source)
- `Stage`: cream page with a blurred lavender ellipse the stack rises out of,
  plus a foot gradient it sinks back into (source)
- `Collage`: older screens shrink by 0.83 per level and climb 24.6 reference
  pixels, fading past depth 3 (source)

## Props to expose

| Prop        | Type     | Default                     | Purpose                                         |
| ----------- | -------- | --------------------------- | ----------------------------------------------- |
| videos      | string[] | five wall-N.mp4 stock clips | One clip per screen, in arrival order           |
| stagger     | number   | 14                          | Frames between one screen arriving and the next |
| background  | color    | #F3F3EE                     | The page                                        |
| glowColor   | color    | #CDB4E6                     | The glow the stack rises out of                 |
| statusColor | color    | #FFFFFF                     | Status bar ink over the clips                   |
| time        | text     | 9:41                        | Status bar time                                 |
| speed       | number   | 1                           | Timeline rate multiplier                        |

## Rebuild it

1. Paint the cream page and a blurred lavender ellipse low in the frame.
2. Start each screen below the frame at scale 1.12 with 9px blur, staggered 14
   frames apart.
3. Ease each arrival over 26 frames on bezier(0.16,1,0.3,1) to the front slot:
   width 240, top 74.
4. Push every earlier screen one level back per later arrival: scale times 0.83,
   top up 24.6 reference pixels.
5. Fade screens past depth 3 out over one more arrival step.
6. Start each clip when its screen appears; cap the clip box with the status
   gradient, island, time and icons.
7. Lay a bottom gradient from transparent to page color so the stack foot sinks
   into the glow.

## Pitfalls

- Spacing must scale with frame width from the 716 reference or the stack drifts
  off-center at other sizes.
- Running a local path through staticFile twice double-prefixes it; pass through
  http(s) and player paths untouched.
- A clip that ends while its box is up goes blank, so use clips at least as long
  as their screen is visible.
- Video and image sources need different elements; detect by extension or stills
  never play.
