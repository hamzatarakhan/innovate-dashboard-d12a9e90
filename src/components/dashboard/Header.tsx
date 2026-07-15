import { useEffect, useState } from 'react'
import { Bell } from 'lucide-react'

const USER = 'Alex'

export function Header() {
  const [greeting, setGreeting] = useState(`Good Morning, ${USER}!`)
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const h = now.getHours()
      setGreeting(
        h < 12 ? `Good Morning, ${USER}!` : h < 18 ? `Good Afternoon, ${USER}!` : `Good Evening, ${USER}!`,
      )
      setDateTime(
        now.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
    }
    update()
    const id = setInterval(update, 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">{greeting}</h2>
        <p className="text-gray-500 mt-1">{dateTime || 'Loading date and time...'}</p>
      </div>
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <div className="relative">
          <button className="p-2 rounded-full bg-white/80 hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
        </div>
        <img
          src="https://placehold.co/40x40/60A5FA/FFFFFF?text=A"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
      </div>
    </header>
  )
}
