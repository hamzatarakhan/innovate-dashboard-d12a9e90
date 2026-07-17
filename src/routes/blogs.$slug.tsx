import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { BLOGS } from '@/data/blogs'

export const Route = createFileRoute('/blogs/$slug')({
  loader: ({ params }) => {
    const blog = BLOGS.find((b) => b.slug === params.slug)
    if (!blog) throw notFound()
    return { blog }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.blog.title} — Innovate Inc.` },
          { name: 'description', content: loaderData.blog.excerpt },
          { property: 'og:title', content: loaderData.blog.title },
          { property: 'og:description', content: loaderData.blog.excerpt },
          { property: 'og:image', content: loaderData.blog.cover },
        ]
      : [{ title: 'Blog not found' }, { name: 'robots', content: 'noindex' }],
  }),
  component: BlogDetail,
  notFoundComponent: BlogNotFound,
})

function BlogDetail() {
  const { blog } = Route.useLoaderData()
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>
        <img src={blog.cover} alt={blog.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{blog.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{blog.author} · {blog.date}</p>
        <div className="prose max-w-none space-y-4 text-gray-700 leading-relaxed">
          {blog.content.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
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
