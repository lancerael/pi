import type { Meta, StoryObj } from '@storybook/react'
import { CollapsibleMenu } from './CollapsibleMenu'
import { CollapsibleMenuProps } from './CollapsibleMenu.types'

const render = (props: CollapsibleMenuProps) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ display: 'inline-block' }}>
      <CollapsibleMenu {...props} items={['Item 1', 'Item 2', 'Item 3']} />
    </div>
  </div>
)

const meta: Meta<typeof CollapsibleMenu> = {
  title: 'Molecules/UI/CollapsibleMenu',
  component: CollapsibleMenu,
  tags: ['autodocs'],
}

/**
 * The default state for the collapsible menu with the Hamburger icon
 */
export const Default: StoryObj<typeof CollapsibleMenu> = {
  args: {
    iconName: 'Hamburger',
  },
  render,
}

/**
 * The collapsible menu with a cog icon
 */
export const Settings: StoryObj<typeof CollapsibleMenu> = {
  args: {
    iconName: 'Cog',
  },
  render,
}

/**
 * The collapsible menu with a chevron icon
 */
export const Chevron: StoryObj<typeof CollapsibleMenu> = {
  args: {
    iconName: 'Chevron',
  },
  render,
}

/**
 * The collapsible menu with an Ellipsis icon
 */
export const Ellipsis: StoryObj<typeof CollapsibleMenu> = {
  args: {
    iconName: 'Ellipsis',
  },
  render,
}

export default meta
