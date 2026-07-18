import { createFileRoute } from '@tanstack/react-router'
import { MessageCircle, Hash, Lock, Plus, Search } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/discuss')({
  head: () => ({
    meta: [
      { title: 'Discuss — Innovate Inc.' },
      { name: 'description', content: 'Join conversations and collaborate with your team.' },
    ],
  }),
  component: DiscussPage,
})

const CHANNELS = [
  { name: 'general', private: false, unread: 3, last: 'Priya: Ship notes are up 🎉' },
  { name: 'design-team', private: false, unread: 0, last: 'Rohan: New tokens merged.' },
  { name: 'engineering', private: false, unread: 12, last: 'Anjali: p99 dropped 30%.' },
  { name: 'leadership', private: true, unread: 1, last: 'Sam: Q3 review draft.' },
  { name: 'random', private: false, unread: 0, last: 'Kai: Coffee at 3?' },
]

const THREADS = [
  { author: 'Priya Sharma', role: 'Head of Design', time: '2h', text: 'Kicked off the new branding rollout — assets are in the Library. Feedback welcome!', replies: 8, color: 'bg-purple-100 text-purple-700' },
  { author: 'Rohan Mehta', role: 'Staff Engineer', time: '4h', text: 'Query optimization notes shared in #engineering. tl;dr — 30% faster dashboards.', replies: 4, color: 'bg-blue-100 text-blue-700' },
  { author: 'Anjali Rao', role: 'Director of Product', time: '1d', text: 'Anyone else joining the Friday town hall? I have a few questions queued up.', replies: 12, color: 'bg-green-100 text-green-700' },
]

function DiscussPage() {
  return (
    <PageShell
      icon={MessageCircle}
      title="Discuss"
      description="Team channels, threads, and announcements."
      actions={
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
          <Plus className="w-4 h-4" /> New thread
        </button>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glassmorphism rounded-xl p-6 card-hover-effect">
          <div className="relative mb-4">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Search channels" className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/70 border border-gray-200 text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Channels</h3>
          <ul className="space-y-1">
            {CHANNELS.map((c) => (
              <li key={c.name} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/60 cursor-pointer">
                <div className="flex items-center gap-2 min-w-0">
                  {c.private ? <Lock className="w-4 h-4 text-gray-400" /> : <Hash className="w-4 h-4 text-gray-400" />}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{c.name}</p>
                    <p className="text-xs text-gray-500 truncate">{c.last}</p>
                  </div>
                </div>
                {c.unread > 0 && <span className="ml-2 text-xs font-bold bg-blue-600 text-white rounded-full px-2 py-0.5">{c.unread}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 glassmorphism rounded-xl p-6 card-hover-effect">
          <h3 className="text-xl font-bold mb-4">Recent threads</h3>
          <ul className="space-y-4">
            {THREADS.map((t) => (
              <li key={t.author} className="p-4 rounded-lg bg-white/60 border border-gray-200/60">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${t.color}`}>
                    {t.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role} · {t.time} ago</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">{t.text}</p>
                <p className="text-xs font-semibold text-blue-600">{t.replies} replies</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  )
}
