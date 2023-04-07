import React from 'react'
import TextInput from './TextInput'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { props } from './TextInput.stories'

describe('TextInput', () => {
  it('should render a TextInput', () => {
    render(<TextInput {...props} />)
    expect(screen.getAllByLabelText('Title:')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<TextInput {...props} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
