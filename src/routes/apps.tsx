import { createFileRoute } from '@tanstack/react-router'
import { LayoutGrid } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/apps')({
  head: () => ({
    meta: [
      { title: 'Apps — Innovate Inc.' },
      { name: 'description', content: 'Discover and launch workplace apps.' },
    ],
  }),
  component: AppsPage,
})

function AppsPage() {
  return (
    <ComingSoon
      icon={LayoutGrid}
      title="Apps"
      description="The app directory is coming soon. You will be able to discover and launch the tools your team uses every day."
    />
  )
}
