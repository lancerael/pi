import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'Inputs/Select',
  component: Select,
  argTypes: {
    label: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (props) => <Select {...props} />

export const Default = Template.bind({})
Default.args = {
  label: 'Select label',
  options: [
    { content: 'Option 1', value: '1' },
    { content: 'Option 2', value: '2' },
  ],
}
