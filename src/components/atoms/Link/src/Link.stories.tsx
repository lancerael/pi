import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Link } from './Link'

export default {
  title: 'Interactions/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = () => (
  <Link href="http://www.google.com" isExternal>
    Link
  </Link>
)

export const Default = Template.bind({})
