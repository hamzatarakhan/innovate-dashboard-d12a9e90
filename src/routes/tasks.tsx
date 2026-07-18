import { createFileRoute } from '@tanstack/react-router'
import { ListTodo, Plus } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/tasks')({
  head: () => ({
    meta: [
      { title: 'Tasks — Innovate Inc.' },
      { name: 'description', content: 'Manage team tasks and project workflows.' },
    ],
  }),
  component: TasksPage,
})

type Task = { title: string; assignee: string; tag: string; tagColor: string }

const COLUMNS: { name: string; color: string; tasks: Task[] }[] = [
  {
    name: 'To do',
    color: 'bg-gray-200 text-gray-700',
    tasks: [
      { title: 'Draft the Q4 planning doc', assignee: 'AR', tag: 'Product', tagColor: 'bg-green-100 text-green-700' },
      { title: 'Audit legacy auth flow', assignee: 'RM', tag: 'Engineering', tagColor: 'bg-blue-100 text-blue-700' },
      { title: 'Refresh onboarding illustrations', assignee: 'PS', tag: 'Design', tagColor: 'bg-purple-100 text-purple-700' },
    ],
  },
  {
    name: 'In progress',
    color: 'bg-blue-100 text-blue-700',
    tasks: [
      { title: 'Ship blog details page v2', assignee: 'PS', tag: 'Design', tagColor: 'bg-purple-100 text-purple-700' },
      { title: 'Optimize dashboard queries', assignee: 'RM', tag: 'Engineering', tagColor: 'bg-blue-100 text-blue-700' },
    ],
  },
  {
    name: 'Review',
    color: 'bg-orange-100 text-orange-700',
    tasks: [
      { title: 'Benefits handbook update', assignee: 'HR', tag: 'People', tagColor: 'bg-pink-100 text-pink-700' },
    ],
  },
  {
    name: 'Done',
    color: 'bg-green-100 text-green-700',
    tasks: [
      { title: 'Launch new brand guidelines', assignee: 'PS', tag: 'Design', tagColor: 'bg-purple-100 text-purple-700' },
      { title: 'Migrate to new analytics stack', assignee: 'RM', tag: 'Engineering', tagColor: 'bg-blue-100 text-blue-700' },
    ],
  },
]

function TasksPage() {
  return (
    <PageShell
      icon={ListTodo}
      title="Tasks"
      description="Team-wide work across current projects."
      actions={
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
          <Plus className="w-4 h-4" /> New task
        </button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {COLUMNS.map((col) => (
          <div key={col.name} className="glassmorphism rounded-xl p-4 card-hover-effect">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${col.color}`}>{col.name}</span>
              <span className="text-xs text-gray-500">{col.tasks.length}</span>
            </div>
            <ul className="space-y-2">
              {col.tasks.map((t) => (
                <li key={t.title} className="p-3 rounded-lg bg-white/70 border border-gray-200/60">
                  <p className="text-sm font-semibold text-gray-900 mb-2">{t.title}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.tagColor}`}>{t.tag}</span>
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {t.assignee}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
