import { put, takeEvery } from 'redux-saga/effects'
import {
  Transaction,
  TransactionResponse,
  TransactionReceipt,
  BrowserProvider,
  Signer,
} from 'ethers'

import { GetAllTransactions, dbCLient } from '../graphql'
import { PutTransaction } from '../graphql'
import {
  getTransactions,
  sendTransaction,
  setDataStatus,
  setTransactions,
} from './reducers/web3Reducer'
import { FIELD_LIST } from '../constants'

function* makeTransaction({ payload }: any) {
  console.log('p', payload)
  const walletProvider = new BrowserProvider(window.ethereum)
  const signer: Signer = yield walletProvider.getSigner()
  try {
    const response: TransactionResponse = yield signer.sendTransaction(payload)
    const receipt: TransactionReceipt = yield response.wait()
    const transaction: Transaction = yield receipt.getTransaction()

    yield dbCLient.mutate({
      mutation: PutTransaction,
      variables: {
        transaction: FIELD_LIST.reduce(
          (tx, key) => ({ ...tx, [key]: transaction[key]?.toString() }),
          {}
        ),
      },
    })

    yield put(
      setDataStatus({ transactionStatus: transaction.hash ?? undefined })
    )
  } catch (error: any) {
    console.log(error)
    yield put(
      setDataStatus({
        transactionStatus:
          error.message.match(/"message": "([^"]+)"/)?.[1] ?? error.message,
      })
    )
  }
}

function* fetchTransactions(): unknown {
  yield put(setDataStatus({ transactionsStatus: 'loading' }))
  try {
    const { data } = yield dbCLient.query({ query: GetAllTransactions })
    yield put(setTransactions(data.getAllTransactions))
    yield put(setDataStatus({ transactionsStatus: 'success' }))
  } catch (error: any) {
    setDataStatus({
      transactionsStatus: error.message,
    })
  }
}

export function* rootSaga() {
  yield takeEvery(sendTransaction.type, makeTransaction)
  yield takeEvery(getTransactions.type, fetchTransactions)
}
