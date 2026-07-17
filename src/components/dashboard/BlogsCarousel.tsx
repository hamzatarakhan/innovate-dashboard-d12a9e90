import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { BLOGS } from '@/data/blogs'

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
