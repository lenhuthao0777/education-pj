import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    token: string
    role: string
  }

  interface Session {
    user: User & DefaultSession['user']
  }
}
