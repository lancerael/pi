import React from 'react'
import Table from './Table'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { defaultProps } from './Table.stories'

describe('Table', () => {
  it.skip('should render a Table', () => {
    render(<Table {...defaultProps} />)
    expect(screen.getAllByTitle('')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Table {...defaultProps} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
