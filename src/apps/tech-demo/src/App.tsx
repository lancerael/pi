import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Theme } from '@pi-lib/styles'
import Header from './components/Header'
import Footer from './components/Footer'
//@ts-ignore
import styled, { css } from 'styled-components'
import { SettingsState } from './state/reducers/settingsReducer'

export interface StyledColumnProps {
  maxWidth?: string
  isCollapsible?: boolean
}

const StyledColumn = styled.div(
  ({ maxWidth, isCollapsible }: StyledColumnProps) => {
    return css`
      max-width: ${maxWidth ?? '100%'};
      min-height: 100%;
      display: flex;
      flex-direction: column;

      @media (max-width: 800px) {
        height: auto;
        ${!!isCollapsible && 'max-width: 100%;'}
      }
    `
  }
)
const App = () => {
  const themeProps = useSelector(
    ({ settings }: { settings: SettingsState }) => settings
  )
  return (
    <Theme {...themeProps}>
      <StyledColumn>
        <Header />
        <Outlet />
        <Footer />
      </StyledColumn>
    </Theme>
  )
}

export default App
