import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Table } from './Table'

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  headers: ['One', 'Two', 'Three'],
  tableRows: [
    { cols: ['1', '2', '3'] },
    { cols: ['4', '5', '6'] },
    { cols: ['7', '8', '9'] },
  ],
}
