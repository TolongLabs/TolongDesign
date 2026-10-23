---
name: ASCII Magic
slug: ascii-magic
section: Utilities
section_slug: utilities
source_url: https://www.ascii-magic.com/
designeer_url: https://designeer.xyz/utilities
designeer_blurb: Not on Designeer; official URL used.
paywall: freemium
pricing_summary:
  'Free tier with 16 base styles and unlimited local exports; Pro is $8/month
  (or $4/month billed yearly) for 100+ styles, 4K export and full effects. AI
  generative renders use credits.'
open_source: false
license: proprietary
category_tags:
  [ascii-art, dithering, pixel-art, image-effects, video-effects, mcp]
best_for:
  [ascii art, dithering, retro aesthetic, video effects, agent-driven renders]
stack: []
agent_friendly: true
execution_mode: mcp-skill
surface: [web-asset, video]
status: active
last_verified: 2026-10-23
---

# ASCII Magic

> Free ASCII art generator and image & video effects studio. The deepest
> image-to-ASCII tool in this repo — 100+ styles, a dithering engine, video
> support and an MCP server so agents can drive renders directly.

## At a glance

| Field          | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Source         | [ascii-magic.com](https://www.ascii-magic.com/)                    |
| Paywall        | **Freemium** — Free with 16 base styles; Pro $8/mo ($4/mo yearly)  |
| Open source    | No — proprietary, rendering runs client-side                       |
| Type           | Web app: image/video → ASCII, pixel, dither, voxel and 100+ styles |
| Works with     | PNG, JPG, WebP · MP4, MOV, WebM input · PNG export up to 4K        |
| Best for       | ASCII art, dithering, retro/brutalist hero visuals, video-to-ASCII |
| Agent-friendly | Yes — MCP server, agents.md, no-account local rendering            |

## What it is

ASCII Magic (ascii-magic.com), built by developer Kailash, is a browser-based
studio that turns photos and videos into stylized art: text-based ASCII or
rendered images in "ASCII, pixel, voxel, glass, halftone, glitch, LEGO, oil
paint and more". It claims over 100 styles — 16 free base styles (Characters,
ASCII Studio, Block, Dots, Braille, Dither, Pixel Art, Mosaic, LEGO, Voxel) plus
100+ Pro styles grouped into families like Glass, Glitch & Signal, and Print &
Paper — and 171 generative AI presets "from 1-bit dither and claymation to
stained glass, oil portraits, neon signs".

Beyond single-file conversion it has three deeper surfaces: an editor with a
dither engine (15 algorithms, 15 palettes, custom palette editor), stackable
post-processing effects (vignette, scan lines, CRT curvature, chromatic
aberration, bloom, glitch, RGB split, halftone…), colour grading and motion
presets; **Flow**, a node pipeline (Source → Styles → Shaping → Image → Output);
and **Compose**, a multi-layer canvas with GLSL backdrops.

What sets it apart from this repo's other ASCII converters is breadth plus
automation: video input, animation export, an MCP server for agent-driven
renders up to 4K, and 19 one-click recipes (Matrix, Noir, Vaporwave, Blueprint).
Rendering for non-AI styles happens entirely in-browser — "no upload, no
signup".

## Paywall and pricing

- **Free ($0 forever):** "No account, no watermark, no time limit." 16 base
  styles (ASCII, dither, pixel, voxel), 3 starter credits for generative renders
  with a free account, unlimited image and video exports, community recipes and
  presets. Commercial use of exports is allowed (you must hold the rights to the
  source photo/video).
- **Pro:** $8/month billed monthly (shown against a struck-through $12),
  $7/month quarterly, $4/month billed $48/year ("SAVE 50%"). Unlocks all 100+
  effects and shaders, 4K image and video export, 10 generative AI credits a
  month, priority render queue, and future effects while subscribed.
- **Credit packs (generative renders):** 50 credits $11.25 ($0.23 each, save
  10%); quantity options are 20, 50, 100, 200. "Credits never expire."
- **Sign-up required?** No — for local styles and exports. Yes — only for
  generative (AI) renders, which run server-side and consume credits.
- **Licence for client work:** commercial use of exports allowed on both plans.
- Checked 2026-10-23.

## How to use

1. Open [ascii-magic.com](https://www.ascii-magic.com/) and drop an image (PNG,
   JPG, WebP) or video (MP4, MOV, WebM) onto the editor.
2. Pick a style: start with the free base styles — Characters or ASCII Studio
   for classic ASCII, Dither for 1-bit retro, Pixel Art, Mosaic, LEGO, Voxel.
3. Tune shaping: resolution, character ramp, colour filters (7 named colour
   filters, 18 photographic filters).
4. Stack post-effects (scan lines, CRT curvature, bloom, glitch, RGB split…) and
   add motion presets (Wave, Ripple, Pulse, Scatter) for animation; motion speed
   is 0.25x–4x.
5. Or skip tuning: open **Recipes** and use a one-click look — Matrix Code
   Generator, Film Noir, Vaporwave, Bonsai Dither, C64 Palette Dither.
6. Export: image render scale 1x–4x (4K is Pro); animated output exports as
   video — exports are silent, so add audio in a separate editor. No watermark
   on any export. Copy-as-text and SVG export were removed in v2.
7. Deeper pipelines: build a node graph in **Flow** (Source → Styles → Shaping →
   Image → Output) or layer multiple renders in **Compose** with GLSL backdrops.
8. AI looks: pick from 171 generative presets, steer with a text prompt,
   strength (Subtle/Balanced/Strong/Full), aspect ratio, resolution (1K/2K/4K).
   Requires an account; each render consumes a credit.

**Agent-driven render (MCP)** — the whole pipeline is exposed over MCP (full
detail at [ascii-magic.com/mcp-server](https://www.ascii-magic.com/mcp-server)).
The server supports OAuth with dynamic client registration — the client
registers itself and opens a sign-in with the same ASCII Magic account used on
the site. No API key, no SDK. Free accounts connect too; the plan is read per
call, so Pro styles on a free account return a lock message.

Claude Code setup:

```bash
claude mcp add --transport http ascii-magic https://www.ascii-magic.com/mcp
# then run `claude`, type /mcp, pick ascii-magic → Authenticate
```

Per-folder registration: start Claude Code from the folder the command ran in.
Claude Desktop/claude.ai: Settings → Connectors → Add custom connector → paste
the URL. Cursor and any streamable-HTTP + OAuth client (VS Code, Windsurf, Zed):
point at the URL. Plain language works — "Use the gameboy palette with atkinson
dithering", "Give me that as a recipe code".

**The seven MCP tools** — agents pick by intent; no names needed:

| Tool                              | What it does                                                                                                                                                                                        |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stylize_image`                   | Render an image through the real engine; returns a download link (24 h) + small preview. Auto-dresses: curated look, post effects, fitted cell size, exposure rescue, upscale to ≥2560px long edge. |
| `suggest_styles`                  | Ranks styles for a specific image by brightness, contrast, detail, colour.                                                                                                                          |
| `list_styles`                     | Every render mode, dither palette and algorithm in this build, with tier needed.                                                                                                                    |
| `create_upload`                   | One-time link for sending a local file's bytes (Claude Code only — needs a shell; MCP itself cannot hand a file over).                                                                              |
| `encode_recipe` / `decode_recipe` | Turn a look into a shareable code and back; recipes reproduce exactly, with none of the automatic dressing.                                                                                         |
| `account_status`                  | Which account is connected and whether Pro styles will render.                                                                                                                                      |

Gotchas: the server runs in the cloud, so a local path never works — pass an
`http(s)` image URL, or use `create_upload` from Claude Code. The renderer
sleeps when idle; the first call takes ~20 s. Download links expire in 24 h;
uploaded sources are deleted within a day and never trained on.

## Examples

- [Recipes gallery](https://www.ascii-magic.com/recipes) — 19 named one-click
  looks (Matrix, Noir, Vaporwave, Blueprint); fastest way to a usable result.
- [Community gallery](https://www.ascii-magic.com/community) — wallpapers, video
  intros, halftone posters, cyberpunk edits and UI mockups made with the tool;
  submit work via the /submit form.
- [Styles library](https://www.ascii-magic.com/styles) — every style with
  previews; browse before rendering to pick by name in the MCP call.
- [Blog](https://www.ascii-magic.com/blog) — guides on photo-to-ASCII, dithering
  and video conversion; and comparison posts against Asciinator and ASCIIcraft.

## When to use it

- Use it when a project needs ASCII/retro text-mode visuals of any kind —
  heroes, loaders, video intros — especially video-to-ASCII or a specific
  dithered look; or when an agent should generate the art itself via MCP.
- Skip it when you need ASCII **text output as web-ready code** —
  [ascii.rest](../component-libraries/ascii-rest.md) ships animated ASCII as
  TypeScript components instead; or when you need a one-shot image-to-SVG/ANSI
  converter — [ASCIInator](asciinator.md) does those exports, which ASCII Magic
  dropped in v2. For pure text-to-ASCII banners,
  [ASCII (Kracked Devs)](ascii-kracked-devs.md) is faster.

## Agent notes

- MCP: `https://www.ascii-magic.com/mcp` — streamable HTTP with OAuth dynamic
  client registration. Plain unauthenticated fetches of `/mcp` return 401 with a
  `www-authenticate: Bearer` header pointing at
  `/.well-known/oauth-protected-resource/mcp`; auth server metadata lives at
  `/.well-known/oauth-authorization-server` (auth code + PKCE S256, dynamic
  registration at `/oauth/register`). Clients self-register; do not hand-roll
  the handshake — use the client's built-in OAuth flow.
- Free MCP tier: 15 free styles, full dither palette/algorithm set, recipe
  encode/decode. Pro MCP tier: all 100 styles, 28 post effects, generative
  presets, 4K export. Run `list_styles` first to learn what the account can
  render; Pro requests on free return an explicit lock message, never a silent
  substitution.
- [agents.md](https://www.ascii-magic.com/agents.md) documents the product for
  AI assistants; an FAQ also references a `Context.md` to paste into an AI.
- Render locally (no account) for anything non-generative — images never leave
  the browser. Generative styles run server-side and need credits.
- 4K export, Pro styles and the full effect stack are paywalled; the agents.md
  explicitly warns not to quote fixed prices and to check the live pricing page.
- Video exports are silent; no watermark on any export; commercial use OK with
  source rights.

## Alternatives in this repo

- [ASCIInator](asciinator.md) — free, typography-focused image-to-ASCII with
  SVG, HTML, ANSI and JSON exports (formats ASCII Magic dropped).
- [ASCII Studio](ascii-studio.md) — image and video to ASCII, simpler free path.
- [Dither Lab](dither-lab.md) — focused vintage dithering filters without the
  ASCII/generative breadth.
- [Squoosh](squoosh.md) — general image compression with dithered palette
  output, not an art tool.

## Sources

- [Official site](https://www.ascii-magic.com/) — checked 2026-10-23
- [Pricing](https://www.ascii-magic.com/pricing) — checked 2026-10-23
- [MCP server page](https://www.ascii-magic.com/mcp-server) — checked 2026-10-23
- [agents.md](https://www.ascii-magic.com/agents.md),
  [OAuth metadata](https://www.ascii-magic.com/.well-known/oauth-protected-resource/mcp)
  — checked 2026-10-23
