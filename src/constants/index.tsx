import {
  LucideIcon,
  Book,
  User,
  Receipt,
  Tv,
  Sheet,
  LayoutDashboard,
  DollarSign,
} from 'lucide-react'

export const ROLES = {
  ADMIN: 'admin',
  STUDENT: 'student',
  TEACHER: 'teacher',
}

export const SIDEBAR = [
  {
    id: 6,
    title: 'Dashboard',
    permission: ['ADMIN', 'TEACHER'],
    icon: LayoutDashboard,
    path: '/dashboard',
    child: [],
  },
  {
    id: 7,
    title: 'Salary',
    permission: ['ADMIN'],
    icon: DollarSign,
    path: '/dashboard/salary',
    child: [],
  },
  {
    id: 1,
    title: 'Class Management',
    permission: ['ADMIN', 'TEACHER'],
    icon: Book,
    child: [
      {
        id: '1.1',
        title: 'Class',
        path: '/class',
        name: 'class',
      },
      {
        id: '1.2',
        title: 'Class Note Book',
        path: '/dashboard/class/note-book',
        name: 'note-book',
      },
    ],
  },
  {
    id: 2,
    title: 'User Management',
    permission: ['ADMIN', 'TEACHER'],
    icon: User,
    child: [
      {
        id: '2.1',
        title: 'User',
        path: '/dashboard/user',
        name: 'user',
      },
    ],
  },
  {
    id: 3,
    title: 'Billing',
    permission: ['ADMIN', 'TEACHER'],
    icon: Receipt,
    child: [
      {
        id: '3.1',
        title: 'Billing Management',
        path: '/dashboard/user/bill',
        name: 'billing',
      },
    ],
  },
  {
    id: 4,
    title: 'Device',
    permission: ['ADMIN', 'TEACHER'],
    icon: Tv,
    child: [
      {
        id: '4.1',
        title: 'Device Management',
        path: '/dashboard/device',
        name: 'device',
      },
    ],
  },
  {
    id: 5,
    title: 'Academic Transcript',
    permission: ['ADMIN', 'TEACHER'],
    icon: Sheet,
    child: [
      {
        id: '5.1',
        title: 'Math',
        path: '/dashboard/transcript/math',
        name: 'math',
      },
      {
        id: '5.2',
        title: 'Physics',
        path: '/dashboard/transcript/physics',
        name: 'physics',
      },
      {
        id: '5.3',
        title: 'Chemistry',
        path: '/dashboard/transcript/chemistry',
        name: 'chemistry',
      },
      {
        id: '5.4',
        title: 'Biology',
        path: '/dashboard/transcript/biology',
        name: 'biology',
      },
      {
        id: '5.5',
        title: 'Literature',
        path: '/dashboard/transcript/literature',
        name: 'literature',
      },
      {
        id: '5.6',
        title: 'Geography',
        path: '/dashboard/transcript/geography',
        name: 'geography',
      },
      {
        id: '5.7',
        title: 'History',
        path: '/dashboard/transcript/history',
        name: 'history',
      },
      {
        id: '5.8',
        title: 'Civics',
        path: '/dashboard/transcript/civics',
        name: 'civics',
      },
      {
        id: '5.9',
        title: 'Technology',
        path: '/dashboard/transcript/technology',
        name: 'technology',
      },
      {
        id: '5.10',
        title: 'Information Technology',
        path: '/dashboard/transcript/information-technology',
        name: 'information-technology',
      },
      {
        id: '5.11',
        title: 'Physical Education',
        path: '/dashboard/transcript/physical-education',
        name: 'physical-education',
      },
      {
        id: '5.12',
        title: 'English',
        path: '/dashboard/transcript/english',
        name: 'english',
      },
    ],
  },
]

export const DATE_FORMAT = {
  y: 'YYYY',
  ym1: 'YYYY-MM',
  ym2: 'YYYY/MM',
  ymd1: 'YYYY/MM/DD',
}

export const INIT_SEARCH_PARAMS = {
  page: '1',
  limit: '10',
}
