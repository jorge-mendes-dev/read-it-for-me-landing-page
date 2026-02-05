// Reusable Framer Motion animation variants
// Following React Best Practices: Extract common patterns to reduce duplication

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
} as const

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
} as const

export const slideInFromRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
} as const
