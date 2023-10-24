import { useEffect, useRef, useState } from 'react'
import { StyledContent, StyledStar, StyledStellar } from './Stellar.style'
import { Coords, Star, StellarProps } from './Stellar.types'
import { colorStar, makeStar, makeStars, moveStar } from './Stellar.helpers'
import { useThrottledWindowEvents } from '@pi-lib/utils'
import throttle from 'lodash.throttle'

/**
 *
 * @returns
 */
export const Stellar = ({ starCount = 100, children }: StellarProps) => {
  const [stars, setStars] = useState<Star[]>([])
  const dimensions = useRef<Coords>([0, 0])
  const stellarRef = useRef(null)
  const contentRef = useRef(null)
  const lastScroll = useRef(0)

  const updateDimensions = () => {
    const { clientWidth, clientHeight } = stellarRef.current
    dimensions.current = [clientWidth, clientHeight]
  }

  useThrottledWindowEvents(updateDimensions)

  useEffect(() => {
    if (!stellarRef.current) return
    updateDimensions()
    setStars(makeStars(starCount, dimensions.current))
    setInterval(() => {
      if (!stars.length) return
      setStars((stars) => {
        // Move the stars
        const newStars = stars.map((star: Star) =>
          moveStar(star, dimensions.current)
        )
        // Add a new one
        newStars.push(makeStar(dimensions.current))
        // Remove the ones off screen
        const overlap = 200
        const [width, height] = dimensions.current
        return newStars.filter(
          ({ coords: [left, top] }) =>
            top > -overlap &&
            top < height + overlap &&
            left > -overlap &&
            left < width + overlap
        )
      })
    }, 100)
  }, [stellarRef.current])

  useEffect(() => {
    if (!contentRef.current) return
    const scroll = throttle((e) => {
      setStars((stars) => {
        const offset = contentRef.current.scrollTop - lastScroll.current
        lastScroll.current = contentRef.current.scrollTop
        return [
          ...stars.map(({ coords: [left, top], ...star }: Star) => {
            return {
              coords: [left, top - offset] as Coords,
              ...star,
            }
          }),
          makeStar(dimensions.current),
        ]
      })
    }, 200)
    contentRef.current.addEventListener('scroll', scroll)
    return () => contentRef.current.removeEventListener('scroll', scroll)
  }, [contentRef.current])

  return (
    <StyledStellar ref={stellarRef}>
      {stars.map(({ id, coords: [left, top], age, color }, i) => (
        <StyledStar
          key={id}
          color={color}
          style={{
            top: `${top}px`,
            left: `${left}px`,
            color: colorStar([left, top], dimensions.current),
            background: color,
            boxShadow: `0px 0px 10px 1px ${color}`,
            width: `${age / 2.5}px`,
            height: `${age / 2.5}px`,
            opacity: age ? 1 - age / 30 : 0,
          }}
        >
          {/* . {age} */}
        </StyledStar>
      ))}
      <StyledContent ref={contentRef}>{children}</StyledContent>
    </StyledStellar>
  )
}

export default Stellar
