export const SECTION_NAMES = {
  'design-galleries': 'Design Galleries',
  'component-libraries': 'Component Libraries',
  development: 'Development',
  'agents-mcp': 'Agents & MCP',
  motion: 'Motion',
  'interface-design': 'Interface Design',
  type: 'Type',
  color: 'Color',
  '3d': '3D',
  shaders: 'Shaders',
  icons: 'Icons',
  utilities: 'Utilities',
  desktop: 'Desktop',
  'video-capture': 'Video & Capture',
  whiteboard: 'Whiteboard',
  deploy: 'Deploy',
  reading: 'Reading',
  comics: 'Comics'
} as const

export type SectionSlug = keyof typeof SECTION_NAMES

export function sectionName(slug: string): string | undefined {
  return Object.hasOwn(SECTION_NAMES, slug) ? SECTION_NAMES[slug as SectionSlug] : undefined
}
