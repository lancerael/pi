import {
  BrowserProvider,
  Signer,
  Transaction,
  TransactionReceipt,
  TransactionResponse,
} from 'ethers'
import { FormFields, SagaParams } from './reducers/web3reducer.types'
import { GetTransactions, PutTransaction, dbCLient } from '../data'
import {
  getTransactions,
  sendTransaction,
  setDataStatus,
  setTransactions,
} from './reducers/web3Reducer'
import { put, takeEvery } from 'redux-saga/effects'

import { FIELD_LIST } from '../constants'

function* makeTransaction({ payload }: SagaParams<FormFields>) {
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

function* fetchTransactions({ payload }: SagaParams<string>): unknown {
  yield put(setDataStatus({ transactionsStatus: 'loading' }))
  try {
    const { data } = yield dbCLient.query({
      query: GetTransactions,
      variables: { from: payload },
    })
    yield put(setTransactions(data.getTransactions))
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
