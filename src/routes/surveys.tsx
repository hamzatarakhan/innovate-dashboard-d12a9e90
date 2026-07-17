import { createFileRoute } from '@tanstack/react-router'
import { FileQuestion } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/surveys')({
  head: () => ({
    meta: [
      { title: 'Surveys — Innovate Inc.' },
      { name: 'description', content: 'Create and respond to team surveys.' },
    ],
  }),
  component: SurveysPage,
})

function SurveysPage() {
  return (
    <ComingSoon
      icon={FileQuestion}
      title="Surveys"
      description="Surveys and feedback forms are coming soon. You will be able to create polls, collect responses, and review results here."
    />
  )
}
