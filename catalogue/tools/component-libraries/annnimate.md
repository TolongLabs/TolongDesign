---
name: 'Annnimate'
slug: annnimate
section: 'Component Libraries'
section_slug: component-libraries
source_url: 'https://annnimate.com/'
designeer_url: 'https://designeer.xyz/components'
designeer_blurb: 'GSAP motion components ready for production.'
paywall: freemium
pricing_summary:
  'A free Starter Pack includes selected components; Solo costs €29/month billed
  quarterly or €249/year, with higher Studio plans.'
open_source: false
license: 'proprietary'
category_tags: [react, vue, gsap, motion]
best_for: [production motion, interactive marketing]
stack: ['react', 'vue', 'gsap']
execution_mode: snippet
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Annnimate

> GSAP motion components ready for production. Yes — component code,
> documentation, and MCP support.

## At a glance

| Field          | Value                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Source         | [annnimate.com](https://annnimate.com/)                                                                                                        |
| Paywall        | **Freemium** — A free Starter Pack includes selected components; Solo costs €29/month billed quarterly or €249/year, with higher Studio plans. |
| Open source    | No — proprietary.                                                                                                                              |
| Type           | Copy-paste GSAP motion component library                                                                                                       |
| Works with     | React, Vue, and plain HTML/CSS/JavaScript                                                                                                      |
| Best for       | production motion, interactive marketing                                                                                                       |
| Agent-friendly | Yes — Yes — component code, documentation, and MCP support                                                                                     |

## What it is

Annnimate is a copy-paste library of GSAP motion components maintained by Good
Fella. Its catalog covers buttons, scroll, UI, experimental, shader, and menu
patterns; the current library count differs across official pages, so no single
total is stated here.

Each item can be previewed and copied in React, Vue, or plain HTML. Code is
copied into the project and requires GSAP rather than an Annnimate runtime
dependency. Components use the framework's lifecycle cleanup.

A free Starter Pack is available by email, while the full library is
subscription-based. The FAQ permits commercial and client work without
attribution.

## Paywall and pricing

- **Free:** A selected Starter Pack is sent by email; previews are public.
- **Paid:** Solo is €29/month billed quarterly or €249/year. Studio is €79/month
  billed quarterly or €699/year; Studio+ is €169/month billed quarterly or
  €1,499/year.
- **Sign-up required?** Yes for the free pack and paid library access.
- **Licence for client work:** The FAQ permits commercial and client work
  without attribution. The library is proprietary, not open source.

Pricing and access were checked on 2026-10-07.

## How to use

Install GSAP and its React adapter with the project's package manager.

1. Browse or filter the library and open a component page to inspect its
   preview, requirements, and available format.

2. Choose React, Vue, or HTML and copy the code into the application. The
   quick-start guide describes this copy-and-tune workflow.

3. Install GSAP and any component-specific plugins listed on the page; React
   components use useGSAP for lifecycle cleanup.

4. Change documented attributes or props to fit real content. Test reduced
   motion and wire form or navigation actions.

Official setup or install command:

```bash
bun add gsap @gsap/react
```

Minimal React example from the official home page:

```tsx
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Box() {
  const box = useRef(null)

  useGSAP(() => {
    gsap.to(box.current, { x: 200, duration: 1, ease: 'expo.out' })
  })

  return <div ref={box} className="box" />
}
```

## Examples

- [Pricing](https://annnimate.com/animations/pricing) — A plan switcher whose
  values roll between billing periods.
- [Multi-Step Form](https://annnimate.com/animations/multi-step-form) — A form
  with directional steps and submit feedback.
- [Video Player](https://annnimate.com/animations/video-player) — A video-player
  interaction example.
- [Quick start](https://annnimate.com/docs/getting-started/quick-start) — The
  documented preview, copy, paste, and tune workflow.

## When to use it

- Use it when a site needs authored GSAP motion in React, Vue, or plain HTML and
  the client project can follow the commercial licence.
- Skip it when you need MIT source or a runtime-maintained npm package; compare
  [Motion Primitives](../component-libraries/motion-primitives.md) or
  [Animate UI](../component-libraries/animate-ui.md).

## Agent notes

- Docs: https://annnimate.com/docs. The site also lists an MCP server for agent
  workflows.
- The library is copy-paste, not an npm package; install GSAP separately.
- Each item carries provenance and requirements. Check whether a plugin such as
  CustomEase or MorphSVGPlugin is needed.
- Prices and component counts can change; current figures were checked on
  2026-10-07.

## Alternatives in this repo

- [Motion Primitives](../component-libraries/motion-primitives.md) — Open
  component patterns for React motion.
- [Animate UI](../component-libraries/animate-ui.md) — A copyable animated UI
  collection.
- [Fancy Components](../component-libraries/fancy-components.md) — A set of
  polished visual effects and components.

## Sources

- [Annnimate home](https://annnimate.com/) — checked 2026-10-07
- [Quick start](https://annnimate.com/docs/getting-started/quick-start) —
  checked 2026-10-07
- [FAQ and licensing](https://annnimate.com/faq) — checked 2026-10-07
- [Pricing component](https://annnimate.com/animations/pricing) — checked
  2026-10-07
- [Multi-Step Form](https://annnimate.com/animations/multi-step-form) — checked
  2026-10-07
- [Video Player](https://annnimate.com/animations/video-player) — checked
  2026-10-07
- [Infinite Marquee for React](https://annnimate.com/animations/marquee/react) —
  checked 2026-10-07
- [Designeer listing](https://designeer.xyz/components) — checked 2026-10-07
