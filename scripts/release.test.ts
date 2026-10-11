import { afterAll, describe, expect, test } from 'bun:test'
import { createHash } from 'node:crypto'
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  symlinkSync,
  unlinkSync,
  writeFileSync
} from 'node:fs'
import { tmpdir } from 'node:os'
import { delimiter, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { pathToFileURL } from 'node:url'

type RecordValue = Record<string, unknown>
type ArchiveEntry = { name: string; filePath: string; kind: 'file' | 'directory' }
type ReleaseBuildResult = {
  version: string
  packageDir: string
  tarball: string
  checksumFile: string
  resourceCount: number
}
type ReleaseBuilder = (root: string, outDir: string) => Promise<ReleaseBuildResult>
type ReleaseFixture = {
  root: string
  outDir: string
  buildRelease: ReleaseBuilder
  result: ReleaseBuildResult
}

const root = resolve(import.meta.dir, '..')
const entrypoint = join(root, 'scripts', 'design.ts')
const smokeEntrypoint = join(root, 'scripts', 'smoke-release.ts')
const scratchParent = tmpdir()
mkdirSync(scratchParent, { recursive: true })
const scratch = mkdtempSync(join(scratchParent, 'private-release-test-'))
const decode = (bytes: Uint8Array) => new TextDecoder().decode(bytes)
const sha256 = (bytes: Uint8Array) => createHash('sha256').update(bytes).digest('hex')

afterAll(() => rmSync(scratch, { recursive: true, force: true }))

function runCommand(cmd: string[], cwd = root, env?: Record<string, string>) {
  const result = Bun.spawnSync({ cmd, cwd, ...(env ? { env } : {}), stdout: 'pipe', stderr: 'pipe' })
  return {
    code: result.exitCode,
    stdout: decode(result.stdout),
    stderr: decode(result.stderr)
  }
}

function isRecord(value: unknown): value is RecordValue {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isAllowedFile(path: string): boolean {
  if (['dist/design.js', 'package.json', 'release-manifest.json', 'README.md'].includes(path)) return true
  if (['data/catalogue.json', 'data/index.json'].includes(path)) return true
  if (['docs/README.md', 'docs/PLAYBOOK.md', 'docs/WORKFLOW.md', 'docs/CLI.md'].includes(path)) return true
  if (path.startsWith('docs/design/') && path.endsWith('.md')) return true
  if (path.startsWith('docs/scenarios/') && path.endsWith('.md')) return true
  if (path.startsWith('docs/research/') && path.endsWith('.md')) return true
  if (['.agents/skills/design-project/SKILL.md', '.claude/skills/design-project/SKILL.md'].includes(path)) return true
  return path.startsWith('licenses/')
}

function inspectArchive(archivePath: string): ArchiveEntry[] {
  const namesResult = runCommand(['tar', '-tzf', archivePath])
  expect(namesResult.code).toBe(0)
  const detailResult = runCommand(['tar', '-tvzf', archivePath])
  expect(detailResult.code).toBe(0)

  const names = namesResult.stdout.split(/\r?\n/).filter((line) => line !== '')
  const details = detailResult.stdout.split(/\r?\n/).filter((line) => line !== '')
  expect(names.length).toBeGreaterThan(0)
  expect(details).toHaveLength(names.length)

  const entries: ArchiveEntry[] = []
  const seen = new Set<string>()
  for (let index = 0; index < names.length; index += 1) {
    const name = names[index]
    const typeCharacter = details[index][0]
    expect(['-', 'd']).toContain(typeCharacter)
    expect(name.startsWith('/')).toBe(false)
    expect(name.includes('\\')).toBe(false)
    expect(/[\u0000-\u001f\u007f]/.test(name)).toBe(false)

    const directory = name.endsWith('/')
    const normalized = directory ? name.slice(0, -1) : name
    const parts = normalized.split('/')
    expect(parts.some((part) => part === '' || part === '.' || part === '..')).toBe(false)
    expect(parts[0]).toBe('package')
    expect(/^[A-Za-z]:/.test(name)).toBe(false)
    expect(directory).toBe(typeCharacter === 'd')

    const filePath = parts.slice(1).join('/')
    if (!directory) expect(isAllowedFile(filePath)).toBe(true)
    const key = `${directory ? 'directory' : 'file'}:${name}`
    expect(seen.has(key)).toBe(false)
    seen.add(key)
    entries.push({ name, filePath, kind: directory ? 'directory' : 'file' })
  }

  const files = entries.filter((entry) => entry.kind === 'file').map((entry) => entry.filePath)
  expect(files).toContain('package.json')
  expect(files).toContain('release-manifest.json')
  expect(files).toContain('data/catalogue.json')
  expect(files.some((path) => path.startsWith('licenses/'))).toBe(true)
  for (const entry of entries) {
    if (entry.kind === 'directory' && entry.filePath !== '') {
      expect(files.some((path) => path.startsWith(`${entry.filePath}/`))).toBe(true)
    }
  }

  return entries
}

function collectFiles(directory: string, prefix = ''): string[] {
  const result: string[] = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const relativePath = prefix === '' ? entry.name : `${prefix}/${entry.name}`
    const absolutePath = join(directory, entry.name)
    expect(entry.isSymbolicLink()).toBe(false)
    if (entry.isDirectory()) result.push(...collectFiles(absolutePath, relativePath))
    else {
      expect(entry.isFile()).toBe(true)
      result.push(relativePath)
    }
  }
  return result.sort()
}

function assertWithin(parent: string, child: string) {
  const pathFromParent = relative(parent, child)
  expect(pathFromParent === '..' || pathFromParent.startsWith(`..${sep}`) || isAbsolute(pathFromParent)).toBe(false)
}

function fixtureCopy(): string {
  const fixtureRoot = join(scratch, 'checkout-fixture')
  cpSync(root, fixtureRoot, {
    recursive: true,
    filter(source) {
      const path = relative(root, source)
      if (path === '') return true
      if (path === '..' || path.startsWith(`..${sep}`) || isAbsolute(path)) return false
      const parts = path.split(sep)
      const basename = parts.at(-1) ?? ''
      if (parts.includes('.worker_tmp') || parts.includes('.git') || parts.includes('node_modules')) return false
      if (basename === '.env' || basename.startsWith('.env.')) return false
      if (path === join('.claude', 'settings.json')) return false
      if (parts[0] === 'release') return false
      return true
    }
  })

  writeFileSync(join(fixtureRoot, '.env'), 'FAKE_RELEASE_FIXTURE_MARKER=not-a-secret\n')
  mkdirSync(join(fixtureRoot, '.claude'), { recursive: true })
  writeFileSync(join(fixtureRoot, '.claude', 'settings.json'), '{"fixture_only":true}\n')
  cpSync(join(root, 'node_modules', 'yaml'), join(fixtureRoot, 'node_modules', 'yaml'), { recursive: true })
  return fixtureRoot
}

async function buildFixture(): Promise<{ fixture?: ReleaseFixture; error?: string }> {
  try {
    const releaseModuleUrl = pathToFileURL(join(root, 'scripts', 'release-lib.ts')).href
    const module = (await import(releaseModuleUrl)) as { buildRelease?: ReleaseBuilder }
    if (typeof module.buildRelease !== 'function') throw new Error('release-lib.ts does not export buildRelease')

    const fixtureRoot = fixtureCopy()
    const outDir = join(scratch, 'release-output')
    mkdirSync(outDir, { recursive: true })
    const result = await module.buildRelease(fixtureRoot, outDir)
    return { fixture: { root: fixtureRoot, outDir, buildRelease: module.buildRelease, result } }
  } catch (error) {
    return { error: error instanceof Error ? `${error.name}: ${error.message}` : String(error) }
  }
}

const buildState = await buildFixture()

test('release builder creates a real local tarball', () => {
  expect(buildState.error).toBeUndefined()
  expect(buildState.fixture).toBeDefined()
})

const releaseDescribe = buildState.fixture ? describe : describe.skip

function assertDoctorSkills(doctor: RecordValue, expectedMode: string, expectedManifestVerified: boolean): string {
  expect(doctor.schema_version).toBe(1)
  expect(doctor.runtime).toBe('bun')
  expect(doctor.mode).toBe(expectedMode)
  expect(doctor.manifest_verified).toBe(expectedManifestVerified)
  expect(typeof doctor.version).toBe('string')
  expect(typeof doctor.resources).toBe('number')
  expect(Array.isArray(doctor.warnings)).toBe(true)
  expect(typeof doctor.root).toBe('string')
  expect(isAbsolute(doctor.root as string)).toBe(true)
  const packageRoot = realpathSync(doctor.root as string)
  const rawPaths = doctor.skill_paths
  expect(Array.isArray(rawPaths) || isRecord(rawPaths)).toBe(true)
  const skillPaths = Array.isArray(rawPaths) ? rawPaths : Object.values(rawPaths as RecordValue)
  const paths = skillPaths.filter((value): value is string => typeof value === 'string')

  for (const suffix of ['.agents/skills/design-project/SKILL.md', '.claude/skills/design-project/SKILL.md']) {
    const reported = paths.find((path) => path.replaceAll('\\', '/').endsWith(suffix))
    expect(reported).toBeDefined()
    const resolvedPath = isAbsolute(reported as string)
      ? resolve(reported as string)
      : resolve(packageRoot, reported as string)
    assertWithin(packageRoot, resolvedPath)
    expect(existsSync(resolvedPath)).toBe(true)
    expect(lstatSync(resolvedPath).isFile()).toBe(true)
  }
  return packageRoot
}

describe('checkout release diagnostics', () => {
  const foreignCwd = join(scratch, 'checkout-foreign-cwd')
  mkdirSync(foreignCwd, { recursive: true })

  test('prints the declared package version', () => {
    const result = runCommand([process.execPath, entrypoint, '--version'], foreignCwd)
    expect(result.code).toBe(0)
    expect(result.stdout).toBe('tolongdesign 0.1.0\n')
    expect(result.stderr).toBe('')
  })

  test('reports checkout doctor data from the catalogue', () => {
    const result = runCommand([process.execPath, entrypoint, 'doctor', '--json'], foreignCwd)
    expect(result.code).toBe(0)
    expect(result.stderr).toBe('')
    const doctor = JSON.parse(result.stdout) as RecordValue
    const packageRoot = assertDoctorSkills(doctor, 'checkout', false)
    expect(realpathSync(root)).toBe(packageRoot)
    const catalogue = JSON.parse(readFileSync(join(root, 'data', 'catalogue.json'), 'utf8')) as RecordValue
    expect(Array.isArray(catalogue.tools)).toBe(true)
    expect(doctor.resources).toBe((catalogue.tools as unknown[]).length)
  })
})

releaseDescribe('independent private release verification', () => {
  const fixture = buildState.fixture!

  test('validates the actual tarball, installs the actual binary, and rejects integrity failures', async () => {
    const archive = resolve(fixture.result.tarball)
    const checksumFile = resolve(fixture.result.checksumFile)
    expect(lstatSync(archive).isFile()).toBe(true)
    expect(lstatSync(checksumFile).isFile()).toBe(true)

    const entries = inspectArchive(archive)
    const archiveFiles = entries
      .filter((entry) => entry.kind === 'file')
      .map((entry) => entry.filePath)
      .sort()
    const tarballBytes = readFileSync(archive)
    const archiveHash = sha256(tarballBytes)
    const checksumLines = readFileSync(checksumFile, 'utf8').trim().split(/\r?\n/)
    expect(checksumLines).toHaveLength(1)
    const checksum = checksumLines[0].match(/^([a-f0-9]{64})\s+\*?(.+)$/)
    expect(checksum).not.toBeNull()
    expect(checksum?.[1]).toBe(archiveHash)
    expect(checksum?.[2].trim().split(/[\\/]/).at(-1)).toBe(archive.split(/[\\/]/).at(-1))

    const extracted = join(scratch, 'archive-extracted')
    mkdirSync(extracted)
    const extraction = runCommand(['tar', '--no-same-owner', '--no-same-permissions', '-xzf', archive, '-C', extracted])
    expect(extraction.code).toBe(0)
    const packageRoot = realpathSync(join(extracted, 'package'))
    const actualFiles = collectFiles(packageRoot)
    expect(actualFiles).toContain('release-manifest.json')

    const packageMetadata = JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8')) as RecordValue
    const manifest = JSON.parse(readFileSync(join(packageRoot, 'release-manifest.json'), 'utf8')) as RecordValue
    const sourceCatalogue = JSON.parse(
      readFileSync(join(fixture.root, 'data', 'catalogue.json'), 'utf8')
    ) as RecordValue
    expect(packageMetadata.name).toBe('tolong-design')
    expect(packageMetadata.private).toBe(true)
    expect(packageMetadata.version).toBe('0.1.0')
    expect(packageMetadata.dependencies).toBeUndefined()
    expect(packageMetadata.devDependencies).toBeUndefined()
    expect(packageMetadata.optionalDependencies).toBeUndefined()
    expect(packageMetadata.peerDependencies).toBeUndefined()
    expect(packageMetadata.scripts).toEqual({ design: 'bun dist/design.js' })
    expect(packageMetadata.bin).toEqual({ tolongdesign: 'dist/design.js' })
    expect(isRecord(packageMetadata.engines)).toBe(true)
    expect((packageMetadata.engines as RecordValue).bun).toMatch(/^>=\s*1\.4\.0$/)
    expect(Object.keys(manifest).sort()).toEqual(['files', 'resource_count', 'schema_version', 'version'])
    expect(manifest.schema_version).toBe(1)
    expect(manifest.version).toBe(packageMetadata.version)
    expect(manifest.resource_count).toBe((sourceCatalogue.tools as unknown[]).length)
    expect(fixture.result.resourceCount).toBe((sourceCatalogue.tools as unknown[]).length)
    expect(manifest.resource_count).toBe(fixture.result.resourceCount)
    expect(isRecord(manifest.files)).toBe(true)

    const manifestFiles = manifest.files as RecordValue
    const manifestPaths = Object.keys(manifestFiles)
    expect(manifestPaths).toEqual([...manifestPaths].sort())
    expect(manifestPaths).not.toContain('release-manifest.json')
    expect(actualFiles).toEqual([...manifestPaths, 'release-manifest.json'].sort())
    expect(archiveFiles).toEqual(actualFiles)
    expect(actualFiles.some((path) => /(^|\/)(graphify-out|tests|specs|node_modules)(\/|$)/i.test(path))).toBe(false)
    expect(actualFiles.some((path) => /(^|\/)(settings\.json|\.env(?:\.|$))/i.test(path))).toBe(false)
    expect(actualFiles).not.toContain('CLAUDE.md')
    expect(actualFiles).not.toContain('GEMINI.md')
    expect(actualFiles).not.toContain('templates/tool-doc.md')
    expect(actualFiles).not.toContain('fixture-only-working-file.txt')
    expect(actualFiles).not.toContain('node_modules/yaml/LICENSE')

    for (const path of manifestPaths) {
      expect(isAllowedFile(path)).toBe(true)
      expect(path.startsWith('/')).toBe(false)
      expect(path.includes('\\')).toBe(false)
      expect(path.split('/').some((part) => part === '' || part === '.' || part === '..')).toBe(false)
      const bytes = readFileSync(join(packageRoot, ...path.split('/')))
      expect(typeof manifestFiles[path]).toBe('string')
      expect(manifestFiles[path]).toMatch(/^[a-f0-9]{64}$/)
      expect(sha256(bytes)).toBe(manifestFiles[path])

      if (
        path.startsWith('data/') ||
        path.startsWith('docs/') ||
        path === '.agents/skills/design-project/SKILL.md' ||
        path === '.claude/skills/design-project/SKILL.md'
      ) {
        expect(bytes.equals(readFileSync(join(fixture.root, ...path.split('/'))))).toBe(true)
      }
    }

    expect(
      readFileSync(join(packageRoot, 'README.md')).equals(readFileSync(join(fixture.root, 'docs', 'CLI.md')))
    ).toBe(true)
    const bundledLicenses = actualFiles.filter((path) => path.startsWith('licenses/'))
    expect(bundledLicenses).toHaveLength(1)
    expect(
      readFileSync(join(packageRoot, ...bundledLicenses[0].split('/')), 'utf8').includes('Copyright Eemeli Aro')
    ).toBe(true)
    expect(decode(readFileSync(join(packageRoot, 'dist', 'design.js'))).startsWith('#!/usr/bin/env bun\n')).toBe(true)

    const directArchiveInstall = join(scratch, 'isolated-install')
    const globalDir = join(directArchiveInstall, 'global')
    const binDir = join(directArchiveInstall, 'bin')
    const cacheDir = join(directArchiveInstall, 'cache')
    const homeDir = join(directArchiveInstall, 'home')
    const foreignCwd = join(directArchiveInstall, 'foreign-target')
    for (const directory of [globalDir, binDir, cacheDir, homeDir, foreignCwd])
      mkdirSync(directory, { recursive: true })
    const installEnvironment: Record<string, string> = {
      BUN_INSTALL: join(directArchiveInstall, 'bun-install'),
      BUN_INSTALL_GLOBAL_DIR: globalDir,
      BUN_INSTALL_BIN: binDir,
      BUN_INSTALL_CACHE_DIR: cacheDir,
      HOME: homeDir,
      USERPROFILE: homeDir,
      XDG_CONFIG_HOME: join(homeDir, '.config'),
      XDG_CACHE_HOME: join(homeDir, '.cache'),
      TMPDIR: process.env.TMPDIR ?? scratchParent,
      PATH: `${dirname(process.execPath)}${delimiter}${binDir}${delimiter}${process.env.PATH ?? ''}`,
      CI: '1',
      npm_config_offline: 'true'
    }
    const installed = runCommand([process.execPath, 'install', '--global', archive], foreignCwd, installEnvironment)
    expect(installed.code).toBe(0)
    const binary = join(binDir, 'tolongdesign')
    expect(lstatSync(binary).isSymbolicLink()).toBe(true)
    const binaryTarget = realpathSync(binary)
    assertWithin(globalDir, binaryTarget)
    expect(binaryTarget.endsWith(join('dist', 'design.js'))).toBe(true)

    const runInstalled = (args: string[]) => runCommand([binary, ...args], foreignCwd, installEnvironment)
    const version = runInstalled(['--version'])
    expect(version.code).toBe(0)
    expect(version.stdout).toBe('tolongdesign 0.1.0\n')
    expect(version.stderr).toBe('')

    const doctorCommand = runInstalled(['doctor', '--json'])
    expect(doctorCommand.code).toBe(0)
    expect(doctorCommand.stderr).toBe('')
    const doctor = JSON.parse(doctorCommand.stdout) as RecordValue
    const installedRoot = assertDoctorSkills(doctor, 'release', true)
    expect(installedRoot).not.toBe(realpathSync(root))
    assertWithin(globalDir, installedRoot)
    expect(installedRoot).toBe(realpathSync(join(binaryTarget, '..', '..')))
    expect(doctor.version).toBe('0.1.0')
    expect(doctor.resources).toBe((sourceCatalogue.tools as unknown[]).length)

    const agentSkill = readFileSync(join(installedRoot, '.agents', 'skills', 'design-project', 'SKILL.md'))
    const claudeSkill = readFileSync(join(installedRoot, '.claude', 'skills', 'design-project', 'SKILL.md'))
    expect(agentSkill.equals(claudeSkill)).toBe(true)
    expect(agentSkill.equals(readFileSync(join(root, '.agents', 'skills', 'design-project', 'SKILL.md')))).toBe(true)
    expect(claudeSkill.equals(readFileSync(join(root, '.claude', 'skills', 'design-project', 'SKILL.md')))).toBe(true)

    const contextCommand = runInstalled(['context', 'gsap', 'saaspo', '--brief', 'Project brief', '--json'])
    expect(contextCommand.code).toBe(0)
    expect(contextCommand.stderr).toBe('')
    const context = JSON.parse(contextCommand.stdout) as RecordValue
    expect(context.schema_version).toBe(1)
    expect(context.brief).toBe('Project brief')
    expect(Array.isArray(context.resources)).toBe(true)
    const resources = context.resources as RecordValue[]
    expect(resources.map((resource) => resource.slug)).toEqual(['gsap', 'saaspo'])
    const originals = [
      { slug: 'gsap', doc: 'docs/design/motion/gsap.md' },
      { slug: 'saaspo', doc: 'docs/design/design-galleries/saaspo.md' }
    ]
    for (const [index, original] of originals.entries()) {
      const sourceBytes = readFileSync(join(root, ...original.doc.split('/')))
      const packagedBytes = readFileSync(join(installedRoot, ...original.doc.split('/')))
      expect(packagedBytes.equals(sourceBytes)).toBe(true)
      expect(resources[index].slug).toBe(original.slug)
      expect(resources[index].doc).toBe(original.doc)
      expect(resources[index].markdown).toBe(decode(sourceBytes))
      expect(resources[index].sha256).toBe(sha256(sourceBytes))
    }

    for (const args of [
      ['show', 'unknown-private-release-tool', '--json'],
      ['context', 'gsap', 'unknown-private-release-tool', '--json'],
      ['search', 'scroll', '--invalid-private-release-flag'],
      ['doctor', '--json', 'unexpected-position'],
      ['doctor', '--unknown']
    ]) {
      const result = runInstalled(args)
      expect(result.code).toBe(2)
      expect(result.stdout).toBe('')
      expect(result.stderr.length).toBeGreaterThan(0)
    }

    const smokeCwd = join(scratch, 'smoke-foreign-cwd')
    mkdirSync(smokeCwd, { recursive: true })
    const smoke = runCommand([process.execPath, smokeEntrypoint, archive], smokeCwd)
    expect(smoke.code).toBe(0)
    expect(smoke.stderr).toBe('')
    const smokeSummary = JSON.parse(smoke.stdout) as RecordValue
    expect(smokeSummary.ok).toBe(true)
    expect(smokeSummary.version).toBe('0.1.0')
    expect(smokeSummary.resources).toBe((sourceCatalogue.tools as unknown[]).length)
    expect(smokeSummary.context).toEqual(['gsap', 'saaspo'])

    const missingArchive = runCommand(
      [process.execPath, smokeEntrypoint, join(scratch, 'missing-release.tgz')],
      smokeCwd
    )
    expect(missingArchive.code).not.toBe(0)
    expect(missingArchive.stdout).toBe('')
    expect(missingArchive.stderr.length).toBeGreaterThan(0)

    const corruptArchivePath = join(scratch, 'corrupt-release.tgz')
    writeFileSync(corruptArchivePath, 'not a compressed tar archive\n')
    const corruptArchive = runCommand([process.execPath, smokeEntrypoint, corruptArchivePath], smokeCwd)
    expect(corruptArchive.code).not.toBe(0)
    expect(corruptArchive.stdout).toBe('')
    expect(corruptArchive.stderr.length).toBeGreaterThan(0)

    const forbiddenRoot = join(scratch, 'forbidden-archive-root')
    mkdirSync(join(forbiddenRoot, 'package', 'graphify-out'), { recursive: true })
    writeFileSync(join(forbiddenRoot, 'package', 'graphify-out', 'GRAPH_REPORT.md'), 'forbidden fixture\n')
    const forbiddenArchive = join(scratch, 'forbidden-release.tgz')
    const forbiddenBuild = runCommand(['tar', '-czf', forbiddenArchive, '-C', forbiddenRoot, 'package'])
    expect(forbiddenBuild.code).toBe(0)

    const symlinkRoot = join(scratch, 'symlink-archive-root')
    mkdirSync(join(symlinkRoot, 'package', 'docs'), { recursive: true })
    writeFileSync(join(symlinkRoot, 'package', 'docs', 'CLI.md'), 'fixture\n')
    symlinkSync('/dev/null', join(symlinkRoot, 'package', 'docs', 'link.md'))
    const symlinkArchive = join(scratch, 'symlink-release.tgz')
    const symlinkBuild = runCommand(['tar', '-czf', symlinkArchive, '-C', symlinkRoot, 'package'])
    expect(symlinkBuild.code).toBe(0)

    const transformedArchive = (label: string, archiveName: string) => {
      const transformedRoot = join(scratch, `${label}-archive-root`)
      mkdirSync(transformedRoot, { recursive: true })
      writeFileSync(join(transformedRoot, 'entry.txt'), 'fixture\n')
      const path = join(scratch, `${label}-release.tgz`)
      const build = runCommand([
        'tar',
        '--absolute-names',
        `--transform=s|entry.txt|${archiveName}|`,
        '-czf',
        path,
        '-C',
        transformedRoot,
        'entry.txt'
      ])
      expect(build.code).toBe(0)
      return path
    }
    const traversalArchive = transformedArchive('traversal', '../outside-package.txt')
    const absoluteArchive = transformedArchive('absolute', '/outside-package.txt')

    for (const hostileArchive of [forbiddenArchive, symlinkArchive, traversalArchive, absoluteArchive]) {
      const rejected = runCommand([process.execPath, smokeEntrypoint, hostileArchive], smokeCwd)
      expect(rejected.code).not.toBe(0)
      expect(rejected.stdout).toBe('')
      expect(rejected.stderr.length).toBeGreaterThan(0)
    }

    const installedDoc = join(installedRoot, 'docs', 'design', 'motion', 'gsap.md')
    const originalDocBytes = readFileSync(installedDoc)
    const manifestPath = join(installedRoot, 'release-manifest.json')
    const originalManifestBytes = readFileSync(manifestPath)
    const originalManifest = JSON.parse(originalManifestBytes.toString('utf8')) as RecordValue
    const originalFiles = originalManifest.files as RecordValue

    try {
      writeFileSync(installedDoc, Buffer.concat([originalDocBytes, Buffer.from('\nrelease tamper fixture\n')]))
      const tampered = runInstalled(['doctor', '--json'])
      expect(tampered.code).toBe(1)
      expect(tampered.stdout).toBe('')
      expect(tampered.stderr.length).toBeGreaterThan(0)
    } finally {
      writeFileSync(installedDoc, originalDocBytes)
    }

    const restoredDoctor = runInstalled(['doctor', '--json'])
    expect(restoredDoctor.code).toBe(0)
    expect(restoredDoctor.stderr).toBe('')
    expect(assertDoctorSkills(JSON.parse(restoredDoctor.stdout) as RecordValue, 'release', true)).toBe(installedRoot)

    const missingDoc = join(installedRoot, 'docs', 'design', 'design-galleries', 'saaspo.md')
    const missingDocBytes = readFileSync(missingDoc)
    try {
      unlinkSync(missingDoc)
      const missing = runInstalled(['doctor', '--json'])
      expect(missing.code).toBe(1)
      expect(missing.stdout).toBe('')
      expect(missing.stderr.length).toBeGreaterThan(0)
    } finally {
      writeFileSync(missingDoc, missingDocBytes)
    }

    for (const invalidPath of [
      '../outside.md',
      '/outside.md',
      'docs\\design\\outside.md',
      'docs/design/./outside.md'
    ]) {
      const sortedFiles = Object.fromEntries(
        [...Object.entries(originalFiles), [invalidPath, '0'.repeat(64)] as [string, unknown]].sort(
          ([left], [right]) => (left < right ? -1 : left > right ? 1 : 0)
        )
      )
      writeFileSync(manifestPath, JSON.stringify({ ...originalManifest, files: sortedFiles }))
      const invalidManifest = runInstalled(['doctor', '--json'])
      expect(invalidManifest.code).toBe(1)
      expect(invalidManifest.stdout).toBe('')
      expect(invalidManifest.stderr.length).toBeGreaterThan(0)
    }

    const symlinkManifestPath = 'docs/design/motion/manifest-link.md'
    const symlinkPath = join(installedRoot, ...symlinkManifestPath.split('/'))
    try {
      symlinkSync(installedDoc, symlinkPath)
      const sortedFiles = Object.fromEntries(
        [...Object.entries(originalFiles), [symlinkManifestPath, sha256(originalDocBytes)] as [string, unknown]].sort(
          ([left], [right]) => (left < right ? -1 : left > right ? 1 : 0)
        )
      )
      writeFileSync(manifestPath, JSON.stringify({ ...originalManifest, files: sortedFiles }))
      const symlinkManifest = runInstalled(['doctor', '--json'])
      expect(symlinkManifest.code).toBe(1)
      expect(symlinkManifest.stdout).toBe('')
      expect(symlinkManifest.stderr.length).toBeGreaterThan(0)
    } finally {
      unlinkSync(symlinkPath)
      writeFileSync(manifestPath, originalManifestBytes)
    }

    const afterManifestRestore = runInstalled(['doctor', '--json'])
    expect(afterManifestRestore.code).toBe(0)
    expect(afterManifestRestore.stdout.length).toBeGreaterThan(0)

    const archiveBeforeSecondBuild = readFileSync(archive)
    const checksumBeforeSecondBuild = readFileSync(checksumFile)
    await expect(fixture.buildRelease(fixture.root, fixture.outDir)).rejects.toThrow()
    expect(readFileSync(archive).equals(archiveBeforeSecondBuild)).toBe(true)
    expect(readFileSync(checksumFile).equals(checksumBeforeSecondBuild)).toBe(true)
  })
})
