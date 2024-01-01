import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { formatDistanceToNowStrict, format } from 'date-fns'
import locale from 'date-fns/locale/en-US'
import Cookies from 'js-cookie'

const isDebug = global.localStorage
  ? global.localStorage.getItem('debug') ?? false
  : false

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const formatDistanceLocale = {
  lessThanXSeconds: 'just now',
  xSeconds: 'just now',
  halfAMinute: 'just now',
  lessThanXMinutes: '{{count}}m',
  xMinutes: '{{count}}m',
  aboutXHours: '{{count}}h',
  xHours: '{{count}}h',
  xDays: '{{count}}d',
  aboutXWeeks: '{{count}}w',
  xWeeks: '{{count}}w',
  aboutXMonths: '{{count}}m',
  xMonths: '{{count}}m',
  aboutXYears: '{{count}}y',
  xYears: '{{count}}y',
  overXYears: '{{count}}y',
  almostXYears: '{{count}}y',
}

function formatDistance(token: string, count: number, options?: any): string {
  options = options || {}

  const result = formatDistanceLocale[
    token as keyof typeof formatDistanceLocale
  ].replace('{{count}}', count.toString())

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      if (result === 'just now') return result
      return result + ' ago'
    }
  }

  return result
}

export function formatTimeToNow(date: Date): string {
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: {
      ...locale,
      formatDistance,
    },
  })
}

export function formatDate(date: Date | number, dateFormat: string) {
  if (date) {
    return format(new Date(date), dateFormat)
  }

  return null
}

export const debug = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.log(...args)
  }
}

export const warn = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.warn(...args)
  }
}

export const danger = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.error(...args)
  }
}

export const setCookie = (key: string, values: any) => {
  if (typeof window !== 'undefined' && key) {
    Cookies.set(key, JSON.stringify(values))
  }
  return null
}

export const getDataCookie = (key: string) => {
  if (typeof window !== 'undefined' && key) {
    let result: any = {}
    const data = Cookies.get(key)
    if (data) {
      result = JSON.parse(data)
    }
    return result
  }
}

export const removeCookie = (key: string) => {
  if (typeof window !== 'undefined' && key) {
    Cookies.remove(key)
  }
}

export const no = (page: number, limit: number, index: number) => {
  if (page && limit) {
    const count = (page - 1) * limit + (index + 1)
    return count
  }
  return null
}

export const removeEmpty = (params: any) => {
  for (const key of Object.keys(params)) {
    if (
      params[key] === '' ||
      params[key] === null ||
      params[key] === undefined
    ) {
      delete params[key]
    }
  }
  return params
}

export const test = ''
