import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { AppShell } from './AppShell'
import { Header } from './Header'

interface PageShellProps {
  icon: LucideIcon
  title: string
  description: string
  actions?: ReactNode
  children: ReactNode
}

export function PageShell({ icon: Icon, title, description, actions, children }: PageShellProps) {
  return (
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8">
        <Header />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 fade-in">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-500 text-sm">{description}</p>
            </div>
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
        <div className="fade-in">{children}</div>
      </div>
    </AppShell>
  )
}
