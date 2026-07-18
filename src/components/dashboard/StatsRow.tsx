import { CheckCircle, MessageSquare, Newspaper } from 'lucide-react'

export function StatsRow() {
  return (
    <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
      <div className="odoo-card p-5 flex items-center gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50">
          <CheckCircle className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <p className="text-sm" style={{ color: 'var(--odoo-muted)' }}>Tasks Completed</p>
          <p className="text-2xl font-semibold" style={{ color: 'var(--odoo-ink)' }}>12 / 18</p>
        </div>
      </div>
      <div className="odoo-card p-5 flex items-center gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: '#e8edf0' }}>
          <MessageSquare className="w-6 h-6" style={{ color: 'var(--odoo-brand)' }} />
        </div>
        <div>
          <p className="text-sm" style={{ color: 'var(--odoo-muted)' }}>Unread Messages</p>
          <p className="text-2xl font-semibold" style={{ color: 'var(--odoo-ink)' }}>5</p>
        </div>
      </div>
      <div className="odoo-card p-5 flex items-center gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: '#fbf3e9' }}>
          <Newspaper className="w-6 h-6" style={{ color: '#b07d3f' }} />
        </div>
        <div className="min-w-0">
          <p className="text-sm" style={{ color: 'var(--odoo-muted)' }}>News of the Day</p>
          <p className="text-sm font-semibold leading-snug line-clamp-2" style={{ color: 'var(--odoo-ink)' }}>
            Innovate Inc. wins Best Workplace 2026 award
          </p>
        </div>
      </div>
    </div>
  )
}
