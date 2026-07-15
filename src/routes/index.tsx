import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Innovate Dashboard' },
      { name: 'description', content: 'Innovate Dashboard ported from GitHub repo hamzatarakhan/innovate-dashboard.' },
      { property: 'og:title', content: 'Innovate Dashboard' },
      { property: 'og:description', content: 'Innovate Dashboard ported from GitHub.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <iframe
      src="/dashboard/index.html"
      title="Innovate Dashboard"
      style={{ border: 0, width: '100vw', height: '100vh', display: 'block' }}
    />
  )
}
