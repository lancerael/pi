import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Molecules/Layout/Table',
  component: Table,
  tags: ['autodocs'],
}

/**
 * The default state for the table
 */
export const Default: StoryObj<typeof Table> = {
  args: {
    headers: ['One', 'Two', 'Three'],
    rows: [
      { cols: ['a', 'b', 'c'] },
      { cols: ['1', '2', '3'] },
      { cols: ['x', 'y', 'z'] },
    ],
  },
}

/**
 * A table with an expandable row
 */
export const Expandable: StoryObj<typeof Table> = {
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
