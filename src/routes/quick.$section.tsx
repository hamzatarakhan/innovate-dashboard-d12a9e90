import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Sparkles } from 'lucide-react'

const TITLES: Record<string, { title: string; description: string }> = {
  'hr-docs': { title: 'HR Docs', description: 'Handbooks, policies, and forms from People Ops.' },
  'it-helpdesk': { title: 'IT Helpdesk', description: 'Open a ticket or browse how-to guides.' },
  benefits: { title: 'Benefits', description: 'Health, wellness, and financial benefits.' },
  policies: { title: 'Policies', description: 'Company policies and compliance information.' },
  travel: { title: 'Travel', description: 'Book, expense, and manage business travel.' },
}

export const Route = createFileRoute('/quick/$section')({
  head: ({ params }) => {
    const meta = TITLES[params.section] ?? { title: params.section, description: 'Innovate Inc. quick access.' }
    return {
      meta: [
        { title: `${meta.title} — Innovate Inc.` },
        { name: 'description', content: meta.description },
      ],
    }
  },
  component: QuickPage,
})

function QuickPage() {
  const { section } = Route.useParams()
  const meta = TITLES[section] ?? { title: section, description: 'Coming soon.' }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>
        <div className="glassmorphism rounded-2xl p-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{meta.title}</h1>
          <p className="text-gray-600 mt-2">{meta.description}</p>
          <p className="text-sm text-gray-400 mt-6">This page is a placeholder — content coming soon.</p>
        </div>
      </div>
    </div>
  )
}
