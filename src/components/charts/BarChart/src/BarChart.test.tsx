import BarChart from './BarChart'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { randomData } from '@pi-lib/charts'

describe('BarChart', () => {
  it('should render a BarChart', () => {
    render(<BarChart {...randomData()} />)
    expect(screen.getAllByText('Random Chart Data')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<BarChart {...randomData()} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
