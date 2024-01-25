import { Transaction } from './model'

interface TransactionQueryArgs {
  from: 'string'
}

interface TransactionMutationArgs {
  transaction: 'string'
}

export const resolvers = {
  Query: {
    getTransactions: async (_: any, { from }: TransactionQueryArgs) => {
      return await Transaction.find({ from })
    },
  },
  Mutation: {
    addTransaction: async (
      _: any,
      { transaction }: TransactionMutationArgs
    ) => {
      const newTransaction = new Transaction(transaction)
      await newTransaction.save()
      return newTransaction
    },
  },
}
