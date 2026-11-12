/**
 * Every scene kind the registry knows. Pure data, so tests can check
 * templates without loading React. Keep in sync with `scenes/index.tsx`
 * (a test enforces it).
 */
export const SCENE_KINDS = [
  'word-cycle',
  'fanout',
  'chip-rail',
  'burst',
  'phone-offer',
  'bench',
  'caret-lockup',
  'kinetic-line',
  'phone-screen',
  'library-phone',
  'chat-send',
  'composer-build',
  'composer-icon',
  'feature-dive',
  'glow-reply',
  'halftone-search',
  'react-bubble',
  'rich-reply',
  'thread-pull',
  'glow-swap',
  'search-morph',
  'error-stack',
  'phone-tabs',
  'checklist',
  'step-result',
  'window-preview',
  'publish-modal',
  'url-outro',
  'corner-icon',
  'idea-list',
  'lockup-reveal',
  'screens-fold',
  'word-stack',
  'bin-promise',
  'button-pile',
  'claim-drum',
  'glow-intro',
  'inline-cycle',
  'live-link',
  'secret-field',
  'side-lockup',
  'source-line'
] as const

export type SceneKind = (typeof SCENE_KINDS)[number]
