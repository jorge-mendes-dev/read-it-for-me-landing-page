import { motion } from 'framer-motion'
import { scaleIn } from '../constants/animations'
import type { Feature } from '../constants/features'

interface FeatureCardProps {
  feature: Feature
  variant?: 'default' | 'compact'
}

// Extracted component following Composition Patterns best practices
// Avoids duplication and makes the code more maintainable
export default function FeatureCard({ feature, variant = 'default' }: FeatureCardProps) {
  if (variant === 'compact') {
    return (
      <motion.div
        className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
        variants={scaleIn}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
      >
        <div className="text-3xl mb-4">{feature.icon}</div>
        <h4 className="text-xl font-semibold mb-3 dark:text-white">{feature.title}</h4>
        <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 shadow-sm hover:shadow-2xl transition-all duration-300"
      variants={scaleIn}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h4>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.desc}</p>
    </motion.div>
  )
}
