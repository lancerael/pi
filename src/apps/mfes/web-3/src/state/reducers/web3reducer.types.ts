import { Scheme, ThemeName } from '@pi-lib/styles'
import { TransactionLike, Eip1193Provider } from 'ethers'

export type Transaction = Pick<
  TransactionLike,
  | 'to'
  | 'from'
  | 'value'
  | 'data'
  | 'chainId'
  | 'gasLimit'
  | 'gasPrice'
  | 'hash'
>

export type FormInputTypes = 'from' | 'to' | 'value'

export type FormFields = Pick<Transaction, FormInputTypes>

export type Transactions = Transaction[]

export type Status = string

export interface Web3AppState {
  transactions: Transactions
  appStatus: {
    transactions: Status
    transaction: Status
  }
  walletAddress: string
  settings?: {
    themeName: ThemeName
    scheme: Scheme
  }
}

declare global {
  interface Window {
    ethereum: Eip1193Provider
  }
}
