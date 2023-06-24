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

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Tooltip> = {
  args: {
    isVisible: true,
    x: 50,
    y: 20,
    children: 'Tooltip',
  },
}

/**
 * Repositioned component
 */
export const Repositioned: StoryObj<typeof Tooltip> = {
  args: {
    isVisible: true,
    x: 250,
    y: 20,
    children: 'Another tooltip',
  },
}

export default meta
