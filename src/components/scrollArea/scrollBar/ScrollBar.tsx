import { ComponentProps } from 'react'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import clsx from 'clsx'

import s from './scrollBar.module.scss'

type ScrollBarProps = {
  orientation?: 'horizontal' | 'vertical'
} & ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>

const ScrollBar = ({ className, orientation = 'vertical', ...rest }: ScrollBarProps) => {
  const classNames = {
    scrollbar: clsx(s.scrollBar, className),
    thumb: s.thumb,
  }

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      {...rest}
      className={classNames.scrollbar}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className={classNames.thumb} />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollBar }
