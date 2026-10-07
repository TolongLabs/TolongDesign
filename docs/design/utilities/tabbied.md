---
name: Tabbied
slug: tabbied
section: Utilities
section_slug: utilities
source_url: 'https://tabbied.com/'
designeer_url: 'https://designeer.xyz/utilities'
designeer_blurb: Generative geometric pattern creator for SVG.
paywall: free
pricing_summary:
  'Patterns and website templates are described as free, and no paid tier is
  published.'
open_source: true
license: MIT
category_tags: [patterns, svg, templates, mcp]
best_for:
  [generative backgrounds, geometric accents, agent-assisted pattern selection]
stack: [javascript, react, vue, svelte]
agent_friendly: true
last_verified: 2026-10-07
---

# Tabbied

> Generative geometric pattern creator for SVG. Its library and MCP server help
> a designer or agent find, preview, and embed a reproducible pattern.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [tabbied.com](https://tabbied.com/)                             |
| Paywall        | **Free** — patterns and website templates are described as free |
| Open source    | Yes — `tabbied` package and MCP server are MIT-licensed         |
| Type           | Pattern generator, template library, and developer package      |
| Works with     | React, Vue, Svelte, JavaScript, HTML, and MCP clients           |
| Best for       | Generative page backgrounds and repeatable SVG patterns         |
| Agent-friendly | Yes — hosted MCP, package docs, and machine-readable catalog    |

## What it is

Tabbied provides a browser editor and library of generative geometric patterns.
Its homepage lists 338 patterns, 277 website templates, and 437 color palettes.
Patterns can be adjusted in the browser and exported as PNG or SVG; the
developer package provides code integrations for common frontend stacks.

The official documentation includes React, Vue, Svelte, web component, plain
HTML, and JavaScript setups. Its hosted MCP server lets an assistant search the
pattern catalog, preview candidates, retrieve code, and inspect website
templates. A local MCP option can also render files when its documented Chromium
dependency is installed.

The npm package and MCP server are MIT-licensed. Website template content has
separate terms and is not covered by the package licence; check the terms for
each template before copying it into a client project.

## Paywall and pricing

- **Free:** The homepage describes the pattern library, PNG/SVG export, and
  website templates as free. The hosted MCP server requires no key or account.
- **Paid:** No paid tier or subscription price was published.
- **Sign-up required?** No for the hosted pattern MCP endpoint. Some template
  operations may be subject to account-specific template terms.
- **Licence for client work:** The `tabbied` code package and MCP server are
  MIT-licensed. Template content is separately licensed per account; do not
  assume the package licence grants template reuse.

Checked 2026-10-07 against the homepage and developer documentation.

## How to use

For a React project, install the package and render a named pattern:

```bash
bun add tabbied
```

```tsx
import { TabbiedPattern } from 'tabbied/react'
import { radius } from 'tabbied/patterns'

export function Banner() {
  return <TabbiedPattern pattern={radius} seed="k9Pz" height={320} />
}
```

For an agent, connect the hosted MCP endpoint:

```bash
codex mcp add tabbied --url https://tabbied.com/mcp
```

Use `search_designs`, inspect previews, then request the selected design's code.
Keep the chosen pattern, seed, palette, and options together so the result stays
reproducible in the project.

## Examples

- [React setup](https://tabbied.com/docs/react/) — render a named pattern in a
  React component.
- [JavaScript setup](https://tabbied.com/docs/javascript/) — mount a pattern
  without a framework component.
- [MCP server](https://tabbied.com/docs/mcp/) — search, preview, and retrieve
  pattern code with an assistant.
- [Concepts and sizing](https://tabbied.com/docs/concepts/) — compare grid,
  cover, and fixed-size rendering approaches.
- [Tidy Ledger template](https://tabbied.com/templates/tidy-ledger/) — inspect a
  published website template.
- [Werkraum template](https://tabbied.com/templates/werkraum/) — inspect a
  second template direction.

## When to use it

- Use it when a page needs a distinctive geometric surface or SVG accent that
  can be regenerated consistently from a seed and palette.
- Use MCP when an agent should compare visible pattern previews before selecting
  a pattern by name.
- Use a template only after confirming its specific reuse terms; the pattern
  package's MIT licence does not cover every template asset.
- Skip it when a simple CSS gradient or project-owned illustration is enough.

## Agent notes

- Hosted MCP endpoint: `https://tabbied.com/mcp`; Codex setup:
  `codex mcp add tabbied --url https://tabbied.com/mcp`.
- Local server command in the docs: `npx -y tabbied-mcp`; use
  `bunx -y tabbied-mcp` only if the Bun version supports that package
  invocation.
- Package: `tabbied`; React import: `tabbied/react`; pattern exports:
  `tabbied/patterns`.
- The local MCP renderer requires Playwright and Chromium; the hosted server
  does not provide local file rendering.
- Do not reuse website templates under the pattern package's MIT licence.

## Alternatives in this repo

- [fffuel](../utilities/fffuel.md) — browse standalone generators for SVG and
  CSS background assets.
- [Dither Kit](../component-libraries/dither-kit.md) — use for dither effects
  rendered as a code component.
- [Tooooools](../utilities/tooooools.md) — use for image effects and raster
  output rather than generated geometric patterns.

## Sources

- [Official Tabbied site](https://tabbied.com/) — checked 2026-10-07
- [Developer documentation](https://tabbied.com/docs/) — checked 2026-10-07
- [React documentation](https://tabbied.com/docs/react/) — checked 2026-10-07
- [JavaScript documentation](https://tabbied.com/docs/javascript/) — checked
  2026-10-07
- [MCP documentation](https://tabbied.com/docs/mcp/) — checked 2026-10-07
- [Concepts documentation](https://tabbied.com/docs/concepts/) — checked
  2026-10-07
- [Tidy Ledger template](https://tabbied.com/templates/tidy-ledger/) — checked
  2026-10-07
- [Werkraum template](https://tabbied.com/templates/werkraum/) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/utilities) — checked 2026-10-07
