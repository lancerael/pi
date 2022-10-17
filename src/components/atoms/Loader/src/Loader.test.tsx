import React from 'react'
import Loader from './Loader'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe';

const defaultProps = {
  onClick: vi.fn(),
  onMouseOver: vi.fn(),
  onMouseOut: vi.fn(),
  disabled: false,
  children: 'Hello'
}

describe('Loader', () => {

  it('should render a loader', () => {
    render(<Loader/>)
    expect(screen.getAllByTitle('Loading...')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => { 
    const { container } = render(<Loader/>)
    expect(await axe(container)).toHaveNoViolations()
  })

})
