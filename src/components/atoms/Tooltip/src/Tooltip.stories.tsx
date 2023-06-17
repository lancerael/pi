import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  argTypes: {
    x: {
      control: 'number',
    },
    y: {
      control: 'number',
    },
    isVisible: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof Tooltip> = {
  args: {
    isVisible: true,
    x: 50,
    y: 20,
    children: 'Tooltip',
  },
}

export default meta
