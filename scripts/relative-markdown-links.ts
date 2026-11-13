import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

/** Source trees whose relative Markdown links must resolve. */
const LINK_CHECK_DIRECTORIES = ['catalogue', 'docs', 'skills'] as const

function markdownFiles(root: string, directory: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(join(root, directory), { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...markdownFiles(root, path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function withoutCodeText(markdown: string): string {
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

function linkTargets(markdown: string): string[] {
  const source = withoutCodeText(markdown)
  const inline = [...source.matchAll(/\]\(\s*(?:<([^>]+)>|([^\s)]+))(?:\s+[^)]*)?\)/g)]
  const references = [...source.matchAll(/^\s{0,3}\[[^\]]+\]:\s*(?:<([^>]+)>|(\S+))(?:\s+.*)?$/gm)]
  return [...inline, ...references].map((match) => match[1] ?? match[2])
}

function brokenLinksInFile(root: string, file: string): string[] {
  const errors: string[] = []
  const markdown = readFileSync(join(root, file), 'utf8')
  for (const link of linkTargets(markdown)) {
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
  return errors
}

/** Every relative Markdown link in the repo's hand-written docs must resolve to a file. */
export function findBrokenRelativeMarkdownLinks(root: string): string[] {
  const errors: string[] = []
  for (const directory of LINK_CHECK_DIRECTORIES) {
    if (!existsSync(join(root, directory))) continue
    for (const file of markdownFiles(root, directory)) errors.push(...brokenLinksInFile(root, file))
  }
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.md')) errors.push(...brokenLinksInFile(root, entry.name))
  }
  return errors
}
