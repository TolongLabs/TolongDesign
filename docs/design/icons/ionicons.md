---
name: 'Ionicons'
slug: 'ionicons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://ionic.io/ionicons/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Premium icon pack for web and mobile.'
paywall: free
pricing_summary:
  'The icon set is open source and free under MIT; the official site lists no
  paid tier.'
open_source: true
license: 'MIT'
category_tags: ['icon-library', 'web-components', 'ionic', 'mobile', 'svg']
best_for:
  ['ionic apps', 'platform-specific interfaces', 'mobile and web controls']
stack: ['web-components', 'ionic', 'svg']
execution_mode: package
surface: ['web-ui', 'mobile-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Ionicons

> Premium icon pack for web and mobile. At TolongLabs, use it as a reference for
> choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                                                |
| -------------- | ------------------------------------------------------------------------------------ |
| Source         | [Official site](https://ionic.io/ionicons/)                                          |
| Paywall        | **Free — no paid tier published**                                                    |
| Open source    | Yes — MIT ([repository](https://github.com/ionic-team/ionicons/blob/main/readme.md)) |
| Type           | Open-source web component icon set                                                   |
| Works with     | Ionic, HTML, web components, mobile apps                                             |
| Best for       | ionic apps, platform-specific interfaces, mobile and web controls                    |
| Agent-friendly | Yes                                                                                  |

## What it is

Ionicons is the icon set created for Ionic Framework, with around 1,300 icons
for web, iOS, Android, and desktop interfaces. The set includes filled, outline,
and sharp versions for most app symbols.

The web component loads SVG data only for visible icons, so it can be used
outside Ionic without bundling a full icon font. The project is MIT- licensed;
third-party logo marks retain their owners' trademark rights.

## Paywall and pricing

- Free: the complete icon library and web component are open source under MIT.
- Paid: no paid icon tier or price is published.
- Sign-up required? No for the npm package or public documentation.
- Client work: MIT permits commercial and client projects. Treat logo symbols as
  third-party marks.

Pricing and licence information checked 2026-10-07.

## How to use

1. Install the Ionicons package in a web project, or use the version already
   included by Ionic Framework.
2. Render the web component with the icon name shown in the official guide.
3. Choose filled, outline, or sharp variants to suit the target platform or
   selected state.
4. Set size and color in CSS and add aria-hidden or aria-label according to the
   icon's meaning.

Install with Bun:

```bash
bun add ionicons
```

Minimal usage from the official documentation:

```html
<ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
```

## Examples

- [Usage guide](https://ionic.io/ionicons/usage) — Shows heart filled, outline,
  sharp, custom SVG, sizing, and accessibility.
- [Project README](https://github.com/ionic-team/ionicons/blob/main/readme.md) —
  Official installation and framework usage notes.
- [Ionic React announcement](https://ionic.io/blog/announcing-ionic-react) — A
  framework example using an Ionicons people symbol.

## When to use it

- Use it for Ionic projects or when platform-specific filled, outline, and sharp
  variants help.
- Skip it when a project needs a small, uniform outline set; compare Lucide or
  Heroicons.

## Agent notes

- Package: ionicons. In Ionic Framework the set is included; plain web projects
  use the web component.
- Names without a suffix are filled; append -outline or -sharp for those
  variants. Logo icons do not have every variant.
- Set aria-hidden on decorative icons and label icon-only controls.

## Alternatives in this repo

- [Lucide](../icons/lucide.md) — A compact, outline-first web UI family.
- [Heroicons](../icons/heroicons.md) — A restrained React and Vue component set.
- [Iconify](../icons/iconify.md) — A unified browser across more icon families.

## Sources

- [Official site](https://ionic.io/ionicons/) — checked 2026-10-07
- [Usage guide](https://ionic.io/ionicons/usage) — checked 2026-10-07
- [GitHub README](https://github.com/ionic-team/ionicons/blob/main/readme.md) —
  checked 2026-10-07
- [MIT licence](https://github.com/ionic-team/ionicons/blob/main/LICENSE) —
  checked 2026-10-07
- [Ionic React example](https://ionic.io/blog/announcing-ionic-react) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
