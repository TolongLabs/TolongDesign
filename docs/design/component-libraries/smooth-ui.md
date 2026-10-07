---
name: 'Smooth UI'
slug: smooth-ui
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://smoothui.dev/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'Motion-heavy React components ready to copy.'
paywall: freemium
pricing_summary:
  'The core animated components are free and MIT-licensed; premium blocks and
  templates are offered, but their prices are not published.'
open_source: true
license: 'MIT'
category_tags: [react, motion, components]
best_for: [animated interfaces, landing pages]
stack: [react, tailwind, motion]
agent_friendly: true
last_verified: 2026-10-07
---

# Smooth UI

> Motion-heavy React components ready to copy. Yes — shadcn CLI, component
> source, and public component catalog.

## At a glance

| Field          | Value                                                                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [smoothui.dev](https://smoothui.dev/)                                                                                                                |
| Paywall        | **Freemium** — The core animated components are free and MIT-licensed; premium blocks and templates are offered, but their prices are not published. |
| Open source    | Yes — MIT ([project source](https://github.com/educlopez/smoothui)).                                                                                 |
| Type           | Copyable animated component library                                                                                                                  |
| Works with     | React 19, Tailwind CSS v4, Motion, and GSAP                                                                                                          |
| Best for       | animated interfaces, landing pages                                                                                                                   |
| Agent-friendly | Yes — Yes — shadcn CLI, component source, and public component catalog                                                                               |

## What it is

SmoothUI is a registry of animated React components and page blocks. Its docs
describe 198 components, React 19, Tailwind CSS v4, and source files that are
copied into the application rather than imported as a runtime library.

The catalog includes dynamic islands, prompt inputs, orbs, sliders, and page
blocks. Components use Motion or GSAP where needed and document reduced-motion
behavior. The project also provides an API and shadcn MCP integration for coding
agents.

The public repository is MIT-licensed. Core components are free; premium blocks
and templates are offered separately, but their prices are not published.

## Paywall and pricing

- **Free:** Core component registry items are available without a paid plan.
- **Paid:** Premium blocks and templates are offered; current prices are not
  published.
- **Sign-up required?** No account is required for the public component
  registry.
- **Licence for client work:** MIT applies to the open-source library; check the
  terms for any separately sold asset.

Pricing and access were checked on 2026-10-07.

## How to use

1. Start with React 19 and Tailwind CSS v4. Initialize shadcn if the project
   does not already have its component configuration.

2. Browse the component docs, inspect the live preview, and choose the
   interaction that fits the page.

3. Add a component with the SmoothUI CLI. The command copies source into the
   project and resolves declared dependencies.

4. Import the generated component from the path shown on its page, then tune
   variants and classes to the product.

Official setup or install command:

```bash
pnpm dlx smoothui-cli@latest add smooth-button
```

Minimal documented usage or configuration example:

```tsx
import SmoothButton from '@/components/smooth-button'

export default function Example() {
  return <SmoothButton variant="candy">Get Started</SmoothButton>
}
```

## Examples

- [Dynamic Island](https://smoothui.dev/docs/components/dynamic-island) — A
  compact, stateful island interaction.
- [AI Prompt Input](https://smoothui.dev/docs/components/ai-prompt-input) — A
  prompt composer with animated input states.
- [Siri Orb](https://smoothui.dev/docs/components/siri-orb) — An animated
  voice-assistant orb.
- [Infinite Slider](https://smoothui.dev/docs/components/infinite-slider) — A
  continuously moving content strip.

## When to use it

- Use it when a React page needs a distinctive animated interaction and you want
  editable source files.
- Skip it when the project is not on React 19 or Tailwind v4, or a static
  primitive is enough; use [shadcn/ui](../component-libraries/shadcn-ui.md) for
  a broader base.

## Agent notes

- Docs: https://smoothui.dev/docs. The getting-started guide lists React 19 and
  Tailwind v4 as prerequisites.
- Use the per-component install command shown in the docs; optional dependencies
  vary by component.
- The shadcn MCP integration can help an agent locate and install registry
  items.
- Keep reduced-motion behavior and keyboard/focus states when adapting copied
  source.

## Alternatives in this repo

- [Motion Primitives](../component-libraries/motion-primitives.md) — A smaller
  motion-focused set of copyable React primitives.
- [React Bits](../component-libraries/react-bits.md) — A broad collection of
  visual React effects.
- [Aceternity UI](../component-libraries/aceternity-ui.md) — Animated
  landing-page components and sections.

## Sources

- [SmoothUI home](https://smoothui.dev/) — checked 2026-10-07
- [Getting started](https://smoothui.dev/docs/guides/getting-started) — checked
  2026-10-07
- [Installation](https://smoothui.dev/docs/guides/installation) — checked
  2026-10-07
- [Smooth Button](https://smoothui.dev/docs/components/smooth-button) — checked
  2026-10-07
- [GitHub repository](https://github.com/educlopez/smoothui) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
