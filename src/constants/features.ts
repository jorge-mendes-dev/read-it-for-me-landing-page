// Feature data - Hoisted static content (React Best Practices 6.3)
// Extracting to constants prevents re-creation on every render

export interface Feature {
  icon: string
  title: string
  desc: string
}

export interface Step {
  step: number
  title: string
  desc: string
}

export interface FAQ {
  question: string
  answer: string
}

// Core features data
export const CORE_FEATURES: readonly Feature[] = [
  {
    icon: '👆',
    title: 'One-Click Reading',
    desc: "Select any text and click the floating 'Read This' button to start instantly",
  },
  {
    icon: '🌍',
    title: 'Smart Auto-Language Detection',
    desc: 'Automatically detects 30+ languages from page metadata and text patterns',
  },
  {
    icon: '⚡',
    title: 'AI-Powered Voice Selection',
    desc: 'Intelligent voice scoring prioritizes Neural, Premium, and Enhanced voices with ⚡ quality indicators',
  },
  {
    icon: '📱',
    title: 'Draggable Floating Mini-Player',
    desc: 'Persistent controls that follow you across pages with drag-to-reposition',
  },
  {
    icon: '📋',
    title: 'Reading Queue System',
    desc: 'Add multiple text selections that play sequentially',
  },
  {
    icon: '🔒',
    title: '100% Privacy-First',
    desc: 'All processing happens locally, zero data collection, no external servers',
  },
] as const

// Playback controls data
export const PLAYBACK_CONTROLS: readonly Feature[] = [
  {
    icon: '⏩',
    title: 'Speed Control',
    desc: '0.5x to 2.0x with quick presets (0.75x, 0.9x, 1.0x, 1.25x, 1.5x)',
  },
  {
    icon: '🎵',
    title: 'Pitch & Volume',
    desc: 'Fine-tune voice pitch (0-2 range) and independent volume adjustment',
  },
  {
    icon: '📊',
    title: 'Real-Time Progress',
    desc: 'Visual progress bar with time estimates and auto-recovery',
  },
  {
    icon: '⏯️',
    title: 'Full Playback Controls',
    desc: 'Play, pause, resume, stop, skip, and clear queue',
  },
] as const

// Reading enhancements data
export const READING_ENHANCEMENTS: readonly Feature[] = [
  {
    icon: '🎯',
    title: 'Live Word Highlighting',
    desc: 'Real-time word-by-word highlighting during playback with smooth animations',
  },
  {
    icon: '📜',
    title: 'Auto-Scroll Follow Mode',
    desc: 'Optional follow mode that automatically scrolls to highlighted words',
  },
  {
    icon: '🧹',
    title: 'Smart Text Preprocessing',
    desc: 'Converts abbreviations (Dr. → Doctor) and normalizes punctuation for natural speech',
  },
  {
    icon: '📰',
    title: 'Smart Read Full Article',
    desc: 'One-click button to read entire articles with AI content detection',
  },
] as const

// User experience features
export const USER_EXPERIENCE: readonly Feature[] = [
  {
    icon: '🗂️',
    title: 'Collapsible Settings',
    desc: 'Organized voice selector, playback controls, and advanced settings sections',
  },
  {
    icon: '🌐',
    title: '7 Interface Languages',
    desc: 'English, Portuguese (BR), Spanish, French, German, Japanese, Chinese (CN)',
  },
  {
    icon: '📖',
    title: 'First-Run Welcome Guide',
    desc: 'Interactive modal with helpful tips and contextual help button (?)',
  },
  {
    icon: '✨',
    title: 'Modern Glassmorphic Design',
    desc: 'Beautiful gradient UI with frosted glass effects and smooth animations',
  },
  {
    icon: '♿',
    title: 'Accessibility First',
    desc: 'WCAG 2.1 AA compliant with ARIA labels and full keyboard navigation',
  },
  {
    icon: '⌨️',
    title: 'Keyboard Shortcuts',
    desc: 'Ctrl+Shift+R to read, Space to pause/resume, Escape to stop',
  },
] as const

// How to use steps
export const HOW_TO_USE_STEPS: readonly Step[] = [
  {
    step: 1,
    title: 'Navigate to any webpage',
    desc: 'Open any website with text content you want to hear read aloud',
  },
  {
    step: 2,
    title: 'Select text',
    desc: 'Highlight the text you want to hear using your mouse or keyboard',
  },
  {
    step: 3,
    title: 'Click "Read This"',
    desc: 'Press the button that appears above your selection',
  },
  {
    step: 4,
    title: 'Enjoy natural playback!',
    desc: 'Listen to natural text-to-speech with automatic language detection',
  },
] as const

// FAQ data
export const FAQS: readonly FAQ[] = [
  {
    question: 'How do I install the extension?',
    answer:
      "Click on the Firefox or Chrome button above to visit the extension store. Click 'Add to Firefox' or 'Add to Chrome', then confirm the installation. The extension icon will appear in your browser toolbar.",
  },
  {
    question: 'How do I use the extension?',
    answer:
      "Simply select any text on a webpage. A 'Read This' button will appear near your selection. Click it to start playback. You can also access the full player by clicking the extension icon in your toolbar.",
  },
  {
    question: 'Can I change the reading speed?',
    answer:
      'Yes! Open the player and use the speed control slider or quick preset buttons (0.75x, 0.9x, 1.0x, 1.25x, 1.5x). You can adjust from 0.5x to 2.0x speed to match your preferences.',
  },
  {
    question: 'Does it work in different languages?',
    answer:
      'Absolutely! The extension automatically detects the language of the text and uses the appropriate voice. It supports 30+ languages including English, Spanish, French, German, Portuguese, Japanese, Chinese, and many more.',
  },
  {
    question: 'How do I select a different voice?',
    answer:
      'Click the voice selector dropdown in the player. Voices are sorted by quality with premium/neural voices marked with a ⚡ icon. You can save your favorite voice as the default for each language.',
  },
  {
    question: 'Can I queue multiple text selections?',
    answer:
      'Yes! The extension includes a reading queue feature. Simply select and add multiple text blocks, and they will be read sequentially. You can manage the queue from the player interface.',
  },
  {
    question: 'Is my data being collected?',
    answer:
      'No. Read It For Me is completely privacy-focused. All text-to-speech processing happens locally in your browser using built-in browser APIs. No data is sent to external servers or collected.',
  },
  {
    question: 'What is the mini player mode?',
    answer:
      'The mini player is a compact, draggable control panel that you can move anywhere on the page. It provides quick access to play/pause and basic controls without taking up much screen space, perfect for multitasking.',
  },
  {
    question: 'Can I change the interface language?',
    answer:
      'Yes! The extension interface supports 7 languages: English, Portuguese (BR), Spanish, French, German, Japanese, and Chinese. You can change it in the settings panel.',
  },
  {
    question: "The extension isn't reading my selected text. Why?",
    answer:
      "Make sure you've selected actual text (not images). Some websites with heavy JavaScript may interfere. Try refreshing the page. Also ensure your browser's text-to-speech voices are available (some may need to be downloaded in browser settings).",
  },
  {
    question: 'Can I adjust the pitch and volume?',
    answer:
      'Yes! The player includes separate controls for pitch and volume. You can fine-tune the voice to your preference. These settings are saved and will be remembered for future sessions.',
  },
  {
    question: 'Is the extension free?',
    answer:
      'Yes, Read It For Me is completely free and open source under the MIT License. If you find it useful, consider supporting the project on GitHub or buying the developer a coffee!',
  },
] as const
