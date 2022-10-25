import React from 'react'
import AdvancedButton from './AdvancedButton'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe';

describe('AdvancedButton', () => {

  it('should render a AdvancedButton', () => {
    render(<AdvancedButton/>)
    expect(screen.getAllByTitle('')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => { 
    const { container } = render(<AdvancedButton/>)
    expect(await axe(container)).toHaveNoViolations()
  })

})
