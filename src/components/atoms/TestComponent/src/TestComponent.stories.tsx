import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TestComponent } from './TestComponent'

export default {
  title: 'TestComponent',
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>

const Template: ComponentStory<typeof TestComponent> = () => <TestComponent />

export const Default = Template.bind({})
