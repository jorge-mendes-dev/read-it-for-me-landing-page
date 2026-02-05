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
  const baseClasses = 'group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-enterprise font-bold text-base transition-all duration-400 hover:scale-105 active:scale-95'
  
  const variantClasses = {
    primary: 'bg-white dark:bg-slate-50 text-primary-700 hover:bg-slate-50 dark:hover:bg-white shadow-medium hover:shadow-enterprise border-2 border-primary-100 dark:border-primary-200',
    secondary: 'bg-white/10 backdrop-blur-md border-2 border-white/60 text-white hover:bg-white hover:text-primary-700 shadow-medium hover:shadow-enterprise',
    accent: 'bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 hover:from-yellow-300 hover:to-amber-300 shadow-medium hover:shadow-hard border-2 border-yellow-500/20',
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
