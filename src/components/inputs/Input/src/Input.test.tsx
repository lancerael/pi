import React from 'react'
import Input from './Input'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { props } from './Input.stories'

describe('Input', () => {
  it('should render a Input', () => {
    render(<Input {...props} />)
    expect(screen.getAllByLabelText('Title:')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Input {...props} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
