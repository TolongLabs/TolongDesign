---
name: Reverse UI
slug: reverse-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://reverseui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Tailwind and React component library.
paywall: freemium
pricing_summary:
  'Free tier with 19 components; Essential plan is $39 and Team plan is $175
  one-time lifetime.'
open_source: false
license: proprietary
category_tags: [react, tailwind, framer-motion, components, animations, premium]
best_for: [landing pages, marketing sites, interactive web applications]
stack: [react, tailwind, framer-motion]
agent_friendly: true
last_verified: 2026-10-07
---

# Reverse UI

> Tailwind and React component library. TolongLabs developers reach for Reverse
> UI to access curated, premium animated React and Tailwind components featuring
> smooth physics and clean visual styling.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [reverseui.com](https://reverseui.com/)                      |
| Paywall        | **Freemium** — 19 free components; Essential $39, Team $175  |
| Open source    | No — proprietary commercial licence                          |
| Type           | Premium component library and animation kit                  |
| Works with     | React, Next.js, Tailwind CSS, Framer Motion                  |
| Best for       | Landing pages, marketing sites, interactive web applications |
| Agent-friendly | Yes — copy-paste component code, private GitHub access       |

## What it is

Reverse UI is a curated library of animated React components built with Tailwind
CSS and Framer Motion. Created to give marketing sites and SaaS web applications
a polished, tactile feel, it focuses on high-conversion UI patterns with smooth
spring-physics interactions and refined typography.

Unlike broad component libraries that attempt to provide hundreds of generic
form inputs, Reverse UI concentrates on distinct interaction moments: magnetic
buttons, fluid tabs, spotlight cards, animated navigation docks, and interactive
feature showcases. Each component is self-contained and designed to be
integrated directly into a React codebase.

The library uses a commercial copy-paste distribution model. Developers can
explore a free tier of components directly on the site, while paid plans grant
access to the complete catalog of 68+ premium components and access to a private
GitHub repository with continuous lifetime updates.

## Paywall and pricing

- **Free:** A free plan ($0) provides immediate access to 19 curated components
  with full source code.
- **Paid:** Paid tiers operate on a one-time lifetime payment model:
  - **Essential Plan ($39):** Single-developer license with access to 68+
    components, private GitHub repository access, and lifetime updates.
  - **Team Plan ($175):** Covers up to 20 developers with private GitHub
    repository access and lifetime updates.
- **Sign-up required?** Free components can be browsed and copied directly. An
  account and checkout flow are required for the Essential and Team plans.
- **Licence for client work:** Paid plans include full commercial use rights for
  unlimited client projects, internal business applications, and public SaaS
  products. Redistribution of raw source files is prohibited.

Verified on the official Reverse UI website and pricing documentation on
2026-10-07.

## How to use

1. Ensure your React or Next.js application has Tailwind CSS installed.

2. Install Framer Motion and standard class merge utilities:

```bash
bun add framer-motion clsx tailwind-merge
```

3. Copy a component snippet from Reverse UI into your local components
   directory:

```tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function InteractivePillTab({ tabs }: { tabs: string[] }) {
  const [selected, setSelected] = useState(tabs[0])

  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-full dark:bg-neutral-800">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className="relative px-4 py-1.5 text-sm font-medium rounded-full text-gray-700 dark:text-neutral-300"
        >
          {selected === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white rounded-full shadow-sm dark:bg-neutral-900"
              transition={{ type: 'spring', duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  )
}
```

4. Render the component in your layout:

```tsx
export function NavigationDemo() {
  return (
    <div className="p-8 flex justify-center">
      <InteractivePillTab tabs={['Overview', 'Features', 'Pricing']} />
    </div>
  )
}
```

## Examples

- [Reverse UI Components Directory](https://reverseui.com/components) — Grid of
  available components including tabs, modals, and spotlight cards.
- [Reverse UI Pricing Page](https://reverseui.com/pricing) — Detailed plan
  breakdown for Essential and Team lifetime licenses.
- [Reverse UI Dock Component](https://reverseui.com/components/dock) —
  macOS-style dock where icons magnify based on cursor proximity.

## When to use it

- Use it when you want premium, handcrafted animated components with spring
  physics for client marketing websites or SaaS products.
- Use it when an affordable one-time commercial license ($39) fits the project
  budget and provides lifetime component updates.
- Skip it when your project requires strict 100% open-source MIT code with zero
  proprietary licensing; use [Magic UI](../component-libraries/magic-ui.md) or
  [HyperUI](../component-libraries/hyperui.md) instead.
- Skip it when you are building enterprise dashboards requiring dense data
  tables and charts; use [Tremor](../component-libraries/tremor.md) instead.

## Agent notes

- Official documentation URL: `https://reverseui.com/components`.
- Note on licensing: Pro components are distributed under a proprietary
  commercial license. Do not commit proprietary source files to public
  repositories.
- Components rely heavily on Framer Motion (`framer-motion`), requiring the
  `'use client'` directive in Next.js App Router.

## Alternatives in this repo

- [Magic UI](../component-libraries/magic-ui.md) — Open-source animated
  components for landing pages with shadcn registry CLI integration.
- [Aceternity UI](../component-libraries/aceternity-ui.md) — Visual animated
  components featuring 3D effects and dramatic hero sections.

## Sources

- [Reverse UI Official Site](https://reverseui.com/) — checked 2026-10-07
- [Reverse UI Pricing](https://reverseui.com/pricing) — checked 2026-10-07
- [Reverse UI Components](https://reverseui.com/components) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
