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
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof Link> = {
  args: {
    href: 'https://www.google.com',
    $isExternal: true,
    children: 'Link',
  },
}

export const Inactive: StoryObj<typeof Link> = {
  args: {
    href: 'https://www.google.com',
    $isInactive: true,
    children: 'Link',
  },
}

export const Main: StoryObj<typeof Link> = {
  args: {
    href: 'https://www.google.com',
    $isMain: true,
    $isExternal: true,
    children: 'Link',
  },
}

export default meta
