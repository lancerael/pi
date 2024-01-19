import { createSlice } from '@reduxjs/toolkit'
import { FormFields, Transactions, Web3AppState } from './web3reducer.types'

const initialState: Web3AppState = {
  transactions: [],
  appStatus: {
    transactions: '',
    transaction: '',
  },
  walletAddress: '',
}

const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    setTransactions(
      state: Web3AppState,
      { payload }: { payload: Transactions }
    ) {
      return { ...state, transactions: structuredClone(payload) }
    },
    setAppStatus(
      state: Web3AppState,
      { payload }: { payload: Partial<Web3AppState['appStatus']> }
    ) {
      return { ...state, appStatus: { ...state.appStatus, ...payload } }
    },
    setWalletAddress(state: Web3AppState, { payload }: { payload: string }) {
      return { ...state, walletAddress: payload }
    },
    sendTransaction(state: Web3AppState, _: { payload: FormFields }) {
      return state
    },
  },
})

export const {
  setTransactions,
  setAppStatus,
  setWalletAddress,
  sendTransaction,
} = web3Slice.actions

export default web3Slice.reducer
