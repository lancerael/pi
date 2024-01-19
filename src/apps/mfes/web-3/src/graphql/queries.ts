import { gql } from '@apollo/client'

const dataFields = `
      to
      from
      value
      data
      chainId
      gasLimit
      gasPrice
      hash
`

export const PutTransaction = gql`
  mutation PutTransaction($transaction: TransactionInput!) {
    putTransaction(transaction: $transaction) {
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
