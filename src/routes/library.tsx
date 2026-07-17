import { createFileRoute } from '@tanstack/react-router'
import { BookOpen } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/ComingSoon'

export const Route = createFileRoute('/library')({
  head: () => ({
    meta: [
      { title: 'Library — Innovate Inc.' },
      { name: 'description', content: 'Browse documents, guides, and resources.' },
    ],
  }),
  component: LibraryPage,
})

function LibraryPage() {
  return (
    <ComingSoon
      icon={BookOpen}
      title="Library"
      description="The company knowledge base is under construction. Soon you will be able to browse documents, guides, and shared resources."
    />
  )
}
