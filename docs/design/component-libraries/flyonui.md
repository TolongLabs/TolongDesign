---
name: FlyonUI
slug: flyonui
section: Component Libraries
section_slug: component-libraries
source_url: https://flyonui.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Semantic Tailwind CSS components ready for v4.
paywall: freemium
pricing_summary:
  'Free open-source semantic Tailwind library under MIT; Pro tier offers 500+
  premium blocks and Figma design kit.'
open_source: true
license: MIT
category_tags: [tailwind, semantic-classes, components, headless-js, ui-kit]
best_for: [web applications, dashboards, rapid prototyping]
stack: ['tailwind', 'javascript', 'html']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# FlyonUI

> Semantic Tailwind CSS components ready for v4. TolongLabs developers reach for
> FlyonUI to build clean, accessible web interfaces using semantic CSS classes
> and headless JavaScript plugins without utility class bloat.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [flyonui.com](https://flyonui.com/)                             |
| Paywall        | **Freemium** — free open-source core; Pro templates & blocks    |
| Open source    | Yes — MIT ([GitHub](https://github.com/themeselection/flyonui)) |
| Type           | Semantic Tailwind component library and JS plugins              |
| Works with     | Tailwind CSS v4 and v3, HTML, React, Vue, Svelte                |
| Best for       | Web applications, dashboards, rapid prototyping                 |
| Agent-friendly | Yes — npm package, CLI, FlyonUI MCP server                      |

## What it is

FlyonUI is an open-source Tailwind CSS component library developed by
ThemeSelection. It combines the clean readability of semantic CSS class names
(inspired by daisyUI) with the interactive power of headless JavaScript plugins
(derived from Preline UI). The result is an accessible, lightweight component
kit that works seamlessly with modern HTML, React, Vue, and plain JavaScript.

A key challenge with pure Tailwind CSS is class name bloat: complex UI widgets
frequently require dozens of utility classes strung together in markup. FlyonUI
solves this by providing concise semantic classes (like `btn`, `card`, `modal`,
and `badge`) that encapsulate styling while retaining full Tailwind
customization via utility modifiers.

In addition to static styling, FlyonUI includes lightweight headless JavaScript
drivers to handle interactive component state (such as dropdown toggling,
accordion collapsing, modal dialogs, and tooltips) without forcing a specific
frontend framework dependency. It is fully updated for Tailwind CSS v4.

## Paywall and pricing

- **Free:** The core FlyonUI library (all base components, semantic classes, and
  headless JavaScript plugins) is 100% free and open source under the MIT
  licence.
- **Paid:** FlyonUI Pro provides access to over 500 premium pre-designed blocks
  (marketing, eCommerce, datatables, dashboard layouts) and an official Figma
  design system. Pro access is sold through individual and team developer
  licence packages.
- **Sign-up required?** No registration required to install and use the free npm
  package. An account is required for purchasing and downloading Pro blocks.
- **Licence for client work:** Free MIT components are completely free for
  unlimited commercial and client projects. FlyonUI Pro licences permit
  unlimited client work and proprietary SaaS applications.

Verified on the official FlyonUI documentation and Pro pages on 2026-10-07.

## How to use

1. Install FlyonUI as a development dependency:

```bash
bun add -d flyonui
```

2. Add FlyonUI to your Tailwind configuration:

For Tailwind CSS v4, add the plugin in your CSS stylesheet:

```css
@import 'tailwindcss';
@plugin "flyonui";
```

For Tailwind CSS v3, add it to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/flyonui/dist/js/*.js'
  ],
  plugins: [require('flyonui')]
}
```

3. Include the interactive JavaScript helper in your client bundle:

```javascript
import 'flyonui/flyonui'
```

4. Use semantic classes directly in HTML or JSX:

```html
<div class="card bg-base-100 shadow-md">
  <div class="card-body">
    <h2 class="card-title">Notification</h2>
    <p>Project updates have deployed successfully.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Dismiss</button>
    </div>
  </div>
</div>
```

## Examples

- [Accordion Component](https://flyonui.com/docs/components/accordion/) —
  Accessible collapsible panel with smooth expand and collapse transitions.
- [Modal Component](https://flyonui.com/docs/components/modal/) — Accessible
  dialog overlay with backdrop click and escape-key handling.
- [FlyonUI Pro Showcase](https://flyonui.com/pro/) — Catalog of 500+ pre-built
  marketing and dashboard layout blocks.

## When to use it

- Use it when you want the benefits of Tailwind CSS without filling your HTML
  with extensive strings of utility classes.
- Use it on multi-page applications, server-rendered frameworks (like Django,
  Laravel, Rails), or static HTML sites that need interactive components without
  heavy React or Vue runtime overhead.
- Skip it when your project strictly mandates pure unstyled headless primitives
  styled only with Tailwind utilities; use
  [Headless UI](../component-libraries/headless-ui.md) instead.
- Skip it when your team is already deeply committed to the shadcn/ui React
  ecosystem; use [Preline UI](../component-libraries/preline-ui.md) or
  [Flowbite](../component-libraries/flowbite.md) instead.

## Agent notes

- Official documentation URL: `https://flyonui.com/docs`.
- Source repository: `https://github.com/themeselection/flyonui`.
- FlyonUI supports an MCP (Model Context Protocol) server for AI coding agents
  to query component specifications and templates directly inside editor agents.
- When compiling with Tailwind v3, ensure the `node_modules/flyonui` path is
  included in the `content` array so required CSS rules are not purged.

## Alternatives in this repo

- [Preline UI](../component-libraries/preline-ui.md) — Comprehensive Tailwind
  CSS library with headless JS plugins and enterprise dashboard patterns.
- [Flowbite](../component-libraries/flowbite.md) — Established Tailwind
  component library featuring dedicated React, Svelte, and Vue wrappers.

## Sources

- [FlyonUI Official Site](https://flyonui.com/) — checked 2026-10-07
- [FlyonUI Documentation](https://flyonui.com/docs) — checked 2026-10-07
- [FlyonUI GitHub Repository](https://github.com/themeselection/flyonui) —
  checked 2026-10-07
- [FlyonUI Pro](https://flyonui.com/pro) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
