import { createFileRoute } from '@tanstack/react-router'
import { CheckSquare } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/todo')({
  head: () => ({
    meta: [
      { title: 'To-do — Innovate Inc.' },
      { name: 'description', content: 'Track your personal tasks and priorities.' },
    ],
  }),
  component: TodoPage,
})

function TodoPage() {
  return (
    <ComingSoon
      icon={CheckSquare}
      title="To-do"
      description="Personal task tracking is coming soon. You will be able to create, prioritize, and check off your daily to-dos here."
    />
  )
}
