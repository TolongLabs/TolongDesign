export const EXECUTION_MODES = ['registry', 'package', 'snippet', 'mcp-skill', 'browser-app', 'reference'] as const

export type ExecutionMode = (typeof EXECUTION_MODES)[number]

export const SURFACES = [
  'web-ui',
  'web-3d',
  'cli-tui',
  'email',
  'pdf',
  'video',
  'og-image',
  'audio',
  'comics',
  'desktop',
  'print',
  'reference',
  'web-asset',
  'development',
  'hosting',
  'mobile-ui'
] as const

export type Surface = (typeof SURFACES)[number]

export const STATUSES = ['active', 'degraded', 'unreachable'] as const

export type Status = (typeof STATUSES)[number]

export const STACK_ALIASES: Record<string, string> = {
  'framer-motion': 'motion',
  'radix-ui': 'radix',
  node: 'nodejs',
  workers: 'cloudflare-workers',
  postgres: 'postgresql',
  web: 'browser'
}

export const STACKS = [
  'alpinejs',
  'android',
  'astro',
  'base-ui',
  'bash',
  'bootstrap',
  'browser',
  'bun',
  'c',
  'c++',
  'canvas',
  'chrome',
  'claude-code',
  'cli',
  'cloudflare-workers',
  'css',
  'cuda',
  'dart',
  'desktop',
  'docker',
  'drizzle',
  'editframe',
  'electron',
  'eve',
  'fbx',
  'figma',
  'fish',
  'flutter',
  'forme',
  'framer',
  'glsl',
  'go',
  'gpu',
  'gpui',
  'graphql',
  'gsap',
  'hono',
  'html',
  'ink',
  'ionic',
  'ios',
  'java',
  'javascript',
  'json',
  'jsx',
  'mastra',
  'mcp',
  'mjml',
  'motion',
  'nextjs',
  'nodejs',
  'npm',
  'nuxt',
  'openapi',
  'opentui',
  'pnpm',
  'postgresql',
  'preact',
  'python',
  'radix',
  'react',
  'react-aria',
  'react-email',
  'react-native',
  'recharts',
  'regex',
  'remix',
  'remotion',
  'rest',
  'rust',
  'satori',
  'shadcn',
  'solid',
  'stylex',
  'svelte',
  'svg',
  'svgo',
  'swift',
  'swiftui',
  'tailwind',
  'takumi',
  'threejs',
  'tiptap',
  'triton',
  'typescript',
  'vercel',
  'vite',
  'vrm',
  'vue',
  'web-components',
  'webassembly',
  'webflow',
  'webgl',
  'webgpu',
  'wgsl',
  'zig',
  'zsh'
] as const

export type Stack = (typeof STACKS)[number]

export function normalizeStack(value: string): string {
  const normalized = value.trim().toLowerCase()
  return Object.hasOwn(STACK_ALIASES, normalized) ? STACK_ALIASES[normalized] : normalized
}

function isValidUrl(value: string): boolean {
  try {
    const u = new URL(value)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const d = new Date(value + 'T00:00:00.000Z')
  if (isNaN(d.getTime())) return false
  return d.toISOString().slice(0, 10) === value
}

export function validateResourceMeta(meta: Record<string, unknown>, path: string): string[] {
  const errors: string[] = []

  // execution_mode
  if (!('execution_mode' in meta) || meta.execution_mode === undefined || meta.execution_mode === null) {
    errors.push(`${path}: missing required "execution_mode"`)
  } else if (typeof meta.execution_mode !== 'string') {
    errors.push(`${path}: execution_mode must be a string`)
  } else if (!EXECUTION_MODES.includes(meta.execution_mode as ExecutionMode)) {
    errors.push(
      `${path}: invalid execution_mode "${meta.execution_mode}" (must be one of: ${EXECUTION_MODES.join(', ')})`
    )
  }

  // status
  if (!('status' in meta) || meta.status === undefined || meta.status === null) {
    errors.push(`${path}: missing required "status"`)
  } else if (typeof meta.status !== 'string') {
    errors.push(`${path}: status must be a string`)
  } else if (!STATUSES.includes(meta.status as Status)) {
    errors.push(`${path}: invalid status "${meta.status}" (must be one of: ${STATUSES.join(', ')})`)
  }

  // surface
  if (!('surface' in meta) || meta.surface === undefined || meta.surface === null) {
    errors.push(`${path}: missing required "surface"`)
  } else if (!Array.isArray(meta.surface) || meta.surface.length === 0) {
    errors.push(`${path}: "surface" must be a non-empty list`)
  } else {
    const seenSurfaces = new Set<string>()
    let hasNonString = false
    for (const item of meta.surface) {
      if (typeof item !== 'string') {
        if (!hasNonString) {
          errors.push(`${path}: "surface" elements must be strings`)
          hasNonString = true
        }
      } else {
        if (seenSurfaces.has(item)) {
          errors.push(`${path}: duplicate surface "${item}"`)
        }
        seenSurfaces.add(item)
        if (!SURFACES.includes(item as Surface)) {
          errors.push(`${path}: invalid surface "${item}" (must be one of: ${SURFACES.join(', ')})`)
        }
      }
    }
  }

  // stack
  if ('stack' in meta && meta.stack !== undefined && meta.stack !== null) {
    if (!Array.isArray(meta.stack)) {
      errors.push(`${path}: "stack" must be a list`)
    } else {
      const seenStacks = new Set<string>()
      let hasNonString = false
      for (const item of meta.stack) {
        if (typeof item !== 'string') {
          if (!hasNonString) {
            errors.push(`${path}: "stack" elements must be strings`)
            hasNonString = true
          }
        } else {
          if (seenStacks.has(item)) {
            errors.push(`${path}: duplicate stack "${item}"`)
          }
          seenStacks.add(item)
          if (Object.hasOwn(STACK_ALIASES, item)) {
            errors.push(`${path}: stack "${item}" is an alias, use canonical "${STACK_ALIASES[item]}"`)
          } else if (!STACKS.includes(item as Stack)) {
            errors.push(`${path}: unknown stack "${item}"`)
          }
        }
      }
    }
  }

  // category_tags
  if ('category_tags' in meta && Array.isArray(meta.category_tags)) {
    const seen = new Set<string>()
    for (const item of meta.category_tags) {
      if (typeof item === 'string') {
        if (seen.has(item)) errors.push(`${path}: duplicate category_tag "${item}"`)
        seen.add(item)
      } else {
        errors.push(`${path}: "category_tags" elements must be strings`)
        break
      }
    }
  }

  // best_for
  if ('best_for' in meta && Array.isArray(meta.best_for)) {
    const seen = new Set<string>()
    for (const item of meta.best_for) {
      if (typeof item === 'string') {
        if (seen.has(item)) errors.push(`${path}: duplicate best_for "${item}"`)
        seen.add(item)
      } else {
        errors.push(`${path}: "best_for" elements must be strings`)
        break
      }
    }
  }

  return errors
}

export function validatePeople(people: unknown, tools: { section_slug: string; slug: string }[]): string[] {
  const errors: string[] = []

  if (!Array.isArray(people)) {
    return ['people: must be an array']
  }

  const validToolIds = new Set(tools.map((t) => `${t.section_slug}/${t.slug}`))

  for (const [idx, item] of people.entries()) {
    if (typeof item !== 'object' || item === null) {
      errors.push(`people[${idx}]: person must be an object`)
      continue
    }

    const person = item as Record<string, unknown>
    const name = typeof person.name === 'string' && person.name.trim() ? person.name : `people[${idx}]`

    if (typeof person.name !== 'string' || !person.name.trim()) {
      errors.push(`people[${idx}]: missing or invalid "name"`)
    }

    if (typeof person.url !== 'string' || !isValidUrl(person.url)) {
      errors.push(`${name}: invalid "url" "${person.url}"`)
    }

    if (typeof person.description !== 'string') {
      errors.push(`${name}: "description" must be a string`)
    }

    if (person.sameAs !== undefined) {
      if (!Array.isArray(person.sameAs)) {
        errors.push(`${name}: "sameAs" must be an array`)
      } else {
        for (const u of person.sameAs) {
          if (typeof u !== 'string' || !isValidUrl(u)) {
            errors.push(`${name}: invalid sameAs URL "${u}"`)
          }
        }
      }
    }

    let createdToolList: string[] = []
    if ('created_tools' in person && person.created_tools !== undefined) {
      if (!Array.isArray(person.created_tools)) {
        errors.push(`${name}: "created_tools" must be an array`)
      } else {
        const seenTools = new Set<string>()
        for (const toolId of person.created_tools) {
          if (typeof toolId !== 'string') {
            errors.push(`${name}: "created_tools" elements must be strings`)
          } else {
            if (seenTools.has(toolId)) {
              errors.push(`${name}: duplicate created tool ID "${toolId}"`)
            }
            seenTools.add(toolId)
            if (!validToolIds.has(toolId)) {
              errors.push(`${name}: unknown created tool ID "${toolId}"`)
            }
          }
        }
        createdToolList = person.created_tools.filter((t): t is string => typeof t === 'string')
      }
    }

    const hasEvidence = 'created_tools_evidence' in person && person.created_tools_evidence !== undefined
    if (
      hasEvidence &&
      (typeof person.created_tools_evidence !== 'object' ||
        person.created_tools_evidence === null ||
        Array.isArray(person.created_tools_evidence))
    ) {
      errors.push(`${name}: "created_tools_evidence" must be a mapping`)
      continue
    }
    if (createdToolList.length > 0) {
      if (!hasEvidence || typeof person.created_tools_evidence !== 'object' || person.created_tools_evidence === null) {
        errors.push(`${name}: missing "created_tools_evidence"`)
      } else {
        const evidence = person.created_tools_evidence as Record<string, unknown>
        for (const toolId of createdToolList) {
          if (!(toolId in evidence)) {
            errors.push(`${name}: missing evidence for created tool "${toolId}"`)
          }
        }
        for (const key of Object.keys(evidence)) {
          if (!createdToolList.includes(key)) {
            errors.push(`${name}: evidence key "${key}" not in "created_tools"`)
          } else {
            const evItem = evidence[key]
            if (typeof evItem !== 'object' || evItem === null) {
              errors.push(`${name}: evidence for "${key}" must be an object`)
              continue
            }
            const ev = evItem as Record<string, unknown>
            if (typeof ev.source_url !== 'string' || !isValidUrl(ev.source_url)) {
              errors.push(`${name}: invalid evidence source_url "${ev.source_url}" for "${key}"`)
            }
            if (typeof ev.checked !== 'string' || !isValidDate(ev.checked)) {
              errors.push(`${name}: invalid evidence checked date "${ev.checked}" for "${key}"`)
            }
            if (typeof ev.quote !== 'string' || !ev.quote.trim()) {
              errors.push(`${name}: missing or empty evidence quote for "${key}"`)
            }
          }
        }
      }
    } else if (
      hasEvidence &&
      typeof person.created_tools_evidence === 'object' &&
      person.created_tools_evidence !== null
    ) {
      const keys = Object.keys(person.created_tools_evidence)
      for (const key of keys) {
        errors.push(`${name}: evidence key "${key}" not in "created_tools"`)
      }
    }
  }

  return errors
}
