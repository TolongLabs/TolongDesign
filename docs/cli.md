# CLI installation

Use the installed CLI from a target project when you need design-resource
search, complete usage guidance, or an agent context pack. The tool is local and
read-only; the target agent still designs, builds, and reviews the work.

> **Snapshot note:** this guide describes current source. Published `v0.2.0`
> includes ranked-search filters and cards. Anything merged after the tag needs
> checkout mode; a version string alone does not prove that a working checkout
> matches the published archive.

## Requirements

Use Bun 1.4 or newer and an authenticated `gh` account (the repository is
public; `gh release download` still uses your login). Keep credentials in the
existing gh login; the package contains no tokens or agent-provider keys.
Linux/Bun is the initial verified installation path. Other platforms require
their own verification.

## Install a release

Download into a new temporary directory and verify the actual archive before
installing. No public npm registry publication is involved.

```bash
version=v0.2.0
install_dir=$(mktemp -d)
gh release download "$version" --repo TolongLabs/TolongDesign \
  --pattern 'tolong-design-*.tgz' --pattern SHA256SUMS --dir "$install_dir"
(cd "$install_dir" && sha256sum --check SHA256SUMS)
bun add --global "$install_dir/tolong-design-${version#v}.tgz"
tolongdesign --version
tolongdesign doctor --json
```

Bun's global bin directory must be on PATH. Diagnose the directory with
`bun pm bin --global`; add that existing directory to the current shell rather
than changing agent settings. Do not overwrite an unrelated existing executable.

The checksum verifies download bytes. Authenticity also depends on your trusted
GitHub account/repository access. Treat downloaded package code with the same
care as any internal release; verify the tag/version and access controls.

## Use from another project

```bash
tolongdesign search scroll --section motion --json
tolongdesign show gsap
tolongdesign context gsap saaspo --brief "Project brief" --json
```

Search ranks partial matches across names, tags, intended use and full document
bodies. Names and structured fields carry more weight than incidental body
mentions. Exact resource names rank first; no-match queries return no results.

```bash
tolongdesign search "smooth hero animation" --limit 5 --format card
tolongdesign search manga --mode browser-app --surface comics --json
tolongdesign search components --mode registry,package --surface web-ui --stack react
tolongdesign search --tag react --section component-libraries --json
```

`--mode` and `--surface` accept comma-separated OR values; different filters
combine with AND. `--stack framer-motion` accepts the canonical `motion` alias.
The text may be omitted when at least one filter is given
(`search --section icons --paywall free`). Unreachable resources are hidden by
default; add `--include-unreachable` for a repair sweep.
[Resource metadata](../catalogue/SCHEMA.md) defines the allowed values and their
limits.

`--format card` returns a short name/ID, execution mode, install command or URL,
one intended use and doc path. Long setup blocks point to the full doc instead
of becoming truncated commands. `--json --format card` is a usage error. The
search JSON output is one `{ query, total, results }` object; `bun run find` is
an alias for the search command.

Context retains entire selected documents, source URLs, dates, and byte hashes.
Pricing dates do not certify API compatibility or asset licensing. Check
relevant current official guidance before using a resource.

`doctor --json` reports the installed root, version, registered resource count,
manifest integrity, and the paths of the three consumer skills
(`skills/<name>/SKILL.md`). Point your coding agent at the reported skill path
and the packaged `skills/design-project/workflow.md`. Skills are not silently
installed into a target repo or a global harness.

## Checkout mode

Maintainers can continue to use the authenticated source checkout:

```bash
bun install --frozen-lockfile
bun run design -- --help
bun run design -- doctor --json
```

Checkout diagnostics say `mode: checkout` and warn that no release manifest is
verified. This is distinct from the immutable release payload verified by
doctor. The context schema and existing search/show/context commands stay
compatible.

## Update and rollback

Download an explicitly chosen newer release tag, verify its checksum, and
install its local tarball with the same command. Reinstall a known earlier
verified release to roll back. Confirm the version and doctor output after
either action. Resource facts remain a snapshot; an update does not replace live
API/licence verification for the target project.

## Errors and boundaries

Usage errors exit 2; missing/invalid data or release integrity errors exit 1.
JSON errors go to stderr, not partial stdout. If doctor reports tampering,
reinstall a verified release instead of editing its manifest to match.

The CLI performs no network retrieval, project writes, audio recording, model
calls or paid-resource installation. It does not guarantee beautiful designs,
WCAG certification, production performance, or search rankings. Use the project
workflow's rendered evidence and approval gates for those judgments.
