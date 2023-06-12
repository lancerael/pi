import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CollapsibleMenu } from './CollapsibleMenu'
import { CollapsibleMenuProps } from './CollapsibleMenu.types'

export default {
  title: 'UI/CollapsibleMenu',
  component: CollapsibleMenu,
} as ComponentMeta<typeof CollapsibleMenu>

const BaseMenu = (props: CollapsibleMenuProps) => (
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

const Template: ComponentStory<typeof CollapsibleMenu> = (props) => (
  <BaseMenu {...props} />
)

export const Default = Template.bind({})

export const Settings = Template.bind({})
Settings.args = {
  icon: 'cog',
}

export const Chevron = Template.bind({})
Chevron.args = {
  icon: 'chevron',
}
