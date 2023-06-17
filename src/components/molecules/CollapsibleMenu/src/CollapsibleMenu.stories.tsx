import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CollapsibleMenu } from './CollapsibleMenu'
import { CollapsibleMenuProps } from './CollapsibleMenu.types'

const render = (props: CollapsibleMenuProps) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ display: 'inline-block' }}>
      <CollapsibleMenu
        {...props}
        items={[
          <a href="https://www.google.com">Item 1</a>,
          <a href="https://www.google.com">Item 2</a>,
          <a href="https://www.google.com">Item 3</a>,
        ]}
      />
    </div>
  </div>
)

const meta: Meta<typeof CollapsibleMenu> = {
  title: 'UI/CollapsibleMenu',
  component: CollapsibleMenu,
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof CollapsibleMenu> = {
  render,
}

export const Settings: StoryObj<typeof CollapsibleMenu> = {
  args: {
    icon: 'cog',
  },
  render,
}

export const Chevron: StoryObj<typeof CollapsibleMenu> = {
  args: {
    icon: 'chevron',
  },
  render,
}

export default meta
