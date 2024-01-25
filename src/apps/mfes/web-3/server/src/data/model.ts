import mongoose from 'mongoose'
import { FIELD_LIST } from './constants'

export const Transaction = mongoose.model(
  'Transaction',
  new mongoose.Schema(
    FIELD_LIST.reduce(
      (schema, field: string) => ({ ...schema, [field]: String }),
      {}
    )
  )
)
