import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

const COLORS = ['bg-yellow-200', 'bg-green-200', 'bg-pink-200', 'bg-blue-200', 'bg-purple-200']

interface Note {
  id: number
  color: string
  text: string
}

export function BulletinBoard() {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, color: COLORS[0], text: '' },
  ])
  const [nextId, setNextId] = useState(2)

  const addNote = () => {
    setNotes([{ id: nextId, color: COLORS[Math.floor(Math.random() * COLORS.length)], text: '' }, ...notes])
    setNextId(nextId + 1)
  }

  const removeNote = (id: number) => setNotes(notes.filter((n) => n.id !== id))
  const updateNote = (id: number, text: string) =>
    setNotes(notes.map((n) => (n.id === id ? { ...n, text } : n)))

  return (
    <div className="md:col-span-2 lg:col-span-4 odoo-card p-5 fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="odoo-heading text-base">Digital Bulletin Board</h3>
        <button
          onClick={addNote}
          className="odoo-btn odoo-btn-primary px-4 py-2 text-sm"
        >
          <Plus className="w-4 h-4" /> Add Note
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-h-[150px]">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`sticky-note p-4 rounded-lg shadow-md h-40 flex flex-col justify-between ${note.color} fade-in`}
          >
            <textarea
              value={note.text}
              onChange={(e) => updateNote(note.id, e.target.value)}
              className="bg-transparent border-none focus:ring-0 focus:outline-none w-full h-full resize-none text-sm text-gray-800 p-0"
              placeholder="Type something..."
            />
            <button
              onClick={() => removeNote(note.id)}
              className="self-end text-gray-500 hover:text-red-500 p-1"
              aria-label="Delete note"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
