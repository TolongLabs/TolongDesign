import { afterAll, describe, expect, test } from 'bun:test'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'

const sourceRoot = resolve(import.meta.dir, '..', '..')
const cliEntrypoint = join(sourceRoot, 'src', 'cli', 'main.ts')
const foreignCwd = mkdtempSync(join(tmpdir(), 'tolong-design-mcp-test-'))

type EvalFixtures = {
  calibration: Array<{ domain: string; query: string; relevant: string[] }>
  evaluation: Array<{ domain: string; query: string; relevant: string[] }>
}

function decode(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes)
}

function runCliJson(args: string[]): unknown {
  const result = Bun.spawnSync({
    cmd: [process.execPath, cliEntrypoint, ...args],
    cwd: foreignCwd,
    stdout: 'pipe',
    stderr: 'pipe'
  })
  expect(result.exitCode).toBe(0)
  expect(decode(result.stderr)).toBe('')
  return JSON.parse(decode(result.stdout))
}

function parseToolText(result: Awaited<ReturnType<Client['callTool']>>): unknown {
  expect(result.isError).not.toBe(true)
  expect(Array.isArray(result.content)).toBe(true)
  const items = result.content as Array<{ type: string; text?: string }>
  expect(items).toHaveLength(1)
  expect(items[0].type).toBe('text')
  return JSON.parse(items[0].text ?? '')
}

async function withMcpClient<T>(fn: (client: Client) => Promise<T>): Promise<T> {
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [cliEntrypoint, 'mcp'],
    cwd: foreignCwd,
    stderr: 'pipe'
  })
  const stderrChunks: string[] = []
  transport.stderr?.on('data', (chunk: Buffer | string) => {
    stderrChunks.push(typeof chunk === 'string' ? chunk : decode(chunk))
  })
  const client = new Client({ name: 'tolong-design-mcp-test', version: '1.0.0' })

  await client.connect(transport)
  try {
    return await fn(client)
  } finally {
    await client.close()
    expect(stderrChunks.join('').trim()).toBe('')
  }
}

afterAll(() => rmSync(foreignCwd, { recursive: true, force: true }))

describe('tolongdesign mcp stdio server', () => {
  test('never imports from src/cli', () => {
    const source = readFileSync(join(sourceRoot, 'src', 'mcp', 'server.ts'), 'utf8')
    expect(source).not.toMatch(/['"]\.\.\/cli(?:\/|['"])/)
  })

  test('lists read-only tools, executes search/show/context, and serves consumer skill prompts and resources over stdio', async () => {
    await withMcpClient(async (client) => {
      const listedTools = await client.listTools()
      expect(listedTools.tools.map((tool) => tool.name).sort()).toEqual(['context', 'search', 'show'])
      for (const tool of listedTools.tools) {
        expect(tool.annotations?.readOnlyHint).toBe(true)
        expect(tool.annotations?.destructiveHint).toBe(false)
      }

      const mcpSearch = parseToolText(
        await client.callTool({
          name: 'search',
          arguments: { query: 'scroll', section: 'motion', limit: 5 }
        })
      )
      const cliSearch = runCliJson(['search', 'scroll', '--section', 'motion', '--limit', '5', '--json'])
      expect(mcpSearch).toEqual(cliSearch)

      const mcpSkillSearch = parseToolText(
        await client.callTool({
          name: 'search',
          arguments: { query: '3d model', kind: 'skill' }
        })
      )
      const cliSkillSearch = runCliJson(['search', '3d model', '--kind', 'skill', '--json'])
      expect(mcpSkillSearch).toEqual(cliSkillSearch)

      const mcpFilterOnlySearch = parseToolText(
        await client.callTool({
          name: 'search',
          arguments: { section: 'icons', paywall: 'free', agent: true }
        })
      )
      const cliFilterOnlySearch = runCliJson(['search', '--section', 'icons', '--paywall', 'free', '--agent', '--json'])
      expect(mcpFilterOnlySearch).toEqual(cliFilterOnlySearch)

      const emptySearch = await client.callTool({ name: 'search', arguments: {} })
      expect(emptySearch.isError).toBe(true)

      const mcpShowTool = parseToolText(await client.callTool({ name: 'show', arguments: { id: 'motion/gsap' } }))
      expect(mcpShowTool).toEqual(runCliJson(['show', 'motion/gsap', '--json']))

      const mcpShowResearch = parseToolText(
        await client.callTool({ name: 'show', arguments: { id: 'research/spline-3d-design' } })
      )
      expect(mcpShowResearch).toEqual(runCliJson(['show', 'research/spline-3d-design', '--json']))

      const unknownShow = await client.callTool({ name: 'show', arguments: { id: 'does-not-exist' } })
      expect(unknownShow.isError).toBe(true)

      const mcpContext = parseToolText(
        await client.callTool({
          name: 'context',
          arguments: { ids: ['gsap', 'research/spline-3d-design'], brief: 'Landing page' }
        })
      )
      const cliContext = runCliJson([
        'context',
        'gsap',
        'research/spline-3d-design',
        '--brief',
        'Landing page',
        '--json'
      ])
      expect(mcpContext).toEqual(cliContext)

      const listedPrompts = await client.listPrompts()
      expect(listedPrompts.prompts.map((prompt) => prompt.name).sort()).toEqual([
        'build-3d-model',
        'design-project',
        'pick-design-stack'
      ])

      const prompt = await client.getPrompt({
        name: 'design-project',
        arguments: { brief: 'Dictation landing page' }
      })
      expect(prompt.messages).toHaveLength(1)
      expect(prompt.messages[0].role).toBe('user')
      expect(prompt.messages[0].content.type).toBe('text')
      if (prompt.messages[0].content.type === 'text') {
        expect(prompt.messages[0].content.text).toContain('# Design a project')
        expect(prompt.messages[0].content.text).toContain('Dictation landing page')
      }

      const templates = await client.listResourceTemplates()
      expect(templates.resourceTemplates.map((template) => template.uriTemplate).sort()).toEqual([
        'tolongdesign://research/{slug}',
        'tolongdesign://tools/{section}/{slug}'
      ])

      const listedResources = await client.listResources()
      expect(listedResources.resources.some((r) => r.uri === 'tolongdesign://tools/motion/gsap')).toBe(true)
      expect(listedResources.resources.some((r) => r.uri === 'tolongdesign://research/spline-3d-design')).toBe(true)

      const toolResource = await client.readResource({ uri: 'tolongdesign://tools/motion/gsap' })
      expect(toolResource.contents[0].mimeType).toBe('text/markdown')
      expect('text' in toolResource.contents[0] ? toolResource.contents[0].text : undefined).toBe(
        readFileSync(join(sourceRoot, 'catalogue', 'tools', 'motion', 'gsap.md'), 'utf8')
      )

      const researchResource = await client.readResource({ uri: 'tolongdesign://research/spline-3d-design' })
      expect(researchResource.contents[0].mimeType).toBe('text/markdown')
      expect('text' in researchResource.contents[0] ? researchResource.contents[0].text : undefined).toBe(
        readFileSync(join(sourceRoot, 'catalogue', 'research', 'spline-3d-design.md'), 'utf8')
      )

      await expect(client.readResource({ uri: 'tolongdesign://tools/../../etc/passwd' })).rejects.toThrow()
    })
  })

  // Spawns one CLI process per evaluation query: 12 cold Bun starts, so the
  // default 5 s budget is not enough on a slower CI runner.
  test('CLI and MCP search return identical results for all eval queries', async () => {
    const fixtures = JSON.parse(
      readFileSync(join(sourceRoot, 'src', 'core', 'fixtures', 'search-queries.json'), 'utf8')
    ) as EvalFixtures

    await withMcpClient(async (client) => {
      for (const fixture of fixtures.evaluation) {
        const mcpResult = parseToolText(
          await client.callTool({
            name: 'search',
            arguments: { query: fixture.query }
          })
        )
        const cliResult = runCliJson(['search', fixture.query, '--json'])
        expect(mcpResult).toEqual(cliResult)
      }
    })
  }, 30000)
})
