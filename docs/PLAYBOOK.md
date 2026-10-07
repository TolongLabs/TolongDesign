# Design playbook

How a TolongLabs developer (or their coding agent) goes from a client brief to
a design stack and a first page, using this repo. Every tool named here has a
doc with its paywall, licence, install steps and examples — open the doc before
committing to it.

## 0. Defaults

Unless the brief says otherwise:

| Decision   | Default                                                              |
| ---------- | -------------------------------------------------------------------- |
| Framework  | Next.js (App Router) + React + TypeScript                            |
| Styling    | Tailwind CSS                                                         |
| Budget     | **Free or freemium only**; any `paid` pick needs the client's OK     |
| Primitives | [shadcn/ui](./design/component-libraries/shadcn-ui.md) on [Radix](./design/component-libraries/radix.md) or [Base UI](./design/component-libraries/base-ui.md) |
| Icons      | [Lucide](./design/icons/lucide.md)                                   |
| Motion     | [Motion](./design/motion/motion.md)                                  |
| Deploy     | [Vercel](./design/deploy/vercel.md) or [Cloudflare](./design/deploy/cloudflare.md) |

Shortlist anything else with `bun run find` (see [README](./README.md)).

## 1. Collect references (30–60 minutes)

Goal: 8–15 reference screenshots/links that agree on a direction.

1. Start broad in one or two whole-site galleries: [Land-book](./design/design-galleries/land-book.md),
   [SiteInspire](./design/design-galleries/siteinspire.md),
   [Minimal Gallery](./design/design-galleries/minimal-gallery.md),
   [Awwwards](./design/design-galleries/awwwards.md) (for ambitious brand work).
2. Narrow by product type: SaaS → [Saaspo](./design/design-galleries/saaspo.md),
   [SaaS Landing Page](./design/design-galleries/saas-landing-page.md);
   app flows → [Mobbin](./design/design-galleries/mobbin.md);
   portfolios → [Folios Gallery](./design/design-galleries/folios-gallery.md).
3. Narrow by section when one part is the problem: heroes →
   [Supahero](./design/design-galleries/supahero.md); nav →
   [Navbar Gallery](./design/design-galleries/navbar-gallery.md); footers →
   [Footer Design](./design/design-galleries/footer-design.md); CTAs →
   [CTA Gallery](./design/design-galleries/cta-gallery.md); by section type →
   [SEESAW](./design/design-galleries/seesaw.md).
4. Motion references: [60fps](./design/design-galleries/60fps.md).
5. Write a one-page brief: audience, tone (3 adjectives), 3 reference sites
   with what to borrow from each, and what to avoid.

## 2. Lock the visual system (tokens before components)

1. **Type** — pick one display + one text face. Free, licence-clear sources:
   [Fontshare](./design/type/fontshare.md), [Fontsource](./design/type/fontsource.md)
   (self-host Google/open fonts via npm). Fluid scale: [Utopia](./design/type/utopia.md).
   Commercial foundries such as [Klim](./design/type/klim.md) need a paid
   licence — check the doc.
2. **Color** — build the palette in OKLCH: [OKLCH](./design/color/oklch.md),
   [Huetone](./design/color/huetone.md); check contrast with
   [APCA](./design/color/apca.md).
3. **Spacing, radius, shadows** — set them as Tailwind theme tokens / CSS
   variables once. [Refactoring UI](./design/reading/refactoring-ui.md) and
   [Practical Typography](./design/reading/practical-typography.md) are the
   reference reads.
4. Optionally capture the system in a `DESIGN.md` for agents —
   see [Agents & MCP](./design/agents-mcp/README.md) for DESIGN.md tooling
   (e.g. [getdesign.md](./design/agents-mcp/getdesign-md.md)).

## 3. Pick components

1. Primitives: [shadcn/ui](./design/component-libraries/shadcn-ui.md) (copy-paste
   source, CLI) — the default. Need unstyled-only? [Radix](./design/component-libraries/radix.md),
   [Base UI](./design/component-libraries/base-ui.md),
   [Headless UI](./design/component-libraries/headless-ui.md).
2. Marketing blocks (heroes, pricing, features): [shadcnblocks](./design/component-libraries/shadcnblocks.md),
   [Tailark](./design/component-libraries/tailark.md),
   [HyperUI](./design/component-libraries/hyperui.md),
   [Preline UI](./design/component-libraries/preline-ui.md).
3. Animated / showpiece components: [Magic UI](./design/component-libraries/magic-ui.md),
   [Aceternity UI](./design/component-libraries/aceternity-ui.md),
   [Motion Primitives](./design/component-libraries/motion-primitives.md),
   [React Bits](./design/component-libraries/react-bits.md). Use sparingly —
   one or two per page.
4. Dashboards and charts: [Tremor](./design/component-libraries/tremor.md),
   [Evil Charts](./design/component-libraries/evil-charts.md).
5. Not on React? [daisyUI](./design/component-libraries/daisyui.md) and
   [Flowbite](./design/component-libraries/flowbite.md) work with plain
   Tailwind.

Check every pick's "Paywall and pricing": several of these are freemium with
pro blocks behind a licence.

## 4. Icons, imagery, motion, 3D

- Icons: one family per project. [Lucide](./design/icons/lucide.md),
  [Phosphor](./design/icons/phosphor.md), [Tabler](./design/icons/tabler-icons.md),
  [Hugeicons](./design/icons/hugeicons.md); search everything at once with
  [Iconify](./design/icons/iconify.md). Brand logos: [Simple Icons](./design/icons/simple-icons.md).
- Backgrounds and textures: [backgrounds.supply](./design/design-galleries/backgrounds-supply.md),
  [fffuel](./design/utilities/fffuel.md); shader backgrounds:
  [Paper Shaders](./design/shaders/paper-shaders.md).
- Motion: [Motion](./design/motion/motion.md) for React UI,
  [GSAP](./design/motion/gsap.md) for timelines and scroll,
  [Rive](./design/motion/rive.md) / [Lottie](./design/motion/lottie.md) for
  designer-made animations. Respect `prefers-reduced-motion`.
- 3D: [React Three Fiber](./design/3d/react-three-fiber.md) +
  [drei](./design/3d/drei.md) on [three.js](./design/3d/three-js.md).

## 5. Build with an agent

1. Give the agent the brief, the tokens, and the doc paths of every chosen
   tool. The docs' "How to use" and "Agent notes" sections are written for
   this.
2. Agent tooling worth knowing: [Claude Code](./design/development/claude-code.md),
   [Cursor](./design/development/cursor.md), [v0](./design/development/v0.md),
   design-quality skills such as [Impeccable](./design/agents-mcp/impeccable.md).
3. Polish pass: [Laws of UX](./design/reading/laws-of-ux.md),
   [Inclusive Components](./design/reading/inclusive-components.md) for
   accessibility, [Josh Comeau](./design/reading/josh-comeau.md) for CSS craft.

## 6. Ship

- Optimise images ([Squoosh](./design/utilities/squoosh.md)) and SVGs
  ([SVGOMG](./design/utilities/svgomg.md)).
- Generate OG images ([ogimagecn](./design/component-libraries/ogimagecn.md)).
- Deploy on [Vercel](./design/deploy/vercel.md),
  [Cloudflare](./design/deploy/cloudflare.md) or
  [Netlify](./design/deploy/netlify.md).
- Record a demo: [Screen Studio](./design/video-capture/screen-studio.md),
  [Remotion](./design/video-capture/remotion.md).

## Checklist

- [ ] Brief with 3 references and 3 tone adjectives
- [ ] Type pair + fluid scale chosen, licences checked
- [ ] OKLCH palette, contrast checked
- [ ] Tokens in Tailwind theme / CSS variables
- [ ] Component library + at most two showpiece components
- [ ] One icon family
- [ ] Every `paid` / `freemium` asset approved and licensed for client work
- [ ] No third-party assets committed that the licence forbids
- [ ] Reduced-motion and keyboard paths tested
