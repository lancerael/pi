import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AdvancedButton } from './AdvancedButton'
import { AdvancedButtonProps } from './AdvancedButton.types';

export default {
  title: 'AdvancedButton',
  component: AdvancedButton,
  argTypes: {
    isLoading: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof AdvancedButton>

const Template: ComponentStory<typeof AdvancedButton> = (args: AdvancedButtonProps) => <AdvancedButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Loading = Template.bind({})
Loading.args = {
  children: 'Loading',
  isLoading: true,
}