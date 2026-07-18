import { createFileRoute } from '@tanstack/react-router'
import { AppShell } from '@/components/dashboard/AppShell'
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
    <AppShell>
      <div className="p-4 sm:p-6 lg:p-8">
        <Header />
        <AnnouncementBanner />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatsRow />
          <UpcomingEvents />
          <BlogsCarousel />
          <QuickAccess />
          <Surveys />
          <BulletinBoard />
        </div>
      </div>
    </AppShell>
  )
}
