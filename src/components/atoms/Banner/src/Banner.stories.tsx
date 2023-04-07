import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Banner } from './Banner'

export default {
  title: 'Layout/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = () => <Banner>Content</Banner>

export const Default = Template.bind({})
