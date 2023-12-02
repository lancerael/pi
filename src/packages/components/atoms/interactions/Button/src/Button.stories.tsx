import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Interactions/Button',
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
    isInverted: {
      control: 'boolean',
    },
    buttonSize: {
      options: ['small', 'medium', 'large'],
      control: 'radio',
    },
    onPointerUp: { action: 'clicked' },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the button
 */
export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Default',
    status: 'default',
    isCompact: false,
    isInverted: false,
    disabled: false,
    buttonSize: 'medium',
    dataTestid: 'pi-lib-button',
  },
}

/**
 * The pending state for the button
 */
export const Pending: StoryObj<typeof Button> = {
  args: {
    children: 'Pending',
    status: 'pending',
  },
}

/**
 * The success state for the button
 */
export const Success: StoryObj<typeof Button> = {
  args: {
    children: 'Success',
    status: 'success',
  },
}

/**
 * The error state for the button
 */
export const Error: StoryObj<typeof Button> = {
  args: {
    children: 'Error',
    status: 'error',
  },
}

/**
 * The disabled state for the button
 */
export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

/**
 * The special version of the button
 */
export const Special: StoryObj<typeof Button> = {
  args: {
    children: 'Special',
    isInverted: true,
  },
}

/**
 * The compact version of the button
 */
export const Compact: StoryObj<typeof Button> = {
  args: {
    children: 'Compact',
    isCompact: true,
  },
}

export default meta
