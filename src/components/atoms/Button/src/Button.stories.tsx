import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button.types'

export default {
  title: 'Interactions/Button',
  component: Button,
  argTypes: {
    status: {
      options: ['default', 'pending', 'error', 'success'],
      control: 'select',
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
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
  status: 'default',
}

export const Pending = Template.bind({})
Pending.args = {
  children: 'Pending',
  status: 'pending',
}

export const Error = Template.bind({})
Error.args = {
  children: 'Error',
  status: 'error',
}

export const Success = Template.bind({})
Success.args = {
  children: 'Success',
  status: 'success',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  disabled: true,
}

export const Special = Template.bind({})
Special.args = {
  children: 'Special',
  isSpecial: true,
}

export const Compact = Template.bind({})
Compact.args = {
  children: 'Compact',
  isCompact: true,
}
