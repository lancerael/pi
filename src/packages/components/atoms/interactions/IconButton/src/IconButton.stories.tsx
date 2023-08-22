import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

const CLOUDFRONT_URL =
  import.meta.env.VITE_CLOUDFRONT_URL ?? '___CLOUDFRONT_URL___'

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
    isSmall: {
      control: 'boolean',
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
    src: `${CLOUDFRONT_URL}/info.svg`,
    isExternal: false,
    title: 'Button title',
    isSmall: false,
    dataSelector: 'pi-lib-icon-button',
  },
}

/**
 * An automatically colored version of the icon
 */
export const Colored: StoryObj<typeof IconButton> = {
  args: {
    src: `${CLOUDFRONT_URL}/info.svg`,
    $isStroked: true,
  },
}

/**
 * A smaller version of the button that opens a link in a new window
 */
export const Small: StoryObj<typeof IconButton> = {
  args: {
    href: 'https://www.google.com',
    src: `${CLOUDFRONT_URL}/info.svg`,
    isExternal: true,
    isSmall: true,
    $isStroked: true,
  },
}

export default meta
