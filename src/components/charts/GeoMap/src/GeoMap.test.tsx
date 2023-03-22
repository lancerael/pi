import React from 'react'
import GeoMap from './GeoMap'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('GeoMap', () => {
  it('should render a GeoMap', () => {
    render(<GeoMap country="USA" label="Location" />)
    expect(screen.getAllByText('Location: USA')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<GeoMap country="USA" label="Location" />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
