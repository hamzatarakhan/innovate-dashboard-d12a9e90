import { useMemo, useState } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, Search, Calendar, Clock, Share2, Copy, Check, Twitter, Linkedin } from 'lucide-react'
import { BLOGS, type Blog } from '@/data/blogs'

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
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return BLOGS.filter(
      (b) =>
        b.slug !== blog.slug &&
        (b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))),
    )
  }, [query, blog.slug])

  const related = BLOGS.filter((b) => b.slug !== blog.slug).slice(0, 2)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Top bar: back + search */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 shrink-0">
            <ArrowLeft className="w-4 h-4" /> Back to dashboard
          </Link>
          <div className="relative flex-1 sm:max-w-md sm:ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blogs..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            {query.trim() && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                {results.length === 0 ? (
                  <p className="px-3 py-3 text-sm text-gray-500">No matches for “{query}”.</p>
                ) : (
                  <ul>
                    {results.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to="/blogs/$slug"
                          params={{ slug: r.slug }}
                          onClick={() => setQuery('')}
                          className="block px-3 py-2 hover:bg-blue-50"
                        >
                          <p className="text-sm font-semibold text-gray-900">{r.title}</p>
                          <p className="text-xs text-gray-500">{r.category} · {r.date}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hero */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img src={blog.cover} alt={blog.title} className="w-full h-72 object-cover" />
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-600 uppercase tracking-wider">
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{blog.title}</h1>
        <p className="text-lg text-gray-600 mt-3">{blog.excerpt}</p>

        {/* Author + meta */}
        <div className="flex flex-wrap items-center gap-4 mt-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img src={blog.authorAvatar} alt={blog.author} className="w-11 h-11 rounded-full" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">{blog.author}</p>
              <p className="text-xs text-gray-500">{blog.authorRole}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500 ml-auto">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={blog.createdAt}>{blog.date}</time>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {blog.readTime}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {blog.tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
              #{t}
            </span>
          ))}
        </div>

        {/* Body */}
        <article className="prose max-w-none mt-8 space-y-5 text-gray-700 leading-relaxed text-[17px]">
          {blog.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        {/* Share */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-gray-700 inline-flex items-center gap-1">
            <Share2 className="w-4 h-4" /> Share:
          </span>
          <button
            onClick={copyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy link'}
          </button>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
          >
            <Twitter className="w-4 h-4" /> Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Related posts</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blogs/$slug"
                  params={{ slug: r.slug }}
                  className="glassmorphism rounded-xl p-4 hover:shadow-lg transition-shadow"
                >
                  <img src={r.cover} alt={r.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{r.category}</span>
                  <p className="font-bold mt-1 text-gray-900">{r.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{r.author} · {r.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function BlogNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-bold">Blog not found</h1>
      <p className="text-gray-600">The post you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 font-semibold hover:text-blue-700">Back to dashboard</Link>
    </div>
  )
}
