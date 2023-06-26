import type { Meta, StoryObj } from '@storybook/react'
import { AdvancedButton } from './AdvancedButton'

const meta: Meta<typeof AdvancedButton> = {
  title: 'Molecules/Interactions/AdvancedButton',
  component: AdvancedButton,
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the advanced button
 */
export const Default: StoryObj<typeof AdvancedButton> = {
  args: {
    children: 'Default',
  },
}

/**
 * The loading state for the advanced button
 */
export const Loading: StoryObj<typeof AdvancedButton> = {
  args: {
    children: 'Loading',
    isLoading: true,
  },
}

export default meta
