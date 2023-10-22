import { useEffect, useRef, useState } from 'react'
import { StyledStar, StyledStellar } from './Stellar.style'
import { Coords, Star, StellarProps } from './Stellar.types'
import { colorStar, makeStar, makeStars, moveStar } from './Stellar.helpers'

/**
 *
 * @returns
 */
export const Stellar = ({ starCount = 100 }: StellarProps) => {
  const [dimensions, setDimensions] = useState<Coords>([0, 0])
  const [stars, setStars] = useState<Star[]>([])
  const stellarRef = useRef(null)
  const hasAnimationStarted = useRef(false)
  const [width, height] = dimensions

  useEffect(() => {
    if (!stellarRef.current) return
    const { clientWidth, clientHeight } = stellarRef.current
    setDimensions([clientWidth, clientHeight])
  }, [stellarRef.current])

  useEffect(() => {
    if (!width || !height || stars.length) return
    setStars(makeStars(starCount, dimensions))
  }, [dimensions])

  useEffect(() => {
    if (hasAnimationStarted.current || !stars.length) return
    setTimeout(() => {
      setInterval(() => {
        if (!stars.length) return
        setStars((stars) => {
          // Move the stars
          const newStars = stars.map(({ id, coords }: Star) => {
            return {
              id,
              ...moveStar(coords, dimensions),
            }
          })
          // Add a new one
          newStars.push(makeStar(dimensions))
          // And remove the ones off screen
          return newStars.filter(
            ({ coords: [left, top] }) =>
              top > 0 && top < height && left > 0 && left < width
          )
        })
      }, 50)
    })
    hasAnimationStarted.current = true
  }, [stars])

  return (
    <StyledStellar ref={stellarRef}>
      {stars.length}
      {stars.map(({ id, coords: [left, top], radius }, i) => (
        <StyledStar
          key={id}
          style={{
            top: `${top}px`,
            left: `${left}px`,
            color: colorStar([left, top], dimensions),
            width: `${radius / 100}px`,
            height: `${radius / 100}px`,
          }}
        >
          {/* . {radius} */}
        </StyledStar>
      ))}
    </StyledStellar>
  )
}

export default Stellar
