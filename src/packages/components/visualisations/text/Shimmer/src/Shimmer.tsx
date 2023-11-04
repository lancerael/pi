import { useEffect, useState } from 'react'
import { StyledLine, StyledShimmer } from './Shimmer.style'
import { ShimmerProps } from './Shimmer.types'

/**
 * Shimmer component to create a shimmering effect over a series of lines.
 * The component cycles through each line, making one line visible at a time in a loop.
 *
 * @param {ShimmerProps} props - The props for the Shimmer component.
 * @param {Array<string>} props.lines - An array of strings that represent each line's content.
 * @returns {JSX.Element} The Shimmer effect with cycling visibility over the provided lines.
 */
export const Shimmer = ({ lines }: ShimmerProps) => {
  const [visibleLine, setVisibleLine] = useState(0)
  useEffect(() => {
    const linesInterval = setInterval(() => {
      setVisibleLine((currentLine) => {
        if (lines.length - 1 - currentLine) return currentLine + 1
        return 0
      })
    }, 5000)
    return () => clearInterval(linesInterval)
  }, [])
  return (
    <StyledShimmer>
      {lines.map((line, i) => (
        <StyledLine
          key={i}
          isVisible={visibleLine === i}
          data-content={line}
          data-testid={line}
        />
      ))}
    </StyledShimmer>
  )
}

export default Shimmer
