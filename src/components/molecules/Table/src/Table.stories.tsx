import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Table } from './Table'

export default {
  title: 'Layout/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  headers: ['One', 'Two', 'Three'],
  rows: [
    { cols: ['a', 'b', 'c'] },
    { cols: ['Expand me...=', '2', '3'], expandedContent: <>EXPANDED</> },
    { cols: ['x', 'y', 'z'] },
  ],
}
