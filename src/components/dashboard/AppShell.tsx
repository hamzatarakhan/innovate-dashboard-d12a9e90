import { useState, type ReactNode } from 'react'
import { TopNavbar } from './TopNavbar'
import { Sidebar } from './Sidebar'

/**
 * App chrome that mirrors the Odoo 19 web client:
 * a fixed dark top navbar, a light left sidebar, and a scrolling content area.
 * Pages pass their own content (with padding) as children.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--odoo-page)', color: 'var(--odoo-ink)' }}
    >
      <TopNavbar onMenuClick={() => setOpen(true)} />
      <div className="flex flex-1 min-h-0">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
