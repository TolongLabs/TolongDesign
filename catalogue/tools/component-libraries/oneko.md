---
name: 'Oneko'
slug: oneko
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://oneko.dhrv.pw/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Pixel cat companion that chases cursor.'
paywall: free
pricing_summary:
  'The public registry component and playground are free; no paid tier was
  published.'
open_source: false
license: 'unknown'
category_tags: [react, pixel-art, decorative, shadcn]
best_for: [playful brand details, portfolio easter eggs]
stack: ['react', 'nextjs', 'shadcn']
execution_mode: registry
surface: ['web-asset']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Oneko

> Pixel cat companion that chases cursor. Yes — public docs, llms.txt, registry
> JSON, and agent prompt.

## At a glance

| Field          | Value                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------- |
| Source         | [oneko.dhrv.pw](https://oneko.dhrv.pw/)                                                       |
| Paywall        | **Free** — The public registry component and playground are free; no paid tier was published. |
| Open source    | No — unknown.                                                                                 |
| Type           | Pixel cat overlay component                                                                   |
| Works with     | React and Next.js with the shadcn CLI                                                         |
| Best for       | playful brand details, portfolio easter eggs                                                  |
| Agent-friendly | Yes — Yes — public docs, llms.txt, registry JSON, and agent prompt                            |

## What it is

Oneko is a React overlay that adds a pixel cat companion that chases the cursor,
rests, and displays small thoughts. It installs through a shadcn registry item
that copies the component, animation engine, and 24 bundled skins into the
project.

The component does not take up layout space; it attaches its sprite and bubble
to document.body. Docs cover positioning, persistence, custom skins, reduced
motion, and Next.js client-only integration.

No product price or licence identifier was published in the docs reviewed. The
source is copyable, but teams should confirm licence terms before treating it as
open source.

## Paywall and pricing

- **Free:** Public docs, studio, and registry item are available without
  payment.
- **Paid:** No paid tier or price was published.
- **Sign-up required?** No account is needed for the public registry install.
- **Licence for client work:** No SPDX licence was found in the public docs
  reviewed; verify before client use.

Pricing and access were checked on 2026-10-07.

## How to use

1. Start from a React app with shadcn configured and install the Oneko registry
   item.

2. Mount one cat near the application root. Use the documented no-SSR dynamic
   import wrapper for Next.js App Router.

3. Begin with meow={false}; optional sound files are not bundled and must be
   added separately if wanted.

4. Use built-in skins or the studio to customize position and appearance. Keep
   the cat away from important controls.

Official setup or install command:

```bash
npx shadcn@latest add https://oneko.dhrv.pw/r/oneko.json
```

Minimal documented usage or configuration example:

```tsx
import Oneko from '@/components/oneko'

export default function CatLayer() {
  return <Oneko meow={false} />
}
```

## Examples

- [Oneko studio](https://oneko.dhrv.pw/studio) — A live playground for skin,
  position, and motion settings.
- [Installation and API docs](https://oneko.dhrv.pw/docs) — Component setup,
  props, custom coats, and integration examples.
- [Registry JSON](https://oneko.dhrv.pw/r/oneko.json) — The exact item consumed
  by the shadcn CLI.
- [LLM discovery file](https://oneko.dhrv.pw/llms.txt) — Agent-readable pointers
  to the full docs.

## When to use it

- Use it when a portfolio or playful product can support a decorative companion
  without obscuring content.
- Skip it on high-focus interfaces, dense dashboards, or pages where cursor
  movement is central; use a static detail instead.

## Agent notes

- Docs: https://oneko.dhrv.pw/docs. The site also publishes /docs.md and
  /llms-full.txt for agents.
- Next.js needs the documented client-only dynamic import with ssr: false.
- The cat overlays document.body and does not reserve layout space; account for
  its very high default z-index.
- Sound files are optional and not included. Keep sound off unless the project
  deliberately adds them.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — A general source registry
  for interface components.
- [23rd](../component-libraries/23rd.md) — Another source for unusual page
  details and effects.
- [Magic UI](../component-libraries/magic-ui.md) — A broader collection of
  decorative React effects.

## Sources

- [Oneko home](https://oneko.dhrv.pw/) — checked 2026-10-07
- [Documentation](https://oneko.dhrv.pw/docs) — checked 2026-10-07
- [Studio](https://oneko.dhrv.pw/studio) — checked 2026-10-07
- [Registry item](https://oneko.dhrv.pw/r/oneko.json) — checked 2026-10-07
- [LLM discovery file](https://oneko.dhrv.pw/llms.txt) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
