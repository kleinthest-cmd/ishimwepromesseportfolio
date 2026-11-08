import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'
const ThemeContext = createContext(null)

function systemTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function storedTheme() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

/**
 * Keeps the document theme in sync with the user's choice.
 * - First visit: follows the operating system preference.
 * - After a manual toggle: the choice is saved in localStorage.
 * - The inline script in index.html applies it before first paint (no flash).
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => storedTheme() ?? systemTheme())
  const [isExplicit, setIsExplicit] = useState(() => storedTheme() !== null)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f6f1' : '#060606')
  }, [theme])

  // Follow live OS changes until the visitor picks a theme manually.
  useEffect(() => {
    if (isExplicit) return undefined
    const query = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event) => setTheme(event.matches ? 'light' : 'dark')
    query.addEventListener?.('change', onChange)
    return () => query.removeEventListener?.('change', onChange)
  }, [isExplicit])

  // Keep multiple open tabs in sync.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY) return
      if (event.newValue !== 'light' && event.newValue !== 'dark') return
      setTheme(event.newValue)
      setIsExplicit(true)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* storage unavailable (private mode) — the toggle still works for this visit */
      }
      return next
    })
    setIsExplicit(true)
  }, [])

  const value = useMemo(
    () => ({ theme, isDark: theme === 'dark', toggleTheme }),
    [theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside a ThemeProvider')
  return context
}
