#!/usr/bin/env bun
import { join } from 'node:path'
import { inspectInstallation, readVersion } from './release-info'
import {
  buildContext,
  DataError,
  loadResources,
  renderContext,
  resolveResource,
  searchResources,
  UsageError,
  type Resource,
  type SearchOptions
} from './design-lib'

const ROOT = join(import.meta.dir, '..')
const PAYWALLS = ['free', 'freemium', 'paid', 'unknown'] as const

import { hasFlag, parseFlags, readValue } from './cli-lib'

type Command =
  | { kind: 'help' }
  | { kind: 'version' }
  | { kind: 'doctor'; json: boolean }
  | { kind: 'search'; query: string; options: SearchOptions; json: boolean; format?: 'card' }
  | { kind: 'show'; id: string; json: boolean }
  | { kind: 'context'; ids: string[]; brief?: string; json: boolean }

const HELP = `Usage:
  tolongdesign --version
  tolongdesign doctor [--json]
  tolongdesign search <text> [--section <slug>] [--stack <name>] [--paywall <value>] [--agent] [--oss] [--limit <number>] [--mode <value>] [--surface <value>] [--include-unreachable] [--format card] [--json]
  tolongdesign show <slug-or-section/slug> [--json]
  tolongdesign context <id>... [--brief <text>] [--json]

Checkout equivalents:
  bun run design -- search <text> [--section <slug>] [--stack <name>] [--paywall <value>] [--agent] [--oss] [--limit <number>] [--mode <value>] [--surface <value>] [--include-unreachable] [--format card] [--json]
  bun run design -- show <slug-or-section/slug> [--json]
  bun run design -- context <id>... [--brief <text>] [--json]

Commands:
  search   Search registered design documents and their metadata.
  show     Print one complete registered design document.
  context  Assemble complete documents with provenance and freshness warnings.
`

function parseSearch(args: string[]): Command {
  const flags = parseFlags(
    args,
    ['agent', 'oss', 'json', 'include-unreachable'],
    ['section', 'stack', 'paywall', 'limit', 'mode', 'surface', 'format']
  )
  const query = flags.positionals.join(' ').trim()
  if (query === '') throw new UsageError('search requires text to search for')

  const format = readValue(flags, 'format')
  const json = hasFlag(flags, 'json')
  if (format !== undefined) {
    if (format !== 'card') throw new UsageError('--format must be "card"')
    if (json) throw new UsageError('cannot combine --json and --format card')
  }

  const options: SearchOptions = {}
  const section = readValue(flags, 'section')
  const stack = readValue(flags, 'stack')
  const paywall = readValue(flags, 'paywall')
  const limit = readValue(flags, 'limit')
  const mode = readValue(flags, 'mode')
  const surface = readValue(flags, 'surface')

  if (section !== undefined) options.section = section
  if (stack !== undefined) options.stack = stack
  if (paywall !== undefined) {
    const normalized = paywall.trim().toLowerCase()
    if (!PAYWALLS.some((value) => value === normalized)) {
      throw new UsageError(`--paywall must be one of: ${PAYWALLS.join(', ')}`)
    }
    options.paywall = normalized
  }
  if (limit !== undefined) {
    if (!/^\d+$/.test(limit)) throw new UsageError('--limit must be a positive integer')
    const parsedLimit = Number(limit)
    if (!Number.isSafeInteger(parsedLimit) || parsedLimit <= 0)
      throw new UsageError('--limit must be a positive integer')
    options.limit = parsedLimit
  }
  if (mode !== undefined) options.mode = mode
  if (surface !== undefined) options.surface = surface
  if (hasFlag(flags, 'include-unreachable')) options.includeUnreachable = true
  if (hasFlag(flags, 'agent')) options.agent = true
  if (hasFlag(flags, 'oss')) options.oss = true

  return {
    kind: 'search',
    query,
    options,
    json,
    ...(format === 'card' ? { format: 'card' as const } : {})
  }
}

function parseShow(args: string[]): Command {
  const flags = parseFlags(args, ['json'], [])
  if (flags.positionals.length !== 1 || flags.positionals[0].trim() === '') {
    throw new UsageError('show requires exactly one resource ID')
  }
  return { kind: 'show', id: flags.positionals[0], json: hasFlag(flags, 'json') }
}

function parseContext(args: string[]): Command {
  const flags = parseFlags(args, ['json'], ['brief'])
  if (flags.positionals.length === 0 || flags.positionals.some((id) => id.trim() === '')) {
    throw new UsageError('context requires one or more resource IDs')
  }
  const brief = readValue(flags, 'brief')
  return {
    kind: 'context',
    ids: flags.positionals,
    ...(brief === undefined ? {} : { brief }),
    json: hasFlag(flags, 'json')
  }
}

function parseCommand(args: string[]): Command {
  if (args.length === 1 && args[0] === '--version') return { kind: 'version' }
  if (args.length === 1 && args[0] === '--help') return { kind: 'help' }
  if (args.length === 0) throw new UsageError('expected a command')

  const [command, ...rest] = args
  if (command === 'doctor') {
    const flags = parseFlags(rest, ['json'], [])
    if (flags.positionals.length > 0) throw new UsageError('doctor does not take positional arguments')
    return { kind: 'doctor', json: hasFlag(flags, 'json') }
  }
  if (command === 'search') return parseSearch(rest)
  if (command === 'show') return parseShow(rest)
  if (command === 'context') return parseContext(rest)
  throw new UsageError(`unknown command: ${command}`)
}

function writeJson(value: unknown): void {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`)
}

async function writeSearch(
  resources: Resource[],
  result: ReturnType<typeof searchResources>,
  json: boolean,
  format?: 'card'
): Promise<void> {
  if (json) {
    writeJson(result)
    return
  }
  if (format === 'card') {
    const { renderResourceCard } = await import('./resource-card')
    const resourceMap = new Map(resources.map((r) => [r.id, r]))
    const cards = result.results.map((r) => {
      const full = resourceMap.get(r.id)!
      return renderResourceCard({
        id: full.id,
        name: full.name,
        doc: full.doc,
        source_url: full.source_url,
        meta: full.meta
      })
    })
    if (cards.length > 0) {
      process.stdout.write(`${cards.join('\n\n')}\n`)
    }
    return
  }

  for (const resource of result.results) {
    const paywall = resource.paywall.padEnd(9)
    process.stdout.write(`${paywall} ${resource.name} (${resource.id})\n  ${resource.excerpt}\n`)
  }
  if (result.total === 0) process.stdout.write('No matching resources.\n')
  else process.stdout.write(`\n${result.total} match(es)\n`)
}

function reportError(error: unknown): number {
  if (error instanceof UsageError) {
    process.stderr.write(`Usage error: ${error.message}\n`)
    return 2
  }
  if (error instanceof DataError) {
    process.stderr.write(`Data error: ${error.message}\n`)
    return 1
  }
  const message = error instanceof Error ? error.message : String(error)
  process.stderr.write(`Design CLI failed: ${message}\n`)
  return 1
}

async function run(args: string[]): Promise<number> {
  let command: Command
  try {
    command = parseCommand(args)
  } catch (error) {
    return reportError(error)
  }

  if (command.kind === 'help') {
    process.stdout.write(HELP)
    return 0
  }

  try {
    if (command.kind === 'version') {
      process.stdout.write(`tolongdesign ${readVersion(ROOT)}\n`)
      return 0
    }
    if (command.kind === 'doctor') {
      const info = inspectInstallation(ROOT)
      if (command.json) writeJson(info)
      else {
        process.stdout.write(
          `tolongdesign ${info.version}\n${info.resources} registered resources\nRoot: ${info.root}\nMode: ${info.mode}\nManifest verified: ${info.manifest_verified}\nAgent skill: ${info.skill_paths.agents}\n`
        )
        for (const warning of info.warnings) process.stdout.write(`Warning: ${warning}\n`)
      }
      return 0
    }
    const resources = loadResources(ROOT)
    if (command.kind === 'search') {
      await writeSearch(
        resources,
        searchResources(resources, command.query, command.options),
        command.json,
        command.format
      )
      return 0
    }
    if (command.kind === 'show') {
      const resource = resolveResource(resources, command.id)
      if (command.json) writeJson(resource)
      else process.stdout.write(resource.markdown)
      return 0
    }

    const pack = buildContext(resources, command.ids, command.brief)
    if (command.json) writeJson(pack)
    else process.stdout.write(`${renderContext(pack)}\n`)
    return 0
  } catch (error) {
    return reportError(error)
  }
}

if (import.meta.main) process.exitCode = await run(process.argv.slice(2))
