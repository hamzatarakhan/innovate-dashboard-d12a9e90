import { BookOpen, LifeBuoy, Gift, Shield, Plane, Briefcase } from 'lucide-react'

export function QuickAccess() {
  return (
    <div className="lg:col-span-2 glassmorphism rounded-xl p-6 card-hover-effect fade-in">
      <h3 className="text-xl font-bold mb-4">Quick Access</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <a href="#" className="flex flex-col items-center justify-center text-center p-4 bg-blue-100/50 hover:bg-blue-200/70 rounded-lg transition-colors">
          <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
          <span className="text-sm font-medium text-blue-800">HR Docs</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-center p-4 bg-green-100/50 hover:bg-green-200/70 rounded-lg transition-colors">
          <LifeBuoy className="w-8 h-8 text-green-600 mb-2" />
          <span className="text-sm font-medium text-green-800">IT Helpdesk</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-center p-4 bg-purple-100/50 hover:bg-purple-200/70 rounded-lg transition-colors">
          <Gift className="w-8 h-8 text-purple-600 mb-2" />
          <span className="text-sm font-medium text-purple-800">Benefits</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-center p-4 bg-orange-100/50 hover:bg-orange-200/70 rounded-lg transition-colors">
          <Shield className="w-8 h-8 text-orange-600 mb-2" />
          <span className="text-sm font-medium text-orange-800">Policies</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-center p-4 bg-red-100/50 hover:bg-red-200/70 rounded-lg transition-colors">
          <Plane className="w-8 h-8 text-red-600 mb-2" />
          <span className="text-sm font-medium text-red-800">Travel</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-center p-4 bg-indigo-100/50 hover:bg-indigo-200/70 rounded-lg transition-colors">
          <Briefcase className="w-8 h-8 text-indigo-600 mb-2" />
          <span className="text-sm font-medium text-indigo-800">Careers</span>
        </a>
      </div>
    </div>
  )
}
