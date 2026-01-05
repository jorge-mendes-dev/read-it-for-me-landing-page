# Read It For Me - Landing Page

A modern landing page for the Read It For Me extension, built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- ⚡ Fast development with Vite
- ⚛️ React 18 with TypeScript
- 🎨 Styled with Tailwind CSS
- 🔄 Client-side routing with React Router
- 📱 Responsive design
- 🎯 Two pages: Home and About

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── Layout.tsx       # Main layout with navigation
├── pages/
│   ├── Home.tsx         # Home page
│   └── About.tsx        # About page
├── App.tsx              # Main app component with routes
├── main.tsx             # Application entry point
└── index.css            # Global styles with Tailwind directives
```

## Technologies

- [Vite](https://vite.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [React Router](https://reactrouter.com/) - Client-side routing

## License

MIT
