export interface IOption {
  /**
   * Visible content for the option
   */
  content: string
  /**
   * A value for the option
   */
  value?: string
}

export interface SelectProps
  extends Pick<
    React.HTMLProps<HTMLSelectElement>,
    | 'onChange'
    | 'onClick'
    | 'onMouseOver'
    | 'onMouseOut'
    | 'title'
    | 'value'
    | 'name'
  > {
  /**
   * A label for the select input
   */
  label?: string
  /**
   * A list of options
   */
  options: IOption[]
}
