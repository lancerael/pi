export type Status = 'default' | 'pending' | 'error' | 'success'

export interface TestId {
  /**
   * The data-testid for the component used for testing
   */
  dataTestid?: string
}
