---
slug: search-retype
title: Search Retype
tier: pro
category: ai-input
evidence: film
demo: 960x540 at 60 fps, 250 frames (4.17 s)
length_30fps: 125
palette: light #F8F4F4, dark none, accent none
used_in: none
---

# Search Retype

> A search field that types one query, deletes it, and types a better one, for
> search demos.

## What it shows

A small search pill holds centered with a "Search" placeholder. It types "Search
components" while the camera pushes in until the field is huge. It holds, then
deletes back to "Search". After a beat, "Animated launch videos" retypes under a
caret, each fresh character arriving in a violet accent and settling to ink. The
full query holds, then the field whips out sideways.

## Timeline

| Phase | Frames (30 fps) | What moves                                                  | Curve              |
| ----- | --------------- | ----------------------------------------------------------- | ------------------ |
| 1     | 0–36            | Small search pill holds                                     | hold (observed)    |
| 2     | 36–42           | First query types as the camera pushes in                   | linear (observed)  |
| 3     | 42–56           | Huge field holds, then deletes back to "Search"             | hold (observed)    |
| 4     | 56–67           | Empty wide field holds                                      | hold (observed)    |
| 5     | 67–108          | Second query retypes, fresh chars in accent under the caret | linear (observed)  |
| 6     | 108–121         | Full query holds                                            | hold (observed)    |
| 7     | 121–125         | Field whips out sideways                                    | ease-in (inferred) |

## Techniques

- `Stage`: plain off-white field, nothing else on screen (observed)
- `Typewriter`: two typed passes with a full delete between them and a blinking
  `Caret` (observed)
- `Camera`: push-in riding the first query's keystrokes (observed)
- `SplitText`: fresh characters arriving in accent and settling to ink behind
  the caret (observed)
- `MotionBlur`: horizontal whip carrying the field off frame (inferred)

## Props to expose

| Prop        | Type   | Default                  | Purpose                                             |
| ----------- | ------ | ------------------------ | --------------------------------------------------- |
| firstQuery  | string | "Search components"      | Query that gets deleted (proposed)                  |
| secondQuery | string | "Animated launch videos" | Query that stays (proposed)                         |
| accent      | string | "#7C6CF0"                | Color of freshly typed characters (proposed)        |
| pushScale   | number | 3                        | Camera magnification at closest approach (proposed) |

## Rebuild it

1. Center the small search pill on the plain field and hold it.
2. Type the first query while pushing the camera in.
3. Hold the huge field, then delete back to the placeholder.
4. Hold the empty wide field a beat.
5. Retype the second query with fresh characters in accent under a caret.
6. Hold the finished query.
7. Whip the field out sideways with horizontal blur.

## Pitfalls

- Easing the push instead of keying it to keystrokes disconnects camera from
  typing.
- Deleting only to a partial string confuses the beat; clear back to "Search".
- Fading the field out instead of whipping it leaves the ending limp.
