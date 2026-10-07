---
name: nuqs
slug: nuqs
section: Development
section_slug: development
source_url: 'https://nuqs.47ng.com/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Type-safe URL search params for React.'
paywall: free
pricing_summary: 'Completely free and open source under the MIT licence.'
open_source: true
license: MIT
category_tags: [react, search-params, url-state, type-safe, routing]
best_for: [filtering interfaces, search state, shareable urls]
stack: [react, nextjs, remix, vite]
agent_friendly: true
last_verified: 2026-10-07
---

# nuqs

> Type-safe URL search params for React. TolongLabs developers use nuqs to
> synchronize UI state directly into URL query parameters with zero boilerplate,
> full TypeScript safety, and seamless React Server Component (RSC)
> compatibility.

## At a glance

| Field          | Value                                                         |
| -------------- | ------------------------------------------------------------- |
| Source         | [nuqs.47ng.com](https://nuqs.47ng.com/)                       |
| Paywall        | **Free** — 100% free and open source under MIT licence        |
| Open source    | Yes — MIT ([GitHub](https://github.com/47ng/nuqs))            |
| Type           | React state management library for URL search parameters      |
| Works with     | React, Next.js (App & Pages), Remix, React Router, Vite, SPAs |
| Best for       | Filtering interfaces, table sorting, shareable search states  |
| Agent-friendly | Yes — npm package (`nuqs`), concise hooks API, playground     |

## What it is

nuqs (formerly `next-usequerystate`) is a type-safe URL search params state
manager for React created by François Best. It functions as a drop-in
replacement for React's native `useState` hook, persisting state values directly
inside the browser's URL query string rather than in ephemeral component memory.

By tying state to the URL, nuqs makes views intrinsically shareable,
bookmarkable, and resistant to page refreshes without requiring custom string
parsing or manual router serialization. It provides pre-configured parsers for
strings, integers, floats, booleans, timestamps, JSON objects, and arrays.

nuqs supports modern React architectures natively. In Next.js App Router
environments, nuqs offers shallow client-side updates by default while allowing
developers to selectively notify the server to re-render React Server Components
(RSC) with throttle controls. It also includes server cache utilities that allow
nested RSCs to read validated search parameters without prop drilling.

## Paywall and pricing

- **Free:** The complete nuqs library, documentation, test adapters, and
  interactive playground are 100% free and open source.
- **Paid:** None. Supported by community sponsorships and corporate backers.
- **Sign-up required?** No.
- **Licence for client work:** MIT License. Free for commercial, proprietary,
  and client software.

Verified on the official nuqs website and GitHub repository on 2026-10-07.

## How to use

1. Install nuqs in your project:

```bash
bun add nuqs
```

2. Wrap your application with the appropriate adapter (for Next.js App Router,
   wrap your root layout with `NuqsAdapter`):

```tsx
// app/layout.tsx
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  )
}
```

3. Manage URL query state in client components using `useQueryState`:

```tsx
'use client'

import { useQueryState, parseAsInteger, parseAsString } from 'nuqs'

export function ProductFilters() {
  const [search, setSearch] = useQueryState(
    'q',
    parseAsString.withDefault('').withOptions({ shallow: true })
  )

  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  return (
    <div className="flex gap-4 p-4">
      <input
        type="search"
        placeholder="Filter products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded border px-3 py-1.5 text-sm"
      />
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="rounded bg-black px-4 py-1.5 text-sm text-white"
      >
        Page: {page}
      </button>
    </div>
  )
}
```

## Examples

- [nuqs Documentation](https://nuqs.47ng.com/docs) — Comprehensive guide
  covering parsers, batch updates with `useQueryStates`, and server-side
  adapters.
- [nuqs Playground](https://nuqs.47ng.com/playground) — Interactive sandbox
  demonstrating URL updates, throttling, and history replacement options.
- [nuqs Component Registry](https://nuqs.47ng.com/registry) — Curated collection
  of ready-made URL-bound UI components including search inputs and pagination.

## When to use it

- Use it whenever building data tables, search filters, modal toggles, tabs, or
  multi-step wizards where users expect URLs to preserve their active view.
- Use it when you need strict TypeScript type checking for URL parameters
  instead of casting unvalidated `searchParams` strings.
- Skip it when your application does not use React; see
  [Nue](../development/nue.md) for HTML-first, URL-first micro-frameworks.
- Skip it when scaffolding an entire full-stack project from scratch; consider
  [Better T Stack](../development/better-t-stack.md).

## Agent notes

- Official documentation: `https://nuqs.47ng.com/`.
- In Next.js App Router projects, always verify that `<NuqsAdapter>` is wrapped
  around the root layout or page tree, or `useQueryState` will throw an error.
- Use `parseAs*` helpers with `.withDefault()` to guarantee non-null types and
  clean URLs (default values are omitted from the query string automatically).
- Batch multiple query parameters into a single URL commit using
  `useQueryStates` to prevent unnecessary browser history pollution.

## Alternatives in this repo

- [Better T Stack](../development/better-t-stack.md) — CLI scaffolding modern
  full-stack TypeScript setups with pre-configured routing and state.
- [Vinext](../development/vinext.md) — Vite-based Next.js runtime plugin
  offering fast HMR and edge deployments.

## Sources

- [Official site](https://nuqs.47ng.com/) — checked 2026-10-07
- [nuqs Documentation](https://nuqs.47ng.com/docs) — checked 2026-10-07
- [GitHub repository](https://github.com/47ng/nuqs) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
