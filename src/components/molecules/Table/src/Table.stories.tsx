import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Table } from './Table'

const defaultProps = {
  headers: ['One', 'Two', 'Three'],
  tableRows: [
    { cols: ['a', 'b', 'c'] },
    { cols: ['1', '2', '3'], expandedContent: <>EXPANDED</> },
    { cols: ['x', 'y', 'z'] },
  ],
}

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = defaultProps
