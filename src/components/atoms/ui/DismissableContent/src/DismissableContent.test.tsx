import DismissableContent from './DismissableContent'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('DismissableContent', () => {
  it('should render a DismissableContent', () => {
    render(<DismissableContent>Test</DismissableContent>)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<DismissableContent>Test</DismissableContent>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
