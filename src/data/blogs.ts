export type Blog = {
  slug: string
  title: string
  category: string
  author: string
  date: string
  excerpt: string
  cover: string
  content: string[]
}

export const BLOGS: Blog[] = [
  {
    slug: 'designing-for-focus',
    title: 'Designing for Focus: Our New Branding Guide',
    category: 'Design',
    author: 'Priya Sharma',
    date: 'Jul 12, 2026',
    excerpt: 'How we rebuilt our visual identity around clarity, and what it means for every team.',
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80&auto=format&fit=crop',
    content: [
      'Over the last quarter our design team went back to first principles and asked a simple question: what should our brand feel like when someone is deep in work?',
      'The answer shaped every decision — from typography to spacing to the way our dashboards greet you in the morning. This post walks through the guide, the trade-offs we made, and how each team can use it day to day.',
      'We hope it helps you ship with more confidence and less noise.',
    ],
  },
  {
    slug: 'cutting-query-times',
    title: 'Cutting Query Times by 30%',
    category: 'Engineering',
    author: 'Rohan Mehta',
    date: 'Jul 8, 2026',
    excerpt: 'A deep dive into the database optimizations powering our faster dashboards.',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop',
    content: [
      'When our dashboards started feeling sluggish, we traced most of the pain to a handful of hot queries. Here is how we rebuilt them.',
      'We introduced covering indexes, moved a few aggregations to materialized views, and rewrote the busiest joins to use lateral subqueries. The result: median load times dropped by 30% across the board.',
      'The bigger lesson: measure first, tune second, and always keep an eye on the p99.',
    ],
  },
  {
    slug: 'three-years-of-product-lessons',
    title: '3 Years of Product Lessons',
    category: 'Product',
    author: 'Anjali Rao',
    date: 'Jul 1, 2026',
    excerpt: 'Reflections on shipping, listening to users, and growing with Innovate Inc.',
    cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop',
    content: [
      'Three years in, a few lessons keep showing up: talk to users weekly, ship the smallest useful thing, and never underestimate the compounding value of good defaults.',
      'This post is a candid look at the wins, the misses, and the habits I would keep if I started over tomorrow.',
    ],
  },
]
