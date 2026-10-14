<a id="top"></a>

<div align="center">
  <img src="docs/assets/tolongdesign-hero.png" alt="An original design-reference atelier with interface frames, material swatches, and sculptural geometry" width="100%" />
  <h1>TolongDesign</h1>
  <p><strong>Find the right design resource. Give your agent the full context.</strong><br />TolongLabs' private catalogue, CLI, and project design workflow.</p>
  <p>
    <img src="https://img.shields.io/badge/Bun-1.4%2B-14151A?style=for-the-badge&logo=bun&logoColor=white" alt="Bun 1.4 or newer" />
    <img src="https://img.shields.io/badge/TypeScript-CLI-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript CLI" />
    <img src="https://img.shields.io/badge/Markdown-source_docs-475569?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown source documents" />
    <img src="https://img.shields.io/badge/GitHub_Actions-release-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions release pipeline" />
    <img src="https://img.shields.io/badge/Distribution-private-9F4561?style=for-the-badge&logo=github&logoColor=white" alt="Private distribution" />
  </p>
  <p><a href="docs/CLI.md"><strong>Install</strong></a> · <a href="docs/WORKFLOW.md"><strong>Design workflow</strong></a> · <a href="docs/design/README.md"><strong>Browse resources</strong></a> · <a href="https://github.com/TolongLabs/TolongDesign/releases"><strong>Private releases</strong></a></p>
</div>

<details>
<summary><strong>Table of contents</strong></summary>
<ol>
  <li><a href="#quickstart">Quickstart</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#agent-workflow">Agent workflow</a></li>
  <li><a href="#catalogue">Catalogue</a></li>
  <li><a href="#maintaining">Maintaining</a></li>
</ol>
</details>

## Quickstart

**Requires:** Bun 1.4+ and GitHub access to this private repository. Follow
[private installation](docs/CLI.md), then run from your project:

```bash
tolongdesign --version
tolongdesign doctor --json
tolongdesign search scroll --section motion --json
tolongdesign context gsap saaspo --brief "Product landing page" --json
```

> Retrieval is local and read-only. Your coding agent designs the site;
> TolongDesign supplies resources, complete docs, sources, and hashes.

<details>
<summary><strong>Using a checkout instead?</strong></summary>

```bash
bun install --frozen-lockfile
bun run design -- doctor --json
bun run design -- search icons --paywall free --json
```

Use the absolute `scripts/design.ts` entrypoint from another project.
[CLI guide](docs/CLI.md) covers installation, source selection, updates, and
rollback.

</details>

## CLI

| Command     | Result                                                                   |
| ----------- | ------------------------------------------------------------------------ |
| `search`    | Filter complete docs by words, section, stack, paywall, or agent support |
| `show`      | Read one complete resource doc                                           |
| `context`   | Export selected docs with source URLs, dates, and SHA-256 hashes         |
| `doctor`    | Check installed version, resource root, integrity, and skill paths       |
| `--version` | Print the package version                                                |

**Search is literal AND matching**, not semantic ranking. Split a rich brief
into short queries. Use qualified IDs such as `motion/gsap` when needed.

## Agent workflow

Point your agent at `design-project` using the paths from `doctor --json`. Keep
implementation in the target project, not this collection.

[![Design workflow: the agent uses private source context, builds in the target project, and verifies the result](docs/assets/design-workflow.svg)](docs/assets/design-workflow.svg)

1. **Brief and references** — capture the use case, constraints, and real visual
   evidence.
2. **Direction and context** — agree on the narrative, then read complete
   chosen-tool docs.
3. **Build and review** — inspect desktop/mobile renders, motion, fallbacks, and
   actual checks.

> Check the first mobile screen, not only overflow. Preserve a baseline; use two
> deliberate refinement passes before reporting unresolved gaps.

[Full workflow](docs/WORKFLOW.md) · [Design playbook](docs/PLAYBOOK.md) ·
[Dictation acceptance brief](docs/scenarios/dictation-landing.md)

## Catalogue

**441 resources · 18 sections · 132 design engineers.** Each resource records
usage, examples, pricing, licensing, agent notes, and sources.

| Need                     | Start here                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Visual references        | [Design galleries](docs/design/design-galleries/README.md)                                                        |
| UI and motion            | [Components](docs/design/component-libraries/README.md) · [Motion](docs/design/motion/README.md)                  |
| Type, colour, and icons  | [Type](docs/design/type/README.md) · [Colour](docs/design/color/README.md) · [Icons](docs/design/icons/README.md) |
| 3D and shaders           | [3D](docs/design/3d/README.md) · [Shaders](docs/design/shaders/README.md)                                         |
| Comics and manga         | [Comics](docs/design/comics/README.md)                                                                            |
| Agent and delivery tools | [Agents & MCP](docs/design/agents-mcp/README.md) · [Deploy](docs/design/deploy/README.md)                         |

**Considering React Three Fiber?** Read
[the guide](docs/design/3d/react-three-fiber.md). It composes Three.js scenes in
React; it is not a shortcut to good art direction.

[Full index](docs/design/README.md) · [People](docs/design/people.md) ·
[Source catalogue](data/catalogue.json) · [Generated metadata](data/index.json)

> Check current APIs, prices, and asset rights before client work. A
> verification date or green test suite does not guarantee design quality.

## Maintaining

```bash
bun test
bun run check
bun run index
bun run format
```

- Edit source docs; regenerate indexes rather than hand-editing them.
- Link third-party assets. Commit only original project artwork or permitted
  code/docs.
- Keep credentials, private source packs, and customer material out of public
  distribution.
- Read [AGENTS.md](AGENTS.md), the [tool template](templates/tool-doc.md), and
  [contributing](.github/CONTRIBUTING.md).

[Documentation map](docs/README.md) ·
[Original asset provenance](docs/assets/README.md) ·
[Designeer source](https://designeer.xyz)

<p align="right"><a href="#top">↑ Back to top</a></p>
