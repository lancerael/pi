import Select from '@pi-lib/select'
import Banner from '@pi-lib/banner'
import { useDispatch } from 'react-redux'

import { updateContrast, updateTheme } from '../state/reducers/themingReducer'
import { Logo } from '../images/logo'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  display: inline-block;
  font-size: 1.8em;
  padding-left: 4px;
  text-shadow: 1px 1px rgb(0 0 0 / 30%);

  svg {
    padding-top: 2px;
  }

  @media (max-width: 540px) {
    font-size: 1.5em;
    max-width: 160px;
    line-height: 24px;

    svg {
      padding-top: 10px;
    }
  }
`

const StyledToolbar = styled.div`
  display: flex;
  text-align: right;
  gap: 16px;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 4px;
  }
`

export const Header = () => {
  const dispatch = useDispatch()
  return (
    <Banner>
      <StyledHeader>
        <Logo size={48} fill="var(--outline)" /> Chart Sandbox
      </StyledHeader>
      <StyledToolbar>
        <Select
          label="Contrast"
          name="contrast"
          onChange={(e: any) => dispatch(updateContrast(e.target.value))}
          options={[
            { value: '', content: 'Default' },
            { content: 'Dark' },
            { content: 'Light' },
          ]}
        />{' '}
        <Select
          label="Theme"
          name="theme"
          onChange={(e: any) => dispatch(updateTheme(e.target.value))}
          options={[
            { content: 'Andro' },
            { content: 'Avocado' },
            { content: 'Electron' },
            { content: 'Pebble' },
            { content: 'Rose' },
          ]}
        />
      </StyledToolbar>
    </Banner>
  )
}
export default Header
