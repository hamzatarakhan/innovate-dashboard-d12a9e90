import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BLOGS = [
  {
    title: 'Designing for Focus: Our New Branding Guide',
    category: 'Design',
    author: 'Priya Sharma',
    date: 'Jul 12, 2026',
    excerpt: 'How we rebuilt our visual identity around clarity, and what it means for every team.',
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Cutting Query Times by 30%',
    category: 'Engineering',
    author: 'Rohan Mehta',
    date: 'Jul 8, 2026',
    excerpt: 'A deep dive into the database optimizations powering our faster dashboards.',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop',
  },
  {
    title: '3 Years of Product Lessons',
    category: 'Product',
    author: 'Anjali Rao',
    date: 'Jul 1, 2026',
    excerpt: 'Reflections on shipping, listening to users, and growing with Innovate Inc.',
    cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop',
  },
]

export function BlogsCarousel() {
  const [current, setCurrent] = useState(0)
  const go = (i: number) => setCurrent((i + BLOGS.length) % BLOGS.length)
  return (
    <div className="lg:col-span-2 glassmorphism rounded-xl p-6 card-hover-effect fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Latest Blogs</h3>
        <div className="flex gap-2">
          <button
            onClick={() => go(current - 1)}
            className="p-1.5 rounded-full bg-white/80 hover:bg-gray-100 text-gray-600"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(current + 1)}
            className="p-1.5 rounded-full bg-white/80 hover:bg-gray-100 text-gray-600"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
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
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {blog.category}
              </span>
              <h4 className="font-bold text-lg mt-1">{blog.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{blog.excerpt}</p>
              <p className="text-xs text-gray-500 mt-2">
                {blog.author} · {blog.date}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {BLOGS.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
