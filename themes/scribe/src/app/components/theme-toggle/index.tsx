import { cva } from 'class-variance-authority'
import { Monitor, Moon, Sun } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'

const themeToggleVariants = cva(
  'cursor-pointer rounded-full p-1.5 transition-all duration-200 *:size-4',
  {
    variants: {
      active: {
        true: 'bg-primary text-primary-foreground shadow-sm',
        false:
          'text-muted-foreground hover:bg-primary/10 hover:text-foreground',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

type Theme = 'system' | 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    return savedTheme || 'system'
  })

  useEffect(() => {
    const applyTheme = () => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.style.setProperty('color-scheme', 'dark')
      } else if (theme === 'light') {
        document.documentElement.classList.remove('dark')
        document.documentElement.style.setProperty('color-scheme', 'light')
      } else {
        const shouldBeDark = window.matchMedia(
          '(prefers-color-scheme: dark)',
        ).matches
        if (shouldBeDark) {
          document.documentElement.classList.add('dark')
          document.documentElement.style.setProperty('color-scheme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          document.documentElement.style.setProperty('color-scheme', 'light')
        }
      }
    }

    applyTheme()

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => applyTheme()
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const setThemeAndSave = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className='relative z-0 inline-grid grid-cols-3 gap-0.5 rounded-full bg-muted p-0.75'>
      <button
        onClick={() => setThemeAndSave('system')}
        aria-label='系统主题'
        className={themeToggleVariants({ active: theme === 'system' })}
        type='button'
      >
        <Monitor className='h-5 w-5' stroke-width={1} />
      </button>
      <button
        onClick={() => setThemeAndSave('light')}
        aria-label='浅色主题'
        className={themeToggleVariants({ active: theme === 'light' })}
        type='button'
      >
        <Sun className='h-5 w-5' stroke-width={1} />
      </button>
      <button
        onClick={() => setThemeAndSave('dark')}
        aria-label='深色主题'
        className={themeToggleVariants({ active: theme === 'dark' })}
        type='button'
      >
        <Moon className='h-5 w-5' stroke-width={1} />
      </button>
    </div>
  )
}
