import { ComponentProps, ReactNode, useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import { CheckIcon } from '../../assets/icons'
import { Typography } from '../typography'

type Props = {
  errorMessage?: string
  id?: string
  label?: ReactNode
} & ComponentProps<typeof CheckboxRadix.Root>

export const Checkbox = ({ className, errorMessage, id, label, ...props }: Props) => {
  const generatedId = useId()
  const idToUse = id ?? generatedId

  const classNames = {
    indicator: clsx(s.checkIndicator, props.disabled && s.disabled),
    indicatorWrapper: clsx(s.checkIndicatorWrapper, props.disabled && s.disabled),
    label: clsx(s.label, props.disabled && s.disabled),
    wrapper: clsx(s.wrapper, className),
  }

  return (
    <div className={classNames.wrapper}>
      <CheckboxRadix.Root className={s.checkRoot} id={idToUse} {...props}>
        <div className={classNames.indicatorWrapper}>
          <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </div>
      </CheckboxRadix.Root>
      {label && (
        <Typography asChild>
          <label className={classNames.label} htmlFor={idToUse}>
            {label}
          </label>
        </Typography>
      )}
      {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
    </div>
  )
}

Checkbox.displayName = CheckboxRadix.Root.displayName
