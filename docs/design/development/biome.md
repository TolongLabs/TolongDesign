---
name: Biome
slug: biome
section: Development
section_slug: development
source_url: 'https://biomejs.dev/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Fast Rust-based formatter and code linter.'
paywall: free
pricing_summary:
  'Completely free and open source under the MIT and Apache-2.0 licences.'
open_source: true
license: MIT
category_tags: [linter, formatter, rust, code-quality, toolchain]
best_for: [code formatting, static analysis, fast linting]
stack: [javascript, typescript, jsx, json, css]
agent_friendly: true
last_verified: 2026-10-07
---

# Biome

> Fast Rust-based formatter and code linter. TolongLabs developers use Biome to
> replace ESLint and Prettier with a single, sub-millisecond Rust binary that
> formats, lints, and sorts imports across JavaScript and TypeScript codebases.

## At a glance

| Field          | Value                                                               |
| -------------- | ------------------------------------------------------------------- |
| Source         | [biomejs.dev](https://biomejs.dev/)                                 |
| Paywall        | **Free** — 100% free and open source                                |
| Open source    | Yes — MIT / Apache-2.0 ([GitHub](https://github.com/biomejs/biome)) |
| Type           | Rust-based web development toolchain (linter & formatter)           |
| Works with     | JavaScript, TypeScript, JSX, TSX, JSON, CSS, GraphQL                |
| Best for       | Code formatting, static analysis, fast linting                      |
| Agent-friendly | Yes — CLI commands, JSON output, VS Code / editor extensions        |

## What it is

Biome is a high-performance web toolchain written in Rust, born as a community
fork of the Rome project. Designed to unify and accelerate frontend tooling,
Biome combines code formatting, linting, import sorting, and syntax analysis
into a single standalone executable.

Biome achieves 97%+ compatibility with Prettier's formatting rules while
executing up to 25 to 30 times faster. Its linter includes hundreds of built-in
rules drawn from ESLint and typescript-eslint, identifying syntax traps,
security flaws, accessibility violations, and performance issues in real time
with detailed, helpful terminal diagnostics.

Because Biome parses source files once into a unified concrete syntax tree
(CST), running a combined format and lint check processes thousands of files in
a fraction of a second. It eliminates the fragile dependency graphs and plugin
version mismatches common in multi-tool JavaScript setups.

## Paywall and pricing

- **Free:** Biome CLI, language server (LSP), documentation, and GitHub Action
  integrations are 100% free and open source.
- **Paid:** None. No commercial tiers or paywalled features.
- **Sign-up required?** No.
- **Licence for client work:** Dual-licensed under the MIT License and Apache
  License 2.0. Permitted for unrestricted use in commercial, client, and
  enterprise software.

Verified on the official Biome documentation and GitHub repository on
2026-10-07.

## How to use

1. Install Biome as a development dependency:

```bash
bun add -d --exact @biomejs/biome
```

2. Initialize configuration file (`biome.json`):

```bash
bunx @biomejs/biome init
```

3. Customize rules in `biome.json`:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "style": {
        "useConst": "error"
      }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "asNeeded"
    }
  }
}
```

4. Format and lint your codebase:

```bash
# Check code formatting and lint rules
bunx @biomejs/biome check ./src

# Automatically apply fixes, sort imports, and format
bunx @biomejs/biome check --write ./src
```

## Examples

- [Biome Getting Started Guide](https://biomejs.dev/guides/getting-started/) —
  Official walkthrough for project installation, CLI flags, and CI pipelines.
- [Biome JavaScript Linter Rule Catalog](https://biomejs.dev/linter/javascript/rules/)
  — Directory of JavaScript and TypeScript lint rules grouped by category.
- [Biome Prettier Migration](https://biomejs.dev/guides/migrate-eslint-prettier/)
  — Step-by-step guide for migrating existing ESLint and Prettier configs to
  Biome.

## When to use it

- Use it on all new web projects to enforce instant, uniform formatting and
  prevent common JavaScript/TypeScript runtime mistakes without multi-second CI
  delays.
- Use it when coding agents frequently touch large files; Biome's speed allows
  continuous auto-formatting on every file write without lag.
- Skip it when your codebase relies strictly on niche ESLint AST plugins that
  lack native equivalents; check [BuilderTools](../development/buildertools.md)
  for alternative specialized tooling.
- Skip it if you are already using Vite-native build plugins exclusively; see
  [Vite](../development/vite.md).

## Agent notes

- Official site: `https://biomejs.dev/`.
- CI automation: run `bunx @biomejs/biome ci` for strict exit codes on lint or
  formatting errors.
- Machine-friendly diagnostics: pass `--reporter=json` to Biome CLI commands to
  receive structured diagnostic errors easily parsed by AI coding agents.
- Automatically handles `.gitignore` files when `vcs.useIgnoreFile: true` is
  configured in `biome.json`.

## Alternatives in this repo

- [BuilderTools](../development/buildertools.md) — Directory of focused
  independent developer utilities and shipping workflows.
- [Vite](../development/vite.md) — Fast frontend development server and bundler
  that handles module transformations and HMR.

## Sources

- [Official site](https://biomejs.dev/) — checked 2026-10-07
- [Biome Documentation](https://biomejs.dev/guides/getting-started/) — checked
  2026-10-07
- [GitHub repository](https://github.com/biomejs/biome) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
