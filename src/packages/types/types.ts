export type Status = 'default' | 'pending' | 'error' | 'success'

export interface TestProp {
  /**
   * The data-selector for the component
   */
  dataTestid?: string
}
