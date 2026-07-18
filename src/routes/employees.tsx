import { createFileRoute } from '@tanstack/react-router'
import { Users, Search, Mail, MapPin } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/employees')({
  head: () => ({
    meta: [
      { title: 'Employees — Innovate Inc.' },
      { name: 'description', content: 'Explore the employee directory.' },
    ],
  }),
  component: EmployeesPage,
})

const PEOPLE = [
  { name: 'Priya Sharma', role: 'Head of Design', team: 'Design', location: 'Bangalore', email: 'priya@innovate.co', color: 'bg-purple-100 text-purple-700' },
  { name: 'Rohan Mehta', role: 'Staff Engineer', team: 'Engineering', location: 'Mumbai', email: 'rohan@innovate.co', color: 'bg-blue-100 text-blue-700' },
  { name: 'Anjali Rao', role: 'Director of Product', team: 'Product', location: 'Remote', email: 'anjali@innovate.co', color: 'bg-green-100 text-green-700' },
  { name: 'Kai Nakamura', role: 'Senior Designer', team: 'Design', location: 'Tokyo', email: 'kai@innovate.co', color: 'bg-pink-100 text-pink-700' },
  { name: 'Sam Okafor', role: 'CTO', team: 'Leadership', location: 'Lagos', email: 'sam@innovate.co', color: 'bg-orange-100 text-orange-700' },
  { name: 'Lena Fischer', role: 'People Partner', team: 'People', location: 'Berlin', email: 'lena@innovate.co', color: 'bg-indigo-100 text-indigo-700' },
  { name: 'Marco Rossi', role: 'Product Manager', team: 'Product', location: 'Milan', email: 'marco@innovate.co', color: 'bg-red-100 text-red-700' },
  { name: 'Zara Khan', role: 'Backend Engineer', team: 'Engineering', location: 'Karachi', email: 'zara@innovate.co', color: 'bg-yellow-100 text-yellow-700' },
]

function EmployeesPage() {
  return (
    <PageShell icon={Users} title="Employees" description={`${PEOPLE.length} people across the company`}>
      <div className="relative mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input placeholder="Search by name, role, or team…" className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/70 border border-gray-200 text-sm focus:outline-none focus:border-blue-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {PEOPLE.map((p) => (
          <div key={p.email} className="glassmorphism rounded-xl p-5 card-hover-effect">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${p.color}`}>
                {p.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 truncate">{p.name}</p>
                <p className="text-xs text-gray-500 truncate">{p.role}</p>
              </div>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <p className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-gray-400" /> {p.location} · {p.team}</p>
              <p className="inline-flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-gray-400" /> {p.email}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
