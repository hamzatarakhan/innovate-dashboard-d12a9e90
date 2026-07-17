import { createFileRoute } from '@tanstack/react-router'
import { Calendar } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/calendar')({
  head: () => ({
    meta: [
      { title: 'Calendar — Innovate Inc.' },
      { name: 'description', content: 'View company events and manage your schedule.' },
    ],
  }),
  component: CalendarPage,
})

function CalendarPage() {
  return (
    <ComingSoon
      icon={Calendar}
      title="Calendar"
      description="A shared team calendar is on the way. Soon you will be able to see company events, meetings, and deadlines in one place."
    />
  )
}
