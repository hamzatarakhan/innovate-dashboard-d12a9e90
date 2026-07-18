import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, FileText, Video, FileSpreadsheet, Search, Download } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/library')({
  head: () => ({
    meta: [
      { title: 'Library — Innovate Inc.' },
      { name: 'description', content: 'Browse documents, guides, and resources.' },
    ],
  }),
  component: LibraryPage,
})

const CATEGORIES = [
  { name: 'Guides', count: 24, color: 'bg-blue-100 text-blue-700' },
  { name: 'Policies', count: 12, color: 'bg-purple-100 text-purple-700' },
  { name: 'Templates', count: 38, color: 'bg-green-100 text-green-700' },
  { name: 'Videos', count: 9, color: 'bg-orange-100 text-orange-700' },
]

const DOCS = [
  { title: 'Brand Guidelines 2026', type: 'PDF', icon: FileText, owner: 'Priya Sharma', updated: 'Jul 14', size: '4.2 MB' },
  { title: 'Onboarding Handbook', type: 'PDF', icon: FileText, owner: 'People Ops', updated: 'Jul 10', size: '1.8 MB' },
  { title: 'Q3 Financial Overview', type: 'Sheet', icon: FileSpreadsheet, owner: 'Finance', updated: 'Jul 08', size: '820 KB' },
  { title: 'Product Discovery — Intro', type: 'Video', icon: Video, owner: 'Anjali Rao', updated: 'Jul 05', size: '128 MB' },
  { title: 'Engineering Runbook', type: 'PDF', icon: FileText, owner: 'Rohan Mehta', updated: 'Jul 02', size: '3.1 MB' },
]

function LibraryPage() {
  return (
    <PageShell icon={BookOpen} title="Library" description="Documents, guides, and shared resources.">
      <div className="relative mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input placeholder="Search the library…" className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/70 border border-gray-200 text-sm focus:outline-none focus:border-blue-500" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {CATEGORIES.map((c) => (
          <div key={c.name} className="glassmorphism rounded-xl p-4 card-hover-effect">
            <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${c.color} mb-2`}>{c.name}</span>
            <p className="text-2xl font-bold text-gray-900">{c.count}</p>
            <p className="text-xs text-gray-500">documents</p>
          </div>
        ))}
      </div>

      <div className="glassmorphism rounded-xl p-6 card-hover-effect">
        <h3 className="text-xl font-bold mb-4">Recently updated</h3>
        <ul className="space-y-2">
          {DOCS.map((d) => (
            <li key={d.title} className="flex items-center gap-4 p-3 rounded-lg bg-white/60 border border-gray-200/60">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <d.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{d.title}</p>
                <p className="text-xs text-gray-500">{d.owner} · Updated {d.updated} · {d.size}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 p-2" aria-label="Download">
                <Download className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
