import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'

const defaultProps = {
  onChange: () => {},
  options: [{ content: 'test' }],
}

export default {
  title: 'Inputs/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = () => (
  <Select {...defaultProps} />
)

export const Default = Template.bind({})
