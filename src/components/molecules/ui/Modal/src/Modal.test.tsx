import Modal from './Modal'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('Modal', () => {
  it('should render a Modal', () => {
    render(<Modal>Test</Modal>)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Modal />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
