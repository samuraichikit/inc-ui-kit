import { ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './sidebarItem.module.scss'

type SidebarItemProps = {
  as?: ElementType // компонент ссылки, например Link из next/router
  children: ReactNode
  className?: string
  disabled?: boolean
  href: string // <SidebarItem as={NextLink} href="/profile">Профиль</SidebarItem>
}

export const SidebarItem = ({
  as: Component = 'a',
  children,
  className,
  disabled,
  href,
}: SidebarItemProps) => {
  const classNames = {
    item: clsx(s.item, className),
    link: clsx(s.link, disabled && s.disabled),
  }

  return (
    <li className={classNames.item}>
      <Component className={classNames.link} href={href}>
        {children}
      </Component>
    </li>
  )
}
