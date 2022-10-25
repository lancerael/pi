import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AdvancedButton } from './AdvancedButton'

export default {
  title: 'AdvancedButton',
  component: AdvancedButton,
} as ComponentMeta<typeof AdvancedButton>

const Template: ComponentStory<typeof AdvancedButton> = () => <AdvancedButton />

export const Default = Template.bind({})
