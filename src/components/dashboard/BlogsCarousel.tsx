import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { BLOGS } from '@/data/blogs'

export function BlogsCarousel() {
  const [current, setCurrent] = useState(0)
  const go = (i: number) => setCurrent((i + BLOGS.length) % BLOGS.length)
  return (
    <div className="lg:col-span-2 odoo-card p-5 fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="odoo-heading text-base">Latest Blogs</h3>
        <div className="flex gap-2">
          <button
            onClick={() => go(current - 1)}
            className="odoo-btn odoo-btn-ghost p-1.5"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(current + 1)}
            className="odoo-btn odoo-btn-ghost p-1.5"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {BLOGS.map((blog) => (
            <div key={blog.title} className="w-full flex-shrink-0 px-1">
              <img src={blog.cover} alt={blog.title} className="w-full h-28 object-cover rounded-lg mb-3" />
              <h4 className="font-semibold text-base" style={{ color: 'var(--odoo-ink)' }}>{blog.title}</h4>
              <p className="text-sm mt-1" style={{ color: 'var(--odoo-muted)' }}>{blog.excerpt}</p>
              <p className="text-xs mt-2" style={{ color: 'var(--odoo-muted)' }}>
                {blog.author} · {blog.date}
              </p>
              <Link
                to="/blogs/$slug"
                params={{ slug: blog.slug }}
                className="inline-flex items-center gap-1 mt-3 text-sm font-semibold hover:underline"
                style={{ color: 'var(--odoo-brand)' }}
              >
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {BLOGS.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ backgroundColor: i === current ? 'var(--odoo-brand)' : '#ced4da' }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
