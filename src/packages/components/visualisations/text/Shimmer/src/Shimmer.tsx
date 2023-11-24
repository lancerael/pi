import { useEffect, useState } from 'react'
import { StyledLine, StyledShimmer } from './Shimmer.style'
import { ShimmerProps } from './Shimmer.types'

/**
 * Shimmer component to create a shimmering effect over a series of lines.
 * The component cycles through each line, making one line visible at a time in a loop,
 * or in a fade manner depending on the behavior prop.
 *
 * @param {ShimmerProps} props - The props for the Shimmer component.
 * @returns {JSX.Element} A styled shimmer effect wrapping each provided line.
 */
export const Shimmer = ({
  lines,
  delay = 1000,
  pause = 5000,
  holdFirst = pause,
  fadeTime = 500,
  behaviour = 'loop',
  callback = () => {},
}: ShimmerProps) => {
  const [visibleLine, setVisibleLine] = useState(-1)

  const progressLines = () => {
    setVisibleLine((currentLine) => {
      const nextLine = currentLine + 1
      if (behaviour === 'loop' || nextLine < lines.length)
        return nextLine % lines.length
      requestAnimationFrame(callback)
      if (behaviour === 'fade') return nextLine
      return currentLine
    })
  }

  useEffect(() => {
    let linesPause: NodeJS.Timeout
    let firstLineDelay: NodeJS.Timeout
    const initDelay = setTimeout(() => {
      progressLines()
      firstLineDelay = setTimeout(() => {
        linesPause = setInterval(progressLines, pause)
      }, holdFirst)
    }, delay)
    return () => {
      clearTimeout(initDelay)
      clearTimeout(firstLineDelay)
      clearInterval(linesPause)
    }
  }, [lines, delay, pause, behaviour])

  return (
    <StyledShimmer>
      {lines.map((line, i) => (
        <StyledLine
          key={i}
          $isVisible={visibleLine === i}
          $holdTime={i === 0 ? holdFirst : pause}
          $fadeTime={fadeTime}
          data-content={line}
          data-testid={line}
        />
      ))}
    </StyledShimmer>
  )
}

export default Shimmer
