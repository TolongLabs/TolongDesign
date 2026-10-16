<div align="center">
  <img src="docs/assets/tolongdesign-hero.png" alt="An original design atelier with interface frames, material swatches and sculptural geometry" width="100%" />
  <h1>TolongDesign</h1>
  <p><strong>Find the right resource. Give your design agent the full context.</strong><br />TolongLabs’ private starting point for designing anything beautifully and professionally.</p>
  <p><a href="docs/design/README.md">Browse</a> · <a href="docs/CLI.md">CLI guide</a> · <a href="docs/PRD.md">Product requirements</a> · <a href="docs/TRD.md">Technical reference</a></p>
</div>

**441 resources · 18 sections · 132 creators.** Researched Markdown guides,
local search, complete context packs and an evidence-led project workflow.

## Start here

**Requires:** Bun 1.4+ and GitHub access to this private repository.

```bash
gh repo clone TolongLabs/TolongDesign
cd TolongDesign
bun install --frozen-lockfile
bun run design -- doctor --json
bun run design -- search "smooth hero animation" --surface web-ui --format card
bun run design -- context motion/gsap --brief "Product landing page" --json
```

1. **Find** a shortlist with ranked search and filters.
2. **Read** complete selected docs with `show` or `context`.
3. **Make and verify** the work in your target project—not in this collection.

Prefer an installed CLI? Follow [private installation](docs/CLI.md). Releases
are snapshots: published `v0.1.2` predates the newer retrieval features shown
here. Use current `main` until a release includes them.

## Choose your starting point

| Need                  | Resources                                                                                                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interfaces            | [Components](docs/design/component-libraries/README.md) · [Interface design](docs/design/interface-design/README.md) · [Icons](docs/design/icons/README.md)                                                                            |
| Visual craft          | [Type](docs/design/type/README.md) · [Colour](docs/design/color/README.md) · [Motion](docs/design/motion/README.md) · [3D](docs/design/3d/README.md) · [Shaders](docs/design/shaders/README.md)                                        |
| Stories and media     | [Comics](docs/design/comics/README.md) · [Video and capture](docs/design/video-capture/README.md)                                                                                                                                      |
| Research and planning | [Galleries](docs/design/design-galleries/README.md) · [Reading](docs/design/reading/README.md) · [Whiteboards](docs/design/whiteboard/README.md)                                                                                       |
| Tools and delivery    | [Development](docs/design/development/README.md) · [Agents & MCP](docs/design/agents-mcp/README.md) · [Utilities](docs/design/utilities/README.md) · [Desktop](docs/design/desktop/README.md) · [Deploy](docs/design/deploy/README.md) |

## From resource to finished work

[![Find resources, read full docs, agree a direction, make the work, inspect it, then deliver with evidence. Observed gaps return to implementation.](docs/diagrams/overview.svg)](docs/diagrams/overview.html)

TolongDesign supplies knowledge. Your human or agent supplies judgment,
implementation and rendered verification. Start with the
[project workflow](docs/WORKFLOW.md); use the [playbook](docs/PLAYBOOK.md) for
website-specific stack choices.
[Diagram files and local viewing](docs/diagrams/README.md).

## Need to know

| Question                   | Answer                                                                                                                                                         |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What does search do?       | Local, field-weighted keyword ranking over registered docs. It is not vector search, an AI recommendation engine or a design generator.                        |
| How do I narrow results?   | Use `--mode`, `--surface`, `--stack` and `--paywall`. Unreachable resources are hidden by default. [Metadata definitions](docs/METADATA.md).                   |
| What does context include? | Complete selected Markdown, source URLs, verification dates and SHA-256 hashes. Search cards are only a shortlist.                                             |
| What still needs checking? | Current APIs, prices, access, asset rights and actual output quality. Metadata and green tests are not guarantees.                                             |
| Is it private?             | Yes. Retrieval is local and read-only. Installation uses authenticated private GitHub assets; resource tools and external agent services have their own terms. |

## Keep the collection useful

Edit source docs and catalogue records; never hand-edit generated indexes.

```bash
bun run index
bun run check
bun run format
bun test
```

Read [AGENTS.md](AGENTS.md) and [contributing](.github/CONTRIBUTING.md) before
maintenance. Link third-party assets; do not copy them into this repo or include
credentials or customer material in releases.

| Read next                           | Purpose                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------- |
| [PRD](docs/PRD.md)                  | Users, scope, product requirements, quality bar and acceptance.            |
| [TRD](docs/TRD.md)                  | Architecture, contracts, security, operations, testing and release design. |
| [Documentation map](docs/README.md) | Usage guides, resource docs, research and maintenance references.          |

[People worth following](docs/design/people.md) ·
[Original artwork provenance](docs/assets/README.md) ·
[Catalogue source: Designeer](https://designeer.xyz)
