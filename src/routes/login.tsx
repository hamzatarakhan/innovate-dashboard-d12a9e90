import { useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

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
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Brand panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-12 flex-col justify-between">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)', backgroundSize: '48px 48px, 72px 72px' }} />
        <div className="relative flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur p-2 rounded-lg">
            <Zap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold">Innovate Inc.</h1>
        </div>
        <div className="relative">
          <h2 className="text-4xl font-bold leading-tight">Welcome back to the team.</h2>
          <p className="mt-4 text-blue-100 text-lg max-w-md">
            Your announcements, events, blogs, and quick links — all in one focused place.
          </p>
          <div className="mt-10 flex items-center gap-2 text-sm text-blue-100">
            <div className="flex -space-x-2">
              <img src="https://placehold.co/32x32/A78BFA/FFFFFF?text=P" className="w-8 h-8 rounded-full border-2 border-indigo-600" alt="" />
              <img src="https://placehold.co/32x32/60A5FA/FFFFFF?text=R" className="w-8 h-8 rounded-full border-2 border-indigo-600" alt="" />
              <img src="https://placehold.co/32x32/34D399/FFFFFF?text=A" className="w-8 h-8 rounded-full border-2 border-indigo-600" alt="" />
            </div>
            <span>Trusted by 2,400+ teammates worldwide.</span>
          </div>
        </div>
        <div className="relative text-xs text-blue-200">© {new Date().getFullYear()} Innovate Inc.</div>
      </div>

      {/* Form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Innovate Inc.</h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>
          <p className="text-gray-500 mt-2">Use your work email to access the intranet.</p>

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
                  className="pl-9 h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
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
                  className="pl-9 pr-10 h-11"
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
              <Checkbox id="remember" checked={remember} onCheckedChange={(v) => setRemember(Boolean(v))} />
              <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                Remember me on this device
              </Label>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <Button type="submit" disabled={loading} className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-base">
              {loading ? 'Signing in…' : (
                <>
                  Sign in <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
