import React from 'react'
import PageContent from './PageContent'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('PageContent', () => {
  it('should render a PageContent', () => {
    render(<PageContent sidebar={<div>SIDEBAR</div>}>CONTENT</PageContent>)
    expect(screen.getAllByText('SIDEBAR')).toHaveLength(1)
    expect(screen.getAllByText('CONTENT')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <PageContent sidebar={<div>SIDEBAR</div>}>CONTENT</PageContent>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
