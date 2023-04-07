import React from 'react'
import Select from './Select'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

const defaultProps = {
  onChange: () => {},
  options: [{ content: 'test' }],
}

describe('Select', () => {
  it('should render a Select', () => {
    render(<Select {...defaultProps} />)
    expect(screen.getAllByText('test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Select {...defaultProps} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
