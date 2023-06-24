import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Interactions/Link',
  component: Link,
  argTypes: {
    href: {
      control: 'text',
    },
    $isExternal: {
      control: 'boolean',
    },
    $isMain: {
      control: 'boolean',
    },
    $isInactive: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Link> = {
  args: {
    href: 'https://www.google.com',
    $isExternal: true,
    children: 'Link',
    $isMain: false,
    $isInactive: false,
  },
}

/**
 * An inactive link
 */
export const Inactive: StoryObj<typeof Link> = {
  args: {
    href: 'https://www.google.com',
    $isInactive: true,
    children: 'Link',
  },
}

/**
 * The main navigation version of the link
 */
export const Main: StoryObj<typeof Link> = {
  args: {
    href: 'https://www.google.com',
    $isMain: true,
    $isExternal: true,
    children: 'Link',
  },
}

export default meta
