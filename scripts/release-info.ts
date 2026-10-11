import { createHash } from 'node:crypto'
import { existsSync, lstatSync, readFileSync, realpathSync } from 'node:fs'
import { isAbsolute, join, relative, resolve, sep } from 'node:path'
import { DataError, loadResources } from './design-lib'

export type InstallationInfo = {
  schema_version: 1
  version: string
  runtime: 'bun'
  mode: 'checkout' | 'release'
  root: string
  resources: number
  manifest_verified: boolean
  skill_paths: { agents: string; claude: string }
  warnings: string[]
}

const SKILLS = {
  agents: '.agents/skills/design-project/SKILL.md',
  claude: '.claude/skills/design-project/SKILL.md'
} as const
const VERSION =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/
function validVersion(value: string): boolean {
  const match = value.match(VERSION)
  if (!match) return false
  return (
    match[4] === undefined ||
    match[4].split('.').every((part) => !/^\d+$/.test(part) || part === '0' || !part.startsWith('0'))
  )
}
const HASH = /^[a-f0-9]{64}$/

function record(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function regularPath(root: string, path: string): string {
  if (isAbsolute(path) || path.includes('\\') || /[\u0000-\u001f\u007f]/.test(path)) {
    throw new DataError('release manifest path must be a safe relative path')
  }
  const parts = path.split('/')
  if (parts.some((part) => part === '' || part === '.' || part === '..')) {
    throw new DataError('release manifest path contains an invalid segment')
  }
  const candidate = resolve(root, path)
  const distance = relative(root, candidate)
  if (distance === '' || distance === '..' || distance.startsWith(`..${sep}`) || isAbsolute(distance)) {
    throw new DataError('release manifest path resolves outside the installation')
  }
  let current = root
  try {
    for (const [index, part] of parts.entries()) {
      current = join(current, part)
      const info = lstatSync(current)
      if (info.isSymbolicLink() || (index < parts.length - 1 ? !info.isDirectory() : !info.isFile())) {
        throw new DataError(`release integrity requires regular files: ${path}`)
      }
    }
  } catch (error) {
    if (error instanceof DataError) throw error
    throw new DataError(`release integrity file is missing or unreadable: ${path}`)
  }
  return candidate
}

function readJson(root: string, path: string): unknown {
  const file = regularPath(root, path)
  try {
    return JSON.parse(readFileSync(file, 'utf8'))
  } catch {
    throw new DataError(`${path}: invalid JSON`)
  }
}

export function readVersion(root: string): string {
  const value = readJson(realpathSync(root), 'package.json')
  if (
    !record(value) ||
    value.name !== 'tolong-design' ||
    value.private !== true ||
    typeof value.version !== 'string' ||
    !validVersion(value.version)
  ) {
    throw new DataError('package.json: expected a private tolong-design package with a valid version')
  }
  return value.version
}

export function inspectInstallation(root: string): InstallationInfo {
  const realRoot = realpathSync(root)
  const version = readVersion(realRoot)
  const skillPaths = { agents: regularPath(realRoot, SKILLS.agents), claude: regularPath(realRoot, SKILLS.claude) }
  if (!readFileSync(skillPaths.agents).equals(readFileSync(skillPaths.claude))) {
    throw new DataError('design-project skill mirrors do not match')
  }
  const manifestExists = existsSync(join(realRoot, 'release-manifest.json'))
  const bundledRelease = existsSync(join(realRoot, 'dist', 'design.js'))
  if (bundledRelease && !manifestExists) throw new DataError('release integrity manifest is missing')

  let files: Record<string, unknown> | null = null
  let manifestCount: number | null = null
  if (manifestExists) {
    const value = readJson(realRoot, 'release-manifest.json')
    if (
      !record(value) ||
      value.schema_version !== 1 ||
      value.version !== version ||
      !Number.isSafeInteger(value.resource_count) ||
      (value.resource_count as number) < 0 ||
      !record(value.files)
    ) {
      throw new DataError('release integrity manifest has invalid schema, version or count')
    }
    files = value.files
    manifestCount = value.resource_count as number
    for (const [path, expected] of Object.entries(files)) {
      if (path === 'release-manifest.json' || typeof expected !== 'string' || !HASH.test(expected)) {
        throw new DataError('release integrity manifest contains an invalid hash entry')
      }
      const actual = createHash('sha256')
        .update(readFileSync(regularPath(realRoot, path)))
        .digest('hex')
      if (actual !== expected) throw new DataError(`release integrity mismatch: ${path}`)
    }
    for (const required of [
      'package.json',
      'data/catalogue.json',
      SKILLS.agents,
      SKILLS.claude,
      ...(bundledRelease ? ['dist/design.js'] : [])
    ]) {
      if (!Object.hasOwn(files, required)) throw new DataError(`release integrity coverage missing: ${required}`)
    }
  }
  const resources = loadResources(realRoot)
  if (files) {
    if (manifestCount !== resources.length)
      throw new DataError('release integrity resource count does not match the catalogue')
    for (const resource of resources) {
      if (!Object.hasOwn(files, resource.doc))
        throw new DataError(`release integrity coverage missing: ${resource.doc}`)
    }
  }
  return {
    schema_version: 1,
    version,
    runtime: 'bun',
    mode: manifestExists ? 'release' : 'checkout',
    root: realRoot,
    resources: resources.length,
    manifest_verified: manifestExists,
    skill_paths: skillPaths,
    warnings: manifestExists ? [] : ['Checkout source has no release manifest; packaged integrity is not verified.']
  }
}
