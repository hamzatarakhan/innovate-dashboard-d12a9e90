import { createFileRoute } from '@tanstack/react-router'
import { MessageCircle } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/discuss')({
  head: () => ({
    meta: [
      { title: 'Discuss — Innovate Inc.' },
      { name: 'description', content: 'Join conversations and collaborate with your team.' },
    ],
  }),
  component: DiscussPage,
})

function DiscussPage() {
  return (
    <ComingSoon
      icon={MessageCircle}
      title="Discuss"
      description="Team discussions and collaboration channels are coming soon. You will be able to start threads, mention colleagues, and share updates here."
    />
  )
}
