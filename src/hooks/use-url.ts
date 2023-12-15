'use client'

import { useCallback, useLayoutEffect, useMemo } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { removeEmpty } from '@/lib/utils'
import { INIT_SEARCH_PARAMS } from '@/constants'

interface useUrlProps {
  init?: { page?: string | number; limit?: string | number } | any
}

const useUrl = (props: any) => {
  const searchParams = useSearchParams()

  const router = useRouter()

  const path = usePathname()

  const objQueries: any = useMemo(() => {
    let result: any = {
      page: INIT_SEARCH_PARAMS.page,
      limit: INIT_SEARCH_PARAMS.limit,
      ...props,
    }

    for (const [key, value] of searchParams.entries()) {
      result = {
        ...result,
        [key]: value,
      }
    }

    return removeEmpty(result)
  }, [searchParams.entries()])

  const setQueries = useCallback((queries: any) => {
    const current = new URLSearchParams(queries) // -> has to use this form
    Object.entries(queries).forEach(([key, value]) => {
      current.set(key, String(value))
    })
    const search = current.toString()
    const query = search ? `?${search}` : ''
    router.push(`${path}${query}`)
  }, [])

  useLayoutEffect(() => {
    setQueries({ ...objQueries, ...props })
  }, [])

  return { objQueries, setQueries }
}

export default useUrl
