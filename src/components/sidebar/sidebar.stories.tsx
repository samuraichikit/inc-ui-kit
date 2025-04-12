import type { Meta, StoryObj } from '@storybook/react'

import { HomeOutlineIcon, MyProfileIcon, PlusSquareOutlineIcon } from '../../assets'
import { Sidebar } from './Sidebar'
import { SidebarItem } from './sidebarItem'

const meta = {
  argTypes: {},
  component: Sidebar,
  tags: ['autodocs'],
  title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const SidebarStory: Story = {
  args: {
    children: (
      <>
        <SidebarItem href={'#'}>
          <HomeOutlineIcon /> Home
        </SidebarItem>
        <SidebarItem href={'#'}>
          <PlusSquareOutlineIcon />
          Create
        </SidebarItem>
        <SidebarItem href={'#'}>
          <MyProfileIcon />
          MyProfile
        </SidebarItem>
      </>
    ),
  },
}
