import React from 'react'
import ModalScreen from './ModalScreen'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('ModalScreen', () => {
  it('should render a ModalScreen', () => {
    render(
      <ModalScreen isActive>
        <div>CONTENT</div>
      </ModalScreen>
    )
    expect(screen.getAllByText('CONTENT')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <ModalScreen isActive>
        <div>CONTENT</div>
      </ModalScreen>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
