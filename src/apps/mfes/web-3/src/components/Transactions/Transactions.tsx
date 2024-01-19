import PageContent from '@pi-lib/page-content'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Theme from '@pi-lib/styles'
import { Web3AppState } from '../../state/reducers/web3reducer.types'

export const Transactions = () => {
  const { settings } = useSelector((state: Web3AppState) => state)

  const dispatch = useDispatch()

  return (
    <Theme
      themeName={settings?.themeName}
      scheme={settings?.scheme}
      includeGlobal={!settings?.themeName}
    >
      <PageContent sidebar={<Sidebar />}>
        <div>hello</div>
      </PageContent>
    </Theme>
  )
}

export default Transactions
