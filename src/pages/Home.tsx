import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from '../assets/read it logo.png'
import buttonImg from '../assets/button.png'
import expandedPlayerImg from '../assets/expanded player.png'
import miniImg from '../assets/mini.png'
import playerDefaultImg from '../assets/player defaultpng.png'
import configImg from '../assets/config.png'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 dark:from-blue-800 dark:via-purple-800 dark:to-pink-700 text-white py-24 md:py-32 px-4 transition-colors duration-300 overflow-hidden" aria-label="Hero section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-3xl mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <img 
              src={logo} 
              alt="Read It For Me - AI Text-to-Speech Extension Logo" 
              className="h-28 w-28"
              width="112"
              height="112"
            />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Read It For Me
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6 text-blue-50 font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            AI-powered voice selection and smart language detection for the most natural listening experience
          </motion.p>
          <motion.p 
            className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A powerful, accessible browser extension that converts any web content into natural-sounding speech.
            Perfect for accessibility, language learning, multitasking, and productivity.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="https://addons.mozilla.org/firefox/addon/read-it-for-me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-50 text-purple-600 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 dark:hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">🦊</span>
              <span>Get Firefox Add-on</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <motion.a
              href="https://chromewebstore.google.com/detail/boclnpmpcbbighifbndbkijpkcodddda?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-50 text-purple-600 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 dark:hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">🌐</span>
              <span>Get Chrome Extension</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center gap-2 text-sm text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Free & Open Source • Privacy Focused • 30+ Languages</span>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300" aria-label="Features">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
              ✨ FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-white tracking-tight">
              Everything You Need
            </h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Privacy-First • 30+ Languages • Premium AI-Selected Voices
            </p>
          </motion.div>
          
          {/* Core Features */}
          <div className="mb-20">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-white flex items-center gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-3xl">🎯</span>
              <span>Core Features</span>
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {[
                { icon: "👆", title: "One-Click Reading", desc: "Select any text and click the floating 'Read This' button to start instantly" },
                { icon: "🌍", title: "Smart Auto-Language Detection", desc: "Automatically detects 30+ languages from page metadata and text patterns" },
                { icon: "⚡", title: "AI-Powered Voice Selection", desc: "Intelligent voice scoring prioritizes Neural, Premium, and Enhanced voices with ⚡ quality indicators" },
                { icon: "📱", title: "Draggable Floating Mini-Player", desc: "Persistent controls that follow you across pages with drag-to-reposition" },
                { icon: "📋", title: "Reading Queue System", desc: "Add multiple text selections that play sequentially" },
                { icon: "🔒", title: "100% Privacy-First", desc: "All processing happens locally, zero data collection, no external servers" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 shadow-sm hover:shadow-2xl transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Playback Controls */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gray-800 dark:text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              🎚️ Playback Controls
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {[
                { icon: "⏩", title: "Speed Control", desc: "0.5x to 2.0x with quick presets (0.75x, 0.9x, 1.0x, 1.25x, 1.5x)" },
                { icon: "🎵", title: "Pitch & Volume", desc: "Fine-tune voice pitch (0-2 range) and independent volume adjustment" },
                { icon: "📊", title: "Real-Time Progress", desc: "Visual progress bar with time estimates and auto-recovery" },
                { icon: "⏯️", title: "Full Playback Controls", desc: "Play, pause, resume, stop, skip, and clear queue" }
              ].map((control, i) => (
                <motion.div 
                  key={i}
                  className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl mb-4">{control.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 dark:text-white">{control.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{control.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Reading Enhancements */}
          <div className="mb-20">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-white flex items-center gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-3xl">✨</span>
              <span>Reading Enhancements</span>
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {[
                { icon: "🎯", title: "Live Word Highlighting", desc: "Real-time word-by-word highlighting during playback with smooth animations" },
                { icon: "📜", title: "Auto-Scroll Follow Mode", desc: "Optional follow mode that automatically scrolls to highlighted words" },
                { icon: "🧹", title: "Smart Text Preprocessing", desc: "Converts abbreviations (Dr. → Doctor) and normalizes punctuation for natural speech" },
                { icon: "📰", title: "Smart Read Full Article", desc: "One-click button to read entire articles with AI content detection" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 shadow-sm hover:shadow-2xl transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* User Experience */}
          <div>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-white flex items-center gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-3xl">🎨</span>
              <span>User Experience</span>
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {[
                { icon: "🗂️", title: "Collapsible Settings", desc: "Organized voice selector, playback controls, and advanced settings sections" },
                { icon: "🌐", title: "7 Interface Languages", desc: "English, Portuguese (BR), Spanish, French, German, Japanese, Chinese (CN)" },
                { icon: "📖", title: "First-Run Welcome Guide", desc: "Interactive modal with helpful tips and contextual help button (?)" },
                { icon: "✨", title: "Modern Glassmorphic Design", desc: "Beautiful gradient UI with frosted glass effects and smooth animations" },
                { icon: "♿", title: "Accessibility First", desc: "WCAG 2.1 AA compliant with ARIA labels and full keyboard navigation" },
                { icon: "⌨️", title: "Keyboard Shortcuts", desc: "Ctrl+Shift+R to read, Space to pause/resume, Escape to stop" }
              ].map((ux, i) => (
                <motion.div 
                  key={i}
                  className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 shadow-sm hover:shadow-2xl transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">{ux.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{ux.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{ux.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
              📸 SCREENSHOTS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-white tracking-tight">
              See It In Action
            </h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Beautiful, intuitive interface designed for seamless reading experience
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div 
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-xl mb-4 border border-gray-200 dark:border-slate-600">
                <img 
                  src={buttonImg} 
                  alt="Read It For Me floating button interface showing one-click text-to-speech activation" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Floating Button</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">One-click access to start reading</p>
            </motion.div>

            <motion.div 
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-xl mb-4 border border-gray-200 dark:border-slate-600">
                <img 
                  src={expandedPlayerImg} 
                  alt="Expanded player interface with full playback controls, voice settings, and speed adjustment" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Expanded Player</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Full controls and settings</p>
            </motion.div>

            <motion.div 
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-xl mb-4 border border-gray-200 dark:border-slate-600">
                <img 
                  src={miniImg} 
                  alt="Compact mini player mode for multitasking with draggable controls" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Mini Mode</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Compact player for multitasking</p>
            </motion.div>

            <motion.div 
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-xl mb-4 border border-gray-200 dark:border-slate-600">
                <img 
                  src={playerDefaultImg} 
                  alt="Default player view with clean, intuitive text-to-speech controls" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Default Player</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Clean and intuitive design</p>
            </motion.div>

            <motion.div 
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-xl mb-4 border border-gray-200 dark:border-slate-600">
                <img 
                  src={configImg} 
                  alt="Configuration settings panel for customizing voice, speed, pitch, and language preferences" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Settings Panel</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Customize your experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            📖 How to Use
          </motion.h2>
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              { step: 1, title: "Navigate to any webpage", desc: "Open any website with text content you want to hear read aloud" },
              { step: 2, title: "Select text", desc: "Highlight the text you want to hear using your mouse or keyboard" },
              { step: 3, title: "Click \"Read This\"", desc: "Press the button that appears above your selection" },
              { step: 4, title: "Enjoy natural playback!", desc: "Listen to natural text-to-speech with automatic language detection" }
            ].map((item) => (
              <motion.div 
                key={item.step}
                className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 shadow-sm hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.3 } }}
                  >
                    {item.step}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 p-10 rounded-3xl border border-purple-200 dark:border-purple-800 transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-2xl">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tips & Tricks</h3>
            </div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0">🌐</span>
                <span>Auto-detects language from page metadata and text patterns across 30+ languages</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0">⚡</span>
                <span>Look for lightning bolt (⚡) to identify Neural and Premium quality voices</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0">⌨️</span>
                <span>Use Ctrl+Shift+R to read selected text, Space to pause/resume, Escape to stop</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0">🎯</span>
                <span>Enable word highlighting and auto-scroll for enhanced reading experience</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0">📰</span>
                <span>Use 'Read Full Article' button for AI-powered article content detection</span>
              </li>
              <li className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0">❓</span>
                <span>Click the help button (?) anytime to access the welcome guide and tips</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
              ❓ FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about using Read It For Me
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              {
                question: "How do I install the extension?",
                answer: "Click on the Firefox or Chrome button above to visit the extension store. Click 'Add to Firefox' or 'Add to Chrome', then confirm the installation. The extension icon will appear in your browser toolbar."
              },
              {
                question: "How do I use the extension?",
                answer: "Simply select any text on a webpage. A 'Read This' button will appear near your selection. Click it to start playback. You can also access the full player by clicking the extension icon in your toolbar."
              },
              {
                question: "Can I change the reading speed?",
                answer: "Yes! Open the player and use the speed control slider or quick preset buttons (0.75x, 0.9x, 1.0x, 1.25x, 1.5x). You can adjust from 0.5x to 2.0x speed to match your preferences."
              },
              {
                question: "Does it work in different languages?",
                answer: "Absolutely! The extension automatically detects the language of the text and uses the appropriate voice. It supports 30+ languages including English, Spanish, French, German, Portuguese, Japanese, Chinese, and many more."
              },
              {
                question: "How do I select a different voice?",
                answer: "Click the voice selector dropdown in the player. Voices are sorted by quality with premium/neural voices marked with a ⚡ icon. You can save your favorite voice as the default for each language."
              },
              {
                question: "Can I queue multiple text selections?",
                answer: "Yes! The extension includes a reading queue feature. Simply select and add multiple text blocks, and they will be read sequentially. You can manage the queue from the player interface."
              },
              {
                question: "Is my data being collected?",
                answer: "No. Read It For Me is completely privacy-focused. All text-to-speech processing happens locally in your browser using built-in browser APIs. No data is sent to external servers or collected."
              },
              {
                question: "What is the mini player mode?",
                answer: "The mini player is a compact, draggable control panel that you can move anywhere on the page. It provides quick access to play/pause and basic controls without taking up much screen space, perfect for multitasking."
              },
              {
                question: "Can I change the interface language?",
                answer: "Yes! The extension interface supports 7 languages: English, Portuguese (BR), Spanish, French, German, Japanese, and Chinese. You can change it in the settings panel."
              },
              {
                question: "The extension isn't reading my selected text. Why?",
                answer: "Make sure you've selected actual text (not images). Some websites with heavy JavaScript may interfere. Try refreshing the page. Also ensure your browser's text-to-speech voices are available (some may need to be downloaded in browser settings)."
              },
              {
                question: "Can I adjust the pitch and volume?",
                answer: "Yes! The player includes separate controls for pitch and volume. You can fine-tune the voice to your preference. These settings are saved and will be remembered for future sessions."
              },
              {
                question: "Is the extension free?",
                answer: "Yes, Read It For Me is completely free and open source under the MIT License. If you find it useful, consider supporting the project on GitHub or buying the developer a coffee!"
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                variants={fadeInUp}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-6 flex items-start justify-between hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-start flex-1">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">Q:</span>
                    {faq.question}
                  </h3>
                  <motion.svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: openFaqIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaqIndex === i ? 'auto' : 0,
                    opacity: openFaqIndex === i ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 dark:text-gray-300 px-6 pb-6 pl-12">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 font-semibold">A:</span>
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 text-center bg-white dark:bg-slate-800 p-10 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg">
              💬
            </div>
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Have more questions?
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're here to help! Reach out to our community on GitHub.
            </p>
            <a
              href="https://github.com/jorge-mendes-dev/read-it-for-me/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z\" clipRule="evenodd\" />
              </svg>
              <span>Ask on GitHub</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500 dark:from-purple-800 dark:via-blue-800 dark:to-pink-700 text-white py-24 md:py-32 px-4 transition-colors duration-300 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Ready to transform your reading experience?
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-blue-50 leading-relaxed max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join thousands of users who are already enjoying accessible, natural text-to-speech.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.a
              href="https://addons.mozilla.org/firefox/addon/read-it-for-me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">🦊</span>
              <span>Get Firefox Add-on</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <motion.a
              href="https://chromewebstore.google.com/detail/boclnpmpcbbighifbndbkijpkcodddda?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">🌐</span>
              <span>Get Chrome Extension</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.a
              href="https://github.com/jorge-mendes-dev/read-it-for-me"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>View on GitHub</span>
            </motion.a>
            <motion.a
              href="https://buymeacoffee.com/jorge.mendesdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.08, rotate: [0, -3, 3, -3, 0] }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">☕</span>
              <span>Buy Me a Coffee</span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-3 text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">Open Source • MIT License • Privacy Focused</span>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
