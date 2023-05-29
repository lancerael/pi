import Select from '@pi-lib/select'
import Banner from '@pi-lib/banner'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  updatePage,
  updateContrast,
  updateTheme,
  SettingsState,
} from '../state/reducers/settingsReducer'
import { Logo } from '../images/logo'
import Link from '@pi-lib/link'
import CollapsibleMenu from '@pi-lib/collapsible-menu'

const StyledHeader = styled.h1`
  display: inline-block;
  font-size: 1.6em;
  padding-left: 4px;
  text-shadow: 1px 1px rgb(0 0 0 / 30%);
  position: relative;

  svg {
    padding-top: 6px;
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
  gap: 16px;
  min-height: 32px;
  align-items: center;
`

const StyledLinks = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 700px) {
    display: none;
  }
`

const StyledMenu = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
`

export const Header = () => {
  const dispatch = useDispatch()
  const { page } = useSelector(
    ({ settings }: { settings: SettingsState }) => settings
  )

  const links = [
    <Link
      to="/"
      onClick={() => dispatch(updatePage('/'))}
      $isMain
      $isInactive={page === '/'}
      key="sandbox"
    >
      Sandbox
    </Link>,
    <Link
      to="/candlestick"
      onClick={() => dispatch(updatePage('/candlestick'))}
      $isMain
      $isInactive={page === '/candlestick'}
      key="candlestick"
    >
      Candlestick
    </Link>,
  ]

  return (
    <Banner>
      <StyledHeader>
        <Logo size={34} fill="var(--outline)" /> Pi Tech Demo
      </StyledHeader>
      <StyledToolbar>
        <StyledLinks>{links}</StyledLinks>
        <StyledMenu>
          <CollapsibleMenu items={links} />
        </StyledMenu>
        <div>
          <CollapsibleMenu
            isSettings
            items={[
              <Select
                label="Contrast"
                name="contrast"
                onChange={(e: any) => dispatch(updateContrast(e.target.value))}
                options={[
                  { value: '', content: 'Default' },
                  { content: 'Dark' },
                  { content: 'Light' },
                ]}
              />,
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
              />,
            ]}
          />
        </div>
      </StyledToolbar>
    </Banner>
  )
}
export default Header
