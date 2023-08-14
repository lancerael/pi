import Tooltip from './Tooltip'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

const defaultProps = {
  children: 'Tooltip',
  isActive: true,
  x: 50,
  y: 20,
}

describe('Tooltip', () => {
  it('should render a tooltip', () => {
    render(<Tooltip {...defaultProps} />)
    expect(screen.getAllByText('Tooltip')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Tooltip isActive>Tooltip</Tooltip>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
