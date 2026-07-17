import { createFileRoute } from '@tanstack/react-router'
import { Clock } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/preferences')({
  head: () => ({
    meta: [
      { title: 'My Preferences — Innovate Inc.' },
      { name: 'description', content: 'Manage your Innovate Inc. profile and notification preferences.' },
    ],
  }),
  component: PreferencesPage,
})

function PreferencesPage() {
  return (
    <ComingSoon
      icon={Clock}
      title="Coming Soon"
      description="My Preferences is under construction. You will soon be able to manage your profile, notifications, and account settings here."
    />
  )
}
