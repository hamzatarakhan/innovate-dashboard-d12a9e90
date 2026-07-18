import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { toast } from 'sonner'
import {
  CheckCircle,
  MessageSquare,
  Cloudy,
  Bell,
  Zap,
  Copy,
  Sparkles,
  ArrowRight,
  LayoutDashboard,
  Calendar,
  MessageCircle,
  CheckSquare,
  BookOpen,
  ListTodo,
  Globe,
  FileQuestion,
  Users,
  LayoutGrid,
  Settings,
  Menu,
  Search,
  Plus,
  Trash2,
  X,
  Info,
  AlertTriangle,
  AlertCircle,
  Megaphone,
  ExternalLink,
  ChevronDown,
  User,
  LogOut,
  GraduationCap,
  Star,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Sidebar } from '@/components/dashboard/Sidebar'


export const Route = createFileRoute('/design-system')({
  head: () => ({
    meta: [
      { title: 'Design System — Innovate Inc.' },
      {
        name: 'description',
        content:
          'The single source of truth for colors, typography, buttons, sidebar, cards, forms, feedback, and layout patterns used across Innovate Inc.',
      },
    ],
  }),
  component: DesignSystemPage,
})

// ---------- Real tokens actually used in this project ----------
const BG_GRADIENT = 'from-blue-100 via-purple-100 to-pink-100'

const BRAND = [
  { name: 'Primary', cls: 'bg-blue-600', hex: '#2563eb', use: 'Logo tile, active nav, primary buttons' },
  { name: 'Primary Hover', cls: 'bg-blue-700', hex: '#1d4ed8', use: 'Primary button hover state' },
  { name: 'Primary Tint', cls: 'bg-blue-50', hex: '#eff6ff', use: 'Nav hover background, subtle chip' },
  { name: 'Primary Text', cls: 'text-blue-600', hex: '#2563eb', use: 'Links, nav hover text, brand text' },
]

const TEXT_SCALE = [
  { name: 'Heading', cls: 'text-gray-900', hex: '#111827', use: 'Page titles, greetings, card metrics' },
  { name: 'Body', cls: 'text-gray-800', hex: '#1f2937', use: 'Default body text' },
  { name: 'Nav / Muted body', cls: 'text-gray-600', hex: '#4b5563', use: 'Sidebar links, secondary body' },
  { name: 'Caption', cls: 'text-gray-500', hex: '#6b7280', use: 'Meta info, date/time, hints' },
  { name: 'Disabled', cls: 'text-gray-400', hex: '#9ca3af', use: 'Placeholder, disabled controls' },
]

const STATUS = [
  { name: 'Success', cls: 'text-green-500', bg: 'bg-green-500', hex: '#22c55e', use: 'Tasks done, positive' },
  { name: 'Info', cls: 'text-blue-500', bg: 'bg-blue-500', hex: '#3b82f6', use: 'Info icons, neutral flags' },
  { name: 'Accent', cls: 'text-indigo-500', bg: 'bg-indigo-500', hex: '#6366f1', use: 'Secondary highlight' },
  { name: 'Warning', cls: 'text-yellow-500', bg: 'bg-yellow-500', hex: '#eab308', use: 'Attention, banners' },
  { name: 'Danger', cls: 'text-red-500', bg: 'bg-red-500', hex: '#ef4444', use: 'Errors, destructive' },
]

const TINTED_CARDS = [
  { name: 'Blue', bg: 'bg-blue-100/50', text: 'text-blue-800', icon: 'text-blue-600' },
  { name: 'Green', bg: 'bg-green-100/50', text: 'text-green-800', icon: 'text-green-600' },
  { name: 'Purple', bg: 'bg-purple-100/50', text: 'text-purple-800', icon: 'text-purple-600' },
  { name: 'Orange', bg: 'bg-orange-100/50', text: 'text-orange-800', icon: 'text-orange-600' },
  { name: 'Red', bg: 'bg-red-100/50', text: 'text-red-800', icon: 'text-red-600' },
  { name: 'Indigo', bg: 'bg-indigo-100/50', text: 'text-indigo-800', icon: 'text-indigo-600' },
]

const STICKY_COLORS = [
  { name: 'Yellow', cls: 'bg-yellow-200' },
  { name: 'Pink', cls: 'bg-pink-200' },
  { name: 'Blue', cls: 'bg-blue-200' },
  { name: 'Green', cls: 'bg-green-200' },
  { name: 'Purple', cls: 'bg-purple-200' },
]

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', icon: LayoutDashboard },
  { title: 'Discuss', icon: MessageCircle },
  { title: 'Calendar', icon: Calendar },
  { title: 'To-do', icon: CheckSquare },
  { title: 'Library', icon: BookOpen },
  { title: 'Tasks', icon: ListTodo },
  { title: 'Internal Portal', icon: Globe },
  { title: 'Surveys', icon: FileQuestion },
  { title: 'Employees', icon: Users },
  { title: 'Apps', icon: LayoutGrid },
  { title: 'Settings', icon: Settings },
]

const SPACING = [
  { name: 'xs', cls: 'p-2', px: '8px' },
  { name: 'sm', cls: 'p-3', px: '12px' },
  { name: 'md', cls: 'p-4', px: '16px' },
  { name: 'lg', cls: 'p-6', px: '24px' },
  { name: 'xl', cls: 'p-8', px: '32px' },
]

const RADII = [
  { name: 'rounded-md', use: 'Small chips, tags' },
  { name: 'rounded-lg', use: 'Buttons, inputs, nav links' },
  { name: 'rounded-xl', use: 'Cards, widgets, modals' },
  { name: 'rounded-full', use: 'Avatars, notification dots' },
]

const BREAKPOINTS = [
  { name: 'Mobile', range: '< 640px', hint: 'Single column, drawer sidebar' },
  { name: 'sm', range: '≥ 640px', hint: '2-col grids' },
  { name: 'md', range: '≥ 768px', hint: '3-col grids, sm→sm:flex-row' },
  { name: 'lg', range: '≥ 1024px', hint: 'Sidebar becomes static, 4-col grids' },
]

function Copyable({ text }: { text: string }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        toast.success('Copied', { description: text })
      }}
      className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 hover:bg-gray-200 px-2 py-0.5 font-mono text-xs text-gray-700 transition-colors"
    >
      {text}
      <Copy className="w-3 h-3" />
    </button>
  )
}

function SectionTitle({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-sm text-blue-600 font-semibold">{n}</span>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-500 text-sm mt-0.5">{sub}</p>
      </div>
    </div>
  )
}

function DesignSystemPage() {
  const [note, setNote] = useState('This is a sticky note — try editing me')
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [tab, setTab] = useState('preview')
  const [primaryHex, setPrimaryHex] = useState('#2563eb')

  return (
    <div className="text-gray-800 relative min-h-screen">
      <div className={`fixed inset-0 bg-gradient-to-br ${BG_GRADIENT} -z-10`} />

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 max-w-6xl mx-auto p-4 sm:p-6 lg:p-10 space-y-14 overflow-y-auto">

        {/* Hero */}
        <header className="glassmorphism rounded-xl p-8 fade-in">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" /> Innovate Inc. · Design System v1
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            The look & feel of every page
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            One source of truth for every new page. Click any token to copy it. Interact
            with every component below — anything not shown here should not be invented.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {['Colors', 'Typography', 'Buttons', 'Sidebar', 'Cards', 'Forms', 'Feedback', 'Modals', 'Tabs', 'Spacing', 'Icons', 'Rules'].map(
              (t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/70 text-gray-700 border border-white/60">
                  {t}
                </span>
              ),
            )}
          </div>
        </header>

        {/* Theme switcher */}
        <section className="glassmorphism rounded-xl p-6 fade-in">
          <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
            <Sparkles className="w-4 h-4 text-blue-600" /> Color palette
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Switch the active palette live — the change applies to every page in the app.
          </p>
          <ThemeSwitcher className="max-w-xl" />
        </section>

        {/* 01 · Background */}
        <section>
          <SectionTitle
            n="01"
            title="Page Background"
            sub="Every page sits on the same fixed gradient. Content floats on glass cards above it."
          />
          <div className={`rounded-xl bg-gradient-to-br ${BG_GRADIENT} h-40 border border-white/60 flex items-center justify-center`}>
            <Copyable text={`bg-gradient-to-br ${BG_GRADIENT}`} />
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Wrap the page body with{' '}
            <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">
              &lt;div className="fixed inset-0 bg-gradient-to-br ... -z-10" /&gt;
            </code>{' '}
            so the gradient covers the full viewport on long pages.
          </p>
        </section>

        {/* 02 · Brand color */}
        <section>
          <SectionTitle n="02" title="Brand Color — Blue 600" sub="The only brand color. Primary actions, active nav, logo tile." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND.map((c) => (
              <div key={c.cls} className="glassmorphism rounded-xl overflow-hidden card-hover-effect">
                <div className={`${c.cls} h-20 flex items-center justify-center`}>
                  <span className={`font-mono text-sm ${c.cls.includes('50') ? 'text-blue-700' : 'text-white'}`}>{c.hex}</span>
                </div>
                <div className="p-3 space-y-1">
                  <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.use}</p>
                  <Copyable text={c.cls} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 glassmorphism rounded-xl p-4 flex items-center gap-3 text-sm">
            <label className="font-semibold text-gray-700">Try a hex:</label>
            <input
              type="color"
              value={primaryHex}
              onChange={(e) => setPrimaryHex(e.target.value)}
              className="w-10 h-10 rounded-lg border border-gray-300 bg-white cursor-pointer"
            />
            <Copyable text={primaryHex} />
            <span className="text-gray-500">Preview only — production uses <code className="bg-gray-100 px-1 rounded">bg-blue-600</code>.</span>
          </div>
        </section>

        {/* 03 · Text scale */}
        <section>
          <SectionTitle n="03" title="Text Colors" sub="Five-step gray scale. Never invent a new gray." />
          <div className="glassmorphism rounded-xl divide-y divide-gray-200/60">
            {TEXT_SCALE.map((t) => (
              <div key={t.cls} className="p-4 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className={`${t.cls} text-lg font-medium`}>{t.name} — The quick brown fox</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.use}</p>
                </div>
                <Copyable text={t.cls} />
              </div>
            ))}
          </div>
        </section>

        {/* 04 · Status */}
        <section>
          <SectionTitle n="04" title="Status & Accent Colors" sub="Only for icons, dots, and inline badges — never as page backgrounds." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {STATUS.map((s) => (
              <div key={s.cls} className="glassmorphism rounded-xl p-4 flex flex-col items-start gap-2 card-hover-effect">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${s.bg}`} />
                  <CheckCircle className={`${s.cls} w-6 h-6`} />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{s.name}</p>
                <p className="text-xs text-gray-500">{s.use}</p>
                <Copyable text={s.cls} />
              </div>
            ))}
          </div>
        </section>

        {/* 05 · Surfaces */}
        <section>
          <SectionTitle n="05" title="Surfaces" sub="Three surface treatments — pick one per context." />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glassmorphism rounded-xl p-6">
              <p className="font-semibold text-gray-900">Glass card</p>
              <p className="text-sm text-gray-500 mt-1">Default for widgets on the page.</p>
              <div className="mt-4"><Copyable text="glassmorphism rounded-xl p-6" /></div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-semibold text-gray-900">Solid white</p>
              <p className="text-sm text-gray-500 mt-1">Modals, popovers, dropdowns.</p>
              <div className="mt-4"><Copyable text="bg-white rounded-xl border border-gray-200" /></div>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-gray-200/50">
              <p className="font-semibold text-gray-900">Sidebar surface</p>
              <p className="text-sm text-gray-500 mt-1">Sidebar, mobile top bar, sticky headers.</p>
              <div className="mt-4"><Copyable text="bg-white/70 backdrop-blur-lg border-gray-200/50" /></div>
            </div>
          </div>
        </section>

        {/* 06 · Typography */}
        <section>
          <SectionTitle n="06" title="Typography" sub="System sans stack. Only these sizes — do not introduce new ones." />
          <div className="glassmorphism rounded-xl p-6 space-y-4">
            <div>
              <p className="text-4xl font-bold text-gray-900 tracking-tight">Display — text-4xl font-bold</p>
              <Copyable text="text-4xl font-bold tracking-tight" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">Page title — text-3xl font-bold</p>
              <Copyable text="text-3xl font-bold text-gray-900" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">Card metric — text-2xl font-bold</p>
              <Copyable text="text-2xl font-bold" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">Widget title — text-xl font-bold</p>
              <Copyable text="text-xl font-bold" />
            </div>
            <div>
              <p className="text-base text-gray-800">Body copy — text-base text-gray-800</p>
              <Copyable text="text-base text-gray-800" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Caption / meta — text-sm text-gray-500</p>
              <Copyable text="text-sm text-gray-500" />
            </div>
          </div>
        </section>

        {/* 07 · Radius & Motion */}
        <section>
          <SectionTitle n="07" title="Radii, Spacing & Motion" sub="Interactive scale reference." />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glassmorphism rounded-xl p-6 space-y-3">
              <p className="font-semibold text-gray-900">Radii</p>
              {RADII.map((r) => (
                <div key={r.name} className="flex items-center gap-3">
                  <div className={`h-10 w-10 bg-blue-600 ${r.name}`} />
                  <div className="flex-1 text-sm text-gray-600">{r.use}</div>
                  <Copyable text={r.name} />
                </div>
              ))}
            </div>
            <div className="glassmorphism rounded-xl p-6 space-y-3">
              <p className="font-semibold text-gray-900">Spacing</p>
              {SPACING.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded">
                    <div className={`bg-blue-600 ${s.cls}`}>
                      <div className="w-4 h-4 bg-white/50 rounded-sm" />
                    </div>
                  </div>
                  <div className="flex-1 text-sm text-gray-600">{s.name} · {s.px}</div>
                  <Copyable text={s.cls} />
                </div>
              ))}
            </div>
            <div className="glassmorphism rounded-xl p-6 space-y-3">
              <p className="font-semibold text-gray-900">Motion</p>
              <div className="card-hover-effect rounded-lg bg-white p-3 text-sm text-gray-700 border border-gray-200 cursor-pointer">
                <code>card-hover-effect</code> — hover me
              </div>
              <div className="fade-in rounded-lg bg-white p-3 text-sm text-gray-700 border border-gray-200">
                <code>fade-in</code> — 0.5s entrance
              </div>
              <div className="sticky-note rounded-lg bg-yellow-200 p-3 text-sm text-yellow-900 cursor-pointer">
                <code>sticky-note</code> — hover rotates
              </div>
            </div>
          </div>
        </section>

        {/* 08 · Buttons */}
        <section>
          <SectionTitle n="08" title="Buttons" sub="Only these variants exist. Click any to see feedback." />
          <div className="glassmorphism rounded-xl p-6 space-y-6">
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => toast.success('Primary clicked')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Primary
              </button>
              <button
                onClick={() => toast('Secondary clicked')}
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-4 py-2 rounded-lg border border-gray-300 transition-colors"
              >
                Secondary
              </button>
              <button
                onClick={() => toast('Ghost clicked')}
                className="text-blue-600 hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Ghost
              </button>
              <button
                onClick={() => toast.error('Destructive clicked')}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Destructive
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="p-2 rounded-full bg-white/80 hover:bg-gray-100 text-gray-700 relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-blue-600 text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center">
                  3
                </span>
              </button>
              <button disabled className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg opacity-50 cursor-not-allowed">
                Disabled
              </button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded-lg text-sm">Small</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">Medium</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-lg">Large</button>
              <button className="w-full sm:w-auto sm:min-w-[240px] bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">
                Full-width (login form)
              </button>
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <p>Primary: <Copyable text="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg" /></p>
              <p>Secondary: <Copyable text="bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 rounded-lg" /></p>
              <p>Icon: <Copyable text="p-2 rounded-full bg-white/80 hover:bg-gray-100" /></p>
            </div>
          </div>
        </section>

        {/* 09 · Sidebar — interactive preview */}
        <section>
          <SectionTitle n="09" title="Sidebar" sub="Live preview — click items to see active state. Exact spec used app-wide." />
          <div className="grid gap-6 md:grid-cols-[16rem_1fr]">
            <div className="bg-white/70 backdrop-blur-lg border border-gray-200/50 rounded-xl p-6 flex flex-col max-h-[500px] overflow-y-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-600 p-2 rounded-lg"><Zap className="w-6 h-6 text-white" /></div>
                <h1 className="text-xl font-bold text-gray-800">Innovate Inc.</h1>
              </div>
              <nav className="space-y-1 flex-1">
                {SIDEBAR_ITEMS.map((item) => {
                  const isActive = activeNav === item.title
                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveNav(item.title)}
                      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-sm transition-colors text-left ${
                        isActive
                          ? 'text-white bg-blue-600'
                          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <item.icon className="w-5 h-5" /> {item.title}
                    </button>
                  )
                })}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-200/60 flex items-center gap-3 text-gray-500">
                <div className="bg-gray-200/70 p-1.5 rounded-md"><Zap className="w-5 h-5" /></div>
                <span className="font-semibold text-sm">Your logo</span>
              </div>
            </div>
            <div className="glassmorphism rounded-xl p-6 space-y-4 text-sm">
              <p className="font-semibold text-gray-900">Spec</p>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Surface: <code className="bg-gray-100 px-1 rounded">bg-white/70 backdrop-blur-lg border-r border-gray-200/50</code></li>
                <li>Width: <code className="bg-gray-100 px-1 rounded">lg:w-64</code> · Drawer on mobile <code className="bg-gray-100 px-1 rounded">w-72 max-w-[80vw]</code></li>
                <li>Active item: <code className="bg-gray-100 px-1 rounded">bg-blue-600 text-white</code></li>
                <li>Idle item: <code className="bg-gray-100 px-1 rounded">text-gray-600 hover:bg-blue-50 hover:text-blue-600</code></li>
                <li>Item padding: <code className="bg-gray-100 px-1 rounded">px-4 py-2 rounded-lg font-semibold</code></li>
                <li>Icon size: <code className="bg-gray-100 px-1 rounded">w-5 h-5</code></li>
                <li>Mobile: hamburger LEFT of logo in top bar</li>
              </ul>
              <p className="font-semibold text-gray-900 pt-2">Mobile top bar</p>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-lg border border-gray-200/50 px-4 py-3 rounded-lg">
                <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-700"><Menu className="w-6 h-6" /></button>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 p-1.5 rounded-lg"><Zap className="w-5 h-5 text-white" /></div>
                  <h1 className="text-lg font-bold text-gray-800">Innovate Inc.</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 · Header pattern */}
        <section>
          <SectionTitle n="10" title="Page Header" sub="Greeting left, actions right (messages · notifications · avatar)." />
          <div className="glassmorphism rounded-xl p-6">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Good Morning, Alex!</h2>
                <p className="text-gray-500 mt-1">Friday, July 17, 2026 · 10:24 AM</p>
              </div>
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <button className="relative p-2 rounded-full bg-white/80 hover:bg-gray-100" aria-label="Messages">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-blue-600 text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center">2</span>
                </button>
                <button className="relative p-2 rounded-full bg-white/80 hover:bg-gray-100" aria-label="Notifications">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-blue-600 text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center">5</span>
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="relative flex items-center gap-2 rounded-full bg-white/80 hover:bg-gray-100 p-1 pr-3">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center text-sm">A</div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">Alex</span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem><User className="w-4 h-4 mr-2" /> My Preferences</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 focus:text-red-700"><LogOut className="w-4 h-4 mr-2" /> Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
          </div>
        </section>

        {/* 11 · Stats */}
        <section>
          <SectionTitle n="11" title="Stat Cards" sub="Top-line metrics — icon left, label + big number right." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                <p className="text-gray-500">Weather</p>
                <p className="text-2xl font-bold">28°C</p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 · Tinted category cards */}
        <section>
          <SectionTitle
            n="12"
            title="Tinted Category Cards"
            sub="Quick Access tiles. Pair bg-{c}-100/50 · text-{c}-800 · text-{c}-600 icon."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TINTED_CARDS.map((c) => (
              <button
                key={c.name}
                onClick={() => toast(`${c.name} tile clicked`)}
                className={`${c.bg} rounded-xl p-4 flex flex-col items-center gap-2 card-hover-effect cursor-pointer`}
              >
                <Zap className={`w-6 h-6 ${c.icon}`} />
                <p className={`${c.text} font-semibold text-sm`}>{c.name}</p>
              </button>
            ))}
          </div>
        </section>

        {/* 13 · Sticky notes */}
        <section>
          <SectionTitle n="13" title="Sticky Notes" sub="Only used in the Bulletin Board widget." />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {STICKY_COLORS.map((s) => (
              <div key={s.name} className={`${s.cls} sticky-note rounded-lg p-4 text-gray-800 text-sm min-h-24`}>
                {s.name} note
              </div>
            ))}
          </div>
          <div className="mt-4 max-w-sm">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-yellow-200 sticky-note rounded-lg p-4 text-gray-800 text-sm min-h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* 14 · Form fields */}
        <section>
          <SectionTitle n="14" title="Form Fields" sub="Text · Password · Search · Textarea · Select · Checkbox · Radio · Toggle." />
          <div className="glassmorphism rounded-xl p-6 max-w-2xl grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
              <input type="text" placeholder="alex.doe" className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Search</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search anything..." className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Bio</label>
              <textarea rows={3} placeholder="Tell us about yourself..." className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
              <select className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600" /> Notify me</label>
              <label className="flex items-center gap-2 text-sm text-gray-700"><input type="radio" name="r" defaultChecked className="w-4 h-4 accent-blue-600" /> Option A</label>
              <label className="flex items-center gap-2 text-sm text-gray-700"><input type="radio" name="r" className="w-4 h-4 accent-blue-600" /> Option B</label>
            </div>
            <div className="sm:col-span-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                Save changes
              </button>
            </div>
          </div>
        </section>

        {/* 15 · Feedback: alerts, badges, toasts */}
        <section>
          <SectionTitle n="15" title="Feedback" sub="Banners · badges · toasts. Click a toast button to trigger." />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-yellow-400/80 text-yellow-900 p-4 rounded-lg">
                <div className="flex items-center gap-3"><Megaphone className="w-5 h-5" /><p><strong>Announcement:</strong> Town hall Friday 3PM.</p></div>
                <button aria-label="Dismiss"><X className="w-4 h-4" /></button>
              </div>
              <div className="flex items-start gap-3 bg-blue-50 text-blue-900 p-4 rounded-lg border border-blue-200">
                <Info className="w-5 h-5 mt-0.5" /><p className="text-sm"><strong>Info:</strong> New policy published.</p>
              </div>
              <div className="flex items-start gap-3 bg-green-50 text-green-900 p-4 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 mt-0.5" /><p className="text-sm"><strong>Success:</strong> Your changes were saved.</p>
              </div>
              <div className="flex items-start gap-3 bg-yellow-50 text-yellow-900 p-4 rounded-lg border border-yellow-200">
                <AlertTriangle className="w-5 h-5 mt-0.5" /><p className="text-sm"><strong>Warning:</strong> Timesheet due tomorrow.</p>
              </div>
              <div className="flex items-start gap-3 bg-red-50 text-red-900 p-4 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 mt-0.5" /><p className="text-sm"><strong>Error:</strong> Could not submit request.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glassmorphism rounded-xl p-4 space-y-3">
                <p className="font-semibold text-gray-900">Badges</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Info</span>
                  <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Success</span>
                  <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">Warning</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold">Danger</span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">Neutral</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-xs font-semibold">New</span>
                </div>
              </div>
              <div className="glassmorphism rounded-xl p-4 space-y-2">
                <p className="font-semibold text-gray-900">Toasts (sonner)</p>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => toast('Default toast')} className="px-3 py-1.5 rounded-lg bg-white border border-gray-300 text-sm hover:bg-gray-50">Default</button>
                  <button onClick={() => toast.success('Saved!')} className="px-3 py-1.5 rounded-lg bg-green-500 text-white text-sm hover:bg-green-600">Success</button>
                  <button onClick={() => toast.error('Something failed')} className="px-3 py-1.5 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600">Error</button>
                  <button onClick={() => toast.info('FYI', { description: 'Extra detail here.' })} className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Info</button>
                </div>
              </div>
              <div className="glassmorphism rounded-xl p-4 space-y-2">
                <p className="font-semibold text-gray-900">Avatars</p>
                <div className="flex items-center gap-2">
                  {['A','B','C','D'].map((l, i) => (
                    <div key={l} className={`w-9 h-9 rounded-full text-white font-semibold flex items-center justify-center text-sm ${['bg-blue-600','bg-purple-500','bg-pink-500','bg-indigo-500'][i]}`}>{l}</div>
                  ))}
                  <div className="w-9 h-9 rounded-full bg-gray-200 text-gray-700 font-semibold flex items-center justify-center text-xs">+3</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 16 · Dropdown, Modal, Tabs */}
        <section>
          <SectionTitle n="16" title="Overlays & Tabs" sub="Dropdown menu · Modal dialog · Tabs. All interactive." />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glassmorphism rounded-xl p-6 flex flex-col items-start gap-3">
              <p className="font-semibold text-gray-900">Dropdown</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-4 py-2 rounded-lg border border-gray-300 inline-flex items-center gap-2">
                    Options <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem><Star className="w-4 h-4 mr-2" /> Favorite</DropdownMenuItem>
                  <DropdownMenuItem><ExternalLink className="w-4 h-4 mr-2" /> Open in new tab</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600"><Trash2 className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="glassmorphism rounded-xl p-6 flex flex-col items-start gap-3">
              <p className="font-semibold text-gray-900">Modal</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">
                    Open dialog
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <DialogTitle>Learning Resources</DialogTitle>
                        <DialogDescription>Standard modal pattern used app-wide.</DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>
                  <p className="text-sm text-gray-600">Solid white surface, rounded-xl, icon tile + title + description in header. Body content below.</p>
                </DialogContent>
              </Dialog>
            </div>

            <div className="glassmorphism rounded-xl p-6 flex flex-col items-start gap-3 w-full">
              <p className="font-semibold text-gray-900">Tabs</p>
              <Tabs value={tab} onValueChange={setTab} className="w-full">
                <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="text-sm text-gray-600 pt-2">Live preview content.</TabsContent>
                <TabsContent value="code" className="text-sm text-gray-600 pt-2">
                  <code className="bg-gray-100 px-1 rounded">glassmorphism rounded-xl p-6</code>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* 17 · List items (messages, notifications) */}
        <section>
          <SectionTitle n="17" title="List Items" sub="Message row · Notification row · Event row. Reuse verbatim." />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glassmorphism rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200/60 font-semibold text-sm">Messages</div>
              <ul>
                <li className="px-4 py-3 flex gap-3 border-b last:border-b-0 bg-blue-50/40 hover:bg-gray-50 cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center text-sm flex-shrink-0">P</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between"><p className="text-sm font-semibold truncate">Priya Sharma</p><span className="text-[11px] text-gray-400">2m</span></div>
                    <p className="text-xs text-gray-600 truncate">Can you review the deck?</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                </li>
              </ul>
            </div>
            <div className="glassmorphism rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200/60 font-semibold text-sm">Notifications</div>
              <ul>
                <li className="px-4 py-3 flex gap-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0"><CheckCircle className="w-4 h-4" /></div>
                  <div className="flex-1 min-w-0"><p className="text-sm font-semibold">Task completed</p><p className="text-xs text-gray-500">Design review approved · 5m ago</p></div>
                </li>
              </ul>
            </div>
            <div className="glassmorphism rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200/60 font-semibold text-sm">Events</div>
              <ul>
                <li className="px-4 py-3 flex gap-3 hover:bg-gray-50 cursor-pointer">
                  <div className="w-10 rounded-lg bg-blue-100 text-blue-700 flex flex-col items-center justify-center py-1 flex-shrink-0">
                    <span className="text-[10px] font-semibold uppercase">Jul</span>
                    <span className="text-base font-bold leading-none">22</span>
                  </div>
                  <div className="flex-1 min-w-0"><p className="text-sm font-semibold">Product review</p><p className="text-xs text-gray-500">10:00 AM · Zoom</p></div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 18 · Icons */}
        <section>
          <SectionTitle n="18" title="Icons" sub="Only lucide-react. w-5 h-5 inline · w-6 h-6 headers · w-10 h-10 stat cards. Never emoji." />
          <div className="glassmorphism rounded-xl p-6">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-4">
              {[LayoutDashboard, MessageCircle, Calendar, CheckSquare, BookOpen, ListTodo, Globe, FileQuestion, Users, LayoutGrid, Settings, Bell, Search, Plus, Trash2, Zap, Star, User, LogOut, ExternalLink].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center gap-1 text-gray-600">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 19 · Breakpoints */}
        <section>
          <SectionTitle n="19" title="Breakpoints" sub="Tailwind defaults — the only ones we use." />
          <div className="glassmorphism rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50/60 text-gray-700">
                <tr>
                  <th className="text-left p-3 font-semibold">Name</th>
                  <th className="text-left p-3 font-semibold">Range</th>
                  <th className="text-left p-3 font-semibold">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/60">
                {BREAKPOINTS.map((b) => (
                  <tr key={b.name}>
                    <td className="p-3 font-semibold text-gray-900">{b.name}</td>
                    <td className="p-3 font-mono text-gray-700">{b.range}</td>
                    <td className="p-3 text-gray-600">{b.hint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 20 · Rules for AI */}
        <section>
          <SectionTitle n="20" title="Rules for the AI" sub="Follow verbatim when generating any new page." />
          <div className="glassmorphism rounded-xl p-6">
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-800">
              <li>Page shell: <code className="bg-gray-100 px-1 rounded">fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 -z-10</code> + <code className="bg-gray-100 px-1 rounded">Sidebar</code> + main in <code className="bg-gray-100 px-1 rounded">p-4 sm:p-6 lg:p-8</code>.</li>
              <li>Every widget/card uses <code className="bg-gray-100 px-1 rounded">glassmorphism rounded-xl p-6</code>. Add <code className="bg-gray-100 px-1 rounded">card-hover-effect</code> when interactive.</li>
              <li>Brand action = <code className="bg-gray-100 px-1 rounded">bg-blue-600 hover:bg-blue-700 text-white</code>. No other primary color.</li>
              <li>Text hierarchy: gray-900 → gray-800 → gray-600 → gray-500 → gray-400. Never another gray.</li>
              <li>Icons: <code className="bg-gray-100 px-1 rounded">lucide-react</code> only. w-5 h-5 inline · w-6 h-6 headers · w-10 h-10 stats. No emoji.</li>
              <li>Radii: <code className="bg-gray-100 px-1 rounded">rounded-lg</code> controls · <code className="bg-gray-100 px-1 rounded">rounded-xl</code> cards · <code className="bg-gray-100 px-1 rounded">rounded-full</code> avatars only.</li>
              <li>Status colors (green/blue/indigo/yellow/red-500) only in icons, dots, badges — never as page backgrounds.</li>
              <li>Tinted tiles: <code className="bg-gray-100 px-1 rounded">bg-{`{c}`}-100/50</code> + <code className="bg-gray-100 px-1 rounded">text-{`{c}`}-800</code> + <code className="bg-gray-100 px-1 rounded">text-{`{c}`}-600</code> icon.</li>
              <li>Motion: <code className="bg-gray-100 px-1 rounded">fade-in</code> on section entry, <code className="bg-gray-100 px-1 rounded">card-hover-effect</code> on hover. No new keyframes.</li>
              <li>Sidebar: active <code className="bg-gray-100 px-1 rounded">bg-blue-600 text-white</code>; idle <code className="bg-gray-100 px-1 rounded">text-gray-600 hover:bg-blue-50 hover:text-blue-600</code>.</li>
              <li>Header: greeting left, actions right. Bell + Message icons round white/80, notification dot <code className="bg-gray-100 px-1 rounded">bg-blue-600 ring-2 ring-white</code>.</li>
              <li>Buttons: only primary, secondary, ghost, destructive, icon-round. Padding <code className="bg-gray-100 px-1 rounded">px-4 py-2</code>, font-semibold.</li>
              <li>Forms: inputs <code className="bg-gray-100 px-1 rounded">rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500</code>; labels <code className="bg-gray-100 px-1 rounded">text-sm font-semibold text-gray-700</code>.</li>
              <li>Feedback: use <code className="bg-gray-100 px-1 rounded">toast()</code> from sonner. Never <code className="bg-gray-100 px-1 rounded">alert()</code>.</li>
              <li>Modals: shadcn <code className="bg-gray-100 px-1 rounded">Dialog</code> · header = icon tile + title + description.</li>
              <li>Placeholder pages: use <code className="bg-gray-100 px-1 rounded">ComingSoon</code> component (icon tile, title, description, back button).</li>
              <li>Every route sets a unique <code className="bg-gray-100 px-1 rounded">head()</code> title + description.</li>
              <li>Never hardcode hex, <code className="bg-gray-100 px-1 rounded">#fff</code>, or invent new tailwind color scales.</li>
            </ol>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 pt-6">
          Innovate Inc. · Design System · Keep it consistent.
        </footer>
      </main>
      </div>
    </div>
  )
}

