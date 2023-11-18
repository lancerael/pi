import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/Interactions/IconButton',
  component: IconButton,
  argTypes: {
    href: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    isExternal: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    onPointerUp: { action: 'clicked' },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the button with a pointer up (click) handler
 */
export const Default: StoryObj<typeof IconButton> = {
  args: {
    href: 'http://www.google.com',
    src: `/info.svg`,
    isExternal: true,
    title: 'Button title',
    dataTestid: 'pi-lib-icon-button',
  },
}

export default meta
