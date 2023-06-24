import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

const src = 'https://d3bjzq1zo2el1w.cloudfront.net/add-row.svg'

const meta: Meta<typeof IconButton> = {
  title: 'Interactions/IconButton',
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
    src,
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
    src,
    $isStroked: true,
  },
}

/**
 * A smaller version of the button that opens a link in a new window
 */
export const Small: StoryObj<typeof IconButton> = {
  args: {
    href: 'https://www.google.com',
    src,
    isExternal: true,
    isSmall: true,
    $isStroked: true,
  },
}

export default meta
