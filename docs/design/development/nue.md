---
name: Nue
slug: nue
section: Development
section_slug: development
source_url: 'https://nuejs.org/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Lightweight web framework alternative to React.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [framework, lightweight, static-sites, html-first, web-standards]
best_for: [content sites, lightweight web apps, minimal-dependency websites]
stack: ['html', 'css', 'javascript']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Nue

> Lightweight web framework alternative to React. TolongLabs developers use Nue
> to build ultra-fast, standards-first websites and documentation portals with a
> unified 1 MB toolchain that discards massive modern JavaScript dependencies.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [nuejs.org](https://nuejs.org/)                                |
| Paywall        | **Free** — 100% free and open source under MIT licence         |
| Open source    | Yes — MIT ([GitHub](https://github.com/nuejs/nue))             |
| Type           | HTML-first web development environment and static site builder |
| Works with     | HTML, CSS, JavaScript, Markdown, Cloudflare Workers            |
| Best for       | Content websites, documentation, fast minimal-dependency apps  |
| Agent-friendly | Yes — CLI tool (`nuekit`), minimal syntax, clean filesystem    |

## What it is

Nue (promoted as "The UNIX of the Web") is a lightweight web development
framework and toolchain created by Tero Piirainen. It challenges the bloat of
modern JavaScript ecosystems—where typical `node_modules` folders exceed 500
MB—by consolidating the entire build pipeline, dev server, template parser, CSS
engine, and syntax highlighter into a single, compact 1 MB distribution.

Nue is built around modular, standards-first principles: Nuekit (web framework
and static site generator), Nuedom (HTML-first reactive component model),
Nuestate (URL-first state management), Nuemark (rich content authoring extension
for Markdown), Nueserver (edge-first server development), and Nueglow (CSS-first
syntax highlighting).

Instead of client-side hydration mountains, Nue prioritizes server-rendered HTML
with selective "dynamic islands" for interactivity. It offers sub-10ms dev
server startup times, instant universal Hot Module Replacement, automatic CSS
inlining, native View Transitions, and out-of-the-box Cloudflare Workers
compatibility.

## Paywall and pricing

- **Free:** The complete Nue framework, Nuekit CLI, documentation, and core
  modules are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Permitted for commercial and client
  websites without fees or restrictions.

Verified on the official Nue website and GitHub repository on 2026-10-07.

## How to use

1. Install Nuekit globally or execute via Bun:

```bash
bun add -g nuekit
```

2. Create a new site skeleton:

```bash
bunx nue create my-website
cd my-website
```

3. Start the development server (starts in ~10ms):

```bash
bunx nue
```

4. Define an interactive reactive component in `components/counter.html`:

```html
<div @name="counter" class="counter">
  <button @click="count--">-</button>
  <span>{ count }</span>
  <button @click="count++">+</button>

  <script>
    count = 0
  </script>
</div>
```

5. Build for static production hosting:

```bash
bunx nue build --production
```

## Examples

- [Nue Official Documentation](https://nuejs.org/docs/) — Complete guide
  covering HTML components, Markdown authoring, and layout systems.
- [Nue Blog](https://nuejs.org/blog/) — Essays on web bloat, the UNIX philosophy
  applied to frontend engineering, and release roadmaps.
- [GitHub Repository](https://github.com/nuejs/nue) — Open-source monorepo
  containing Nuekit, Nuedom, and the core runtime.

## When to use it

- Use it when building documentation portals, marketing landing pages, blogs, or
  content-heavy client sites where top-tier Lighthouse scores and minimal client
  bundle sizes are paramount.
- Use it when you want to avoid complex React hydration pipelines and huge
  `node_modules` trees.
- Skip it when your project requires an established React/Tailwind ecosystem
  with hundreds of off-the-shelf components; use [Vite](../development/vite.md)
  or [Vinext](../development/vinext.md).

## Agent notes

- Official documentation: `https://nuejs.org/docs/`.
- Syntax uses clean standard HTML with `@click`, `@name`, and `{ variable }`
  interpolations rather than JSX.
- Organizes sites using a standardized directory layout (`@shared`, `ui/`,
  `app/`, `data/`, `design/`), making it very straightforward for AI coding
  agents to navigate and generate files.
- Static output requires zero server-side runtime, deploying easily to GitHub
  Pages, Cloudflare Pages, or static S3 buckets.

## Alternatives in this repo

- [Vite](../development/vite.md) — Standard modern frontend bundler and dev
  server for React, Vue, and TypeScript applications.
- [Vinext](../development/vinext.md) — Vite plugin executing Next.js
  applications directly on Cloudflare edge runtimes.

## Sources

- [Official site](https://nuejs.org/) — checked 2026-10-07
- [Documentation](https://nuejs.org/docs/) — checked 2026-10-07
- [GitHub repository](https://github.com/nuejs/nue) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
