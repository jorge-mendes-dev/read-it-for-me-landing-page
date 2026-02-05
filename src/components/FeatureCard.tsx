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
        className="group bg-white dark:bg-slate-800/50 p-8 rounded-enterprise shadow-soft hover:shadow-enterprise transition-all duration-400 border border-slate-200/80 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-600/50 backdrop-blur-sm"
        variants={scaleIn}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      >
        <div className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h4>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.desc}</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="group relative bg-white dark:bg-slate-800/50 p-10 rounded-enterprise border border-slate-200/80 dark:border-slate-700/50 hover:border-primary-300/60 dark:hover:border-primary-600/40 shadow-soft hover:shadow-enterprise transition-all duration-400 backdrop-blur-sm overflow-hidden"
      variants={scaleIn}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/30 group-hover:to-secondary-50/30 dark:group-hover:from-primary-950/20 dark:group-hover:to-secondary-950/20 transition-all duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 dark:from-primary-600 dark:to-secondary-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
          {feature.icon}
        </div>
        <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h4>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  )
}
