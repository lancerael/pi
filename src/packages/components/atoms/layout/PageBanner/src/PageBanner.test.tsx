import PageBanner from './PageBanner'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('PageBanner', () => {
  it('should render a PageBanner', () => {
    render(<PageBanner>Content</PageBanner>)
    expect(screen.getAllByText('Content')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<PageBanner>Content</PageBanner>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
