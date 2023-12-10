import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { SettingsState } from '../../state/reducers/settingsReducer'
import Header from '../Header'
import Footer from '../Footer'
import { StyledColumn } from './Layout.style'
import ThemeProvider from '@pi-lib/styles'

/**
 * The main component for the site layout
 */
const Layout = () => {
  const themeProps = useSelector(
    ({ settings }: { settings: SettingsState }) => settings
  )
  return (
    <ThemeProvider {...themeProps}>
      <StyledColumn>
        <Header />
        <Outlet />
        <Footer />
      </StyledColumn>
    </ThemeProvider>
  )
}

export default Layout
