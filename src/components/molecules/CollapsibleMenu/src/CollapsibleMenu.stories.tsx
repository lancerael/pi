import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CollapsibleMenu } from './CollapsibleMenu'
import Link from '@pi-lib/link'

export default {
  title: 'UI/CollapsibleMenu',
  component: CollapsibleMenu,
} as ComponentMeta<typeof CollapsibleMenu>

const BaseMenu = ({ isSettings }: any) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ display: 'inline-block' }}>
      <CollapsibleMenu
        {...{ isSettings }}
        items={[
          <Link href="https://www.google.com" $isMain $isExternal>
            Item 1
          </Link>,
          <Link href="https://www.google.com" $isMain $isExternal>
            Item 2
          </Link>,
          <Link href="https://www.google.com" $isMain $isExternal>
            Item 3
          </Link>,
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
  isSettings: true,
}
