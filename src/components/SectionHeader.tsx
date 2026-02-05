import { motion } from 'framer-motion'
import { fadeInUp } from '../constants/animations'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  icon?: string
}

// Reusable section header component
// Provides consistent styling across all sections
export default function SectionHeader({ badge, title, subtitle, icon }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      {badge && (
        <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-3">
        {icon && <span className="text-3xl">{icon}</span>}
        <span>{title}</span>
      </h2>
      {subtitle && (
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
