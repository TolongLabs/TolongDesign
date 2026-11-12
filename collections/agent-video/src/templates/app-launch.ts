import type { TemplateSpec } from '../core/spec.ts'

/**
 * App launch: the icon lights on black, a someday list of video ideas types
 * and scrolls, the hook lands, the camera dives through a giant word into
 * the phone, screens fold into one device, the product states itself, and
 * the lockup assembles on a grid.
 */
export const appLaunch: TemplateSpec = {
  id: 'app-launch',
  title: 'App launch',
  summary:
    'A phone app launch: the icon, the list you keep putting off, now on your phone, what it is, and the lockup.',
  accent: 'rose',
  brand: { name: 'Acme', mark: 'lens', url: 'acme.dev' },
  width: 1920,
  height: 1080,
  fps: 30,
  beats: [
    { id: 'icon', label: 'Icon: the app', scene: 'corner-icon', frames: 104, act: 'ink', cut: 'hard', props: {} },
    {
      id: 'list',
      label: 'List: the someday list',
      scene: 'idea-list',
      frames: 189,
      act: 'paper',
      cut: 'whip',
      props: {
        year: '2027',
        lines: [
          'a launch film for the new pricing page',
          'cut the keynote into a trailer',
          'a teaser for the autumn release',
          'explain the API in thirty seconds',
          'the onboarding as a short tour',
          'this month in review, as a reel',
          'a demo that loops in the lobby',
          'turn the help docs into a walkthrough',
          'our roadmap as a title sequence',
          'the release notes, read out loud'
        ]
      }
    },
    {
      id: 'caption',
      label: 'Caption: the hook',
      scene: 'kinetic-line',
      frames: 128,
      act: 'paper',
      cut: 'hard',
      props: {
        stack: true,
        lines: [
          { text: 'Every idea on the list', at: 2, mode: 'blur', size: 84 },
          { text: 'is a film waiting to ship', at: 40, mode: 'blur', size: 84 }
        ]
      }
    },
    {
      id: 'now',
      label: 'Now: on your phone',
      scene: 'kinetic-line',
      frames: 76,
      act: 'ink',
      cut: 'hard',
      props: {
        lines: [{ text: 'Now on', at: 0, mode: 'type', size: 96 }],
        dive: { word: 'phone', at: 35, style: 'gradient', size: 320 }
      }
    },
    {
      id: 'screens',
      label: 'Screens: they fold in',
      scene: 'screens-fold',
      frames: 72,
      act: 'paper',
      cut: 'match',
      props: {
        title: 'Today',
        progress: '4 of 6 rendered',
        progressSub: 'Two left in the queue',
        items: [
          { title: 'Launch film', meta: '12 scenes' },
          { title: 'Pricing cut', meta: '6 scenes' },
          { title: 'Demo reel', meta: '8 scenes' },
          { title: 'Release notes', meta: '5 scenes' }
        ]
      }
    },
    {
      id: 'what',
      label: 'What: what it is',
      scene: 'word-stack',
      frames: 62,
      act: 'paper',
      cut: 'match',
      props: {
        variant: 'mark',
        lead: 'A studio',
        rows: [{ text: 'that ships' }, { text: 'finished' }, { text: 'films' }]
      }
    },
    {
      id: 'where',
      label: 'Where: scenes, templates, renders',
      scene: 'word-stack',
      frames: 62,
      act: 'paper',
      cut: 'match',
      props: {
        variant: 'icons',
        lead: 'Holding',
        rows: [
          { text: 'every take', icon: 'film' },
          { text: 'every theme', icon: 'grid' },
          { text: 'every export', icon: 'play' }
        ]
      }
    },
    {
      id: 'change',
      label: 'Change: just ask',
      scene: 'phone-screen',
      frames: 80,
      act: 'paper',
      cut: 'match',
      props: {
        app: {
          title: 'Today',
          progress: '4 of 6 rendered',
          progressSub: 'Two left in the queue',
          items: [
            { title: 'Launch film', meta: '12 scenes' },
            { title: 'Pricing cut', meta: '6 scenes' },
            { title: 'Demo reel', meta: '8 scenes' },
            { title: 'Release notes', meta: '5 scenes' }
          ]
        },
        captions: { left: 'Reshape anything.', right: 'Just ask.', at: 18 }
      }
    },
    {
      id: 'share',
      label: 'Share: with a link',
      scene: 'kinetic-line',
      frames: 69,
      act: 'paper',
      cut: 'match',
      props: {
        stack: true,
        lines: [
          { text: 'Cut launch films anywhere', at: 0, mode: 'words', size: 76 },
          { text: 'pass them on with a link', at: 14, mode: 'words', size: 76 }
        ]
      }
    },
    {
      id: 'leave',
      label: 'Leave: the phone goes',
      scene: 'library-phone',
      frames: 37,
      act: 'paper',
      cut: 'match',
      props: {
        title: 'Your cuts',
        subtitle: '12 saved films',
        search: 'Search cuts or ask Acme...',
        chips: ['All', 'Drafts', 'Exports'],
        items: [
          { title: 'Launch film', meta: '12 scenes', when: '9:41', badge: 'LF' },
          { title: 'Pricing cut', meta: '6 scenes', when: 'Tue', badge: 'PC' },
          { title: 'Demo reel', meta: '8 scenes', when: 'Mon', badge: 'DR' }
        ],
        exit: true
      }
    },
    { id: 'logo', label: 'Logo: the lockup', scene: 'lockup-reveal', frames: 76, act: 'paper', props: {} }
  ]
}
