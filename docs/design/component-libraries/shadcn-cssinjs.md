---
name: 'shadcn-cssinjs'
slug: shadcn-cssinjs
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://www.shadcn-cssinjs.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'shadcn components adapted for CSS-in-JS.'
paywall: free
pricing_summary:
  'Free and open source under MIT; the official site says components will not be
  paywalled.'
open_source: true
license: 'MIT'
category_tags: [react, stylex, css-in-js, base-ui]
best_for: [stylex projects, shadcn-style systems]
stack: [react, stylex, base-ui]
agent_friendly: true
last_verified: 2026-10-07
---

# shadcn-cssinjs

> shadcn components adapted for CSS-in-JS. Yes — registry JSON and shadcn CLI
> installation.

## At a glance

| Field          | Value                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Source         | [www.shadcn-cssinjs.com](https://www.shadcn-cssinjs.com/)                                           |
| Paywall        | **Free** — Free and open source under MIT; the official site says components will not be paywalled. |
| Open source    | Yes — MIT ([project source](https://github.com/shadcn-labs/shadcn-cssinjs)).                        |
| Type           | StyleX port of shadcn-style components                                                              |
| Works with     | React, StyleX, Base UI, and shadcn CLI                                                              |
| Best for       | stylex projects, shadcn-style systems                                                               |
| Agent-friendly | Yes — Yes — registry JSON and shadcn CLI installation                                               |

## What it is

shadcn-cssinjs is an unofficial community-led port of the shadcn component
experience that uses StyleX instead of Tailwind and Base UI for headless
behavior.

The official registry provides copyable component source. The installation guide
requires a StyleX Babel and PostCSS pipeline, shared tokens, and the shadcn CLI;
components are then copied into the local project.

The GitHub repository and site identify the project as free, open source, and
MIT-licensed. The sponsors page says components will remain free.

## Paywall and pricing

- **Free:** All public components are free; no component paywall was stated.
- **Paid:** No paid plan was published. Sponsorship is optional.
- **Sign-up required?** No account is needed for the public registry.
- **Licence for client work:** MIT, according to the project README.

Pricing and access were checked on 2026-10-07.

## How to use

1. Set up StyleX and Base UI, then configure Babel and PostCSS using the
   official installation guide.

2. Add the @stylex directive to the global stylesheet and install the shared
   token file.

3. Install a component from the registry and import it from its generated
   directory.

4. The guide says to run Next.js without the Turbopack flag so the Babel StyleX
   transform runs.

Official setup or install command:

```bash
pnpm add @stylexjs/stylex @base-ui/react
pnpm add -D @stylexjs/babel-plugin @stylexjs/postcss-plugin @babel/preset-typescript
pnpm dlx shadcn@latest add https://shadcn-cssinjs.com/r/button.json
```

Minimal documented usage or configuration example:

```tsx
import { Button } from '@/components/ui/button/button'

export function Demo() {
  return <Button>Click me</Button>
}
```

## Examples

- [Button registry item](https://shadcn-cssinjs.com/r/button.json) — A
  StyleX-styled button available from the registry.
- [Accordion registry item](https://www.shadcn-cssinjs.com/r/accordion.json) —
  An accordion installed through the shadcn CLI.
- [Installation guide](https://www.shadcn-cssinjs.com/docs/installation) — The
  required StyleX pipeline and token setup.

## When to use it

- Use it when the project wants a shadcn-like source workflow but needs StyleX
  rather than Tailwind for component styles.
- Skip it when you cannot change the build pipeline or want a conventional
  Tailwind setup; compare [shadcn/ui](../component-libraries/shadcn-ui.md) or
  [Base UI](../component-libraries/base-ui.md).

## Agent notes

- Docs: https://www.shadcn-cssinjs.com/docs. Babel and PostCSS setup is required
  before component installation.
- The official guide says the StyleX PostCSS plugin must run before Tailwind's
  PostCSS plugin.
- Adding .babelrc to Next.js opts out of Turbopack/SWC per the installation
  guide.
- The project states it is unofficial and is not affiliated with shadcn.

## Alternatives in this repo

- [shadcn/ui](../component-libraries/shadcn-ui.md) — The original Tailwind-based
  component source workflow.
- [Base UI](../component-libraries/base-ui.md) — The headless primitive system
  used by this port.
- [Radix](../component-libraries/radix.md) — An alternative headless React
  primitive set.

## Sources

- [shadcn-cssinjs home](https://www.shadcn-cssinjs.com/) — checked 2026-10-07
- [Installation guide](https://www.shadcn-cssinjs.com/docs/installation) —
  checked 2026-10-07
- [Sponsors and free statement](https://www.shadcn-cssinjs.com/sponsors) —
  checked 2026-10-07
- [GitHub repository](https://github.com/shadcn-labs/shadcn-cssinjs) — checked
  2026-10-07
- [Button registry item](https://shadcn-cssinjs.com/r/button.json) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
