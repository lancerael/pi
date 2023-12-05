import { SyntheticEvent, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action } from '@reduxjs/toolkit'
import { ThemeType, themeList } from '@pi-lib/styles'
import Link from '@pi-lib/link'
import CollapsibleMenu from '@pi-lib/collapsible-menu'
import Modal from '@pi-lib/modal'
import Select from '@pi-lib/select'
import PageBanner from '@pi-lib/page-banner'
import IconButton from '@pi-lib/icon-button'
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
import Toast from '@pi-lib/toast'
import CookieToast from '../CookieToast'

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

  const links = (color?: string) => [
    <Link
      to="/"
      onPointerUp={() => dispatch(updatePage('/'))}
      isMain
      isInactive={page === '/'}
      key="sandbox"
      color={color}
    >
      Sandbox
    </Link>,
    <Link
      to="/candlestick"
      onPointerUp={() => dispatch(updatePage('/candlestick'))}
      isMain
      isInactive={page === '/candlestick'}
      key="candlestick"
      color={color}
    >
      Candlestick
    </Link>,
  ]

  const arcTitle = 'Demo architecture diagram'
  const settingsRef = useRef<HTMLDivElement>(null)

  window.addEventListener('keydown', () => console.log('wc'), true)

  return (
    <>
      <PageBanner hasBackground>
        <StyledHeader>
          <Logo size={'1.2em'} fill="var(--special)" /> Pi Tech Demo
        </StyledHeader>
        <StyledToolbar>
          <StyledLinks>{links('light')}</StyledLinks>
          <StyledMenu>
            <CollapsibleMenu items={links('specialText')} />
          </StyledMenu>
          <div ref={settingsRef}>
            <CollapsibleMenu
              iconName="Cog"
              title="Site settings"
              items={[
                <ItemList>
                  <IconButton
                    buttonProps={{
                      title: `Switch to ${altFontSize} font`,
                      onPress: () => {
                        setTimeout(() =>
                          dispatchWithUpdate(updateFontSize(altFontSize))
                        )
                      },
                      boxName: 'hi',
                    }}
                    iconProps={{
                      isFilled: true,
                      src: `${CLOUDFRONT_URL}/font-${altFontSize}.svg`,
                      color: 'var(--bg)',
                    }}
                  />
                  <IconButton
                    buttonProps={{
                      onPress: () => {
                        setTimeout(() =>
                          dispatchWithUpdate(updateScheme(altScheme))
                        )
                      },
                      title: `Switch to ${altScheme} mode`,
                      boxName: 'hi',
                    }}
                    iconProps={{
                      isStroked: true,
                      src: `${CLOUDFRONT_URL}/scheme-${altScheme}.svg`,
                      color: 'var(--bg)',
                    }}
                  />
                  <IconButton
                    buttonProps={{
                      onPress: () => {
                        setTimeout(() => setIsActive(true), 100)
                      },
                      title: `View tech demo architectural diagram`,
                      boxName: 'hi',
                    }}
                    iconProps={{
                      isFilled: true,
                      src: `${CLOUDFRONT_URL}/info.svg`,
                      color: 'var(--bg)',
                    }}
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
      </PageBanner>
      <Toast
        toasts={{
          consent: {
            children: (
              <CookieToast callback={() => dispatch(updateConsent(true))} />
            ),
            timerInterval: 25000,
            isDismissed: !hasChangedSettings || !!consent,
          },
        }}
      />
    </>
  )
}
export default Header
