import { Dispatch, FormEvent, SetStateAction } from 'react'

export interface FormInput {
  value: string
  type?: string
  match?: RegExp
  title?: string
  placeholder?: string
  isRequired?: boolean
  isEditable?: boolean
  isValid?: boolean
}

export type FormInputs = Record<string, FormInput>

export interface TxFormProps {
  formInputs: FormInputs
  setFormInputs: Dispatch<SetStateAction<FormInputs>>
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
