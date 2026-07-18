import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { toast } from 'sonner'
import {
  CheckCircle,
  MessageSquare,
  Newspaper,
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
import { Sidebar } from '@/components/dashboard/Sidebar'


export const Route = createFileRoute('/design-system')({
  head: () => ({
    meta: [
      { title: 'Design System — Innovate Inc.' },
      {
        name: 'description',
        content:
          'The single source of truth for the Odoo 19 look & feel: colors, typography, buttons, sidebar, cards, forms, feedback, and layout patterns used across Innovate Inc.',
      },
    ],
  }),
  component: DesignSystemPage,
})

// ---------- Real tokens actually used in this project (Odoo 19 theme) ----------

const BRAND = [
  { name: 'Primary', hex: '#243742', onDark: true, use: 'Logo tile ink, active nav, primary buttons, links' },
  { name: 'Primary Hover', hex: '#1b2a33', onDark: true, use: 'Primary button hover state' },
  { name: 'Secondary (Sand)', hex: '#f0cda8', onDark: false, use: 'Secondary buttons, logo tile, accent bar' },
  { name: 'Secondary Hover', hex: '#ecbf90', onDark: false, use: 'Secondary button hover state' },
]

const NEUTRALS = [
  { name: 'Ink', hex: '#212529', onDark: true, use: 'Headings, body, card metrics' },
  { name: 'Muted', hex: '#6c757d', onDark: true, use: 'Captions, meta, secondary body' },
  { name: 'Hairline', hex: '#dee2e6', onDark: false, use: 'Card & tile borders, dividers' },
  { name: 'Page', hex: '#f8f9fa', onDark: false, use: 'App background, inset tiles' },
  { name: 'Surface', hex: '#ffffff', onDark: false, use: 'Cards, modals, popovers' },
]

const STATUS = [
  { name: 'Success', cls: 'text-emerald-600', bg: 'bg-emerald-500', hex: '#059669', use: 'Tasks done, positive' },
  { name: 'Info', cls: 'text-blue-600', bg: 'bg-blue-500', hex: '#2563eb', use: 'Info icons, neutral flags' },
  { name: 'Accent', cls: 'text-violet-600', bg: 'bg-violet-500', hex: '#7c3aed', use: 'Secondary highlight' },
  { name: 'Warning', cls: 'text-amber-600', bg: 'bg-amber-500', hex: '#d97706', use: 'Attention, banners' },
  { name: 'Danger', cls: 'text-rose-600', bg: 'bg-rose-500', hex: '#e11d48', use: 'Errors, destructive' },
]

const TILE_ICONS = [
  { name: 'Blue', icon: 'text-blue-600' },
  { name: 'Emerald', icon: 'text-emerald-600' },
  { name: 'Violet', icon: 'text-violet-600' },
  { name: 'Orange', icon: 'text-orange-600' },
  { name: 'Rose', icon: 'text-rose-600' },
  { name: 'Indigo', icon: 'text-indigo-600' },
]

const STICKY_COLORS = [
  { name: 'Yellow', cls: 'bg-yellow-200' },
  { name: 'Pink', cls: 'bg-pink-200' },
  { name: 'Blue', cls: 'bg-blue-200' },
  { name: 'Green', cls: 'bg-green-200' },
  { name: 'Purple', cls: 'bg-purple-200' },
]

const SIDEBAR_ITEMS = [
  { title: 'Dashboard', icon: LayoutDashboard, enabled: true },
  { title: 'Discuss', icon: MessageCircle, enabled: false },
  { title: 'Calendar', icon: Calendar, enabled: false },
  { title: 'To-do', icon: CheckSquare, enabled: false },
  { title: 'Library', icon: BookOpen, enabled: false },
  { title: 'Tasks', icon: ListTodo, enabled: false },
  { title: 'Internal Portal', icon: Globe, enabled: false },
  { title: 'Surveys', icon: FileQuestion, enabled: false },
]

const SPACING = [
  { name: 'xs', cls: 'p-2', px: '8px' },
  { name: 'sm', cls: 'p-3', px: '12px' },
  { name: 'md', cls: 'p-4', px: '16px' },
  { name: 'lg', cls: 'p-5', px: '20px' },
  { name: 'xl', cls: 'p-6', px: '24px' },
]

const RADII = [
  { name: 'rounded (4px)', px: '4px', use: 'Chips, badges' },
  { name: 'rounded-md (6px)', px: '6px', use: 'Buttons, inputs, nav links, icon buttons' },
  { name: 'rounded-lg (8px)', px: '8px', use: 'Cards, tiles, modals' },
  { name: 'rounded-full', px: '999px', use: 'Avatars, status dots' },
]

const BREAKPOINTS = [
  { name: 'Mobile', range: '< 640px', hint: 'Single column, navy drawer sidebar' },
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
      className="inline-flex items-center gap-1.5 rounded bg-gray-100 hover:bg-gray-200 px-2 py-0.5 font-mono text-xs text-gray-700 transition-colors"
    >
      {text}
      <Copy className="w-3 h-3" />
    </button>
  )
}

function SectionTitle({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-sm font-semibold" style={{ color: 'var(--odoo-brand)' }}>{n}</span>
      <div>
        <h2 className="odoo-heading text-2xl">{title}</h2>
        <p className="text-sm mt-0.5" style={{ color: 'var(--odoo-muted)' }}>{sub}</p>
      </div>
    </div>
  )
}

function DesignSystemPage() {
  const [note, setNote] = useState('This is a sticky note — try editing me')
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [tab, setTab] = useState('preview')

  return (
    <div className="relative min-h-screen" style={{ color: 'var(--odoo-ink)' }}>
      <div className="fixed inset-0 -z-10" style={{ backgroundColor: 'var(--odoo-page)' }} />

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 max-w-6xl mx-auto p-4 sm:p-6 lg:p-10 space-y-14 overflow-y-auto w-full">

        {/* Hero */}
        <header className="odoo-card p-8 fade-in">
          <div className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: 'var(--odoo-brand)' }}>
            <Sparkles className="w-4 h-4" /> Innovate Inc. · Odoo 19 Design System v2
          </div>
          <h1 className="odoo-heading text-4xl sm:text-5xl tracking-tight">
            The look &amp; feel of every page
          </h1>
          <p className="mt-3 max-w-2xl" style={{ color: 'var(--odoo-muted)' }}>
            One source of truth for every new page — modeled on the internal Odoo 19 UI.
            Click any token to copy it. Interact with every component below; anything not
            shown here should not be invented.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {['Colors', 'Typography', 'Buttons', 'Sidebar', 'Cards', 'Forms', 'Feedback', 'Modals', 'Tabs', 'Spacing', 'Icons', 'Rules'].map(
              (t) => (
                <span key={t} className="odoo-chip bg-white border" style={{ borderColor: 'var(--odoo-line)', color: 'var(--odoo-muted)' }}>
                  {t}
                </span>
              ),
            )}
          </div>
        </header>

        {/* 01 · Background */}
        <section>
          <SectionTitle
            n="01"
            title="Page Background"
            sub="Every page sits on a single flat neutral surface. Content floats on white cards above it."
          />
          <div
            className="rounded-lg h-40 border flex items-center justify-center"
            style={{ backgroundColor: 'var(--odoo-page)', borderColor: 'var(--odoo-line)' }}
          >
            <Copyable text="backgroundColor: var(--odoo-page)  ·  #f8f9fa" />
          </div>
          <p className="mt-3 text-sm" style={{ color: 'var(--odoo-muted)' }}>
            Wrap the page body with{' '}
            <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">
              &lt;div className="fixed inset-0 -z-10" style=&#123;&#123; backgroundColor: 'var(--odoo-page)' &#125;&#125; /&gt;
            </code>{' '}
            so the surface covers the full viewport on long pages.
          </p>
        </section>

        {/* 02 · Brand color */}
        <section>
          <SectionTitle n="02" title="Brand Colors" sub="Navy is the primary; sand is the single accent. No other brand colors." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND.map((c) => (
              <div key={c.name} className="odoo-card overflow-hidden">
                <div className="h-20 flex items-center justify-center" style={{ backgroundColor: c.hex }}>
                  <span className="font-mono text-sm" style={{ color: c.onDark ? '#fff' : '#212529' }}>{c.hex}</span>
                </div>
                <div className="p-3 space-y-1">
                  <p className="font-semibold text-sm" style={{ color: 'var(--odoo-ink)' }}>{c.name}</p>
                  <p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>{c.use}</p>
                  <Copyable text={c.hex} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 · Neutrals / text scale */}
        <section>
          <SectionTitle n="03" title="Neutrals & Text" sub="One ink, one muted, one hairline, one page, one surface. Never invent a new gray." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {NEUTRALS.map((c) => (
              <div key={c.name} className="odoo-card overflow-hidden">
                <div className="h-16 flex items-center justify-center border-b" style={{ backgroundColor: c.hex, borderColor: 'var(--odoo-line)' }}>
                  <span className="font-mono text-xs" style={{ color: c.onDark ? '#fff' : '#495057' }}>{c.hex}</span>
                </div>
                <div className="p-3 space-y-1">
                  <p className="font-semibold text-sm" style={{ color: 'var(--odoo-ink)' }}>{c.name}</p>
                  <p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>{c.use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 · Status */}
        <section>
          <SectionTitle n="04" title="Status & Accent Colors" sub="Only for icons, dots, and inline badges — never as page or card backgrounds." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {STATUS.map((s) => (
              <div key={s.cls} className="odoo-card p-4 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${s.bg}`} />
                  <CheckCircle className={`${s.cls} w-6 h-6`} />
                </div>
                <p className="font-semibold text-sm" style={{ color: 'var(--odoo-ink)' }}>{s.name}</p>
                <p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>{s.use}</p>
                <Copyable text={s.cls} />
              </div>
            ))}
          </div>
        </section>

        {/* 05 · Surfaces */}
        <section>
          <SectionTitle n="05" title="Surfaces" sub="Three surface treatments — pick one per context." />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="odoo-card p-6">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Card</p>
              <p className="text-sm mt-1" style={{ color: 'var(--odoo-muted)' }}>Default for widgets on the page.</p>
              <div className="mt-4"><Copyable text="odoo-card p-5" /></div>
            </div>
            <div className="odoo-tile p-6">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Tile</p>
              <p className="text-sm mt-1" style={{ color: 'var(--odoo-muted)' }}>Inset rows inside a card (events, surveys, quick links).</p>
              <div className="mt-4"><Copyable text="odoo-tile p-3" /></div>
            </div>
            <div className="bg-white rounded-lg p-6 border shadow-lg" style={{ borderColor: 'var(--odoo-line)' }}>
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Overlay</p>
              <p className="text-sm mt-1" style={{ color: 'var(--odoo-muted)' }}>Modals, popovers, dropdowns (solid white + shadow).</p>
              <div className="mt-4"><Copyable text="bg-white rounded-lg border shadow-lg" /></div>
            </div>
          </div>
        </section>

        {/* 06 · Typography */}
        <section>
          <SectionTitle n="06" title="Typography" sub="Inter (body) · Inter Tight (headings via .odoo-heading). Only these sizes." />
          <div className="odoo-card p-6 space-y-4">
            <div>
              <p className="odoo-heading text-4xl tracking-tight">Display — text-4xl</p>
              <Copyable text="odoo-heading text-4xl tracking-tight" />
            </div>
            <div>
              <p className="odoo-heading text-2xl">Page title — text-2xl</p>
              <Copyable text="odoo-heading text-2xl" />
            </div>
            <div>
              <p className="odoo-heading text-base">Widget title — text-base</p>
              <Copyable text="odoo-heading text-base" />
            </div>
            <div>
              <p className="text-2xl font-semibold" style={{ color: 'var(--odoo-ink)' }}>Card metric — text-2xl font-semibold</p>
              <Copyable text="text-2xl font-semibold" />
            </div>
            <div>
              <p className="text-sm" style={{ color: 'var(--odoo-ink)' }}>Body copy — text-sm (ink)</p>
              <Copyable text="text-sm · var(--odoo-ink)" />
            </div>
            <div>
              <p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>Caption / meta — text-xs (muted)</p>
              <Copyable text="text-xs · var(--odoo-muted)" />
            </div>
          </div>
        </section>

        {/* 07 · Radius & Motion */}
        <section>
          <SectionTitle n="07" title="Radii, Spacing & Motion" sub="Tighter, flatter Odoo scale." />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="odoo-card p-6 space-y-3">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Radii</p>
              {RADII.map((r) => (
                <div key={r.name} className="flex items-center gap-3">
                  <div className="h-10 w-10 flex-shrink-0" style={{ backgroundColor: 'var(--odoo-brand)', borderRadius: r.px }} />
                  <div className="flex-1 text-sm" style={{ color: 'var(--odoo-muted)' }}>{r.use}</div>
                  <span className="font-mono text-xs" style={{ color: 'var(--odoo-muted)' }}>{r.px}</span>
                </div>
              ))}
            </div>
            <div className="odoo-card p-6 space-y-3">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Spacing</p>
              {SPACING.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <div className="rounded" style={{ backgroundColor: '#e8edf0' }}>
                    <div className={s.cls} style={{ backgroundColor: 'var(--odoo-brand)', borderRadius: 4 }}>
                      <div className="w-4 h-4 rounded-sm bg-white/40" />
                    </div>
                  </div>
                  <div className="flex-1 text-sm" style={{ color: 'var(--odoo-muted)' }}>{s.name} · {s.px}</div>
                  <Copyable text={s.cls} />
                </div>
              ))}
            </div>
            <div className="odoo-card p-6 space-y-3">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Motion</p>
              <div className="odoo-card p-3 text-sm cursor-pointer" style={{ color: 'var(--odoo-ink)' }}>
                <code>odoo-card</code> — hover lifts the shadow
              </div>
              <div className="fade-in rounded-lg bg-white p-3 text-sm border" style={{ color: 'var(--odoo-ink)', borderColor: 'var(--odoo-line)' }}>
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
          <div className="odoo-card p-6 space-y-6">
            <div className="flex flex-wrap gap-3 items-center">
              <button onClick={() => toast.success('Primary clicked')} className="odoo-btn odoo-btn-primary px-4 py-2 text-sm">
                Primary
              </button>
              <button onClick={() => toast('Secondary clicked')} className="odoo-btn odoo-btn-secondary px-4 py-2 text-sm">
                Secondary
              </button>
              <button onClick={() => toast('Ghost clicked')} className="odoo-btn odoo-btn-ghost px-4 py-2 text-sm">
                Ghost
              </button>
              <button
                onClick={() => toast.error('Destructive clicked')}
                className="odoo-btn px-4 py-2 text-sm text-white"
                style={{ backgroundColor: '#e11d48' }}
              >
                Destructive
              </button>
              <button className="odoo-btn odoo-btn-primary px-4 py-2 text-sm">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="relative p-2 rounded-md bg-white border hover:bg-gray-50"
                style={{ borderColor: 'var(--odoo-line)' }}
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} />
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center" style={{ backgroundColor: 'var(--odoo-brand)' }}>
                  3
                </span>
              </button>
              <button disabled className="odoo-btn odoo-btn-primary px-4 py-2 text-sm opacity-60 cursor-not-allowed">
                Disabled
              </button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="odoo-btn odoo-btn-primary px-3 py-1 text-xs">Small</button>
              <button className="odoo-btn odoo-btn-primary px-4 py-2 text-sm">Medium</button>
              <button className="odoo-btn odoo-btn-primary px-6 py-3 text-base">Large</button>
              <button className="odoo-btn odoo-btn-primary w-full sm:w-auto sm:min-w-[240px] px-4 py-2 text-sm">
                Full-width (login form)
              </button>
            </div>
            <div className="text-xs space-y-1" style={{ color: 'var(--odoo-muted)' }}>
              <p>Primary: <Copyable text="odoo-btn odoo-btn-primary px-4 py-2" /></p>
              <p>Secondary: <Copyable text="odoo-btn odoo-btn-secondary px-4 py-2" /></p>
              <p>Ghost: <Copyable text="odoo-btn odoo-btn-ghost px-4 py-2" /></p>
              <p>Icon: <Copyable text="p-2 rounded-md bg-white border" /></p>
            </div>
          </div>
        </section>

        {/* 09 · Sidebar — interactive preview */}
        <section>
          <SectionTitle n="09" title="Sidebar" sub="Navy app-menu. Live preview — click enabled items. Disabled items are muted & inert." />
          <div className="grid gap-6 md:grid-cols-[16rem_1fr]">
            <div className="rounded-lg p-4 flex flex-col max-h-[500px] overflow-y-auto" style={{ backgroundColor: 'var(--odoo-brand)' }}>
              <div className="flex items-center gap-2.5 px-1 mb-6 mt-1">
                <div className="rounded-md p-2" style={{ backgroundColor: 'var(--odoo-accent)' }}><Zap className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} /></div>
                <h1 className="text-lg font-semibold tracking-tight text-white">Innovate Inc.</h1>
              </div>
              <nav className="space-y-0.5 flex-1">
                {SIDEBAR_ITEMS.map((item) => {
                  if (!item.enabled) {
                    return (
                      <div
                        key={item.title}
                        aria-disabled="true"
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white/30 cursor-not-allowed select-none"
                      >
                        <item.icon className="h-[18px] w-[18px]" /> {item.title}
                      </div>
                    )
                  }
                  const isActive = activeNav === item.title
                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveNav(item.title)}
                      className={`relative w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-left transition-colors ${
                        isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {isActive && <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full" style={{ backgroundColor: 'var(--odoo-accent)' }} />}
                      <item.icon className="h-[18px] w-[18px]" /> {item.title}
                    </button>
                  )
                })}
              </nav>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3 text-white/50">
                <div className="rounded-md bg-white/10 p-1.5"><Zap className="w-4 h-4" /></div>
                <span className="text-xs font-medium">Powered by Odoo 19</span>
              </div>
            </div>
            <div className="odoo-card p-6 space-y-4 text-sm">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Spec</p>
              <ul className="space-y-2 list-disc pl-5" style={{ color: 'var(--odoo-muted)' }}>
                <li>Surface: <code className="bg-gray-100 px-1 rounded">backgroundColor: var(--odoo-brand)</code> (#243742)</li>
                <li>Width: <code className="bg-gray-100 px-1 rounded">lg:w-64</code> · Drawer on mobile <code className="bg-gray-100 px-1 rounded">w-72 max-w-[80vw]</code></li>
                <li>Active item: <code className="bg-gray-100 px-1 rounded">bg-white/10 text-white</code> + sand accent bar</li>
                <li>Idle item: <code className="bg-gray-100 px-1 rounded">text-white/70 hover:bg-white/5</code></li>
                <li>Disabled item: <code className="bg-gray-100 px-1 rounded">text-white/30 cursor-not-allowed</code> (inert)</li>
                <li>Item padding: <code className="bg-gray-100 px-1 rounded">px-3 py-2 rounded-md text-sm</code></li>
                <li>Icon size: <code className="bg-gray-100 px-1 rounded">h-[18px] w-[18px]</code></li>
                <li>Only <strong>Dashboard</strong> &amp; <strong>Design System</strong> are enabled today.</li>
              </ul>
              <p className="font-semibold pt-2" style={{ color: 'var(--odoo-ink)' }}>Mobile top bar</p>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: 'var(--odoo-brand)' }}>
                <button className="p-2 rounded-md text-white/80 hover:bg-white/10"><Menu className="w-6 h-6" /></button>
                <div className="flex items-center gap-2">
                  <div className="rounded-md p-1.5" style={{ backgroundColor: 'var(--odoo-accent)' }}><Zap className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} /></div>
                  <h1 className="text-lg font-semibold tracking-tight text-white">Innovate Inc.</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 · Header pattern */}
        <section>
          <SectionTitle n="10" title="Page Header" sub="Greeting left, actions right (messages · notifications · avatar)." />
          <div className="odoo-card p-6">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="odoo-heading text-2xl">Good Morning, Alex!</h2>
                <p className="mt-1 text-sm" style={{ color: 'var(--odoo-muted)' }}>Friday, July 17, 2026 · 10:24 AM</p>
              </div>
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <button className="relative p-2 rounded-md bg-white border hover:bg-gray-50" style={{ borderColor: 'var(--odoo-line)' }} aria-label="Messages">
                  <MessageSquare className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} />
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center" style={{ backgroundColor: 'var(--odoo-brand)' }}>2</span>
                </button>
                <button className="relative p-2 rounded-md bg-white border hover:bg-gray-50" style={{ borderColor: 'var(--odoo-line)' }} aria-label="Notifications">
                  <Bell className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} />
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold ring-2 ring-white flex items-center justify-center">5</span>
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="relative flex items-center gap-2 rounded-md bg-white border hover:bg-gray-50 p-1 pr-3" style={{ borderColor: 'var(--odoo-line)' }}>
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full text-white font-semibold flex items-center justify-center text-sm" style={{ backgroundColor: 'var(--odoo-brand)' }}>A</div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                      </div>
                      <span className="text-sm font-semibold" style={{ color: 'var(--odoo-ink)' }}>Alex</span>
                      <ChevronDown className="w-4 h-4" style={{ color: 'var(--odoo-muted)' }} />
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
          <SectionTitle n="11" title="Stat Cards" sub="Top-line metrics — icon chip left, label + big number right." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="odoo-card p-5 flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm" style={{ color: 'var(--odoo-muted)' }}>Tasks Completed</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--odoo-ink)' }}>12 / 18</p>
              </div>
            </div>
            <div className="odoo-card p-5 flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: '#e8edf0' }}>
                <MessageSquare className="w-6 h-6" style={{ color: 'var(--odoo-brand)' }} />
              </div>
              <div>
                <p className="text-sm" style={{ color: 'var(--odoo-muted)' }}>Unread Messages</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--odoo-ink)' }}>5</p>
              </div>
            </div>
            <div className="odoo-card p-5 flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: '#fbf3e9' }}>
                <Newspaper className="w-6 h-6" style={{ color: '#b07d3f' }} />
              </div>
              <div>
                <p className="text-sm" style={{ color: 'var(--odoo-muted)' }}>News of the Day</p>
                <p className="text-2xl font-semibold" style={{ color: 'var(--odoo-ink)' }}>3</p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 · Quick-access tiles */}
        <section>
          <SectionTitle
            n="12"
            title="Quick-Access Tiles"
            sub="Neutral odoo-tile surface + a single colored lucide icon. No tinted backgrounds."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TILE_ICONS.map((c) => (
              <button
                key={c.name}
                onClick={() => toast(`${c.name} tile clicked`)}
                className="odoo-tile p-4 flex flex-col items-center gap-2 cursor-pointer"
              >
                <Zap className={`w-7 h-7 ${c.icon}`} />
                <p className="font-medium text-sm" style={{ color: 'var(--odoo-ink)' }}>{c.name}</p>
              </button>
            ))}
          </div>
        </section>

        {/* 13 · Sticky notes */}
        <section>
          <SectionTitle n="13" title="Sticky Notes" sub="Only used in the Bulletin Board widget — the one place pastels are allowed." />
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
              className="w-full bg-yellow-200 sticky-note rounded-lg p-4 text-gray-800 text-sm min-h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#243742]"
            />
          </div>
        </section>

        {/* 14 · Form fields */}
        <section>
          <SectionTitle n="14" title="Form Fields" sub="Text · Password · Search · Textarea · Select · Checkbox · Radio. Navy focus ring." />
          <div className="odoo-card p-6 max-w-2xl grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--odoo-ink)' }}>Username</label>
              <input type="text" placeholder="alex.doe" className="w-full px-3 py-2 rounded-md border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#243742]" style={{ borderColor: 'var(--odoo-line)' }} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--odoo-ink)' }}>Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-[#243742]" style={{ borderColor: 'var(--odoo-line)' }} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--odoo-ink)' }}>Search</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search anything..." className="w-full pl-9 pr-3 py-2 rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-[#243742]" style={{ borderColor: 'var(--odoo-line)' }} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--odoo-ink)' }}>Bio</label>
              <textarea rows={3} placeholder="Tell us about yourself..." className="w-full px-3 py-2 rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-[#243742] resize-none" style={{ borderColor: 'var(--odoo-line)' }} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: 'var(--odoo-ink)' }}>Department</label>
              <select className="w-full px-3 py-2 rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-[#243742]" style={{ borderColor: 'var(--odoo-line)' }}>
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm" style={{ color: 'var(--odoo-ink)' }}><input type="checkbox" defaultChecked className="w-4 h-4 accent-[#243742]" /> Notify me</label>
              <label className="flex items-center gap-2 text-sm" style={{ color: 'var(--odoo-ink)' }}><input type="radio" name="r" defaultChecked className="w-4 h-4 accent-[#243742]" /> Option A</label>
              <label className="flex items-center gap-2 text-sm" style={{ color: 'var(--odoo-ink)' }}><input type="radio" name="r" className="w-4 h-4 accent-[#243742]" /> Option B</label>
            </div>
            <div className="sm:col-span-2">
              <button className="odoo-btn odoo-btn-primary w-full px-4 py-2 text-sm">
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
              <div
                className="flex items-center justify-between p-3.5 rounded-lg border"
                style={{ backgroundColor: '#fbf3e9', borderColor: 'var(--odoo-accent)', borderLeftWidth: 3, borderLeftColor: 'var(--odoo-brand)', color: 'var(--odoo-ink)' }}
              >
                <div className="flex items-center gap-3 text-sm"><Megaphone className="w-5 h-5" style={{ color: 'var(--odoo-brand)' }} /><p><strong>Announcement:</strong> Town hall Friday 3PM.</p></div>
                <button aria-label="Dismiss"><X className="w-4 h-4" /></button>
              </div>
              <div className="flex items-start gap-3 bg-blue-50 text-blue-900 p-4 rounded-lg border border-blue-200">
                <Info className="w-5 h-5 mt-0.5" /><p className="text-sm"><strong>Info:</strong> New policy published.</p>
              </div>
              <div className="flex items-start gap-3 bg-emerald-50 text-emerald-900 p-4 rounded-lg border border-emerald-200">
                <CheckCircle className="w-5 h-5 mt-0.5" /><p className="text-sm"><strong>Success:</strong> Your changes were saved.</p>
              </div>
              <div className="flex items-start gap-3 bg-amber-50 text-amber-900 p-4 rounded-lg border border-amber-200">
                <AlertTriangle className="w-5 h-5 mt-0.5" /><p className="text-sm"><strong>Warning:</strong> Timesheet due tomorrow.</p>
              </div>
              <div className="flex items-start gap-3 bg-rose-50 text-rose-900 p-4 rounded-lg border border-rose-200">
                <AlertCircle className="w-5 h-5 mt-0.5" /><p className="text-sm"><strong>Error:</strong> Could not submit request.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="odoo-card p-4 space-y-3">
                <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Badges</p>
                <div className="flex flex-wrap gap-2">
                  <span className="odoo-chip bg-blue-50 text-blue-700">Info</span>
                  <span className="odoo-chip bg-emerald-50 text-emerald-700">Success</span>
                  <span className="odoo-chip bg-amber-50 text-amber-700">Warning</span>
                  <span className="odoo-chip bg-rose-50 text-rose-700">Danger</span>
                  <span className="odoo-chip bg-gray-100 text-gray-700">Neutral</span>
                  <span className="odoo-chip text-white" style={{ backgroundColor: 'var(--odoo-brand)' }}>New</span>
                </div>
              </div>
              <div className="odoo-card p-4 space-y-2">
                <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Toasts (sonner)</p>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => toast('Default toast')} className="odoo-btn odoo-btn-ghost px-3 py-1.5 text-sm">Default</button>
                  <button onClick={() => toast.success('Saved!')} className="odoo-btn px-3 py-1.5 text-sm text-white" style={{ backgroundColor: '#059669' }}>Success</button>
                  <button onClick={() => toast.error('Something failed')} className="odoo-btn px-3 py-1.5 text-sm text-white" style={{ backgroundColor: '#e11d48' }}>Error</button>
                  <button onClick={() => toast.info('FYI', { description: 'Extra detail here.' })} className="odoo-btn odoo-btn-primary px-3 py-1.5 text-sm">Info</button>
                </div>
              </div>
              <div className="odoo-card p-4 space-y-2">
                <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Avatars</p>
                <div className="flex items-center gap-2">
                  {['A','B','C','D'].map((l, i) => (
                    <div key={l} className="w-9 h-9 rounded-full text-white font-semibold flex items-center justify-center text-sm" style={{ backgroundColor: ['#243742','#3d5566','#6c757d','#495057'][i] }}>{l}</div>
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
            <div className="odoo-card p-6 flex flex-col items-start gap-3">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Dropdown</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="odoo-btn odoo-btn-ghost px-4 py-2 text-sm">
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

            <div className="odoo-card p-6 flex flex-col items-start gap-3">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Modal</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="odoo-btn odoo-btn-primary px-4 py-2 text-sm">
                    Open dialog
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fbf3e9' }}>
                        <GraduationCap className="w-5 h-5" style={{ color: '#b07d3f' }} />
                      </div>
                      <div>
                        <DialogTitle>Learning Resources</DialogTitle>
                        <DialogDescription>Standard modal pattern used app-wide.</DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>
                  <p className="text-sm" style={{ color: 'var(--odoo-muted)' }}>Solid white surface, rounded-lg, icon tile + title + description in header. Body content below.</p>
                </DialogContent>
              </Dialog>
            </div>

            <div className="odoo-card p-6 flex flex-col items-start gap-3 w-full">
              <p className="font-semibold" style={{ color: 'var(--odoo-ink)' }}>Tabs</p>
              <Tabs value={tab} onValueChange={setTab} className="w-full">
                <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="text-sm pt-2" style={{ color: 'var(--odoo-muted)' }}>Live preview content.</TabsContent>
                <TabsContent value="code" className="text-sm pt-2" style={{ color: 'var(--odoo-muted)' }}>
                  <code className="bg-gray-100 px-1 rounded">odoo-card p-5</code>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* 17 · List items (messages, notifications) */}
        <section>
          <SectionTitle n="17" title="List Items" sub="Message row · Notification row · Event row. Reuse verbatim." />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="odoo-card overflow-hidden">
              <div className="px-4 py-3 border-b font-semibold text-sm" style={{ borderColor: 'var(--odoo-line)', color: 'var(--odoo-ink)' }}>Messages</div>
              <ul>
                <li className="px-4 py-3 flex gap-3 border-b last:border-b-0 bg-slate-50 hover:bg-gray-50 cursor-pointer" style={{ borderColor: 'var(--odoo-line)' }}>
                  <div className="w-9 h-9 rounded-full text-white font-semibold flex items-center justify-center text-sm flex-shrink-0" style={{ backgroundColor: 'var(--odoo-brand)' }}>P</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between"><p className="text-sm font-semibold truncate" style={{ color: 'var(--odoo-ink)' }}>Priya Sharma</p><span className="text-[11px] text-gray-400">2m</span></div>
                    <p className="text-xs truncate" style={{ color: 'var(--odoo-muted)' }}>Can you review the deck?</p>
                  </div>
                  <span className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--odoo-brand)' }} />
                </li>
              </ul>
            </div>
            <div className="odoo-card overflow-hidden">
              <div className="px-4 py-3 border-b font-semibold text-sm" style={{ borderColor: 'var(--odoo-line)', color: 'var(--odoo-ink)' }}>Notifications</div>
              <ul>
                <li className="px-4 py-3 flex gap-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer" style={{ borderColor: 'var(--odoo-line)' }}>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0"><CheckCircle className="w-4 h-4" /></div>
                  <div className="flex-1 min-w-0"><p className="text-sm font-semibold" style={{ color: 'var(--odoo-ink)' }}>Task completed</p><p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>Design review approved · 5m ago</p></div>
                </li>
              </ul>
            </div>
            <div className="odoo-card overflow-hidden">
              <div className="px-4 py-3 border-b font-semibold text-sm" style={{ borderColor: 'var(--odoo-line)', color: 'var(--odoo-ink)' }}>Events</div>
              <ul>
                <li className="px-4 py-3 flex gap-3 hover:bg-gray-50 cursor-pointer">
                  <div className="w-10 rounded-lg flex flex-col items-center justify-center py-1 flex-shrink-0" style={{ backgroundColor: '#e8edf0', color: 'var(--odoo-brand)' }}>
                    <span className="text-[10px] font-semibold uppercase">Jul</span>
                    <span className="text-base font-bold leading-none">22</span>
                  </div>
                  <div className="flex-1 min-w-0"><p className="text-sm font-semibold" style={{ color: 'var(--odoo-ink)' }}>Product review</p><p className="text-xs" style={{ color: 'var(--odoo-muted)' }}>10:00 AM · Zoom</p></div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 18 · Icons */}
        <section>
          <SectionTitle n="18" title="Icons" sub="Only lucide-react. h-[18px] sidebar · w-5 h-5 inline · w-6 h-6 chips. Never emoji." />
          <div className="odoo-card p-6">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-4">
              {[LayoutDashboard, MessageCircle, Calendar, CheckSquare, BookOpen, ListTodo, Globe, FileQuestion, Users, LayoutGrid, Settings, Bell, Search, Plus, Trash2, Zap, Star, User, LogOut, ExternalLink].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center gap-1" style={{ color: 'var(--odoo-muted)' }}>
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 19 · Breakpoints */}
        <section>
          <SectionTitle n="19" title="Breakpoints" sub="Tailwind defaults — the only ones we use." />
          <div className="odoo-card overflow-hidden">
            <table className="w-full text-sm">
              <thead style={{ backgroundColor: 'var(--odoo-page)', color: 'var(--odoo-ink)' }}>
                <tr>
                  <th className="text-left p-3 font-semibold">Name</th>
                  <th className="text-left p-3 font-semibold">Range</th>
                  <th className="text-left p-3 font-semibold">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--odoo-line)' }}>
                {BREAKPOINTS.map((b) => (
                  <tr key={b.name}>
                    <td className="p-3 font-semibold" style={{ color: 'var(--odoo-ink)' }}>{b.name}</td>
                    <td className="p-3 font-mono" style={{ color: 'var(--odoo-muted)' }}>{b.range}</td>
                    <td className="p-3" style={{ color: 'var(--odoo-muted)' }}>{b.hint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 20 · Rules for AI */}
        <section>
          <SectionTitle n="20" title="Rules for the AI" sub="Follow verbatim when generating any new page (Odoo 19 theme)." />
          <div className="odoo-card p-6">
            <ol className="list-decimal pl-5 space-y-2 text-sm" style={{ color: 'var(--odoo-ink)' }}>
              <li>Page shell: <code className="bg-gray-100 px-1 rounded">&lt;div className="fixed inset-0 -z-10" style=&#123;&#123; backgroundColor: 'var(--odoo-page)' &#125;&#125; /&gt;</code> + <code className="bg-gray-100 px-1 rounded">Sidebar</code> + main in <code className="bg-gray-100 px-1 rounded">p-4 sm:p-6 lg:p-8</code>.</li>
              <li>Every widget/card uses <code className="bg-gray-100 px-1 rounded">odoo-card p-5</code>. Inset rows use <code className="bg-gray-100 px-1 rounded">odoo-tile p-3</code>.</li>
              <li>Primary action = <code className="bg-gray-100 px-1 rounded">odoo-btn odoo-btn-primary</code> (navy #243742). Secondary = <code className="bg-gray-100 px-1 rounded">odoo-btn-secondary</code> (sand). No other brand colors.</li>
              <li>Text hierarchy: <code className="bg-gray-100 px-1 rounded">var(--odoo-ink)</code> → <code className="bg-gray-100 px-1 rounded">var(--odoo-muted)</code>. Headings use <code className="bg-gray-100 px-1 rounded">.odoo-heading</code>. Never invent a gray.</li>
              <li>Icons: <code className="bg-gray-100 px-1 rounded">lucide-react</code> only. h-[18px] sidebar · w-5 h-5 inline · w-6 h-6 chips. No emoji.</li>
              <li>Radii: <code className="bg-gray-100 px-1 rounded">rounded-md</code> controls · <code className="bg-gray-100 px-1 rounded">rounded-lg</code> cards/tiles · <code className="bg-gray-100 px-1 rounded">rounded-full</code> avatars/dots.</li>
              <li>Status colors (emerald/blue/violet/amber/rose) only in icons, dots, badges — never as page or card backgrounds.</li>
              <li>Quick-access tiles: <code className="bg-gray-100 px-1 rounded">odoo-tile</code> + one colored lucide icon. No tinted tile backgrounds.</li>
              <li>Motion: <code className="bg-gray-100 px-1 rounded">fade-in</code> on section entry; cards lift their shadow on hover (built into <code className="bg-gray-100 px-1 rounded">.odoo-card</code>). No new keyframes.</li>
              <li>Sidebar: navy <code className="bg-gray-100 px-1 rounded">var(--odoo-brand)</code>; active <code className="bg-gray-100 px-1 rounded">bg-white/10</code> + sand accent bar; disabled items <code className="bg-gray-100 px-1 rounded">text-white/30</code> and inert.</li>
              <li>Header: greeting left (<code className="bg-gray-100 px-1 rounded">.odoo-heading text-2xl</code>), actions right. Icon buttons are white with a hairline border.</li>
              <li>Buttons: only primary, secondary, ghost, destructive, icon. Padding <code className="bg-gray-100 px-1 rounded">px-4 py-2</code>, <code className="bg-gray-100 px-1 rounded">rounded-md</code>, font-medium.</li>
              <li>Forms: inputs <code className="bg-gray-100 px-1 rounded">rounded-md border focus:ring-2 focus:ring-[#243742]</code>; labels <code className="bg-gray-100 px-1 rounded">text-sm font-semibold</code>.</li>
              <li>Feedback: use <code className="bg-gray-100 px-1 rounded">toast()</code> from sonner. Never <code className="bg-gray-100 px-1 rounded">alert()</code>.</li>
              <li>Modals: shadcn <code className="bg-gray-100 px-1 rounded">Dialog</code> · header = icon tile + title + description.</li>
              <li>Font: Inter (body) / Inter Tight (headings) — already loaded globally. Don't add other fonts.</li>
              <li>Every route sets a unique <code className="bg-gray-100 px-1 rounded">head()</code> title + description.</li>
              <li>Prefer CSS vars (<code className="bg-gray-100 px-1 rounded">var(--odoo-*)</code>) and the <code className="bg-gray-100 px-1 rounded">.odoo-*</code> classes over hardcoded hex where one exists.</li>
            </ol>
          </div>
        </section>

        <footer className="text-center text-sm pt-6" style={{ color: 'var(--odoo-muted)' }}>
          Innovate Inc. · Odoo 19 Design System · Keep it consistent.
        </footer>
      </main>
      </div>
    </div>
  )
}
