/**
 * The main prop interface for the component
 */
export interface SelectProps
  extends Pick<
    React.HTMLProps<HTMLSelectElement>,
    | 'onChange'
    | 'onPointerUp'
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
  options: SelectOption[]
}

/**
 * The details of each individual option
 */
export interface SelectOption {
  /**
   * Visible content for the option
   */
  content: string
  /**
   * A value for the option
   */
  value?: string
}
