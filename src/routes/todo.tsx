import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { CheckSquare, Plus, Trash2 } from 'lucide-react'
import { PageShell } from '@/components/dashboard/PageShell'

export const Route = createFileRoute('/todo')({
  head: () => ({
    meta: [
      { title: 'To-do — Innovate Inc.' },
      { name: 'description', content: 'Track your personal tasks and priorities.' },
    ],
  }),
  component: TodoPage,
})

type Item = { id: number; text: string; done: boolean; tag: 'Today' | 'This week' | 'Later' }

const INITIAL: Item[] = [
  { id: 1, text: 'Review Q3 design system draft', done: false, tag: 'Today' },
  { id: 2, text: 'Reply to Priya about the onboarding flow', done: true, tag: 'Today' },
  { id: 3, text: 'Finalize hiring loop for senior PM role', done: false, tag: 'Today' },
  { id: 4, text: 'Prepare town hall talking points', done: false, tag: 'This week' },
  { id: 5, text: 'Book flights for the Berlin offsite', done: false, tag: 'This week' },
  { id: 6, text: 'Sketch out 2027 roadmap themes', done: false, tag: 'Later' },
]

const TAG_STYLE: Record<Item['tag'], string> = {
  Today: 'bg-blue-100 text-blue-700',
  'This week': 'bg-purple-100 text-purple-700',
  Later: 'bg-gray-100 text-gray-600',
}

function TodoPage() {
  const [items, setItems] = useState<Item[]>(INITIAL)
  const [draft, setDraft] = useState('')

  const add = () => {
    if (!draft.trim()) return
    setItems([{ id: Date.now(), text: draft.trim(), done: false, tag: 'Today' }, ...items])
    setDraft('')
  }

  const toggle = (id: number) => setItems(items.map((i) => (i.id === id ? { ...i, done: !i.done } : i)))
  const remove = (id: number) => setItems(items.filter((i) => i.id !== id))

  const done = items.filter((i) => i.done).length

  return (
    <PageShell
      icon={CheckSquare}
      title="To-do"
      description={`${done} of ${items.length} tasks complete`}
    >
      <div className="glassmorphism rounded-xl p-6 card-hover-effect">
        <div className="flex gap-2 mb-6">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && add()}
            placeholder="Add a task and press Enter…"
            className="flex-1 px-3 py-2 rounded-lg bg-white/70 border border-gray-200 text-sm focus:outline-none focus:border-blue-500"
          />
          <button onClick={add} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        <ul className="space-y-2">
          {items.map((i) => (
            <li key={i.id} className="flex items-center gap-3 p-3 rounded-lg bg-white/60 border border-gray-200/60">
              <input type="checkbox" checked={i.done} onChange={() => toggle(i.id)} className="w-4 h-4 accent-blue-600" />
              <span className={`flex-1 text-sm ${i.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>{i.text}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TAG_STYLE[i.tag]}`}>{i.tag}</span>
              <button onClick={() => remove(i.id)} aria-label="Delete" className="text-gray-400 hover:text-red-500 p-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
