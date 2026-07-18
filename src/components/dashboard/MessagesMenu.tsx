import { MessageSquare } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MESSAGES } from '@/data/messages'

export function MessagesMenu() {
  const unread = MESSAGES.filter((m) => m.unread).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="relative p-2 rounded-md bg-white border hover:bg-gray-50"
          style={{ borderColor: 'var(--odoo-line)' }}
          aria-label={`Messages${unread ? ` (${unread} unread)` : ''}`}
        >
          <MessageSquare className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} />
          {unread > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center" style={{ backgroundColor: 'var(--odoo-brand)' }}>
              {unread}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h4 className="font-semibold text-sm">Messages</h4>
          <span className="text-xs text-gray-500">{unread} unread</span>
        </div>
        <ul className="max-h-96 overflow-y-auto">
          {MESSAGES.map((m) => (
            <li
              key={m.id}
              className={`px-4 py-3 flex gap-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors ${
                m.unread ? 'bg-blue-50/40' : ''
              }`}
            >
              <img src={m.avatar} alt={m.from} className="w-9 h-9 rounded-full flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-gray-900 truncate">{m.from}</p>
                  <span className="text-[11px] text-gray-400 flex-shrink-0">{m.time}</span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5 truncate">{m.preview}</p>
              </div>
              {m.unread && <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />}
            </li>
          ))}
        </ul>
        <div className="px-4 py-2.5 border-t text-center">
          <button className="text-xs font-semibold hover:underline" style={{ color: 'var(--odoo-brand)' }}>
            View all messages
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
