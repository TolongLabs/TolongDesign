import { describe, expect, test } from 'bun:test'
import { extractInstall } from './index-fields'
import { renderResourceCard } from './resource-card'

describe('literal command extraction and compact cards', () => {
  test('shell comments that look like headings do not cut a command block', () => {
    expect(
      extractInstall(
        '## How to use\n\n```bash\nbun add example\n## setup note\nbunx example init\n```\n\n## Examples\n'
      )
    ).toBe('bun add example\n## setup note\nbunx example init')
  })

  test('a How-to-use heading inside another fence is not a real section', () => {
    expect(
      extractInstall(
        '```markdown\n## How to use\n```bash\nbun add pretend\n```\n```\n\n## How to use\nRead the guide.\n## Examples\n'
      )
    ).toBeNull()
  })

  test('unclosed shell blocks are not complete installation commands', () => {
    expect(extractInstall('## How to use\n```bash\nbun add truncated')).toBeNull()
  })

  test('long source URLs do not break the card budget or the document pointer', () => {
    const card = renderResourceCard({
      id: 'icons/example',
      name: 'Example',
      doc: 'docs/design/icons/example.md',
      source_url: `https://example.test/${'x'.repeat(1000)}`,
      meta: { execution_mode: 'reference', best_for: ['icons'] }
    })
    expect(card.length).toBeLessThanOrEqual(320)
    expect(card).toContain('doc: docs/design/icons/example.md')
  })
})
