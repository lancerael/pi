export interface IOption {
  content: string
  value?: string
}

export interface SelectProps {
  label?: string
  name?: string
  onChange: (e: any) => void
  options: IOption[]
}
