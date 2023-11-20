import Carousel from './Carousel'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('Carousel', () => {
  it('should render a Carousel', () => {
    render(<Carousel>Test</Carousel>)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Carousel />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
