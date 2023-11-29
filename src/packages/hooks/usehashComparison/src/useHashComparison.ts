import { useRef } from 'react'
import { simpleHash } from '@pi-lib/utils'

/**
 * A quick way to see if an object has been changed or just rebuilt
 * @param values the values to be compared
 * @returns the latest hash code
 */
export const useHashComparison = (...values: unknown[]) => {
  const newCode = useRef<string>()
  newCode.current = simpleHash(values)
  return newCode.current
}

export default useHashComparison
