import Toast from './Toast'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

const toasts = {
  default: {
    children: 'Test',
  },
}

describe('Toast', () => {
  it('should render a Toast', () => {
    render(<Toast {...{ toasts }} />)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Toast {...{ toasts }} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
