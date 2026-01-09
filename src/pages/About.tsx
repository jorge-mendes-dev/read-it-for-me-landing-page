import { motion } from 'framer-motion'
import expandedPlayerImg from '../assets/expanded player.png'
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

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl font-bold mb-8 text-gray-800 dark:text-white"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            About Read It For Me
          </motion.h1>
          
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
              We believe that everyone should have access to content in the format that works best for them.
              Read It For Me makes the web more accessible by providing natural, high-quality text-to-speech
              conversion with AI-powered voice selection and smart language detection. Perfect for accessibility, 
              language learning, multitasking, productivity, and reducing eye strain.
            </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">User Interface</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img 
                    src={expandedPlayerImg} 
                    alt="Read It For Me expanded player" 
                    className="w-full h-auto rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Expanded player with full controls</p>
                </motion.div>
                <motion.div 
                  className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img 
                    src={configImg} 
                    alt="Settings configuration" 
                    className="w-full h-auto rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Customizable settings panel</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🛠️ Tech Stack</h2>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md mb-8 transition-colors duration-300">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">Extension Type:</span>
                  <span>Browser Extension (Manifest V3)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">Framework:</span>
                  <span>React 18 + TypeScript 5.5</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">Build Tool:</span>
                  <span>Vite 5.4 (Lightning-fast builds)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">Styling:</span>
                  <span>Tailwind CSS 3.4 with custom design tokens</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">i18n:</span>
                  <span>Chrome i18n API (7 languages)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">APIs:</span>
                  <span>Web Speech API (Native TTS), Chrome Extension APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">Bundle Size:</span>
                  <span>~53KB total (gzipped), ~35KB content script</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">Permissions:</span>
                  <span>Minimal - activeTab, storage only</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-[140px] dark:text-white">Browser Support:</span>
                  <span>Chrome 109+, Edge 109+, Firefox 79+</span>
                </li>
              </ul>
            </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🗺️ Roadmap</h2>
              <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">✅ Implemented (v1.0.3)</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300 mb-6">
                <li>✅ Smart auto-language detection (30+ languages)</li>
                <li>✅ AI-powered voice selection with ⚡ indicators</li>
                <li>✅ Live word highlighting during playback</li>
                <li>✅ Auto-scroll follow mode</li>
                <li>✅ Smart text preprocessing & cleanup</li>
                <li>✅ Keyboard shortcuts (Ctrl+Shift+R, Space, Esc)</li>
                <li>✅ Draggable floating mini-player</li>
                <li>✅ Reading queue system</li>
                <li>✅ Smart Read Full Article (AI detection)</li>
                <li>✅ Multi-language interface (7 languages)</li>
                <li>✅ Collapsible settings sections</li>
                <li>✅ First-run welcome guide</li>
                <li>✅ Speed presets & custom controls (0.5x-2.0x)</li>
                <li>✅ Pitch & volume adjustment</li>
                <li>✅ Real-time progress tracking</li>
                <li>✅ Auto-recovery for long speeches</li>
                <li>✅ Dark mode support</li>
                <li>✅ WCAG 2.1 AA accessibility</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">🚀 Planned Features</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                <li>� Save/load voice presets</li>
                <li>📜 Reading history</li>
                <li>🎵 Export audio to file (MP3/WAV)</li>
                <li>🎨 Custom CSS themes</li>
                <li>📋 Browser context menu integration</li>
                <li>📚 Batch processing for multiple pages</li>
                <li>☁️ Cloud sync for settings (optional)</li>
                <li>🎙️ Custom voice upload support</li>
              </ul>
            </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🔒 Privacy First</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your privacy matters. Read It For Me processes all text locally on your device using the
              browser's built-in speech synthesis. We don't collect, store, or transmit any of your data.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Privacy Guarantees:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>🔒 <strong>Zero Tracking</strong> - No analytics, no telemetry</li>
                <li>🚫 <strong>No Data Collection</strong> - Nothing leaves your device</li>
                <li>🔐 <strong>Minimal Permissions</strong> - Only activeTab and storage</li>
                <li>✅ <strong>CSP Compliant</strong> - Content Security Policy compatible</li>
                <li>📂 <strong>Open Source</strong> - Fully auditable code (MIT License)</li>
                <li>🏠 <strong>100% Local Processing</strong> - No external servers or requests</li>
              </ul>
            </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🤝 Contributing</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Read It For Me is open source and available on GitHub under the MIT License. 
              We welcome contributions from the community!
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg mb-6 transition-colors duration-300">
              <h3 className="font-semibold mb-3 dark:text-white">How to Contribute:</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Fork the repository</li>
                <li>Create your feature branch (<code className="bg-white dark:bg-slate-900 px-2 py-1 rounded">git checkout -b feature/AmazingFeature</code>)</li>
                <li>Commit your changes (<code className="bg-white dark:bg-slate-900 px-2 py-1 rounded">git commit -m 'Add some AmazingFeature'</code>)</li>
                <li>Push to the branch (<code className="bg-white dark:bg-slate-900 px-2 py-1 rounded">git push origin feature/AmazingFeature</code>)</li>
                <li>Open a Pull Request</li>
              </ol>
            </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">🙏 Acknowledgments</h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Built with the Web Speech API</li>
              <li>Icons designed with Heroicons</li>
              <li>UI design inspired by modern glassmorphism principles</li>
              <li>Flag emojis for language identification</li>
              <li>Special thanks to all contributors and testers</li>
            </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">👨‍💻 Developer</h2>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md mb-8 transition-colors duration-300">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                Read It For Me is developed and maintained by Jorge Mendes, a passionate developer
                focused on creating accessible and useful tools for the web.
              </p>
              <a
                href="https://jorgemendes.com.br/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
              >
                Learn more about Jorge Mendes →
              </a>
            </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">📧 Contact & Support</h2>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md mb-8 transition-colors duration-300">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>🐛 <a href="https://github.com/jorge-mendes-dev/read-it-for-me/issues" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">Report Issues</a></li>
                <li>💬 <a href="https://github.com/jorge-mendes-dev/read-it-for-me/discussions" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">Discussions</a></li>
                <li>⭐ <a href="https://github.com/jorge-mendes-dev/read-it-for-me" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">Star on GitHub</a></li>
              </ul>
            </div>
            </motion.div>

            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.a
                href="https://github.com/jorge-mendes-dev/read-it-for-me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                ⭐ View on GitHub
              </motion.a>
              <motion.a
                href="https://addons.mozilla.org/firefox/addon/read-it-for-me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🦊 Get Firefox Add-on
              </motion.a>
              <motion.a
                href="https://chromewebstore.google.com/detail/boclnpmpcbbighifbndbkijpkcodddda?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🌐 Get Chrome Extension
              </motion.a>
              <motion.a
                href="https://buymeacoffee.com/jorge.mendesdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                ☕ Buy Me a Coffee
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
