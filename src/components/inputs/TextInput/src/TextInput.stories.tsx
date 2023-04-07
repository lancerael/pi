import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextInput } from './TextInput'

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

export const props = {
  title: 'Title',
  value: 'Test',
  onChange: () => console.log('clicked'),
}

const Template: ComponentStory<typeof TextInput> = () => (
  <TextInput {...props} />
)

export const Default = Template.bind({})
