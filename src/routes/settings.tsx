import { createFileRoute } from '@tanstack/react-router'
import { Settings as SettingsIcon, ChevronRight, Bell, Lock, Palette, Globe, CreditCard, UserCog } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/settings')({
  head: () => ({
    meta: [
      { title: 'Settings — Innovate Inc.' },
      { name: 'description', content: 'Configure workspace settings and preferences.' },
    ],
  }),
  component: SettingsPage,
})

const GROUPS = [
  {
    name: 'Account',
    items: [
      { icon: UserCog, title: 'Profile', desc: 'Name, role, avatar, and contact details' },
      { icon: Lock, title: 'Security', desc: 'Password, 2FA, and active sessions' },
      { icon: Bell, title: 'Notifications', desc: 'Email, push, and in-app alerts' },
    ],
  },
  {
    name: 'Workspace',
    items: [
      { icon: Palette, title: 'Appearance', desc: 'Theme, density, and accessibility' },
      { icon: Globe, title: 'Language & region', desc: 'Language, time zone, and date format' },
      { icon: CreditCard, title: 'Billing', desc: 'Plan, invoices, and payment method' },
    ],
  },
]

function SettingsPage() {
  return (
    <PageShell icon={SettingsIcon} title="Settings" description="Manage your account and workspace.">
      <div className="space-y-6 max-w-3xl">
        {GROUPS.map((g) => (
          <div key={g.name} className="glassmorphism rounded-xl p-2 card-hover-effect">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 pt-3 pb-2">{g.name}</p>
            <ul>
              {g.items.map((i) => (
                <li key={i.title}>
                  <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/60 text-left">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <i.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">{i.title}</p>
                      <p className="text-xs text-gray-500">{i.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
