import CustomIcon from './CustomIcon'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('CustomIcon', () => {
  it('should render a CustomIcon', () => {
    render(<CustomIcon src="/info.svg" />)
    expect(screen.getAllByTestId('pi-lib-custom-icon')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<CustomIcon src="/info.svg" />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
