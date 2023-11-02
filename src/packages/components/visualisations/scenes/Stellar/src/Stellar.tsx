import { useCallback, useEffect, useRef, useState } from 'react'
import { StyledContent, StyledStar, StyledStellar } from './Stellar.style'
import { Coords, Star, StellarProps } from './Stellar.types'
import { makeStar, makeStars, moveStar, randomNumber } from './Stellar.helpers'
import { useFramerate, useThrottledEvents } from '@pi-lib/utils'

const FPS_CUTOFF = 45

/**
 * A spacefaring scene that takes you through the stars.
 */
export const Stellar = ({ starCount = 10, children }: StellarProps) => {
  const [stars, setStars] = useState<Star[]>([])
  const dimensions = useRef<Coords>([0, 0])
  const target = useRef<Coords>([0, 0])
  const stellarRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const moveTimeout = useRef<NodeJS.Timeout>()
  const lastScroll = useRef(0)
  const starTracker = useRef<Star[]>([])
  const framerate = useFramerate()

  const updateDimensions = useCallback(() => {
    if (!stellarRef.current) return
    const { clientWidth, clientHeight } = stellarRef.current
    dimensions.current = [clientWidth, clientHeight]
    target.current = [clientWidth / 2, clientHeight / 2]
  }, [])

  const scroll = useCallback(() => {
    if (!contentRef.current) return
    const offset = (contentRef.current.scrollTop - lastScroll.current) / 10
    lastScroll.current = contentRef.current.scrollTop
    starTracker.current = starTracker.current.map(
      ({ coords: [left, top], age, ...star }: Star) => {
        return {
          coords: [left, top - offset * age] as Coords,
          age,
          ...star,
        }
      }
    )
  }, [])

  const starSpawm = useCallback(
    ({ clientX, clientY }: MouseEvent, isBurst: boolean) => {
      target.current = [clientX, clientY]
      clearTimeout(moveTimeout.current)

      if (framerate.current < FPS_CUTOFF) return

      starTracker.current = [
        ...starTracker.current,
        ...makeStars(
          isBurst ? randomNumber(1, 5) : 1,
          dimensions.current,
          target.current
        ),
      ]

      moveTimeout.current = setTimeout(() => {
        updateDimensions()
      }, 3000)
    },
    []
  )

  useThrottledEvents(updateDimensions)
  useThrottledEvents(scroll, ['scroll'], false, contentRef.current, 50)
  useThrottledEvents(
    (e) => starSpawm(e, false),
    ['pointermove'],
    false,
    contentRef.current
  )
  useThrottledEvents(
    (e) => starSpawm(e, true),
    ['pointerup'],
    false,
    contentRef.current
  )

  useEffect(() => {
    if (!stellarRef.current) return
    updateDimensions()
    starTracker.current = makeStars(starCount, dimensions.current)
    setInterval(() => {
      if (!starTracker.current.length) return
      starTracker.current = starTracker.current
        .map((star: Star) => {
          return moveStar(star, target.current)
        })
        .filter(({ age }) => age < 35)
      starTracker.current.push(makeStar(dimensions.current))
      setStars(starTracker.current)
    }, 200)
  }, [stellarRef.current])

  return (
    <StyledStellar ref={stellarRef}>
      {Math.round(framerate.current)}
      {/* <div
        style={{
          position: 'absolute',
          left: `${target.current[0]}px`,
          top: `${target.current[1]}px`,
        }}
      >
        {stars.length}
      </div> */}
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
