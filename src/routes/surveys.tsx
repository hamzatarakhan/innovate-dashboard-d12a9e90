import { createFileRoute } from '@tanstack/react-router'
import { FileQuestion, Plus, Clock, CheckCircle2 } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/surveys')({
  head: () => ({
    meta: [
      { title: 'Surveys — Innovate Inc.' },
      { name: 'description', content: 'Create and respond to team surveys.' },
    ],
  }),
  component: SurveysPage,
})

const OPEN = [
  { title: 'Q3 Engagement Pulse', due: 'Closes Jul 25', responses: 84, total: 120, tag: 'Company' },
  { title: 'Design Tools Feedback', due: 'Closes Jul 22', responses: 12, total: 30, tag: 'Design' },
  { title: 'Return-to-Office Preferences', due: 'Closes Jul 30', responses: 41, total: 120, tag: 'People' },
]

const CLOSED = [
  { title: 'Onboarding Experience — H1', responses: 118, total: 120, closed: 'Jun 30' },
  { title: 'Benefits Satisfaction 2026', responses: 104, total: 120, closed: 'Jun 15' },
]

function SurveysPage() {
  return (
    <PageShell
      icon={FileQuestion}
      title="Surveys"
      description="Share feedback and see what your team is saying."
      actions={
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
          <Plus className="w-4 h-4" /> New survey
        </button>
      }
    >
      <div className="glassmorphism rounded-xl p-6 card-hover-effect mb-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" /> Open surveys
        </h3>
        <ul className="space-y-3">
          {OPEN.map((s) => {
            const pct = Math.round((s.responses / s.total) * 100)
            return (
              <li key={s.title} className="p-4 rounded-lg bg-white/60 border border-gray-200/60">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">{s.title}</p>
                    <p className="text-xs text-gray-500">{s.tag} · {s.due}</p>
                  </div>
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">Take survey</button>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">{s.responses} of {s.total} responses ({pct}%)</p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="glassmorphism rounded-xl p-6 card-hover-effect">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-600" /> Recently closed
        </h3>
        <ul className="space-y-2">
          {CLOSED.map((s) => (
            <li key={s.title} className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-gray-200/60">
              <div>
                <p className="font-semibold text-gray-900">{s.title}</p>
                <p className="text-xs text-gray-500">Closed {s.closed} · {s.responses}/{s.total} responses</p>
              </div>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View results</button>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
