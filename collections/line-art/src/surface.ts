// surface.ts — where the drawing goes. Every primitive in this library creates
// nodes through a Surface, so the same figure code renders live into the DOM or
// headless into an in-memory tree that serializes to a standalone SVG string.

export type Value = string | number
export type Attrs = Record<string, Value>

/** A drawable node. Live surfaces wrap a DOM element; headless surfaces hold a VNode. */
export interface InkNode {
  readonly tag: string
  set(name: string, value: Value): this
  get(name: string): string | null
  remove(name: string): void
  addClass(name: string): void
  append(child: InkNode): void
  /** Set text content (labels, signs). */
  text(value: string): void
  /** The DOM element behind a live node; undefined on a headless surface. */
  readonly dom?: Element
}

export interface Surface {
  readonly live: boolean
  create(tag: string, attrs?: Attrs, parent?: InkNode): InkNode
}

const SVG_NS = 'http://www.w3.org/2000/svg'

function applyAttrs(node: InkNode, attrs: Attrs | undefined, parent: InkNode | undefined): InkNode {
  if (attrs) for (const k in attrs) node.set(k, attrs[k])
  if (parent) parent.append(node)
  return node
}

// ------------------------------------------------------------------ headless

export class VNode implements InkNode {
  readonly attrs = new Map<string, string>()
  readonly children: VNode[] = []
  content = ''
  constructor(readonly tag: string) {}
  set(name: string, value: Value): this {
    this.attrs.set(name, String(value))
    return this
  }
  get(name: string): string | null {
    return this.attrs.get(name) ?? null
  }
  remove(name: string): void {
    this.attrs.delete(name)
  }
  addClass(name: string): void {
    const set = new Set((this.get('class') ?? '').split(/\s+/).filter(Boolean))
    set.add(name)
    this.set('class', [...set].join(' '))
  }
  append(child: InkNode): void {
    if (!(child instanceof VNode)) throw new Error('VNode.append: child is from a different surface')
    this.children.push(child)
  }
  text(value: string): void {
    this.content = value
  }
}

/** In-memory surface: runs in Bun/Node with no DOM. Serialize with `toSVG()` from export.ts. */
export function headlessSurface(): Surface {
  return { live: false, create: (tag, attrs, parent) => applyAttrs(new VNode(tag), attrs, parent) }
}

// ------------------------------------------------------------------ live DOM

class DomNode implements InkNode {
  constructor(readonly dom: Element) {}
  get tag(): string {
    return this.dom.tagName
  }
  set(name: string, value: Value): this {
    this.dom.setAttribute(name, String(value))
    return this
  }
  get(name: string): string | null {
    return this.dom.getAttribute(name)
  }
  remove(name: string): void {
    this.dom.removeAttribute(name)
  }
  addClass(name: string): void {
    this.dom.classList.add(name)
  }
  append(child: InkNode): void {
    if (!child.dom) throw new Error('DomNode.append: child is from a different surface')
    this.dom.appendChild(child.dom)
  }
  text(value: string): void {
    this.dom.textContent = value
  }
}

/** Live surface backed by real SVG elements. */
export function domSurface(doc: Document = document): Surface {
  return {
    live: true,
    create: (tag, attrs, parent) => applyAttrs(new DomNode(doc.createElementNS(SVG_NS, tag)), attrs, parent)
  }
}
