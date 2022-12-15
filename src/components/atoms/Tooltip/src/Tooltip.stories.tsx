import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { TooltipProps } from './Tooltip.types'

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <Tooltip {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Tooltip',
  isVisible: 'default',
  x: 50,
  y: 20,
}
