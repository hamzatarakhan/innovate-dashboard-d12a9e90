export type Message = {
  id: string
  from: string
  avatar: string
  preview: string
  time: string
  unread: boolean
}

export const MESSAGES: Message[] = [
  {
    id: 'm1',
    from: 'Priya Sharma',
    avatar: 'https://placehold.co/40x40/A78BFA/FFFFFF?text=PS',
    preview: 'Can you review the brand guide before the sync?',
    time: '5m',
    unread: true,
  },
  {
    id: 'm2',
    from: 'Rohan Mehta',
    avatar: 'https://placehold.co/40x40/60A5FA/FFFFFF?text=RM',
    preview: 'Pushed the query fix — let me know how it feels.',
    time: '1h',
    unread: true,
  },
  {
    id: 'm3',
    from: 'Anjali Rao',
    avatar: 'https://placehold.co/40x40/34D399/FFFFFF?text=AR',
    preview: 'Product review notes are in the doc.',
    time: '3h',
    unread: false,
  },
  {
    id: 'm4',
    from: 'IT Helpdesk',
    avatar: 'https://placehold.co/40x40/F87171/FFFFFF?text=IT',
    preview: 'Your ticket #4821 has been resolved.',
    time: '1d',
    unread: false,
  },
]
