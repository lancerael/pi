import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme, GlobalStyle } from '@pi-lib/styles'
import { Table } from './Table'

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>

export const defaultProps = {
  headers: ['One', 'Two', 'Three'],
  tableRows: [
    { cols: ['a', 'b', 'c'] },
    { cols: ['1', '2', '3'], expandedContent: <>EXPANDED</> },
    { cols: ['x', 'y', 'z'] },
  ],
}

const Template: ComponentStory<typeof Table> = (args) => (
  <Theme>
    <GlobalStyle />
    <Table {...args} />
  </Theme>
)

export const Default = Template.bind({})
Default.args = defaultProps
