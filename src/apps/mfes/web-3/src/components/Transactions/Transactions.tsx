import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ethers } from 'ethers'
import PageContent from '@pi-lib/page-content'
import Theme from '@pi-lib/styles'
import Card from '@pi-lib/card'
import Modal from '@pi-lib/modal'
import PageLoader from '@pi-lib/page-loader'
import Sidebar from '../Sidebar'
import { Web3RootState } from '../../state/reducers/web3reducer.types'
import { getTransactions } from '../../state/reducers/web3Reducer'

export const Transactions = () => {
  const dispatch = useDispatch()
  const [activeTransactionIndex, setActiveTransaction] = useState(-1)
  const { settings, transactions, transactionStatus, transactionsStatus } =
    useSelector(
      ({
        settings,
        web3: {
          transactions,
          dataStatus: { transactionStatus, transactionsStatus },
        },
      }: Web3RootState) => ({
        settings,
        transactions,
        transactionStatus,
        transactionsStatus,
      })
    )

  useEffect(() => {
    dispatch(getTransactions())
  }, [])

  useEffect(() => {
    transactionStatus === 'success' && dispatch(getTransactions())
  }, [transactionStatus])

  const dismissModal = () => {
    setActiveTransaction(-1)
  }

  const activeTransaction = transactions[activeTransactionIndex] ?? {}

  return (
    <Theme
      themeName={settings?.themeName}
      scheme={settings?.scheme}
      includeGlobal={!settings?.themeName}
    >
      <PageContent sidebar={<Sidebar />}>
        {!['loading', 'success'].includes(transactionsStatus)
          ? `Transaction loading failed: ${transactionsStatus}`
          : [...transactions]
              .reverse()
              .map(({ hash, to, value }, i) => (
                <Card
                  key={hash}
                  subTitle={`To: ${to}`}
                  title={`${ethers.formatEther(Number(value ?? 0))} ETH`}
                  onClick={() => setActiveTransaction(i)}
                ></Card>
              ))}
      </PageContent>
      <PageLoader isActive={transactionsStatus === 'loading'} />
      <Modal
        isActive={activeTransactionIndex > -1}
        title="Transaction Details"
        dismissCallback={dismissModal}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            wordWrap: 'break-word',
            background: 'var(--bgHC)',
            padding: '1rem',
          }}
        >
          <div>
            <b style={{ display: 'inline-block', minWidth: '20%' }}>From:</b>{' '}
            {activeTransaction.from}
          </div>
          <div>
            <b style={{ display: 'inline-block', minWidth: '20%' }}>To:</b>{' '}
            {activeTransaction.to}
          </div>
          <div>
            <b style={{ display: 'inline-block', minWidth: '20%' }}>Amount:</b>{' '}
            {`${ethers.formatEther(Number(activeTransaction.value ?? 0))} ETH`}
          </div>
          <div>
            <b style={{ display: 'inline-block', minWidth: '20%' }}>Hash:</b>{' '}
            {activeTransaction.hash}
          </div>
        </div>
      </Modal>
    </Theme>
  )
}

export default Transactions
