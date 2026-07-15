import { LayoutDashboard, Users, Folder, Calendar, Settings, Zap } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-full lg:w-64 bg-white/70 backdrop-blur-lg border-r border-gray-200/50 p-6 flex-shrink-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Innovate Inc.</h1>
      </div>
      <nav className="space-y-2">
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-white bg-blue-600 rounded-lg font-semibold">
          <LayoutDashboard className="w-5 h-5" /> Home
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
          <Users className="w-5 h-5" /> My Team
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
          <Folder className="w-5 h-5" /> Documents
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
          <Calendar className="w-5 h-5" /> Calendar
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
          <Settings className="w-5 h-5" /> Settings
        </a>
      </nav>
    </aside>
  )
}
