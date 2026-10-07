---
name: 'theSVG'
slug: 'thesvg'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://thesvg.org/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Curated collection of clean brand SVGs.'
paywall: free
pricing_summary:
  'The searchable catalog, CDN, and packages are free; optional sponsorship is
  not required for use.'
open_source: true
license: 'MIT'
category_tags: ['brand-icons', 'svg', 'react', 'cli', 'mcp']
best_for:
  [
    'brand and service marks',
    'cloud architecture diagrams',
    'agent-assisted logo lookup'
  ]
stack: ['react', 'vue', 'svelte', 'javascript']
agent_friendly: true
last_verified: 2026-10-07
---

# theSVG

> Curated collection of clean brand SVGs. At TolongLabs, use it as a reference
> for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                                            |
| -------------- | -------------------------------------------------------------------------------- |
| Source         | [Official site](https://thesvg.org/)                                             |
| Paywall        | **Free — no paid tier published**                                                |
| Open source    | Yes — MIT ([repository](https://github.com/GLINCKER/thesvg/blob/main/README.md)) |
| Type           | Brand and cloud SVG catalog                                                      |
| Works with     | React, Vue, Svelte, CDN, CLI, MCP                                                |
| Best for       | brand and service marks, cloud architecture diagrams, agent-assisted logo lookup |
| Agent-friendly | Yes                                                                              |

## What it is

theSVG is a searchable collection of brand logos and cloud architecture symbols.
The project README reports more than 7,400 icons across brand, AWS, Azure,
Google Cloud, and community collections, with variants such as default, mono,
light, dark, and wordmark.

Developers can copy SVGs from the browser, install framework packages, use a
CLI, or fetch static files from the CDN. The codebase is MIT-licensed, while the
manifest records per-icon licence information and brand marks remain subject to
trademark rules.

## Paywall and pricing

- Free: browse, copy, use the static CDN and install the public packages.
- Paid: no usage fee or paid tier is published; sponsorship is optional.
- Sign-up required? No for catalog, package, CLI, or CDN access.
- Client work: check the per-icon licence in the registry and follow the
  represented brand's rules.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the registry by brand or service name and choose the required variant.
2. Install the React package for component imports, or use the CDN for a direct
   SVG reference.
3. Use a mono, light, or dark variant only when its colors fit the target
   background.
4. Check the registry licence field and brand rules before shipping the logo in
   client work.

Install with Bun:

```bash
bun add @thesvg/react
```

Minimal usage from the official documentation:

```tsx
import { Github } from '@thesvg/react'

export function GithubMark() {
  return <Github width={24} height={24} aria-hidden="true" />
}
```

## Examples

- [GitHub default SVG](https://thesvg.org/icons/github/default.svg) —
  Brand-color GitHub mark from the documented CDN pattern.
- [OpenAI default SVG](https://thesvg.org/icons/openai/default.svg) — A second
  brand example using the default variant.
- [GitHub mono SVG](https://thesvg.org/icons/github/mono.svg) — Monochrome
  variant suited to text-color inheritance.

## When to use it

- Use it when the interface needs named brand or cloud service symbols,
  including multiple logo variants.
- Skip it for general-purpose UI icons; use Lucide, Heroicons, or Tabler
  instead.

## Agent notes

- React package: @thesvg/react. The repository also lists Vue, Svelte, CLI, and
  MCP packages.
- The catalog uses stable slug and variant paths; do not guess a slug when the
  registry can be searched.
- MIT covers the codebase. Individual brand assets may use another licence or
  trademark terms.

## Alternatives in this repo

- [Simple Icons](../icons/simple-icons.md) — A focused catalog of software and
  technology brands.
- [Devicon](../icons/devicon.md) — Developer tool and programming-language
  marks.
- [Iconify](../icons/iconify.md) — General UI sets plus brand icon collections.

## Sources

- [Official site](https://thesvg.org/) — checked 2026-10-07
- [GitHub README](https://github.com/GLINCKER/thesvg/blob/main/README.md) —
  checked 2026-10-07
- [Legal notes](https://github.com/glincker/thesvg/blob/main/LEGAL.md) — checked
  2026-10-07
- [GitHub default SVG](https://thesvg.org/icons/github/default.svg) — checked
  2026-10-07
- [OpenAI default SVG](https://thesvg.org/icons/openai/default.svg) — checked
  2026-10-07
- [GitHub mono SVG](https://thesvg.org/icons/github/mono.svg) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
