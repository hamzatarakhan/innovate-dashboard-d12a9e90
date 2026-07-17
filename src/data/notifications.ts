export type Notification = {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: 'info' | 'success' | 'warning'
}

export const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    title: 'New policy update',
    message: 'Remote work policy v2.3 is now published.',
    time: '10 min ago',
    read: false,
    type: 'info',
  },
  {
    id: 'n2',
    title: 'Your leave was approved',
    message: 'PTO for Jul 25–28 approved by Priya S.',
    time: '2 hrs ago',
    read: false,
    type: 'success',
  },
  {
    id: 'n3',
    title: 'Security training due',
    message: 'Complete the annual training by Friday.',
    time: 'Yesterday',
    read: false,
    type: 'warning',
  },
  {
    id: 'n4',
    title: 'Welcome to Innovate Inc.',
    message: 'Take a moment to complete your profile.',
    time: '3 days ago',
    read: true,
    type: 'info',
  },
]
