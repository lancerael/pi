import Shimmer from './Shimmer'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('Shimmer', () => {
  it('should render a Shimmer', async () => {
    render(<Shimmer lines={['Test']} />)
    expect(await screen.findAllByTestId('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Shimmer lines={['Test']} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
