import React from 'react'
import TestComponent from './TestComponent'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe';

describe('TestComponent', () => {

  it('should render a TestComponent', () => {
    render(<TestComponent/>)
    expect(screen.getAllByTitle('')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => { 
    const { container } = render(<TestComponent/>)
    expect(await axe(container)).toHaveNoViolations()
  })

})
