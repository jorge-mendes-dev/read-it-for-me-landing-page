import { motion } from 'framer-motion'
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
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 dark:from-blue-700 dark:via-purple-700 dark:to-pink-600 text-white py-20 px-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <motion.img 
            src={logo} 
            alt="Read It For Me Logo" 
            className="h-24 w-24 mx-auto mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Read It For Me
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Natural text-to-speech with smart language detection and premium voice selection
          </motion.p>
          <motion.p 
            className="text-lg mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A powerful, accessible browser extension that converts any web content into natural-sounding speech.
            Perfect for accessibility, language learning, multitasking, and productivity.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="https://addons.mozilla.org/firefox/addon/read-it-for-me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white dark:bg-gray-100 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              🦊 Get Firefox Add-on
            </motion.a>
            <motion.a
              href="#"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🌐 Chrome (Coming Soon)
            </motion.a>
          </motion.div>
          <motion.p 
            className="mt-4 text-sm text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Chrome Web Store submission pending review
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
              ✨ Features
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
              Powerful features designed for accessibility, productivity, and language learning
            </p>
          </motion.div>
          
          {/* Core Features */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gray-800 dark:text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              🎯 Core Features
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {[
                { icon: "👆", title: "One-Click Reading", desc: "Select text and click the floating button to start reading instantly" },
                { icon: "🌍", title: "Smart Language Detection", desc: "Automatically detects and speaks 30+ languages with flag emojis" },
                { icon: "⚡", title: "Premium Voice Selection", desc: "Prioritizes Neural, Premium, and Enhanced voices with quality indicators" },
                { icon: "📱", title: "Floating Mini-Player", desc: "Draggable controls that follow you across pages with mini mode" },
                { icon: "📋", title: "Reading Queue", desc: "Add multiple text selections to read sequentially" },
                { icon: "🔒", title: "Privacy-Focused", desc: "All processing happens locally, no data collection" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 dark:text-white">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
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
                { icon: "⏩", title: "Speed Control", desc: "Adjust from 0.5x to 2.0x with quick presets (0.75x, 0.9x, 1.0x, 1.25x, 1.5x)" },
                { icon: "🎵", title: "Pitch & Volume Control", desc: "Fine-tune voice pitch and independent volume adjustment" },
                { icon: "📊", title: "Progress Tracking", desc: "Real-time progress bar and time estimates" },
                { icon: "⏯️", title: "Full Controls", desc: "Play, pause, resume, stop, and clear queue" }
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

          {/* User Experience */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 text-gray-800 dark:text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              🎨 User Experience
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
            >
              {[
                { icon: "🗂️", title: "Collapsible Sections", desc: "Voice selector, playback controls, advanced settings" },
                { icon: "🌐", title: "7 Interface Languages", desc: "EN, PT-BR, ES, FR, DE, JA, ZH-CN fully translated" },
                { icon: "📖", title: "First-Run Guide", desc: "Welcome modal with helpful tips and help button" },
                { icon: "✨", title: "Modern Design", desc: "Beautiful gradient UI with glassmorphic effects" },
                { icon: "📱", title: "Responsive Layout", desc: "Works seamlessly on all screen sizes" }
              ].map((ux, i) => (
                <motion.div 
                  key={i}
                  className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl mb-4">{ux.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 dark:text-white">{ux.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{ux.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
              📸 See It In Action
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
              Beautiful, intuitive interface designed for seamless reading experience
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.div 
              className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <img 
                src={buttonImg} 
                alt="Read It For Me floating button" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-center dark:text-white">Floating Button</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-2">One-click access to start reading</p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <img 
                src={expandedPlayerImg} 
                alt="Expanded player interface" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-center dark:text-white">Expanded Player</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-2">Full controls and settings</p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <img 
                src={miniImg} 
                alt="Mini player mode" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-center dark:text-white">Mini Mode</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-2">Compact player for multitasking</p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <img 
                src={playerDefaultImg} 
                alt="Default player view" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-center dark:text-white">Default Player</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-2">Clean and intuitive design</p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <img 
                src={configImg} 
                alt="Configuration settings" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-center dark:text-white">Settings Panel</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-2">Customize your experience</p>
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
                className="flex items-start gap-6"
                variants={fadeInUp}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xl"
                  whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                >
                  {item.step}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-8 rounded-lg transition-colors duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 dark:text-white">💡 Tips & Tricks</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>🌐 Extension auto-detects page language from metadata</li>
              <li>⚡ Look for lightning bolt for premium/neural voices</li>
              <li>🎯 Save your favorite voice as default</li>
              <li>❓ Click the help button (?) to reopen the welcome guide</li>
              <li>🌍 Change interface language in settings</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white py-20 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Ready to transform your reading experience?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join thousands of users who are already enjoying accessible, natural text-to-speech.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.a
              href="https://addons.mozilla.org/firefox/addon/read-it-for-me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white dark:bg-surface text-purple-600 dark:text-purple-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors shadow-lg"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              🦊 Get Firefox Add-on
            </motion.a>
            <motion.a
              href="https://github.com/jorge-mendes-dev/read-it-for-me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              ⭐ View on GitHub
            </motion.a>
          </motion.div>
          <motion.div 
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://buymeacoffee.com/jorge.mendesdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400-light transition-colors shadow-lg"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0], boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              ☕ Buy Me a Coffee
            </motion.a>
          </motion.div>
          <motion.p 
            className="text-sm opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Open source • MIT License • Privacy-focused
          </motion.p>
        </div>
      </section>
    </div>
  )
}
