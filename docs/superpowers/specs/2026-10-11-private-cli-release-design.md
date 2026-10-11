# Private CLI production release

## Intent and authority

Deploy TolongDesign as an installable, versioned private developer tool for
TolongLabs. Preserve the catalogue and existing search/show/context contracts.
The user selected this target, authorized production deployment, and asked the
coordinator to act autonomously while they are away. The coordinator owns this
spec and its self-review; no human review of this file is claimed.

Vellvoice remains a separate accepted throwaway benchmark. Its pending fresh
agent run is paused. No public service, public npm package, new model provider,
automatic website generator, or real dictation backend is in scope.

## Deployment choice

Use authenticated GitHub Releases in the existing private repository. Ship a
portable Bun package tarball with bundled JavaScript, full Markdown resources,
agent skill instructions, and integrity metadata. Bun remains the only runtime
requirement. Initial release: `v0.1.0`, package name `tolong-design`, executable
`tolongdesign`, minimum Bun `1.4.0`. Linux/Bun is the verified initial platform;
do not claim other platform verification.

The alternative private package registry requires additional package-token
configuration without improving this first internal release. A hosted service
adds a new authentication/data-exposure surface. Neither is needed.

## CLI compatibility and diagnostics

Keep all existing commands and the schema-version-1 context JSON unchanged. The
source command `bun run design` remains available. Installed use is:

```bash
tolongdesign --version
tolongdesign doctor --json
tolongdesign search scroll --section motion --json
tolongdesign show gsap
tolongdesign context gsap saaspo --brief "Project brief" --json
```

`--version` prints `tolongdesign <package version>` and exits 0. `doctor`
accepts only `--json` and no positional arguments; misuse exits 2. A
data/integrity failure exits 1 with stderr and no partial JSON. All other
usage/error behavior stays compatible.

Successful doctor JSON has `schema_version: 1`, `version`, `runtime: "bun"`,
`mode` (`checkout` or `release`), absolute local `root`, `resources` (derived
registered-resource count), `manifest_verified`, `skill_paths` (agents/claude
SKILL.md paths), and `warnings`. Checkout mode has no release manifest and says
so. Release mode verifies every manifest entry before reporting success. These
local paths are diagnostic data, not uploaded records.

CLI root resolution must work from an unrelated cwd and from a globally
installed bin symlink. The package includes the actual sources; no network
fetch, target-project mutation, implicit skill installation, or global agent
configuration change occurs during CLI retrieval.

## Release package and interfaces

New `scripts/release-lib.ts` exports:

```typescript
export type ReleaseBuildResult = {
  version: string
  packageDir: string
  tarball: string
  checksumFile: string
  resourceCount: number
}
export function buildRelease(
  root: string,
  outDir: string
): Promise<ReleaseBuildResult>
```

`prepare-release.ts --out <path>` invokes it; the default is `release/` in the
checkout. The builder creates its own staging child in the output directory.
Refuse an existing same-version artifact rather than overwrite it. Reject output
inside source payload directories. Missing/unsafe required inputs fail closed.

Build `scripts/design.ts` with `Bun.build` target `bun`, ESM, bundled
dependencies, no sourcemap, and disabled environment inlining. Emit executable
`dist/design.js` with `#!/usr/bin/env bun`. The staged private package has no
dependencies or lifecycle scripts. It exposes only `design: bun dist/design.js`,
a `bin` mapping, the version, runtime requirement, and descriptive metadata.

Payload allowlist:

- `dist/design.js`, staged `package.json`, `release-manifest.json` and README.
- `data/catalogue.json` and `data/index.json`.
- Markdown under `docs/design/`, `docs/scenarios/`, `docs/research/`, plus
  `docs/README.md`, `docs/PLAYBOOK.md`, `docs/WORKFLOW.md`, and `docs/CLI.md`.
- Identical `.agents/skills/design-project/SKILL.md` and
  `.claude/skills/design-project/SKILL.md`.
- Bundled YAML dependency licence under `licenses/`.

Do not package graph outputs, plan/spec files, tests, node_modules, Git state,
agent settings, env files, screenshots or unrelated working-directory content.
Input traversal accepts only real regular files, not symlinks. Sort the file
list and hash exact bytes. The schema-version-1 manifest contains `version`,
`resource_count`, and a sorted `files` path-to-SHA256 map of every payload file
except the manifest itself. Paths must be relative, bounded to package root, and
free from dot segments, backslashes and control characters.

Use `bun pm pack` on the staging directory. Emit `tolong-design-<version>.tgz`
and `SHA256SUMS` into the output directory. The checksum is the hash of the
actual compressed archive. Verify payload/integrity, not claims of
byte-identical archives across machines.

## Source and agent handoff

Installed agents can use `tolongdesign` directly. `doctor --json` supplies the
source root for reading packaged WORKFLOW and skill instructions. Checkout mode
continues to support explicit `TOLONG_DESIGN` and source-relative Bun commands.
Keep both skill mirrors identical. Do not install them automatically into a
client project.

Carry benchmark lessons into the rendered-verification instructions: check
mobile first-screen meaning/content order, readable result evidence, static and
reduced-motion states, and at most two deliberate refinement passes before
reporting unresolved gaps. Aesthetics remain human/agent judgment, not a CLI
beauty score or a guaranteed outcome.

## CI, release and rollout

Extend Verify to build and smoke-test the production tarball. Preserve existing
test/doc checks. Release workflow runs on `v*` tags in a private repository
only, checks tag equals package version, reruns validation/tests and package
smoke, then creates a private GitHub release with tarball and SHA256SUMS. Use
pinned existing checkout/setup-bun actions and existing Bun CI version. Grant
contents write only to that release job; do not embed credentials or publish to
npm.

Push a feature branch and PR, referencing the two merged foundation PRs. Merge
only on actual CI success and a pinned head. Tag the verified merged commit;
never push changes directly to main. Verify the release workflow and downloaded
assets, not just tag creation. Download into a fresh directory, check checksum,
install in an isolated Bun global prefix and run it from an unrelated project.
Install the verified release locally only if it will not clobber an unrelated
existing executable. Leave private authentication to the user's existing gh
login; do not alter global settings or place tokens in files.

## Acceptance checks

1. All existing tests and doc checks pass; CLI diagnostics have negative cases.
2. The staged tarball installs cleanly without repo dev dependencies, exposes
   the actual installed binary, and retrieves complete docs/hashes from another
   cwd. Skills and workflow are available from its diagnosed root.
3. Archive allowlist checks find no protected/irrelevant files; tampered docs,
   invalid manifests and traversal/symlink entries are rejected by diagnostics.
4. Remote Verify and release jobs pass. The repository/release remains private,
   the version/tag matches, and downloaded archive checksums match.
5. Deployment evidence names the release URL, version, installed binary and
   exact verification results, with licensing/freshness/platform limits.

## Self-review

The spec is limited to private packaging, diagnostics, handoff and deployment.
It does not convert the landing-page prototype into production or promise
exceptional design automatically. Interfaces, ownership, authority, verification
and stopping conditions are explicit. Existing dirty graph files and prototype
baselines stay outside this isolated release branch and are not overwritten.
