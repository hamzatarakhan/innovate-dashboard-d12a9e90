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
    <div
      className="flex items-center justify-between p-3.5 rounded-lg mb-6 fade-in border"
      style={{
        backgroundColor: '#fbf3e9',
        borderColor: 'var(--odoo-accent)',
        borderLeftWidth: '3px',
        borderLeftColor: 'var(--odoo-brand)',
        color: 'var(--odoo-ink)',
      }}
    >
      <div className="flex items-center gap-3 text-sm">
        <Megaphone className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--odoo-brand)' }} />
        <p>
          <strong>{current.label}</strong> {current.text}
        </p>
      </div>
      <button
        onClick={() => {
          if (index + 1 < NOTIFICATIONS.length) setIndex(index + 1)
          else setHidden(true)
        }}
        className="p-1 rounded-md hover:bg-black/5"
        aria-label="Dismiss"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  )
}
