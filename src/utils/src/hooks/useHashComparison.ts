import { useRef } from 'react'
import { hashCode } from '../methods/hashCode'

/**
 * Used to tell if an object has changed, ot just rebuilt.
 * Useful for performance enhancements when used in useEffect etc
 * @param value the value to be compared
 * @returns
 */
export const useHashComparison = (value: unknown) => {
  const newCode = useRef<string>()
  newCode.current = hashCode(JSON.stringify(value))
  return newCode.current
}
