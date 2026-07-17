export type LearningLink = {
  title: string
  description: string
  url: string
}

// These simulate links an admin would add from the backend.
export const LEARNING_LINKS: LearningLink[] = [
  {
    title: 'Algorithms & Data Structures',
    description: 'Master the fundamentals with MIT OpenCourseWare.',
    url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
  },
  {
    title: 'System Design Primer',
    description: 'Learn to design large-scale systems from real-world examples.',
    url: 'https://github.com/donnemartin/system-design-primer',
  },
  {
    title: 'Leadership at Innovate',
    description: 'Internal leadership playbook for new managers.',
    url: 'https://example.com/innovate/leadership',
  },
  {
    title: 'Product Discovery Handbook',
    description: 'Talking to users, running experiments, shipping learnings.',
    url: 'https://example.com/innovate/product-discovery',
  },
]
