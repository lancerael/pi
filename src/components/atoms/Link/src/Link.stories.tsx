import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Link } from './Link'

export default {
  title: 'Interactions/Link',
  component: Link,
  argTypes: {
    href: {
      control: 'text',
    },
    $isExternal: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (props) => (
  <Link {...props}>Link</Link>
)

export const Default = Template.bind({})

Default.args = {
  href: 'https://www.google.com',
  $isExternal: true,
}

export const Inactive = Template.bind({})

Inactive.args = {
  href: 'https://www.google.com',
  $isInactive: true,
}

export const Main = Template.bind({})

Main.args = {
  href: 'https://www.google.com',
  $isMain: true,
  $isExternal: true,
}
