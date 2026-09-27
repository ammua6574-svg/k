import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-navy-100 bg-white text-navy-900 shadow-sm transition-all duration-300 hover:border-orange-200 hover:text-orange-600 dark:border-white/10 dark:bg-white/5 dark:text-navy-100 dark:hover:border-orange-400/50 dark:hover:text-orange-400"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  )
}