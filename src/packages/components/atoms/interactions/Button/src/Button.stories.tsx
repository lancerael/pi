import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Interactions/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
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
    isShadowed: false,
    disabled: false,
    boxName: 'default',
    buttonSize: 'medium',
    dataTestid: 'pi-lib-button',
  },
}

/**
 * The default state for the button inverted
 */
export const Inverted: StoryObj<typeof Button> = {
  args: {
    children: 'Inverted',
    isInverted: true,
  },
}

/**
 * The special version of the button
 */
export const Special: StoryObj<typeof Button> = {
  args: {
    children: 'Special',
    boxName: 'alt',
  },
}

/**
 * The light version of the button
 */
export const Light: StoryObj<typeof Button> = {
  args: {
    children: 'Light',
    boxName: 'light',
  },
}

/**
 * The dark version of the button
 */
export const Dark: StoryObj<typeof Button> = {
  args: {
    children: 'Dark',
    boxName: 'light',
    isInverted: true,
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
 * The simple unstyled state for the button
 */
export const Simple: StoryObj<typeof Button> = {
  args: {
    children: 'Simple',
    isSimple: true,
  },
}

/**
 * The link version of the button shown with an external link
 */
export const Link: StoryObj<typeof Button> = {
  args: {
    children: 'Link',
    isExternal: true,
    href: 'http://www.google.com',
  },
}

/**
 * The default state for the button with a shadow
 */
export const Shadowed: StoryObj<typeof Button> = {
  args: {
    children: 'Shadowed',
    isShadowed: true,
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
 * The inline version of the button
 */
export const Inline: StoryObj<typeof Button> = {
  args: {
    children: 'Inline',
    isInline: true,
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
