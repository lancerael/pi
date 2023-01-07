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
  tableRows: [{ cols: ['1', '2', '3'] }],
}
