import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Loader } from './Loader'
import { LoaderProps } from './Loader.types'

export default {
  title: 'UI/Loader',
  component: Loader,
  argTypes: {
    isLarge: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args: LoaderProps) => (
  <Loader {...args} />
)

export const Default = Template.bind({})

export const Large = Template.bind({})
Large.args = {
  isLarge: true,
}
