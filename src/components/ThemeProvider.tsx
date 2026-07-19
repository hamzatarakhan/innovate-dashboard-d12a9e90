import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type ThemeName = 'aurora' | 'ember' | 'graphite'

export const THEMES: { key: ThemeName; label: string; description: string; swatch: string[] }[] = [
  {
    key: 'aurora',
    label: 'Aurora',
    description: 'Default — cool blue, purple and pink.',
    swatch: ['#dbeafe', '#e9d5ff', '#fbcfe8', '#2563eb'],
  },
  {
    key: 'ember',
    label: 'Ember',
    description: 'Warm amber, rose and orange.',
    swatch: ['#ffedd5', '#fecdd3', '#fed7aa', '#ea580c'],
  },
  {
    key: 'graphite',
    label: 'Heritage',
    description: 'Deep maroon with gold and cream.',
    swatch: ['#f7f2ea', '#c9a24a', '#8a1a0a', '#6d0b00'],
  },
]


const STORAGE_KEY = 'dashboard-theme'
const DEFAULT: ThemeName = 'aurora'

type Ctx = { theme: ThemeName; setTheme: (t: ThemeName) => void }
const ThemeContext = createContext<Ctx>({ theme: DEFAULT, setTheme: () => {} })

function applyTheme(t: ThemeName) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', t)
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null
      const next: ThemeName =
        stored === 'ember' || stored === 'aurora' || stored === 'graphite' ? stored : DEFAULT
      setThemeState(next)
      applyTheme(next)
    } catch {
      applyTheme(DEFAULT)
    }

  }, [])

  const setTheme = (t: ThemeName) => {
    setThemeState(t)
    applyTheme(t)
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch {}
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
