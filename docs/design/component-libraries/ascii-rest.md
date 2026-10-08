---
name: ascii.rest
slug: ascii-rest
section: Component Libraries
section_slug: component-libraries
source_url: https://ascii.rest/
designeer_url: https://ascii.rest/
designeer_blurb:
  196 animated ASCII art pieces for web pages, as dependency-free TypeScript
  modules for React, Next.js, Astro or one HTML tag.
paywall: free
pricing_summary:
  'Free and open source under the MIT licence; optional sponsorship only.'
open_source: true
license: MIT
category_tags: [typescript, react, ascii-art, animation, retro, web-components]
best_for:
  [animated ascii hero visuals, retro loaders, terminal-style charts and logos]
stack: [typescript, react, nextjs, astro, html]
agent_friendly: true
last_verified: 2026-10-08
---

# ascii.rest

> 196 animated ASCII art pieces for web pages, as dependency-free TypeScript
> modules for React, Next.js, Astro or one HTML tag. Not on Designeer; added
> directly. Reach for it when a page needs a moving, terminal-flavoured visual
> without shipping a video, canvas engine or image.

## At a glance

| Field          | Value                                                                     |
| -------------- | ------------------------------------------------------------------------- |
| Source         | [ascii.rest](https://ascii.rest/)                                         |
| Paywall        | **Free**, MIT; sponsorship links only                                     |
| Open source    | Yes, MIT ([GitHub](https://github.com/bas3line/ascii))                    |
| Type           | Animated ASCII art library (React / Astro components, web component, API) |
| Works with     | React 18+, Next.js app router, Astro, plain HTML, TypeScript              |
| Best for       | Hero visuals, loaders, terminal-style charts, language and distro logos   |
| Agent-friendly | Yes: typed modules, one-tag embed, pieces loadable by name                |

## What it is

ascii.rest is a library of animated ASCII art for the web, written in TypeScript
by [@bas3line](https://github.com/bas3line) (Shubham). The site lists 196
pieces: 13 full-colour scenes, loaders, charts, type, 27 language logos, 22
Linux distros (in colour or one ink), plus 3D shapes, physics and creatures. The
README's categories are scenes, ui, data, type, logos, companies, distros,
shapes, space, physics, nature, creatures, objects, generative and effects. (The
README tagline still says "169 pieces"; its body and the site say 196.)

Each piece is a small module exporting `meta` and a frame function
`(t, env) => string`. Text pieces draw into a `<pre>`; coloured pieces (scenes,
logos, companies, distros) draw onto a `<canvas>`, or into a `<pre>` in one ink
with `mono`. There are no runtime dependencies; React is an optional peer
dependency.

It ships four entry points: a `mount()` API, a React `Ascii` client component,
an Astro `Ascii` component, and an `<ascii-art>` custom element loaded from
`https://ascii.rest/ascii.js`. Pieces play only while on screen and hold their
first frame for readers who prefer reduced motion. The project is very new: the
repo was created on 2026-10-07, at version 0.1.0 with no releases yet.

## Paywall and pricing

- **Free:** everything: all pieces, components and the hosted script.
- **Paid:** none. The site says "ascii.rest is free and MIT licensed"; the only
  money links are optional sponsorships (GitHub Sponsors, Buy Me a Coffee,
  PayPal).
- **Sign-up required?** No.
- **Licence for client work:** MIT (Copyright (c) 2026 bas3line), so commercial
  and client use are fine. A link back is "appreciated" but not required. Logos
  draw on devicon (MIT) and Simple Icons (CC0); company and product names remain
  their owners' trademarks, so check brand rules before using a company logo
  piece. The fallback font "ascii.rest mono" is a cut of JetBrains Mono (OFL).

Checked 2026-10-08.

## How to use

1. Browse [ascii.rest](https://ascii.rest/) and open a piece page
   (`https://ascii.rest/<piece-name>/`) to see it running and copy its name.
2. **No build step:** load the hosted script and drop in the tag.

   ```html
   <script type="module" src="https://ascii.rest/ascii.js"></script>

   <ascii-art piece="donut"></ascii-art>
   ```

   Attributes: `piece`, `src`, `fps`, `options` (JSON, e.g.
   `'{"text":"hello"}'`) and `label`.

3. **React / Next.js:** install from GitHub. It is not on the npm registry. It
   installs as `ascii.rest` and builds itself on install.

   ```bash
   npm install github:bas3line/ascii
   ```

   ```tsx
   import { Ascii } from 'ascii.rest/react'
   import { donut } from 'ascii.rest/pieces'

   <Ascii piece={donut} />
   <Ascii piece="night-coast" />                          // fetched by name when it mounts
   <Ascii piece={donut} options={{ fps: 12 }} className="art" />
   <Ascii piece="rust" mono />                            // a logo in one ink
   ```

4. **Astro:**

   ```astro
   ---
   import Ascii from "ascii.rest/astro";
   ---

   <Ascii piece="donut" />
   <Ascii piece="big-text" options={{ text: "hello" }} class="banner" />
   ```

5. **Plain TypeScript:** `mount()` returns a stop function.

   ```ts
   import { mount } from 'ascii.rest'
   import { donut } from 'ascii.rest/pieces'

   const stop = mount(document.querySelector('pre')!, donut, { fps: 12 })
   ```

## Examples

- [donut](https://ascii.rest/donut/): a lit torus turning on two axes, after
  donut.c; the piece used in every snippet.
- [alpine-dawn](https://ascii.rest/alpine-dawn/): a full-colour canvas scene
  (snow peaks over a misty lake) that works as a hero backdrop.
- [boot-log](https://ascii.rest/boot-log/): a memory self-test, then a scrolling
  boot log; a ready-made loading or intro state.
- [cpu-meters](https://ascii.rest/cpu-meters/): htop-style core, memory and swap
  meters for dev-tool or infra landing pages.
- [bar-chart](https://ascii.rest/bar-chart/): bars easing between datasets with
  values on top; a terminal-style data visual.
- [debian](https://ascii.rest/debian/): a Linux distro logo piece, in colour or
  one ink.

## When to use it

- Use it when a dev-tool, infra or retro-themed site wants a moving ASCII hero,
  loader, chart or logo that stays text-light and dependency-free.
- Use the HTML tag for quick static pages; install from GitHub for React,
  Next.js or Astro apps so the pieces ship with your bundle.
- Skip it for static image-to-ASCII conversion; use
  [ASCIInator](../utilities/asciinator.md) or
  [ASCII Studio](../utilities/ascii-studio.md) instead. For terminal-style UI
  widgets rather than art, use [SRCL](../component-libraries/srcl.md).

## Agent notes

- Docs are the README: <https://github.com/bas3line/ascii#readme>. There is no
  llms.txt (`/llms.txt` returns 404), no MCP server and no CLI.
- Install with `npm install github:bas3line/ascii` (or
  `bun add github:bas3line/ascii`). `npm view ascii.rest` returns 404, so there
  is no registry package. Pin a commit for reproducible builds: no tags or
  releases exist yet.
- Exports: `ascii.rest` (`mount`, `load`, `names`, `canvas`, `isPiece`),
  `ascii.rest/pieces`, `ascii.rest/pieces/*`, `ascii.rest/react`,
  `ascii.rest/element`, `ascii.rest/astro`.
- `Ascii` (React) is a `"use client"` component. Importing on the server is
  safe: nothing touches the DOM until mount.
- Browser support needs ES modules, custom elements, `IntersectionObserver`, and
  `ResizeObserver` for canvas pieces.
- Box-drawing glyphs need a monospace font that has them. The tag and the Astro
  component fall back to "ascii.rest mono" served from ascii.rest; with React,
  add it to your `<pre>`'s font stack yourself.
- Respect reduced motion: set `motion: true` only behind a user control.
- The HTML tag fetches pieces and fonts from ascii.rest at runtime. Self-hosting
  `ascii.js` is not documented.

## Alternatives in this repo

- [ASCIInator](../utilities/asciinator.md): converts images to static ASCII text
  instead of shipping animated pieces.
- [ASCII Studio](../utilities/ascii-studio.md): turns video into ASCII frames;
  bring your own footage.
- [ASCII (Kracked Devs)](../utilities/ascii-kracked-devs.md): a one-off
  text-to-ASCII generator, not embeddable code.
- [Dot Matrix](../component-libraries/dot-matrix.md): the same copy-in retro
  animation idea, with LED dots instead of characters.
- [SRCL](../component-libraries/srcl.md): a DOS-style terminal UI kit (widgets
  and chrome, not art).

## Sources

- [Official site](https://ascii.rest/) — checked 2026-10-08
- [Author page](https://ascii.rest/author/) — checked 2026-10-08
- [GitHub repo, README and LICENSE](https://github.com/bas3line/ascii) — checked
  2026-10-08
- [package.json](https://github.com/bas3line/ascii/blob/main/package.json) —
  checked 2026-10-08
- Pricing: no pricing page (`/pricing` returns 404); free per the site footer —
  checked 2026-10-08
