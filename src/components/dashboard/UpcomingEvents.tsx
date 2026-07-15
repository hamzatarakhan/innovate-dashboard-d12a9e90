import { useState } from 'react'
import { Briefcase, Heart, Figma, X } from 'lucide-react'

export function UpcomingEvents() {
  const [rsvpFor, setRsvpFor] = useState<string | null>(null)
  return (
    <div className="lg:col-span-2 glassmorphism rounded-xl p-6 card-hover-effect fade-in">
      <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Project Phoenix Kick-off</p>
            <p className="text-sm text-gray-500">10:00 AM</p>
          </div>
          <button
            onClick={() => setRsvpFor('Project Phoenix Kick-off')}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            RSVP
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Yoga & Mindfulness Session</p>
            <p className="text-sm text-gray-500">12:30 PM</p>
          </div>
          <button
            onClick={() => setRsvpFor('Yoga & Mindfulness Session')}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            RSVP
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Figma className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">Q3 Design Review</p>
            <p className="text-sm text-gray-500">2:00 PM</p>
          </div>
          <button
            onClick={() => setRsvpFor('Q3 Design Review')}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
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
            className="bg-white rounded-lg p-8 w-full max-w-md m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">RSVP for {rsvpFor}</h3>
              <button onClick={() => setRsvpFor(null)} className="p-1 rounded-full hover:bg-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-gray-600">You'll be added to the guest list for "{rsvpFor}".</p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setRsvpFor(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => setRsvpFor(null)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
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
