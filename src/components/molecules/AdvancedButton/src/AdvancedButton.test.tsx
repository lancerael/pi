import AdvancedButton from './AdvancedButton'
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

describe('AdvancedButton', () => {
  it('should render a AdvancedButton', () => {
    render(<AdvancedButton {...defaultProps} />)
    expect(screen.getAllByRole('Button')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<AdvancedButton {...defaultProps} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
