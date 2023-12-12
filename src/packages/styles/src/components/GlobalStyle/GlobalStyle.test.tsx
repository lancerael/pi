import GlobalStyle from './'
import { render } from '@testing-library/react'
import { expect } from 'vitest'

describe('IconButton', () => {
  it('should render a IconButton', () => {
    const { container } = render(<GlobalStyle />)
    expect(container).not.toBeUndefined()
  })
})
