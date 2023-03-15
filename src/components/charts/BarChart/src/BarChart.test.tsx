import React from 'react'
import BarChart from './BarChart'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('BarChart', () => {
  it('should render a BarChart', () => {
    render(<BarChart />)
    expect(screen.getAllByText('Random Chart Data')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<BarChart />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
