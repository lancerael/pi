import { SyntheticEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'
import {
  updatePage,
  updateScheme,
  updateTheme,
  updateFontSize,
  SettingsState,
} from '../state/reducers/settingsReducer'
import { Logo } from '../images/logo'
import Link from '@pi-lib/link'
import CollapsibleMenu from '@pi-lib/collapsible-menu'
import { useWindowClick } from '@pi-lib/utils'
import ModalScreen from '@pi-lib/modal-screen'
import { box } from '@pi-lib/styles'
import Select from '@pi-lib/select'
import Banner from '@pi-lib/banner'

import IconButton from '@pi-lib/icon-button'
import TechList from './TechList'
import { ItemList } from './ItemList'
import { ThemeType, themeList } from '@pi-lib/styles/src/themes'

const StyledHeader = styled.h1`
  display: inline-block;
  font-size: 1.6em;
  padding-left: 4px;
  text-shadow: 1px 1px rgb(0 0 0 / 30%);
  position: relative;

  svg {
    padding-top: 6px;
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

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-x: auto;

  ${box({ bgColor: 'var(--light)' })}

  p {
    color: var(--dark);
    padding: 8px;
    margin: 0;
    font-size: 1.3rem;
  }
`

const StyledPalette = styled(ReactSVG)`
  svg {
    fill: var(--textSoft);
    width: 1em;
    height: 1em;
    margin-top: 1px;
  }
`

export const Header = () => {
  const dispatch = useDispatch()
  const { page, scheme, fontSize } = useSelector(
    ({ settings }: { settings: SettingsState }) => settings
  )
  const altScheme = scheme === 'dark' ? 'light' : 'dark'
  const altFontSize = fontSize === 'large' ? 'small' : 'large'

  const links = [
    <Link
      to="/"
      onPointerUp={() => dispatch(updatePage('/'))}
      $isMain
      $isInactive={page === '/'}
      key="sandbox"
    >
      Sandbox
    </Link>,
    <Link
      to="/candlestick"
      onPointerUp={() => dispatch(updatePage('/candlestick'))}
      $isMain
      $isInactive={page === '/candlestick'}
      key="candlestick"
    >
      Candlestick
    </Link>,
  ]

  const arcTitle = 'Demo architecture diagram'
  const settingsRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  useWindowClick(() => setIsActive(false), settingsRef)

  return (
    <Banner>
      <StyledHeader>
        <Logo size={'1.2em'} fill="var(--outline)" /> Pi Tech Demo
      </StyledHeader>
      <StyledToolbar>
        <StyledLinks>{links}</StyledLinks>
        <StyledMenu>
          <CollapsibleMenu items={links} />
        </StyledMenu>
        <div ref={settingsRef}>
          <CollapsibleMenu
            icon="cog"
            items={[
              <ItemList>
                <IconButton
                  onPointerUp={() =>
                    setTimeout(() => dispatch(updateFontSize(altFontSize)))
                  }
                  isSmall
                  src={`https://pi-lib-assets.s3.eu-west-2.amazonaws.com/font-${fontSize}.svg`}
                  title={`Switch to ${altFontSize} font`}
                />
                <IconButton
                  onPointerUp={() =>
                    setTimeout(() => dispatch(updateScheme(altScheme)))
                  }
                  isSmall
                  src={`https://pi-lib-assets.s3.eu-west-2.amazonaws.com/scheme-${altScheme}.svg`}
                  title={`Switch to ${altScheme} mode`}
                />
                <IconButton
                  onPointerUp={() => setTimeout(() => setIsActive(true), 100)}
                  isSmall
                  src="https://pi-lib-assets.s3.eu-west-2.amazonaws.com/info.svg"
                  title="View tech demo architectural diagram"
                />
              </ItemList>,
              <ItemList title="Choose theme palette">
                <StyledPalette src="https://pi-lib-assets.s3.eu-west-2.amazonaws.com/palette.svg" />
                <Select
                  name="theme"
                  onChange={(e: SyntheticEvent<HTMLSelectElement>) =>
                    dispatch(updateTheme(e.currentTarget.value as ThemeType))
                  }
                  options={themeList.map((theme) => ({
                    content: theme.charAt(0).toUpperCase() + theme.slice(1),
                  }))}
                  title="Choose theme palette"
                />
              </ItemList>,
            ]}
          />
        </div>
      </StyledToolbar>

      <ModalScreen {...{ isActive }}>
        <StyledInfo>
          <img
            src="https://pi-lib-assets.s3.eu-west-2.amazonaws.com/architecture.svg"
            alt={arcTitle}
            title={arcTitle}
            style={{ maxWidth: '100%' }}
          />
          <TechList />
        </StyledInfo>
      </ModalScreen>
    </Banner>
  )
}
export default Header
