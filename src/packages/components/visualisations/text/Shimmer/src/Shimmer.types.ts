export interface ShimmerProps {
  /**
   * The lines of text to be animated.
   */
  lines: string[]
  /**
   * The delay before the animation starts
   */
  delay?: number
  /**
   * The pause between each transition
   */
  pause?: number
  /**
   * The type of looping behaviour
   *  - loop - loop forever
   *  - linger - stay on the last item
   *  - fade - fade the last item to nothing
   */
  behaviour?: 'loop' | 'linger' | 'fade'
  /**
   * The action to fire on completion
   */
  callback?: () => void
}
