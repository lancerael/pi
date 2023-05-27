import React from 'react'
import CollapsibleMenu from './CollapsibleMenu'
import { render, screen } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { axe } from 'jest-axe'

describe('CollapsibleMenu', () => {
  it('should render a CollapsibleMenu', () => {
    render(<CollapsibleMenu items={[<span>TEST ME</span>]} />)
    expect(screen.getAllByTitle('TEST ME')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <CollapsibleMenu items={[<span>TEST ME</span>]} />
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
