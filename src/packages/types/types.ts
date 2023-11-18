export type Status = 'default' | 'pending' | 'error' | 'success'

export interface TestId {
  /**
   * The data-selector for the component
   */
  dataTestid?: string
}
