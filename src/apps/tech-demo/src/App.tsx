import React from 'react'
import { Theme } from '@pi-lib/styles'
import { Contrast } from '@pi-lib/styles/src/theme.types'
import { ThemeType } from '@pi-lib/styles/src/themes'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
//@ts-ignore
import styled from 'styled-components'
import { SettingsState } from './state/reducers/settingsReducer'

export interface ITheming {
  themeName: ThemeType
  contrast: Contrast
}

const StyledColumn = styled.div<any>`
  max-width: ${({ maxWidth }: any) => maxWidth ?? '100%'};
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    height: auto;
    ${({ isCollapsible }: any) => !!isCollapsible && 'max-width: 100%;'}
  }
`

const App = () => {
  const { contrast, themeName } = useSelector(
    ({ settings }: { settings: SettingsState }) => settings
  )
  return (
    <Theme {...{ contrast, themeName }}>
      <StyledColumn>
        <Header />
        <Outlet />
        <Footer />
      </StyledColumn>
    </Theme>
  )
}

export default App
