import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Clock } from 'lucide-react'

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="glassmorphism rounded-3xl p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
          <Clock className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h1>
        <p className="text-gray-500 mb-8">
          My Preferences is under construction. You will soon be able to manage your profile, notifications, and account settings here.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Link>
      </div>
    </div>
  )
}
