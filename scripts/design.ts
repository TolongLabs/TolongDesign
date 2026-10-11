import { join } from 'node:path'
import {
  buildContext,
  DataError,
  loadResources,
  renderContext,
  resolveResource,
  searchResources,
  UsageError,
  type SearchOptions
} from './design-lib'

const ROOT = join(import.meta.dir, '..')
const PAYWALLS = ['free', 'freemium', 'paid', 'unknown'] as const

type ParsedFlags = {
  positionals: string[]
  values: Map<string, string | true>
}

type Command =
  | { kind: 'help' }
  | { kind: 'search'; query: string; options: SearchOptions; json: boolean }
  | { kind: 'show'; id: string; json: boolean }
  | { kind: 'context'; ids: string[]; brief?: string; json: boolean }

const HELP = `Usage:
  bun run design -- search <text> [--section <slug>] [--stack <name>] [--paywall <value>] [--agent] [--oss] [--limit <number>] [--json]
  bun run design -- show <slug-or-section/slug> [--json]
  bun run design -- context <id>... [--brief <text>] [--json]

Commands:
  search   Search registered design documents and their metadata.
  show     Print one complete registered design document.
  context  Assemble complete documents with provenance and freshness warnings.
`

function parseFlags(args: string[], booleanNames: string[], valueNames: string[]): ParsedFlags {
  const booleans = new Set(booleanNames)
  const valuesAllowed = new Set(valueNames)
  const positionals: string[] = []
  const values = new Map<string, string | true>()

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]
    if (!argument.startsWith('-')) {
      positionals.push(argument)
      continue
    }
    if (!argument.startsWith('--')) throw new UsageError(`unknown flag: ${argument}`)

    const equals = argument.indexOf('=')
    const flag = equals === -1 ? argument.slice(2) : argument.slice(2, equals)
    const inlineValue = equals === -1 ? undefined : argument.slice(equals + 1)
    if (!booleans.has(flag) && !valuesAllowed.has(flag)) throw new UsageError(`unknown flag: --${flag}`)
    if (values.has(flag)) throw new UsageError(`--${flag} was provided more than once`)

    if (booleans.has(flag)) {
      if (inlineValue !== undefined) throw new UsageError(`--${flag} does not take a value`)
      values.set(flag, true)
      continue
    }

    let value = inlineValue
    if (value === undefined) {
      const next = args[index + 1]
      if (next === undefined || next.startsWith('-')) throw new UsageError(`--${flag} requires a value`)
      value = next
      index += 1
    }
    if (value.trim() === '') throw new UsageError(`--${flag} requires a non-empty value`)
    values.set(flag, value)
  }

  return { positionals, values }
}

function readValue(flags: ParsedFlags, name: string): string | undefined {
  const value = flags.values.get(name)
  return typeof value === 'string' ? value : undefined
}

function hasFlag(flags: ParsedFlags, name: string): boolean {
  return flags.values.get(name) === true
}

function parseSearch(args: string[]): Command {
  const flags = parseFlags(args, ['agent', 'oss', 'json'], ['section', 'stack', 'paywall', 'limit'])
  const query = flags.positionals.join(' ').trim()
  if (query === '') throw new UsageError('search requires text to search for')

  const options: SearchOptions = {}
  const section = readValue(flags, 'section')
  const stack = readValue(flags, 'stack')
  const paywall = readValue(flags, 'paywall')
  const limit = readValue(flags, 'limit')
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
  if (hasFlag(flags, 'agent')) options.agent = true
  if (hasFlag(flags, 'oss')) options.oss = true
  return { kind: 'search', query, options, json: hasFlag(flags, 'json') }
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
  if (args.length === 1 && args[0] === '--help') return { kind: 'help' }
  if (args.length === 0) throw new UsageError('expected a command')

  const [command, ...rest] = args
  if (command === 'search') return parseSearch(rest)
  if (command === 'show') return parseShow(rest)
  if (command === 'context') return parseContext(rest)
  throw new UsageError(`unknown command: ${command}`)
}

function writeJson(value: unknown): void {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`)
}

function writeSearch(result: ReturnType<typeof searchResources>, json: boolean): void {
  if (json) {
    writeJson(result)
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

function run(args: string[]): number {
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
    const resources = loadResources(ROOT)
    if (command.kind === 'search') {
      writeSearch(searchResources(resources, command.query, command.options), command.json)
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

if (import.meta.main) process.exitCode = run(process.argv.slice(2))
