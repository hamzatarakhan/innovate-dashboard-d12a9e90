import { CheckCircle, MessageSquare, Cloudy } from 'lucide-react'

export function StatsRow() {
  return (
    <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="glassmorphism rounded-xl p-6 flex items-center gap-4 card-hover-effect">
        <CheckCircle className="w-10 h-10 text-green-500" />
        <div>
          <p className="text-gray-500">Tasks Completed</p>
          <p className="text-2xl font-bold">12 / 18</p>
        </div>
      </div>
      <div className="glassmorphism rounded-xl p-6 flex items-center gap-4 card-hover-effect">
        <MessageSquare className="w-10 h-10 text-blue-500" />
        <div>
          <p className="text-gray-500">Unread Messages</p>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>
      <div className="glassmorphism rounded-xl p-6 flex items-center gap-4 card-hover-effect">
        <Cloudy className="w-10 h-10 text-indigo-500" />
        <div>
          <p className="text-gray-500">Pune Weather</p>
          <p className="text-2xl font-bold">28°C, Cloudy</p>
        </div>
      </div>
    </div>
  )
}
