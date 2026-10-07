---
name: Easing Wizard
slug: easing-wizard
section: Motion
section_slug: motion
source_url: https://easingwizard.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Visual generator for custom CSS springs.
paywall: free
pricing_summary:
  '100% free web utility with no paywalls; open-source code under a custom
  non-commercial redistribution license.'
open_source: true
license: custom
category_tags: [motion, easing, css, springs, bezier, transitions, generator]
best_for: [css springs, custom cubic-bezier curves, linear easing generator]
stack: [css, tailwind]
agent_friendly: true
last_verified: 2026-10-07
---

# Easing Wizard

> Visual generator for custom CSS springs. Use it to craft and test spring
> physics, cubic-bezier curves, and CSS `linear()` functions with instant visual
> previews.

## At a glance

| Field          | Value                                                                         |
| -------------- | ----------------------------------------------------------------------------- |
| Source         | [easingwizard.com](https://easingwizard.com/)                                 |
| Paywall        | **Free** — 100% free web utility, no account required                         |
| Open source    | Yes — custom licence ([GitHub](https://github.com/roydigerhund/easingwizard)) |
| Type           | Visual CSS easing curve and spring generator                                  |
| Works with     | Modern CSS, Tailwind CSS, Motion, GSAP, Web Animations API                    |
| Best for       | CSS springs, custom cubic-bezier curves, linear() easings                     |
| Agent-friendly | Yes — Claude Code plugin, MCP server, copyable CSS snippets                   |

## What it is

Easing Wizard is a web-based developer tool built by frontend engineer Matthias
Martin. It simplifies the challenge of creating lifelike, physics-based motion
curves in pure CSS without resorting to heavy JavaScript runtime animation
calculators.

CSS historically only supported simple cubic-bezier curves
(`cubic-bezier(x1, y1, x2, y2)`), which cannot natively model true spring
physics, bounces, or multi-phase oscillations. With modern browser support for
the CSS `linear()` easing function, developers can approximate complex spring
formulas using high-density coordinate stops.

Easing Wizard provides an interactive visual editor allowing developers to:

- Graph curves for Bézier, Spring, Bounce, Wiggle, and Overshoot behaviors.
- Tweak mathematical parameters including stiffness, damping, mass, and
  velocity.
- Compare generated curves against standard linear motion in real-time animated
  previews.
- Export ready-to-paste CSS variables or Tailwind CSS configuration classes.

Matthias Martin also maintains an official Model Context Protocol (MCP) server
and Claude Code integration, allowing coding agents to query mathematical easing
parameters and generate calibrated CSS curves automatically.

## Paywall and pricing

- **Free:** The web application and generator at `easingwizard.com` are
  completely free with no paywalls, subscriptions, or credit systems.
- **Paid:** No paid tiers.
- **Sign-up required?** No sign-up required.
- **Licence for client work:** Free to use generated CSS snippets, curves, and
  variables in commercial client products without royalty. The repository code
  on GitHub uses a custom license prohibiting direct commercial resale of the
  tool.

Checked on 2026-10-07.

## How to use

1. Visit `easingwizard.com` and select an easing family: **Bézier**, **Spring**,
   **Bounce**, **Wiggle**, or **Overshoot**.
2. Adjust the curve handles or customize parameters like mass, stiffness, and
   damping in the controls panel.
3. Test the interactive preview box or toggle the linear comparison to verify
   natural deceleration and settling.
4. Copy the generated CSS easing rule:

```css
:root {
  --ease-spring: linear(
    0,
    0.006,
    0.025 2.8%,
    0.101 6.1%,
    0.539 18.9%,
    0.721 25.3%,
    0.849 31.5%,
    0.932 38.4%,
    0.979 46.2%,
    1 55.4%,
    1.008 67.2%,
    1
  );
}

.modal-enter {
  transition: transform 600ms var(--ease-spring);
}
```

5. In Tailwind CSS projects, add the easing to your `tailwind.config.js` or
   `theme.extend.transitionTimingFunction`.

## Examples

- [Easing Wizard Web App](https://easingwizard.com/) — interactive curve editor
  with real-time spring simulation.
- [Easing Wizard GitHub](https://github.com/roydigerhund/easingwizard) —
  open-source codebase, algorithm breakdown, and MCP server setup.
- [Matthias Martin Portfolio](https://100dayscss.com/) — creative web animation
  challenges and CSS experiments by the author.

## When to use it

- Use it when you want spring-like, bouncy UI transitions in pure CSS without
  importing a JavaScript animation runtime.
- Use it to fine-tune cubic-bezier curves for page transitions, drawers, and
  button hover micro-interactions.
- Skip it if you are already using Motion or GSAP in a JavaScript app, where
  spring physics are calculated dynamically on the fly.

## Agent notes

- Official application URL: `https://easingwizard.com/`
- GitHub repository: `https://github.com/roydigerhund/easingwizard`
- Features official MCP server integration for Claude Code to generate CSS
  spring functions on demand during layout creation.
- Emits standard `cubic-bezier()` and CSS `linear()` syntax supported in all
  modern evergreen browsers (Chrome 113+, Safari 17.2+, Firefox 112+).

## Alternatives in this repo

- [Motion](../motion/motion.md) — production-ready React animation library with
  built-in dynamic spring math.
- [GSAP](../motion/gsap.md) — JavaScript animation engine with customizable ease
  curves and timelines.
- [Morphrig](../motion/morphrig.md) — interactive technical guide to SVG path
  interpolation and icon morphing.

## Sources

- [Easing Wizard Official Site](https://easingwizard.com/) — checked 2026-10-07
- [Easing Wizard GitHub Repository](https://github.com/roydigerhund/easingwizard)
  — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
