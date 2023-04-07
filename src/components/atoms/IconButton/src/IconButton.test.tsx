import React from 'react'
import IconButton from './IconButton'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('IconButton', () => {
  it('should render a IconButton', () => {
    render(<IconButton src="" title="test" />)
    expect(screen.getAllByTitle('test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<IconButton src="" />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
