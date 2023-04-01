import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconButton } from './IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = () => <IconButton src="" />

export const Default = Template.bind({})
