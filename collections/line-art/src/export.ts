// export.ts — any frame as a standalone SVG file.
//
// Live drawings depend on CSS (`currentColor`, `.pp { fill: var(--paper) }`).
// Export bakes those into plain attributes so the file opens the same way in a
// browser, Figma, Illustrator, librsvg or a print shop.

import { PAPER } from './ink.ts'
import { VNode } from './surface.ts'

export interface ExportOptions {
  /** Ink colour to bake in place of currentColor. Defaults to the root `color` style. */
  ink?: string
  /** Paper colour for `.pp` fills. Defaults to the root `--paper` style. */
  paper?: string
  /** Paint a full-bleed background rect behind everything. */
  background?: string
  /** Output pixel size (the viewBox is kept). */
  width?: number
  height?: number
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function styleVar(style: string | null, name: string): string | undefined {
  const m = style?.match(new RegExp(`(?:^|;)\\s*${name.replace(/[-]/g, '\\-')}\\s*:\\s*([^;]+)`))
  return m?.[1].trim()
}

function write(n: VNode, ink: string, paper: string, out: string[]): void {
  if (n.tag === 'style') return
  const paperFill = (n.get('class') ?? '').split(/\s+/).includes('pp')
  let attrs = ''
  for (const [k, v] of n.attrs) {
    if (k === 'class' && paperFill) continue
    let val = v
    if (v === 'currentColor') val = ink
    if (k === 'fill' && paperFill) val = paper
    if (k === 'd' && !v) return // hidden stroke
    attrs += ` ${k}="${esc(val)}"`
  }
  const kids = n.children
  if (!kids.length && !n.content) {
    out.push(`<${n.tag}${attrs}/>`)
    return
  }
  out.push(`<${n.tag}${attrs}>`)
  if (n.content) out.push(esc(n.content))
  for (const c of kids) write(c, ink, paper, out)
  out.push(`</${n.tag}>`)
}

/** Serialize a headless stage (or any VNode subtree) to a self-contained SVG string. */
export function toSVG(root: VNode, opts: ExportOptions = {}): string {
  const style = root.get('style')
  const ink = opts.ink ?? styleVar(style, 'color') ?? '#1d1b18'
  const paper = opts.paper ?? styleVar(style, '--paper') ?? PAPER
  const clone = new VNode(root.tag)
  for (const [k, v] of root.attrs) if (k !== 'style') clone.set(k, v)
  if (!clone.get('xmlns')) clone.set('xmlns', 'http://www.w3.org/2000/svg')
  // size: keep the viewBox aspect when only one side is given (rasterizers need both)
  const vb = (root.get('viewBox') ?? '').split(/[\s,]+/).map(Number)
  const aspect = vb.length === 4 && vb[2] > 0 ? vb[3] / vb[2] : 0
  const w = opts.width ?? (opts.height && aspect ? opts.height / aspect : undefined)
  const h = opts.height ?? (opts.width && aspect ? opts.width * aspect : undefined)
  if (w) clone.set('width', Math.round(w))
  if (h) clone.set('height', Math.round(h))
  if (opts.background)
    clone.children.push(new VNode('rect').set('width', '100%').set('height', '100%').set('fill', opts.background))
  clone.children.push(...root.children)
  const out: string[] = []
  write(clone, ink, paper, out)
  return out.join('')
}

/** Copy a live DOM subtree into a VNode tree, so `toSVG()` can bake and export it. */
export function fromDOM(el: Element, view: { getComputedStyle?: (e: Element) => CSSStyleDeclaration } = {}): VNode {
  const v = new VNode(el.tagName)
  for (const a of Array.from(el.attributes)) v.set(a.name, a.value)
  if (view.getComputedStyle && el.tagName.toLowerCase() === 'svg') {
    const cs = view.getComputedStyle(el)
    v.set('style', `color:${cs.color};--paper:${cs.getPropertyValue('--paper').trim() || PAPER}`)
  }
  for (const c of Array.from(el.childNodes)) {
    if (c.nodeType === 1) v.children.push(fromDOM(c as Element))
    else if (c.nodeType === 3 && c.textContent?.trim()) v.content += c.textContent
  }
  return v
}
