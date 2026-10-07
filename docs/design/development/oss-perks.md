---
name: OSS Perks
slug: oss-perks
section: Development
section_slug: development
source_url: 'https://ossperks.com/'
designeer_url: 'https://designeer.xyz/build'
designeer_blurb: 'Free cloud credits for open-source maintainers.'
paywall: free
pricing_summary:
  'Completely free public directory and CLI tool with no fees or paid plans.'
open_source: true
license: MIT
category_tags: [open-source, credits, infrastructure, maintainers, cli]
best_for: [funding open source, infrastructure credits, developer grants]
stack: []
agent_friendly: true
last_verified: 2026-10-07
---

# OSS Perks

> Free cloud credits for open-source maintainers. TolongLabs developers use OSS
> Perks to discover and claim free infrastructure credits, hosting grants, and
> developer tool sponsorships for eligible open-source projects.

## At a glance

| Field          | Value                                                          |
| -------------- | -------------------------------------------------------------- |
| Source         | [ossperks.com](https://ossperks.com/)                          |
| Paywall        | **Free** — 100% free directory and open-source CLI             |
| Open source    | Yes — MIT (permissive public tooling)                          |
| Type           | Developer grant directory and eligibility verification CLI     |
| Works with     | GitHub, GitLab, terminal, modern web browsers                  |
| Best for       | Funding open source, infrastructure credits, developer perks   |
| Agent-friendly | Yes — terminal CLI (`ossperks`), automated qualification check |

## What it is

OSS Perks is a comprehensive directory and command-line utility that indexes
free credits, hosting programs, software licenses, and cloud infrastructure
available to open-source project maintainers. Instead of forcing developers to
hunt across fragmented corporate vendor blogs, OSS Perks aggregates over 50
structured sponsorship programs and 160+ individual perks in one searchable hub.

The directory catalogues high-value sponsorship packages across multiple
categories, including hosting and deployment (e.g., $3,600 in Vercel platform
credits), AI and machine learning (free GitHub Copilot Pro access for active
maintainers), observability (Sentry's 5M free monthly errors), development tools
(free JetBrains All Products Pack licenses), and cloud security (Cloudflare
Project Alexandria recurring credits).

In addition to its web interface, OSS Perks includes a zero-config CLI
(`ossperks`). The CLI can inspect a local git repository, fetch live telemetry
from the GitHub or GitLab API, and automatically evaluate whether the repository
meets the star counts, commit activity, and licensing criteria required by each
sponsorship program.

## Paywall and pricing

- **Free:** The web catalog, CLI application, and eligibility verification
  tooling are 100% free with no commercial tiers.
- **Paid:** None.
- **Sign-up required?** No. Browsing programs and running the CLI require no
  account.
- **Licence for client work:** Free directory. Listed credits apply to
  qualifying public open-source repositories according to each vendor's stated
  policies.

Verified on the official OSS Perks website and CLI documentation on 2026-10-07.

## How to use

1. Browse programs on the web: Visit `https://ossperks.com/programs` and filter
   by category (Hosting, Observability, AI, Developer Tools).
2. Install or execute the zero-config CLI via Bun:

```bash
# Run directly without global installation
bunx ossperks
```

3. List all available perks in the terminal:

```bash
bunx ossperks list
```

4. Automatically check if your current repository qualifies: Navigate to your
   open-source project root and run `check`:

```bash
cd my-open-source-repo
bunx ossperks check
```

The CLI inspects your repo's remote origin, queries GitHub for star count,
license type, and recent release frequency, and prints a qualified program list.

5. View detailed application instructions for a specific provider:

```bash
bunx ossperks show vercel
```

## Examples

- [OSS Perks Program Directory](https://ossperks.com/programs) — Complete list
  of active cloud credits, hosting tiers, and tool sponsorships.
- [OSS Perks CLI Documentation](https://ossperks.com/cli) — Guide detailing CLI
  commands (`list`, `show`, `check`, `search`, `open`).
- [OSS Perks Categories Overview](https://ossperks.com/categories) — Categorized
  view grouping programs by infrastructure domain.

## When to use it

- Use it when launching or maintaining an open-source library to offset
  infrastructure, CI/CD, and error-monitoring hosting costs.
- Use the `ossperks check` command in repository audits to identify unclaimed
  sponsorship benefits.
- Skip it for commercial, closed-source client applications that do not qualify
  for open-source grants; see [AI Stack](../development/ai-stack.md).
- Skip it when searching for specialized frontend utilities and indie tools;
  explore [BuilderTools](../development/buildertools.md).

## Agent notes

- Official site: `https://ossperks.com/`.
- CLI package: `ossperks` (executable on-demand via `bunx ossperks`).
- The `ossperks check` command requires git remote origins pointing to public
  GitHub or GitLab repositories to query qualifying metrics.
- Output from `ossperks show <slug>` contains direct application URLs and exact
  eligibility criteria formatted in clear terminal text.

## Alternatives in this repo

- [AI Stack](../development/ai-stack.md) — Open-source directory and CLI for
  comparing AI architectures and syncing local agent configurations.
- [BuilderTools](../development/buildertools.md) — Showcase of focused developer
  tools and utilities crafted by independent builders.

## Sources

- [Official site](https://ossperks.com/) — checked 2026-10-07
- [CLI documentation](https://ossperks.com/cli) — checked 2026-10-07
- [Designeer listing](https://designeer.xyz/build)
