import { createFileRoute } from '@tanstack/react-router'
import { ListTodo } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/tasks')({
  head: () => ({
    meta: [
      { title: 'Tasks — Innovate Inc.' },
      { name: 'description', content: 'Manage team tasks and project workflows.' },
    ],
  }),
  component: TasksPage,
})

function TasksPage() {
  return (
    <ComingSoon
      icon={ListTodo}
      title="Tasks"
      description="Team task management is coming soon. You will be able to assign tasks, track progress, and manage project workflows here."
    />
  )
}
