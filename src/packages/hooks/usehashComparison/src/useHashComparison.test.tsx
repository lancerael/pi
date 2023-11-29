import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import useHashComparison from './useHashComparison'

// Mock @pi-lib/utils
vi.mock('@pi-lib/utils', () => {
  return {
    simpleHash: vi.fn((value) => value.toString()),
  }
})

describe('useHashComparison', () => {
  // Test case 1: Initial render
  it('should return the initial hash code', () => {
    const { result } = renderHook(() => useHashComparison('initialValue'))

    expect(result.current).toBe('initialValue')
  })

  // Test case 2: Value change
  it('should return the updated hash code after value change', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useHashComparison(value),
      {
        initialProps: { value: 'initialValue' },
      }
    )

    // Initial render
    expect(result.current).toBe('initialValue')

    // Update the value and rerender
    rerender({ value: 'updatedValue' })

    // Assert the updated hash code
    expect(result.current).toBe('updatedValue')
  })

  // Test case 3: No change
  it('should return the same hash code if value remains unchanged', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useHashComparison(value),
      {
        initialProps: { value: 'initialValue' },
      }
    )

    // Initial render
    expect(result.current).toBe('initialValue')

    // Rerender with the same value
    rerender({ value: 'initialValue' })

    // Assert the hash code remains the same
    expect(result.current).toBe('initialValue')
  })
})
