import React from 'react'
import PageLoader from './PageLoader'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('PageLoader', () => {
  it('should render a PageLoader', () => {
    render(<PageLoader isActive />)
    expect(screen.getAllByTestId('pi-lib-loader')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<PageLoader isActive />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
