import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Layout/Table',
  component: Table,
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof Table> = {
  args: {
    headers: ['One', 'Two', 'Three'],
    rows: [
      { cols: ['a', 'b', 'c'] },
      { cols: ['Expand me...', '2', '3'], expandedContent: <>EXPANDED</> },
      { cols: ['x', 'y', 'z'] },
    ],
  },
}

export default meta
