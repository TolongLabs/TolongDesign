---
name: 'Learn Kernels'
slug: 'learn-kernels'
section: 'Reading'
section_slug: 'reading'
source_url: 'https://learn-kernels.com/'
designeer_url: 'https://designeer.xyz/'
designeer_blurb: 'Interactive guide exploring GPU kernel programming.'
paywall: free
pricing_summary:
  'The interactive book and its documented chapter API are publicly available at
  no charge.'
open_source: false
license: unknown
category_tags: ['gpu', 'kernels', 'performance', 'programming']
best_for: ['gpu performance', 'kernel programming', 'technical study']
stack: ['cuda', 'triton', 'gpu']
agent_friendly: true
last_verified: 2026-10-07
---

# Learn Kernels

> Interactive guide exploring GPU kernel programming.

> Use it for a sourced, interactive path into GPU kernels and inference
> performance.

## At a glance

| Field          | Value                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------- |
| Source         | [learn-kernels.com](https://learn-kernels.com/)                                                    |
| Paywall        | **free** — The interactive book and its documented chapter API are publicly available at no charge |
| Open source    | No — unknown                                                                                       |
| Type           | Interactive technical book on GPU performance                                                      |
| Works with     | GPU kernels, CUDA, Triton, inference systems                                                       |
| Best for       | gpu performance, kernel programming, technical study                                               |
| Agent-friendly | Yes — public chapter API and MCP tools are documented without authentication                       |

## What it is

Learn Kernels is an interactive book about GPU kernel and inference performance.
It moves from GPU execution fundamentals through kernel optimization,
programming models, profiling, and inference systems.

The book links factual claims to primary sources and includes code explanations,
illustrations, and a further-reading collection. Its focus is performance
engineering rather than general web development.

The site also documents a public JSON API and MCP server for listing and
retrieving chapters. That makes the text accessible to agents as well as human
readers.

## Paywall and pricing

- The chapters and developer endpoints are publicly available without a listed
  paid tier.
- No account or API key is required for the documented chapter API and MCP
  tools.
- The site does not state an open-source content license in the pages checked;
  public access does not imply permission to republish the text.
- Checked 2026-10-07. No paid plan or pricing page was published.

Checked 2026-10-07. Prices can change; use the linked official page for current
terms.

## How to use

- Start with the introduction and follow the chapter order if the reader is new
  to GPU performance engineering.
- Use chapter links to jump directly to a topic such as memory coalescing,
  matrix multiplication, or inference scheduling.
- Follow the linked primary papers, guides, and repositories when a claim
  affects implementation or performance decisions.
- For an agent workflow, call the documented chapter API or connect to the MCP
  endpoint and request only relevant chapters.

```bash
curl https://learn-kernels.com/api/v1/chapters
curl https://learn-kernels.com/api/v1/chapters/introduction
```

## Examples

- [Why kernels matter](https://learn-kernels.com/chapters/introduction/why-kernels-matter)
  — Introduces the performance gap between naive code and hardware capability.
- [Threads, blocks, and warps](https://learn-kernels.com/chapters/foundations/threads-blocks-and-warps)
  — Explains the CUDA execution model.
- [Matrix multiplication](https://learn-kernels.com/chapters/kernel-optimization/matrix-multiplication)
  — Follows a core kernel optimization problem.

## When to use it

- Use it when a developer needs a rigorous introduction to GPU kernels or
  inference performance and can follow technical references.
- Skip it for web interface design or routine frontend performance; use web.dev
  for browser-facing optimization guidance.

## Agent notes

- The developer page documents API endpoints and an MCP server at
  https://learn-kernels.com/api/mcp.
- MCP tools include list_chapters and get_chapter; the site states that no
  authentication is required.
- Treat benchmark numbers and rapidly changing hardware claims as
  context-specific; follow the cited primary sources.
- The source is technical reading, not a GPU runtime, code package, or guarantee
  of optimized kernels.

## Alternatives in this repo

- [web.dev](../reading/web-dev.md) — For web platform performance and browser
  behavior.
- [Design Books](../reading/design-books.md) — For discovering books across
  product and visual design disciplines.

## Sources

- [Official book](https://learn-kernels.com/) — checked 2026-10-07
- [Developer API and MCP](https://learn-kernels.com/developers) — checked
  2026-10-07
- [Why kernels matter](https://learn-kernels.com/chapters/introduction/why-kernels-matter)
  — checked 2026-10-07
- [Threads, blocks, and warps](https://learn-kernels.com/chapters/foundations/threads-blocks-and-warps)
  — checked 2026-10-07
- [Matrix multiplication](https://learn-kernels.com/chapters/kernel-optimization/matrix-multiplication)
  — checked 2026-10-07
- [Further reading](https://learn-kernels.com/chapters/reading) — checked
  2026-10-07
- [Designeer listing](https://designeer.xyz/) — checked 2026-10-07; page was not
  readable in the research browser.
