---
name: Utopia
slug: utopia
section: Type
section_slug: type
source_url: 'https://utopia.fyi/'
designeer_url: 'https://designeer.xyz/visuals'
designeer_blurb: Fluid typography calculator generating CSS clamp.
paywall: free
pricing_summary:
  "Utopia's fluid type, space, and grid calculators are free to use; no paid
  plan was published."
open_source: false
license: unknown
category_tags: [fluid-design, typography, css, responsive, calculator]
best_for: [fluid type scales, responsive spacing, CSS clamp values]
stack: ['css']
execution_mode: browser-app
surface: ['web-ui']
status: active
agent_friendly: false
last_verified: 2026-10-07
---

# Utopia

> Fluid typography calculator generating CSS clamp. Its calculators help teams
> create responsive type and spacing values between chosen viewports.

## At a glance

| Field          | Value                                                           |
| -------------- | --------------------------------------------------------------- |
| Source         | [utopia.fyi](https://utopia.fyi/)                               |
| Paywall        | **Free** — the public calculators can be used without payment.  |
| Open source    | No source license was identified for the hosted tools.          |
| Type           | Responsive type, spacing, and grid calculators.                 |
| Works with     | CSS output using fluid values and `clamp()`.                    |
| Best for       | Creating consistent scales across viewport widths.              |
| Agent-friendly | No API or CLI was verified; the browser generates copyable CSS. |

## What it is

Utopia is a set of browser calculators for fluid web design. The type calculator
creates responsive font sizes, the space calculator generates fluid spacing
steps, and the grid calculator helps define responsive grids.

The tools derive CSS values from a minimum and maximum viewport and chosen scale
values. They provide a starting scale; a designer still needs to check the
actual content, breakpoints, readability, and component context.

## Paywall and pricing

- **Free:** The type, space, and grid calculators are publicly available.
- **Paid:** Not published.
- **Sign-up required?** No account was shown for using the calculators.
- **Licence for client work:** The output is CSS values for a project. No
  separate software license for the hosted calculator was identified.

Access checked 2026-10-07.

## How to use

1. Open the type calculator and set the smallest and largest viewport widths for
   the design.
2. Choose a type scale and the minimum and maximum values for the type styles.
   Review the generated curve against actual page copy.
3. Copy the generated CSS custom properties and add them to the project's
   stylesheet or token file.
4. Use the space calculator for a matching fluid spacing scale, then inspect the
   grid calculator if the layout needs a responsive column system.
5. Test at intermediate widths, browser zoom, and with real content. Adjust
   values where the calculated curve creates awkward line lengths or spacing.

## Examples

- [Fluid type calculator](https://utopia.fyi/type/calculator/) — define a type
  scale and generate CSS values between viewport bounds.
- [Fluid space calculator](https://utopia.fyi/space/calculator/) — build
  responsive spacing tokens for a layout.
- [Fluid grid calculator](https://utopia.fyi/grid/calculator/) — explore a grid
  that adapts across viewport sizes.
- [Utopia homepage](https://utopia.fyi/) — browse the calculators and supporting
  articles.

## When to use it

- Use it when a site needs a continuous scale instead of many abrupt
  breakpoint-specific font and spacing overrides.
- Use the generated CSS as a starting point, then test it with the actual
  content and responsive layouts.
- Skip it when the design system requires fixed values or when a fluid scale
  harms legibility at a supported viewport size.

## Agent notes

- There is no package or install step. Copy the generated CSS into the project
  and adapt names to the existing token conventions.
- Do not invent Utopia values from memory; use the calculator output for the
  project's chosen bounds and scale.
- Check the generated `clamp()` values at intermediate viewport widths and
  verify the browser support required by the project.
- The site describes itself as a tool rather than a framework or plugin; it does
  not create a runtime dependency.

## Alternatives in this repo

- [Fontsource](../type/fontsource.md) — install and self-host the font files
  used with a fluid type scale.
- [Fontshare](../type/fontshare.md) — explore and select a type family before
  generating its responsive scale.
- [Klim](../type/klim.md) — source a paid family when the brand needs a bespoke
  commercial typeface.

## Sources

- [Official Utopia site](https://utopia.fyi/) — checked 2026-10-07
- [Type calculator](https://utopia.fyi/type/calculator/) — checked 2026-10-07
- [Space calculator](https://utopia.fyi/space/calculator/) — checked 2026-10-07
- [Grid calculator](https://utopia.fyi/grid/calculator/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/visuals) — checked 2026-10-07
