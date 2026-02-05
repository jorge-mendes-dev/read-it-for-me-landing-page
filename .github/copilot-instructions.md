# Read It For Me - Landing Page - AI Coding Instructions

## Project Overview

Marketing landing page for "Read It For Me" browser extension. Built with **Vite + React 18 + TypeScript + Tailwind CSS**. Simple two-page SPA (Home, About) with dark mode, Framer Motion animations, and React Router.

**Core Purpose:** Showcase browser extension features, drive downloads from Firefox/Chrome stores, SEO-optimized for discoverability.

---

## Architecture & Key Patterns

### Component Structure

- **Layout Component Pattern**: [src/components/Layout.tsx](src/components/Layout.tsx) wraps pages with nav/footer, uses React Router's `<Outlet />` for page rendering
- **Reusable Components**: Extract common patterns into components (FeatureCard, CTAButton, SectionHeader)
- **Static Data Extraction**: Feature lists hoisted to [src/constants/features.ts](src/constants/features.ts) - prevents re-creation on every render
- **Animation Variants**: Centralized in [src/constants/animations.ts](src/constants/animations.ts) - imported across pages for consistency
- **Shared State**: Dark mode state managed in [App.tsx](src/App.tsx), passed to Layout via props (no Context needed for this small app)
- **Route Structure**: Root route renders Layout, nested index/about routes render page components

### Code Organization Best Practices

```typescript
// ✅ GOOD: Extract static data to constants (React Best Practices 6.3)
import { CORE_FEATURES, FAQS } from '../constants/features'
import { fadeInUp, scaleIn } from '../constants/animations'

// ✅ GOOD: Reusable component with variants
<FeatureCard feature={item} variant="compact" />

// ❌ BAD: Inline array literals created on every render
{[{icon: '🎯', title: 'Feature'}].map(...)}

// ❌ BAD: Duplicate animation variant definitions
const fadeInUp = { hidden: { opacity: 0, y: 20 }, ... } // in every file
```

### State Management Conventions

```typescript
// Dark mode persistence - localStorage with error handling
const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("darkMode");
  return saved !== null ? JSON.parse(saved) : true; // Default: dark
});

// Update both state AND DOM immediately in toggle
const toggleDarkMode = () => {
  setDarkMode((prev) => {
    const newMode = !prev;
    document.documentElement.classList.toggle("dark", newMode);
    return newMode;
  });
};
```

**Critical**: Always update `document.documentElement.classList` immediately in state setters to avoid visual lag (see [App.tsx](src/App.tsx#L14-L45)).

### Styling System (Tailwind)

- **Dark Mode**: Class-based (`class` strategy in [tailwind.config.js](tailwind.config.js#L7))
- **Custom Color System**: Extended semantic colors (primary, secondary, surface, dark-bg, dark-text) - see [tailwind.config.js](tailwind.config.js#L19-L79)
- **Typography Scale**: Custom semantic sizes (display, headline, title, body, caption) with line-height/weight
- **Transitions**: Use `transition-colors duration-300` for dark mode switches, `transition-smooth` utility for animations
- **Spacing**: Custom scale (xs→3xl) defined at [tailwind.config.js](tailwind.config.js#L11-L18)

### Animation Patterns (Framer Motion)

**All variants centralized in [src/constants/animations.ts](src/constants/animations.ts)**

```typescript
import { fadeInUp, stagger, scaleIn } from "../constants/animations";

// Usage: <motion.div initial="hidden" animate="visible" variants={fadeInUp} />
// For scroll animations: whileInView="visible" viewport={{ once: true }}
```

**Available variants:**

- `fadeInUp` - Fade in from below (20px)
- `scaleIn` - Scale + fade with spring physics
- `stagger` - Sequential child animations (0.1s delay)
- `slideInFromLeft/Right` - Horizontal slide animations

---

## React Best Practices (from `.github/skills/`)

### Follow These Enforced Rules

**1. Composition Over Boolean Props** ([composition-patterns/AGENTS.md](.github/skills/composition-patterns/AGENTS.md))

- ❌ Avoid: `<Button isLarge isPrimary isDisabled />`
- ✅ Use: Compound components or variant props (see FeatureCard, CTAButton)

**2. Performance Optimization** ([react-best-practices/AGENTS.md](.github/skills/react-best-practices/AGENTS.md))

- **Hoist static JSX/data**: All feature lists in [src/constants/features.ts](src/constants/features.ts) - never inline arrays in render
- **Extract reusable components**: Use FeatureCard, CTAButton, SectionHeader to eliminate duplication
- **Avoid barrel imports**: Import directly from submodules (`framer-motion/dist/es/...` for tree-shaking)
- **Lazy load heavy components**: Consider `React.lazy()` for image-heavy sections
- **State derivation**: Calculate during render, don't store in state (e.g., filtered lists)
- **Functional setState**: Use updater functions when new state depends on previous (`setPrev => !prev`)

---

## Development Workflows

### Build Commands

```bash
npm run dev      # Vite dev server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint check
```

### Key Dependencies

- **framer-motion@^12.24.0**: Animations (see variants above)
- **react-router-dom@^7.1.1**: Client-side routing (using v7 API)
- **tailwindcss@^3.4.17**: Styling with custom config

### TypeScript Configuration

- **App code**: [tsconfig.app.json](tsconfig.app.json) - strict mode, React JSX
- **Vite config**: [tsconfig.node.json](tsconfig.node.json) - for build tooling
- **ESLint**: React Hooks + React Refresh plugins configured

---

## SEO & Content Conventions

### Structured Data (from [SEO-OPTIMIZATION.md](SEO-OPTIMIZATION.md))

- JSON-LD Schema.org markup in [index.html](index.html) - SoftwareApplication type
- Update aggregate ratings/review counts when adding testimonials
- Maintain sitemap.xml priority: Home=1.0, About=0.8

### Image Optimization

- **Alt text pattern**: Descriptive, includes context (e.g., "Read It For Me expanded player interface with full playback controls")
- **Lazy loading**: `loading="lazy"` on below-fold images
- **Dimensions**: Always include `width` and `height` attributes to prevent layout shift

### Accessibility

- Use semantic HTML (`<main>`, `<section>`, `<nav>`)
- `aria-label` on sections without visible headings
- `aria-hidden="true"` on decorative elements (see hero background blobs)

---

## Project-Specific Gotchas

1. **Dark Mode Flickering**: Must set `document.documentElement.classList` in both initial state AND toggle function (see [App.tsx](src/App.tsx#L34-L38))

2. **Framer Motion Performance**: Avoid animating `height`/`width` - use `scale` transforms instead. Use `type: "spring"` for natural motion.

3. **Image Imports**: All images imported from `src/assets/` as ES modules, not public URLs

4. **Tailwind Custom Classes**: Don't use arbitrary values when semantic tokens exist (use `text-primary` not `text-[#6366f1]`)

5. **React Router v7**: Using new `<Routes>` API, not legacy `Switch`

6. **Static Data**: Always use constants from [src/constants/features.ts](src/constants/features.ts) - never inline feature arrays

---

## When Adding New Features

### New Page

1. Create in `src/pages/PageName.tsx`
2. Add route to [App.tsx](src/App.tsx) routes
3. Add nav link to [Layout.tsx](src/components/Layout.tsx)
4. Update [sitemap.xml](public/sitemap.xml)

### New Component

- Use TypeScript interfaces for props (see [src/components/FeatureCard.tsx](src/components/FeatureCard.tsx))
- Extract animations from [src/constants/animations.ts](src/constants/animations.ts) - never define inline
- Include dark mode variants (`dark:` prefixes)
- Test both color schemes
- Prefer composition with variant props over boolean props

### New Section (Home/About)

- Use `<SectionHeader>` component for consistent badge/title/subtitle styling
- Wrap content in `<motion.div>` with centralized variants
- Use `whileInView` for scroll-triggered animations
- Include `aria-label` for accessibility
- Follow spacing: `py-20 px-4` for sections
- Extract feature lists to [src/constants/features.ts](src/constants/features.ts) if data is static

---

## Reference Files

**Critical reads for context:**

- [.github/skills/react-best-practices/AGENTS.md](.github/skills/react-best-practices/AGENTS.md) - Performance rules (40+ guidelines)
- [.github/skills/composition-patterns/AGENTS.md](.github/skills/composition-patterns/AGENTS.md) - Component architecture patterns
- [src/constants/features.ts](src/constants/features.ts) - Static feature data (hoisted from components)
- [src/constants/animations.ts](src/constants/animations.ts) - Centralized Framer Motion variants
- [src/components/FeatureCard.tsx](src/components/FeatureCard.tsx) - Reusable feature card with variants
- [FEATURES.md](FEATURES.md) - Extension feature list (marketing copy source)
- [tailwind.config.js](tailwind.config.js) - Custom design system tokens
