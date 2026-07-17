import { createFileRoute } from '@tanstack/react-router'
import { Globe } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/internal-portal')({
  head: () => ({
    meta: [
      { title: 'Internal Portal — Innovate Inc.' },
      { name: 'description', content: 'Access internal tools and resources.' },
    ],
  }),
  component: InternalPortalPage,
})

function InternalPortalPage() {
  return (
    <ComingSoon
      icon={Globe}
      title="Internal Portal"
      description="The internal portal is on its way. Soon you will be able to access company tools, policies, and quick links in one place."
    />
  )
}
