import { ComponentPropsWithoutRef, ReactNode } from 'react'

import clsx from 'clsx'

import styles from '../dropdown.module.scss'

import { Typography } from '../../typography'
import { DropdownItem } from './dropdownItem'

export type DropdownItemWithIconProps = {
  caption: string
  icon: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownItem>
export const DropdownItemWithIcon = ({
  caption,
  className,
  disabled,
  icon,
  itemID,
  onSelect,
  ...rest
}: DropdownItemWithIconProps) => {
  const classNames = {
    item: clsx(styles.Item, className),
  }

  return (
    <DropdownItem
      disabled={disabled}
      itemID={itemID}
      onSelect={onSelect}
      {...rest}
      className={classNames.item}
    >
      {icon}
      <Typography variant={'small_text'}>{caption}</Typography>
    </DropdownItem>
  )
}
