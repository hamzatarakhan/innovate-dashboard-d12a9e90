import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, User, Bell, Palette, Shield } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/preferences')({
  head: () => ({
    meta: [
      { title: 'My Preferences — Innovate Inc.' },
      { name: 'description', content: 'Manage your Innovate Inc. profile and notification preferences.' },
    ],
  }),
  component: PreferencesPage,
})

function PreferencesPage() {
  const [name, setName] = useState('Alex Johnson')
  const [email, setEmail] = useState('alex@innovate.inc')
  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Preferences</h1>
        <p className="text-gray-500 mb-8">Personalize how you experience the intranet.</p>

        <div className="space-y-6">
          <Section icon={<User className="w-5 h-5" />} title="Profile" description="Your basic account details.">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
          </Section>

          <Section icon={<Bell className="w-5 h-5" />} title="Notifications" description="Choose how we reach you.">
            <ToggleRow label="Email notifications" description="Announcements and mentions." value={emailNotif} onChange={setEmailNotif} />
            <ToggleRow label="Push notifications" description="Real-time updates in your browser." value={pushNotif} onChange={setPushNotif} />
            <ToggleRow label="Weekly digest" description="A summary every Monday morning." value={weeklyDigest} onChange={setWeeklyDigest} />
          </Section>

          <Section icon={<Palette className="w-5 h-5" />} title="Appearance" description="Pick your preferred theme.">
            <div className="grid grid-cols-3 gap-3">
              {(['light', 'dark', 'system'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-4 py-3 rounded-lg border-2 capitalize font-medium text-sm transition-colors ${
                    theme === t ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Section>

          <Section icon={<Shield className="w-5 h-5" />} title="Security" description="Keep your account safe.">
            <Button variant="outline">Change password</Button>
          </Section>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="glassmorphism rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">{icon}</div>
        <div>
          <h2 className="font-bold text-lg text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function ToggleRow({
  label,
  description,
  value,
  onChange,
}: {
  label: string
  description: string
  value: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-medium text-sm text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <Switch checked={value} onCheckedChange={onChange} />
    </div>
  )
}
