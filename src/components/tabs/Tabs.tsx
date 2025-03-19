import { ComponentProps } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabs.module.scss'

type TabsProps = ComponentProps<typeof TabsPrimitive.Root>
type TabsListProps = ComponentProps<typeof TabsPrimitive.List>
type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>
type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>

export const Tabs = ({ className, ...rest }: TabsProps) => {
  const classNames = {
    tabs: clsx(s.tabs, className),
  }

  return <TabsPrimitive.Root className={classNames.tabs} {...rest} />
}

export const TabsList = ({ ...rest }: TabsListProps) => {
  return <TabsPrimitive.List {...rest} />
}

export const TabsTrigger = ({ className, ...rest }: TabsTriggerProps) => {
  const classNames = {
    trigger: clsx(s.trigger, className),
  }

  return <TabsPrimitive.Trigger className={classNames.trigger} {...rest} />
}

export const TabsContent = ({ ...rest }: TabsContentProps) => {
  return <TabsPrimitive.Content {...rest} />
}
