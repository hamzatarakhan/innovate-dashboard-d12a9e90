import { Link } from '@tanstack/react-router'
import { LayoutGrid, Menu } from 'lucide-react'
import { MessagesMenu } from './MessagesMenu'
import { NotificationsMenu } from './NotificationsMenu'
import { UserMenu } from './UserMenu'

export function TopNavbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header
      className="flex items-center gap-1 px-2 sm:px-3 py-3 flex-shrink-0 text-white"
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

      {/* Apps waffle → back to dashboard */}
      <Link
        to="/"
        aria-label="Dashboard"
        className="p-2 rounded-md text-white/80 hover:bg-white/10"
      >
        <LayoutGrid className="w-5 h-5" />
      </Link>

      {/* App brand */}
      <Link to="/" className="flex items-center gap-2 pl-1 pr-2">
        <span className="font-semibold tracking-tight hidden sm:inline">Dashboard</span>
      </Link>

      {/* Systray */}
      <div className="ml-auto flex items-center gap-1 sm:gap-2 pr-1">
        <MessagesMenu variant="navbar" />
        <NotificationsMenu variant="navbar" />
        <UserMenu />
      </div>
    </header>
  )
}
