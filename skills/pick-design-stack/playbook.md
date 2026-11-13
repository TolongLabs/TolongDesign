# Design playbook

How a TolongLabs developer (or their coding agent) goes from a client brief to a
design stack and a first page, using this repo. Every tool named here has a doc
with its paywall, licence, install steps and examples — open the doc before
committing to it.

## 0. Defaults

Unless the brief says otherwise:

| Decision   | Default                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | Next.js (App Router) + React + TypeScript                                                                                                                                                             |
| Styling    | Tailwind CSS                                                                                                                                                                                          |
| Budget     | **Free or freemium only**; any `paid` pick needs the client's OK                                                                                                                                      |
| Primitives | [shadcn/ui](../../catalogue/tools/component-libraries/shadcn-ui.md) on [Radix](../../catalogue/tools/component-libraries/radix.md) or [Base UI](../../catalogue/tools/component-libraries/base-ui.md) |
| Icons      | [Lucide](../../catalogue/tools/icons/lucide.md)                                                                                                                                                       |
| Motion     | [Motion](../../catalogue/tools/motion/motion.md)                                                                                                                                                      |
| Deploy     | [Vercel](../../catalogue/tools/deploy/vercel.md) or [Cloudflare](../../catalogue/tools/deploy/cloudflare.md)                                                                                          |

Shortlist anything else with `tolongdesign search` (checkout:
`bun run design -- search …`; see the generated `catalogue/README.md` for every
section).

## 1. Collect references (30–60 minutes)

Goal: 8–15 reference screenshots/links that agree on a direction.

1. Start broad in one or two whole-site galleries:
   [Land-book](../../catalogue/tools/design-galleries/land-book.md),
   [SiteInspire](../../catalogue/tools/design-galleries/siteinspire.md),
   [Minimal Gallery](../../catalogue/tools/design-galleries/minimal-gallery.md),
   [Awwwards](../../catalogue/tools/design-galleries/awwwards.md) (for ambitious
   brand work).
2. Narrow by product type: SaaS →
   [Saaspo](../../catalogue/tools/design-galleries/saaspo.md),
   [SaaS Landing Page](../../catalogue/tools/design-galleries/saas-landing-page.md);
   app flows → [Mobbin](../../catalogue/tools/design-galleries/mobbin.md);
   portfolios →
   [Folios Gallery](../../catalogue/tools/design-galleries/folios-gallery.md).
3. Narrow by section when one part is the problem: heroes →
   [Supahero](../../catalogue/tools/design-galleries/supahero.md); nav →
   [Navbar Gallery](../../catalogue/tools/design-galleries/navbar-gallery.md);
   footers →
   [Footer Design](../../catalogue/tools/design-galleries/footer-design.md);
   CTAs → [CTA Gallery](../../catalogue/tools/design-galleries/cta-gallery.md);
   by section type → [SEESAW](../../catalogue/tools/design-galleries/seesaw.md).
4. Motion references: [60fps](../../catalogue/tools/design-galleries/60fps.md).
5. Write a one-page brief: audience, tone (3 adjectives), 3 reference sites with
   what to borrow from each, and what to avoid.

## 2. Lock the visual system (tokens before components)

1. **Type** — pick one display + one text face. Free, licence-clear sources:
   [Fontshare](../../catalogue/tools/type/fontshare.md),
   [Fontsource](../../catalogue/tools/type/fontsource.md) (self-host Google/open
   fonts via npm). Fluid scale: [Utopia](../../catalogue/tools/type/utopia.md).
   Commercial foundries such as [Klim](../../catalogue/tools/type/klim.md) need
   a paid licence — check the doc.
2. **Color** — build the palette in OKLCH:
   [OKLCH](../../catalogue/tools/color/oklch.md),
   [Huetone](../../catalogue/tools/color/huetone.md); check contrast with
   [APCA](../../catalogue/tools/color/apca.md).
3. **Spacing, radius, shadows** — set them as Tailwind theme tokens / CSS
   variables once.
   [Refactoring UI](../../catalogue/tools/reading/refactoring-ui.md) and
   [Practical Typography](../../catalogue/tools/reading/practical-typography.md)
   are the reference reads.
4. Optionally capture the system in a `DESIGN.md` for agents — see
   [Agents & MCP](../../catalogue/tools/agents-mcp/README.md) for DESIGN.md
   tooling (e.g.
   [getdesign.md](../../catalogue/tools/agents-mcp/getdesign-md.md)).

## 3. Pick components

1. Primitives:
   [shadcn/ui](../../catalogue/tools/component-libraries/shadcn-ui.md)
   (copy-paste source, CLI) — the default. Need unstyled-only?
   [Radix](../../catalogue/tools/component-libraries/radix.md),
   [Base UI](../../catalogue/tools/component-libraries/base-ui.md),
   [Headless UI](../../catalogue/tools/component-libraries/headless-ui.md).
2. Marketing blocks (heroes, pricing, features):
   [shadcnblocks](../../catalogue/tools/component-libraries/shadcnblocks.md),
   [Tailark](../../catalogue/tools/component-libraries/tailark.md),
   [HyperUI](../../catalogue/tools/component-libraries/hyperui.md),
   [Preline UI](../../catalogue/tools/component-libraries/preline-ui.md).
3. Animated / showpiece components:
   [Magic UI](../../catalogue/tools/component-libraries/magic-ui.md),
   [Aceternity UI](../../catalogue/tools/component-libraries/aceternity-ui.md),
   [Motion Primitives](../../catalogue/tools/component-libraries/motion-primitives.md),
   [React Bits](../../catalogue/tools/component-libraries/react-bits.md). Use
   sparingly — one or two per page.
4. Dashboards and charts:
   [Tremor](../../catalogue/tools/component-libraries/tremor.md),
   [Evil Charts](../../catalogue/tools/component-libraries/evil-charts.md).
5. Not on React? [daisyUI](../../catalogue/tools/component-libraries/daisyui.md)
   and [Flowbite](../../catalogue/tools/component-libraries/flowbite.md) work
   with plain Tailwind.

Check every pick's "Paywall and pricing": several of these are freemium with pro
blocks behind a licence.

## 4. Icons, imagery, motion, 3D

- Icons: one family per project.
  [Lucide](../../catalogue/tools/icons/lucide.md),
  [Phosphor](../../catalogue/tools/icons/phosphor.md),
  [Tabler](../../catalogue/tools/icons/tabler-icons.md),
  [Hugeicons](../../catalogue/tools/icons/hugeicons.md); search everything at
  once with [Iconify](../../catalogue/tools/icons/iconify.md). Brand logos:
  [Simple Icons](../../catalogue/tools/icons/simple-icons.md).
- Backgrounds and textures:
  [backgrounds.supply](../../catalogue/tools/design-galleries/backgrounds-supply.md),
  [fffuel](../../catalogue/tools/utilities/fffuel.md); shader backgrounds:
  [Paper Shaders](../../catalogue/tools/shaders/paper-shaders.md).
- Motion: [Motion](../../catalogue/tools/motion/motion.md) for React UI,
  [GSAP](../../catalogue/tools/motion/gsap.md) for timelines and scroll,
  [Rive](../../catalogue/tools/motion/rive.md) /
  [Lottie](../../catalogue/tools/motion/lottie.md) for designer-made animations.
  Respect `prefers-reduced-motion`.
- 3D: [React Three Fiber](../../catalogue/tools/3d/react-three-fiber.md) +
  [drei](../../catalogue/tools/3d/drei.md) on
  [three.js](../../catalogue/tools/3d/three-js.md).
- 3D characters: [VRoid Studio](../../catalogue/tools/3d/vroid-studio.md) model,
  loaded with [three-vrm](../../catalogue/tools/3d/three-vrm.md), animated with
  [Mixamo](../../catalogue/tools/3d/mixamo.md) clips. See the recipe below.

### Recipe: an atmospheric 3D character scene

For example, a girl with an umbrella walks through a rainy street into a
convenience store. The character comes from existing tools. The agent writes the
scene, the effects and the controls in three.js. It takes many prompt rounds,
not one.

1. **Character:** make or pick a character in
   [VRoid Studio](../../catalogue/tools/3d/vroid-studio.md) and export it as
   `.vrm`. Check its licence.
2. **Motion:** download idle, walk and run clips from
   [Mixamo](../../catalogue/tools/3d/mixamo.md) as FBX.
3. **Load and animate:** load the model with
   [three-vrm](../../catalogue/tools/3d/three-vrm.md). Retarget the clips with
   the `loadMixamoAnimation.js` helper from its humanoidAnimation example. Blend
   the clips by movement speed.
4. **Scene:** have the agent build the street and the shop from boxes and
   planes. Give the shelves canvas-drawn product textures. Add props from
   [Poly Haven](../../catalogue/tools/3d/poly-haven.md) where boxes look too
   plain.
5. **Look:** use a dark blue night palette with warm shop light. Make rain from
   an `InstancedMesh` of thin streaks with ripple decals. Make wet ground with a
   reflector material ([drei](../../catalogue/tools/3d/drei.md)
   `MeshReflectorMaterial`, or the three.js `Reflector`). Add bloom on signs and
   windows.
6. **Play:** add a third-person follow camera and WASD or tap-to-move controls.
   Trigger small events by position, such as closing the umbrella at the door.
7. **Prompt:** start from a three.js prompt on
   [Prompt Motion](../../catalogue/tools/motion/prompt-motion.md). Then fix one
   thing per round: character, then motion, then lighting, then details.

## 5. Build with an agent

1. Give the agent the brief, the tokens, and the doc paths of every chosen tool.
   The docs' "How to use" and "Agent notes" sections are written for this.
2. Agent tooling worth knowing:
   [Claude Code](../../catalogue/tools/development/claude-code.md),
   [Cursor](../../catalogue/tools/development/cursor.md),
   [v0](../../catalogue/tools/development/v0.md), design-quality skills such as
   [Impeccable](../../catalogue/tools/agents-mcp/impeccable.md).
3. Polish pass: [Laws of UX](../../catalogue/tools/reading/laws-of-ux.md),
   [Inclusive Components](../../catalogue/tools/reading/inclusive-components.md)
   for accessibility,
   [Josh Comeau](../../catalogue/tools/reading/josh-comeau.md) for CSS craft.

## 6. Ship

- Optimise images ([Squoosh](../../catalogue/tools/utilities/squoosh.md)) and
  SVGs ([SVGOMG](../../catalogue/tools/utilities/svgomg.md)).
- Generate OG images
  ([ogimagecn](../../catalogue/tools/component-libraries/ogimagecn.md)).
- Deploy on [Vercel](../../catalogue/tools/deploy/vercel.md),
  [Cloudflare](../../catalogue/tools/deploy/cloudflare.md) or
  [Netlify](../../catalogue/tools/deploy/netlify.md).
- Record a demo:
  [Screen Studio](../../catalogue/tools/video-capture/screen-studio.md),
  [Remotion](../../catalogue/tools/video-capture/remotion.md).

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
