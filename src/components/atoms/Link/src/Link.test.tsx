import React from 'react'
import Link from './Link'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('Link', () => {
  it('should render a Link', () => {
    render(<Link href="">Test</Link>)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Link href="">Test</Link>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
