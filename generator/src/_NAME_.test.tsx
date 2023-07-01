import _NAME_ from './_NAME_'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('_NAME_', () => {
  it('should render a _NAME_', () => {
    render(<_NAME_>Test</_NAME_>)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<_NAME_ />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
