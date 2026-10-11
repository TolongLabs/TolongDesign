import { createHash, randomUUID } from 'node:crypto'
import {
  chmodSync,
  closeSync,
  constants,
  fstatSync,
  linkSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  openSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  unlinkSync,
  writeFileSync
} from 'node:fs'
import { dirname, isAbsolute, join, parse as parsePath, relative, resolve, sep } from 'node:path'
import { loadResources } from './design-lib'

export type ReleaseBuildResult = {
  version: string
  packageDir: string
  tarball: string
  checksumFile: string
  resourceCount: number
}

const PACKAGE_NAME = 'tolong-design'
const BINARY_NAME = 'tolongdesign'
const RUNTIME_REQUIREMENT = '>=1.4.0'
const CHECKSUM_FILE = 'SHA256SUMS'
const TOP_LEVEL_DOCS = ['docs/README.md', 'docs/PLAYBOOK.md', 'docs/WORKFLOW.md', 'docs/CLI.md'] as const
const SKILL_FILES = ['.agents/skills/design-project/SKILL.md', '.claude/skills/design-project/SKILL.md'] as const
const MARKDOWN_ROOTS = ['docs/design', 'docs/scenarios', 'docs/research'] as const

type SourceFile = {
  relativePath: string
}

type SourceStat = {
  absolutePath: string
  mode: number
}

function isWithin(parent: string, child: string): boolean {
  const pathFromParent = relative(parent, child)
  return (
    pathFromParent !== '' &&
    pathFromParent !== '..' &&
    !pathFromParent.startsWith(`..${sep}`) &&
    !isAbsolute(pathFromParent)
  )
}

function isWithinOrSame(parent: string, child: string): boolean {
  return parent === child || isWithin(parent, child)
}

function isNotFound(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT'
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

function assertPortablePath(path: string): string[] {
  if (
    path === '' ||
    path.startsWith('/') ||
    path.includes('\\') ||
    /^[A-Za-z]:/.test(path) ||
    /[\u0000-\u001f\u007f-\u009f]/.test(path)
  ) {
    throw new Error(`unsafe release path: ${JSON.stringify(path)}`)
  }

  const parts = path.split('/')
  if (
    parts.some(
      (part) =>
        part === '' ||
        part === '.' ||
        part === '..' ||
        /[<>:"|?*]/.test(part) ||
        /[. ]$/.test(part) ||
        /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(part)
    )
  ) {
    throw new Error(`unsafe release path: ${JSON.stringify(path)}`)
  }

  return parts
}

function sourceRootPath(root: string): string {
  if (typeof root !== 'string' || root.trim() === '') throw new Error('root must be a non-empty path')

  const candidate = resolve(root)
  let stats
  try {
    stats = lstatSync(candidate)
  } catch (error) {
    throw new Error(`source root is missing or cannot be read: ${candidate}: ${describeError(error)}`)
  }

  if (stats.isSymbolicLink()) throw new Error(`source root must not be a symlink: ${candidate}`)
  if (!stats.isDirectory()) throw new Error(`source root must be a directory: ${candidate}`)

  try {
    return realpathSync(candidate)
  } catch (error) {
    throw new Error(`source root cannot be resolved: ${candidate}: ${describeError(error)}`)
  }
}

function inspectSourcePath(root: string, relativePath: string, kind: 'file' | 'directory'): SourceStat {
  const parts = assertPortablePath(relativePath)
  let current = root
  let stats

  for (const [index, part] of parts.entries()) {
    current = join(current, part)
    try {
      stats = lstatSync(current)
    } catch (error) {
      throw new Error(`required input is missing or unreadable: ${relativePath}: ${describeError(error)}`)
    }

    if (stats.isSymbolicLink()) throw new Error(`symlink input is not allowed: ${relativePath}`)
    if (index < parts.length - 1 && !stats.isDirectory()) {
      throw new Error(`input path contains a non-directory component: ${relativePath}`)
    }
  }

  if (kind === 'file' && !stats.isFile()) throw new Error(`input must be a regular file: ${relativePath}`)
  if (kind === 'directory' && !stats.isDirectory()) throw new Error(`input must be a directory: ${relativePath}`)

  let realPath: string
  try {
    realPath = realpathSync(current)
  } catch (error) {
    throw new Error(`input cannot be resolved: ${relativePath}: ${describeError(error)}`)
  }
  if (!isWithin(root, realPath)) throw new Error(`input resolves outside the source root: ${relativePath}`)

  return { absolutePath: current, mode: stats.mode & 0o777 }
}

function readSourceFile(root: string, relativePath: string): Buffer {
  const source = inspectSourcePath(root, relativePath, 'file')
  let descriptor: number
  try {
    descriptor = openSync(source.absolutePath, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0))
  } catch (error) {
    throw new Error(`input cannot be opened safely: ${relativePath}: ${describeError(error)}`)
  }

  try {
    if (!fstatSync(descriptor).isFile()) throw new Error(`input must be a regular file: ${relativePath}`)
    return readFileSync(descriptor)
  } finally {
    closeSync(descriptor)
  }
}

function parseJsonFile<T>(root: string, relativePath: string): T {
  const bytes = readSourceFile(root, relativePath)
  try {
    return JSON.parse(bytes.toString('utf8')) as T
  } catch (error) {
    throw new Error(`${relativePath} is not valid JSON: ${describeError(error)}`)
  }
}

function isValidSemver(version: unknown): version is string {
  if (typeof version !== 'string') return false
  const match = version.match(
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/
  )
  if (!match) return false

  const prerelease = match[4]
  if (prerelease === undefined) return true
  return prerelease
    .split('.')
    .every((identifier) => !/^\d+$/.test(identifier) || identifier === '0' || !identifier.startsWith('0'))
}

function readReleaseMetadata(root: string): { version: string } {
  const metadata = parseJsonFile<Record<string, unknown>>(root, 'package.json')
  if (metadata.private !== true) throw new Error('package.json must set private to true')
  if (metadata.name !== PACKAGE_NAME) throw new Error(`package.json name must be ${PACKAGE_NAME}`)
  if (!isValidSemver(metadata.version)) throw new Error('package.json version must be valid semantic version text')
  return { version: metadata.version }
}

function collectMarkdown(root: string, directory: string): SourceFile[] {
  const rootStat = inspectSourcePath(root, directory, 'directory')
  const files: SourceFile[] = []

  function visit(sourceRelativePath: string, sourceAbsolutePath: string): void {
    let entries
    try {
      entries = readdirSync(sourceAbsolutePath, { withFileTypes: true })
    } catch (error) {
      throw new Error(`input directory cannot be read: ${sourceRelativePath}: ${describeError(error)}`)
    }

    entries.sort((left, right) => (left.name < right.name ? -1 : left.name > right.name ? 1 : 0))
    for (const entry of entries) {
      const childRelativePath = `${sourceRelativePath}/${entry.name}`
      const child = inspectSourceEntry(root, childRelativePath)
      if (child.kind === 'directory') {
        if (/\.md$/i.test(entry.name)) throw new Error(`Markdown input must be a regular file: ${childRelativePath}`)
        visit(childRelativePath, child.absolutePath)
      } else if (/\.md$/i.test(entry.name)) {
        files.push({ relativePath: childRelativePath })
      }
    }
  }

  visit(directory, rootStat.absolutePath)
  return files
}

function inspectSourceEntry(root: string, relativePath: string): SourceStat & { kind: 'file' | 'directory' } {
  const parts = assertPortablePath(relativePath)
  let current = root
  let stats

  for (const [index, part] of parts.entries()) {
    current = join(current, part)
    try {
      stats = lstatSync(current)
    } catch (error) {
      throw new Error(`input cannot be inspected: ${relativePath}: ${describeError(error)}`)
    }
    if (stats.isSymbolicLink()) throw new Error(`symlink input is not allowed: ${relativePath}`)
    if (index < parts.length - 1 && !stats.isDirectory()) {
      throw new Error(`input path contains a non-directory component: ${relativePath}`)
    }
  }

  if (!stats.isFile() && !stats.isDirectory()) {
    throw new Error(`input must be a regular file or directory: ${relativePath}`)
  }

  let realPath: string
  try {
    realPath = realpathSync(current)
  } catch (error) {
    throw new Error(`input cannot be resolved: ${relativePath}: ${describeError(error)}`)
  }
  if (!isWithin(root, realPath)) throw new Error(`input resolves outside the source root: ${relativePath}`)

  return {
    absolutePath: current,
    mode: stats.mode & 0o777,
    kind: stats.isDirectory() ? 'directory' : 'file'
  }
}

function assertOutputPathIsSeparate(root: string, outputPath: string): void {
  if (root === outputPath || isWithin(outputPath, root)) {
    throw new Error(`output directory must not be the source root or an ancestor of it: ${outputPath}`)
  }

  const protectedPaths = [
    'data',
    'docs',
    'scripts',
    'node_modules',
    '.git',
    '.agents/skills/design-project',
    '.claude/skills/design-project'
  ].map((path) => resolve(root, path))

  if (protectedPaths.some((protectedPath) => isWithinOrSame(protectedPath, outputPath))) {
    throw new Error(`output directory must be outside source payload directories: ${outputPath}`)
  }
}

function ensureOutputDirectory(path: string): string {
  const absolute = resolve(path)
  const parsed = parsePath(absolute)
  const components = absolute.slice(parsed.root.length).split(sep).filter(Boolean)
  let current = parsed.root

  for (const component of components) {
    current = join(current, component)
    let stats
    try {
      stats = lstatSync(current)
    } catch (error) {
      if (!isNotFound(error)) throw new Error(`output path cannot be inspected: ${current}: ${describeError(error)}`)
      try {
        mkdirSync(current)
        stats = lstatSync(current)
      } catch (createError) {
        throw new Error(`output directory cannot be created: ${current}: ${describeError(createError)}`)
      }
    }

    if (stats.isSymbolicLink()) throw new Error(`output path must not contain symlinks: ${current}`)
    if (!stats.isDirectory()) throw new Error(`output path component must be a directory: ${current}`)
  }

  try {
    return realpathSync(absolute)
  } catch (error) {
    throw new Error(`output directory cannot be resolved: ${absolute}: ${describeError(error)}`)
  }
}

function assertPathDoesNotExist(path: string, label: string): void {
  let exists = false
  try {
    lstatSync(path)
    exists = true
  } catch (error) {
    if (!isNotFound(error)) throw new Error(`${label} cannot be inspected: ${path}: ${describeError(error)}`)
  }
  if (exists) throw new Error(`${label} already exists; refusing to overwrite: ${path}`)
}

function writePayloadFile(packageDir: string, relativePath: string, bytes: Uint8Array, mode = 0o644): void {
  const parts = assertPortablePath(relativePath)
  const destination = resolve(packageDir, ...parts)
  if (!isWithin(packageDir, destination)) throw new Error(`release path escapes package root: ${relativePath}`)

  mkdirSync(dirname(destination), { recursive: true })
  writeFileSync(destination, bytes, { mode: mode & 0o777 })
}

function copySourceFile(root: string, packageDir: string, sourcePath: string, destinationPath = sourcePath): void {
  const source = inspectSourcePath(root, sourcePath, 'file')
  writePayloadFile(packageDir, destinationPath, readSourceFile(root, sourcePath), source.mode)
}

function copyMarkdownTree(root: string, packageDir: string, files: SourceFile[]): void {
  for (const file of files) copySourceFile(root, packageDir, file.relativePath)
}

function validateYamlLicense(root: string): void {
  const metadata = parseJsonFile<Record<string, unknown>>(root, 'node_modules/yaml/package.json')
  if (metadata.name !== 'yaml') throw new Error('node_modules/yaml/package.json must describe the yaml dependency')
  inspectSourcePath(root, 'node_modules/yaml/LICENSE', 'file')
}

function stagedFiles(packageDir: string): string[] {
  const files: string[] = []

  function visit(directory: string, prefix: string): void {
    const entries = readdirSync(directory, { withFileTypes: true })
    entries.sort((left, right) => (left.name < right.name ? -1 : left.name > right.name ? 1 : 0))
    for (const entry of entries) {
      const relativePath = prefix === '' ? entry.name : `${prefix}/${entry.name}`
      const parts = assertPortablePath(relativePath)
      const absolutePath = resolve(packageDir, ...parts)
      if (!isWithin(packageDir, absolutePath)) throw new Error(`staged file escapes package root: ${relativePath}`)

      let stats
      try {
        stats = lstatSync(absolutePath)
      } catch (error) {
        throw new Error(`staged path cannot be inspected: ${relativePath}: ${describeError(error)}`)
      }
      if (stats.isSymbolicLink()) throw new Error(`staged package must not contain symlinks: ${relativePath}`)
      if (stats.isDirectory()) visit(absolutePath, relativePath)
      else if (stats.isFile()) files.push(relativePath)
      else throw new Error(`staged path must be a regular file or directory: ${relativePath}`)
    }
  }

  visit(packageDir, '')
  return files.sort()
}

function sha256(bytes: Uint8Array): string {
  return createHash('sha256').update(bytes).digest('hex')
}

function packageManifest(packageDir: string, version: string, resourceCount: number): void {
  const payloadPaths = stagedFiles(packageDir).filter((path) => path !== 'release-manifest.json')
  const files: Record<string, string> = {}

  for (const path of payloadPaths) {
    assertPortablePath(path)
    const absolutePath = resolve(packageDir, ...path.split('/'))
    if (!isWithin(packageDir, absolutePath)) throw new Error(`manifest path escapes package root: ${path}`)
    const stats = lstatSync(absolutePath)
    if (stats.isSymbolicLink() || !stats.isFile()) throw new Error(`manifest payload must be a regular file: ${path}`)
    files[path] = sha256(readFileSync(absolutePath))
  }

  writePayloadFile(
    packageDir,
    'release-manifest.json',
    Buffer.from(`${JSON.stringify({ schema_version: 1, version, resource_count: resourceCount, files }, null, 2)}\n`)
  )
}

async function bundleCli(root: string, packageDir: string): Promise<void> {
  const result = await Bun.build({
    entrypoints: [join(root, 'scripts', 'design.ts')],
    outdir: join(packageDir, 'dist'),
    target: 'bun',
    format: 'esm',
    packages: 'bundle',
    sourcemap: 'none',
    env: 'disable'
  })

  if (!result.success) {
    const details = result.logs.map((log) => log.message).join('\n')
    throw new Error(`Bun CLI bundle failed${details === '' ? '' : `:\n${details}`}`)
  }

  const executable = join(packageDir, 'dist', 'design.js')
  let bytes: Buffer
  try {
    bytes = readFileSync(executable)
  } catch (error) {
    throw new Error(`Bun bundle did not produce dist/design.js: ${describeError(error)}`)
  }

  const source = bytes.toString('utf8')
  const firstLine = source.split(/\r?\n/, 1)[0]
  if (firstLine.startsWith('#!') && !/\bbun\b/i.test(firstLine)) {
    throw new Error(`bundled CLI has a non-Bun shebang: ${firstLine}`)
  }
  if (!firstLine.startsWith('#!')) bytes = Buffer.concat([Buffer.from('#!/usr/bin/env bun\n'), bytes])

  writeFileSync(executable, bytes)
  chmodSync(executable, 0o755)
}

function writeStagedPackageJson(packageDir: string, version: string): void {
  const metadata = {
    name: PACKAGE_NAME,
    version,
    private: true,
    type: 'module',
    description: "TolongLabs' private web-design reference CLI and curated documentation.",
    scripts: { design: 'bun dist/design.js' },
    bin: { [BINARY_NAME]: 'dist/design.js' },
    engines: { bun: RUNTIME_REQUIREMENT }
  }
  writePayloadFile(packageDir, 'package.json', Buffer.from(`${JSON.stringify(metadata, null, 2)}\n`))
}

async function packStagedPackage(packageDir: string, outDir: string, archivePath: string): Promise<string> {
  const packProcess = Bun.spawn(
    [process.execPath, 'pm', 'pack', '--destination', outDir, '--ignore-scripts', '--quiet'],
    { cwd: packageDir, stdout: 'pipe', stderr: 'pipe' }
  )
  const [stdout, stderr] = await Promise.all([
    new Response(packProcess.stdout).text(),
    new Response(packProcess.stderr).text()
  ])
  const exitCode = await packProcess.exited
  if (exitCode !== 0) {
    const details = [stderr.trim(), stdout.trim()].filter(Boolean).join('\n')
    throw new Error(`bun pm pack failed with exit code ${exitCode}${details === '' ? '' : `:\n${details}`}`)
  }

  const archiveStats = lstatSync(archivePath)
  if (archiveStats.isSymbolicLink() || !archiveStats.isFile()) {
    throw new Error(`bun pm pack did not create a regular archive: ${archivePath}`)
  }
  return archivePath
}

function publishWithoutOverwrite(sourcePath: string, destinationPath: string, label: string): void {
  try {
    linkSync(sourcePath, destinationPath)
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'EEXIST') {
      throw new Error(`${label} already exists; refusing to overwrite: ${destinationPath}`)
    }
    throw new Error(`${label} could not be published: ${destinationPath}: ${describeError(error)}`)
  }
}

/** Build the private, allowlisted release package and its compressed archive checksum. */
export async function buildRelease(root: string, outDir: string): Promise<ReleaseBuildResult> {
  const sourceRoot = sourceRootPath(root)
  const releaseMetadata = readReleaseMetadata(sourceRoot)

  for (const path of ['scripts/design.ts', 'scripts/design-lib.ts', 'data/catalogue.json', 'data/index.json']) {
    inspectSourcePath(sourceRoot, path, 'file')
  }
  for (const path of TOP_LEVEL_DOCS) inspectSourcePath(sourceRoot, path, 'file')
  for (const path of MARKDOWN_ROOTS) inspectSourcePath(sourceRoot, path, 'directory')
  for (const path of SKILL_FILES) inspectSourcePath(sourceRoot, path, 'file')
  validateYamlLicense(sourceRoot)

  const markdownFiles = MARKDOWN_ROOTS.flatMap((directory) => collectMarkdown(sourceRoot, directory))
  const agentSkill = readSourceFile(sourceRoot, SKILL_FILES[0])
  const claudeSkill = readSourceFile(sourceRoot, SKILL_FILES[1])
  if (!agentSkill.equals(claudeSkill)) throw new Error('design-project skill mirrors must be byte-identical')
  const resourceCount = loadResources(sourceRoot).length

  if (typeof outDir !== 'string' || outDir.trim() === '') throw new Error('outDir must be a non-empty path')
  const requestedOutput = resolve(outDir)
  assertOutputPathIsSeparate(sourceRoot, requestedOutput)
  const outputDirectory = ensureOutputDirectory(requestedOutput)
  assertOutputPathIsSeparate(sourceRoot, outputDirectory)

  const tarballName = `${PACKAGE_NAME}-${releaseMetadata.version}.tgz`
  const tarballPath = join(outputDirectory, tarballName)
  const checksumPath = join(outputDirectory, CHECKSUM_FILE)
  assertPathDoesNotExist(tarballPath, 'release archive')
  assertPathDoesNotExist(checksumPath, 'checksum file')

  let packageDir: string | undefined
  let archiveDirectory: string | undefined
  let archiveCreated = false
  let checksumCreated = false
  let temporaryChecksum: string | undefined

  try {
    packageDir = mkdtempSync(join(outputDirectory, `.tolong-design-${releaseMetadata.version}-stage-`))
    writeStagedPackageJson(packageDir, releaseMetadata.version)
    copySourceFile(sourceRoot, packageDir, 'docs/CLI.md', 'README.md')
    for (const file of ['data/catalogue.json', 'data/index.json', ...TOP_LEVEL_DOCS]) {
      copySourceFile(sourceRoot, packageDir, file)
    }
    copyMarkdownTree(sourceRoot, packageDir, markdownFiles)
    for (const skillFile of SKILL_FILES) copySourceFile(sourceRoot, packageDir, skillFile)
    copySourceFile(sourceRoot, packageDir, 'node_modules/yaml/LICENSE', 'licenses/yaml-LICENSE')

    await bundleCli(sourceRoot, packageDir)
    packageManifest(packageDir, releaseMetadata.version, resourceCount)

    archiveDirectory = mkdtempSync(join(outputDirectory, '.tolong-design-archive-'))
    const temporaryArchive = join(archiveDirectory, tarballName)
    await packStagedPackage(packageDir, archiveDirectory, temporaryArchive)
    publishWithoutOverwrite(temporaryArchive, tarballPath, 'release archive')
    archiveCreated = true

    const checksum = `${sha256(readFileSync(tarballPath))}  ${tarballName}\n`
    temporaryChecksum = `.SHA256SUMS-${randomUUID()}`
    const temporaryChecksumPath = join(outputDirectory, temporaryChecksum)
    writeFileSync(temporaryChecksumPath, checksum, { flag: 'wx', mode: 0o644 })
    publishWithoutOverwrite(temporaryChecksumPath, checksumPath, 'checksum file')
    checksumCreated = true
    unlinkSync(temporaryChecksumPath)
    temporaryChecksum = undefined

    return {
      version: releaseMetadata.version,
      packageDir,
      tarball: tarballPath,
      checksumFile: checksumPath,
      resourceCount
    }
  } catch (error) {
    if (temporaryChecksum !== undefined) rmSync(join(outputDirectory, temporaryChecksum), { force: true })
    if (checksumCreated) rmSync(checksumPath, { force: true })
    if (archiveCreated) rmSync(tarballPath, { force: true })
    if (packageDir !== undefined) rmSync(packageDir, { recursive: true, force: true })
    throw error
  } finally {
    if (archiveDirectory !== undefined) rmSync(archiveDirectory, { recursive: true, force: true })
  }
}
