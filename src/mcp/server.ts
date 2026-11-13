import { readFileSync, realpathSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ErrorCode,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ReadResourceRequestSchema
} from '@modelcontextprotocol/sdk/types.js'
import { buildContext, resolveResource } from '../core/context'
import { loadAllResources } from '../core/loader'
import {
  DataError,
  EXECUTION_MODES,
  PAYWALLS,
  RESOURCE_KINDS,
  SURFACES,
  UsageError,
  type Resource,
  type SearchOptions
} from '../core/schema'
import { searchResources } from '../core/search'
import { loadSkills, type SkillDetail } from '../core/skill'

export type McpServerOptions = {
  version?: string
}

type ResourceEntry = {
  uri: string
  resource: Resource
  description?: string
}

const READ_ONLY_ANNOTATIONS = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false
} as const

const SEARCH_KEYS = new Set([
  'query',
  'kind',
  'section',
  'tag',
  'stack',
  'paywall',
  'agent',
  'oss',
  'limit',
  'mode',
  'surface',
  'include_unreachable'
])

const SHOW_KEYS = new Set(['id'])
const CONTEXT_KEYS = new Set(['ids', 'brief'])

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function readPackageVersion(root: string): string {
  try {
    const raw = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as unknown
    if (isRecord(raw) && typeof raw.version === 'string' && raw.version.trim() !== '') {
      return raw.version
    }
  } catch {
    // Fallback when root fixture omits package.json.
  }
  return '0.0.0'
}

function assertAllowedKeys(args: Record<string, unknown>, allowed: Set<string>, toolName: string): void {
  for (const key of Object.keys(args)) {
    if (!allowed.has(key)) {
      throw new UsageError(`${toolName} does not accept parameter: ${key}`)
    }
  }
}

function parseSearchArgs(rawArgs: unknown): { query: string; options: SearchOptions } {
  const args = rawArgs === undefined ? {} : rawArgs
  if (!isRecord(args)) throw new UsageError('search arguments must be an object')
  assertAllowedKeys(args, SEARCH_KEYS, 'search')

  if (args.query !== undefined && typeof args.query !== 'string') {
    throw new UsageError('search query must be text')
  }
  const query = (args.query ?? '').trim()

  const options: SearchOptions = {}
  if (args.kind !== undefined) options.kind = args.kind as string
  if (args.section !== undefined) options.section = args.section as string
  if (args.tag !== undefined) options.tag = args.tag as string
  if (args.stack !== undefined) options.stack = args.stack as string
  if (args.paywall !== undefined) options.paywall = args.paywall as string
  if (args.mode !== undefined) options.mode = args.mode as string
  if (args.surface !== undefined) options.surface = args.surface as string
  if (args.limit !== undefined) options.limit = args.limit as number

  for (const [argKey, optionKey] of [
    ['agent', 'agent'],
    ['oss', 'oss'],
    ['include_unreachable', 'includeUnreachable']
  ] as const) {
    const val = args[argKey]
    if (val !== undefined && typeof val !== 'boolean') {
      throw new UsageError(`--${argKey.replaceAll('_', '-')} is a boolean flag`)
    }
    if (val === true) options[optionKey] = true
  }

  if (query === '' && Object.keys(options).length === 0) {
    throw new UsageError('search requires text to search for or at least one filter')
  }

  return { query, options }
}

function buildResourceEntries(resources: Resource[]): ResourceEntry[] {
  const entries: ResourceEntry[] = []
  for (const resource of resources) {
    if (resource.kind === 'tool') {
      const blurb =
        typeof resource.meta.designeer_blurb === 'string' && resource.meta.designeer_blurb.trim() !== ''
          ? resource.meta.designeer_blurb.trim()
          : undefined
      entries.push({
        uri: `tolongdesign://tools/${resource.section_slug}/${resource.slug}`,
        resource,
        ...(blurb ? { description: blurb } : {})
      })
    } else if (resource.kind === 'research') {
      const summary =
        typeof resource.meta.summary === 'string' && resource.meta.summary.trim() !== ''
          ? resource.meta.summary.trim()
          : undefined
      entries.push({
        uri: `tolongdesign://research/${resource.slug}`,
        resource,
        ...(summary ? { description: summary } : {})
      })
    }
  }
  return entries
}

function toolJsonResponse(value: unknown) {
  return {
    content: [
      {
        type: 'text' as const,
        text: JSON.stringify(value, null, 2)
      }
    ]
  }
}

function toolErrorResponse(message: string) {
  return {
    content: [
      {
        type: 'text' as const,
        text: message
      }
    ],
    isError: true
  }
}

/** Create a read-only MCP server backed by TolongDesign core retrieval and consumer skills. */
export function createMcpServer(root: string, options: McpServerOptions = {}): Server {
  if (typeof root !== 'string' || root.trim() === '') {
    throw new UsageError('root must be a non-empty path')
  }

  let realRoot: string
  try {
    realRoot = realpathSync(resolve(root))
  } catch {
    throw new DataError('root directory is missing or cannot be resolved')
  }

  const resources = loadAllResources(realRoot)
  const consumerSkills = loadSkills(realRoot, { requireAudience: true }).filter(
    (skill) => skill.audience === 'consumer'
  )
  const version = options.version ?? readPackageVersion(realRoot)

  const skillBySlug = new Map<string, SkillDetail>(consumerSkills.map((skill) => [skill.slug, skill]))
  const resourceEntries = buildResourceEntries(resources)
  const resourceByUri = new Map<string, Resource>(resourceEntries.map((entry) => [entry.uri, entry.resource]))

  const server = new Server(
    { name: 'tolongdesign', version },
    {
      capabilities: {
        tools: {},
        prompts: {},
        resources: {}
      }
    }
  )

  server.setRequestHandler(ListToolsRequestSchema, () => ({
    tools: [
      {
        name: 'search',
        description:
          'Search registered TolongDesign tools, research notes, and skills. Returns the same JSON structure as `tolongdesign search --json`.',
        inputSchema: {
          type: 'object',
          additionalProperties: false,
          properties: {
            query: {
              type: 'string',
              description: 'Search text. May be omitted when at least one filter is provided.'
            },
            kind: {
              type: 'string',
              description: `Resource kind (${RESOURCE_KINDS.join(', ')}), or comma-separated OR list. Defaults to tool.`
            },
            section: {
              type: 'string',
              description: 'Section slug or name (for example: motion, icons, component-libraries).'
            },
            tag: {
              type: 'string',
              description: 'Exact tag or category tag filter.'
            },
            stack: {
              type: 'string',
              description: 'Target stack filter (for example: react, motion, tailwind).'
            },
            paywall: {
              type: 'string',
              enum: [...PAYWALLS],
              description: 'Paywall filter (matches tool entries only).'
            },
            agent: {
              type: 'boolean',
              description: 'When true, restrict to agent-friendly resources.'
            },
            oss: {
              type: 'boolean',
              description: 'When true, restrict to open-source resources.'
            },
            limit: {
              type: 'integer',
              minimum: 1,
              description: 'Maximum number of results to return (default: 10).'
            },
            mode: {
              type: 'string',
              description: `Execution mode (${EXECUTION_MODES.join(', ')}), or comma-separated OR list.`
            },
            surface: {
              type: 'string',
              description: `Output surface (${SURFACES.join(', ')}), or comma-separated OR list.`
            },
            include_unreachable: {
              type: 'boolean',
              description: 'When true, include resources marked unreachable.'
            }
          }
        },
        annotations: READ_ONLY_ANNOTATIONS
      },
      {
        name: 'show',
        description:
          'Return one complete registered tool doc, research note, or skill as JSON (matching `tolongdesign show --json`).',
        inputSchema: {
          type: 'object',
          additionalProperties: false,
          required: ['id'],
          properties: {
            id: {
              type: 'string',
              minLength: 1,
              description: 'Resource ID (<section>/<slug>, research/<slug>, skill/<name>, or unique slug).'
            }
          }
        },
        annotations: READ_ONLY_ANNOTATIONS
      },
      {
        name: 'context',
        description:
          'Assemble complete documents with provenance, hashes, and freshness warnings as JSON (matching `tolongdesign context --json`).',
        inputSchema: {
          type: 'object',
          additionalProperties: false,
          required: ['ids'],
          properties: {
            ids: {
              type: 'array',
              items: { type: 'string', minLength: 1 },
              minItems: 1,
              description: 'Ordered list of resource IDs to include in the context pack.'
            },
            brief: {
              type: 'string',
              description: 'Optional project brief recorded in the context pack.'
            }
          }
        },
        annotations: READ_ONLY_ANNOTATIONS
      }
    ]
  }))

  server.setRequestHandler(CallToolRequestSchema, (request) => {
    try {
      const name = request.params.name
      const rawArgs = request.params.arguments

      if (name === 'search') {
        const { query, options: searchOptions } = parseSearchArgs(rawArgs)
        return toolJsonResponse(searchResources(resources, query, searchOptions))
      }

      if (name === 'show') {
        if (!isRecord(rawArgs)) throw new UsageError('show arguments must be an object')
        assertAllowedKeys(rawArgs, SHOW_KEYS, 'show')
        if (typeof rawArgs.id !== 'string') throw new UsageError('resource ID must be a non-empty string')
        return toolJsonResponse(resolveResource(resources, rawArgs.id))
      }

      if (name === 'context') {
        if (!isRecord(rawArgs)) throw new UsageError('context arguments must be an object')
        assertAllowedKeys(rawArgs, CONTEXT_KEYS, 'context')
        if (!Array.isArray(rawArgs.ids)) {
          throw new UsageError('context requires one or more non-empty resource IDs')
        }
        return toolJsonResponse(buildContext(resources, rawArgs.ids as string[], rawArgs.brief as string | undefined))
      }

      throw new McpError(ErrorCode.InvalidParams, `Unknown tool: ${name}`)
    } catch (error) {
      if (error instanceof McpError) throw error
      const message = error instanceof Error ? error.message : String(error)
      return toolErrorResponse(message)
    }
  })

  server.setRequestHandler(ListPromptsRequestSchema, () => ({
    prompts: consumerSkills.map((skill) => ({
      name: skill.slug,
      description: skill.description,
      arguments: [
        {
          name: 'brief',
          description: 'Optional project brief or task details.',
          required: false
        }
      ]
    }))
  }))

  server.setRequestHandler(GetPromptRequestSchema, (request) => {
    const skill = skillBySlug.get(request.params.name)
    if (!skill) {
      throw new McpError(ErrorCode.InvalidParams, `Unknown prompt: ${request.params.name}`)
    }

    const rawBrief = request.params.arguments?.brief
    if (rawBrief !== undefined && typeof rawBrief !== 'string') {
      throw new McpError(ErrorCode.InvalidParams, 'Prompt argument "brief" must be a string')
    }
    const brief = typeof rawBrief === 'string' ? rawBrief.trim() : ''
    const text = brief === '' ? skill.markdown : `${skill.markdown.trimEnd()}\n\n## Project brief\n\n${brief}\n`

    return {
      description: skill.description,
      messages: [
        {
          role: 'user' as const,
          content: {
            type: 'text' as const,
            text
          }
        }
      ]
    }
  })

  server.setRequestHandler(ListResourcesRequestSchema, () => ({
    resources: resourceEntries.map((entry) => ({
      uri: entry.uri,
      name: entry.resource.id,
      title: entry.resource.name,
      ...(entry.description ? { description: entry.description } : {}),
      mimeType: 'text/markdown'
    }))
  }))

  server.setRequestHandler(ListResourceTemplatesRequestSchema, () => ({
    resourceTemplates: [
      {
        uriTemplate: 'tolongdesign://tools/{section}/{slug}',
        name: 'tool-doc',
        title: 'Tool document',
        description: 'Complete Markdown guide for a curated design tool.',
        mimeType: 'text/markdown'
      },
      {
        uriTemplate: 'tolongdesign://research/{slug}',
        name: 'research-doc',
        title: 'Research document',
        description: 'Complete Markdown research note in the catalogue.',
        mimeType: 'text/markdown'
      }
    ]
  }))

  server.setRequestHandler(ReadResourceRequestSchema, (request) => {
    const uri = request.params.uri
    const resource = resourceByUri.get(uri)
    if (!resource) {
      throw new McpError(ErrorCode.InvalidParams, `Resource not found: ${uri}`)
    }
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: resource.markdown
        }
      ]
    }
  })

  return server
}

/** Start the TolongDesign MCP stdio server and wait until stdin/transport closes. */
export async function startMcpServer(root: string, options: McpServerOptions = {}): Promise<void> {
  const server = createMcpServer(root, options)
  const transport = new StdioServerTransport()
  await server.connect(transport)

  await new Promise<void>((resolveShutdown) => {
    let settled = false
    const shutdown = () => {
      if (settled) return
      settled = true
      process.stdin.off('end', shutdown)
      process.stdin.off('close', shutdown)
      process.off('SIGINT', shutdown)
      process.off('SIGTERM', shutdown)
      void server.close().finally(resolveShutdown)
    }

    const previousOnClose = transport.onclose
    transport.onclose = () => {
      previousOnClose?.()
      shutdown()
    }
    process.stdin.once('end', shutdown)
    process.stdin.once('close', shutdown)
    process.once('SIGINT', shutdown)
    process.once('SIGTERM', shutdown)
  })
}
