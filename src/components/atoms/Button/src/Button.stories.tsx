import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button.types'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
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
