import type { TemplateSpec } from '../core/spec.ts'

/**
 * Ask Acme: an agent you message to plan, render and change a launch film,
 * from chat to phone to app. Thirteen beats, 37.5 s, paper and ink acts.
 */
export const askAgent: TemplateSpec = {
  id: 'ask-agent',
  title: 'Ask Acme',
  summary: 'An agent you message to plan, render and change a launch film, from chat to phone to app.',
  accent: 'teal',
  brand: { name: 'Acme', mark: 'lens', url: 'acme.dev' },
  width: 1920,
  height: 1080,
  fps: 30,
  beats: [
    {
      id: 'hook',
      label: 'Hook: a faster way',
      scene: 'kinetic-line',
      frames: 87,
      act: 'paper',
      cut: 'whip',
      props: {
        lines: [
          { text: 'a quicker way', at: 0, mode: 'words', size: 104, accent: ['quicker'] },
          { text: 'to ship videos.', at: 30, mode: 'words', size: 104, accent: ['videos.'] }
        ],
        stack: true,
        dive: { word: 'videos.', at: 73, style: 'fill', size: 300 }
      }
    },
    {
      id: 'ask',
      label: 'Ask: the message',
      scene: 'chat-send',
      frames: 99,
      act: 'ink',
      cut: 'match',
      props: { message: 'Can you cut our launch film for tonight?', time: '10:12 AM' }
    },
    {
      id: 'reply',
      label: 'Reply: the film card',
      scene: 'rich-reply',
      frames: 101,
      act: 'ink',
      cut: 'hard',
      props: {
        replyTo: 'Can you cut our launch film for tonight?',
        initials: 'AC',
        title: 'Launch cut',
        meta: 'Tonight · 30s · 4K',
        link: 'acme.dev/templates',
        pills: ['Template 07', '9 scenes']
      }
    },
    {
      id: 'input',
      label: 'Input: ask the agent',
      scene: 'composer-build',
      frames: 53,
      act: 'paper',
      cut: 'hard',
      props: { title: 'Ask Acme', hint: 'Describe the film, pick scenes, set the props.' }
    },
    {
      id: 'features',
      label: 'Features: plan and render',
      scene: 'feature-dive',
      frames: 77,
      act: 'ink',
      cut: 'match',
      props: {
        pill: 'Ask Acme',
        hint: 'Describe the film, pick scenes, set the props.',
        features: [
          { title: 'Plan', desc: 'Turn a brief into a shot list in seconds', icon: 'list' },
          { title: 'Render', desc: 'Ship a 4K film in minutes', icon: 'film' }
        ]
      }
    },
    {
      id: 'change',
      label: 'Change: from your phone',
      scene: 'phone-screen',
      frames: 123,
      act: 'paper',
      cut: 'match',
      props: {
        app: {
          title: 'Today',
          progress: '3 of 5 rendered',
          progressSub: 'Two more in the queue',
          items: [
            { title: 'Launch cut', meta: '9 scenes', done: true },
            { title: 'Pricing reel', meta: '6 scenes' },
            { title: 'Demo short', meta: '8 scenes' },
            { title: 'Changelog cut', meta: '5 scenes' }
          ]
        },
        request: { text: 'Add “Made with Acme” under the title', at: 35 },
        checkAt: 100,
        enter: 'rise',
        exit: 'none'
      }
    },
    {
      id: 'search',
      label: 'Search: describe a scene',
      scene: 'halftone-search',
      frames: 78,
      act: 'paper',
      cut: 'match',
      props: {
        phase: 'prompt',
        query: 'Find a calm pricing scene with a slow push-in.',
        chipLabel: 'Search all scenes',
        comment: 'Need a calm pricing moment with a slow push. Which fits best?',
        caption: 'Scene found'
      }
    },
    {
      id: 'chip',
      label: 'Chip: it searches',
      scene: 'halftone-search',
      frames: 72,
      act: 'paper',
      cut: 'match',
      props: {
        phase: 'chip',
        query: 'Find a calm pricing scene with a slow push-in.',
        chipLabel: 'Search all scenes',
        comment: 'Need a calm pricing moment with a slow push. Which fits best?',
        caption: 'Scene found'
      }
    },
    {
      id: 'match',
      label: 'Match: it finds it',
      scene: 'halftone-search',
      frames: 48,
      act: 'paper',
      cut: 'match',
      props: {
        phase: 'match',
        query: 'Find a calm pricing scene with a slow push-in.',
        chipLabel: 'Search all scenes',
        comment: 'Need a calm pricing moment with a slow push. Which fits best?',
        caption: 'Scene found'
      }
    },
    {
      id: 'answer',
      label: 'Answer: the plan',
      scene: 'glow-reply',
      frames: 78,
      act: 'paper',
      cut: 'hard',
      props: {
        lead: 'Your launch film is ready ',
        emphasis: 'in 6 scenes',
        rest: '. It opens on the question and closes on your mark.'
      }
    },
    {
      id: 'done',
      label: 'Done: it is up',
      scene: 'react-bubble',
      frames: 145,
      act: 'ink',
      cut: 'match',
      props: {
        delivery: 'Done — the 4K cut is live.',
        time: '10:14 AM',
        options: ['❤️', '🔥', '👏'],
        picked: 1,
        question: 'Swap the music at 0:12 for the calmer track?',
        answer: 'On it — shipping it now!',
        pills: ['Preview', 'Swap track', 'Render in 4K'],
        hint: 'Send a message…'
      }
    },
    {
      id: 'thread',
      label: 'Thread: the conversation',
      scene: 'thread-pull',
      frames: 81,
      act: 'ink',
      cut: 'match',
      props: {
        lines: [
          { from: 'agent', text: 'Done — the 4K cut is live.' },
          { from: 'me', text: 'Swap the music at 0:12 for the calmer track?' },
          { from: 'agent', text: 'On it — shipping it now!' }
        ],
        pills: ['Preview', 'Swap track', 'Render in 4K'],
        hint: 'Send a message…'
      }
    },
    {
      id: 'app',
      label: 'App: the icon',
      scene: 'composer-icon',
      frames: 82,
      act: 'ink',
      props: { hint: 'Send a message…' }
    }
  ]
}
