<div align="center">
  <img src="docs/assets/tolongdesign-hero.png" alt="An original design atelier with interface frames, material swatches and sculptural geometry" width="100%" />
  <h1>TolongDesign</h1>
  <p><strong>Find the right resource. Give your design agent the full context.</strong><br />TolongLabs’ starting point for designing anything beautifully and professionally.</p>
  <p><a href="catalogue/README.md">Browse</a> · <a href="docs/cli.md">CLI guide</a> · <a href="docs/product.md">Product requirements</a> · <a href="docs/architecture.md">Technical reference</a></p>
</div>

**441 resources · 18 sections · 132 creators.** Researched Markdown guides,
local search, complete context packs and an evidence-led project workflow.

## Start here

**Requires:** Bun 1.4+ and a clone of this repository.

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

Prefer an installed CLI? Follow [CLI installation](docs/cli.md). Releases are
snapshots of `main` at their tag; `v0.3.0` is the role-based layout (catalogue,
skills, collections, engine) with one search command. Use current `main` for
anything merged after it.

## Choose your starting point

| Need                  | Resources                                                                                                                                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interfaces            | [Components](catalogue/tools/component-libraries/README.md) · [Interface design](catalogue/tools/interface-design/README.md) · [Icons](catalogue/tools/icons/README.md)                                                                                    |
| Visual craft          | [Type](catalogue/tools/type/README.md) · [Colour](catalogue/tools/color/README.md) · [Motion](catalogue/tools/motion/README.md) · [3D](catalogue/tools/3d/README.md) · [Shaders](catalogue/tools/shaders/README.md)                                        |
| Stories and media     | [Comics](catalogue/tools/comics/README.md) · [Video and capture](catalogue/tools/video-capture/README.md)                                                                                                                                                  |
| Research and planning | [Galleries](catalogue/tools/design-galleries/README.md) · [Reading](catalogue/tools/reading/README.md) · [Whiteboards](catalogue/tools/whiteboard/README.md)                                                                                               |
| Tools and delivery    | [Development](catalogue/tools/development/README.md) · [Agents & MCP](catalogue/tools/agents-mcp/README.md) · [Utilities](catalogue/tools/utilities/README.md) · [Desktop](catalogue/tools/desktop/README.md) · [Deploy](catalogue/tools/deploy/README.md) |
| Our own collections   | [Line art](collections/line-art/README.md): animated ink-on-paper SVG · [Agent video](collections/agent-video/README.md): Remotion launch-film kit and template teardowns · [All collections](collections/README.md)                                       |

## From resource to finished work

![Find resources, read full docs, agree a direction, make the work, inspect it, then deliver with evidence. Observed gaps return to implementation.](docs/diagrams/overview.svg)

TolongDesign supplies knowledge. Your human or agent supplies judgment,
implementation and rendered verification. Start with the
[project workflow](skills/design-project/workflow.md); use the
[playbook](skills/pick-design-stack/playbook.md) for website-specific stack
choices. [Diagram files](docs/diagrams/README.md).

## Need to know

| Question                   | Answer                                                                                                                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What does search do?       | Local, field-weighted keyword ranking over registered docs — see [architecture](docs/architecture.md). It is not vector search, an AI recommendation engine or a design generator.           |
| What does context include? | Complete selected Markdown, source URLs, verification dates and SHA-256 hashes. Search cards are only a shortlist.                                                                           |
| What still needs checking? | Current APIs, prices, access, asset rights and actual output quality. Metadata and green tests are not guarantees.                                                                           |
| Is it private?             | The repository is public; the code and docs are TolongLabs' own (no open-source licence). Retrieval is local and read-only. Resource tools and external agent services have their own terms. |

Field meanings live in [resource metadata](catalogue/SCHEMA.md); the doc
contract in [the tool template](catalogue/TEMPLATE.md).

## Keep the collection useful

Edit source docs and catalogue records; never hand-edit generated indexes. Read
[AGENTS.md](AGENTS.md) and [contributing](.github/CONTRIBUTING.md) before
maintenance. Link third-party assets; do not copy them into this repo or include
credentials or customer material in releases.

| Read next                            | Purpose                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------- |
| [Product](docs/product.md)           | Users, scope, product requirements, quality bar and acceptance.         |
| [Architecture](docs/architecture.md) | Retrieval, contracts, security, operations, testing and release design. |

[People worth following](catalogue/people.md) ·
[Original artwork provenance](docs/assets/README.md) ·
[Catalogue source: Designeer](https://designeer.xyz)
