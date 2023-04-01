import React from 'react'
import Banner from './Banner'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('Banner', () => {
  it('should render a Banner', () => {
    render(<Banner>Content</Banner>)
    expect(screen.getAllByText('Content')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Banner>Content</Banner>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
