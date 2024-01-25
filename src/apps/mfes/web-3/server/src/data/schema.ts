import { gql } from 'graphql-tag'
import { FIELD_LIST } from './constants'

const dataFields = FIELD_LIST.map((field) => `    ${field}: String!`).join('\n')

export const schema = gql`
  type Transaction {
    ${dataFields}
  }

  type Query {
    getTransaction(hash: String!): Transaction
    getTransactions(from: String!): [Transaction!]!
  }

  type Mutation {
    addTransaction(transaction: TransactionInput!): Transaction!
  }

  input TransactionInput {
    ${dataFields}
  }
`
