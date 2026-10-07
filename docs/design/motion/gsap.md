---
name: GSAP
slug: gsap
section: Motion
section_slug: motion
source_url: https://gsap.com/
designeer_url: https://designeer.xyz/components
designeer_blurb: Industry-standard JavaScript timeline animation engine.
paywall: free
pricing_summary:
  "100% free for all commercial and personal web projects following Webflow's
  acquisition, with all premium plugins included."
open_source: false
license: proprietary
category_tags:
  [motion, animation, gsap, timelines, scrolltrigger, svg, javascript]
best_for: [complex timelines, scroll-driven storytelling, svg morphing]
stack: [javascript, typescript, react, vue, svelte]
agent_friendly: true
last_verified: 2026-10-07
---

# GSAP

> Industry-standard JavaScript timeline animation engine. Use it to coordinate
> intricate multi-step animations, scroll-driven scrubbers, and SVG path morphs.

## At a glance

| Field          | Value                                                                             |
| -------------- | --------------------------------------------------------------------------------- |
| Source         | [gsap.com](https://gsap.com/)                                                     |
| Paywall        | **Free** — 100% free for all users including all bonus plugins                    |
| Open source    | No — proprietary permissive licence ([GitHub](https://github.com/greensock/GSAP)) |
| Type           | High-performance JavaScript timeline animation engine                             |
| Works with     | Vanilla JavaScript, React, Next.js, Vue, Svelte, Webflow                          |
| Best for       | Complex timelines, scroll-driven storytelling, SVG morphing                       |
| Agent-friendly | Yes — npm package (`gsap`), extensive docs, robust API                            |

## What it is

The GreenSock Animation Platform (GSAP) is the web's most established and widely
used JavaScript animation engine. Created over fifteen years ago and powering
the majority of award-winning Awwwards and FWA web experiences, GSAP delivers
rock-solid animation sequencing across all browsers without CSS compatibility
quirks.

Following its acquisition by Webflow, the entire GSAP platform—including all
previously paid "Club GreenSock" bonus plugins—was made 100% free for all
developers. This unlocks powerful capabilities at zero cost:

- **ScrollTrigger:** links timelines to page scroll position with pinpoint pin,
  scrub, and snap controls.
- **SplitText:** breaks paragraphs into animated characters, words, or lines.
- **MorphSVG & DrawSVG:** morphs complex SVG paths and simulates line-drawing
  effects smoothly.
- **Flip:** calculates layout differences and animates between them seamlessly.
- **Observer & Draggable:** manages touch, mouse, and gesture interactions.

GSAP excels when choreographing dozens of staggered elements across a long,
narrative timeline where elements must fire in strict chronological sequences.

## Paywall and pricing

- **Free:** Completely free for both personal and commercial projects. All core
  tools and premium plugins (ScrollTrigger, SplitText, MorphSVG, DrawSVG, Flip,
  ScrambleText) are included with no subscription or license fees.
- **Paid:** No paid tiers or paywalls. (Former Club GreenSock memberships have
  been retired).
- **Sign-up required?** No sign-up required to install or use the npm package.
- **Licence for client work:** Free permissive commercial licence. The terms
  permit building client and commercial websites freely, but prohibit creating
  competing visual animation builder software that directly rivals Webflow.

Checked on 2026-10-07.

## How to use

1. Install the `gsap` package into your project using Bun:

```bash
bun add gsap
```

2. In your component or page script, import GSAP and register any plugins:

```typescript
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHeroScrollAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero-container',
      start: 'top top',
      end: '+=1000',
      scrub: 1,
      pin: true
    }
  })

  tl.from('.hero-headline', { y: 60, opacity: 0, duration: 1 })
    .from('.hero-badge', { scale: 0.8, opacity: 0, stagger: 0.1 }, '-=0.5')
    .to('.hero-image', { rotate: 6, scale: 1.05, duration: 1.5 }, '<')

  return () => tl.kill()
}
```

3. In React or Next.js projects, use `@gsap/react` (`useGSAP` hook) for
   automatic lifecycle management and cleanup.

## Examples

- [GSAP ScrollTrigger Showcase](https://gsap.com/scroll/) — live demonstrations
  of pinned sections, parallax layers, and scrubbed animations.
- [GSAP Docs & Getting Started](https://gsap.com/docs/v3/) — complete API
  reference for timelines, tweens, and plugin methods.
- [GSAP Webflow Announcement](https://gsap.com/pricing) — official details on
  the free licensing model and Webflow native integration.

## When to use it

- Use it when choreographing intricate, cinematic landing pages with pinned
  scroll sequences, narrative reveals, and SVG path morphs.
- Use it when you need total precision over timeline sequencing, delays, labels,
  and reverse playback.
- Skip it for simple, isolated UI state transitions (modals, dropdowns) in React
  apps; use Motion instead for smaller bundle footprints.

## Agent notes

- Official documentation URL: `https://gsap.com/docs/v3/`
- npm package name: `gsap` (for React, also use `@gsap/react`)
- Always register plugins before calling them: `gsap.registerPlugin(...)`
- In React components, wrap GSAP calls in `useGSAP()` to ensure proper garbage
  collection and eliminate duplicate tweens during fast refreshes.

## Alternatives in this repo

- [Motion](../motion/motion.md) — declarative React and Vue animation library
  optimized for components and layout morphs.
- [Theatre.js](../motion/theatre-js.md) — visual timeline motion designer for
  DOM and Three.js scenes.
- [Easing Wizard](../motion/easing-wizard.md) — visual generator for custom CSS
  easing and spring curves.

## Sources

- [GSAP Official Site](https://gsap.com/) — checked 2026-10-07
- [GSAP Pricing & Licensing](https://gsap.com/pricing) — checked 2026-10-07
- [GSAP Documentation](https://gsap.com/docs/v3/) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components)
