import { useEffect, useState } from 'react'
import {
  LayoutDashboard,
  MessageCircle,
  Calendar,
  CheckSquare,
  BookOpen,
  ListTodo,
  Globe,
  FileQuestion,
  Users,
  LayoutGrid,
  Settings,
  Zap,
  Menu,
  X,
} from 'lucide-react'

export function Sidebar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }, [open])

  const navLinks = (
    <nav className="space-y-1">
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-white bg-blue-600 rounded-lg font-semibold">
        <LayoutDashboard className="w-5 h-5" /> Dashboard
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <MessageCircle className="w-5 h-5" /> Discuss
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <Calendar className="w-5 h-5" /> Calendar
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <CheckSquare className="w-5 h-5" /> To-do
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <BookOpen className="w-5 h-5" /> Library
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <ListTodo className="w-5 h-5" /> Tasks
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <Globe className="w-5 h-5" /> Internal Portal
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <FileQuestion className="w-5 h-5" /> Surveys
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <Users className="w-5 h-5" /> Employees
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <LayoutGrid className="w-5 h-5" /> Apps
      </a>
      <a href="#" onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
        <Settings className="w-5 h-5" /> Settings
      </a>
    </nav>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center gap-3 bg-white/70 backdrop-blur-lg border-b border-gray-200/50 px-4 py-3 sticky top-0 z-30">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-700"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold text-gray-800">Innovate Inc.</h1>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar / drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] bg-white/95 lg:bg-white/70 backdrop-blur-lg border-r border-gray-200/50 p-6 flex flex-col flex-shrink-0 overflow-y-auto transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:z-auto lg:w-64 lg:max-w-none ${
            open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Innovate Inc.</h1>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="lg:hidden p-1 rounded-lg hover:bg-gray-100 text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1">{navLinks}</div>
        <div className="mt-6 pt-6 border-t border-gray-200/60 flex items-center gap-3 text-gray-500">
          <div className="bg-gray-200/70 p-1.5 rounded-md">
            <Zap className="w-5 h-5" />
          </div>
          <span className="font-semibold text-sm">Your logo</span>
        </div>
      </aside>
    </>
  )
}
