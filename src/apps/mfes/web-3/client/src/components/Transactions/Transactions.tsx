import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ethers } from 'ethers'
import PageContent from '@pi-lib/page-content'
import Card from '@pi-lib/card'
import PageLoader from '@pi-lib/page-loader'
import Sidebar from '../Sidebar'
import { Web3RootState } from '../../state/reducers/web3reducer.types'
import { getTransactions } from '../../state/reducers/web3Reducer'
import ReceiptModal from '../ReceiptModal'

export const Transactions = () => {
  const dispatch = useDispatch()
  const [activeTransactionIndex, setActiveTransaction] = useState(-1)
  const {
    transactions,
    dataStatus: { transactionStatus, transactionsStatus },
  } = useSelector(({ web3: { transactions, dataStatus } }: Web3RootState) => ({
    transactions,
    dataStatus,
  }))

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
    <>
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
      <ReceiptModal
        isActive={activeTransactionIndex > -1}
        dismissCallback={dismissModal}
        {...{ activeTransaction }}
      />
    </>
  )
}

export default Transactions
