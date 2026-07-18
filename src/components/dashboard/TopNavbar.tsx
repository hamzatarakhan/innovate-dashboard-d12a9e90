import { Link } from '@tanstack/react-router'
import { LayoutGrid, Menu } from 'lucide-react'
import { MessagesMenu } from './MessagesMenu'
import { NotificationsMenu } from './NotificationsMenu'
import { UserMenu } from './UserMenu'

// App-level menu items shown in the dark top bar (mirrors the Odoo navbar).
// Only "Dashboard" navigates; the others are present but inert (no-op), like
// the gated sidebar items.
const TOP_MENU = [
  { label: 'Dashboard', to: '/' as const, enabled: true },
  { label: 'Useful Links', enabled: false },
  { label: 'SMS Logs', enabled: false },
]

export function TopNavbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header
      className="flex items-center gap-1 px-2 sm:px-3 h-12 flex-shrink-0 text-white"
      style={{ backgroundColor: 'var(--odoo-brand)' }}
    >
      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        aria-label="Open menu"
        className="lg:hidden p-2 rounded-md text-white/80 hover:bg-white/10"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Apps waffle */}
      <button
        type="button"
        onClick={() => {}}
        aria-label="Apps"
        className="p-2 rounded-md text-white/80 hover:bg-white/10"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>

      {/* App brand + name */}
      <Link to="/" className="flex items-center gap-2 pl-1 pr-2">
        <span className="font-semibold tracking-tight hidden sm:inline">Dashboard</span>
      </Link>

      {/* App menu items */}
      <nav className="hidden md:flex items-center gap-0.5">
        {TOP_MENU.map((m) =>
          m.enabled && m.to ? (
            <Link
              key={m.label}
              to={m.to}
              activeOptions={{ exact: true }}
              className="px-3 py-1.5 rounded-md text-sm transition-colors"
              activeProps={{ className: 'bg-white/10 text-white' }}
              inactiveProps={{ className: 'text-white/75 hover:bg-white/10 hover:text-white' }}
            >
              {m.label}
            </Link>
          ) : (
            <button
              key={m.label}
              type="button"
              onClick={() => {}}
              className="px-3 py-1.5 rounded-md text-sm text-white/75 hover:bg-white/10 hover:text-white"
            >
              {m.label}
            </button>
          ),
        )}
      </nav>

      {/* Systray */}
      <div className="ml-auto flex items-center gap-1 sm:gap-2 pr-1">
        <MessagesMenu variant="navbar" />
        <NotificationsMenu variant="navbar" />
        <UserMenu />
      </div>
    </header>
  )
}
