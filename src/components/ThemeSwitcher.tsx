import { Check } from 'lucide-react'
import { THEMES, useTheme, type ThemeName } from './ThemeProvider'

/** Compact swatch grid — used in the user menu and on the design system page. */
export function ThemeSwitcher({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      {THEMES.map((t) => {
        const active = theme === t.key
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => setTheme(t.key as ThemeName)}
            className={`text-left rounded-lg border p-2.5 transition-all ${
              active
                ? 'border-gray-900 bg-white shadow-sm'
                : 'border-gray-200 bg-white/70 hover:bg-white'
            }`}
            aria-pressed={active}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-1">
                {t.swatch.map((c) => (
                  <span
                    key={c}
                    className="w-4 h-4 rounded-full ring-1 ring-white"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              {active && <Check className="w-3.5 h-3.5 text-gray-900 ml-auto" />}
            </div>
            <div className="text-xs font-semibold text-gray-900">{t.label}</div>
            <div className="text-[11px] text-gray-500 leading-tight">{t.description}</div>
          </button>
        )
      })}
    </div>
  )
}
