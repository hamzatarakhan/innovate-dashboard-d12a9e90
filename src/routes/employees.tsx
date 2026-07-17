import { createFileRoute } from '@tanstack/react-router'
import { Users } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/employees')({
  head: () => ({
    meta: [
      { title: 'Employees — Innovate Inc.' },
      { name: 'description', content: 'Explore the employee directory.' },
    ],
  }),
  component: EmployeesPage,
})

function EmployeesPage() {
  return (
    <ComingSoon
      icon={Users}
      title="Employees"
      description="The employee directory is under construction. Soon you will be able to browse team profiles, roles, and contact information."
    />
  )
}
