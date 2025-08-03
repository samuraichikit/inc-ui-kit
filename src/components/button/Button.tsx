import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

import s from './button.module.scss'

type Props = {
  asChild?: boolean
  fullWidth?: boolean
  variant?: 'icon' | 'outlined' | 'primary' | 'secondary' | 'text'
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ asChild, className, fullWidth, variant = 'primary', ...props }, ref) => {
    const classNames = {
      root: clsx(s.button, s[variant], fullWidth && s.fullWidth, className),
    }
    const Component = asChild ? Slot : 'button'

    return <Component className={classNames.root} ref={ref} {...props} />
  }
)

Button.displayName = 'Button'
