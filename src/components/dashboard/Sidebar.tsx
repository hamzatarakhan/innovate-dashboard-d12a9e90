import { useEffect } from 'react'
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
  X,
} from 'lucide-react'

// Colored app icons on a dark navy sidebar — mirrors the Odoo app menu.
const navItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard, color: 'text-white', enabled: true },
  { title: 'Discuss', url: '/discuss', icon: MessageCircle, color: 'text-orange-400', enabled: false },
  { title: 'Calendar', url: '/calendar', icon: Calendar, color: 'text-rose-400', enabled: false },
  { title: 'To-do', url: '/todo', icon: CheckSquare, color: 'text-teal-300', enabled: false },
  { title: 'Library', url: '/library', icon: BookOpen, color: 'text-blue-400', enabled: false },
  { title: 'Tasks', url: '/tasks', icon: ListTodo, color: 'text-cyan-300', enabled: false },
  { title: 'Internal Portal', url: '/internal-portal', icon: Globe, color: 'text-emerald-300', enabled: false },
  { title: 'Surveys', url: '/surveys', icon: FileQuestion, color: 'text-sky-400', enabled: false },
  { title: 'Employees', url: '/employees', icon: Users, color: 'text-violet-300', enabled: false },
  { title: 'Apps', url: '/apps', icon: LayoutGrid, color: 'text-indigo-300', enabled: false },
  { title: 'Settings', url: '/settings', icon: Settings, color: 'text-slate-300', enabled: false },
  { title: 'Design System', url: '/design-system', icon: Palette, color: 'text-amber-300', enabled: true },
]

const ITEM_BASE =
  'group relative flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors'

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const currentPath = useRouterState({ select: (router) => router.location.pathname })

  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }, [open])

  const nav = (
    <nav className="space-y-0.5">
      {navItems.map((item) => {
        const isActive = currentPath === item.url
        const Icon = item.icon
        const inner = (
          <>
            {isActive && (
              <span
                className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full"
                style={{ backgroundColor: 'var(--odoo-accent)' }}
              />
            )}
            <Icon className={`h-[18px] w-[18px] flex-shrink-0 ${item.color}`} />
            <span>{item.title}</span>
          </>
        )

        if (!item.enabled) {
          // Looks like a normal nav item, but clicking is a no-op (no navigation).
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => {}}
              className={`${ITEM_BASE} text-left text-white/75 hover:bg-white/5 hover:text-white`}
            >
              {inner}
            </button>
          )
        }

        return (
          <Link
            key={item.title}
            to={item.url}
            onClick={onClose}
            className={`${ITEM_BASE} ${
              isActive
                ? 'bg-white/10 text-white'
                : 'text-white/75 hover:bg-white/5 hover:text-white'
            }`}
          >
            {inner}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Backdrop (mobile) */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar / drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] p-3 flex flex-col flex-shrink-0 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:z-auto lg:w-60 lg:max-w-none ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{ backgroundColor: 'var(--odoo-brand)' }}
      >
        <div className="lg:hidden flex justify-end mb-1">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1 rounded-md text-white/70 hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1">{nav}</div>
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center">
          <span className="text-[11px] font-medium text-white/40">Powered by Odoo 19</span>
        </div>
      </aside>
    </>
  )
}
