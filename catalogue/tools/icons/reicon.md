---
name: 'Reicon'
slug: 'reicon'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://reicon.dev/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Tree-shakeable React icon library with dual weights.'
paywall: free
pricing_summary:
  'The icon library and React package are free under MIT; no paid tier is
  published.'
open_source: true
license: 'MIT'
category_tags: ['icon-library', 'react', 'svg', 'tree-shaking', 'mcp']
best_for:
  ['react applications', 'outline and filled pairs', 'agent icon lookup']
stack: ['react']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Reicon

> Tree-shakeable React icon library with dual weights. At TolongLabs, use it as
> a reference for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [Official site](https://reicon.dev/)                            |
| Paywall        | **Free — no paid tier published**                               |
| Open source    | Yes — MIT ([repository](https://github.com/dqev/reicon))        |
| Type           | Tree-shakeable React icon library                               |
| Works with     | React, Vue, Angular, Svelte, Flutter, MCP                       |
| Best for       | react applications, outline and filled pairs, agent icon lookup |
| Agent-friendly | Yes                                                             |

## What it is

Reicon is an open-source SVG icon library with more than 2,700 handcrafted
symbols and outline and filled weights. Its official site shows a browser
playground for changing size, color, and weight.

The React package exports tree-shakeable components and includes TypeScript
definitions. The project also lists integrations for other frameworks and an MCP
server for agent workflows.

## Paywall and pricing

- Free: the library, React package, and browser playground are available under
  MIT.
- Paid: no paid tier or price is published.
- Sign-up required? No for the public site or package.
- Client work: the official package and site state that MIT permits commercial
  use.

Pricing and licence information checked 2026-10-07.

## How to use

1. Search the playground for a symbol and compare outline and filled weights.
2. Install reicon-react and import the specific named component from the
   package.
3. Set size, color, and weight with the component props or project CSS classes.
4. Use the official MCP integration when an agent needs to find and insert a
   Reicon component.

Install with Bun:

```bash
bun add reicon-react
```

Minimal usage from the official documentation:

```tsx
import { Home, Search3, HandHeart } from 'reicon-react'

export function Example() {
  return <Home size={24} weight="Outline" />
}
```

## Examples

- [React package quick start](https://www.npmjs.com/package/reicon-react?activeTab=versions)
  — Shows Home, Search3, and HandHeart component imports.
- [Icon playground](https://reicon.dev/) — Compare the StickerSmile preview
  across size, color, and weights.
- [Project repository](https://github.com/dqev/reicon) — Review source packages
  and framework integrations.

## When to use it

- Use it when a React project needs tree-shakeable components with outline and
  filled variants.
- Skip it when a project needs a visual family with a long public history or
  built-in accessibility wrappers.

## Agent notes

- React package: reicon-react; the official npm page lists MIT and TypeScript
  declarations.
- Component props include size, weight, color, and className. The default weight
  is Outline.
- The project advertises MCP and multiple framework packages; use the React
  package when the host app is React.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A mature outline-first React family.
- [Heroicons](../icons/heroicons.md) — A small, curated React and Vue set.
- [Iconoir](../icons/iconoir.md) — A broad SVG set with React components.

## Sources

- [Official site](https://reicon.dev/) — checked 2026-10-07
- [React package](https://www.npmjs.com/package/reicon-react?activeTab=versions)
  — checked 2026-10-07
- [GitHub repository](https://github.com/dqev/reicon) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
