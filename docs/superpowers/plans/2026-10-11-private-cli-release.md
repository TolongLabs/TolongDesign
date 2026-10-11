# Private CLI Release Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans
> to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Deploy and verify an installable private TolongDesign v0.1.0 release.

**Architecture:** Bundle the existing CLI and ship its read-only data/documents
in a private GitHub release tarball. Add local integrity diagnostics and
preserve all existing retrieval interfaces. Separate packaging, smoke
verification, and runtime diagnostics so each has one owner.

**Tech Stack:** Bun 1.4+, TypeScript, bundled YAML, GitHub Actions and gh.

**Spec:** `docs/superpowers/specs/2026-10-11-private-cli-release-design.md`.

## Global constraints

- Version `0.1.0`, tag `v0.1.0`, command `tolongdesign`, private
  package/repository.
- Existing search/show/context and context schema version 1 remain compatible.
- Production payload follows the spec's explicit allowlist and exact byte
  hashes.
- No public npm/service, network retrieval in the CLI, implicit skill install,
  target-project mutation, new model provider, or credentials in files.
- User's AFK instruction authorizes autonomous choices and deployment; no human
  written-spec review is claimed. Coordinator executes and reviews; two bounded
  Codex workers own disjoint mechanical files, with gpt-6-luna/max.

## Review focus

- A global bin symlink launched from a foreign cwd must resolve installed data.
- A missing/tampered document must not yield a successful doctor JSON report.
- A manifest dot-segment/symlink must not cause a read outside the package.
- Dirty or sensitive repository content must not enter the archive.
- Release privacy, version/tag equality and real green CI must gate deployment.

## File ownership

| Owner           | Files                                                                                                    | Responsibility                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Main            | package.json, design.ts, release-info.ts and tests, docs/CLI.md, WORKFLOW.md, mirrored skills, workflows | Runtime contract, integration and private deployment            |
| Packager worker | scripts/release-lib.ts, scripts/prepare-release.ts                                                       | Exact allowlisted stage, bundle, manifest, tarball, checksum    |
| Test worker     | scripts/release.test.ts, scripts/smoke-release.ts                                                        | Independent installation/cross-cwd/hash/tamper/allowlist checks |

Workers use isolated disposable worktrees. They do not commit, push, mutate main
or change the design. Main integrates only reviewed files, not worker branches.

### Task 1: Version and installation diagnostics

**Files:** `scripts/design.ts`, new `scripts/release-info.ts`,
`scripts/release-info.test.ts`, `scripts/design.test.ts`, `package.json`.

**Interfaces:** release-info exports `inspectInstallation(root: string)` with
the doctor result fields pinned in the spec, and `readVersion(root: string)`.

- [ ] Add failing real CLI tests before implementation:

```typescript
const version = run(['--version'], target)
expect(version.code).toBe(0)
expect(version.stdout).toBe('tolongdesign 0.1.0\n')
const doctor = run(['doctor', '--json'], target)
expect(doctor.code).toBe(0)
const result = JSON.parse(doctor.stdout)
expect(result.mode).toBe('checkout')
expect(result.resources).toBe(
  JSON.parse(readFileSync(join(root, 'data/catalogue.json'), 'utf8')).tools
    .length
)
expect(result.manifest_verified).toBe(false)
```

- [ ] Run `bun test scripts/design.test.ts`; observe unknown-command failure.
- [ ] Add package version/engines; add `--version` and `doctor [--json]`
      branches. Reuse existing UsageError/DataError handling, without changing
      JSON retrieval.
- [ ] Implement real-path-bounded manifest checks in release-info. Read hashes
      from exact bytes. Reject malformed version/private metadata, invalid
      manifest schema/hash/count, absolute/dot-segment/backslash paths, missing
      files, symlinks, and mismatched bytes; return no partial JSON on failure.
- [ ] Add fixture tests with a real miniature catalogue/docs and manifest. Test
      valid release and checkout, doc tamper, missing file, traversal and
      symlink.
- [ ] Run the full `bun test` suite and record the actual output.

### Task 2: Allowlisted production archive

**Files:** new `scripts/release-lib.ts`, `scripts/prepare-release.ts`.

**Interfaces:** consume repo package/version and existing `loadResources(root)`;
produce `buildRelease(root, outDir): Promise<ReleaseBuildResult>` with
`version`, `packageDir`, `tarball`, `checksumFile`, `resourceCount`.

- [ ] Independently inspect existing bundler/runtime inputs and spec paths.
- [ ] Add code with exact allowlist traversal, real regular-file validation,
      isolated stage, no overwrite of existing artifacts, and output-dir guards.
- [ ] Bundle with
      `Bun.build({entrypoints:[join(root,'scripts/design.ts')], outdir:join(stage,'dist'),target:'bun',format:'esm',packages:'bundle', sourcemap:'none',env:'disable'})`;
      ensure Bun shebang and executable mode.
- [ ] Generate dependency-free private staged package metadata and copy the
      exact allowed docs/data/mirrors/licence. Use docs/CLI.md as staged README.
- [ ] Create sorted manifest hashes for all staged payload except the manifest;
      run `bun pm pack` in the stage and hash actual archive bytes into
      SHA256SUMS.
- [ ] CLI accepts `--out <path>` only; prints actual resulting artifact paths
      and counts, exits 1 on build errors. Keep its import side-effect-free.
- [ ] Main runs Task 3's contract tests after integration; worker reports any
      missing main-owned inputs rather than editing them or claiming they
      passed.

### Task 3: Independent clean-install and negative checks

**Files:** new `scripts/release.test.ts`, `scripts/smoke-release.ts`.

**Interfaces:** use Task 2 result and bundled command; smoke script accepts one
archive path and emits a small JSON success summary or exits nonzero.

- [ ] Write independent tests against the real tarball, not a mocked builder.
      Inspect tar entries before extraction and reject non-allowlisted/unsafe
      paths.
- [ ] Install from that archive into fresh Bun global install/bin prefixes, with
      an unrelated target cwd. Never use the host user's global prefix.
- [ ] Assert declared version, actual bin symlink, release-mode doctor with
      verified manifest, derived catalogue count, available mirrored skills and
      full GSAP/Saaspo context with exact source hashes. Exercise unknown IDs
      and invalid flags without JSON stdout pollution.
- [ ] Tamper an installed registered doc: doctor must exit 1 and emit no JSON.
      Restore it and prove success. Also cover malformed manifest and path
      escape.
- [ ] Compare manifest keys to actual archive contents; prove tests,
      node_modules, graphs, env/settings and spec/plan files are absent. Seed an
      ignored fake `.env` fixture only in the test copy; do not touch real
      credentials.
- [ ] Verify checksum output matches archive; missing/corrupt archive and output
      overwrite must fail. Main mutation-checks a hash or source-root failure.
- [ ] Smoke script runs this real installation path without making Git changes,
      installing global dependencies, or changing agent settings.

### Task 4: Private handoff, verification and release workflow

**Files:** docs/CLI.md, docs/WORKFLOW.md, docs/README.md, mirrored
design-project skills, .gitignore, .github/workflows/verify.yml and new
release.yml.

- [ ] Document authenticated `gh release download`, SHA256SUMS verification,
      local-tarball Bun global install, PATH/diagnostics, update/rollback and
      limits. Use no token literals; keep checkout mode and no implicit target
      writes.
- [ ] Resolve installed root through doctor; preserve checkout source commands.
      Keep mirrors byte-identical. Add mobile first-screen/static/evidence and
      two-pass refinement completion criteria without promising beauty scores.
- [ ] Add release artifacts to ignore rules. Add `build:release` and
      `smoke:release` scripts; preserve current package manager conventions.
- [ ] Extend Verify to prepare and smoke the tarball, in addition to tests/docs.
- [ ] Add private-only tag workflow with tag/version assertion, actual full
      checks, allowlisted package smoke, contents-write scoped to release job,
      and `gh release create --verify-tag` for tarball/SHA256SUMS. Reuse pinned
      actions.
- [ ] Run `bun run check`, `bun run index`, `bun run format`; inspect and remove
      unrelated format-only changes only after reading their diff.
- [ ] Run full tests and prepare/smoke in a fresh output directory. Record exact
      counts, errors and artifact contents before committing.

### Task 5: Deploy verified release and prove adoption

**Files:** release notes/evidence, Git branch/tag and private release assets.

- [ ] Read overlapping PRs/issues (already found foundation #1 and #2 merged);
      link them. Commit only reviewed implementation/docs and push feature
      branch.
- [ ] Open PR, wait for real Verify success, inspect live head/base/state and
      merge with head pin only on green. Do not use admin or push directly to
      main.
- [ ] Fetch merged commit into isolated release worktree, create matching tag
      from that commit, push the tag, and wait for successful release workflow.
- [ ] Verify private repository/release metadata; download actual published
      tarball/checksum into a new empty directory. Compare SHA256SUMS.
- [ ] Run smoke against the downloaded artifact. Install locally only after
      checking that no unrelated `tolongdesign` executable would be overwritten.
      From a separate scratch project, run installed version/doctor/context and
      validate complete documents/hash provenance and no project mutations.
- [ ] Record private release URL, version, binary, all actual outcomes and
      limits with DKM note; stop heartbeat after these acceptance checks are
      satisfied.

## Self-review and stopping condition

The plan covers every spec section and all five review risks. Each worker has an
exact boundary and the public release is prohibited at both configuration and CI
levels. Spec/plan approval gates are handled by the user's explicit AFK
authority, not by fabricated human reviews. Stop only after the released private
artifact is downloaded and installed successfully; a tag or CI run alone is not
deployment. The paused fresh-agent visual test is not silently resumed.
