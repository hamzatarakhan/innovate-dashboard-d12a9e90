import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Settings, LogOut, Check, MinusCircle, Circle, Palette } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

type Status = 'online' | 'away' | 'dnd' | 'offline'

const STATUSES: {
  key: Status
  label: string
  dotClass: string
  Icon: React.ComponentType<{ className?: string }>
  hint?: string
}[] = [
  { key: 'online', label: 'Online', dotClass: 'bg-green-500', Icon: (p) => <span className={`w-2.5 h-2.5 rounded-full bg-green-500 ${p.className ?? ''}`} /> },
  { key: 'away', label: 'Away', dotClass: 'bg-yellow-400', Icon: (p) => <span className={`w-2.5 h-2.5 rounded-full bg-yellow-400 ${p.className ?? ''}`} /> },
  { key: 'dnd', label: 'Do Not Disturb', dotClass: 'bg-red-500', Icon: (p) => <MinusCircle className={`w-3.5 h-3.5 text-red-500 ${p.className ?? ''}`} />, hint: 'You will not receive any notifications' },
  { key: 'offline', label: 'Offline', dotClass: 'bg-gray-400', Icon: (p) => <Circle className={`w-3.5 h-3.5 text-gray-400 ${p.className ?? ''}`} /> },
]

export function UserMenu() {
  const navigate = useNavigate()
  const [status, setStatus] = useState<Status>('online')

  useEffect(() => {
    try {
      const s = localStorage.getItem('userStatus') as Status | null
      if (s) setStatus(s)
    } catch {}
  }, [])

  const changeStatus = (s: Status) => {
    setStatus(s)
    try {
      localStorage.setItem('userStatus', s)
    } catch {}
  }

  const logout = () => {
    try {
      localStorage.removeItem('innovateAuth')
    } catch {}
    navigate({ to: '/login' })
  }

  const current = STATUSES.find((s) => s.key === status)!

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Account menu" className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <img
            src="https://placehold.co/40x40/60A5FA/FFFFFF?text=A"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
          <span
            className={`absolute bottom-0 right-0 block w-3 h-3 rounded-full ring-2 ring-white ${current.dotClass}`}
            aria-label={`Status: ${current.label}`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <span className={`w-2.5 h-2.5 rounded-full mr-2 ${current.dotClass}`} />
            {current.label}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-64">
              {STATUSES.map((s) => (
                <DropdownMenuItem
                  key={s.key}
                  onClick={() => changeStatus(s.key)}
                  className="cursor-pointer flex items-start gap-2 py-2"
                >
                  <Check className={`w-4 h-4 mt-0.5 ${status === s.key ? 'text-blue-600' : 'text-transparent'}`} />
                  <span className={`w-2.5 h-2.5 rounded-full mt-1.5 ${s.dotClass}`} />
                  <div className="flex flex-col">
                    <span className="text-sm">{s.label}</span>
                    {s.hint && <span className="text-xs text-gray-500">{s.hint}</span>}
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate({ to: '/preferences' })} className="cursor-pointer">
          <Settings className="w-4 h-4 mr-2" /> My Preferences
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout} className="cursor-pointer">
          <LogOut className="w-4 h-4 mr-2" /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
