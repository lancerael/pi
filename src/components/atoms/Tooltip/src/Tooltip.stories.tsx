import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { TooltipProps } from './Tooltip.types'

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
  argTypes: {
    x: {
      control: 'number',
    },
    y: {
      control: 'number',
    },
    isVisible: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <Tooltip {...args}>Tooltip</Tooltip>
)

export const Default = Template.bind({})
Default.args = {
  isVisible: true,
  x: 50,
  y: 20,
}
