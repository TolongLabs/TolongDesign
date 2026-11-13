import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { tmpdir } from 'node:os'
import { consumerSkillNames, getSkill, listSkills, loadSkillResources, loadSkills } from './skill'
import { DataError, UsageError } from './schema'

const fixtureRoots: string[] = []

afterEach(() => {
  for (const root of fixtureRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true })
  }
})

function createSkillFixture(): string {
  const root = mkdtempSync(join(tmpdir(), 'tolongdesign-skill-'))
  fixtureRoots.push(root)

  const write = (rel: string, content: string) => {
    const abs = join(root, rel)
    mkdirSync(dirname(abs), { recursive: true })
    writeFileSync(abs, content, 'utf8')
  }

  write(
    'skills/design-project/SKILL.md',
    [
      '---',
      'name: design-project',
      'description: Guide website design workflows.',
      'metadata:',
      '  audience: consumer',
      '---',
      '',
      '# Design Project',
      '',
      'Workflow instructions.'
    ].join('\n')
  )
  write('skills/design-project/workflow.md', '# Workflow\n')
  write('skills/design-project/scenarios/landing.md', '# Landing\n')
  write(
    'skills/add-tool-doc/SKILL.md',
    [
      '---',
      'name: add-tool-doc',
      'description: Add a new tool doc.',
      'metadata:',
      '  audience: maintainer',
      '---',
      '',
      '# Add Tool Doc'
    ].join('\n')
  )

  return root
}

describe('skill loader and lookups', () => {
  test('lists skills sorted by slug with kind skill and sorted reference files', () => {
    const root = createSkillFixture()
    const skills = listSkills(root)

    expect(skills.map((s) => s.slug)).toEqual(['add-tool-doc', 'design-project'])
    expect(skills[1]).toEqual({
      kind: 'skill',
      id: 'skill/design-project',
      name: 'design-project',
      slug: 'design-project',
      audience: 'consumer',
      description: 'Guide website design workflows.',
      doc: 'skills/design-project/SKILL.md',
      references: ['skills/design-project/scenarios/landing.md', 'skills/design-project/workflow.md']
    })
    expect(consumerSkillNames(root)).toEqual(['design-project'])
  })

  test('getSkill resolves slug or skill/<name> and throws UsageError for unknown name', () => {
    const root = createSkillFixture()

    const bySlug = getSkill(root, 'design-project')
    const byId = getSkill(root, 'skill/design-project')
    expect(bySlug.kind).toBe('skill')
    expect(bySlug.markdown).toContain('# Design Project')
    expect(byId.sha256).toBe(bySlug.sha256)

    expect(() => getSkill(root, 'missing-skill')).toThrow(UsageError)
  })

  test('loadSkillResources converts skills into Resource records', () => {
    const root = createSkillFixture()
    const resources = loadSkillResources(root)

    expect(resources).toHaveLength(2)
    expect(resources[1]?.kind).toBe('skill')
    expect(resources[1]?.id).toBe('skill/design-project')
    expect(resources[1]?.section_slug).toBe('skill')
    expect(resources[1]?.paywall).toBeNull()
    expect(resources[1]?.meta.description).toBe('Guide website design workflows.')
  })

  test('rejects symlinked skill files and missing skills directory when required', () => {
    const root = createSkillFixture()
    const outside = mkdtempSync(join(tmpdir(), 'tolongdesign-skill-outside-'))
    fixtureRoots.push(outside)
    writeFileSync(join(outside, 'secret.md'), '# Outside\n', 'utf8')
    symlinkSync(join(outside, 'secret.md'), join(root, 'skills/design-project/leak.md'))

    expect(() => loadSkills(root)).toThrow(DataError)

    const emptyRoot = mkdtempSync(join(tmpdir(), 'tolongdesign-skill-empty-'))
    fixtureRoots.push(emptyRoot)
    expect(loadSkills(emptyRoot, { optional: true })).toEqual([])
    expect(() => loadSkills(emptyRoot)).toThrow(DataError)
  })
})
