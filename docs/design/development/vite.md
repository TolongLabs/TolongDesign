---
name: Vite
slug: vite
section: Development
section_slug: development
source_url: 'https://vite.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Blazing fast frontend build and dev tool.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [bundler, dev-server, hmr, build-tool, frontend]
best_for: [spa development, fast hmr, modern frontend builds]
stack: ['javascript', 'typescript', 'react', 'vue', 'svelte']
execution_mode: package
surface: ['development']
status: active
agent_friendly: true
last_verified: 2026-10-07
---

# Vite

> Blazing fast frontend build and dev tool. TolongLabs developers choose Vite
> for near-instant server starts, lightning-fast Hot Module Replacement (HMR),
> and battle-tested production bundling across React, Vue, and vanilla setups.

## At a glance

| Field          | Value                                                      |
| -------------- | ---------------------------------------------------------- |
| Source         | [vite.dev](https://vite.dev/)                              |
| Paywall        | **Free** — 100% free and open source under MIT licence     |
| Open source    | Yes — MIT ([GitHub](https://github.com/vitejs/vite))       |
| Type           | Frontend build tool and local development server           |
| Works with     | React, Vue, Svelte, Solid, Preact, TypeScript, CSS         |
| Best for       | Single-page applications, fast HMR, modern frontend builds |
| Agent-friendly | Yes — official CLI (`create-vite`), npm packages, plugins  |

## What it is

Vite (French for "quick", pronounced `/vit/`) is a next-generation frontend
toolchain created by Evan You and maintained by the Vite core team. It addresses
the performance bottlenecks of traditional bundlers by serving source code over
native ES modules (ESM) during development, offloading bundling to the browser.

During development, Vite uses esbuild to pre-bundle dependencies up to 100x
faster than JavaScript-based tools. Source files are transformed on-demand as
requested by the browser, ensuring startup times remain instantaneous regardless
of application scale. Hot Module Replacement (HMR) stays sharp and precise
because file changes only invalidate the specific module updated.

For production builds, Vite bundles code with Rollup (and the upcoming
Rust-based Rolldown engine), generating optimized static assets with automated
CSS code-splitting, async chunk loading, and tree-shaking. Its rich plugin
ecosystem extends Rollup's plugin interface to cover frameworks, SVG transforms,
and edge runtimes.

## Paywall and pricing

- **Free:** The complete Vite core, CLI, documentation, and official plugins are
  100% free and open source.
- **Paid:** None. There are no paid tiers, commercial licenses, or feature
  restrictions.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Permitted for unrestricted use in
  commercial, proprietary, and client projects.

Verified on the official Vite documentation and GitHub repository on 2026-10-07.

## How to use

1. Scaffold a new project using Bun:

```bash
bun create vite my-app --template react-ts
cd my-app
bun install
```

2. Configure `vite.config.ts` with required plugins and path aliases:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
```

3. Run the development server or build for production:

```bash
# Start lightning-fast local dev server with HMR
bun run dev

# Bundle for production with Rollup optimization
bun run build

# Preview production build locally
bun run preview
```

## Examples

- [Vite Official Guide](https://vite.dev/guide/) — Getting started documentation
  covering features, CLI flags, and build pipelines.
- [Vite Configuration Reference](https://vite.dev/config/) — Complete API schema
  for server, build, and plugin configuration options.
- [Vite Plugin Directory](https://vite.dev/plugins/) — Official index of
  framework plugins, SSR utilities, and community integrations.

## When to use it

- Use it when developing modern single-page applications (SPAs), internal admin
  tools, or marketing interfaces using React, Vue, Svelte, or TypeScript.
- Use it when your team demands instantaneous feedback loops and sub-second HMR
  during component styling and layout iteration.
- Skip it when your architecture requires full-stack edge routing and Next.js
  APIs on Cloudflare; consider [Vinext](../development/vinext.md) instead.
- Skip it when seeking a zero-dependency HTML-first micro-framework; explore
  [Nue](../development/nue.md).

## Agent notes

- Official documentation: `https://vite.dev/`.
- Fast bootstrapping: coding agents can initialize projects non-interactively
  using `bun create vite my-project --template react-ts`.
- Path aliases defined in `vite.config.ts` must match `compilerOptions.paths` in
  `tsconfig.json` to prevent TypeScript resolution errors.
- Environmental variables exposed to client bundles must be prefixed with
  `VITE_` (accessed via `import.meta.env.VITE_*`).

## Alternatives in this repo

- [Vinext](../development/vinext.md) — Vite plugin from Cloudflare that runs
  Next.js App Router applications on top of Vite and edge runtimes.
- [Nue](../development/nue.md) — Minimalist HTML-first web framework and static
  builder designed as a lightweight alternative to modern bundlers.

## Sources

- [Official site](https://vite.dev/) — checked 2026-10-07
- [Vite Documentation](https://vite.dev/guide/) — checked 2026-10-07
- [GitHub repository](https://github.com/vitejs/vite) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
