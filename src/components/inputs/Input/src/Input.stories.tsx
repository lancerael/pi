import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    title: {
      control: 'text',
    },
    type: {
      options: ['text', 'number', 'color'],
      control: 'select',
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (props) => {
  const [value, setValue] = useState(props.value ?? '')
  return (
    <Input
      {...{ ...props, value }}
      onChange={({ target }) => setValue((target as HTMLInputElement).value)}
    />
  )
}

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  title: 'text label',
  value: 'text',
  onClick: () => console.log('clicked text input'),
}

export const Number = Template.bind({})
Number.args = {
  type: 'number',
  title: 'number label',
  value: 12345,
  onClick: () => console.log('clicked number input'),
}

export const Color = Template.bind({})
Color.args = {
  type: 'color',
  title: 'color label',
  value: '#336600',
  onClick: () => console.log('clicked color input'),
}
