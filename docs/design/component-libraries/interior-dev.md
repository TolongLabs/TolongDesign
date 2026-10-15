---
name: interior.dev
slug: interior-dev
section: Component Libraries
section_slug: component-libraries
source_url: https://www.interior.dev/
designeer_url: https://designeer.xyz/components
designeer_blurb: Micro-interactions finely tuned for click responsiveness.
paywall: free
pricing_summary: 'Free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [micro-interactions, react, animations, tactile-ui, llms-txt]
best_for: [tactile web interactions, polished form feedback, async states]
stack: ['react', 'typescript']
execution_mode: snippet
surface: ['web-ui']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# interior.dev

> Micro-interactions finely tuned for click responsiveness. TolongLabs
> developers reach for interior.dev to implement tactile, instant
> micro-interactions for the critical half-second after user clicks, inputs, and
> state changes.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [interior.dev](https://www.interior.dev/)                      |
| Paywall        | **Free** — 100% free and open source                           |
| Open source    | Yes — MIT                                                      |
| Type           | Micro-interaction component catalog and reference              |
| Works with     | React, TypeScript, Tailwind CSS, Web APIs                      |
| Best for       | Tactile web interactions, polished form feedback, async states |
| Agent-friendly | Yes — native llms.txt, plain-text reference routes, copy-paste |

## What it is

interior.dev is an open-source React component and interaction design repository
focused entirely on the micro-interactions that occur during the crucial
half-second after a user click or gesture. It addresses subtle UX friction
points where typical applications feel sluggish, jarring, or uncommunicative.

The library categorizes dozens of interaction primitives across distinct UX
phases:

- **Input & Form Feedback:** Floating labels that glide out of the way without
  vanishing, inline validation errors that render without shoving adjacent form
  inputs, auto-advancing OTP fields, and segmented password strength meters.
- **Async & System Progress:** Zero-layout-shift skeleton-to-content transitions
  (`skeleton-swap`), progress bars that seamlessly transition from indeterminate
  to determinate, token-by-token streaming text carets, and narrated task steps.
- **Overlays & Context:** Modals with integrated focus traps and scroll locks,
  tooltips that apply a delay only on first hover and activate instantly
  thereafter (`tooltip-group`), and origin-aware popovers that flip on viewport
  collision.
- **Navigation & Gestures:** Sliding segmented controls where labels invert
  color through the thumb, momentum carousels, reorderable list drag targets,
  and long-press confirmation buttons.

interior.dev is built with exceptional agent friendliness: it serves a full
`llms.txt` specification alongside dedicated `/reference/<slug>` plain-text
endpoints providing clean TypeScript implementations without scraping overhead.

## Paywall and pricing

- **Free:** The complete component catalog, plain-text references, and
  implementation code are 100% free and open source.
- **Paid:** None.
- **Sign-up required?** No.
- **Licence for client work:** Distributed under the MIT licence. Free for
  commercial products, client web applications, and internal software.

Checked on the official website on 2026-10-07.

## How to use

1. Browse the interaction catalog at [interior.dev](https://www.interior.dev/)
   or query its agent reference via `https://www.interior.dev/llms.txt`.
2. Inspect the plain-text reference implementation for the desired interaction
   (e.g. Floating Label):

```bash
curl -s https://www.interior.dev/reference/floating-label
```

3. Copy the TypeScript source into your component directory (e.g.
   `components/ui/floating-label.tsx`).

4. Import and use the micro-interaction in your application:

```tsx
import { FloatingLabelInput } from '@/components/ui/floating-label'

export function BillingEmailField() {
  return (
    <div className="max-w-sm p-4">
      <FloatingLabelInput
        id="email"
        label="Email address"
        type="email"
        required
      />
    </div>
  )
}
```

## Examples

- [Floating Label Interaction](https://www.interior.dev/docs/floating-label) —
  Interactive demonstration of non-disappearing floating input labels.
- [Skeleton Swap Transition](https://www.interior.dev/docs/skeleton-swap) — Zero
  layout shift swap between placeholder skeletons and loaded data.
- [interior.dev LLM Reference](https://www.interior.dev/llms.txt) — Full
  machine-readable index linking documentation and plain-text code routes.

## When to use it

- Use it when elevating an existing React application from functional to
  exceptionally tactile and responsive.
- Use it to resolve jarring UI layout shifts during form validation, async data
  fetching, or accordion toggling.
- Skip it when you need specialized retro DOS terminal layouts; use
  [SRCL](../component-libraries/srcl.md) or
  [termcn](../component-libraries/termcn.md) instead.

## Agent notes

- Official documentation URL: `https://www.interior.dev/`.
- Machine reference URL: `https://www.interior.dev/llms.txt`.
- Plain-text source endpoint pattern:
  `https://www.interior.dev/reference/<slug>`.
- Components are written in TypeScript using native DOM events, CSS custom
  properties, and standard React hooks without heavy external framework
  dependencies.

## Alternatives in this repo

- [Fluid Functionalism](../component-libraries/fluid-functionalism.md) —
  Spring-animated component library focusing on fluid hover and motion systems.
- [soundcn](../component-libraries/soundcn.md) — Copy-paste UI sound effects
  that provide complementary auditory feedback for click micro-interactions.
- [Sona UI](../component-libraries/sona-ui.md) — Copy-paste animated React
  components with Motion physics.

## Sources

- [interior.dev Official Website](https://www.interior.dev/) — checked
  2026-10-07
- [interior.dev LLMs Reference](https://www.interior.dev/llms.txt) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/components)
