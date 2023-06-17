import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PageContent } from './PageContent'

const render = () => (
  <PageContent sidebar={<div>SIDEBAR</div>}>CONTENT</PageContent>
)

const meta: Meta<typeof PageContent> = {
  title: 'Layout/PageContent',
  component: PageContent,
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof PageContent> = {
  render,
}

export default meta
