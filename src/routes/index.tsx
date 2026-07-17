import { createFileRoute } from '@tanstack/react-router'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { Header } from '@/components/dashboard/Header'
import { AnnouncementBanner } from '@/components/dashboard/AnnouncementBanner'
import { StatsRow } from '@/components/dashboard/StatsRow'
import { UpcomingEvents } from '@/components/dashboard/UpcomingEvents'
import { BlogsCarousel } from '@/components/dashboard/BlogsCarousel'
import { QuickAccess } from '@/components/dashboard/QuickAccess'
import { Surveys } from '@/components/dashboard/Surveys'
import { BulletinBoard } from '@/components/dashboard/BulletinBoard'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Innovate Inc. — Intranet' },
      { name: 'description', content: 'Innovate Inc. company intranet dashboard: announcements, events, blogs, quick links, surveys, and a bulletin board.' },
      { property: 'og:title', content: 'Innovate Inc. — Intranet' },
      { property: 'og:description', content: 'Company intranet dashboard for Innovate Inc.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="text-gray-800 relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 -z-10" />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Header />
          <AnnouncementBanner />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsRow />
            <UpcomingEvents />
            <BlogsCarousel />
            <QuickAccess />
            <Surveys />
            <BulletinBoard />
          </div>
        </main>
      </div>
    </div>
  )
}
