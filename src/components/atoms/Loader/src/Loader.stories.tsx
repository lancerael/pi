import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader,
  argTypes: {
    isLarge: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof Loader> = {
  args: {
    isLarge: false,
  },
}

export const Large: StoryObj<typeof Loader> = {
  args: {
    isLarge: true,
  },
}

export default meta
