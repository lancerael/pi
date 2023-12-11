import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { getDefaultColorVar } from './../../../../../styles/src/utilities/getDefaultColorVar/getDefaultColorVar'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/UI/Icon',
  component: Icon,
  argTypes: {
    iconName: {
      options: ['Chevron', 'Close', 'Cog', 'Ellipsis', 'Hamburger'],
      control: 'select',
    },
  },
  tags: ['autodocs'],
}

/**
 * A chevron icon
 */
export const Default: StoryObj<typeof Icon> = {
  args: {
    iconName: 'Chevron',
  },
}

/**
 * A close icon
 */
export const Close: StoryObj<typeof Icon> = {
  args: {
    iconName: 'Close',
  },
}

/**
 * A cog icon
 */
export const Cog: StoryObj<typeof Icon> = {
  args: {
    iconName: 'Cog',
  },
}

/**
 * A ellipsis icon
 */
export const Ellipsis: StoryObj<typeof Icon> = {
  args: {
    iconName: 'Ellipsis',
  },
}

/**
 * A hamburger icon
 */
export const Hamburger: StoryObj<typeof Icon> = {
  args: {
    iconName: 'Hamburger',
  },
}

/**
 * A larger icon with a different color
 */
export const Alternative: StoryObj<typeof Icon> = {
  args: {
    iconName: 'Hamburger',
    color: getDefaultColorVar('outline'),
    iconSize: '3rem',
  },
}

export default meta
