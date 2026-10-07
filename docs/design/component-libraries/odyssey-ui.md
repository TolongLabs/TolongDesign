---
name: Odyssey UI
slug: odyssey-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://www.odysseyui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Animated React components built on shadcn.'
paywall: unknown
pricing_summary:
  'Public component pages and registry commands are visible, but no pricing or
  licence terms were published.'
open_source: false
license: unknown
category_tags: [react, shadcn, tailwind, motion]
best_for: [marketing pages, animated product interfaces]
stack: [react, nextjs, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Odyssey UI

> Animated React components built on shadcn. Use its source-first components
> when a product page needs a polished interaction you can still edit locally.

## At a glance

| Field          | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Source         | [odysseyui.com](https://www.odysseyui.com/)            |
| Paywall        | **Unknown** — no pricing terms were found              |
| Open source    | No open-source licence was confirmed; source is linked |
| Licence        | Not confirmed                                          |
| Type           | React component and template collection                |
| Works with     | React, TypeScript, Tailwind CSS v4, Motion             |
| Best for       | Marketing pages and motion-led product UI              |
| Agent-friendly | Yes — shadcn registry and copyable source              |

## What it is

Odyssey UI is a collection of React components and page templates built around
the shadcn copy-into-your-project workflow. The docs describe Tailwind CSS v4
and Motion, with components kept in the application repository after install.

The catalogue includes animated components, pricing sections, and complete
templates. Components are server components by default where possible, with
client code used for interactions. This makes the source easier to customize
than a closed component package.

The site links to source code, but the product does not publish a clear licence
statement or a pricing page in the pages checked. Some component pages also
identify examples that originate from Animate UI; confirm the upstream licence
and attribution before shipping those items.

## Paywall and pricing

- **Free:** public documentation and registry pages are viewable.
- **Paid:** no plan or price was published on the pages checked.
- **Sign-up required?** Not stated for public component access.
- **Licence for client work:** not published. Check the component source and
  upstream attribution before using it in client work.
- **Checked:** 2026-10-07.

## How to use

1. Open the component page and inspect its preview, dependencies, and source.
2. Run the exact CLI shown on the Code Tabs page:

```bash
bunx --bun shadcn@latest add @odysseyui/components-animate-code-tabs
```

3. Import the copied component from the path generated in your project:

```tsx
import { CodeTabs } from '@/components/ui/code-tabs'

export function Example() {
  return <CodeTabs codes={codes} />
}
```

4. Keep the page-specific dependencies and any client directive listed by the
   component docs. Review upstream attribution before release.

## Examples

- [Code Tabs](https://www.odysseyui.com/docs/components/animate/code-tabs) —
  animated display for snippets or implementation variants.
- [Pricing 6](https://www.odysseyui.com/docs/components/pricings/pricing-6) — a
  pricing section with an animated presentation.
- [Apollo template](https://www.odysseyui.com/docs/templates/apollo) — inspect a
  complete page composition rather than a single component.

## When to use it

- Use it when an existing shadcn-based React app needs a distinctive section or
  interaction that can be adapted from local source.
- Use it when motion can clarify a transition or add emphasis to a landing page.
- Skip it when the project needs documented commercial terms or a stable
  component package; compare [Skiper UI](../component-libraries/skiper-ui.md)
  and verify its per-component licence.

## Agent notes

The registry works with a coding agent because it can add source directly to the
project. Use the component page's exact command and review every imported
package. There is no verified licence or universal dependency list. Components
attributed to Animate UI need separate review.

## Alternatives in this repo

- [Skiper UI](../component-libraries/skiper-ui.md) — larger catalogue with
  published free and paid tiers.
- [Componentry](../component-libraries/componentry.md) — React effects with
  explicit docs and API notes.

## Sources

- [Official site](https://www.odysseyui.com/) — checked 2026-10-07
- [Documentation](https://www.odysseyui.com/docs) — checked 2026-10-07
- [Components index](https://www.odysseyui.com/docs/components) — checked
  2026-10-07
- [Code Tabs](https://www.odysseyui.com/docs/components/animate/code-tabs) —
  checked 2026-10-07
- [Pricing 6](https://www.odysseyui.com/docs/components/pricings/pricing-6) —
  checked 2026-10-07
- [Apollo template](https://www.odysseyui.com/docs/templates/apollo) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
