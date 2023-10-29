import { useRef } from 'react'
import { simpleHash } from '../helpers/simpleHash'

/**
 * A quick way to see if an object has been changed or just rebuilt
 * @param value the value to be compared
 * @returns the latest hash code
 */
export const useHashComparison = (value: unknown) => {
  const newCode = useRef<string>()
  newCode.current = simpleHash(value)
  return newCode.current
}
