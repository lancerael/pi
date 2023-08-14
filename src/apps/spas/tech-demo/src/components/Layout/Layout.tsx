import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Theme } from '@pi-lib/styles'
import { SettingsState } from '../../state/reducers/settingsReducer'
import Header from '../Header'
import Footer from '../Footer'
import { StyledColumn } from './Layout.style'

/**
 * The main component for the site layout
 */
const Layout = () => {
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

export default Layout
