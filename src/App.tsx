import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return JSON.parse(saved)
    }
    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true
    }
    // Default to dark mode
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
    } catch (e) {
      console.error('Failed to save dark mode preference:', e)
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev
      console.log('Toggling dark mode from', prev, 'to', newMode)
      
      // Immediately update DOM
      const root = document.documentElement
      if (newMode) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      
      return newMode
    })
  }

  return (
    <Routes>
      <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
