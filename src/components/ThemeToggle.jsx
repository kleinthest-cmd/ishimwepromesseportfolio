import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme/ThemeProvider'

/**
 * Accessible light/dark switch. A sliding gold thumb sits under the active icon.
 */
export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'
  const label = isLight ? 'Switch to dark mode' : 'Switch to light mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isLight}
      title={label}
      className={`relative inline-flex h-9 w-[4.5rem] shrink-0 items-center rounded-full border border-line bg-panel/80 p-1 text-fg-faint backdrop-blur transition-colors duration-300 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-1 top-1 size-7 rounded-full bg-accent shadow-sm shadow-black/25 transition-transform duration-300 ease-out ${
          isLight ? 'translate-x-0' : 'translate-x-[2.25rem]'
        }`}
      />
      <span className="relative z-10 grid w-1/2 place-items-center">
        <Sun
          className={`size-3.5 transition-colors duration-300 ${
            isLight ? 'text-on-accent' : 'text-fg-faint'
          }`}
          aria-hidden="true"
        />
      </span>
      <span className="relative z-10 grid w-1/2 place-items-center">
        <Moon
          className={`size-3.5 transition-colors duration-300 ${
            isLight ? 'text-fg-faint' : 'text-on-accent'
          }`}
          aria-hidden="true"
        />
      </span>
    </button>
  )
}
