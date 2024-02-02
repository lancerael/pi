import { FIELD_LIST } from '../constants'
import { gql } from '@apollo/client'

const dataFields = FIELD_LIST.map((field) => `  ${field}`).join('\n')

export const PutTransaction = gql`
  mutation PutTransaction($transaction: TransactionInput!) {
    addTransaction(transaction: $transaction) {
      hash
    }
  }
`

export const GetTransaction = gql`
  query GetTransaction($hash: String!) {
    getTransaction(hash: $hash) {
      ${dataFields}
    }
  }
`

export const GetTransactions = gql`
  query GetTransactions($from: String!) {
    getTransactions(from: $from) {
      ${dataFields}
    }
  }
`
