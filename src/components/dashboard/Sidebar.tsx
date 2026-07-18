import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import {
  LayoutDashboard,
  MessageCircle,
  Calendar,
  CheckSquare,
  BookOpen,
  ListTodo,
  Globe,
  FileQuestion,
  Users,
  LayoutGrid,
  Settings,
  Palette,
  Zap,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard, enabled: true },
  { title: 'Discuss', url: '/discuss', icon: MessageCircle, enabled: false },
  { title: 'Calendar', url: '/calendar', icon: Calendar, enabled: false },
  { title: 'To-do', url: '/todo', icon: CheckSquare, enabled: false },
  { title: 'Library', url: '/library', icon: BookOpen, enabled: false },
  { title: 'Tasks', url: '/tasks', icon: ListTodo, enabled: false },
  { title: 'Internal Portal', url: '/internal-portal', icon: Globe, enabled: false },
  { title: 'Surveys', url: '/surveys', icon: FileQuestion, enabled: false },
  { title: 'Employees', url: '/employees', icon: Users, enabled: false },
  { title: 'Apps', url: '/apps', icon: LayoutGrid, enabled: false },
  { title: 'Settings', url: '/settings', icon: Settings, enabled: false },
  { title: 'Design System', url: '/design-system', icon: Palette, enabled: true },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const currentPath = useRouterState({ select: (router) => router.location.pathname })

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }, [open])

  const navLinks = (
    <nav className="space-y-0.5">
      {navItems.map((item) => {
        const isActive = currentPath === item.url

        if (!item.enabled) {
          // Looks like a normal nav item, but clicking is a no-op (no navigation).
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => {}}
              className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-left text-white/70 hover:bg-white/5 hover:text-white transition-colors"
            >
              <item.icon className="h-[18px] w-[18px] flex-shrink-0" /> {item.title}
            </button>
          )
        }

        return (
          <Link
            key={item.title}
            to={item.url}
            onClick={() => setOpen(false)}
            className={`group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-white/10 text-white'
                : 'text-white/70 hover:bg-white/5 hover:text-white'
            }`}
          >
            {isActive && (
              <span
                className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full"
                style={{ backgroundColor: 'var(--odoo-accent)' }}
              />
            )}
            <item.icon className="h-[18px] w-[18px] flex-shrink-0" /> {item.title}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="lg:hidden flex items-center gap-3 px-4 py-3 sticky top-0 z-30"
        style={{ backgroundColor: 'var(--odoo-brand)' }}
      >
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-md text-white/80 hover:bg-white/10"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="rounded-md p-1.5" style={{ backgroundColor: 'var(--odoo-accent)' }}>
            <Zap className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} />
          </div>
          <h1 className="text-lg font-semibold tracking-tight text-white">Innovate Inc.</h1>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar / drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] p-4 flex flex-col flex-shrink-0 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:z-auto lg:w-64 lg:max-w-none ${
            open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        style={{ backgroundColor: 'var(--odoo-brand)' }}
      >
        <div className="flex items-center justify-between px-1 mb-6 mt-1">
          <div className="flex items-center gap-2.5">
            <div className="rounded-md p-2" style={{ backgroundColor: 'var(--odoo-accent)' }}>
              <Zap className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-white">Innovate Inc.</h1>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="lg:hidden p-1 rounded-md text-white/80 hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1">{navLinks}</div>
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3 text-white/50">
          <div className="rounded-md bg-white/10 p-1.5">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium">Powered by Odoo 19</span>
        </div>
      </aside>
    </>
  )
}
