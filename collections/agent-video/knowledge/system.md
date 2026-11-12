# The system behind the templates

What the ten snapcn template films share, measured from their public 1080p films
on 2026-11-12, and how this kit encodes it. Per-film detail is in
[templates/](./templates/). Measurements come from frame differences and
luminance at 160x90 over every frame; "observed" below means measured.

## Format

| Property      | Value                                                                     |
| ------------- | ------------------------------------------------------------------------- |
| Canvas        | 1920x1080 at 30 fps (films are mastered at 3840x2160)                     |
| Length        | 19.4 s to 37.6 s; 583 to 1,128 frames                                     |
| Beats         | 7 to 13 per film; 104 beats in total                                      |
| Beat length   | 21 to 189 frames; median 72 frames (2.4 s)                                |
| Between beats | No crossfades. Every boundary is a cut on an exact frame                  |
| Beat sum      | The beat lengths in the site's data sum exactly to the film's frame count |

A template is data: an ordered list of beats, each naming one component and its
frame count. The site's own beat list (`template-reels.ts` in the public repo)
is generated from the private template source.

## Two generations

| Films            | Acts                                    | Dominant cut                                         |
| ---------------- | --------------------------------------- | ---------------------------------------------------- |
| 01-05 (October)  | One act per film: all paper or all ink  | Match cut (the next beat starts from the last state) |
| 06-10 (November) | Ink and paper alternate, often per beat | Act flip (ink and paper swap on the cut)             |

Across all 94 boundaries: 48 match cuts, 24 act flips, 15 plain hard cuts and 7
whips (the exit speeds up with blur over the last 3 frames, then cuts).

The November grammar is the punchier one and the one this kit builds first:
alternate acts to reset the eye every 2 to 4 seconds, and use match cuts where
one beat's end state is the next beat's start (a chip that becomes a burst, a
composer that becomes an icon).

## Palette

| Surface | Value                                | Use                                          |
| ------- | ------------------------------------ | -------------------------------------------- |
| Paper   | `#F8F8F4`                            | Light acts. Warm off-white, never pure white |
| Ink     | `#080808`                            | Dark acts. Near-black, never pure black      |
| Card    | `#FFFFFF` on paper, `#151517` on ink | Product surfaces                             |

One accent per film, low saturation, used only on the emphasised word, the
active control, the winning number and the product's own colour:

| Film           | Accent    | Kit token |
| -------------- | --------- | --------- |
| Product launch | `#488EE3` | `blue`    |
| Feature drop   | `#36407C` | `indigo`  |
| Startup pitch  | `#BA8B5E` | `ochre`   |
| Product tour   | `#55759D` | `slate`   |
| Launch film    | `#D96550` | `coral`   |
| Ask snapcn     | `#3A938B` | `teal`    |
| What's new     | `#C98A2C` | `amber`   |
| App launch     | `#BD5674` | `rose`    |
| Why switch     | `#69A74F` | `leaf`    |

The weekly changelog film has no measurable accent. Saturated pixels cover under
2 % of most films; the coral launch film reaches 7.5 % only because of its
full-frame burst.

## Beat archetypes

Every beat in the ten films plays one of eight roles. A film is a sentence built
from them: hook, ask, work, product, proof, offer, share, close.

| Role    | Job                                     | Typical components (snapcn names)                                | Kit scene                                       |
| ------- | --------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| Hook    | One idea in plain words, in 2 to 4 s    | Word Trio, Echo Cycle, Outline Dive, Spark Question, Bin Promise | `word-cycle`, `kinetic-line`                    |
| Ask     | The user asks the product for something | Bubble Send, Input Build, Glass Ask, Type Dive                   | `chat-send`, `composer-build`                   |
| Work    | The agent visibly works                 | Agent Fanout, Step Result, Status Spinner, Dark Checklist        | `fanout`, `step-result`, `checklist`            |
| Product | Real UI, large and legible              | Phone Paywall, Phone Tabs, Window Preview, Screens Fold          | `phone-screen`, `phone-offer`, `window-preview` |
| Proof   | One number that moves                   | Bench Bars, Target Chart, Performer Table                        | `bench`                                         |
| Offer   | What it costs or what you get           | Phone Paywall                                                    | `phone-offer`                                   |
| Share   | The result leaves the product           | Publish Modal, Live Link, Url Outro                              | `publish-modal`, `live-link`, `url-outro`       |
| Close   | The mark and nothing else               | Caret Lockup, Lockup Reveal, Side Lockup, Mark Fade              | `caret-lockup`, `lockup-reveal`, `side-lockup`  |

Some components recur across films: Lockup Reveal (3 films), Outline Dive (2),
Type Dive (2), Underline Pair (2), Create Today (2). Recurrence is the hint for
which scenes to make generic.

## Motion rules

From the library's public motion direction and quality notes, restated, plus
what the films show:

1. **The camera is a layer.** Shots are driven through, not cut, inside a beat:
   a transform over a world, with travel of 8 to 14 frames, a settle of 10 to 16
   frames, and a hold of 30 to 45 frames so text can be read.
2. **Fast moves blur along their axis** and land sharp. In the films, big words
   fly in with a horizontal smear several hundred px long. The kit's `Blur` uses
   an SVG Gaussian with separate x and y deviations for this.
3. **Progressive disclosure.** Text types (about 18 to 26 characters per
   second), numbers count up, rows check off one by one, cards fill in.
4. **The cursor is an actor.** It travels a curve, presses (a scale dip of about
   6 % over 10 frames), and only then does the UI respond.
5. **Springs:** settle `{ damping: 18, stiffness: 140 }`, pop
   `{ damping: 12, stiffness: 180 }`; stagger 3 to 6 frames.
6. **Text that scales must stay steady.** Pivot the scale on the text baseline,
   not its centre, and render with `geometricPrecision`; otherwise glyphs judder
   and change shape between frames. Gate `will-change` to the live player, not
   the render. Avoid ease-outs so steep that the last five frames barely move:
   on a frame clock that reads as a freeze.
7. **No glow blobs, no mesh gradients.** Depth comes from blur and shadow. The
   exceptions in the films are deliberate: the coral burst and the amber glyph
   glow are the effect of their beat, not decoration.

## How the paid templates ship

Read from the public repository, not the paid code:

- Templates and Pro components live in a private folder that the public repo
  ignores. A build step splits them out of the public registry, so the free
  install path is a static file and the paid path is a server route.
- Without a Pro key, the paid install path answers 402, or returns a preview
  component that only plays the watermarked demo film.
- The templates page ships beat labels and MP4 films to the browser; a bundle
  analysis of that page found no template component code.

## Rebuild map: templates 06 to 10

| Film        | Kit template  | Beats | Scenes                                                                                                                                                 |
| ----------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Launch film | `launch-film` | 7     | word-cycle, fanout, chip-rail, burst, phone-offer, bench, caret-lockup                                                                                 |
| Ask snapcn  | `ask-agent`   | 13    | kinetic-line, chat-send, rich-reply, composer-build, feature-dive, phone-screen, halftone-search, glow-reply, react-bubble, thread-pull, composer-icon |
| What's new  | `whats-new`   | 11    | kinetic-line, glow-swap, search-morph, error-stack, phone-tabs, checklist, step-result, window-preview, publish-modal, url-outro                       |
| App launch  | `app-launch`  | 11    | corner-icon, idea-list, kinetic-line, screens-fold, word-stack, phone-screen, library-phone, lockup-reveal                                             |
| Why switch  | `why-switch`  | 11    | bin-promise, button-pile, glow-intro, source-line, claim-drum, library-phone, secret-field, live-link, inline-cycle, side-lockup                       |

Templates 01 to 05 are documented in full in [templates/](./templates/) and can
be rebuilt from the same scenes plus the Pro component teardowns in
[pro/](./pro/).
