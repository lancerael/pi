import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconButton } from './IconButton'

export default {
  title: 'Interactions/IconButton',
  component: IconButton,
  argTypes: {
    href: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    isExternal: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (props) => (
  <IconButton {...props} />
)

export const Default = Template.bind({})
Default.args = {
  href: 'https://www.google.com',
  src: 'https://cdn.svgporn.com/logos/github-icon.svg',
  isExternal: true,
}
