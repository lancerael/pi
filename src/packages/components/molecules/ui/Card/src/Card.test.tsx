import Card from './Card'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('Card', () => {
  it('should render a Card', () => {
    render(
      <Card title="Title" subTitle="Subtitle">
        Test
      </Card>
    )
    expect(screen.getAllByText('Title')).toHaveLength(1)
    expect(screen.getAllByText('Subtitle')).toHaveLength(1)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Card title="Title">Test</Card>)
    expect(await axe(container)).toHaveNoViolations()
  })
})
