import Stellar from './Stellar'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('Stellar', () => {
  it('should render a Stellar', () => {
    render(<Stellar>Test</Stellar>)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Stellar />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
