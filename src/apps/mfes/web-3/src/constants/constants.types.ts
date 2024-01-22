import { FormInput, FormInputs } from '../components/TxForm/TxForm.types'

export interface FormDefaults extends FormInputs {
  from: FormInput
  to: FormInput
  value: FormInput
}
