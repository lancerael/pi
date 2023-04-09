import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'Inputs/Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const props = {
  title: 'Title',
  value: 'Test',
  onChange: () => console.log('clicked'),
}

const Template: ComponentStory<typeof Input> = () => <Input {...props} />

export const Default = Template.bind({})
