export interface TextInputProps {
  /**
   * The description of the prop
   */
  title: string
  longTitle?: string
  value: string
  onChange: (args: any) => void
}
