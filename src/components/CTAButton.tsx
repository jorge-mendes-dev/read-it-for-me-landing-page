import { motion } from 'framer-motion'
import { scaleIn } from '../constants/animations'

interface CTAButtonProps {
  href: string
  icon: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
}

// Reusable CTA button component following composition patterns
// Eliminates duplication across Hero and CTA sections
export default function CTAButton({ href, icon, children, variant = 'primary' }: CTAButtonProps) {
  const baseClasses = 'group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl'
  
  const variantClasses = {
    primary: 'bg-white dark:bg-gray-50 text-purple-600 hover:bg-gray-50 dark:hover:bg-white',
    secondary: 'bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-purple-600',
    accent: 'bg-yellow-400 text-gray-900 hover:bg-yellow-300',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]}`}
      variants={scaleIn}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-2xl">{icon}</span>
      <span>{children}</span>
      <svg
        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </motion.a>
  )
}
