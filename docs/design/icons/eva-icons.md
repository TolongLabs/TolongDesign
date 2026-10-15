---
name: 'Eva Icons'
slug: 'eva-icons'
section: 'Icons'
section_slug: 'icons'
source_url: 'https://akveo.github.io/eva-icons/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: 'Pack of 400 icons in outline and fill.'
paywall: free
pricing_summary:
  'The icon set and packages are free under MIT; no paid tier is published.'
open_source: true
license: 'MIT'
category_tags:
  ['icon-library', 'svg', 'javascript', 'outline', 'filled', 'animation']
best_for: ['outline and fill pairs', 'animated icons', 'mobile interfaces']
stack: ['javascript', 'svg']
execution_mode: package
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Eva Icons

> Pack of 400 icons in outline and fill. At TolongLabs, use it as a reference
> for choosing and implementing icons that fit the project.

## At a glance

| Field          | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Source         | [Official site](https://akveo.github.io/eva-icons/)          |
| Paywall        | **Free — no paid tier published**                            |
| Open source    | Yes — MIT ([repository](https://github.com/akveo/eva-icons)) |
| Type           | Open-source icon pack                                        |
| Works with     | JavaScript, SVG, React Native, web                           |
| Best for       | outline and fill pairs, animated icons, mobile interfaces    |
| Agent-friendly | Yes                                                          |

## What it is

Eva Icons is an open-source icon pack with more than 480 symbols in outline and
filled styles. The project also provides SVG, icon-font, PNG, and animation
variants such as zoom, pulse, shake, and flip.

The browser demo and JavaScript helper make it easy to try icons in a page,
while related Akveo packages integrate the same family into mobile frameworks.
It is a broader style system than the one-weight icon sets.

## Paywall and pricing

- Free: the icon set and published integrations are available under MIT.
- Paid: no paid plan or price is published.
- Sign-up required? No for the public project and package.
- Client work: MIT permits commercial and client work; brand identities remain
  protected by their owners.

Pricing and licence information checked 2026-10-07.

## How to use

1. Browse the demo and choose an icon name plus outline or fill style.
2. Install eva-icons for JavaScript use, or download the SVG when a static file
   is sufficient.
3. Add the data-eva attribute to an element and call eva.replace after the page
   markup loads.
4. Use an animation only when it communicates state; provide an accessible name
   for meaningful icons.

Install with Bun:

```bash
bun add eva-icons
```

Minimal usage from the official documentation:

```html
<i data-eva="github" aria-hidden="true"></i>

<script>
  eva.replace()
</script>
```

## Examples

- [Eva Icons demo](https://akveo.github.io/eva-icons/) — Preview outline and
  filled icon variants.
- [Project README](https://github.com/akveo/eva-icons) — Shows the JavaScript
  replacement and animation patterns.
- [React Native package](https://github.com/akveo/react-native-eva-icons) —
  Framework integration example for mobile applications.

## When to use it

- Use it when a product needs a consistent outline and filled pair or a
  controlled icon animation.
- Skip it when you need a smaller, simpler outline-only family; compare Feather
  or Lucide.

## Agent notes

- JavaScript package: eva-icons. The helper replaces elements carrying data- eva
  attributes.
- Animations are listed as zoom, pulse, shake, and flip; use motion sparingly
  and honor reduced-motion preferences.
- MIT covers the project; check third-party marks separately.

## Alternatives in this repo

- [Iconoir](../icons/iconoir.md) — A larger outline system with maintained
  framework packages.
- [Feather](../icons/feather.md) — A minimal 24-pixel outline family.
- [Ionicons](../icons/ionicons.md) — A set with filled, outline, and sharp
  variants.

## Sources

- [Official demo](https://akveo.github.io/eva-icons/) — checked 2026-10-07
- [GitHub repository](https://github.com/akveo/eva-icons) — checked 2026-10-07
- [React Native integration](https://github.com/akveo/react-native-eva-icons) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07; page
  fetch unavailable, blurb copied from batch metadata
