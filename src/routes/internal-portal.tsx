import { createFileRoute } from '@tanstack/react-router'
import { Globe, ExternalLink, BookOpen, LifeBuoy, Gift, Shield, Plane, Wallet, Users, Bug } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/internal-portal')({
  head: () => ({
    meta: [
      { title: 'Internal Portal — Innovate Inc.' },
      { name: 'description', content: 'Access internal tools and resources.' },
    ],
  }),
  component: InternalPortalPage,
})

const LINKS = [
  { name: 'HR Docs', desc: 'Handbook, forms, policies', icon: BookOpen, color: 'text-blue-600 bg-blue-100/60' },
  { name: 'IT Helpdesk', desc: 'Open a ticket, browse guides', icon: LifeBuoy, color: 'text-green-600 bg-green-100/60' },
  { name: 'Benefits', desc: 'Health, wellness, retirement', icon: Gift, color: 'text-purple-600 bg-purple-100/60' },
  { name: 'Policies', desc: 'Compliance and code of conduct', icon: Shield, color: 'text-orange-600 bg-orange-100/60' },
  { name: 'Travel', desc: 'Book and expense trips', icon: Plane, color: 'text-red-600 bg-red-100/60' },
  { name: 'Expenses', desc: 'Submit and track reimbursements', icon: Wallet, color: 'text-indigo-600 bg-indigo-100/60' },
  { name: 'People Directory', desc: 'Find colleagues and teams', icon: Users, color: 'text-pink-600 bg-pink-100/60' },
  { name: 'Report a Bug', desc: 'Something broken? Let us know', icon: Bug, color: 'text-yellow-600 bg-yellow-100/60' },
]

function InternalPortalPage() {
  return (
    <PageShell icon={Globe} title="Internal Portal" description="Every tool and resource in one place.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {LINKS.map((l) => (
          <a
            key={l.name}
            href="#"
            className="glassmorphism rounded-xl p-5 card-hover-effect flex flex-col gap-3"
          >
            <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${l.color}`}>
              <l.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 flex items-center gap-1.5">
                {l.name}
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{l.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  )
}
