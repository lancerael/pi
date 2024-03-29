import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
  title: 'Molecules/UI/Toast',
  component: Toast,
  argTypes: {},
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Toast> = {
  args: {
    toasts: {
      default: {
        children: 'Contents',
        isDismissable: true,
        isDismissed: false,
      },
    },
  },
}

/**
 * Multiple toasts
 */
export const Multiple: StoryObj<typeof Toast> = {
  args: {
    toasts: {
      default: {
        children: 'Contents of toast 1',
      },
      secondary: {
        children: 'Contents of toast 2',
      },
    },
  },
}

/**
 * An undismissable toast
 */
export const Undismissable: StoryObj<typeof Toast> = {
  args: {
    toasts: {
      default: {
        children: 'Undismissable',
        isDismissable: false,
        isDismissed: false,
      },
    },
  },
}

/**
 * An timed toast
 */
export const Timed: StoryObj<typeof Toast> = {
  args: {
    toasts: {
      default: {
        children: 'Timed',
        isDismissable: true,
        isDismissed: false,
        timerInterval: 20000,
      },
    },
  },
}

/**
 * An dismissed toast
 */
export const Dismissed: StoryObj<typeof Toast> = {
  args: {
    toasts: {
      default: {
        children: 'Dismissed',
        isDismissable: true,
        isDismissed: true,
      },
    },
  },
}

export default meta
