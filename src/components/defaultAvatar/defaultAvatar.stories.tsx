import { Meta, StoryObj } from '@storybook/react'

import { DefaultAvatar } from './'

const meta = {
  component: DefaultAvatar,
  tags: ['autodocs'],
  title: 'Components/DefaultAvatar',
} satisfies Meta<typeof DefaultAvatar>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultAvatarPrimary: Story = {
  args: {
    style: {
      maxWidth: '192px',
    },
  },
}
export const DefaultAvatarSecondary: Story = {
  args: {
    size: 15,
    style: {
      maxWidth: '36px',
    },
  },
}
