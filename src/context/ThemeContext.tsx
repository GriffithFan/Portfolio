import { useEffect, useState, ReactNode } from 'react'
import { ThemeContext, Theme } from './theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') return stored
    } catch {
      // Sin acceso a localStorage: se usa la preferencia del sistema
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // La preferencia no se guarda, pero el tema se aplica igual
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
