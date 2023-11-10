import PageGrid from './PageGrid'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('PageGrid', () => {
  it('should render a PageGrid', () => {
    render(
      <PageGrid>
        <div>Test</div>
      </PageGrid>
    )
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <PageGrid>
        <div>Test</div>
      </PageGrid>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
