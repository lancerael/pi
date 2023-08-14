import { SyntheticEvent, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action } from '@reduxjs/toolkit'
import { ThemeType, themeList } from '@pi-lib/styles'
import Link from '@pi-lib/link'
import CollapsibleMenu from '@pi-lib/collapsible-menu'
import Modal from '@pi-lib/modal'
import Select from '@pi-lib/select'
import Banner from '@pi-lib/banner'
import IconButton from '@pi-lib/icon-button'
import Toast from '@pi-lib/toast'
import Button from '@pi-lib/button'
import {
  updatePage,
  updateScheme,
  updateTheme,
  updateFontSize,
  SettingsState,
  updateConsent,
} from '../../state/reducers/settingsReducer'
import ItemList from '../ItemList'
import TechList from '../TechList'
import { CLOUDFRONT_URL } from '../../main'
import {
  StyledHeader,
  StyledInfo,
  StyledLinks,
  StyledMenu,
  StyledPalette,
  StyledSelect,
  StyledToolbar,
} from './Header.style'
import { Logo } from './Logo'

/**
 * The banner at the top of the page containing internal links
 */
export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [hasChangedSettings, setHasChangedSettings] = useState(false)
  const dispatch = useDispatch()
  const dispatchWithUpdate = (action: Action) => {
    dispatch(action)
    setHasChangedSettings(true)
  }
  const { page, themeName, scheme, fontSize, consent } = useSelector(
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

  return (
    <>
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
              iconName="Cog"
              items={[
                <ItemList>
                  <IconButton
                    onPointerUp={() =>
                      setTimeout(() =>
                        dispatchWithUpdate(updateFontSize(altFontSize))
                      )
                    }
                    isSmall
                    $isFilled
                    src={`${CLOUDFRONT_URL}/font-${fontSize}.svg`}
                    title={`Switch to ${altFontSize} font`}
                  />
                  <IconButton
                    onPointerUp={() =>
                      setTimeout(() =>
                        dispatchWithUpdate(updateScheme(altScheme))
                      )
                    }
                    isSmall
                    $isStroked
                    src={`${CLOUDFRONT_URL}/scheme-${altScheme}.svg`}
                    title={`Switch to ${altScheme} mode`}
                  />
                  <IconButton
                    onPointerUp={() => setTimeout(() => setIsActive(true), 100)}
                    isSmall
                    $isFilled
                    src={`${CLOUDFRONT_URL}/info.svg`}
                    title="View tech demo architectural diagram"
                  />
                </ItemList>,
                <ItemList title="Choose theme palette">
                  <StyledPalette src={`${CLOUDFRONT_URL}/palette.svg`} />
                  <StyledSelect {...{ scheme }}>
                    <Select
                      name="theme"
                      value={themeName}
                      onChange={(e: SyntheticEvent<HTMLSelectElement>) =>
                        dispatchWithUpdate(
                          updateTheme(e.currentTarget.value as ThemeType)
                        )
                      }
                      options={themeList.map((theme) => ({
                        content: theme.charAt(0).toUpperCase() + theme.slice(1),
                      }))}
                      title="Choose theme palette"
                    />
                  </StyledSelect>
                </ItemList>,
              ]}
            />
          </div>
        </StyledToolbar>

        <Modal
          isDismissed={!isActive}
          dismissCallback={() => setIsActive(false)}
        >
          <StyledInfo>
            <img
              src={`${CLOUDFRONT_URL}/architecture.svg`}
              alt={arcTitle}
              title={arcTitle}
              style={{ maxWidth: '100%', margin: '0 8px' }}
            />
            <TechList />
          </StyledInfo>
        </Modal>
      </Banner>
      <Toast
        toasts={{
          consent: {
            children: (
              <div
                style={{
                  margin: '0 20%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  alignContent: 'center',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  Store your preferences on this device?
                </div>
                <div style={{ padding: '0 20%' }}>
                  <Button onPointerUp={() => dispatch(updateConsent(true))}>
                    Yes please! 🍪
                  </Button>
                </div>
              </div>
            ),
            isDismissed: !hasChangedSettings || !!consent,
          },
        }}
      />
    </>
  )
}
export default Header
