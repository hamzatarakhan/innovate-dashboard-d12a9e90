import { useState } from 'react'
import { Megaphone, X } from 'lucide-react'

const NOTIFICATIONS = [
  { label: 'Company Town Hall:', text: "This Friday at 3 PM. Don't miss the important updates!" },
  { label: 'New Message:', text: 'Priya Sharma sent you a message in #design-team.' },
  { label: 'Reminder:', text: 'Your timesheet for this week is due tomorrow.' },
  { label: 'Policy Update:', text: 'The remote work policy has been updated. Please review it.' },
  { label: 'Shoutout:', text: 'Rohan Mehta gave you kudos for your recent work!' },
]

export function AnnouncementBanner() {
  const [index, setIndex] = useState(0)
  const [hidden, setHidden] = useState(false)
  if (hidden) return null
  const current = NOTIFICATIONS[index]
  return (
    <div className="flex items-center justify-between bg-yellow-400/80 text-yellow-900 p-4 rounded-lg mb-8 fade-in">
      <div className="flex items-center gap-3">
        <Megaphone className="w-6 h-6" />
        <p>
          <strong>{current.label}</strong> {current.text}
        </p>
      </div>
      <button
        onClick={() => {
          if (index + 1 < NOTIFICATIONS.length) setIndex(index + 1)
          else setHidden(true)
        }}
        className="p-1 rounded-full hover:bg-yellow-500/50"
        aria-label="Dismiss"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  )
}
