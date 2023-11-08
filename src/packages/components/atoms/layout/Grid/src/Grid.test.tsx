import Grid from './Grid'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

const children = (
  <>
    {Array.from({ length: 6 }, (_, i) => (
      <div key={i}>test</div>
    ))}
  </>
)

describe('Grid', () => {
  it('should render a Grid', () => {
    render(<Grid>{children}</Grid>)
    expect(screen.getAllByText('Test')).toHaveLength(6)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Grid>{children}</Grid>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
