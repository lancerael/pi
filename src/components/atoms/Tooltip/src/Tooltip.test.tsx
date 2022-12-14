import React from 'react'
import Tooltip from './Tooltip'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('Tooltip', () => {
  it('should render a Tooltip', () => {
    render(<Tooltip />)
    expect(screen.getAllByTitle('')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Tooltip />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
