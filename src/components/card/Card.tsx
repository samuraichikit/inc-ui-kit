import { ComponentProps } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

type Props = ComponentProps<'div'>

export const Card = ({ className, ...props }: Props) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return <div className={classNames.root} {...props}></div>
}
