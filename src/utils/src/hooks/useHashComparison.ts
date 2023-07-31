import { useRef } from 'react'
import { hashCode } from '../methods/hashCode'

/**
 * A quick way to see if an object has been changed or just rebuilt
 * @param value the value to be compared
 * @returns
 */
export const useHashComparison = (value: unknown) => {
  const newCode = useRef<string>()
  newCode.current = hashCode(value)
  return newCode.current
}
