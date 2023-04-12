export interface InputProps
  extends Pick<
    React.HTMLProps<HTMLInputElement>,
    | 'onChange'
    | 'onClick'
    | 'onMouseOver'
    | 'onMouseOut'
    | 'title'
    | 'value'
    | 'name'
  > {
  /**
   * A longer title for the browser tooltip
   */
  longTitle?: string
  /**
   * A type for the input
   */
  type?: 'text' | 'number' | 'color'
}
