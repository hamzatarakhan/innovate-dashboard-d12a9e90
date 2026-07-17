import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { BookOpen, LifeBuoy, Gift, Shield, Plane, GraduationCap } from 'lucide-react'
import { LearningLinksModal } from './LearningLinksModal'

type Card = {
  slug: string
  label: string
  Icon: typeof BookOpen
  color: string
  text: string
  bg: string
  hover: string
}

const CARDS: Card[] = [
  { slug: 'hr-docs', label: 'HR Docs', Icon: BookOpen, color: 'text-blue-600', text: 'text-blue-800', bg: 'bg-blue-100/50', hover: 'hover:bg-blue-200/70' },
  { slug: 'it-helpdesk', label: 'IT Helpdesk', Icon: LifeBuoy, color: 'text-green-600', text: 'text-green-800', bg: 'bg-green-100/50', hover: 'hover:bg-green-200/70' },
  { slug: 'benefits', label: 'Benefits', Icon: Gift, color: 'text-purple-600', text: 'text-purple-800', bg: 'bg-purple-100/50', hover: 'hover:bg-purple-200/70' },
  { slug: 'policies', label: 'Policies', Icon: Shield, color: 'text-orange-600', text: 'text-orange-800', bg: 'bg-orange-100/50', hover: 'hover:bg-orange-200/70' },
  { slug: 'travel', label: 'Travel', Icon: Plane, color: 'text-red-600', text: 'text-red-800', bg: 'bg-red-100/50', hover: 'hover:bg-red-200/70' },
]

export function QuickAccess() {
  const [learningOpen, setLearningOpen] = useState(false)

  const cellClass = (c: Card) =>
    `flex flex-col items-center justify-center text-center p-4 ${c.bg} ${c.hover} rounded-lg transition-colors`

  return (
    <div className="lg:col-span-2 glassmorphism rounded-xl p-6 card-hover-effect fade-in">
      <h3 className="text-xl font-bold mb-4">Quick Access</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {CARDS.map((c) => (
          <Link
            key={c.slug}
            to="/quick/$section"
            params={{ section: c.slug }}
            className={cellClass(c)}
          >
            <c.Icon className={`w-8 h-8 ${c.color} mb-2`} />
            <span className={`text-sm font-medium ${c.text}`}>{c.label}</span>
          </Link>
        ))}
        <button
          onClick={() => setLearningOpen(true)}
          className="flex flex-col items-center justify-center text-center p-4 bg-indigo-100/50 hover:bg-indigo-200/70 rounded-lg transition-colors"
        >
          <GraduationCap className="w-8 h-8 text-indigo-600 mb-2" />
          <span className="text-sm font-medium text-indigo-800">Learning</span>
        </button>
      </div>
      <LearningLinksModal open={learningOpen} onOpenChange={setLearningOpen} />
    </div>
  )
}
