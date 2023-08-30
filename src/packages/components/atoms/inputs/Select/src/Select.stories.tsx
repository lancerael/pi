import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Inputs/Select',
  component: Select,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default view for the select
 */
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
