import { createFileRoute } from '@tanstack/react-router'
import { Calendar as CalendarIcon, Clock, MapPin, Plus } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/calendar')({
  head: () => ({
    meta: [
      { title: 'Calendar — Innovate Inc.' },
      { name: 'description', content: 'View company events and manage your schedule.' },
    ],
  }),
  component: CalendarPage,
})

const EVENTS = [
  { day: 'Mon', date: 20, title: 'Q3 Kickoff', time: '10:00 – 11:30', where: 'Auditorium A', tag: 'Company', color: 'bg-blue-100 text-blue-700' },
  { day: 'Tue', date: 21, title: 'Design Critique', time: '14:00 – 15:00', where: 'Zoom', tag: 'Design', color: 'bg-purple-100 text-purple-700' },
  { day: 'Wed', date: 22, title: '1:1 with Priya', time: '09:30 – 10:00', where: 'Room 3B', tag: 'Personal', color: 'bg-green-100 text-green-700' },
  { day: 'Thu', date: 23, title: 'Engineering All-Hands', time: '11:00 – 12:00', where: 'Zoom', tag: 'Engineering', color: 'bg-orange-100 text-orange-700' },
  { day: 'Fri', date: 24, title: 'Company Town Hall', time: '15:00 – 16:00', where: 'Auditorium A', tag: 'Company', color: 'bg-blue-100 text-blue-700' },
]

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

function CalendarPage() {
  return (
    <PageShell
      icon={CalendarIcon}
      title="Calendar"
      description="Your upcoming week at Innovate Inc."
      actions={
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
          <Plus className="w-4 h-4" /> New event
        </button>
      }
    >
      <div className="glassmorphism rounded-xl p-6 card-hover-effect mb-6">
        <div className="grid grid-cols-5 gap-2 text-center">
          {DAYS.map((d, i) => (
            <div key={d} className={`rounded-lg py-4 ${i === 2 ? 'bg-blue-600 text-white' : 'bg-white/60 text-gray-700'}`}>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">{d}</p>
              <p className="text-2xl font-bold mt-1">{20 + i}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glassmorphism rounded-xl p-6 card-hover-effect">
        <h3 className="text-xl font-bold mb-4">This week</h3>
        <ul className="space-y-3">
          {EVENTS.map((e) => (
            <li key={e.title} className="flex items-center gap-4 p-4 rounded-lg bg-white/60 border border-gray-200/60">
              <div className="w-14 text-center flex-shrink-0">
                <p className="text-xs font-semibold text-gray-500 uppercase">{e.day}</p>
                <p className="text-2xl font-bold text-gray-900">{e.date}</p>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900 truncate">{e.title}</p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${e.color}`}>{e.tag}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mt-1">
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {e.time}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {e.where}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
