import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, Calendar } from 'lucide-react'
import { BLOGS, type Blog } from '@/data/blogs'
import { AppShell } from '@/components/dashboard/AppShell'


export const Route = createFileRoute('/blogs/$slug')({
  loader: ({ params }): { blog: Blog } => {
    const blog = BLOGS.find((b) => b.slug === params.slug)
    if (!blog) throw notFound()
    return { blog }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.blog.title} — Innovate Inc.` },
          { name: 'description', content: loaderData.blog.excerpt },
          { name: 'author', content: loaderData.blog.author },
          { property: 'article:published_time', content: loaderData.blog.createdAt },
          { property: 'article:modified_time', content: loaderData.blog.updatedAt },
          { property: 'og:type', content: 'article' },
          { property: 'og:title', content: loaderData.blog.title },
          { property: 'og:description', content: loaderData.blog.excerpt },
          { property: 'og:image', content: loaderData.blog.cover },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:image', content: loaderData.blog.cover },
        ]
      : [{ title: 'Blog not found' }, { name: 'robots', content: 'noindex' }],
  }),
  component: BlogDetail,
  notFoundComponent: BlogNotFound,
})

function BlogDetail() {
  const { blog } = Route.useLoaderData()

  return (
    <AppShell>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-full">
        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* Top bar: back only */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4" /> Back to dashboard
            </Link>
          </div>

          {/* Hero */}
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img src={blog.cover} alt={blog.title} className="w-full h-72 object-cover" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{blog.title}</h1>
          <p className="text-lg text-gray-600 mt-3">{blog.excerpt}</p>

          {/* Author + date */}
          <div className="flex flex-wrap items-center gap-4 mt-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img src={blog.authorAvatar} alt={blog.author} className="w-11 h-11 rounded-full" />
              <p className="font-semibold text-gray-900 text-sm">{blog.author}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 ml-auto">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={blog.createdAt}>{blog.date}</time>
              </span>
            </div>
          </div>

          {/* Body */}
          <article className="prose max-w-none mt-8 space-y-5 text-gray-700 leading-relaxed text-[17px]">
            {blog.content.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </article>
        </div>
      </div>
    </AppShell>
  )
}

function BlogNotFound() {
  return (
    <AppShell>
      <div className="min-h-full flex flex-col items-center justify-center gap-4 p-6 text-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
        <p className="text-gray-600">The post you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-600 font-semibold hover:text-blue-700">Back to dashboard</Link>
      </div>
    </AppShell>
  )
}

