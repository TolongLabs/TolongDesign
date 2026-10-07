---
name: Vinext
slug: vinext
section: Development
section_slug: development
source_url: 'https://vinext.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Vite plugin running Next.js on Cloudflare.'
paywall: free
pricing_summary:
  'Completely free and open source under the MIT and Apache-2.0 licences.'
open_source: true
license: MIT
category_tags: [vite, nextjs, cloudflare, edge, rsc]
best_for: [running nextjs on cloudflare, fast vite builds, smaller bundles]
stack: [react, nextjs, vite, cloudflare-workers]
agent_friendly: true
last_verified: 2026-10-07
---

# Vinext

> Vite plugin running Next.js on Cloudflare. TolongLabs developers use Vinext to
> execute standard Next.js App Router applications on top of Vite and deploy
> directly to Cloudflare Workers with faster build times and smaller bundles.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [vinext.dev](https://vinext.dev/)                             |
| Paywall        | **Free** — 100% free and open source under MIT licence        |
| Open source    | Yes — MIT / Apache-2.0 (Cloudflare open-source project)       |
| Type           | Vite plugin and Next.js compatibility runtime                 |
| Works with     | Next.js 16, Vite, Cloudflare Workers, React Server Components |
| Best for       | Running Next.js on Cloudflare, fast Vite builds, edge deploy  |
| Agent-friendly | Yes — CLI deployment (`@vinext/cloudflare`), drop-in config   |

## What it is

Vinext is an open-source Vite plugin and runtime reimplementation of the Next.js
framework developed by Cloudflare. Instead of wrapping compiled Next.js build
artifacts with complex serverless shims, Vinext rebuilds the Next.js API surface
from the ground up directly on Vite's native module architecture.

By replacing Next.js's internal bundler with Vite, Vinext unlocks up to 2x
faster production builds and produces client bundles that are approximately 23%
smaller. It provides 94%+ compatibility with the Next.js 16 API specification,
including the App Router, Pages Router, React Server Components (RSC), server
actions, Incremental Static Regeneration (ISR), edge middleware, and route
handlers.

Vinext bridges Next.js code directly into the Cloudflare Workers ecosystem.
Developers can keep existing `app/`, `pages/`, and `next.config.js` project
structures while importing Cloudflare platform bindings (Workers KV, D1, R2, and
Vectorize) directly inside Server Components and Route Handlers without proxy
layers.

## Paywall and pricing

- **Free:** The Vinext plugin, runtime packages, documentation, and Cloudflare
  deployment tools are 100% free and open source.
- **Paid:** None. Cloudflare Workers infrastructure usage is billed separately
  under Cloudflare's standard free and paid developer plans.
- **Sign-up required?** No for local development. A Cloudflare account is
  required for live edge deployments.
- **Licence for client work:** MIT License. Permitted for commercial and client
  production applications.

Verified on the official Vinext documentation and GitHub repository on
2026-10-07.

## How to use

1. Add Vinext to an existing Next.js project:

```bash
bun add -d vinext @vinext/cloudflare
```

2. Create a `vite.config.ts` in your Next.js project root:

```typescript
import { defineConfig } from 'vite'
import { vinext } from 'vinext'

export default defineConfig({
  plugins: [vinext()]
})
```

3. Run the development server using Vite:

```bash
bunx vite
```

4. Use Cloudflare platform bindings directly in Server Components:

```tsx
// app/page.tsx
import { env } from 'cloudflare:workers'

export default async function HomePage() {
  // Directly query Cloudflare KV or D1 without proxy layers
  const cachedNotice = await env.MY_KV.get('announcement')

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Cloudflare Edge App</h1>
      <p className="mt-2 text-zinc-600">
        {cachedNotice ?? 'Welcome to TolongLabs'}
      </p>
    </main>
  )
}
```

5. Deploy directly to Cloudflare Workers:

```bash
bunx @vinext/cloudflare deploy
```

## Examples

- [Vinext Documentation](https://vinext.dev/docs) — Architecture overview,
  Cloudflare Workers integration, and deployment walkthroughs.
- [Vinext Compatibility Matrix](https://vinext.dev/compatibility) — Granular
  status breakdown tracking Next.js API features and edge shims.
- [Vinext Benchmarks](https://vinext.dev/benchmarks) — Build performance metrics
  and bundle size comparisons against Next.js 16.

## When to use it

- Use it when deploying existing or new Next.js App Router applications to
  Cloudflare Workers without the operational overhead of OpenNext wrappers.
- Use it when your team desires Vite's instantaneous HMR while retaining
  standard Next.js file-system routing and React Server Components.
- Skip it when targeting Vercel directly; standard Next.js and
  [v0](../development/v0.md) offer native first-party integrations.
- Skip it if you are building pure client SPAs with no server components; use
  [Vite](../development/vite.md) directly.

## Agent notes

- Official documentation: `https://vinext.dev/`.
- Retains existing Next.js conventions (`app/`, `next/navigation`, `next/image`,
  `next/headers`). Agents do not need to rewrite routing logic.
- Cloudflare bindings can be typed by generating worker types via
  `wrangler types`.
- Uses `@vitejs/plugin-rsc` under the hood and is forward-compatible with
  Rolldown in Vite 8.

## Alternatives in this repo

- [Vite](../development/vite.md) — Core frontend development server and bundler
  serving native ES modules.
- [Nue](../development/nue.md) — Ultra-lightweight HTML-first alternative to
  monolithic React and Next.js frameworks.

## Sources

- [Official site](https://vinext.dev/) — checked 2026-10-07
- [Vinext Documentation](https://vinext.dev/docs) — checked 2026-10-07
- [Vinext Compatibility](https://vinext.dev/compatibility) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
