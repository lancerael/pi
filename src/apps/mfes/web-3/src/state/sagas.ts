import { put, takeEvery } from 'redux-saga/effects'
import {
  Transaction,
  TransactionResponse,
  TransactionReceipt,
  BrowserProvider,
  Signer,
} from 'ethers'

import { dbCLient } from '../graphql'
import { PutTransaction } from '../graphql'
import { sendTransaction, setAppStatus } from './reducers/web3Reducer'

function* makeTransaction({ payload }: any) {
  const walletProvider = new BrowserProvider(window.ethereum)
  const signer: Signer = yield walletProvider.getSigner()
  try {
    const response: TransactionResponse = yield signer.sendTransaction(payload)
    const receipt: TransactionReceipt = yield response.wait()
    const transaction: Transaction = yield receipt.getTransaction()

    yield dbCLient.mutate({
      mutation: PutTransaction,
      variables: {
        transaction,
      },
    })

    yield put(setAppStatus({ transactions: transaction.hash ?? undefined }))
  } catch (error: any) {
    console.log(error)
    yield put(
      setAppStatus({
        transactions:
          error.message.match(/"message": "([^"]+)"/)?.[1] ?? error.message,
      })
    )
  }
}

export function* rootSaga() {
  yield takeEvery(sendTransaction.type, makeTransaction)
}
