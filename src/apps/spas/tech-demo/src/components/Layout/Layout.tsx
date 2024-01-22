import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { SettingsState } from '../../state/reducers/settingsReducer'
import Header from '../Header'
import Footer from '../Footer'
import { StyledColumn } from './Layout.style'
import Theme from '@pi-lib/styles'

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
        <div style={{ flexGrow: 1, overflow: 'auto' }}>
          <Outlet />
        </div>
        <Footer />
      </StyledColumn>
    </Theme>
  )
}

export default Layout
