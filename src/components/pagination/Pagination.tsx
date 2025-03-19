import { ReactNode, memo } from 'react'

import clsx from 'clsx'

import s from './pagination.module.scss'

import { Typography } from '../typography'
import { NavigationBlock } from './navigationBlock'
import { PerPageSelect } from './perPageSelect'
import { usePagination } from './usePagination'

export type PaginationProps = {
  afterSelectContent?: ReactNode
  beforeSelectContent?: ReactNode
  className?: string
  currentPage: number
  onPageChange: (newPage: number) => void
  onPageSizeChange: (newPageSize: number) => void
  pageSize: number
  perPageOptions?: number[]
  showPerPageSelect?: boolean
  siblingCount?: number
  totalCount: number
}

export const Pagination = memo(
  ({
    afterSelectContent,
    beforeSelectContent,
    className,
    currentPage,
    onPageChange,
    onPageSizeChange,
    pageSize,
    perPageOptions,
    siblingCount,
    totalCount,
  }: PaginationProps) => {
    const classes = clsx(s.root, className)

    const paginationRange = usePagination({
      currentPage,
      pageSize,
      siblingCount,
      totalCount,
    })

    const showPerPageSelect = perPageOptions && perPageOptions?.length > 0

    return (
      <div className={classes}>
        <NavigationBlock
          currentPage={currentPage}
          onPageChange={onPageChange}
          paginationRange={paginationRange}
        />
        {showPerPageSelect && (
          <div className={s.selectBlock}>
            <Typography variant={'regular_text_14'}>{beforeSelectContent}</Typography>
            <PerPageSelect
              changeSelect={page => onPageSizeChange(Number(page))}
              className={s.select}
              perPageOptions={perPageOptions}
              selectValue={String(pageSize)}
            />
            <Typography variant={'regular_text_14'}>{afterSelectContent}</Typography>
          </div>
        )}
      </div>
    )
  }
)
