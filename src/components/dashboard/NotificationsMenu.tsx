import { useEffect, useState } from 'react'
import { Bell, Check, CheckCheck, Info, AlertTriangle } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { INITIAL_NOTIFICATIONS, type Notification } from '@/data/notifications'

const STORAGE_KEY = 'innovate.notifications'

export function NotificationsMenu() {
  const [items, setItems] = useState<Notification[]>(INITIAL_NOTIFICATIONS)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  const unread = items.filter((n) => !n.read).length

  const markAll = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })))
  const markOne = (id: string) =>
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="relative p-2 rounded-md bg-white border hover:bg-gray-50"
          style={{ borderColor: 'var(--odoo-line)' }}
          aria-label={`Notifications${unread ? ` (${unread} unread)` : ''}`}
        >
          <Bell className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} />
          {unread > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center">
              {unread}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h4 className="font-semibold text-sm">Notifications</h4>
          {unread > 0 && (
            <button
              onClick={markAll}
              className="text-xs font-medium hover:underline flex items-center gap-1"
              style={{ color: 'var(--odoo-brand)' }}
            >
              <CheckCheck className="w-3.5 h-3.5" /> Mark all read
            </button>
          )}
        </div>
        <ul className="max-h-96 overflow-y-auto">
          {items.map((n) => {
            const Icon =
              n.type === 'success' ? Check : n.type === 'warning' ? AlertTriangle : Info
            const iconColor =
              n.type === 'success'
                ? 'text-green-600 bg-green-100'
                : n.type === 'warning'
                  ? 'text-orange-600 bg-orange-100'
                  : 'text-blue-600 bg-blue-100'
            return (
              <li
                key={n.id}
                onClick={() => markOne(n.id)}
                className={`px-4 py-3 flex gap-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors ${
                  !n.read ? 'bg-blue-50/40' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-gray-900 truncate">{n.title}</p>
                    {!n.read && <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">{n.message}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{n.time}</p>
                </div>
              </li>
            )
          })}
          {items.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-gray-500">You're all caught up.</li>
          )}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
