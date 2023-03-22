import React from 'react'
import GeoMap from './GeoMap'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('GeoMap', () => {
  it('should render a GeoMap', () => {
    render(<GeoMap />)
    expect(screen.getAllByTitle('')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<GeoMap />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
