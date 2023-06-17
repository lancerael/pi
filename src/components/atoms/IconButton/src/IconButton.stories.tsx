import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

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
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof IconButton> = {
  args: {
    href: 'https://www.google.com',
    src: 'https://cdn.svgporn.com/logos/github-icon.svg',
    isExternal: true,
  },
}

export const Small: StoryObj<typeof IconButton> = {
  args: {
    href: 'https://www.google.com',
    src: 'https://cdn.svgporn.com/logos/github-icon.svg',
    isExternal: true,
    isSmall: true,
  },
}

export default meta
