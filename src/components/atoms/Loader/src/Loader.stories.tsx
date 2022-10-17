import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Loader } from './Loader'

export default {
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = () => <Loader />

export const Default = Template.bind({})
