export interface TextInputProps {
  /**
   * The description of the prop
   */
  title?: string
  longTitle?: string
  value: string
  type?: 'text' | 'number' | 'color'
  onChange: (args: any) => void
}
