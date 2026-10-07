---
name: Ray.so
slug: ray-so
section: Utilities
section_slug: utilities
source_url: https://ray.so/
designeer_url: https://designeer.xyz/utilities
designeer_blurb: Turn code snippets into shareable screenshots.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags:
  [
    code-screenshots,
    developer-tools,
    raycast,
    syntax-highlighting,
    social-cards
  ]
best_for:
  [
    code screenshots,
    social media cards,
    documentation snippets,
    presentation slides
  ]
stack: [nextjs, react, tailwind]
agent_friendly: false
last_verified: 2026-10-07
---

# Ray.so

> Turn code snippets into shareable screenshots. TolongLabs developers reach for
> Ray.so to create crisp, beautifully themed code card images for technical blog
> posts, release notes, and documentation without fiddling with CSS.

## At a glance

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Source         | [ray.so](https://ray.so/)                                   |
| Paywall        | **Free** — 100% free and open source                        |
| Open source    | Yes — MIT ([GitHub](https://github.com/raycast/ray-so))     |
| Type           | Code screenshot and snippet renderer                        |
| Works with     | JavaScript, TypeScript, Python, Rust, Go, CSS, Web browsers |
| Best for       | Code screenshots, social media cards, presentation slides   |
| Agent-friendly | No — Browser UI (supports URL hash state encoding)          |

## What it is

Ray.so is an open-source web application created by Raycast that generates
aesthetic, high-resolution screenshots of code snippets. Aimed at developers
sharing code across social media, documentation sites, changelogs, and slides,
it eliminates the unstyled, low-contrast appearance of raw screenshots.

The application automatically parses syntax across dozens of programming
languages and applies curated color themes (such as Breeze, Candy, Crimson,
Falcon, Meadow, Midnight, Raindrop, and Sunset). Users can adjust canvas
padding, toggle dark or light mode, hide or display macOS window controls, and
toggle line numbers.

In addition to code screenshots, Ray.so includes complementary sub-tools: an AI
prompt explorer, a quick app icon generator, and an Open Graph card builder. The
entire application runs client-side and can encode code and theme configurations
into URL hash parameters for shareable, reproducible snippet views.

## Paywall and pricing

- **Free:** Generating code screenshots, downloading PNG/SVG assets, copying to
  clipboard, and exporting URLs are 100% free.
- **Paid:** None. Ray.so is provided as a free utility by Raycast.
- **Sign-up required?** No. No account or login is required.
- **Licence for client work:** MIT License. Images generated via Ray.so may be
  freely used in client documentation, marketing assets, and commercial
  articles.

Verified on the official GitHub repository and website on 2026-10-07.

## How to use

1. Visit [ray.so](https://ray.so/) in your browser.
2. Paste or type your code into the interactive code window.
3. Select your programming language (e.g., TypeScript, Python, Rust, CSS) or let
   auto-detection handle it.
4. Choose an aesthetic gradient background theme and set padding (16px, 32px,
   64px, or 128px).
5. Toggle line numbers or window title if desired.
6. Click "Export" to copy the image directly to your clipboard or download as a
   high-DPI PNG or vector SVG.
7. Or share via URL with encoded parameters:

```text
https://ray.so/#code=ZXhwb3J0IGZ1bmN0aW9uIGhlbGxvKCkge30=&language=typescript&theme=raindrop
```

## Examples

- [Ray.so Web App](https://ray.so/) — Main code image generator with live theme
  previews and resolution export controls.
- [GitHub Repository](https://github.com/raycast/ray-so) — Full Next.js,
  Tailwind CSS, and Shiki syntax highlighter source code.
- [Raycast Platform](https://raycast.com/) — Official ecosystem home of the
  creators behind Ray.so.

## When to use it

- Use it when sharing code snippets on Twitter/X, LinkedIn, blog posts, or team
  Slack channels where visual readability is crucial.
- Use it to create polished illustration assets for developer documentation and
  README files.
- Skip it when you need interactive, selectable code blocks in a web app; use a
  syntax highlighter like Shiki or Prism directly in code instead.
- Skip it for full 3D software staging; use
  [ui.camera](../utilities/ui-camera.md) instead.

## Agent notes

- Official application: `https://ray.so/`.
- GitHub: `https://github.com/raycast/ray-so`.
- Code snippets can be pre-filled via base64 URL fragments:
  `https://ray.so/#code=<base64-encoded-string>&language=<lang>&theme=<theme>`.
- Built on top of Shiki for accurate TextMate-grammar syntax highlighting.

## Alternatives in this repo

- [ui.camera](../utilities/ui-camera.md) — 3D scene staging and product
  photography for full software interfaces.
- [OGFolio](../utilities/ogfolio.md) — Directory and inspector for social
  sharing Open Graph cards.
- [Transform](../utilities/transform.md) — Polyglot code conversion tool for
  types, schemas, and formats.

## Sources

- [Official site](https://ray.so/) — checked 2026-10-07
- [GitHub repository](https://github.com/raycast/ray-so) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/utilities)
