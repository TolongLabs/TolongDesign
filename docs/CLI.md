# Private CLI installation

Use the installed CLI from a target project when you need design-resource
search, complete usage guidance, or an agent context pack. The tool is private
and read-only; the target agent still designs, builds, and reviews the website.

## Requirements

Use Bun 1.4 or newer and an authenticated `gh` account with read access to
`TolongLabs/TolongDesign`. Keep credentials in the existing gh login; the
package contains no tokens or agent-provider keys. Linux/Bun is the initial
verified installation path. Other platforms require their own verification.

## Install a private release

Download into a new temporary directory and verify the actual archive before
installing. No public npm registry publication is involved.

```bash
version=v0.1.0
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

Search uses literal AND matching. Decompose a rich brief into small queries.
Context retains entire selected documents, source URLs, dates, and byte hashes.
Pricing dates do not certify API compatibility or asset licensing. Check
relevant current official guidance before using a resource.

`doctor --json` reports the installed root, version, registered resource count,
manifest integrity, and the paths of both mirrored `design-project` skill files.
Point your coding agent at that skill and the packaged `docs/WORKFLOW.md`.
Skills are not silently installed into a target repo or a global harness.

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

Download an explicitly chosen newer private tag, verify its checksum, and
install its local tarball with the same command. Reinstall a known earlier
verified release to roll back. Confirm the version and doctor output after
either action. Resource facts remain a snapshot; an update does not replace live
API/licence verification for the target project.

## Errors and boundaries

Usage errors exit 2; missing/invalid data or release integrity errors exit 1.
JSON errors go to stderr, not partial stdout. If doctor reports tampering,
reinstall a verified private release instead of editing its manifest to match.

The CLI performs no network retrieval, project writes, audio recording, model
calls or paid-resource installation. It does not guarantee beautiful designs,
WCAG certification, production performance, or search rankings. Use the project
workflow's rendered evidence and approval gates for those judgments.
