import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './defaultAvatar.module.scss'

import { ImageOutline } from '../../assets/icons'

type Props = {
  size?: number
} & ComponentPropsWithoutRef<'div'>

export const DefaultAvatar = forwardRef<HTMLDivElement, Props>(
  ({ className, size, ...rest }, ref) => {
    const classNames = {
      container: clsx(s.container, className),
    }

    return (
      <div className={classNames.container} ref={ref} {...rest}>
        <ImageOutline height={size} width={size} />
      </div>
    )
  }
)
