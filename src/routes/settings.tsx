import { createFileRoute } from '@tanstack/react-router'
import { Settings } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/settings')({
  head: () => ({
    meta: [
      { title: 'Settings — Innovate Inc.' },
      { name: 'description', content: 'Configure workspace settings and preferences.' },
    ],
  }),
  component: SettingsPage,
})

function SettingsPage() {
  return (
    <ComingSoon
      icon={Settings}
      title="Settings"
      description="Workspace settings are coming soon. You will be able to manage integrations, notifications, and account preferences here."
    />
  )
}
