---
name: Bearnie
slug: bearnie
section: Component Libraries
section_slug: component-libraries
source_url: https://bearnie.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: Astro and Tailwind component collection.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [astro, tailwind, components]
best_for: [content sites, marketing sites, astro projects]
stack: [astro, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Bearnie

> Astro and Tailwind component collection. TolongLabs developers reach for
> Bearnie to equip content-driven Astro websites with accessible, copy-paste
> components that adopt the shadcn/ui distribution model.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [bearnie.dev](https://bearnie.dev/)                                |
| Paywall        | **Free** — 100% free and open source                               |
| Open source    | Yes — MIT ([GitHub](https://github.com/michael-andreuzza/bearnie)) |
| Type           | Component library and CLI registry                                 |
| Works with     | Astro, Tailwind CSS (v4)                                           |
| Best for       | Content sites, marketing sites, Astro projects                     |
| Agent-friendly | Yes — CLI generator, MCP server package, source copy-paste         |

## What it is

Bearnie is an open-source component collection created by Michael Andreuzza,
specifically adapted for the Astro web framework and Tailwind CSS. It brings the
workflow popularized by shadcn/ui—where component code is copied directly into
the consumer application repository rather than installed as a black-box npm
module—into the Astro ecosystem.

The library offers over 50 accessible UI components and primitives, ranging from
foundational form controls (buttons, inputs, checkboxes) to complex interactive
widgets (accordions, alert dialogs, calendars, and sliders). It supports more
than 160 color palettes, allowing developers to immediately match an existing
brand palette without rewriting utility classes.

Unlike standard React-first shadcn distributions, Bearnie components are native
`.astro` files with minimal client-side JavaScript overhead. This ensures that
marketing sites and static content remain lightweight, taking full advantage of
Astro's zero-JS-by-default architecture while preserving rich interactivity
where required.

## Paywall and pricing

- **Free:** The full component catalog, CLI tooling, and documentation are
  completely free to use.
- **Paid:** None. There are no pro tiers, locked components, or paid
  subscriptions.
- **Sign-up required?** No. No registration or authentication is necessary.
- **Licence for client work:** Distributed under the MIT licence. Free for
  commercial and client projects without royalties or restrictive obligations.

Checked on the official website and repository on 2026-10-07.

## How to use

1. Initialize Bearnie in an existing Astro project:

```bash
bunx bearnie init
```

2. Add the desired component source to your repository:

```bash
bunx bearnie add button
```

3. Import and render the component within an Astro page or layout:

```astro
---
import Button from '@/components/ui/Button.astro';
---

<section class="p-8">
  <Button variant="default" size="md">
    Get Started
  </Button>
</section>
```

## Examples

- [Bearnie Component Catalog](https://bearnie.dev/docs/components) — Interactive
  index showing live previews and usage for all 50+ Astro components.
- [Bearnie Button Documentation](https://bearnie.dev/docs/components/button) —
  Demonstrates button variants, size tokens, and palette configurations.
- [Bearnie GitHub Repository](https://github.com/michael-andreuzza/bearnie) —
  Source repository detailing CLI package architecture and MCP server setup.

## When to use it

- Use it when building content sites, blogs, documentation hubs, or marketing
  pages using Astro and Tailwind CSS.
- Use it when you want full ownership of the component markup and styles without
  maintaining React island dependencies.
- Skip it when your project is built around Next.js, Remix, or React Single Page
  Applications; use [Nexvyn UI](../component-libraries/nexvyn-ui.md) or
  [startercn](../component-libraries/startercn.md) instead.

## Agent notes

- Official documentation URL: `https://bearnie.dev/docs`.
- CLI binary: `bearnie` (`bunx bearnie add <component>`).
- Built for Astro 7+ and Tailwind CSS v4.
- Includes a dedicated `@bearnie/mcp` package within the monorepo for direct
  agent tool invocation.

## Alternatives in this repo

- [Nexvyn UI](../component-libraries/nexvyn-ui.md) — React and Motion focused
  component kit using the shadcn registry model.
- [startercn](../component-libraries/startercn.md) — Base template for
  constructing and publishing custom shadcn-style component registries.

## Sources

- [Bearnie Official Site](https://bearnie.dev/) — checked 2026-10-07
- [Bearnie Documentation](https://bearnie.dev/docs) — checked 2026-10-07
- [Bearnie GitHub Repository](https://github.com/michael-andreuzza/bearnie) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
