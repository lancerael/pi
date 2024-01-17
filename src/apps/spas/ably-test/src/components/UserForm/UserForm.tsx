import Input from '@pi-lib/input'

const UserForm = ({ formInputs, setFormInputs }) => {
  return (
    <>
      {Object.keys(formInputs).map((inputName: string) => {
        return (
          <Input
            key={inputName}
            title={inputName}
            name={inputName}
            type={inputName === 'username' ? 'text' : inputName}
            value={formInputs[inputName]}
            onChange={(e) =>
              setFormInputs((inputs: typeof formInputs) => ({
                ...inputs,
                [inputName]: (e.target as HTMLInputElement).value,
              }))
            }
          />
        )
      })}
    </>
  )
}

export default UserForm
