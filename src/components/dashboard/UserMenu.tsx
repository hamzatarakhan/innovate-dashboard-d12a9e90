import { useNavigate } from '@tanstack/react-router'
import { Settings, LogOut, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function UserMenu() {
  const navigate = useNavigate()

  const logout = () => {
    try {
      localStorage.removeItem('innovateAuth')
    } catch {}
    navigate({ to: '/login' })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Account menu" className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <img
            src="https://placehold.co/40x40/60A5FA/FFFFFF?text=A"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Alex Johnson</span>
            <span className="text-xs text-gray-500 font-normal">alex@innovate.inc</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate({ to: '/preferences' })} className="cursor-pointer">
          <User className="w-4 h-4 mr-2" /> My Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate({ to: '/preferences' })} className="cursor-pointer">
          <Settings className="w-4 h-4 mr-2" /> My Preferences
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
