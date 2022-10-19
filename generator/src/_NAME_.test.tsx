import React from 'react'
import _NAME_ from './_NAME_'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe';

describe('_NAME_', () => {

  it('should render a _NAME_', () => {
    render(<_NAME_/>)
    expect(screen.getAllByTitle('')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => { 
    const { container } = render(<_NAME_/>)
    expect(await axe(container)).toHaveNoViolations()
  })

})
