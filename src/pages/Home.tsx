import { motion } from 'framer-motion'
import { useState } from 'react'
import logo from '../assets/read it logo.png'
import buttonImg from '../assets/button.png'
import expandedPlayerImg from '../assets/expanded player.png'
import miniImg from '../assets/mini.png'
import playerDefaultImg from '../assets/player defaultpng.png'
import configImg from '../assets/config.png'
import { fadeInUp, stagger, scaleIn } from '../constants/animations'
import {
  CORE_FEATURES,
  PLAYBACK_CONTROLS,
  READING_ENHANCEMENTS,
  USER_EXPERIENCE,
  HOW_TO_USE_STEPS,
  FAQS,
} from '../constants/features'
import FeatureCard from '../components/FeatureCard'
import CTAButton from '../components/CTAButton'
import SectionHeader from '../components/SectionHeader'

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-secondary-900 dark:from-slate-950 dark:via-primary-950 dark:to-secondary-950 text-white py-32 md:py-40 px-4 transition-colors duration-500 overflow-hidden" aria-label="Hero section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-3xl mb-10 shadow-enterprise border border-white/20"
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
            <CTAButton href="https://addons.mozilla.org/firefox/addon/read-it-for-me/" icon="🦊">
              Get Firefox Add-on
            </CTAButton>
            <CTAButton href="https://chromewebstore.google.com/detail/boclnpmpcbbighifbndbkijpkcodddda?utm_source=item-share-cb" icon="🌐">
              Get Chrome Extension
            </CTAButton>
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
      <section className="py-32 md:py-40 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900 transition-colors duration-500" aria-label="Features">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="✨ FEATURES"
            title="Everything You Need"
            subtitle="Privacy-First • 30+ Languages • Premium AI-Selected Voices"
          />
          
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
              {CORE_FEATURES.map((feature, i) => (
                <FeatureCard key={i} feature={feature} />
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
              {PLAYBACK_CONTROLS.map((control, i) => (
                <FeatureCard key={i} feature={control} variant="compact" />
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
              {READING_ENHANCEMENTS.map((feature, i) => (
                <FeatureCard key={i} feature={feature} />
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
              {USER_EXPERIENCE.map((ux, i) => (
                <FeatureCard key={i} feature={ux} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-32 md:py-40 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900/50 dark:to-slate-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="📸 SCREENSHOTS"
            title="See It In Action"
            subtitle="Beautiful, intuitive interface designed for seamless reading experience"
          />

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div 
              className="group bg-white dark:bg-slate-800/50 p-8 rounded-enterprise border border-slate-200/80 dark:border-slate-700/50 shadow-soft hover:shadow-enterprise transition-all duration-400 backdrop-blur-sm"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-section mb-5 border border-slate-200 dark:border-slate-600 shadow-soft">
                <img 
                  src={buttonImg} 
                  alt="Read It For Me floating button interface showing one-click text-to-speech activation" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Floating Button</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">One-click access to start reading</p>
            </motion.div>

            <motion.div 
              className="group bg-white dark:bg-slate-800/50 p-8 rounded-enterprise border border-slate-200/80 dark:border-slate-700/50 shadow-soft hover:shadow-enterprise transition-all duration-400 backdrop-blur-sm"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-section mb-5 border border-slate-200 dark:border-slate-600 shadow-soft">
                <img 
                  src={expandedPlayerImg} 
                  alt="Expanded player interface with full playback controls, voice settings, and speed adjustment" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Expanded Player</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Full controls and settings</p>
            </motion.div>

            <motion.div 
              className="group bg-white dark:bg-slate-800/50 p-8 rounded-enterprise border border-slate-200/80 dark:border-slate-700/50 shadow-soft hover:shadow-enterprise transition-all duration-400 backdrop-blur-sm"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-section mb-5 border border-slate-200 dark:border-slate-600 shadow-soft">
                <img 
                  src={miniImg} 
                  alt="Compact mini player mode for multitasking with draggable controls" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Mini Mode</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Compact player for multitasking</p>
            </motion.div>

            <motion.div 
              className="group bg-white dark:bg-slate-800/50 p-8 rounded-enterprise border border-slate-200/80 dark:border-slate-700/50 shadow-soft hover:shadow-enterprise transition-all duration-400 backdrop-blur-sm"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-section mb-5 border border-slate-200 dark:border-slate-600 shadow-soft">
                <img 
                  src={playerDefaultImg} 
                  alt="Default player view with clean, intuitive text-to-speech controls" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Default Player</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Clean and intuitive design</p>
            </motion.div>

            <motion.div 
              className="group bg-white dark:bg-slate-800/50 p-8 rounded-enterprise border border-slate-200/80 dark:border-slate-700/50 shadow-soft hover:shadow-enterprise transition-all duration-400 backdrop-blur-sm"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden rounded-section mb-5 border border-slate-200 dark:border-slate-600 shadow-soft">
                <img 
                  src={configImg} 
                  alt="Configuration settings panel for customizing voice, speed, pitch, and language preferences" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Settings Panel</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Customize your experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-32 md:py-40 px-4 bg-gradient-to-b from-white via-slate-50/30 to-white dark:from-slate-900 dark:via-slate-800/30 dark:to-slate-900 transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-slate-900 dark:text-white"
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
            {HOW_TO_USE_STEPS.map((item) => (
              <motion.div 
                key={item.step}
                className="group relative bg-white dark:bg-slate-800/50 p-10 rounded-enterprise border border-slate-200/80 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-500/50 shadow-soft hover:shadow-enterprise transition-all duration-400 backdrop-blur-sm"
                variants={fadeInUp}
                whileHover={{ x: 12, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start gap-8">
                  <motion.div 
                    className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 rounded-enterprise flex items-center justify-center text-white font-black text-3xl shadow-enterprise"
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
      <section className="py-32 md:py-40 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900/50 dark:to-slate-800 transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="❓ FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about using Read It For Me"
          />

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {FAQS.map((faq, i) => (
              <motion.div 
                key={i}
                className="bg-white dark:bg-slate-800/50 rounded-enterprise overflow-hidden hover:shadow-enterprise shadow-soft transition-all duration-400 border border-slate-200/80 dark:border-slate-700/50 backdrop-blur-sm"
                variants={fadeInUp}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="group w-full text-left p-8 flex items-start justify-between hover:bg-gradient-to-r hover:from-slate-50 hover:to-primary-50/30 dark:hover:from-slate-700/50 dark:hover:to-primary-900/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-start flex-1 leading-relaxed group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                    <span className="text-primary-600 dark:text-primary-400 mr-3 font-bold">Q:</span>
                    {faq.question}
                  </h3>
                  <motion.div className="flex-shrink-0 ml-4 w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                    <motion.svg
                      className="w-5 h-5 text-primary-600 dark:text-primary-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      animate={{ rotate: openFaqIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.div>
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
                  <p className="text-slate-600 dark:text-slate-300 px-8 pb-8 pl-16 leading-relaxed text-base">
                    <span className="text-primary-600 dark:text-primary-400 mr-2 font-semibold">A:</span>
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-20 text-center bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-800/80 dark:via-slate-800/50 dark:to-slate-800/80 p-12 rounded-enterprise border border-slate-200/80 dark:border-slate-700/50 shadow-enterprise backdrop-blur-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 rounded-enterprise flex items-center justify-center text-4xl mx-auto mb-8 shadow-enterprise">
              💬
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Have more questions?
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
              We're here to help! Reach out to our community on GitHub.
            </p>
            <a
              href="https://github.com/jorge-mendes-dev/read-it-for-me/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-10 py-5 rounded-enterprise font-bold transition-all duration-400 shadow-medium hover:shadow-enterprise hover:scale-105"
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
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-secondary-900 dark:from-slate-950 dark:via-primary-950 dark:to-secondary-950 text-white py-32 md:py-40 px-4 transition-colors duration-500 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-primary-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
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
            <CTAButton href="https://addons.mozilla.org/firefox/addon/read-it-for-me/" icon="🦊">
              Get Firefox Add-on
            </CTAButton>
            <CTAButton href="https://chromewebstore.google.com/detail/boclnpmpcbbighifbndbkijpkcodddda?utm_source=item-share-cb" icon="🌐">
              Get Chrome Extension
            </CTAButton>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <CTAButton href="https://github.com/jorge-mendes-dev/read-it-for-me" icon="⭐" variant="secondary">
              View on GitHub
            </CTAButton>
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
