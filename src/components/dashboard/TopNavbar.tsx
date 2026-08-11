import { Link } from '@tanstack/react-router'
import { LayoutGrid, Menu } from 'lucide-react'
import { MessagesMenu } from './MessagesMenu'
import { NotificationsMenu } from './NotificationsMenu'
import { UserMenu } from './UserMenu'
import mosdLogo from '@/assets/mosd-logo.jpeg.asset.json'
import sealLogo from '@/assets/seal-of-excellence.jpeg.asset.json'

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

      {/* App brand — seals replace the "Dashboard" label */}
      <Link to="/" aria-label="Dashboard" className="flex items-center gap-2 pl-1 pr-2">
        <img
          src={sealLogo.url}
          alt="King Abdullah II Award Seal of Excellence"
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 p-1 object-contain"
          loading="lazy"
        />
        <img
          src={mosdLogo.url}
          alt="Ministry of Social Development"
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/95 p-1 object-contain"
          loading="lazy"
        />
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
