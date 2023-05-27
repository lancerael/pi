import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PageContent } from './PageContent'

export default {
  title: 'Layout/PageContent',
  component: PageContent,
} as ComponentMeta<typeof PageContent>

const Template: ComponentStory<typeof PageContent> = () => (
  <PageContent sidebar={<div>SIDEBAR</div>}>CONTENT</PageContent>
)

export const Default = Template.bind({})
