---
name: Odyssey UI
slug: odyssey-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://www.odysseyui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: 'Animated React components built on shadcn.'
paywall: free
pricing_summary:
  'Public docs, component pages, and registry commands are available without an
  account or payment; no price or paid tier is published.'
open_source: false
license: unknown
category_tags: [react, shadcn, tailwind, motion]
best_for: [marketing pages, animated product interfaces]
stack: ['react', 'nextjs', 'tailwind', 'shadcn']
execution_mode: registry
surface: ['web-ui']
status: degraded
agent_friendly: true
last_verified: 2026-10-07
---

# Odyssey UI

> Animated React components built on shadcn. Use its source-first components
> when a product page needs a polished interaction you can still edit locally.

## At a glance

| Field          | Value                                                                        |
| -------------- | ---------------------------------------------------------------------------- |
| Source         | [odysseyui.com](https://www.odysseyui.com/)                                  |
| Paywall        | **Free** — public docs and component registry are accessible without payment |
| Open source    | No — the linked repository has no published license                          |
| Licence        | Not published                                                                |
| Type           | React component and template collection                                      |
| Works with     | React, TypeScript, Tailwind CSS v4, Motion                                   |
| Best for       | Marketing pages and motion-led product UI                                    |
| Agent-friendly | Yes — shadcn registry and copyable source                                    |

## What it is

Odyssey UI is a public collection of animated React components and page
templates built around the shadcn copy-into-your-project workflow. On
2026-10-07, the homepage linked to public Components and Templates docs and to
the `Shr3kx/OdysseyUI` GitHub repository. The docs identify Tailwind CSS v4 and
Motion and provide registry commands that copy component source into a project.

The public component pages and registry are accessible without a sign-in or
payment prompt. The `/pricing` path returned HTTP 404. The GitHub repository is
public, but GitHub reports no license and its file tree contains no license
file, so the source is not confirmed as open source and client-work reuse terms
remain unpublished. Some component pages attribute examples to Animate UI;
review upstream source and terms before shipping those items.

## Paywall and pricing

- **Free:** public documentation, component pages, and registry commands opened
  without a payment gate.
- **Paid:** no plan or price was published; `/pricing` returned HTTP 404.
- **Sign-up required?** No sign-in prompt appeared on the public docs or
  component pages checked.
- **Licence for client work:** not published in the linked repository. Review
  component source and upstream attribution before reuse.
- **Checked:** 2026-10-07.

## How to use

1. Open the component page and inspect its preview, dependencies, and source.
2. Confirm the license with the publisher before copying source into a client
   project. The linked repository has no published license; treat the command
   below as an evaluation step until reuse rights are confirmed.
3. Run the exact CLI shown on the Code Tabs page:

```bash
bunx --bun shadcn@latest add @odysseyui/components-animate-code-tabs
```

4. Import the copied component from the path generated in your project:

```tsx
import { CodeTabs } from '@/components/ui/code-tabs'

export function Example() {
  return <CodeTabs codes={codes} />
}
```

5. Keep the page-specific dependencies and any client directive listed by the
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
- [Pricing route](https://www.odysseyui.com/pricing) — checked 2026-10-07; HTTP
  404
- [Code Tabs](https://www.odysseyui.com/docs/components/animate/code-tabs) —
  checked 2026-10-07
- [Pricing 6](https://www.odysseyui.com/docs/components/pricings/pricing-6) —
  checked 2026-10-07
- [Apollo template](https://www.odysseyui.com/docs/templates/apollo) — checked
  2026-10-07
- [GitHub repository](https://github.com/Shr3kx/OdysseyUI) — checked 2026-10-07;
  no license metadata or license file found
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
