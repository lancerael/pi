import Carousel from './Carousel'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('Carousel', () => {
  it('should render a Carousel', () => {
    render(<Carousel itemList={[<>Test</>]} />)
    expect(screen.getAllByText('Test')).toHaveLength(2)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Carousel itemList={[<>Test</>]} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
