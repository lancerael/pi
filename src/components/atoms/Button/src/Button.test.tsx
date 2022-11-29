import React from 'react'
import Button from './Button'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

const defaultProps = {
  onClick: vi.fn(),
  onMouseOver: vi.fn(),
  onMouseOut: vi.fn(),
  disabled: false,
  children: 'Hello',
}

describe('Button', () => {
  it('should render a button', () => {
    render(<Button {...defaultProps} />)
    expect(screen.getAllByRole('button')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Button {...defaultProps} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
