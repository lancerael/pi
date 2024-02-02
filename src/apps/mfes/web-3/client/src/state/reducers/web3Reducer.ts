import { FormFields, Transactions, Web3State } from './web3reducer.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: Web3State = {
  transactions: [],
  dataStatus: {
    transactionStatus: '',
    transactionsStatus: '',
  },
  walletAddress: '',
}

const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    setTransactions(state: Web3State, { payload }: { payload: Transactions }) {
      return { ...state, transactions: structuredClone(payload) }
    },
    setDataStatus(
      state: Web3State,
      { payload }: { payload: Partial<Web3State['dataStatus']> }
    ) {
      return { ...state, dataStatus: { ...state.dataStatus, ...payload } }
    },
    setWalletAddress(state: Web3State, { payload }: { payload: string }) {
      return { ...state, walletAddress: payload }
    },
    sendTransaction(_, { payload }: { payload: FormFields }) {},
    getTransactions(_, { payload }: { payload: string }) {},
  },
})

export const {
  setTransactions,
  setDataStatus,
  setWalletAddress,
  sendTransaction,
  getTransactions,
} = web3Slice.actions

export default web3Slice.reducer
