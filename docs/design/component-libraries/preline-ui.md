---
name: Preline UI
slug: preline-ui
section: Component Libraries
section_slug: component-libraries
source_url: https://preline.co/
designeer_url: https://designeer.xyz/components
designeer_blurb: Tailwind CSS components for complex dashboards.
paywall: freemium
pricing_summary:
  'Free open-source library with 640+ components; Preline Pro is $249 one-time
  for lifetime access.'
open_source: true
license: MIT
category_tags: [tailwind, dashboards, components, headless-js, figma, mcp]
best_for: [complex dashboards, enterprise web applications, admin portals]
stack: [tailwind, javascript, react, vue, figma]
agent_friendly: true
last_verified: 2026-10-07
---

# Preline UI

> Tailwind CSS components for complex dashboards. TolongLabs developers reach
> for Preline UI to build data-intensive dashboards and web applications with a
> vast library of accessible Tailwind components and headless JavaScript
> plugins.

## At a glance

| Field          | Value                                                               |
| -------------- | ------------------------------------------------------------------- |
| Source         | [preline.co](https://preline.co/)                                   |
| Paywall        | **Freemium** — 640+ free components; Pro is $249 one-time           |
| Open source    | Yes — MIT ([GitHub](https://github.com/htmlstreamofficial/preline)) |
| Type           | Component library, JS plugins, and dashboard templates              |
| Works with     | Tailwind CSS v4 and v3, HTML, React, Vue, Figma                     |
| Best for       | Complex dashboards, enterprise web applications, admin portals      |
| Agent-friendly | Yes — npm package, Preline MCP server, copy-paste snippets          |

## What it is

Preline UI is an extensive open-source component library designed specifically
for modern web applications and admin dashboards using Tailwind CSS. Developed
by Htmlstream, it includes over 640 individual UI components, 189 layout blocks,
and pre-built dashboard page templates.

A defining element of Preline UI is its custom headless JavaScript plugin
system. Interactive behaviors—such as complex multi-level dropdowns, tree views,
collapsible sidebars, data filters, modals, overlays, and responsive tables—are
driven by lightweight vanilla JavaScript without imposing a specific frontend
framework requirement. It works cleanly in React, Vue, Svelte, or static HTML
environments.

Preline UI is tailored for dense, data-rich user interfaces. While many Tailwind
kits prioritize marketing landing pages, Preline provides specialized dashboard
elements like advanced date range pickers, status badges, kanban board columns,
file uploaders, and metric trend tables.

## Paywall and pricing

- **Free:** The open-source tier provides over 640 components, 189 layout
  blocks, 5 starter templates, and a free Figma design system file under the
  permissive MIT licence for unlimited projects.
- **Paid:** Preline Pro is available for a one-time payment of $249 for lifetime
  access. It unlocks 780+ premium blocks, 21 multi-page templates (over 207
  pages), 100+ animated icons, and AI development prompts.
- **Sign-up required?** No account is needed to install the npm library or copy
  free open-source components. An account is required for purchasing Pro.
- **Licence for client work:** Free MIT components are completely free for
  commercial and client projects. Preline Pro grants a non-exclusive license for
  unlimited commercial projects, client websites, and SaaS products.

Verified on the official Preline UI website and Pro pricing documentation on
2026-10-07.

## How to use

1. Install Preline via bun:

```bash
bun add preline
```

2. Add Preline to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/preline/preline.js'
  ],
  plugins: [require('preline/plugin')]
}
```

3. Initialize the Preline JS plugin in your application entry file:

```javascript
import 'preline/preline'
```

4. Render a Preline component with data attributes in HTML or JSX:

```html
<div class="hs-dropdown relative inline-flex">
  <button
    id="hs-dropdown-default"
    type="button"
    class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
    aria-haspopup="menu"
    aria-expanded="false"
  >
    Actions
    <svg
      class="hs-dropdown-open:rotate-180 size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>

  <div
    class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
    role="menu"
  >
    <div class="p-1 space-y-0.5">
      <a
        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
        href="#"
        >Export Data</a
      >
      <a
        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
        href="#"
        >Team Settings</a
      >
    </div>
  </div>
</div>
```

## Examples

- [Preline Accordion](https://preline.co/docs/accordion.html) — Accessible,
  animated collapsible panels with multi-collapse support.
- [Preline Modal](https://preline.co/docs/modal.html) — Dialog overlays with
  backdrop handling, scroll lock, and nested animations.
- [Preline Examples Gallery](https://preline.co/examples.html) — Live showcase
  of application screens and complex dashboard patterns.

## When to use it

- Use it when developing full-featured admin dashboards, data portals, or B2B
  SaaS products that require complex interactive controls.
- Use it when you need AI agent integration via Model Context Protocol (MCP) to
  generate and fetch components dynamically.
- Skip it when building purely consumer-facing landing pages with high-intensity
  WebGL or 3D animations; use [Magic UI](../component-libraries/magic-ui.md) or
  [Aceternity UI](../component-libraries/aceternity-ui.md) instead.
- Skip it when your project relies exclusively on React-specific Radix UI
  primitives; use [Base CN](../component-libraries/base-cn.md) instead.

## Agent notes

- Official documentation URL: `https://preline.co/docs/index.html`.
- Preline provides an official Model Context Protocol (MCP) server, allowing AI
  coding agents to inspect component contracts and fetch source code directly.
- In single-page applications (Next.js, Vite React), call
  `window.HSStaticMethods.autoInit()` on route change events to reinitialize
  event listeners on dynamically mounted DOM elements.

## Alternatives in this repo

- [Flowbite](../component-libraries/flowbite.md) — Mature Tailwind CSS component
  library with native React, Svelte, and Vue wrappers.
- [FlyonUI](../component-libraries/flyonui.md) — Semantic Tailwind component
  library built with daisyUI styling and Preline headless JS plugins.

## Sources

- [Preline UI Official Site](https://preline.co/) — checked 2026-10-07
- [Preline UI Pricing](https://preline.co/pricing.html) — checked 2026-10-07
- [Preline UI Documentation](https://preline.co/docs/index.html) — checked
  2026-10-07
- [Preline UI GitHub Repository](https://github.com/htmlstreamofficial/preline)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
