import { FC, useLayoutEffect, useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import { cn } from '@/lib/utils'

interface PaginationProps {
  currPage: number
  totalPage: number | null
  onChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ currPage, totalPage, onChange }) => {
  const [page, setPage] = useState<number>(() => currPage)

  const pages = [...Array(totalPage || 1).keys()].map((x) => x + 1)

  const onChangePage = (number: number) => {
    if (number !== page) {
      setPage(number)
      onChange(number)
    }
  }

  const nextPage = () => {
    setPage((curr) => {
      onChange(curr + 1)
      return curr + 1
    })
  }
  const prePage = () => {
    setPage((curr) => {
      onChange(curr - 1)
      return curr - 1
    })
  }

  useLayoutEffect(() => {
    setPage(currPage)
  }, [currPage])

  if (!totalPage && !currPage) return null

  return (
    <div className="flex items-center justify-end w-full">
      <ul className="flex items-center">
        <li>
          <button
            onClick={prePage}
            disabled={page === 1}
            className={cn(
              'min-w-[25px] h-[25px] leading-6 border border-transparent flex items-center justify-center text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-900 transition dark:text-gray-100',
              page === 1 &&
                'disabled:cursor-no-drop disabled:text-gray-400 dark:disabled:text-gray-400',
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </li>

        {pages.map((item: number) => (
          <li key={item}>
            <button
              className={cn(
                'min-w-[24px] h-6 text-sm leading-6 border border-transparent rounded-sm flex items-center justify-center text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-900 dark:text-gray-100',
                (page === item || currPage === item) &&
                  'border-zinc-900 text-zinc-900 dark:text-gray-100',
              )}
              onClick={() => onChangePage(item)}
            >
              {item}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={nextPage}
            disabled={page === totalPage}
            className={cn(
              'min-w-[25px] h-[25px] leading-6 border border-transparent flex items-center justify-center text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-900 transition dark:text-gray-100',
              page === totalPage &&
                'disabled:cursor-no-drop disabled:text-gray-400 dark:disabled:text-gray-400',
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
