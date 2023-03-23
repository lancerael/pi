import React from 'react'
import WorldMap from './WorldMap'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('WorldMap', () => {
  it('should render a WorldMap', () => {
    render(<WorldMap country="USA" label="Location" />)
    expect(screen.getAllByText('Location: USA')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<WorldMap country="USA" label="Location" />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
