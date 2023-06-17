import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button.types'

const meta: Meta<typeof Button> = {
  title: 'Interactions/Button',
  component: Button,
  argTypes: {
    status: {
      options: ['default', 'pending', 'error', 'success'],
      control: 'radio',
    },
    disabled: {
      control: 'boolean',
    },
    isCompact: {
      control: 'boolean',
    },
    isSpecial: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Default',
    status: 'default',
    isCompact: false,
    isSpecial: false,
    disabled: false,
    dataSelector: 'pi-lib-button',
  },
}

export const Pending: StoryObj<typeof Button> = {
  args: {
    children: 'Pending',
    status: 'pending',
  },
}

export const Success: StoryObj<typeof Button> = {
  args: {
    children: 'Success',
    status: 'success',
  },
}

export const Error: StoryObj<typeof Button> = {
  args: {
    children: 'Error',
    status: 'error',
  },
}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const Special: StoryObj<typeof Button> = {
  args: {
    children: 'Special',
    isSpecial: true,
  },
}

export const Compact: StoryObj<typeof Button> = {
  args: {
    children: 'Compact',
    isCompact: true,
  },
}

export default meta
