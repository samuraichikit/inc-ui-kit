import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

import { DropDownArrowIcon } from '../../assets/icons'
import { Typography } from '../typography'

export type SelectProps = {
  className?: string
  id?: string
  label?: string
  placeholder?: ReactNode
  small?: boolean
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  ({ children, className, id, label, placeholder, small, ...rest }, ref) => {
    const generatedId = useId()
    const idToUse = id ?? generatedId

    return (
      <div className={clsx(s.wrapper, className)}>
        {!!label && (
          <Typography asChild className={s.label} variant={'regular_text_14'}>
            <label htmlFor={idToUse}>{label}</label>
          </Typography>
        )}
        <SelectRadix.Root {...rest}>
          <SelectRadix.Trigger className={clsx(s.trigger, small && s.small)} id={idToUse} ref={ref}>
            <SelectRadix.Value placeholder={placeholder} />
            <DropDownArrowIcon className={s.dropDownArrowIcon} height={24} width={24} />
          </SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content
              className={clsx(s.content, small && s.small)}
              collisionPadding={0}
              position={'popper'}
            >
              <SelectRadix.Viewport className={s.viewport}>{children}</SelectRadix.Viewport>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </div>
    )
  }
)
