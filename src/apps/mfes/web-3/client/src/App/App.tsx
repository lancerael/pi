import { useSelector } from 'react-redux'
import Theme from '@pi-lib/styles'
import { Web3RootState } from '../state/reducers/web3reducer.types'
import Transactions from '../components/Transactions'

export const App = () => {
  const { settings } = useSelector(({ settings }: Web3RootState) => ({
    settings,
  }))

  return (
    <Theme
      themeName={settings?.themeName}
      scheme={settings?.scheme}
      includeGlobal={!settings?.themeName}
    >
      <Transactions />
    </Theme>
  )
}

export default App
