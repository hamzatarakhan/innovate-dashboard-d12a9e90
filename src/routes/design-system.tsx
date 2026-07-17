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
} from 'lucide-react'

export const Route = createFileRoute('/design-system')({
  head: () => ({
    meta: [
      { title: 'Design System — Innovate Inc.' },
      {
        name: 'description',
        content:
          'The exact colors, surfaces, typography, radii and components used across the Innovate Inc. intranet — the single source of truth for every new page.',
      },
    ],
  }),
  component: DesignSystemPage,
})

// ---------- Real tokens actually used in this project ----------
const BG_GRADIENT = 'from-blue-100 via-purple-100 to-pink-100'

const BRAND = [
  { name: 'Brand / Primary', cls: 'bg-blue-600', hex: '#2563eb', use: 'Logo tile, active nav, primary buttons' },
  { name: 'Brand Hover', cls: 'bg-blue-700', hex: '#1d4ed8', use: 'Primary button hover' },
  { name: 'Brand Tint', cls: 'bg-blue-50', hex: '#eff6ff', use: 'Nav hover background' },
  { name: 'Brand Text', cls: 'text-blue-600', hex: '#2563eb', use: 'Nav hover text, links' },
]

const TEXT_SCALE = [
  { name: 'Heading', cls: 'text-gray-900', hex: '#111827', use: 'Page titles, greetings' },
  { name: 'Body', cls: 'text-gray-800', hex: '#1f2937', use: 'Default body text' },
  { name: 'Nav / Muted body', cls: 'text-gray-600', hex: '#4b5563', use: 'Sidebar links, secondary body' },
  { name: 'Caption', cls: 'text-gray-500', hex: '#6b7280', use: 'Meta info, date/time, hints' },
  { name: 'Disabled', cls: 'text-gray-400', hex: '#9ca3af', use: 'Placeholder, disabled' },
]

const STATUS = [
  { name: 'Success', cls: 'text-green-500', hex: '#22c55e', use: 'Tasks completed, positive stats' },
  { name: 'Info', cls: 'text-blue-500', hex: '#3b82f6', use: 'Messages, informational icons' },
  { name: 'Accent', cls: 'text-indigo-500', hex: '#6366f1', use: 'Weather, secondary highlight' },
  { name: 'Warning', cls: 'text-yellow-500', hex: '#eab308', use: 'Attention, badges' },
  { name: 'Danger', cls: 'text-red-500', hex: '#ef4444', use: 'Errors, destructive actions' },
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
  const [note, setNote] = useState('This is a sticky note')

  return (
    <div className="text-gray-800 relative min-h-screen">
      <div className={`fixed inset-0 bg-gradient-to-br ${BG_GRADIENT} -z-10`} />

      <main className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-10 space-y-14">
        {/* Hero */}
        <header className="glassmorphism rounded-xl p-8 fade-in">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" /> Innovate Inc. · Design System v1
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            The look & feel of every page
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            This is a mirror of the tokens actually used across the dashboard, login,
            blog details and quick-access pages. Every new page must reuse these — no
            new colors, no ad-hoc shadows, no off-brand fonts.
          </p>
        </header>

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

        {/* 02 · Brand */}
        <section>
          <SectionTitle n="02" title="Brand Color — Blue 600" sub="The only brand color. Use it for primary actions, active nav, and the logo tile." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND.map((c) => (
              <div key={c.cls} className="glassmorphism rounded-xl overflow-hidden">
                <div className={`${c.cls} h-20 flex items-center justify-center`}>
                  <span className="text-white font-mono text-sm">{c.hex}</span>
                </div>
                <div className="p-3 space-y-1">
                  <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.use}</p>
                  <Copyable text={c.cls} />
                </div>
              </div>
            ))}
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
          <SectionTitle n="04" title="Status & Accent Colors" sub="Only for icons and inline badges — never as page backgrounds." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {STATUS.map((s) => (
              <div key={s.cls} className="glassmorphism rounded-xl p-4 flex flex-col items-start gap-2">
                <CheckCircle className={`${s.cls} w-8 h-8`} />
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
              <p className="text-sm text-gray-500 mt-1">Default surface for widgets on the dashboard.</p>
              <div className="mt-4"><Copyable text="glassmorphism rounded-xl p-6" /></div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-semibold text-gray-900">Solid white</p>
              <p className="text-sm text-gray-500 mt-1">Use inside modals, popovers, dropdowns.</p>
              <div className="mt-4"><Copyable text="bg-white rounded-xl border border-gray-200" /></div>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-gray-200/50">
              <p className="font-semibold text-gray-900">Sidebar surface</p>
              <p className="text-sm text-gray-500 mt-1">Sidebar, mobile top bar, sticky headers.</p>
              <div className="mt-4"><Copyable text="bg-white/70 backdrop-blur-lg border-gray-200/50" /></div>
            </div>
          </div>
        </section>

        {/* 06 · Radii & elevation */}
        <section>
          <SectionTitle n="06" title="Radius & Motion" sub="Two radii. Two motion classes. Nothing else." />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="glassmorphism rounded-xl p-6 space-y-3">
              <p className="font-semibold text-gray-900">Radii</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-600 rounded-lg" />
                <span className="text-sm text-gray-600">rounded-lg — buttons, nav links, inputs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-600 rounded-xl" />
                <span className="text-sm text-gray-600">rounded-xl — all cards & widgets</span>
              </div>
            </div>
            <div className="glassmorphism rounded-xl p-6 space-y-3">
              <p className="font-semibold text-gray-900">Motion utilities</p>
              <div className="card-hover-effect rounded-lg bg-white p-3 text-sm text-gray-700 border border-gray-200">
                <code>card-hover-effect</code> — lifts card on hover
              </div>
              <div className="fade-in rounded-lg bg-white p-3 text-sm text-gray-700 border border-gray-200">
                <code>fade-in</code> — 0.5s entrance fade + rise
              </div>
              <div className="sticky-note rounded-lg bg-yellow-200 p-3 text-sm text-yellow-900">
                <code>sticky-note</code> — rotate + scale on hover
              </div>
            </div>
          </div>
        </section>

        {/* 07 · Buttons */}
        <section>
          <SectionTitle n="07" title="Buttons" sub="Only these variants exist. Do not invent new button styles." />
          <div className="glassmorphism rounded-xl p-6 flex flex-wrap gap-3 items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
              Primary
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-4 py-2 rounded-lg border border-gray-300 transition-colors">
              Secondary
            </button>
            <button className="text-blue-600 hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg transition-colors">
              Ghost
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
              Destructive
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-700" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* 08 · Nav link */}
        <section>
          <SectionTitle n="08" title="Sidebar Nav Item" sub="Exact spec used in the sidebar." />
          <div className="bg-white/70 backdrop-blur-lg border border-gray-200/50 rounded-xl p-4 max-w-xs space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 text-white bg-blue-600 rounded-lg font-semibold">
              <LayoutDashboard className="w-5 h-5" /> Dashboard (active)
            </a>
            <a className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer">
              <Calendar className="w-5 h-5" /> Calendar (idle)
            </a>
          </div>
        </section>

        {/* 09 · Stats */}
        <section>
          <SectionTitle n="09" title="Stat Card" sub="Used on the dashboard for top-line metrics." />
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

        {/* 10 · Tinted quick-access */}
        <section>
          <SectionTitle
            n="10"
            title="Tinted Category Cards"
            sub="Used in Quick Access. Pair bg-*-100/50 with text-*-800 and text-*-600 icon."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TINTED_CARDS.map((c) => (
              <div
                key={c.name}
                className={`${c.bg} rounded-xl p-4 flex flex-col items-center gap-2 card-hover-effect cursor-pointer`}
              >
                <Zap className={`w-6 h-6 ${c.icon}`} />
                <p className={`${c.text} font-semibold text-sm`}>{c.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11 · Sticky notes */}
        <section>
          <SectionTitle n="11" title="Sticky Notes" sub="Used only in the Bulletin Board widget." />
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
            <p className="text-xs text-gray-500 mt-1">Try editing — same pattern used in BulletinBoard.tsx.</p>
          </div>
        </section>

        {/* 12 · Typography */}
        <section>
          <SectionTitle n="12" title="Typography" sub="System sans (Inter-like default). Only these sizes." />
          <div className="glassmorphism rounded-xl p-6 space-y-4">
            <p className="text-3xl font-bold text-gray-900">Page greeting — text-3xl font-bold</p>
            <p className="text-2xl font-bold text-gray-900">Card metric — text-2xl font-bold</p>
            <p className="text-xl font-bold text-gray-900">Widget title — text-xl font-bold</p>
            <p className="text-base text-gray-800">Body copy — text-base text-gray-800</p>
            <p className="text-sm text-gray-500">Caption / meta — text-sm text-gray-500</p>
          </div>
        </section>

        {/* 13 · Form */}
        <section>
          <SectionTitle n="13" title="Form Fields" sub="Used on login & preferences." />
          <div className="glassmorphism rounded-xl p-6 max-w-md space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
              <input
                type="text"
                placeholder="alex.doe"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
              Log in
            </button>
          </div>
        </section>

        {/* 14 · Rules for AI */}
        <section>
          <SectionTitle n="14" title="Rules for the AI" sub="Follow verbatim when generating any new page." />
          <div className="glassmorphism rounded-xl p-6">
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-800">
              <li>Page shell: fixed gradient <code className="bg-gray-100 px-1 rounded">bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100</code> + <code className="bg-gray-100 px-1 rounded">Sidebar</code> + main content in <code className="bg-gray-100 px-1 rounded">p-4 sm:p-6 lg:p-8</code>.</li>
              <li>Every widget/card uses <code className="bg-gray-100 px-1 rounded">glassmorphism rounded-xl p-6</code>. Add <code className="bg-gray-100 px-1 rounded">card-hover-effect</code> when interactive.</li>
              <li>Brand action = <code className="bg-gray-100 px-1 rounded">bg-blue-600 hover:bg-blue-700 text-white</code>. No other primary color.</li>
              <li>Text hierarchy: gray-900 headings → gray-800 body → gray-600 secondary → gray-500 captions. Never other grays.</li>
              <li>Icons from <code className="bg-gray-100 px-1 rounded">lucide-react</code>: w-5 h-5 inline, w-10 h-10 for stat cards. Never emoji.</li>
              <li>Radii: <code className="bg-gray-100 px-1 rounded">rounded-lg</code> for controls, <code className="bg-gray-100 px-1 rounded">rounded-xl</code> for cards. No rounded-2xl / rounded-full except avatars.</li>
              <li>Status colors (green/blue/indigo/yellow/red-500) only inside icons or badges — never as backgrounds.</li>
              <li>Tinted category tiles pair <code className="bg-gray-100 px-1 rounded">bg-{`{c}`}-100/50</code> + <code className="bg-gray-100 px-1 rounded">text-{`{c}`}-800</code> + <code className="bg-gray-100 px-1 rounded">text-{`{c}`}-600</code> icon.</li>
              <li>Motion: <code className="bg-gray-100 px-1 rounded">fade-in</code> on section entry, <code className="bg-gray-100 px-1 rounded">card-hover-effect</code> on hover. No custom keyframes.</li>
              <li>Feedback: use <code className="bg-gray-100 px-1 rounded">toast()</code> from sonner. Never <code className="bg-gray-100 px-1 rounded">alert()</code>.</li>
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
  )
}
