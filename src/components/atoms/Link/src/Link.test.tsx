import React from 'react'
import Link from './Link'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe';

describe('Link', () => {

  it('should render a Link', () => {
    render(<Link/>)
    expect(screen.getAllByTitle('')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => { 
    const { container } = render(<Link/>)
    expect(await axe(container)).toHaveNoViolations()
  })

})
