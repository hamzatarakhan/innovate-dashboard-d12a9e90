import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { BookOpen, LifeBuoy, Gift, Shield, Plane, GraduationCap } from 'lucide-react'
import { LearningLinksModal } from './LearningLinksModal'

type Card = {
  slug: string
  label: string
  Icon: typeof BookOpen
  color: string
}

const CARDS: Card[] = [
  { slug: 'hr-docs', label: 'HR Docs', Icon: BookOpen, color: 'text-blue-600' },
  { slug: 'it-helpdesk', label: 'IT Helpdesk', Icon: LifeBuoy, color: 'text-emerald-600' },
  { slug: 'benefits', label: 'Benefits', Icon: Gift, color: 'text-violet-600' },
  { slug: 'policies', label: 'Policies', Icon: Shield, color: 'text-orange-600' },
  { slug: 'travel', label: 'Travel', Icon: Plane, color: 'text-rose-600' },
]

export function QuickAccess() {
  const [learningOpen, setLearningOpen] = useState(false)

  const cellClass = 'odoo-tile flex flex-col items-center justify-center text-center p-4'

  return (
    <div className="lg:col-span-2 odoo-card p-5 fade-in">
      <h3 className="odoo-heading text-base mb-4">Quick Access</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {CARDS.map((c) => (
          <Link
            key={c.slug}
            to="/quick/$section"
            params={{ section: c.slug }}
            className={cellClass}
          >
            <c.Icon className={`w-7 h-7 ${c.color} mb-2`} />
            <span className="text-sm font-medium" style={{ color: 'var(--odoo-ink)' }}>{c.label}</span>
          </Link>
        ))}
        <button
          onClick={() => setLearningOpen(true)}
          className="odoo-tile flex flex-col items-center justify-center text-center p-4"
        >
          <GraduationCap className="w-7 h-7 text-indigo-600 mb-2" />
          <span className="text-sm font-medium" style={{ color: 'var(--odoo-ink)' }}>Learning</span>
        </button>
      </div>
      <LearningLinksModal open={learningOpen} onOpenChange={setLearningOpen} />
    </div>
  )
}
