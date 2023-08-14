import { useRef } from 'react'
import { simpleHash } from '../methods/simpleHash'

/**
 * A quick way to see if an object has been changed or just rebuilt
 * @param value the value to be compared
 * @returns
 */
export const useHashComparison = (value: unknown) => {
  const newCode = useRef<string>()
  newCode.current = simpleHash(value)
  return newCode.current
}
