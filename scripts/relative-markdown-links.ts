import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

function markdownFiles(root: string, directory: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(join(root, directory), { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...markdownFiles(root, path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function withoutCode(markdown: string): string {
  let fence: { marker: string; length: number } | null = null
  return markdown
    .split('\n')
    .map((line) => {
      if (fence) {
        const closing = line.match(/^\s{0,3}(`+|~+)\s*$/)
        if (closing && closing[1][0] === fence.marker && closing[1].length >= fence.length) fence = null
        return ''
      }
      const opening = line.match(/^\s{0,3}(`{3,}|~{3,})/)
      if (opening) {
        fence = { marker: opening[1][0], length: opening[1].length }
        return ''
      }
      return line.replace(/(`+).*?\1/g, '')
    })
    .join('\n')
}

function markdownTargets(markdown: string): string[] {
  const source = withoutCode(markdown)
  const inline = [...source.matchAll(/\]\(\s*(?:<([^>]+)>|([^\s)]+))(?:\s+[^)]*)?\)/g)]
  const references = [...source.matchAll(/^\s{0,3}\[[^\]]+\]:\s*(?:<([^>]+)>|(\S+))(?:\s+.*)?$/gm)]
  return [...inline, ...references].map((match) => match[1] ?? match[2])
}

/** Return catalogue Markdown links whose relative target does not resolve to a file. */
export function findBrokenRelativeMarkdownLinks(root: string): string[] {
  const errors: string[] = []
  for (const file of markdownFiles(root, 'catalogue')) {
    const markdown = readFileSync(join(root, file), 'utf8')
    for (const link of markdownTargets(markdown)) {
      const pathname = link.split(/[?#]/, 1)[0]
      if (!pathname || pathname.startsWith('/') || /^[a-z][a-z\d+.-]*:/i.test(pathname)) continue

      let targetPath = pathname
      try {
        targetPath = decodeURIComponent(pathname)
      } catch {
        // Leave malformed escapes unchanged so the resulting path fails normally.
      }

      const target = resolve(dirname(join(root, file)), targetPath)
      if (!existsSync(target) || !statSync(target).isFile()) errors.push(`${file}: broken link ${link}`)
    }
  }
  return errors
}
