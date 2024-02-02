import { Eip1193Provider, TransactionLike } from 'ethers'
import { Scheme, ThemeName } from '@pi-lib/styles'

import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { FIELD_LIST } from '../../constants'

export type FieldListValues = (typeof FIELD_LIST)[number]

export type Transaction = Pick<TransactionLike, FieldListValues>

export type FormInputTypes = 'from' | 'to' | 'value'

export type FormFields = Pick<Transaction, FormInputTypes>

export type Transactions = Transaction[]

export type Status = string

export interface Web3State {
  transactions: Transactions
  dataStatus: {
    transactionsStatus: Status
    transactionStatus: Status
  }
  walletAddress: string
}

export interface Web3RootState {
  web3: Web3State
  settings?: {
    themeName: ThemeName
    scheme: Scheme
  }
}

export type SagaParams<T> = { payload: T } & ActionCreatorWithPayload<
  T,
  'web3/getTransactions'
>

declare global {
  interface Window {
    ethereum: Eip1193Provider
  }
}
