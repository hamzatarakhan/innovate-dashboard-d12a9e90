import { useEffect, useState } from 'react'
import { MessagesMenu } from './MessagesMenu'
import { NotificationsMenu } from './NotificationsMenu'
import { UserMenu } from './UserMenu'

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
      <div className="flex items-center gap-3 mt-4 sm:mt-0">
        <MessagesMenu />
        <NotificationsMenu />
        <UserMenu />
      </div>
    </header>
  )
}
