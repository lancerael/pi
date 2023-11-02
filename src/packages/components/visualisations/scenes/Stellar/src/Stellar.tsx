import { useCallback, useEffect, useRef, useState } from 'react'
import { StyledContent, StyledStar, StyledStellar } from './Stellar.style'
import { Coords, Star, StellarProps } from './Stellar.types'
import { makeStar, makeStars, moveStar, randomNumber } from './Stellar.helpers'
import { useFramerate, useThrottledEvents } from '@pi-lib/utils'

const FPS_CUTOFF = 45

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
  const framerate = useFramerate()

  const updateDimensions = useCallback(() => {
    if (!stellarRef.current) return
    const { clientWidth, clientHeight } = stellarRef.current
    dimensions.current = [clientWidth, clientHeight]
    target.current = [clientWidth / 2, clientHeight / 2]
  }, [stellarRef.current])

  const scroll = useCallback(() => {
    setStars((stars) => {
      if (!contentRef.current) return stars
      const offset = (contentRef.current.scrollTop - lastScroll.current) / 10
      lastScroll.current = contentRef.current.scrollTop
      const newStars = stars.map(
        ({ coords: [left, top], age, ...star }: Star) => {
          return {
            coords: [left, top - offset * (age / 2)] as Coords,
            age,
            ...star,
          }
        }
      )
      if (framerate.current > FPS_CUTOFF) {
        newStars.push(makeStar(dimensions.current))
      }
      return newStars
    })
  }, [])

  const starSpawm = useCallback(
    ({ clientX, clientY }: MouseEvent, isBurst: boolean) => {
      target.current = [clientX, clientY]
      clearTimeout(moveTimeout.current)

      if (framerate.current < FPS_CUTOFF) return

      const upperRandom = Math.floor(framerate.current / 30)

      setStars((stars) => {
        return [
          ...stars,
          ...makeStars(
            isBurst ? randomNumber(1, upperRandom || 1) : 1,
            dimensions.current,
            target.current
          ),
        ]
      })

      moveTimeout.current = setTimeout(() => {
        updateDimensions()
      }, 3000)
    },
    [framerate]
  )

  useThrottledEvents(updateDimensions)
  useThrottledEvents(scroll, ['scroll'], false, contentRef.current)
  useThrottledEvents(
    (e) => starSpawm(e, false),
    ['pointermove'],
    false,
    contentRef.current,
    500
  )
  useThrottledEvents(
    (e) => starSpawm(e, true),
    ['pointerdown'],
    false,
    contentRef.current
  )

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

  return (
    <StyledStellar ref={stellarRef}>
      {framerate.current}
      {stars.map(({ id, coords: [left, top], age, color }, i) => (
        <StyledStar
          key={id}
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
