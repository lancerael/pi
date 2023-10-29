import { useCallback, useEffect, useRef, useState } from 'react'
import { StyledContent, StyledStar, StyledStellar } from './Stellar.style'
import { Coords, Star, StellarProps } from './Stellar.types'
import { makeStar, makeStars, moveStar, scatter } from './Stellar.helpers'
import { useThrottledEvents } from '@pi-lib/utils'
import { throttle } from '@pi-lib/utils'

/**
 * A spacefaring scene that takes you through the stars.
 */
export const Stellar = ({ starCount = 100, children }: StellarProps) => {
  const [stars, setStars] = useState<Star[]>([])
  const dimensions = useRef<Coords>([0, 0])
  const target = useRef<Coords>([0, 0])
  const stellarRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const moveTimeout = useRef<NodeJS.Timeout>()
  const lastScroll = useRef(0)

  const updateDimensions = useCallback(() => {
    if (!stellarRef.current) return
    const { clientWidth, clientHeight } = stellarRef.current
    dimensions.current = [clientWidth, clientHeight]
    target.current = [clientWidth / 2, clientHeight / 2]
  }, [stellarRef.current])

  useThrottledEvents(updateDimensions)

  useEffect(() => {
    if (!stellarRef.current) return
    updateDimensions()
    setStars(makeStars(starCount, dimensions.current))
    setInterval(() => {
      if (!stars.length) return
      setStars((stars) => {
        // Move the stars
        const newStars = stars.map((star: Star) => {
          return moveStar(star, target.current)
        })
        // Add a new one
        newStars.push(makeStar(dimensions.current))
        // Remove the ones off screen
        return newStars.filter(({ age }) => age < 50)
      })
    }, 100)
  }, [stellarRef.current])

  useEffect(() => {
    if (!contentRef.current) return
    const scroll = throttle((e) => {
      setStars((stars) => {
        if (!contentRef.current) return stars
        const offset = (contentRef.current.scrollTop - lastScroll.current) / 10
        lastScroll.current = contentRef.current.scrollTop
        return [
          ...stars.map(({ coords: [left, top], age, ...star }: Star) => {
            return {
              coords: [left, top - offset * age] as Coords,
              age,
              ...star,
            }
          }),
          makeStar(dimensions.current),
        ]
      })
    }, 100)
    const mouseMove = throttle(({ clientX, clientY }: MouseEvent) => {
      target.current = [clientX, clientY]
      clearTimeout(moveTimeout.current)

      setStars((stars) => {
        return [...stars, makeStar(dimensions.current, scatter(target.current))]
      })

      moveTimeout.current = setTimeout(() => {
        updateDimensions()
      }, 3000)
    }, 250)
    contentRef.current.addEventListener('scroll', scroll)
    contentRef.current.addEventListener('mousemove', mouseMove)
    return () => {
      contentRef.current?.removeEventListener('scroll', scroll)
      contentRef.current?.removeEventListener('mousemove', mouseMove)
    }
  }, [contentRef.current])

  return (
    <StyledStellar ref={stellarRef}>
      <div
        style={{
          position: 'absolute',
          left: `${target.current[0]}px`,
          top: `${target.current[1]}px`,
        }}
      >
        {/* {stars.length} */}
      </div>
      {/* {target.current[0]} {target.current[1]} */}
      {stars.map(({ id, coords: [left, top], age, color }, i) => (
        <StyledStar
          key={id}
          color={color}
          style={{
            top: `${top}px`,
            left: `${left}px`,
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
