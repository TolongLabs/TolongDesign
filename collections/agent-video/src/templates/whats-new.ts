import type { TemplateSpec } from '../core/spec.ts'

/**
 * What's new: a release film. Hook on giant type, reframe fixes as
 * features, dive through search into the headline, state the promise,
 * stack the reported bugs, tour the app, check the shipped list,
 * render the film, preview and publish it, close on the domain.
 * Eleven beats, 37.6 s, alternating ink and paper acts.
 */
export const whatsNew: TemplateSpec = {
  id: 'whats-new',
  title: "What's new",
  summary: 'A release film: what is new, what got fixed, the list, and the film publishing itself.',
  accent: 'amber',
  brand: { name: 'Acme', mark: 'lens', url: 'acme.dev' },
  width: 1920,
  height: 1080,
  fps: 30,
  beats: [
    {
      id: 'hook',
      label: "Hook: what's new",
      scene: 'kinetic-line',
      frames: 94,
      act: 'ink',
      props: {
        lines: [{ text: "look what's", at: 0, mode: 'type', size: 68 }],
        dive: { word: 'live', at: 58, style: 'gradient', size: 460 }
      }
    },
    {
      id: 'more',
      label: 'More: not just fixes',
      scene: 'glow-swap',
      frames: 95,
      act: 'paper',
      props: {
        line: 'More than small fixes.',
        bold: [2, 3],
        line2: 'three fresh scenes.',
        bold2: [2],
        exit: 'scenes.'
      }
    },
    {
      id: 'shipped',
      label: 'Shipped: three new things',
      scene: 'search-morph',
      frames: 109,
      act: 'ink',
      props: {
        placeholder: 'Find a scene...',
        chipA: 'Search',
        chipB: 'Ask Acme',
        headlineA: 'We',
        headlineB: 'shipped',
        tiles: [{ icon: 'film' }, { icon: 'diamond' }, { icon: 'layers' }]
      }
    },
    {
      id: 'promise',
      label: 'Promise: the new feature',
      scene: 'kinetic-line',
      frames: 60,
      act: 'paper',
      props: {
        lines: [{ text: 'Describe the cut. Get a finished film.', at: 0, mode: 'words', size: 56 }]
      }
    },
    {
      id: 'fixes',
      label: 'Fixes: what you reported',
      scene: 'error-stack',
      frames: 157,
      act: 'ink',
      props: {
        lead: 'Plus,',
        card: 'every fix you flagged',
        question: 'Which bugs are gone?',
        placeholder: 'Ask Acme...',
        bugs: ['Renders stalled', 'Captions slipped at 0:12', 'Slow 4K previews', 'Font went missing']
      }
    },
    {
      id: 'app',
      label: 'App: the tour',
      scene: 'phone-tabs',
      frames: 168,
      act: 'paper',
      props: {
        tabs: ['Today', 'Renders', 'Library', 'Team'],
        homeTitle: 'Today',
        homeProgress: '3 of 5 rendered',
        homeSub: 'Two left in the queue',
        homeItems: [
          { title: 'Launch film', meta: '12 scenes' },
          { title: 'Pricing cut', meta: '6 scenes' },
          { title: 'Demo reel', meta: '8 scenes' },
          { title: 'Release notes', meta: '5 scenes' }
        ],
        statsTitle: 'Renders',
        statsValue: '62',
        statsSub: 'films this week',
        bars: [22, 35, 30, 48, 42, 60, 88, 55, 40, 52, 70, 64],
        libTitle: 'Library',
        libSub: 'Saved films and scenes',
        libItems: [
          { title: 'Title Reveal', meta: 'Scene · 12 s' },
          { title: 'Logo Assemble', meta: 'Scene · 8 s' },
          { title: 'Demo Loop', meta: 'Film · 20 s' }
        ],
        teamTitle: 'Team',
        teamSub: 'Rendering together',
        members: [
          { name: 'Ana', meta: 'Cut the trailer', initials: 'AN' },
          { name: 'Kai', meta: 'Timed the captions', initials: 'KA' },
          { name: 'Noor', meta: 'Shipped the link', initials: 'NO' }
        ]
      }
    },
    {
      id: 'list',
      label: 'List: everything that shipped',
      scene: 'checklist',
      frames: 81,
      act: 'ink',
      props: {
        items: [
          'Type to video is live',
          'Three fresh scenes',
          '4K renders, 2x faster',
          'Captions in 12 languages',
          'Export repairs'
        ]
      }
    },
    {
      id: 'result',
      label: 'Result: the film is ready',
      scene: 'step-result',
      frames: 87,
      act: 'paper',
      cut: 'match',
      props: {
        plan: "The title lands in 1.2s; I'll hold it 18 frames.",
        steps: [
          { icon: 'clock', label: 'Pacing every cut' },
          { icon: 'film', label: 'Rendering in 4K' }
        ],
        result: 'Your 20s release film is ready:',
        file: 'release-film.mp4'
      }
    },
    {
      id: 'preview',
      label: 'Preview: the window',
      scene: 'window-preview',
      frames: 71,
      act: 'paper',
      props: {
        brief: 'Cut a release film for the update',
        lines: [
          'Opening over the hook, then the feature tour.',
          'Demo runs the product in a real window.',
          'Close on the mark, hold the domain.'
        ],
        video: 'Release Film',
        videoMeta: '20 s · 4K',
        preview: 'Preview',
        publish: 'Publish'
      }
    },
    {
      id: 'publish',
      label: 'Publish: share it',
      scene: 'publish-modal',
      frames: 77,
      act: 'paper',
      props: {
        title: 'Publish video',
        slug: 'release-film',
        domain: 'acme.dev',
        accessLabel: 'Who can access',
        rows: [
          { name: 'You', role: 'Owner', initials: 'YO' },
          { name: 'Your team', role: 'Viewer', initials: 'YT' }
        ],
        generalLabel: 'General access',
        generalValue: 'Everyone at Acme',
        copyLink: 'Copy link',
        publish: 'Publish'
      }
    },
    {
      id: 'url',
      label: 'URL: the outro',
      scene: 'url-outro',
      frames: 129,
      act: 'ink',
      props: { lineA: 'launch films', lineB: 'written in your prompt' }
    }
  ]
}
