import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { DismissableContent } from './DismissableContent'

const meta: Meta<typeof DismissableContent> = {
  title: 'Atoms/UI/DismissableContent',
  component: DismissableContent,
  argTypes: {
    isDismissed: {
      control: 'boolean',
    },
    isDismissable: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof DismissableContent> = {
  args: {
    children: 'Content',
    isDismissed: false,
    isDismissable: true,
    dismissCallback: action('closed'),
  },
}

/**
 * The dismissed version of the component
 */
export const Dismissed: StoryObj<typeof DismissableContent> = {
  args: {
    children: 'Content',
    isDismissed: true,
    isDismissable: true,
    dismissCallback: action('closed'),
  },
}

/**
 * The undismissable version of the component
 */
export const Undismissable: StoryObj<typeof DismissableContent> = {
  args: {
    children: 'Content',
    isDismissed: false,
    isDismissable: false,
  },
}

export default meta
