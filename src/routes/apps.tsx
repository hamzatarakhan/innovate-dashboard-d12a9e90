import { createFileRoute } from '@tanstack/react-router'
import { LayoutGrid, ExternalLink, Search } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/apps')({
  head: () => ({
    meta: [
      { title: 'Apps — Innovate Inc.' },
      { name: 'description', content: 'Discover and launch workplace apps.' },
    ],
  }),
  component: AppsPage,
})

const APPS = [
  { name: 'Slack', desc: 'Team messaging', category: 'Communication', color: 'bg-purple-100 text-purple-700', initial: 'S' },
  { name: 'Google Workspace', desc: 'Docs, Sheets, Drive', category: 'Productivity', color: 'bg-blue-100 text-blue-700', initial: 'G' },
  { name: 'Figma', desc: 'Design & prototyping', category: 'Design', color: 'bg-pink-100 text-pink-700', initial: 'F' },
  { name: 'GitHub', desc: 'Source code and reviews', category: 'Engineering', color: 'bg-gray-200 text-gray-700', initial: 'G' },
  { name: 'Linear', desc: 'Issue and project tracking', category: 'Engineering', color: 'bg-indigo-100 text-indigo-700', initial: 'L' },
  { name: 'Notion', desc: 'Docs and wikis', category: 'Productivity', color: 'bg-gray-100 text-gray-700', initial: 'N' },
  { name: 'Zoom', desc: 'Video meetings', category: 'Communication', color: 'bg-blue-100 text-blue-700', initial: 'Z' },
  { name: 'Greenhouse', desc: 'Hiring & recruiting', category: 'People', color: 'bg-green-100 text-green-700', initial: 'G' },
  { name: 'Expensify', desc: 'Expenses & reimbursements', category: 'Finance', color: 'bg-orange-100 text-orange-700', initial: 'E' },
]

function AppsPage() {
  return (
    <PageShell icon={LayoutGrid} title="Apps" description="Launch the tools your team uses every day.">
      <div className="relative mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input placeholder="Search apps…" className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/70 border border-gray-200 text-sm focus:outline-none focus:border-blue-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {APPS.map((a) => (
          <a key={a.name} href="#" className="glassmorphism rounded-xl p-5 card-hover-effect flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0 ${a.color}`}>
              {a.initial}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 flex items-center gap-1.5">
                {a.name}
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </p>
              <p className="text-xs text-gray-500 truncate">{a.desc}</p>
              <p className="text-xs text-gray-400 mt-0.5">{a.category}</p>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  )
}
