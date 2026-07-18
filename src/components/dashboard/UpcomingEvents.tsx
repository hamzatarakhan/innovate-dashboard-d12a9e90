import { useState } from 'react'
import { Briefcase, Heart, Figma, X } from 'lucide-react'

export function UpcomingEvents() {
  const [rsvpFor, setRsvpFor] = useState<string | null>(null)
  return (
    <div className="lg:col-span-2 odoo-card p-5 fade-in">
      <h3 className="odoo-heading text-base mb-4">Upcoming Events</h3>
      <div className="space-y-2.5">
        <div className="flex items-center gap-4 odoo-tile p-3">
          <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold" style={{ color: 'var(--odoo-ink)' }}>Project Phoenix Kick-off</p>
            <p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>10:00 AM</p>
          </div>
          <button
            onClick={() => setRsvpFor('Project Phoenix Kick-off')}
            className="odoo-btn odoo-btn-secondary px-3 py-1 text-xs"
          >
            RSVP
          </button>
        </div>

        <div className="flex items-center gap-4 odoo-tile p-3">
          <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold" style={{ color: 'var(--odoo-ink)' }}>Yoga & Mindfulness Session</p>
            <p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>12:30 PM</p>
          </div>
          <button
            onClick={() => setRsvpFor('Yoga & Mindfulness Session')}
            className="odoo-btn odoo-btn-secondary px-3 py-1 text-xs"
          >
            RSVP
          </button>
        </div>

        <div className="flex items-center gap-4 odoo-tile p-3">
          <div className="w-11 h-11 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
            <Figma className="w-5 h-5 text-violet-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold" style={{ color: 'var(--odoo-ink)' }}>Q3 Design Review</p>
            <p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>2:00 PM</p>
          </div>
          <button
            onClick={() => setRsvpFor('Q3 Design Review')}
            className="odoo-btn odoo-btn-secondary px-3 py-1 text-xs"
          >
            RSVP
          </button>
        </div>
      </div>

      {rsvpFor && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setRsvpFor(null)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md m-4 border shadow-lg"
            style={{ borderColor: 'var(--odoo-line)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h3 className="odoo-heading text-lg">RSVP for {rsvpFor}</h3>
              <button onClick={() => setRsvpFor(null)} className="p-1 rounded-md hover:bg-gray-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-3 text-sm" style={{ color: 'var(--odoo-muted)' }}>
              You'll be added to the guest list for "{rsvpFor}".
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setRsvpFor(null)}
                className="odoo-btn odoo-btn-ghost px-4 py-2 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => setRsvpFor(null)}
                className="odoo-btn odoo-btn-primary px-4 py-2 text-sm"
              >
                Confirm RSVP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
