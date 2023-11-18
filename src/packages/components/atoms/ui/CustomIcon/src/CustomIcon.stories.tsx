import type { Meta, StoryObj } from '@storybook/react'
import { CustomIcon } from './CustomIcon'
import { CustomIconProps } from './CustomIcon.types'

const render = (props: CustomIconProps) => (
  <CustomIcon {...props}>children</CustomIcon>
)

const meta: Meta<typeof CustomIcon> = {
  title: 'Atoms/UI/CustomIcon',
  component: CustomIcon,
  argTypes: {
    src: {
      control: 'text',
    },
    color: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    rotate: {
      control: 'number',
    },
    isFilled: {
      control: 'boolean',
    },
    isStroked: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof CustomIcon> = {
  args: {
    src: `/info.svg`,
    color: 'var(--special)',
    height: '1rem',
    rotate: 0,
    isFilled: false,
    isStroked: false,
  },
  render,
}

/**
 * A customised version of the component
 */
export const Customised: StoryObj<typeof CustomIcon> = {
  args: {
    src: `/info.svg`,
    color: 'var(--outline)',
    height: '1.2rem',
    rotate: 90,
    isFilled: true,
  },
  render,
}

export default meta
