import React from 'react'
import CandlestickChart from './CandlestickChart'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('CandlestickChart', () => {
  it('should render a CandlestickChart', () => {
    render(<CandlestickChart />)
    expect(screen.getAllByTitle('')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<CandlestickChart />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
