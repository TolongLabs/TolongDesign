---
name: Float UI
slug: float-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://floatui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Tailwind components crafted for marketing websites.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [tailwind, marketing, templates, components, react, vue, svelte]
best_for: [marketing websites, landing pages, responsive ui]
stack: ['tailwind', 'react', 'vue', 'svelte', 'html']
execution_mode: snippet
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Float UI

> Tailwind components crafted for marketing websites. TolongLabs developers
> reach for Float UI to quickly assemble elegant marketing landing pages and web
> layouts with copy-paste components available in React, Vue, Svelte, and plain
> HTML.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [floatui.com](https://floatui.com/)                        |
| Paywall        | **Free** — 100% free and open source                       |
| Open source    | Yes — MIT ([GitHub](https://github.com/MarsX-dev/floatui)) |
| Type           | Copy-paste component and template collection               |
| Works with     | Tailwind CSS, React, Vue, Svelte, HTML                     |
| Best for       | Marketing websites, landing pages, responsive UI           |
| Agent-friendly | Yes — direct copy-paste multi-framework code snippets      |

## What it is

Float UI is an open-source library of modern UI components and complete website
templates built exclusively with Tailwind CSS. Maintained under the MarsX
developer ecosystem, it focuses on high-conversion marketing elements, such as
clean hero headers, feature highlights, pricing cards, testimonial carousels,
and responsive navigation bars.

What makes Float UI stand out is its multi-framework support without runtime
overhead. Every component in the catalog can be viewed and copied as React JSX,
Vue 3 template, Svelte markup, or raw HTML. This allows teams to move between
frameworks or build across disparate stacks while maintaining identical visual
consistency and Tailwind styling.

In addition to individual section components, Float UI includes several complete
website templates for modern technology startups, creative agencies, and SaaS
products. Because all components use standard Tailwind utility classes,
customization requires no proprietary configuration or build steps.

## Paywall and pricing

- **Free:** The complete component catalog and starter templates are 100% free
  and open source under the MIT licence.
- **Paid:** None. Float UI does not maintain a paid subscription or gated pro
  tier.
- **Sign-up required?** No account is required to browse, preview, or copy any
  code snippets.
- **Licence for client work:** Released under the MIT licence. Permitted for use
  in unlimited commercial, client, and proprietary websites without royalties.

Verified on the official Float UI website and GitHub repository on 2026-10-07.

## How to use

1. Ensure your project has Tailwind CSS installed and active.

2. Browse the Float UI catalog, choose a component, and select your preferred
   framework tab (React, Vue, Svelte, or HTML).

3. Paste the code into your application file:

```tsx
import { useState } from 'react'

export function SimpleHero() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-28 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
          Build software faster with modern tools
        </h1>
        <p className="max-w-2xl mx-auto">
          Equip your development workflow with pre-tested components designed
          for speed, responsiveness, and clean code.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="justify-center items-center gap-x-3 sm:flex"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2.5 border rounded-md outline-none focus:border-indigo-600 sm:max-w-xs"
          />
          <button className="p-2.5 w-full sm:w-auto text-white bg-indigo-600 hover:bg-indigo-500 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
```

## Examples

- [Float UI Components Catalog](https://floatui.com/components) — Grid of
  available marketing and application UI categories.
- [Hero Sections](https://floatui.com/components/heroes) — Hero header layouts
  with newsletter inputs, product mockups, and trust logos.
- [Website Templates](https://floatui.com/templates) — Full landing page
  templates for SaaS startups and agency portfolios.

## When to use it

- Use it when you need clean, unbloated marketing components that work across
  React, Vue, Svelte, or vanilla HTML without extra dependencies.
- Use it for client landing pages where clean Tailwind CSS markup and fast
  loading performance are prioritized over complex runtime animations.
- Skip it when you need complex data dashboards and analytics charts; use
  [Tremor](../component-libraries/tremor.md) instead.
- Skip it when your project requires strict Radix UI accessibility primitives
  and shadcn CLI integration; use [Magic UI](../component-libraries/magic-ui.md)
  or [Animate UI](../component-libraries/animate-ui.md) instead.

## Agent notes

- Official documentation URL: `https://floatui.com/components`.
- Source repository: `https://github.com/MarsX-dev/floatui`.
- All components use standard Tailwind CSS classes. No extra plugins are
  mandatory, though some components benefit from `@tailwindcss/forms`.
- The multi-framework selector makes this resource especially friendly for AI
  agents translating frontend templates across different frameworks.

## Alternatives in this repo

- [HyperUI](../component-libraries/hyperui.md) — Sibling free open-source
  Tailwind library with dedicated eCommerce cards and Alpine.js snippets.
- [Meraki UI](../component-libraries/meraki-ui.md) — Free Tailwind component kit
  featuring comprehensive Right-to-Left (RTL) language layouts.

## Sources

- [Float UI Official Site](https://floatui.com/) — checked 2026-10-07
- [Float UI GitHub Repository](https://github.com/MarsX-dev/floatui) — checked
  2026-10-07
- [Float UI Components](https://floatui.com/components) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
