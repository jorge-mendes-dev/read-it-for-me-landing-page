import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/read it logo.png'

interface LayoutProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Layout({ darkMode, toggleDarkMode }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-soft dark:shadow-medium border-b border-slate-200/50 dark:border-slate-700/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Read It For Me Logo" className="h-10 w-10" />
                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Read It For Me</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <button
                onClick={toggleDarkMode}
                className="group relative p-2.5 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 hover:from-slate-200 hover:to-slate-300 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 border border-slate-300/60 dark:border-slate-600/60 shadow-soft hover:shadow-medium hover:scale-110 active:scale-95"
                aria-label="Toggle dark mode"
                type="button"
              >
                <div className="relative w-5 h-5">
                  {darkMode ? (
                    <svg className="absolute inset-0 w-5 h-5 text-yellow-400 animate-in spin-in-180 duration-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="absolute inset-0 w-5 h-5 text-slate-700 dark:text-slate-300 animate-in spin-in-180 duration-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-12 mt-24 border-t border-slate-700/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300 mb-2">© 2026 Read It For Me. All rights reserved.</p>
            <p className="text-gray-400 text-sm">
              Developed by{' '}
              <a 
                href="https://jorgemendes.com.br/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Jorge Mendes
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
