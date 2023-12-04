import IconButton from './IconButton'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('IconButton', () => {
  it('should render a IconButton', () => {
    render(
      <IconButton buttonProps={{ title: 'test' }} iconProps={{ src: '' }} />
    )
    expect(screen.getAllByTitle('test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <IconButton buttonProps={{ title: 'test' }} iconProps={{ src: '' }} />
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
