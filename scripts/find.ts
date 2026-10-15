#!/usr/bin/env bun
// Query the catalogue from the terminal. Uses loadResources/searchResources.
// Usage: bun run find -- [text] [--section <slug>] [--paywall <value>] [--tag <name>] [--stack <name>] [--agent] [--oss] [--limit <number>] [--mode <value>] [--surface <value>] [--include-unreachable] [--format card] [--json]
import { join } from 'node:path'
import { DataError, loadResources, searchResources, UsageError, type Resource, type SearchOptions } from './design-lib'
import { hasFlag, parseFlags, readValue } from './cli-lib'
import { renderResourceCard } from './resource-card'

const ROOT = join(import.meta.dir, '..')

function toFindMetadata(resource: Resource): Record<string, unknown> {
  return {
    ...resource.meta,
    name: resource.name,
    slug: resource.slug,
    section: resource.meta.section ?? resource.section_slug,
    section_slug: resource.section_slug,
    source_url: resource.source_url,
    paywall: resource.paywall,
    open_source: resource.open_source,
    agent_friendly: resource.agent_friendly,
    last_verified: resource.last_verified,
    doc: resource.doc
  }
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
  process.stderr.write(`Find failed: ${message}\n`)
  return 1
}

function run(args: string[]): number {
  const flags = parseFlags(
    args,
    ['agent', 'oss', 'json', 'include-unreachable'],
    ['section', 'paywall', 'tag', 'stack', 'limit', 'mode', 'surface', 'format']
  )

  const format = readValue(flags, 'format')
  const json = hasFlag(flags, 'json')
  if (format !== undefined) {
    if (format !== 'card') throw new UsageError('--format must be "card"')
    if (json) throw new UsageError('cannot combine --json and --format card')
  }

  const limitStr = readValue(flags, 'limit')
  let parsedLimit: number | undefined
  if (limitStr !== undefined) {
    if (!/^\d+$/.test(limitStr)) throw new UsageError('--limit must be a positive integer')
    parsedLimit = Number(limitStr)
    if (!Number.isSafeInteger(parsedLimit) || parsedLimit <= 0) {
      throw new UsageError('--limit must be a positive integer')
    }
  }

  const options: SearchOptions = {
    section: readValue(flags, 'section'),
    paywall: readValue(flags, 'paywall'),
    tag: readValue(flags, 'tag'),
    stack: readValue(flags, 'stack'),
    mode: readValue(flags, 'mode'),
    surface: readValue(flags, 'surface'),
    includeUnreachable: hasFlag(flags, 'include-unreachable') ? true : undefined,
    agent: hasFlag(flags, 'agent') ? true : undefined,
    oss: hasFlag(flags, 'oss') ? true : undefined,
    limit: parsedLimit ?? Number.MAX_SAFE_INTEGER
  }

  const query = flags.positionals.join(' ').trim()
  const resources = loadResources(ROOT)
  const searchResult = searchResources(resources, query, options)

  const resourceMap = new Map(resources.map((r) => [r.id, r]))

  if (json) {
    const hits = searchResult.results.map((r) => toFindMetadata(resourceMap.get(r.id)!))
    process.stdout.write(`${JSON.stringify(hits, null, 1)}\n`)
    return 0
  }

  if (format === 'card') {
    const cards = searchResult.results.map((r) => {
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
    return 0
  }

  for (const r of searchResult.results) {
    const paywall = String(r.paywall).padEnd(9)
    const name = String(r.name).padEnd(28)
    process.stdout.write(`${paywall} ${name} ${r.doc}\n`)
  }
  process.stdout.write(`\n${searchResult.total} match(es)\n`)
  return 0
}

if (import.meta.main) {
  try {
    process.exitCode = run(process.argv.slice(2))
  } catch (error) {
    process.exitCode = reportError(error)
  }
}
