import s from '../pagination.module.scss'

import { ArrowBackIcon, ArrowForwardIcon } from '../../../assets/icons'
import { PaginationProps } from '../Pagination'
import { NavigateButton } from '../navigateButton'

type Props = {
  paginationRange: (number | string)[]
} & Pick<PaginationProps, 'currentPage' | 'onPageChange'>

export const NavigationBlock = ({ currentPage, onPageChange, paginationRange }: Props) => {
  return (
    <div className={s.buttons}>
      <NavigateButton
        active={false}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowBackIcon />
      </NavigateButton>
      {paginationRange.map((page, index) => {
        const onPageClick = (btn: number) => () => {
          onPageChange(btn)
        }

        if (typeof page !== 'number') {
          return (
            <div className={s.dots} key={index}>
              &#8230;
            </div>
          )
        }

        return (
          <NavigateButton active={page === currentPage} key={index} onClick={onPageClick(page)}>
            {page}
          </NavigateButton>
        )
      })}
      <NavigateButton
        active={false}
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowForwardIcon />
      </NavigateButton>
    </div>
  )
}
