---
name: 'ogimagecn'
slug: ogimagecn
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://www.ogimagecn.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Open Graph image components using Satori.'
paywall: free
pricing_summary: 'Free and open source under MIT; no paid tier was published.'
open_source: true
license: 'MIT'
category_tags: [react, nextjs, satori, open-graph]
best_for: [social preview images, dynamic og routes]
stack: [react, nextjs, satori]
agent_friendly: true
last_verified: 2026-10-07
---

# ogimagecn

> Open Graph image components using Satori. Yes — shadcn registry and MCP guide.

## At a glance

| Field          | Value                                                                   |
| -------------- | ----------------------------------------------------------------------- |
| Source         | [www.ogimagecn.com](https://www.ogimagecn.com/)                         |
| Paywall        | **Free** — Free and open source under MIT; no paid tier was published.  |
| Open source    | Yes — MIT ([project source](https://github.com/shadcn-labs/ogimagecn)). |
| Type           | Copyable Open Graph image components                                    |
| Works with     | Next.js, React, next/og, and Satori                                     |
| Best for       | social preview images, dynamic og routes                                |
| Agent-friendly | Yes — Yes — shadcn registry and MCP guide                               |

## What it is

ogimagecn is a registry of React components for generating social preview images
with Next.js and Satori. Components are copied into a project and rendered
through Next.js ImageResponse rather than delivered as a hosted image service.

The collection includes product, content, and data-oriented layouts.
Installation docs show shadcn CLI commands, example route handlers, and an MCP
setup for agent-assisted discovery.

The public GitHub repository describes the tool as free and open source under
MIT. The implementation relies on next/og and Satori.

## Paywall and pricing

- **Free:** Public components and registry items are available at no cost.
- **Paid:** No paid plan or price was published.
- **Sign-up required?** No account is required for public registry items.
- **Licence for client work:** MIT, according to the GitHub repository.

Pricing and access were checked on 2026-10-07.

## How to use

1. Use a Next.js project with an App Router route that returns an ImageResponse.

2. Install the chosen item from the registry with the shadcn CLI. Add the shared
   component source to the project.

3. Import the component into an image route and provide dimensions and real
   product content.

4. Preview the generated image at social-card dimensions and verify fonts,
   images, and text fit within the canvas.

Official setup or install command:

```bash
pnpm dlx shadcn@latest add @ogimagecn/simple
```

Minimal documented usage or configuration example:

```tsx
import { ImageResponse } from 'next/og'
import { Simple } from '@/components/og/simple'

export function GET() {
  return new ImageResponse(
    <Simple
      label="Open Graph"
      title="Hello world"
      description="A shadcn registry of social card components."
      brand="ogimagecn"
    />,
    { width: 1200, height: 630 }
  )
}
```

## Examples

- [Simple product card](https://www.ogimagecn.com/docs/components/product/simple)
  — A basic product-oriented social card.
- [Photo content card](https://www.ogimagecn.com/docs/components/content/photo)
  — A content card built around a photo.
- [Quote card](https://www.ogimagecn.com/docs/components/content/quote) — A
  quotation-focused social preview.
- [Playground](https://www.ogimagecn.com/playground) — Live component
  configuration and preview.

## When to use it

- Use it when a Next.js project needs authored dynamic social images with
  reusable layouts.
- Skip it when you need a standalone hosted image service or use a non-Next
  framework; compare [shadcn/ui](../component-libraries/shadcn-ui.md) for
  ordinary interface components.

## Agent notes

- Docs: https://www.ogimagecn.com/docs. Installation uses next/og ImageResponse.
- Satori supports a subset of CSS and fonts; test output in the actual OG
  rendering pipeline.
- The project documents an MCP server for agent discovery.
- Use a route handler with explicit 1200 by 630 output when matching standard
  social previews.

## Alternatives in this repo

- [shadcn-cssinjs](../component-libraries/shadcn-cssinjs.md) — A shadcn-style
  component registry for application UI.
- [shadcn/ui](../component-libraries/shadcn-ui.md) — The underlying source-copy
  workflow for React components.
- [23rd](../component-libraries/23rd.md) — Another registry for expressive React
  visual components.

## Sources

- [ogimagecn home](https://www.ogimagecn.com/) — checked 2026-10-07
- [Documentation](https://www.ogimagecn.com/docs) — checked 2026-10-07
- [Installation](https://www.ogimagecn.com/docs/installation) — checked
  2026-10-07
- [MCP guide](https://www.ogimagecn.com/docs/mcp) — checked 2026-10-07
- [Simple product component](https://www.ogimagecn.com/docs/components/product/simple)
  — checked 2026-10-07
- [GitHub repository](https://github.com/shadcn-labs/ogimagecn) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
