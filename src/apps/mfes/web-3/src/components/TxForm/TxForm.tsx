import Input from '@pi-lib/input'
import { FormInputs, TxFormProps } from './TxForm.types'
import Button from '@pi-lib/button'

const TxForm = ({ formInputs, setFormInputs, onSubmit }: TxFormProps) => {
  return (
    <form
      {...{ onSubmit }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      {Object.entries(formInputs).map(
        ([
          name,
          { type, value, match, title, isRequired, isEditable = true },
        ]) => {
          return (
            <Input
              disabled={!isEditable}
              key={name}
              {...{ name, title, type, value }}
              onChange={({ currentTarget: { value } }) =>
                isEditable &&
                setFormInputs(
                  (inputs: FormInputs): FormInputs => ({
                    ...inputs,
                    [name]: {
                      type,
                      value,
                      match,
                      title,
                      isRequired,
                      isEditable,
                      isValid:
                        (!isRequired || !!value) &&
                        (!match || !!value.match(match)),
                    },
                  })
                )
              }
            />
          )
        }
      )}
      <Button
        type="submit"
        disabled={!Object.values(formInputs).every(({ isValid }) => isValid)}
      >
        Submit
      </Button>
    </form>
  )
}

export default TxForm
