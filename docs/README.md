# TolongDesign docs

The private design starting point for TolongLabs developers and their coding
agents. Use it at the start of any design work — a website, landing page,
product UI, 3D scene, motion piece or comic — to pick proven tools fast, know
what they cost, and get them producing real output.

## What is here

| Path                                               | What it is                                                                    |
| -------------------------------------------------- | ----------------------------------------------------------------------------- |
| [PLAYBOOK.md](./PLAYBOOK.md)                       | How to go from a brief to a design stack and a first page                     |
| [design/README.md](./design/README.md)             | The catalogue: 18 sections, counts, paywall breakdown                         |
| `design/<section>/README.md`                       | One table per section: every tool with paywall, open source, best for         |
| `design/<section>/<tool>.md`                       | One doc per tool: source, paywall, pricing, how to use, examples, agent notes |
| [design/people.md](./design/people.md)             | 132 design engineers worth following                                          |
| [`../data/index.json`](../data/index.json)         | Every doc's frontmatter as JSON, for scripts and agents                       |
| [`../data/catalogue.json`](../data/catalogue.json) | Designeer scrape plus hand-added tools (what exists)                          |

## Sections

| Section                                                       | Use it for                                              |
| ------------------------------------------------------------- | ------------------------------------------------------- |
| [Design Galleries](./design/design-galleries/README.md)       | Inspiration: real sites, landing pages, flows, sections |
| [Component Libraries](./design/component-libraries/README.md) | Production UI primitives, blocks and kits               |
| [Motion](./design/motion/README.md)                           | Animation libraries, springs, timing                    |
| [Interface Design](./design/interface-design/README.md)       | Design canvases, tokens, layout systems                 |
| [Type](./design/type/README.md)                               | Typefaces, pairings, font tooling                       |
| [Color](./design/color/README.md)                             | Palettes, contrast, color math                          |
| [Icons](./design/icons/README.md)                             | Icon families                                           |
| [3D](./design/3d/README.md)                                   | 3D modeling and WebGL engines                           |
| [Shaders](./design/shaders/README.md)                         | Fragment shaders, noise, canvas effects                 |
| [Comics](./design/comics/README.md)                           | Manga panels, balloons, tones, poses, backgrounds       |
| [Development](./design/development/README.md)                 | Editors, runtimes, local tooling                        |
| [Agents & MCP](./design/agents-mcp/README.md)                 | Coding agents, MCP servers, agent specs                 |
| [Utilities](./design/utilities/README.md)                     | Frontend developer utilities                            |
| [Desktop](./design/desktop/README.md)                         | Desktop productivity apps                               |
| [Video & Capture](./design/video-capture/README.md)           | Screen recording and demo tools                         |
| [Whiteboard](./design/whiteboard/README.md)                   | Infinite canvases for wireframes and architecture       |
| [Deploy](./design/deploy/README.md)                           | Hosting and edge platforms                              |
| [Reading](./design/reading/README.md)                         | Books, essays and tutorials on design engineering       |

## Designing a project

For cross-project use, follow [private CLI installation](./CLI.md). Verify the
installed release with `tolongdesign doctor --json`; its output identifies the
version, resource root, integrity status, and agent skill paths. The checkout
commands below remain available to maintainers.

For a use-case-aware brief, use [the project design workflow](./WORKFLOW.md) and
the `design-project` skill. It connects visual references, source-backed tool
choices, complete context, and rendered verification in the target project.
[Dictation landing page](./scenarios/dictation-landing.md) is the first
acceptance scenario, not a built example website.

```bash
bun run design -- search scroll --section motion --json
bun run design -- show gsap
bun run design -- context gsap react-three-fiber saaspo --brief "Dictation landing page" --json
```

The CLI is read-only and local. Search covers original full documents; context
preserves entire selected docs with sources, dates, and hashes. Galleries remain
useful references even without a direct agent integration. See the workflow for
using the source entrypoint from another project's directory.

## Finding a tool

```bash
bun install
bun run find -- --section component-libraries --stack react --paywall free
bun run find -- hero --section design-galleries
bun run find -- --agent --oss            # usable directly by a coding agent, open source
bun run find -- --paywall paid --json    # everything that costs money, as JSON
```

Agents can also read `data/index.json` directly or query the knowledge graph in
`graphify-out/` (`/graphify query "<question>"`).

## Reading a tool doc

Every tool doc follows [the template](../templates/tool-doc.md):

- **Frontmatter** — `paywall` (`free` | `freemium` | `paid` | `unknown`),
  `pricing_summary`, `open_source`, `license`, `stack`, `best_for`,
  `agent_friendly`, `last_verified`.
- **At a glance** — the table to skim.
- **What it is** — what the product is and what makes it distinct.
- **Paywall and pricing** — free vs paid, sign-up, client-work licensing.
- **How to use** — numbered steps; install command and snippet for code.
- **Examples** — at least three real links.
- **When to use it** — and what to use instead.
- **Agent notes** — docs URL, llms.txt / MCP, packages, gotchas.
- **Alternatives in this repo** — linked sibling docs.
- **Sources** — every page used, with the date checked.

## Paywall legend

| Value      | Meaning                                                           |
| ---------- | ----------------------------------------------------------------- |
| `free`     | Everything usable for free (incl. open source, free online books) |
| `freemium` | Free tier plus paid plan, pro components or paid assets           |
| `paid`     | Nothing meaningful without paying; trial-only counts as paid      |
| `unknown`  | Could not be determined from the official site (the doc says why) |

Prices drift. Check `last_verified` and re-open the pricing page before
committing a client to a paid tool.

## Maintaining

See [AGENTS.md](../AGENTS.md) and [CONTRIBUTING](../.github/CONTRIBUTING.md). In
short: edit docs, then `bun run index && bun run check && bun run format`.
