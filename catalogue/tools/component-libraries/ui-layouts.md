---
name: 'UI Layouts'
slug: ui-layouts
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://ui-layouts.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Full-page layouts and heroes for Tailwind.'
paywall: freemium
pricing_summary:
  'The public library includes free blocks; Pro plans are $139 one-time for
  Creator, $198 for Builder, and $449 for Team Forge.'
open_source: false
license: 'unknown'
category_tags: [react, tailwind, shadcn, blocks]
best_for: [landing pages, marketing sites]
stack: ['react', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# UI Layouts

> Full-page layouts and heroes for Tailwind. Yes — copyable source and
> shadcn-compatible CLI commands.

## At a glance

| Field          | Value                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [ui-layouts.com](https://ui-layouts.com/)                                                                                                   |
| Paywall        | **Freemium** — The public library includes free blocks; Pro plans are $139 one-time for Creator, $198 for Builder, and $449 for Team Forge. |
| Open source    | No — unknown.                                                                                                                               |
| Type           | Copyable Tailwind and shadcn blocks                                                                                                         |
| Works with     | React, Tailwind CSS, and shadcn/ui                                                                                                          |
| Best for       | landing pages, marketing sites                                                                                                              |
| Agent-friendly | Yes — Yes — copyable source and shadcn-compatible CLI commands                                                                              |

## What it is

UI Layouts publishes ready-to-use landing-page sections, background effects, and
interactive components for React projects. The public site groups sections into
hero, features, about, team, pricing, FAQ, and footer categories.

The free collection is copyable and CLI-installable. A separate Pro site sells a
larger premium library, full templates, and a template builder. Snippets are
intended to be customized in application code rather than used as a hosted page
builder.

The reviewed pages did not publish an SPDX licence for copied source. Do not
assume that copyability means an open-source licence; check item terms before
redistributing a component.

## Paywall and pricing

- **Free:** Public blocks and component previews are available without payment.
- **Paid:** Pro Creator is $139 one-time, Forever Builder is $198 one-time, and
  Team Forge is $449 one-time.
- **Sign-up required?** Browse and copy public items without an account; Pro
  access is purchased separately.
- **Licence for client work:** A licence identifier was not found on the
  reviewed pages. Confirm terms for the exact tier before delivering copied
  code.

Pricing and access were checked on 2026-10-07.

## How to use

1. Open the Blocks index and scan by section type, then inspect the live preview
   and code before choosing a variant.

2. For a block, run the exact command shown on its page. The hero example below
   installs a specific hero item.

3. For interactive components, review required dependencies and props on that
   component page.

4. Replace demo copy, images, and links; then test the block at narrow widths
   and in the project's theme.

Official setup or install command:

```bash
npx shadcn add @ui-layouts/hero-ai-infrastructure
npx uilayouts@latest add shiki-code
```

Minimal documented usage example:

```tsx
import { ShikiCode } from '@/components/ui/shiki-code'

export default function MyComponent() {
  const code = "function hello() { console.log('Hello, World!'); }"
  return <ShikiCode code={code} lang="javascript" className="my-4" />
}
```

## Examples

- [Hero Section](https://www.ui-layouts.com/blocks/hero-section) — Seven hero
  variants, including AI infrastructure and digital success.
- [Feature Section](https://www.ui-layouts.com/blocks/feature-section) — Product
  proof and feature layouts.
- [About Section](https://www.ui-layouts.com/blocks/about-section) — Company and
  product story sections.
- [Background Blocks](https://www.ui-layouts.com/components/blocks) — An
  interactive background grid with CLI setup.

## When to use it

- Use it when a marketing page needs a concrete section layout that can be
  copied and adapted quickly.
- Skip it when you need a maintained package with a clearly published licence or
  accessibility guarantees; compare [Tailark](../component-libraries/tailark.md)
  or [shadcnblocks](../component-libraries/shadcnblocks.md).

## Agent notes

- Browse free and Pro material separately; the Pro catalogue has its own pricing
  and terms.
- The hero page shows a shadcn command for each named variant. Copy the exact
  command rather than altering item names.
- A copied component becomes application code; inspect dependencies,
  accessibility, and responsive behavior before shipping.
- The public pages reviewed did not state an SPDX licence for free source.

## Alternatives in this repo

- [Tailark](../component-libraries/tailark.md) — A registry with free kits and
  gated marketing pages.
- [shadcnblocks](../component-libraries/shadcnblocks.md) — A paid set of
  copyable shadcn sections and templates.
- [Aceternity UI](../component-libraries/aceternity-ui.md) — Animated React
  components and landing-page examples.

## Sources

- [UI Layouts home](https://ui-layouts.com/) — checked 2026-10-07
- [Blocks index](https://www.ui-layouts.com/blocks) — checked 2026-10-07
- [Hero Section](https://www.ui-layouts.com/blocks/hero-section) — checked
  2026-10-07
- [Background Blocks](https://www.ui-layouts.com/components/blocks) — checked
  2026-10-07
- [Code Block](https://www.ui-layouts.com/components/code-block) — checked
  2026-10-07
- [Pro pricing](https://pro.ui-layouts.com/pricing) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
