import ParticleBackground from './ParticleBackground'
import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import { axe } from 'jest-axe'

describe('ParticleBackground', () => {
  it('should render a ParticleBackground', () => {
    render(<ParticleBackground>Test</ParticleBackground>)
    expect(screen.getAllByText('Test')).toHaveLength(1)
  })

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<ParticleBackground />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
