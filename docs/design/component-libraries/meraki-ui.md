---
name: Meraki UI
slug: meraki-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://merakiui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Tailwind components with right-to-left language support.
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [tailwind, rtl, components, internationalization, responsive]
best_for: [multilingual websites, rtl interfaces, marketing sites]
stack: ['tailwind', 'html', 'react', 'vue']
execution_mode: snippet
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Meraki UI

> Tailwind components with right-to-left language support. TolongLabs developers
> reach for Meraki UI when building multilingual applications and websites that
> require first-class Right-to-Left (RTL) layout support in Tailwind CSS.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [merakiui.com](https://merakiui.com/)                      |
| Paywall        | **Free** — 100% free and open source                       |
| Open source    | Yes — MIT ([GitHub](https://github.com/merakiui/merakiui)) |
| Type           | Copy-paste component collection with RTL support           |
| Works with     | Tailwind CSS, HTML, React, Vue                             |
| Best for       | Multilingual websites, RTL interfaces, marketing sites     |
| Agent-friendly | Yes — copy-paste code snippets, clean semantic markup      |

## What it is

Meraki UI is an open-source library of modern, responsive Tailwind CSS
components distinguished by built-in support for Right-to-Left (RTL) languages
such as Arabic, Hebrew, and Persian. Maintained by Khatab Wedaa and community
contributors, it covers essential marketing, application, and eCommerce UI
elements.

Most standard Tailwind component libraries are designed solely for Left-to-Right
(LTR) reading flow, requiring developers to manually rewrite directional
margins, padding, text alignments, and icon placements when localizing for RTL
markets. Meraki UI solves this by architecting components with bidirectional
adaptability from the ground up, allowing developers to toggle between LTR and
RTL modes seamlessly.

Components are distributed via copy-paste snippets in HTML, React, and Vue
formats. The library includes responsive navigation bars, hero headers, feature
sections, pricing tables, testimonials, authentication forms, and footers, all
styled with clean Tailwind utility classes and responsive breakpoints.

## Paywall and pricing

- **Free:** The complete component collection is 100% free and open source under
  the MIT licence.
- **Paid:** None. Meraki UI does not feature paid tiers or premium paywalled
  components.
- **Sign-up required?** No account is required to browse components or copy the
  source code.
- **Licence for client work:** Released under the MIT licence. May be freely
  integrated into commercial client websites, proprietary SaaS applications, and
  enterprise products without royalty fees.

Verified on the official Meraki UI site and GitHub repository on 2026-10-07.

## How to use

1. Ensure Tailwind CSS is configured in your project.

2. To support RTL languages, ensure your HTML root has the `dir` attribute set
   appropriately (`dir="rtl"` or `dir="ltr"`).

3. Browse Meraki UI, toggle between LTR and RTL preview modes, and copy the
   desired component code.

4. Paste the component into your project file:

```tsx
export function NewsletterBanner() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Stay updated with our latest releases
          </h2>
          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Join thousands of developers using our open-source tools.
          </p>
          <div className="flex flex-col mt-6 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 sm:mx-2"
            />
            <button className="px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## Examples

- [Hero Section Components](https://merakiui.com/components/hero) — Full-width
  hero sections with side-by-side copy and responsive image framing.
- [Pricing Tables](https://merakiui.com/components/pricing) — Multi-tier pricing
  grids with feature checklists and call-to-action buttons.
- [Navigation Bars](https://merakiui.com/components/navbar) — Responsive navbars
  with mobile drawer toggles and bidirectional alignment.

## When to use it

- Use it when building applications or marketing sites targeted at Middle
  Eastern or North African markets requiring first-class RTL layout support.
- Use it when you need rapid, dependency-free Tailwind components that can be
  pasted directly into HTML, React, or Vue projects.
- Skip it when your project requires advanced headless component accessibility
  primitives (like listboxes and popovers); use
  [Headless UI](../component-libraries/headless-ui.md) instead.
- Skip it when you require animated micro-interactions powered by spring
  physics; use [Animate UI](../component-libraries/animate-ui.md) or
  [Magic UI](../component-libraries/magic-ui.md) instead.

## Agent notes

- Official documentation URL: `https://merakiui.com/components`.
- Source repository: `https://github.com/merakiui/merakiui`.
- All styling relies on pure Tailwind utility classes.
- When generating RTL markup, ensure directional utilities use logical
  properties (such as `start` and `end` rather than `left` and `right`) if
  dynamically switching directions in the same DOM tree.

## Alternatives in this repo

- [HyperUI](../component-libraries/hyperui.md) — Sibling free open-source
  Tailwind library with comprehensive eCommerce and marketing blocks.
- [Float UI](../component-libraries/float-ui.md) — Multi-framework Tailwind
  marketing library supporting React, Vue, Svelte, and HTML.

## Sources

- [Meraki UI Official Site](https://merakiui.com/) — checked 2026-10-07
- [Meraki UI GitHub Repository](https://github.com/merakiui/merakiui) — checked
  2026-10-07
- [Meraki UI Components Directory](https://merakiui.com/components) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
