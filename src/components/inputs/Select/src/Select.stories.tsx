import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof Select> = {
  args: {
    label: 'Select label',
    options: [
      { content: 'Option 1', value: '1' },
      { content: 'Option 2', value: '2' },
    ],
  },
}

export default meta
