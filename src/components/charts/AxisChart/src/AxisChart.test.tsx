import React from 'react'
import AxisChart from './AxisChart'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { getRandomData } from 'd-theia'

export const { chartData, chartConfig } = getRandomData() as any

describe('AxisChart', () => {
  it('should render a AxisChart', () => {
    render(
      <AxisChart
        chartId="test"
        chartType="bar"
        {...{ chartData, chartConfig }}
      />
    )
    expect(screen.getAllByText('Random Chart Data')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <AxisChart
        chartId="test"
        chartType="bar"
        {...{ chartData, chartConfig }}
      />
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
