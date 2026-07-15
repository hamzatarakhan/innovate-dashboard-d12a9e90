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
  new: { label: 'New', badge: 'bg-blue-100 text-blue-700', action: 'Start' },
  'in-progress': { label: 'In Progress', badge: 'bg-yellow-100 text-yellow-700', action: 'Continue' },
  completed: { label: 'Completed', badge: 'bg-green-100 text-green-700', action: null },
}

export function Surveys() {
  return (
    <div className="lg:col-span-2 glassmorphism rounded-xl p-6 card-hover-effect fade-in">
      <h3 className="text-xl font-bold mb-4">Surveys</h3>
      <div className="space-y-3">
        {SURVEYS.map((s) => {
          const status = STATUS_STYLES[s.status]
          return (
            <div key={s.id} className="flex items-center gap-4 p-3 bg-white/60 rounded-lg">
              <div className={`w-10 h-10 rounded-lg ${s.bgClass} flex items-center justify-center flex-shrink-0`}>
                <ClipboardList className={`w-5 h-5 ${s.iconClass}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold truncate">{s.title}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${status.badge}`}>
                    {status.label}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {s.questions} questions · Due {s.due}
                </p>
              </div>
              {status.action ? (
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex-shrink-0">
                  {status.action}
                </button>
              ) : (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
