import React from 'react'
import Table from './Table'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

const defaultProps = {
  headers: ['One', 'Two', 'Three'],
  rows: [
    { cols: ['a', 'b', 'c'] },
    { cols: ['1test', '2', '3'], expandedContent: <>EXPANDED</> },
    { cols: ['x', 'y', 'z'] },
  ],
}

describe('Table', () => {
  it.skip('should render a Table', () => {
    render(<Table {...defaultProps} />)
    expect(screen.getAllByText('1test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Table {...defaultProps} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
