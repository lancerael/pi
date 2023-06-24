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

/**
 * The default state for the loader
 */
export const Default: StoryObj<typeof Loader> = {
  args: {
    isLarge: false,
  },
}

/**
 * The large version of the loader
 */
export const Large: StoryObj<typeof Loader> = {
  args: {
    isLarge: true,
  },
}

export default meta
