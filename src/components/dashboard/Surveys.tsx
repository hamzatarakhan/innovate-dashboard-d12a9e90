import { ClipboardList, CheckCircle } from 'lucide-react'

type Status = 'new' | 'in-progress' | 'completed'

interface Survey {
  id: string
  title: string
  due: string
  questions: number
  status: Status
  iconClass: string
  bgClass: string
}

const SURVEYS: Survey[] = [
  { id: 'engagement', title: 'Q3 Employee Engagement Survey', due: 'Jul 25, 2026', questions: 4, status: 'new', iconClass: 'text-blue-600', bgClass: 'bg-blue-100' },
  { id: 'remote', title: 'Remote Work Experience', due: 'Jul 22, 2026', questions: 4, status: 'in-progress', iconClass: 'text-purple-600', bgClass: 'bg-purple-100' },
  { id: 'manager', title: 'Q2 Manager Feedback', due: 'Jul 10, 2026', questions: 3, status: 'completed', iconClass: 'text-green-600', bgClass: 'bg-green-100' },
  { id: 'cafeteria', title: 'Office Cafeteria Feedback', due: 'Jul 30, 2026', questions: 3, status: 'new', iconClass: 'text-orange-600', bgClass: 'bg-orange-100' },
]

const STATUS_STYLES: Record<Status, { label: string; badge: string; action: string | null }> = {
  new: { label: 'New', badge: 'bg-blue-50 text-blue-700', action: 'Start' },
  'in-progress': { label: 'In Progress', badge: 'bg-amber-50 text-amber-700', action: 'Continue' },
  completed: { label: 'Completed', badge: 'bg-emerald-50 text-emerald-700', action: null },
}

export function Surveys() {
  return (
    <div className="lg:col-span-2 odoo-card p-5 fade-in">
      <h3 className="odoo-heading text-base mb-4">Surveys</h3>
      <div className="space-y-2.5">
        {SURVEYS.map((s) => {
          const status = STATUS_STYLES[s.status]
          return (
            <div key={s.id} className="flex items-center gap-4 p-3 odoo-tile">
              <div className={`w-10 h-10 rounded-lg ${s.bgClass} flex items-center justify-center flex-shrink-0`}>
                <ClipboardList className={`w-5 h-5 ${s.iconClass}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--odoo-ink)' }}>{s.title}</p>
                  <span className={`odoo-chip ${status.badge}`}>
                    {status.label}
                  </span>
                </div>
                <p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>
                  {s.questions} questions · Due {s.due}
                </p>
              </div>
              {status.action ? (
                <button className="odoo-btn odoo-btn-primary px-3 py-1 text-xs flex-shrink-0">
                  {status.action}
                </button>
              ) : (
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
