import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/Interactions/IconButton',
  component: IconButton,

  tags: ['autodocs'],
}

/**
 * The default state for the button
 */
export const Default: StoryObj<typeof IconButton> = {
  args: {
    buttonProps: {
      href: 'http://www.google.com',
      isExternal: true,
      isSimple: false,
      title: 'Button title',
      dataTestid: 'pi-lib-icon-button',
    },
    iconProps: {
      src: `/info.svg`,
    },
  },
}

/**
 * The simple version of the button, with custom icon props
 */
export const Simple: StoryObj<typeof IconButton> = {
  args: {
    buttonProps: {
      isSimple: true,
    },
    iconProps: {
      src: `/info.svg`,
      height: '2rem',
      isFilled: true,
    },
  },
}

export default meta
