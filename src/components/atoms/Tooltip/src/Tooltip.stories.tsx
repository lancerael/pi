import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip } from './Tooltip'

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = () => (
  <Tooltip isVisible>Tooltip</Tooltip>
)

export const Default = Template.bind({})
