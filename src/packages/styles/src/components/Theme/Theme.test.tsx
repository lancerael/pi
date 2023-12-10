import { render, screen } from '@testing-library/react'
import { Theme } from './Theme'
import { PiTheme } from '../../theme.types'
import styled from 'styled-components'

// Define a test theme
const testTheme = {
  colors: {
    bg: 'red',
  },
} as unknown as PiTheme

const TestComponent = styled.div`
  background: ${({ theme }) => theme.colors.bg};
`

describe('Theme Component', () => {
  it('renders with generated classname', () => {
    render(
      <Theme theme={testTheme}>
        <TestComponent data-testid="test">test</TestComponent>
      </Theme>
    )

    expect(screen.getByTestId('test').className).toMatch(/[a-zA-Z]{5,10}/)
  })
})
