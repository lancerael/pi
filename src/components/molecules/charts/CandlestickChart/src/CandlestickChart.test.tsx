import CandlestickChart from './CandlestickChart'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'
import data from './mocks/data.json'

describe('CandlestickChart', () => {
  it('should render a CandlestickChart', () => {
    render(<CandlestickChart {...{ data }} />)
    expect(screen.getAllByText('➕')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<CandlestickChart {...{ data }} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
