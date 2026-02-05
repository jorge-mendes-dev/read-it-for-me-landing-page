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
  const baseClasses = 'group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-enterprise font-bold text-base transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-white via-slate-50 to-white dark:from-slate-50 dark:via-white dark:to-slate-50 text-primary-700 dark:text-primary-800 shadow-enterprise hover:shadow-glow-lg border-2 border-primary-200/60 dark:border-primary-300/60 hover:border-primary-300 dark:hover:border-primary-400',
    secondary: 'bg-white/10 backdrop-blur-md border-2 border-white/70 text-white hover:bg-white/20 hover:border-white shadow-medium hover:shadow-glow',
    accent: 'bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 text-slate-900 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-300 shadow-enterprise hover:shadow-glow-lg border-2 border-yellow-500/30 hover:border-yellow-400',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]}`}
      variants={scaleIn}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      
      {/* Content */}
      <span className="relative z-10 text-2xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <span className="relative z-10 tracking-wide">{children}</span>
      <svg
        className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-all duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </motion.a>
  )
}
