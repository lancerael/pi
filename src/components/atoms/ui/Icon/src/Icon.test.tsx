import Icon from './Icon'
import { render } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('Icon', () => {
  it('should render a Icon', () => {
    const { container } = render(<Icon iconName="Close" />)
    expect(container.children).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Icon iconName="Close" />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
