import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Banner } from './Banner'

export default {
  title: 'Layout/Banner',
  component: Banner,
  argTypes: {
    isList: {
      control: 'boolean',
    },
    isBottom: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (props) => (
  <Banner {...props}>
    <div>Content 1</div>
    <div>Content 2</div>
    <div>Content 3</div>
    <div>Content 4</div>
    <div>Content 5</div>
  </Banner>
)

export const Default = Template.bind({})

Default.args = {
  isList: true,
  isBottom: true,
}
