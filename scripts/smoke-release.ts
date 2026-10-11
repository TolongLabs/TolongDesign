import { createHash } from 'node:crypto'
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync
} from 'node:fs'
import { delimiter, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { tmpdir } from 'node:os'

type RecordValue = Record<string, unknown>
type ArchiveEntry = { name: string; filePath: string; kind: 'file' | 'directory' }

const decode = (bytes: Uint8Array) => new TextDecoder().decode(bytes)
const hash = (bytes: Uint8Array) => createHash('sha256').update(bytes).digest('hex')

function fail(message: string): never {
  throw new Error(message)
}

function isRecord(value: unknown): value is RecordValue {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function runCommand(cmd: string[], cwd?: string, env?: Record<string, string>) {
  const result = Bun.spawnSync({
    cmd,
    ...(cwd ? { cwd } : {}),
    ...(env ? { env } : {}),
    stdout: 'pipe',
    stderr: 'pipe'
  })
  return {
    code: result.exitCode,
    stdout: decode(result.stdout),
    stderr: decode(result.stderr)
  }
}

function runRequired(cmd: string[], cwd?: string, env?: Record<string, string>) {
  const result = runCommand(cmd, cwd, env)
  if (result.code !== 0) {
    const detail = result.stderr.trim() || result.stdout.trim() || `exit code ${result.code}`
    fail(`${cmd[0]} failed: ${detail}`)
  }
  return result
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

function safeArchiveName(name: string): { filePath: string; directory: boolean } {
  if (name === '' || name.startsWith('/') || name.includes('\\') || /[\u0000-\u001f\u007f]/.test(name)) {
    fail(`unsafe archive path: ${JSON.stringify(name)}`)
  }
  if (/^[A-Za-z]:/.test(name)) fail(`absolute archive path: ${JSON.stringify(name)}`)

  const directory = name.endsWith('/')
  const normalized = directory ? name.slice(0, -1) : name
  const parts = normalized.split('/')
  if (parts.some((part) => part === '' || part === '.' || part === '..')) {
    fail(`unsafe archive path: ${JSON.stringify(name)}`)
  }
  if (parts[0] !== 'package') fail(`archive member is outside package/: ${JSON.stringify(name)}`)
  if (parts.length === 1 && !directory) fail('package root must be a directory')

  const filePath = parts.slice(1).join('/')
  if (!directory && !isAllowedFile(filePath)) fail(`archive member is not allowlisted: ${JSON.stringify(name)}`)
  return { filePath, directory }
}

function inspectArchive(archivePath: string): ArchiveEntry[] {
  const names = runRequired(['tar', '-tzf', archivePath])
    .stdout.split(/\r?\n/)
    .filter((line) => line !== '')
  const details = runRequired(['tar', '-tvzf', archivePath])
    .stdout.split(/\r?\n/)
    .filter((line) => line !== '')
  if (names.length === 0 || details.length !== names.length) fail('archive entry listing is empty or inconsistent')

  const entries: ArchiveEntry[] = []
  const seen = new Set<string>()
  for (let index = 0; index < names.length; index += 1) {
    const name = names[index]
    const kindCharacter = details[index][0]
    if (kindCharacter !== '-' && kindCharacter !== 'd') {
      fail(`archive member is not a regular file or directory: ${JSON.stringify(name)}`)
    }

    const safe = safeArchiveName(name)
    const key = `${safe.directory ? 'd' : 'f'}:${name}`
    if (seen.has(key)) fail(`duplicate archive member: ${JSON.stringify(name)}`)
    seen.add(key)
    if (safe.directory !== (kindCharacter === 'd'))
      fail(`archive member type does not match its name: ${JSON.stringify(name)}`)
    entries.push({ name, filePath: safe.filePath, kind: safe.directory ? 'directory' : 'file' })
  }

  const files = entries.filter((entry) => entry.kind === 'file').map((entry) => entry.filePath)
  if (!files.includes('release-manifest.json')) fail('archive has no release-manifest.json')
  if (!files.includes('package.json')) fail('archive has no package.json')
  if (!files.includes('data/catalogue.json')) fail('archive has no data/catalogue.json')
  if (!files.some((path) => path.startsWith('licenses/'))) fail('archive has no bundled dependency licence')

  for (const entry of entries) {
    if (entry.kind !== 'directory' || entry.filePath === '') continue
    if (!files.some((path) => path.startsWith(`${entry.filePath}/`))) {
      fail(`archive directory has no allowlisted file below it: ${JSON.stringify(entry.name)}`)
    }
  }

  return entries
}

function collectFiles(directory: string, prefix = ''): string[] {
  const paths: string[] = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const relativePath = prefix === '' ? entry.name : `${prefix}/${entry.name}`
    const absolutePath = join(directory, entry.name)
    if (entry.isSymbolicLink()) fail(`installed package contains a symlink: ${relativePath}`)
    if (entry.isDirectory()) paths.push(...collectFiles(absolutePath, relativePath))
    else if (entry.isFile()) paths.push(relativePath)
    else fail(`installed package contains a non-regular entry: ${relativePath}`)
  }
  return paths.sort()
}

function assertWithin(parent: string, child: string, label: string): void {
  const pathFromParent = relative(parent, child)
  if (pathFromParent === '..' || pathFromParent.startsWith(`..${sep}`) || isAbsolute(pathFromParent)) {
    fail(`${label} resolves outside its package root`)
  }
}

function verifyExtractedPackage(packageRoot: string, entries: ArchiveEntry[]) {
  const packageMetadataPath = join(packageRoot, 'package.json')
  const manifestPath = join(packageRoot, 'release-manifest.json')
  const cataloguePath = join(packageRoot, 'data', 'catalogue.json')

  const packageMetadata = JSON.parse(readFileSync(packageMetadataPath, 'utf8')) as RecordValue
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as RecordValue
  const catalogue = JSON.parse(readFileSync(cataloguePath, 'utf8')) as RecordValue

  if (packageMetadata.name !== 'tolong-design') fail('package name is not tolong-design')
  if (typeof packageMetadata.version !== 'string' || packageMetadata.version.trim() === '')
    fail('package version is missing')
  if (packageMetadata.private !== true) fail('package metadata is not private')
  if (packageMetadata.dependencies !== undefined || packageMetadata.devDependencies !== undefined) {
    fail('release package declares dependencies')
  }
  if (packageMetadata.optionalDependencies !== undefined || packageMetadata.peerDependencies !== undefined) {
    fail('release package declares dependencies')
  }
  if (!isRecord(packageMetadata.scripts) || Object.keys(packageMetadata.scripts).length !== 1) {
    fail('release package must expose only the design script')
  }
  if (packageMetadata.scripts.design !== 'bun dist/design.js') fail('design script does not target the bundled CLI')
  if (!isRecord(packageMetadata.bin) || packageMetadata.bin.tolongdesign !== 'dist/design.js') {
    fail('package does not map tolongdesign to dist/design.js')
  }
  if (!isRecord(packageMetadata.engines) || typeof packageMetadata.engines.bun !== 'string') {
    fail('minimum Bun runtime is missing')
  }
  if (!/^>=\s*1\.4\.0$/.test(packageMetadata.engines.bun)) fail('minimum Bun runtime is not 1.4.0')

  if (Object.keys(manifest).sort().join(',') !== 'files,resource_count,schema_version,version') {
    fail('release manifest has unexpected keys')
  }
  if (manifest.schema_version !== 1 || manifest.version !== packageMetadata.version) {
    fail('release manifest schema or version does not match package metadata')
  }
  if (!isRecord(manifest.files)) fail('release manifest files is not a path-to-hash map')
  if (!Array.isArray(catalogue.tools)) fail('catalogue tools is not an array')
  if (manifest.resource_count !== catalogue.tools.length)
    fail('release manifest resource count does not match the catalogue')

  const manifestPaths = Object.keys(manifest.files)
  if (manifestPaths.join('\0') !== [...manifestPaths].sort().join('\0'))
    fail('release manifest file paths are not sorted')
  if (manifestPaths.includes('release-manifest.json')) fail('release manifest must not hash itself')

  for (const path of manifestPaths) {
    const safe = safeArchiveName(`package/${path}`)
    if (safe.directory || safe.filePath !== path || !isAllowedFile(path))
      fail(`invalid manifest path: ${JSON.stringify(path)}`)
    const expectedHash = manifest.files[path]
    if (typeof expectedHash !== 'string' || !/^[a-f0-9]{64}$/.test(expectedHash)) {
      fail(`invalid manifest hash for ${JSON.stringify(path)}`)
    }
    const filePath = resolve(packageRoot, ...path.split('/'))
    assertWithin(packageRoot, filePath, 'manifest path')
    const stat = lstatSync(filePath)
    if (!stat.isFile() || stat.isSymbolicLink()) fail(`manifest path is not a regular file: ${JSON.stringify(path)}`)
    if (hash(readFileSync(filePath)) !== expectedHash) fail(`manifest hash mismatch: ${JSON.stringify(path)}`)
  }

  const actualPaths = collectFiles(packageRoot)
  const expectedPaths = [...manifestPaths, 'release-manifest.json'].sort()
  if (actualPaths.join('\0') !== expectedPaths.join('\0'))
    fail('manifest keys do not match the extracted package files')

  const archiveFilePaths = entries
    .filter((entry) => entry.kind === 'file')
    .map((entry) => entry.filePath)
    .sort()
  if (archiveFilePaths.join('\0') !== actualPaths.join('\0'))
    fail('archive files do not match the extracted package files')

  const licensePaths = actualPaths.filter((path) => path.startsWith('licenses/'))
  if (licensePaths.length !== 1) fail('release package must contain only the bundled YAML dependency licence')
  if (!readFileSync(join(packageRoot, ...licensePaths[0].split('/')), 'utf8').includes('Copyright Eemeli Aro')) {
    fail('bundled YAML dependency licence was not found')
  }

  const bundle = readFileSync(join(packageRoot, 'dist', 'design.js'))
  if (!decode(bundle).startsWith('#!/usr/bin/env bun\n')) fail('bundled CLI has no Bun executable shebang')

  return {
    version: packageMetadata.version,
    resourceCount: catalogue.tools.length,
    packageMetadata,
    manifest,
    catalogue
  }
}

function installArchive(archivePath: string, scratch: string) {
  const installRoot = join(scratch, 'bun-install')
  const globalDir = join(scratch, 'global')
  const binDir = join(scratch, 'bin')
  const cacheDir = join(scratch, 'cache')
  const homeDir = join(scratch, 'home')
  const foreignCwd = join(scratch, 'foreign-project')
  for (const directory of [installRoot, globalDir, binDir, cacheDir, homeDir, foreignCwd]) {
    mkdirSync(directory, { recursive: true })
  }

  const env: Record<string, string> = {
    BUN_INSTALL: installRoot,
    BUN_INSTALL_GLOBAL_DIR: globalDir,
    BUN_INSTALL_BIN: binDir,
    BUN_INSTALL_CACHE_DIR: cacheDir,
    HOME: homeDir,
    USERPROFILE: homeDir,
    XDG_CONFIG_HOME: join(homeDir, '.config'),
    XDG_CACHE_HOME: join(homeDir, '.cache'),
    TMPDIR: tmpdir(),
    PATH: `${dirname(process.execPath)}${delimiter}${binDir}${delimiter}${process.env.PATH ?? ''}`,
    CI: '1',
    npm_config_offline: 'true'
  }

  runRequired([process.execPath, 'install', '--global', archivePath], foreignCwd, env)
  const binary = join(binDir, 'tolongdesign')
  const binaryStat = lstatSync(binary)
  if (!binaryStat.isSymbolicLink()) fail('global tolongdesign command is not a binary link')
  const binaryTarget = realpathSync(binary)
  assertWithin(globalDir, binaryTarget, 'global binary link')

  return { binary, binaryTarget, globalDir, foreignCwd, env }
}

function runInstalled(binary: string, args: string[], cwd: string, env: Record<string, string>) {
  return runCommand([binary, ...args], cwd, env)
}

function doctorResult(result: ReturnType<typeof runCommand>): RecordValue {
  if (result.code !== 0) fail(`doctor failed (${result.code}): ${result.stderr.trim() || result.stdout.trim()}`)
  if (result.stderr !== '') fail('doctor wrote unexpected stderr')
  let output: unknown
  try {
    output = JSON.parse(result.stdout)
  } catch {
    fail('doctor did not write one complete JSON value')
  }
  if (!isRecord(output)) fail('doctor JSON is not an object')
  return output
}

function verifyDoctorSkills(doctor: RecordValue): string {
  if (typeof doctor.root !== 'string' || !isAbsolute(doctor.root)) fail('doctor root is not an absolute path')
  const packageRoot = realpathSync(doctor.root)
  if (doctor.mode !== 'release' || doctor.manifest_verified !== true) fail('doctor did not verify release mode')
  if (doctor.schema_version !== 1 || doctor.runtime !== 'bun') fail('doctor schema or runtime is incorrect')
  if (!Array.isArray(doctor.warnings)) fail('doctor warnings is not an array')
  if (!isRecord(doctor.skill_paths) && !Array.isArray(doctor.skill_paths)) fail('doctor skill_paths is missing')

  const values = Array.isArray(doctor.skill_paths) ? doctor.skill_paths : Object.values(doctor.skill_paths)
  const skillPaths = values.filter((value): value is string => typeof value === 'string')
  const requiredSuffixes = ['.agents/skills/design-project/SKILL.md', '.claude/skills/design-project/SKILL.md']
  for (const suffix of requiredSuffixes) {
    const reported = skillPaths.find((path) => path.replaceAll('\\', '/').endsWith(suffix))
    if (!reported) fail(`doctor did not report ${suffix}`)
    const resolved = isAbsolute(reported) ? resolve(reported) : resolve(packageRoot, reported)
    assertWithin(packageRoot, resolved, 'doctor skill path')
    if (!existsSync(resolved) || !lstatSync(resolved).isFile()) fail(`doctor skill path is missing: ${suffix}`)
  }

  return packageRoot
}

function runSmoke(archivePath: string) {
  const inputPath = resolve(archivePath)
  const inputStat = lstatSync(inputPath)
  if (!inputStat.isFile() || inputStat.isSymbolicLink()) fail('archive path must be a regular file')

  const scratch = mkdtempSync(join(tmpdir(), 'tolong-design-release-smoke-'))
  try {
    const isolatedArchive = join(scratch, 'release.tgz')
    copyFileSync(inputPath, isolatedArchive)
    const entries = inspectArchive(isolatedArchive)

    const extractRoot = join(scratch, 'extracted')
    mkdirSync(extractRoot)
    runRequired(['tar', '--no-same-owner', '--no-same-permissions', '-xzf', isolatedArchive, '-C', extractRoot])
    const packageRoot = realpathSync(join(extractRoot, 'package'))
    const metadata = verifyExtractedPackage(packageRoot, entries)

    const install = installArchive(isolatedArchive, scratch)
    const version = runInstalled(install.binary, ['--version'], install.foreignCwd, install.env)
    if (version.code !== 0 || version.stderr !== '' || version.stdout !== `tolongdesign ${metadata.version}\n`) {
      fail('installed binary did not report the package version from the foreign cwd')
    }

    const doctor = doctorResult(runInstalled(install.binary, ['doctor', '--json'], install.foreignCwd, install.env))
    const diagnosedRoot = verifyDoctorSkills(doctor)
    const linkedPackageRoot = realpathSync(join(install.binaryTarget, '..', '..'))
    if (diagnosedRoot !== linkedPackageRoot) fail('doctor root does not match the installed binary package')
    if (doctor.version !== metadata.version || doctor.resources !== metadata.resourceCount) {
      fail('doctor version or catalogue-derived resource count is incorrect')
    }
    assertWithin(install.globalDir, diagnosedRoot, 'doctor root')

    const agentSkillPath = join(diagnosedRoot, '.agents', 'skills', 'design-project', 'SKILL.md')
    const claudeSkillPath = join(diagnosedRoot, '.claude', 'skills', 'design-project', 'SKILL.md')
    const agentSkill = readFileSync(agentSkillPath)
    const claudeSkill = readFileSync(claudeSkillPath)
    if (!agentSkill.equals(claudeSkill)) fail('installed agent skill mirrors are not byte-identical')
    if (!agentSkill.equals(readFileSync(join(packageRoot, '.agents', 'skills', 'design-project', 'SKILL.md')))) {
      fail('installed agent skill differs from the validated archive')
    }

    const context = runInstalled(
      install.binary,
      ['context', 'gsap', 'saaspo', '--brief', 'Project brief', '--json'],
      install.foreignCwd,
      install.env
    )
    if (context.code !== 0 || context.stderr !== '') fail('installed context command failed')
    const contextJson = JSON.parse(context.stdout) as RecordValue
    if (
      contextJson.schema_version !== 1 ||
      contextJson.brief !== 'Project brief' ||
      !Array.isArray(contextJson.resources)
    ) {
      fail('installed context schema or brief is incorrect')
    }

    const expectedDocs = [
      { slug: 'gsap', path: 'docs/design/motion/gsap.md' },
      { slug: 'saaspo', path: 'docs/design/design-galleries/saaspo.md' }
    ]
    if (contextJson.resources.length !== expectedDocs.length)
      fail('context did not return both complete requested documents')
    for (const [index, expected] of expectedDocs.entries()) {
      const resource = contextJson.resources[index]
      if (!isRecord(resource) || resource.slug !== expected.slug || resource.doc !== expected.path) {
        fail(`context resource ${expected.slug} is missing or out of order`)
      }
      const bytes = readFileSync(join(diagnosedRoot, ...expected.path.split('/')))
      if (!bytes.equals(readFileSync(join(packageRoot, ...expected.path.split('/'))))) {
        fail(`installed ${expected.slug} Markdown differs from the validated archive`)
      }
      if (resource.markdown !== decode(bytes) || resource.sha256 !== hash(bytes)) {
        fail(`context ${expected.slug} Markdown or SHA256 does not match installed source bytes`)
      }
    }

    for (const args of [
      ['show', 'release-smoke-unknown-tool', '--json'],
      ['search', 'scroll', '--invalid-release-smoke-flag'],
      ['doctor', '--json', 'unexpected-position']
    ]) {
      const invalid = runInstalled(install.binary, args, install.foreignCwd, install.env)
      if (invalid.code !== 2 || invalid.stdout !== '' || invalid.stderr.trim() === '') {
        fail(`invalid command did not return code 2 with empty stdout: ${args.join(' ')}`)
      }
    }

    return {
      ok: true,
      version: metadata.version,
      resources: metadata.resourceCount,
      context: expectedDocs.map((doc) => doc.slug)
    }
  } finally {
    rmSync(scratch, { recursive: true, force: true })
  }
}

export function smokeRelease(args: string[]): RecordValue {
  if (args.length !== 1 || args[0] === '') fail('usage: bun scripts/smoke-release.ts <archive.tgz>')
  return runSmoke(args[0])
}

if (import.meta.main) {
  try {
    process.stdout.write(`${JSON.stringify(smokeRelease(process.argv.slice(2)))}\n`)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    process.stderr.write(`Release smoke failed: ${message}\n`)
    process.exitCode = 1
  }
}
