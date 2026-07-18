import { useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export const Route = createFileRoute('/login')({
  head: () => ({
    meta: [
      { title: 'Sign in — Innovate Inc.' },
      { name: 'description', content: 'Sign in to the Innovate Inc. intranet.' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: LoginPage,
})

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please enter your email and password.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      try {
        localStorage.setItem('innovateAuth', '1')
        if (remember) localStorage.setItem('innovateEmail', email)
      } catch {}
      navigate({ to: '/' })
    }, 500)
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: 'var(--odoo-page)' }}>
      {/* Brand panel */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden text-white p-12 flex-col justify-between"
        style={{ backgroundColor: 'var(--odoo-brand)' }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)', backgroundSize: '48px 48px, 72px 72px' }} />
        <div className="relative flex items-center gap-3">
          <div className="rounded-lg p-2" style={{ backgroundColor: 'var(--odoo-accent)' }}>
            <Zap className="w-6 h-6" style={{ color: 'var(--odoo-brand)' }} />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Innovate Inc.</h1>
        </div>
        <div className="relative">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">Welcome back to the team.</h2>
          <p className="mt-4 text-white/70 text-lg max-w-md">
            Your announcements, events, blogs, and quick links — all in one focused place.
          </p>
        </div>
        <div className="relative text-xs text-white/50">© {new Date().getFullYear()} Innovate Inc. · Powered by Odoo 19</div>
      </div>

      {/* Form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="rounded-lg p-2" style={{ backgroundColor: 'var(--odoo-accent)' }}>
              <Zap className="w-6 h-6" style={{ color: 'var(--odoo-brand)' }} />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight" style={{ color: 'var(--odoo-ink)' }}>Innovate Inc.</h1>
          </div>

          <h2 className="odoo-heading text-3xl">Sign in</h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--odoo-muted)' }}>Use your work email to access the intranet.</p>

          <form onSubmit={submit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@innovate.inc"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9 h-11 focus-visible:ring-[#243742]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs font-semibold hover:underline" style={{ color: 'var(--odoo-brand)' }}>
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-9 pr-10 h-11 focus-visible:ring-[#243742]"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" checked={remember} onCheckedChange={(v) => setRemember(Boolean(v))} className="data-[state=checked]:bg-[#243742] data-[state=checked]:border-[#243742]" />
              <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                Remember me on this device
              </Label>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="odoo-btn odoo-btn-primary w-full h-11 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in…' : (
                <>
                  Sign in <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
