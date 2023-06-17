import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AdvancedButton } from './AdvancedButton'

const meta: Meta<typeof AdvancedButton> = {
  title: 'Interactions/AdvancedButton',
  component: AdvancedButton,
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof AdvancedButton> = {
  args: {
    children: 'Default',
  },
}

export const Loading: StoryObj<typeof AdvancedButton> = {
  args: {
    children: 'Loading',
    isLoading: true,
  },
}

export default meta
